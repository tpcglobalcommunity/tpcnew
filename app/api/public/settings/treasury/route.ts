import { createServerClient } from '@/lib/supabase/server-client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const supabase = await createServerClient()
    
    // Get treasury address from public settings
    const { data: setting, error } = await supabase
      .from('tpc_settings')
      .select('value')
      .eq('key', 'USDC_TREASURY_ADDRESS')
      .single()

    if (error) {
      console.error('[public-settings] Error fetching treasury:', error)
      return NextResponse.json(
        { error: 'Failed to fetch treasury address' },
        { status: 500 }
      )
    }

    const treasuryAddress = setting?.value?.trim() || null

    return NextResponse.json({
      ok: true,
      usdc_treasury_address: treasuryAddress
    })

  } catch (error) {
    console.error('[public-settings] Unexpected error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
