import { createClient } from '@/lib/supabase/server'
import { getUser } from '@/lib/supabase/server'
import { isAdminUser } from '@/lib/auth/isAdmin'
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
    const { id } = await params;
    const user = await getUser()
    
    if (!user || !isAdminUser(user.id)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { admin_note } = body

    const supabase = await createClient()

    const { error } = await supabase
      .from('tpc_invoices')
      .update({
        status: 'REJECTED',
        admin_note: admin_note || 'Invoice rejected by admin',
        updated_at: new Date().toISOString()
      })
      .eq('id', id)

    if (error) {
      console.error('Error rejecting invoice:', error)
      return NextResponse.json({ error: 'Failed to reject invoice' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in reject route:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
