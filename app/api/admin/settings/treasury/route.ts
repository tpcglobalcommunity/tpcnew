import { createServerClient } from '@/lib/supabase/server-client'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ 
        ok: false, 
        message: 'Unauthorized' 
      }, { status: 401 })
    }

    // Check if user is admin (you may need to adjust this based on your auth system)
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (!profile || profile.role !== 'admin') {
      return NextResponse.json({ 
        ok: false, 
        message: 'Admin access required' 
      }, { status: 403 })
    }

    const body = await request.json()
    const { treasuryAddress } = body

    // Validate
    if (!treasuryAddress || typeof treasuryAddress !== 'string') {
      return NextResponse.json({ 
        ok: false, 
        message: 'Treasury address wajib diisi' 
      }, { status: 400 })
    }

    const trimmed = treasuryAddress.trim()
    if (trimmed.length < 20) {
      return NextResponse.json({ 
        ok: false, 
        message: 'Treasury address tidak valid (minimal 20 karakter)' 
      }, { status: 400 })
    }

    // Update settings
    const { error: updateError } = await supabase
      .from('tpc_settings')
      .upsert({
        key: 'USDC_TREASURY_ADDRESS',
        value: trimmed,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'key'
      })

    if (updateError) {
      console.error('Settings update error:', updateError)
      return NextResponse.json({ 
        ok: false, 
        message: 'Gagal menyimpan pengaturan' 
      }, { status: 500 })
    }

    return NextResponse.json({ 
      ok: true, 
      message: 'Treasury address berhasil diperbarui' 
    })

  } catch (error) {
    console.error('Settings API error:', error)
    return NextResponse.json({ 
      ok: false, 
      message: 'Internal server error' 
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = await createServerClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ 
        ok: false, 
        message: 'Unauthorized' 
      }, { status: 401 })
    }

    // Check if user is admin
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (!profile || profile.role !== 'admin') {
      return NextResponse.json({ 
        ok: false, 
        message: 'Admin access required' 
      }, { status: 403 })
    }

    // Get current treasury address
    const { data: setting } = await supabase
      .from('tpc_settings')
      .select('value, updated_at')
      .eq('key', 'USDC_TREASURY_ADDRESS')
      .single()

    return NextResponse.json({ 
      ok: true, 
      data: {
        treasuryAddress: setting?.value || '',
        updatedAt: setting?.updated_at
      }
    })

  } catch (error) {
    console.error('Settings GET error:', error)
    return NextResponse.json({ 
      ok: false, 
      message: 'Internal server error' 
    }, { status: 500 })
  }
}
