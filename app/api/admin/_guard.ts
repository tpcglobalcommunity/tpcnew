import { NextResponse } from 'next/server'
import { getUser } from '@/lib/supabase/server'
import { isAdminUser } from '@/lib/admin'

export async function adminGuard() {
  // 1) Check if user is authenticated
  const user = await getUser()
  
  if (!user) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  // 2) Check if user is admin
  if (!isAdminUser(user.id)) {
    return NextResponse.json(
      { error: 'Forbidden' },
      { status: 403 }
    )
  }

  // 3) Return user data for admin operations
  return user
}
