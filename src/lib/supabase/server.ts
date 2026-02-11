import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, ...options }) => {
            cookieStore.set(name, value)
          })
        },
      },
    }
  )
}

export async function getUser() {
  const supabase = await createClient()
  try {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  } catch (error) {
    console.error('Error getting user:', error)
    return null
  }
}

// Helper untuk admin check via ENV (jika project pakai ADMIN_USER_IDS)
export async function isAdminByEnv(userId: string): Promise<boolean> {
  const adminUserIds = process.env.ADMIN_USER_IDS;
  if (!adminUserIds) return false;
  
  const adminIds = adminUserIds.split(',').map(id => id.trim()).filter(id => id.length > 0);
  return adminIds.includes(userId);
}
