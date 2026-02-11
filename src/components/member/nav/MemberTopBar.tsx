'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { getSupabaseBrowserClient } from '@/lib/supabase/browser'
import { LogOut, User } from 'lucide-react'

interface MemberTopBarProps {
  title: string
  user?: {
    email?: string | null
  }
}

export default function MemberTopBar({ title, user }: MemberTopBarProps) {
  const pathname = usePathname()
  const supabase = getSupabaseBrowserClient()
  const [isSigningOut, setIsSigningOut] = useState(false)

  const handleSignOut = async () => {
    setIsSigningOut(true)
    try {
      await supabase.auth.signOut()
      window.location.href = '/login'
    } catch (error) {
      console.error('Sign out error:', error)
      setIsSigningOut(false)
    }
  }

  return (
    <div className="sticky top-0 z-50 bg-[#0B0E11]/95 backdrop-blur-sm border-b border-yellow-500/30">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-yellow-400">{title}</h1>
            {user?.email && (
              <div className="hidden sm:flex items-center gap-2 text-gray-400 text-sm">
                <User className="w-4 h-4" />
                <span>{user.email.slice(0, 8)}...</span>
              </div>
            )}
          </div>
          
          <PremiumButton
            onClick={handleSignOut}
            disabled={isSigningOut}
            variant="outline"
            size="sm"
            className="border-red-500/50 text-red-400 hover:bg-red-500/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            {isSigningOut ? 'Keluar...' : 'Keluar'}
          </PremiumButton>
        </div>
      </div>
    </div>
  )
}
