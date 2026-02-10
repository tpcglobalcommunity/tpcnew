import { createBrowserClient } from "@supabase/ssr"

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// During build time, these might not be available
if (typeof window !== 'undefined' && (!url || !anon)) {
  throw new Error(
    "Supabase env belum diset: NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY. Cek .env.local"
  )
}

export const supabase = typeof window !== 'undefined' ? createBrowserClient(url!, anon!) : null
