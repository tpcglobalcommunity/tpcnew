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

        if (verification.valid && verification.signature) {
          // Anti-replay: Check if tx_signature already used
          const { data: existingTx, error: txError } = await adminClient
            .from('tpc_invoices')
            .select('id')
            .eq('tx_signature', verification.signature)
            .neq('id', invoice.id)
            .single()

          if (txError && txError.code !== 'PGRST116') {
            console.error('Check replay error:', txError)
            results.push({
              invoiceId: invoice.id,
              status: 'error',
              error: 'Gagal cek replay'
            })
            errorCount++
            continue
          }

          if (existingTx) {
            // Replay detected - block verification
            await adminClient
              .from('tpc_audit_logs')
              .insert({
                invoice_id: invoice.id,
                action: 'verify_replay_blocked',
                old_status: 'pending',
                new_status: 'pending',
                actor_id: user.id,
                meta: {
                  tx_signature: verification.signature,
                  detected_amount: verification.amount,
                  existing_invoice_id: existingTx.id
                }
              })

            results.push({
              invoiceId: invoice.id,
              status: 'replay_blocked',
              error: 'Transaction signature already used'
            })
            continue
          }

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
              action: 'verify_paid',
              old_status: 'pending',
              new_status: 'paid',
              actor_id: user.id,
              meta: {
                tx_signature: verification.signature,
                detected_amount: verification.amount
              }
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
