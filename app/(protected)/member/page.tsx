import { redirect } from 'next/navigation'
import { getUser } from '@/lib/supabase/server'
import MemberDashboard from '@/components/member/MemberDashboard'
import { Metadata } from 'next'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Member Area - TPC',
  description: 'Member area TPC',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

export default async function MemberPage() {
  const user = await getUser()
  
  if (!user) {
    redirect('/login?returnTo=/member')
  }
  
  return <MemberDashboard />
}
