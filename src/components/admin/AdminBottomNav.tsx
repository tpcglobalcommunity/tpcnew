'use client'

import { useState } from 'react'
import { Shield, Menu, X, User, LogOut, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { getSupabaseBrowserClient } from '@/lib/supabase/browser'

export default function AdminBottomNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const supabase = getSupabaseBrowserClient()

  const handleLogout = async () => {
    
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <>
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1A1F2E] border-t border-amber-500/25 z-50">
        <div className="flex items-center justify-around py-2">
          <Link 
            href="/admin"
            className="flex flex-col items-center gap-1 px-3 py-2 text-amber-400"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </div>
            <span className="text-xs">Dashboard</span>
          </Link>

          <Link 
            href="/admin/invoices"
            className="flex flex-col items-center gap-1 px-3 py-2 text-gray-400 hover:text-amber-400 transition-colors"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <span className="text-xs">Invoice</span>
          </Link>

          <Link 
            href="/admin/tickets"
            className="flex flex-col items-center gap-1 px-3 py-2 text-gray-400 hover:text-amber-400 transition-colors"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <span className="text-xs">Tiket</span>
          </Link>

          <Link 
            href="/admin/treasury"
            className="flex flex-col items-center gap-1 px-3 py-2 text-gray-400 hover:text-amber-400 transition-colors"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <span className="text-xs">Treasury</span>
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col items-center gap-1 px-3 py-2 text-gray-400 hover:text-amber-400 transition-colors"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Menu className="w-5 h-5" />
            </div>
            <span className="text-xs">Menu</span>
          </button>
        </div>
      </div>

      {/* Menu Sheet */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setMenuOpen(false)}>
          <div className="absolute bottom-0 left-0 right-0 bg-[#1A1F2E] border-t border-amber-500/25" onClick={(e) => e.stopPropagation()}>
            <div className="p-4">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-amber-400" />
                  <span className="text-white font-semibold">Admin Menu</span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2">
                <Link
                  href="/member/profile"
                  className="flex items-center justify-between p-3 bg-[#0B0E11] rounded-lg hover:bg-[#2A2F3E] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="text-white">Profil</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-between p-3 bg-red-500/10 border border-red-500/50 rounded-lg hover:bg-red-500/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <LogOut className="w-5 h-5 text-red-400" />
                    <span className="text-red-400">Logout</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-red-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
