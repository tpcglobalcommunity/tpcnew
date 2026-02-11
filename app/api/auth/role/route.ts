import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('sb-access-token')?.value

    // If no session, return guest (not 401)
    if (!token) {
      return NextResponse.json({
        role: 'guest',
        userId: null,
        email: null
      })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const { data: { user }, error } = await supabase.auth.getUser(token)

    // If invalid session, return guest (not 401)
    if (error || !user) {
      return NextResponse.json({
        role: 'guest',
        userId: null,
        email: null
      })
    }

    // Check if user is admin via ENV
    const adminUserIds = process.env.ADMIN_USER_IDS
    let isAdmin = false

    if (adminUserIds && user.id) {
      const adminIds = adminUserIds.split(',').map(id => id.trim()).filter(id => id.length > 0)
      isAdmin = adminIds.includes(user.id)
    }

    return NextResponse.json({
      role: isAdmin ? 'admin' : 'member',
      userId: user.id,
      email: user.email
    })

  } catch (error) {
    // Always return 200 with guest role on any error
    console.error('Role check error:', error)
    return NextResponse.json({
      role: 'guest',
      userId: null,
      email: null
    })
  }
}
