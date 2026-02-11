import { redirect } from 'next/navigation'
import { getUser } from '@/lib/supabase/server'
import { headers } from 'next/headers'
import { Metadata } from 'next'
import MemberTopBar from '@/components/member/nav/MemberTopBar'
import MemberBottomNav from '@/components/member/nav/MemberBottomNav'
import { PhantomWalletProvider } from '@/components/wallet/PhantomWalletProvider'

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

const pageTitles: Record<string, string> = {
  '/member': 'Dashboard',
  '/member/buy': 'Beli TPC',
  '/member/invoices': 'Invoice',
  '/member/referral': 'Referral',
  '/member/settings': 'Pengaturan'
}

export default async function MemberLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getUser()
  
  if (!user) {
    redirect('/login?returnTo=/member')
  }
  
  // Get pathname from headers (fallback to /member)
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || '/member'
  const title = pageTitles[pathname] || 'Dashboard'

  return (
    <div className="min-h-screen bg-[#0B0E11]">
      <PhantomWalletProvider>
        <MemberTopBar title={title} user={user} />
        
        <main className="pb-20">
          <div className="max-w-6xl mx-auto px-4 py-6">
            {children}
          </div>
        </main>
        
        <MemberBottomNav />
      </PhantomWalletProvider>
    </div>
  )
}
