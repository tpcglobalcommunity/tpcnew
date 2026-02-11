import { createServerClient } from '@/lib/supabase/server-client'
import { createSupabaseAdmin } from '@/lib/supabase/admin'
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
            action: 'admin_expire',
            old_status: invoice.status,
            new_status: 'expired',
            actor_id: user.id,
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
      ok: true,
      message: 'Expire process selesai',
      processed: invoices.length,
      expired: results.filter(r => r.status === 'expired').length,
      errors: results.filter(r => r.status === 'error').length,
      results
    })

  } catch (error) {
    console.error('Admin expire invoices error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
