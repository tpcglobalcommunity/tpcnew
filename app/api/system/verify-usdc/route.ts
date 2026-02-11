import { createServerClient } from '@/lib/supabase/server-client'
import { verifyUSDCPayment } from '@/lib/solana'
import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_SECRET = process.env.SYSTEM_SECRET

export async function POST(request: NextRequest) {
  try {
    // Verify system secret
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${SYSTEM_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const supabase = await createServerClient()

    // Get pending USDC invoices
    const { data: invoices, error } = await supabase
      .from('tpc_invoices')
      .select('*')
      .eq('status', 'pending')
      .eq('method', 'USDC')
      .order('created_at', { ascending: true })

    if (error) {
      console.error('Fetch invoices error:', error)
      return NextResponse.json({ error: 'Gagal mengambil invoice' }, { status: 500 })
    }

    const results = []

    // Verify each invoice
    for (const invoice of invoices) {
      try {
        const verification = await verifyUSDCPayment(invoice)

        if (verification.valid) {
          // Update invoice status to paid
          const { error: updateError } = await supabase
            .from('tpc_invoices')
            .update({
              status: 'paid',
              tx_signature: verification.signature
            })
            .eq('id', invoice.id)

          if (updateError) {
            console.error('Update invoice error:', updateError)
            results.push({
              invoiceId: invoice.id,
              status: 'error',
              error: 'Gagal update invoice'
            })
            continue
          }

          // Create audit log
          await supabase
            .from('tpc_audit_logs')
            .insert({
              invoice_id: invoice.id,
              action: 'auto_verify_payment',
              old_status: 'pending',
              new_status: 'paid',
              actor_id: 'system'
            })

          // TODO: Trigger referral commission
          // await processReferralCommission(invoice)

          results.push({
            invoiceId: invoice.id,
            status: 'verified',
            signature: verification.signature,
            amount: verification.amount
          })
        } else {
          results.push({
            invoiceId: invoice.id,
            status: 'not_found',
            error: verification.error
          })
        }
      } catch (error) {
        console.error('Verification error for invoice', invoice.id, error)
        results.push({
          invoiceId: invoice.id,
          status: 'error',
          error: 'Verification failed'
        })
      }
    }

    return NextResponse.json({
      message: 'Verifikasi selesai',
      results,
      total: invoices.length,
      verified: results.filter(r => r.status === 'verified').length
    })

  } catch (error) {
    console.error('Verify USDC error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
