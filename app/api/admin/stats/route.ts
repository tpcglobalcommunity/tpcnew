import { createServerClient } from '@/lib/supabase/server-client'
import { createSupabaseAdmin } from '@/lib/supabase/admin'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const supabase = await createServerClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check admin access
    const adminUserIds = process.env.ADMIN_USER_IDS
    if (!adminUserIds || !adminUserIds.split(',').map(id => id.trim()).includes(user.id)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const adminClient = createSupabaseAdmin()

    // Get stats
    const today = new Date().toISOString().split('T')[0]
    
    const [pendingResult, expiredTodayResult, paidTodayResult] = await Promise.all([
      adminClient
        .from('tpc_invoices')
        .select('id', { count: 'exact' })
        .eq('status', 'pending'),
      
      adminClient
        .from('tpc_invoices')
        .select('id', { count: 'exact' })
        .eq('status', 'expired')
        .gte('updated_at', today),
      
      adminClient
        .from('tpc_invoices')
        .select('id', { count: 'exact' })
        .eq('status', 'paid')
        .gte('updated_at', today)
    ])

    const stats = {
      pendingCount: pendingResult.count || 0,
      expiredTodayCount: expiredTodayResult.count || 0,
      paidTodayCount: paidTodayResult.count || 0
    }

    return NextResponse.json({ stats })

  } catch (error) {
    console.error('Admin stats error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
