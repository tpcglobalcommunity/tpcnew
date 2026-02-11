import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

async function supabaseServer() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: any) {
          cookieStore.set({ name, value: "", ...options, maxAge: 0 });
        },
      },
    }
  );
}

export async function GET() {
  try {
    const supabase = await supabaseServer();

    const { data, error } = await supabase
      .from("tpc_settings")
      .select("value")
      .eq("key", "USDC_TREASURY_ADDRESS")
      .single();

    if (error || !data) {
      return NextResponse.json({ treasury_address: null }, { status: 200 });
    }

    return NextResponse.json(
      { treasury_address: data.value ?? null },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ treasury_address: null }, { status: 200 });
  }
}
