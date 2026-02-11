import { createServerClient } from '@/lib/supabase/server-client'

export async function POST(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params
    const supabase = await createServerClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check admin access
    const adminUserIds = process.env.ADMIN_USER_IDS
    if (!adminUserIds || !adminUserIds.split(',').map(id => id.trim()).includes(user.id)) {
      return Response.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Get invoice
    const { data: invoice, error: fetchError } = await supabase
      .from('tpc_invoices')
      .select('*')
      .eq('id', params.id)
      .single()

    if (fetchError || !invoice) {
      return Response.json({ error: 'Invoice tidak ditemukan' }, { status: 404 })
    }

    if (invoice.status === 'void') {
      return Response.json({ error: 'Invoice sudah void' }, { status: 400 })
    }

    // Update invoice status
    const { error: updateError } = await supabase
      .from('tpc_invoices')
      .update({ status: 'void' })
      .eq('id', params.id)

    if (updateError) {
      console.error('Void invoice error:', updateError)
      return Response.json({ error: 'Gagal void invoice' }, { status: 500 })
    }

    // Create audit log
    await supabase
      .from('tpc_audit_logs')
      .insert({
        invoice_id: params.id,
        action: 'admin_void',
        old_status: invoice.status,
        new_status: 'void',
        actor_id: user.id
      })

    return Response.json({ 
      message: 'Invoice berhasil di-void',
      invoiceId: params.id
    })

  } catch (error) {
    console.error('Void invoice error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
