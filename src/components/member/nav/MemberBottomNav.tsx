'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { 
  LayoutDashboard, 
  ShoppingCart, 
  FileText, 
  Users, 
  Settings 
} from 'lucide-react'

const menuItems = [
  {
    href: '/member',
    label: 'Dashboard',
    icon: LayoutDashboard
  },
  {
    href: '/member/buy',
    label: 'Beli TPC',
    icon: ShoppingCart
  },
  {
    href: '/member/invoices',
    label: 'Invoice',
    icon: FileText
  },
  {
    href: '/member/referral',
    label: 'Referral',
    icon: Users
  },
  {
    href: '/member/settings',
    label: 'Pengaturan',
    icon: Settings
  }
]

export default function MemberBottomNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0B0E11]/95 backdrop-blur-sm border-t border-yellow-500/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-around py-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive 
                    ? 'text-yellow-400 bg-yellow-500/10' 
                    : 'text-gray-400 hover:text-yellow-400 hover:bg-yellow-500/5'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
