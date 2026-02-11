'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { PremiumButton } from '@/components/ui/PremiumButton'
import { supabase } from '@/lib/supabase/client'
import { LogOut, Shield } from 'lucide-react'

interface AdminTopBarProps {
  title: string
  user?: {
    email?: string | null
  }
}

export default function AdminTopBar({ title, user }: AdminTopBarProps) {
  const pathname = usePathname()
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

  const handleExpireInvoices = async () => {
    try {
      const response = await fetch('/api/admin/expire-invoices', {
        method: 'POST'
      })

      const data = await response.json()
      
      if (response.ok && data.ok) {
        alert(`Expire selesai: ${data.expired}/${data.processed} invoice expired, ${data.errors} errors`)
      } else {
        alert('Gagal expire: ' + (data.error || 'Unknown error'))
      }
    } catch (error) {
      console.error('Expire invoices error:', error)
      alert('Gagal expire')
    }
  }

  const handleVerifyUSDC = async () => {
    try {
      const response = await fetch('/api/admin/verify-usdc', {
        method: 'POST'
      })

      const data = await response.json()
      
      if (response.ok && data.ok) {
        alert(`Verifikasi selesai: ${data.paid}/${data.checked} invoice verified, ${data.errors} errors`)
      } else {
        alert('Gagal verifikasi: ' + (data.error || 'Unknown error'))
      }
    } catch (error) {
      console.error('Verify USDC error:', error)
      alert('Gagal verifikasi')
    }
  }

  return (
    <div className="sticky top-0 z-50 bg-[#0B0E11]/95 backdrop-blur-sm border-b border-yellow-500/30">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-400" />
              <h1 className="text-xl font-bold text-yellow-400">{title}</h1>
            </div>
            {user?.email && (
              <div className="hidden sm:flex items-center gap-2 text-gray-400 text-sm">
                <span>{user.email.slice(0, 8)}...</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <PremiumButton
              onClick={handleExpireInvoices}
              variant="outline"
              size="sm"
              className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10"
            >
              Jalankan Expire
            </PremiumButton>
            
            <PremiumButton
              onClick={handleVerifyUSDC}
              variant="outline"
              size="sm"
              className="border-green-500/50 text-green-400 hover:bg-green-500/10"
            >
              Cek USDC
            </PremiumButton>
            
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
    </div>
  )
}
