import { createServerClient } from '@/lib/supabase/server-client'
import { getStagePrice, calculateQty } from '@/lib/presale'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
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
      console.error('Rate limit error:', rateLimitError)
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }

    if (!rateLimitResult) {
      return NextResponse.json({ 
        error: 'Terlalu banyak permintaan. Coba lagi beberapa menit.' 
      }, { status: 429 })
    }

    const body = await request.json()
    const { stage, amountUsdc, method } = body

    // Input validation
    if (!stage || !amountUsdc || !method) {
      return NextResponse.json({ error: 'Data tidak lengkap' }, { status: 400 })
    }

    if (stage < 1 || stage > 20) {
      return NextResponse.json({ error: 'Stage tidak valid (1-20)' }, { status: 400 })
    }

    const amount = parseFloat(amountUsdc)
    if (isNaN(amount) || amount < 10 || amount > 100000) {
      return NextResponse.json({ error: 'Jumlah USDC tidak valid (min 10, max 100000)' }, { status: 400 })
    }

    if (!['USDC', 'IDR'].includes(method)) {
      return NextResponse.json({ error: 'Metode pembayaran tidak valid' }, { status: 400 })
    }

    // Server-side price calculation
    const priceUsdc = getStagePrice(stage)
    const qtyTpc = calculateQty(amount, priceUsdc)

    // Create invoice
    const expiresAt = new Date()
    expiresAt.setHours(expiresAt.getHours() + 24) // 24 hours expiry

    const { data: invoice, error } = await supabase
      .from('tpc_invoices')
      .insert({
        user_id: user.id,
        stage,
        price_usdc: priceUsdc,
        amount_usdc: amount,
        qty_tpc: qtyTpc,
        method,
        status: 'pending',
        expires_at: expiresAt.toISOString()
      })
      .select()
      .single()

    if (error) {
      console.error('Invoice creation error:', error)
      return NextResponse.json({ error: 'Gagal membuat invoice' }, { status: 500 })
    }

    // Create audit log
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

    return NextResponse.json({ invoiceId: invoice.id })

  } catch (error) {
    console.error('Create invoice error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
