import { supabase } from '../supabase/client'

export async function requireAuth() {
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    return null
  }
  
  return session
}
