import { ReactNode } from 'react'
import { MemberBottomNav } from './MemberBottomNav'

interface MemberShellProps {
  children: ReactNode
}

export function MemberShell({ children }: MemberShellProps) {
  return (
    <div className="min-h-screen bg-[#0B0E11] pb-20">
      <main className="flex-1">
        {children}
      </main>
      <MemberBottomNav />
    </div>
  )
}
