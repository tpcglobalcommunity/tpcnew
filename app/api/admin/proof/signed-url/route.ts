import { createClient } from '@/lib/supabase/server'
import { getUser } from '@/lib/supabase/server'
import { isAdminUser } from '@/lib/auth/isAdmin'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-static';

export async function generateStaticParams() {
  // For static export, we need to generate params for all possible paths
  // Since this is a dynamic API route, we'll return empty array
  // API routes are not typically exported in static builds
  return []
}

export async function GET(request: NextRequest) {
  try {
    const user = await getUser()
    
    if (!user || !isAdminUser(user.id)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const path = searchParams.get('path')

    if (!path) {
      return NextResponse.json({ error: 'Path parameter is required' }, { status: 400 })
    }

    const supabase = await createClient()

    const { data, error } = await supabase.storage
      .from('tpc-proof')
      .createSignedUrl(path, 60) // 60 seconds expiry

    if (error) {
      console.error('Error creating signed URL:', error)
      return NextResponse.json({ error: 'Failed to generate signed URL' }, { status: 500 })
    }

    return NextResponse.json({ signedUrl: data.signedUrl })
  } catch (error) {
    console.error('Error in signed URL route:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
