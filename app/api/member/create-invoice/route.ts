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

    const body = await request.json()
    const { stage, amountUsdc, method } = body

    // Validation
    if (!stage || !amountUsdc || !method) {
      return NextResponse.json({ error: 'Data tidak lengkap' }, { status: 400 })
    }

    if (stage < 1 || stage > 20) {
      return NextResponse.json({ error: 'Stage tidak valid' }, { status: 400 })
    }

    if (amountUsdc < 10) {
      return NextResponse.json({ error: 'Minimum pembelian 10 USDC' }, { status: 400 })
    }

    if (!['USDC', 'IDR'].includes(method)) {
      return NextResponse.json({ error: 'Metode pembayaran tidak valid' }, { status: 400 })
    }

    // Calculate
    const priceUsdc = getStagePrice(stage)
    const qtyTpc = calculateQty(amountUsdc, priceUsdc)

    // Create invoice
    const expiresAt = new Date()
    expiresAt.setHours(expiresAt.getHours() + 24) // 24 hours expiry

    const { data: invoice, error } = await supabase
      .from('tpc_invoices')
      .insert({
        user_id: user.id,
        stage,
        price_usdc: priceUsdc,
        amount_usdc: amountUsdc,
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

    return NextResponse.json({ invoiceId: invoice.id })

  } catch (error) {
    console.error('Create invoice error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
