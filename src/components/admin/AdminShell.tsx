'use client'

import { ReactNode } from 'react'
import AdminBottomNav from './AdminBottomNav'

interface AdminShellProps {
  children: ReactNode
}

export default function AdminShell({ children }: AdminShellProps) {
  return (
    <div className="min-h-screen bg-[#0B0E11] pb-20">
      {children}
      <AdminBottomNav />
    </div>
  )
}
