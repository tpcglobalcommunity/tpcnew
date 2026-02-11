import { createServerClient } from '@/lib/supabase/server-client'

export async function GET(
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

    const { data: invoice, error } = await supabase
      .from('tpc_invoices')
      .select('*')
      .eq('id', params.id)
      .eq('user_id', user.id)
      .single()

    if (error || !invoice) {
      return Response.json({ error: 'Invoice tidak ditemukan' }, { status: 404 })
    }

    return Response.json({ invoice })

  } catch (error) {
    console.error('Invoice detail error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
