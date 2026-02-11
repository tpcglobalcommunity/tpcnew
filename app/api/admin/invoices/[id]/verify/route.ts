import { createClient } from '@/lib/supabase/server'
import { adminGuard } from '../../../_guard'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-static';

export async function generateStaticParams() {
  // For static export, we need to generate params for all possible invoice IDs
  // Since this is a dynamic API route, we'll return empty array
  // API routes are not typically exported in static builds
  return []
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Apply admin guard
    const guardResult = await adminGuard()
    if (guardResult instanceof NextResponse) {
      return guardResult
    }

    const { id } = await params;
    const supabase = await createClient()

    const { error } = await supabase
      .from('tpc_invoices')
      .update({
        status: 'VERIFIED',
        admin_note: 'Invoice verified by admin',
        updated_at: new Date().toISOString()
      })
      .eq('id', id)

    if (error) {
      console.error('Error verifying invoice:', error)
      return NextResponse.json({ error: 'Failed to verify invoice' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in verify route:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
