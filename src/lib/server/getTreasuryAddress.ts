import { createServerClient } from '@/lib/supabase/server-client'

export async function getTreasuryAddress(supabase: any) {
  try {
    const { data, error } = await supabase
      .from("tpc_settings")
      .select("value")
      .eq("key", "USDC_TREASURY_ADDRESS")
      .single();

    const value = data?.value?.trim() ?? "";
    if (error || !value) return null;
    return value;
  } catch (error) {
    console.error('Error getting treasury address:', error);
    return null;
  }
}
