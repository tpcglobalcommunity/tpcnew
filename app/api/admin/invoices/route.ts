import { createServerClient } from '@/lib/supabase/server-client'

export async function GET(request: Request) {
  try {
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

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status') || 'pending'

    let query = supabase
      .from('tpc_invoices')
      .select(`
        *,
        users (
          email
        )
      `)
      .order('created_at', { ascending: false })

    if (status !== 'all') {
      query = query.eq('status', status)
    }

    const { data: invoices, error } = await query

    if (error) {
      console.error('Fetch admin invoices error:', error)
      return Response.json({ error: 'Gagal mengambil invoice' }, { status: 500 })
    }

    return Response.json({ invoices })

  } catch (error) {
    console.error('Admin invoices API error:', error)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
