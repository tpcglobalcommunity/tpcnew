import { createServerClient } from '@/lib/supabase/server-client'

export async function GET() {
  try {
    const supabase = await createServerClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: invoices, error } = await supabase
      .from('tpc_invoices')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Fetch invoices error:', error)
      return Response.json({ error: 'Gagal mengambil invoice' }, { status: 500 })
    }

    return Response.json({ invoices })

  } catch (error) {
    console.error('Invoices API error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
