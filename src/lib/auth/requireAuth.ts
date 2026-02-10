import { supabase } from '../supabase/client'

export async function requireAuth() {
  if (!supabase) {
    throw new Error('Supabase client not initialized')
  }
  
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    return null
  }
  
  return session
}
