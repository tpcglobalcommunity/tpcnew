import { createServerClient } from '@/lib/supabase/server-client'
import { getStagePrice, calculateQty } from '@/lib/presale'
import { NextRequest, NextResponse } from 'next/server'

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

    // Schema check - cheap test
    const { error: schemaError } = await supabase
      .from('tpc_invoices')
      .select('id')
      .limit(1)

    if (schemaError) {
      console.error('[create-invoice] Schema error:', { 
        code: schemaError.code, 
        message: schemaError.message 
      })
      return NextResponse.json({ 
        ok: false, 
        message: 'Database belum siap' 
      }, { status: 500 })
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
    const { stage, amountUsdc, method } = body

    // Input validation
    if (!stage || !amountUsdc || !method) {
      return NextResponse.json({ 
        ok: false, 
        message: 'Data tidak lengkap' 
      }, { status: 400 })
    }

    if (stage < 1 || stage > 20) {
      return NextResponse.json({ 
        ok: false, 
        message: 'Stage tidak valid (1-20)' 
      }, { status: 400 })
    }

    const amount = parseFloat(amountUsdc)
    if (isNaN(amount) || amount < 10) {
      return NextResponse.json({ 
        ok: false, 
        message: 'Jumlah USDC tidak valid (min 10)' 
      }, { status: 400 })
    }

    if (!['USDC', 'IDR'].includes(method)) {
      return NextResponse.json({ 
        ok: false, 
        message: 'Metode pembayaran tidak valid' 
      }, { status: 400 })
    }

    // Server-side price calculation
    const priceUsdc = getStagePrice(stage)
    const qtyTpc = calculateQty(amount, priceUsdc)
    const RATE_IDR = 17000
    const total_idr = amount * RATE_IDR

    // Create invoice
    const expiresAt = new Date()
    expiresAt.setHours(expiresAt.getHours() + 24) // 24 hours expiry

    const { data: invoice, error: insertError } = await supabase
      .from('tpc_invoices')
      .insert({
        user_id: user.id,
        stage,
        price_usdc: priceUsdc,
        amount_usdc: amount,
        total_usdc: amount,
        total_idr: total_idr,
        qty_tpc: qtyTpc,
        method,
        status: 'pending',
        expires_at: expiresAt.toISOString(),
        created_at: new Date().toISOString()
      })
      .select('id')
      .single()

    if (insertError) {
      console.error('[create-invoice] Insert error:', { 
        code: insertError.code, 
        message: insertError.message 
      })
      
      let safeMessage = 'Gagal membuat invoice'
      if (insertError.code === '42501') {
        safeMessage = 'Permission denied'
      } else if (insertError.code === '23505') {
        safeMessage = 'Invoice sudah ada'
      }

      return NextResponse.json({ 
        ok: false, 
        message: safeMessage,
        detail: insertError.message 
      }, { status: 400 })
    }

    // Create audit log (best effort)
    try {
      await supabase
        .from('tpc_audit_logs')
        .insert({
          invoice_id: invoice.id,
          action: 'create_invoice',
          old_status: null,
          new_status: 'pending',
          actor_id: user.id,
          meta: {
            stage,
            amount_usdc: amount,
            method
          }
        })
    } catch (auditError) {
      console.error('[create-invoice] Audit log error:', auditError)
      // Don't fail the request if audit log fails
    }

    return NextResponse.json({ 
      ok: true, 
      invoiceId: invoice.id 
    })

  } catch (error) {
    console.error('[create-invoice] Unexpected error:', error)
    return NextResponse.json({ 
      ok: false, 
      message: 'Internal server error' 
    }, { status: 500 })
  }
}
