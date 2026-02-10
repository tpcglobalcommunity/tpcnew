import { redirect } from 'next/navigation'
import { getUser } from '@/lib/supabase/server'
import { isAdminUser } from '@/lib/auth/isAdmin'
import AdminShell from '@/components/admin/AdminShell'
import { Metadata } from 'next'

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

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getUser()
  
  if (!user) {
    redirect('/login?returnTo=/admin')
  }
  
  if (!isAdminUser(user.id)) {
    redirect('/member')
  }
  
  return <AdminShell>{children}</AdminShell>
}
