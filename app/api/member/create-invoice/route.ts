import { createServerClient } from '@/lib/supabase/server-client'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      console.error('[create-invoice] Auth error:', authError?.message)
      return NextResponse.json({ 
        ok: false, 
        message: 'Unauthorized' 
      }, { status: 401 })
    }

    // Rate limiting check
    const rateLimitKey = `invoice:create:${user.id}`
    const { data: rateLimitResult, error: rateLimitError } = await supabase
      .rpc('rpc_rate_limit_increment', {
        p_key: rateLimitKey,
        p_limit: 5,
        p_window_seconds: 600 // 10 minutes
      })

    if (rateLimitError) {
      console.error('[create-invoice] Rate limit error:', { 
        code: rateLimitError.code, 
        message: rateLimitError.message 
      })
      return NextResponse.json({ 
        ok: false, 
        message: 'Rate limit service error' 
      }, { status: 500 })
    }

    if (!rateLimitResult) {
      return NextResponse.json({ 
        ok: false, 
        message: 'Terlalu banyak permintaan. Coba lagi beberapa menit.' 
      }, { status: 429 })
    }

    const body = await request.json()
    console.log("CREATE INVOICE BODY:", body)
    const { qty_tpc, walletAddress } = body

    // Input validation
    if (!qty_tpc) {
      return NextResponse.json({ 
        ok: false, 
        message: 'Jumlah TPC wajib diisi' 
      }, { status: 400 })
    }

    const quantity = parseFloat(qty_tpc)
    if (isNaN(quantity) || quantity <= 0) {
      return NextResponse.json({ 
        ok: false, 
        message: 'Jumlah TPC tidak valid (harus > 0)' 
      }, { status: 400 })
    }

    // Get referral code from cookie
    const cookieStore = await cookies()
    const referralCode = cookieStore.get('reff')?.value || null

    // Create invoice using RPC (server-side pricing)
    const { data: invoiceResult, error: rpcError } = await supabase
      .rpc('tpc_create_invoice', {
        p_quantity_tpc: quantity,
        p_wallet: walletAddress,
        p_referral_code: referralCode
      })

    if (rpcError) {
      console.error('[create-invoice] RPC error:', { 
        code: rpcError.code, 
        message: rpcError.message 
      })
      
      let safeMessage = 'Gagal membuat invoice'
      if (rpcError.message?.includes('No active presale stage')) {
        safeMessage = 'Tidak ada stage presale yang aktif'
      } else if (rpcError.message?.includes('Unauthorized')) {
        safeMessage = 'Tidak memiliki otorisasi'
      } else if (rpcError.message?.includes('Invalid quantity')) {
        safeMessage = 'Quantity tidak valid'
      }

      return NextResponse.json({ 
        ok: false, 
        message: safeMessage,
        detail: rpcError.message 
      }, { status: 400 })
    }

    // Create audit log (best effort)
    try {
      await supabase
        .from('tpc_audit_logs')
        .insert({
          invoice_id: invoiceResult.invoice_id,
          action: 'create_invoice',
          old_status: null,
          new_status: 'DRAFT',
          actor_id: user.id,
          meta: {
            quantity_tpc: quantity,
            wallet_address: walletAddress,
            referral_code: referralCode,
            stage_number: invoiceResult.stage_number,
            price_per_tpc: invoiceResult.price_per_tpc,
            total_usdc: invoiceResult.total_usdc
          }
        })
    } catch (auditError) {
      console.error('[create-invoice] Audit log error:', auditError)
      // Don't fail the request if audit log fails
    }

    return NextResponse.json({ 
      ok: true, 
      invoiceId: invoiceResult.invoice_id,
      invoice: invoiceResult
    })

  } catch (error) {
    console.error('[create-invoice] Unexpected error:', error)
    return NextResponse.json({ 
      ok: false, 
      message: 'Internal server error' 
    }, { status: 500 })
  }
}
