import { createServerClient } from '@/lib/supabase/server-client'

export async function getTreasuryAddress(): Promise<string | null> {
  try {
    const supabase = await createServerClient()
    
    // Try to get from database first
    const { data: setting } = await supabase
      .from('tpc_settings')
      .select('value')
      .eq('key', 'USDC_TREASURY_ADDRESS')
      .single()
    
    if (setting?.value) {
      return setting.value.trim()
    }
    
    // Fallback to environment variable
    const envAddress = process.env.NEXT_PUBLIC_USDC_TREASURY_ADDRESS
    if (envAddress) {
      return envAddress.trim()
    }
    
    return null
  } catch (error) {
    console.error('Error getting treasury address:', error)
    return null
  }
}
