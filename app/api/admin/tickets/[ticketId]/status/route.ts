import { createClient } from '@/lib/supabase/server'
import { getUser } from '@/lib/supabase/server'
import { isAdminUser } from '@/lib/auth/isAdmin'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-static';

export async function generateStaticParams() {
  // For static export, we need to generate params for all possible ticket IDs
  // Since this is a dynamic API route, we'll return empty array
  // API routes are not typically exported in static builds
  return []
}

export async function POST(
  request: NextRequest,
  { params }: { params: { ticketId: string } }
) {
  try {
    const user = await getUser()
    
    if (!user || !isAdminUser(user.id)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { ticketId } = params
    const body = await request.json()
    const { status, admin_note } = body

    const supabase = await createClient()

    const { error } = await supabase
      .from('tpc_tickets')
      .update({
        status,
        admin_note: admin_note,
        updated_at: new Date().toISOString()
      })
      .eq('id', ticketId)

    if (error) {
      console.error('Error updating ticket:', error)
      return NextResponse.json({ error: 'Failed to update ticket' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in ticket status route:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
