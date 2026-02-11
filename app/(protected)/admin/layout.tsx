import { createServerClient } from '@/lib/supabase/server-client'
import { isAdminByEnv } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { Metadata } from 'next'
import AdminTopBar from '@/components/admin/AdminTopBar'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Admin Area - TPC',
  description: 'Admin area TPC',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

const pageTitles: Record<string, string> = {
  '/admin': 'Dashboard',
  '/admin/invoices': 'Invoice Queue',
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login?returnTo=/admin')
  }

  // Check admin access via ENV
  const isAdmin = await isAdminByEnv(user.id)
  if (!isAdmin) {
    redirect('/member')
  }
  
  // Get pathname from headers (fallback to /admin)
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || '/admin'
  const title = pageTitles[pathname] || 'Dashboard'

  return (
    <div className="min-h-screen bg-[#0B0E11]">
      <AdminTopBar title={title} user={user} />
      
      <main className="pb-20">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {children}
        </div>
      </main>
    </div>
  )
}
