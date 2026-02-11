import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    // ✅ Create server client with cookies for SSR
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get: (name: string) => cookieStore.get(name)?.value,
          set: (name: string, value: string, options: any) => {
            cookieStore.set(name, { value, ...options })
          },
          remove: (name: string, options: any) => {
            cookieStore.delete(name)
          }
        }
      }
    )

    const { data: { user }, error: userError } = await supabase.auth.getUser()

    if (userError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json().catch(() => ({}))
    const action = body?.action
    const window_minutes = Number(body?.window_minutes ?? 60)
    const max_attempts = Number(body?.max_attempts ?? 3)

    if (!action || typeof action !== "string") {
      return NextResponse.json({ error: "Missing action parameter" }, { status: 400 })
    }

    // ✅ RPC rate limit
    const { data, error } = await supabase.rpc("check_rate_limit", {
      user_id: user.id,
      action,
      window_minutes,
      max_attempts,
    })

    if (error) {
      console.error("Rate limit RPC error:", error)
      return NextResponse.json({ error: "Rate limit check failed" }, { status: 500 })
    }

    const allowed = Boolean(data?.allowed)
    return NextResponse.json({
      allowed,
      remaining: Number(data?.remaining ?? 0),
      message: allowed ? "Request allowed" : "Rate limit exceeded",
    })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
