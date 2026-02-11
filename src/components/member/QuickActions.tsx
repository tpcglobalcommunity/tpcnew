'use client'

import { useState } from 'react'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { ShoppingCart, FileText, Users, Settings, LogOut } from 'lucide-react'
import { supabase } from '@/lib/supabase/client'

interface QuickActionsProps {
  user: {
    email?: string | null
    id?: string
  }
}

export default function QuickActions({ user }: QuickActionsProps) {
  const [isSigningOut, setIsSigningOut] = useState(false)

  const handleSignOut = async () => {
    setIsSigningOut(true)
    try {
      if (supabase) {
        await supabase.auth.signOut()
      }
      window.location.href = '/login'
    } catch (error) {
      console.error('Sign out error:', error)
      setIsSigningOut(false)
    }
  }

  return (
    <div className="bg-[#0B0E11] border border-yellow-500/30 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-yellow-400 font-semibold">Aksi Cepat</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <PremiumButton 
          href="/member/buy"
          className="justify-start"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Beli TPC
        </PremiumButton>

        <PremiumButton 
          href="/member/invoices"
          variant="outline"
          className="justify-start"
        >
          <FileText className="w-4 h-4 mr-2" />
          Invoice
        </PremiumButton>

        <PremiumButton 
          href="/member/referral"
          variant="outline"
          className="justify-start"
        >
          <Users className="w-4 h-4 mr-2" />
          Referral
        </PremiumButton>

        <PremiumButton 
          href="/member/settings"
          variant="outline"
          className="justify-start"
        >
          <Settings className="w-4 h-4 mr-2" />
          Pengaturan
        </PremiumButton>
      </div>

      <PremiumButton 
        onClick={handleSignOut}
        disabled={isSigningOut}
        variant="outline"
        className="w-full mt-4 border-red-500/50 text-red-400 hover:bg-red-500/10"
      >
        <LogOut className="w-4 h-4 mr-2" />
        {isSigningOut ? 'Keluar...' : 'Keluar'}
      </PremiumButton>
    </div>
  )
}
