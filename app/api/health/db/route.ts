import { createServerClient } from '@/lib/supabase/server-client'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = await createServerClient()
    
    // Test database connection and basic permissions
    const { error } = await supabase
      .from('tpc_invoices')
      .select('id')
      .limit(1)

    if (error) {
      console.error('[health/db] Database error:', { 
        code: error.code, 
        message: error.message 
      })
      return NextResponse.json({ 
        ok: false, 
        message: 'Database connection failed',
        error: error.message 
      }, { status: 500 })
    }

    return NextResponse.json({ 
      ok: true, 
      message: 'Database connection healthy' 
    })

  } catch (error) {
    console.error('[health/db] Unexpected error:', error)
    return NextResponse.json({ 
      ok: false, 
      message: 'Health check failed' 
    }, { status: 500 })
  }
}
