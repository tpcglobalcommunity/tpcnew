import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-static';

export async function generateStaticParams() {
  // For static export, we need to generate params for all possible roles
  // Since this is a dynamic API route, we'll return empty array
  // API routes are not typically exported in static builds
  return []
}

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('sb-access-token')?.value

    if (!token) {
      return NextResponse.json(
        { error: 'No session found' },
        { status: 401 }
      )
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const { data: { user }, error } = await supabase.auth.getUser(token)

    if (error || !user) {
      return NextResponse.json(
        { error: 'Invalid session' },
        { status: 401 }
      )
    }

    // Check if user is admin
    const adminUserIds = process.env.ADMIN_USER_IDS
    let isAdmin = false

    if (adminUserIds && user.id) {
      const adminIds = adminUserIds.split(',').map(id => id.trim())
      isAdmin = adminIds.includes(user.id)
    }

    return NextResponse.json({
      role: isAdmin ? 'admin' : 'member',
      userId: user.id,
      email: user.email
    })

  } catch (error) {
    console.error('Role check error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
