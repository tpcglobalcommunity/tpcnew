import { createSupabaseAdmin } from '@/lib/supabase/admin'
import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_SECRET = process.env.SYSTEM_SECRET

export async function POST(request: NextRequest) {
  try {
    // Verify system secret
    const systemSecret = request.headers.get('x-system-secret')
    if (systemSecret !== SYSTEM_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const adminClient = createSupabaseAdmin()

    // Get invoices that need to expire
    const { data: invoices, error } = await adminClient
      .from('tpc_invoices')
      .select('*')
      .in('status', ['pending', 'draft'])
      .lt('expires_at', new Date().toISOString())

    if (error) {
      console.error('Fetch expired invoices error:', error)
      return NextResponse.json({ error: 'Gagal mengambil invoice' }, { status: 500 })
    }

    const results = []

    // Update each invoice to expired
    for (const invoice of invoices) {
      try {
        const { error: updateError } = await adminClient
          .from('tpc_invoices')
          .update({ status: 'expired' })
          .eq('id', invoice.id)

        if (updateError) {
          console.error('Update expired invoice error:', updateError)
          results.push({
            invoiceId: invoice.id,
            status: 'error',
            error: 'Gagal update invoice'
          })
          continue
        }

        // Create audit log
        await adminClient
          .from('tpc_audit_logs')
          .insert({
            invoice_id: invoice.id,
            action: 'system_expire',
            old_status: invoice.status,
            new_status: 'expired',
            actor_id: 'system',
            meta: {
              expires_at: invoice.expires_at
            }
          })

        results.push({
          invoiceId: invoice.id,
          status: 'expired',
          oldStatus: invoice.status
        })

      } catch (error) {
        console.error('Expire invoice error for', invoice.id, error)
        results.push({
          invoiceId: invoice.id,
          status: 'error',
          error: 'Expire failed'
        })
      }
    }

    return NextResponse.json({
      message: 'Expire process selesai',
      processed: invoices.length,
      expired: results.filter(r => r.status === 'expired').length,
      errors: results.filter(r => r.status === 'error').length,
      results
    })

  } catch (error) {
    console.error('Expire invoices error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
