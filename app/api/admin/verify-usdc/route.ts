import { createServerClient } from '@/lib/supabase/server-client'
import { createSupabaseAdmin } from '@/lib/supabase/admin'
import { verifyUSDCPayment } from '@/lib/solana'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // Get user session
    const supabase = await createServerClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check admin whitelist
    const adminIds = (process.env.ADMIN_USER_IDS || "")
      .split(",")
      .map(s => s.trim())
      .filter(Boolean)
    
    if (!adminIds.includes(user.id)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Use admin client (bypass RLS)
    const adminClient = createSupabaseAdmin()

    // Get pending USDC invoices
    const { data: invoices, error } = await adminClient
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
    let paidCount = 0
    let errorCount = 0

    // Verify each invoice
    for (const invoice of invoices) {
      try {
        const verification = await verifyUSDCPayment(invoice)

        if (verification.valid) {
          // Update invoice status to paid using admin client
          const { error: updateError } = await adminClient
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
            errorCount++
            continue
          }

          // Create audit log using admin client
          await adminClient
            .from('tpc_audit_logs')
            .insert({
              invoice_id: invoice.id,
              action: 'admin_verify_payment',
              old_status: 'pending',
              new_status: 'paid',
              actor_id: user.id
            })

          // TODO: Trigger referral commission
          // await processReferralCommission(invoice)

          results.push({
            invoiceId: invoice.id,
            status: 'verified',
            signature: verification.signature,
            amount: verification.amount
          })
          paidCount++
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
        errorCount++
      }
    }

    return NextResponse.json({ 
      ok: true,
      checked: invoices.length,
      paid: paidCount,
      errors: errorCount,
      results
    })

  } catch (error) {
    console.error('Admin verify USDC error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
