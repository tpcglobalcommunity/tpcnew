import { getSupabaseBrowserClient } from '../supabase/browser'

export async function requireAuth() {
  const supabase = getSupabaseBrowserClient()
  
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    return null
  }
  
  return session
}
