'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { 
  Home, 
  DollarSign, 
  FileText, 
  HelpCircle, 
  Menu,
  Wallet,
  User,
  LogOut
} from 'lucide-react'
import { getSupabaseBrowserClient } from '@/lib/supabase/browser'

interface MemberBottomNavProps {
  currentPath?: string;
}

interface NavItem {
  icon: any;
  label: string;
  href: string;
  isExternal?: boolean;
  onClick?: () => void;
}

export function MemberBottomNav({ currentPath }: MemberBottomNavProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const supabase = getSupabaseBrowserClient();

  const navItems: NavItem[] = [
    {
      icon: Home,
      label: 'Dashboard',
      href: '/member'
    },
    {
      icon: DollarSign,
      label: 'Beli',
      href: '/member/buy'
    },
    {
      icon: FileText,
      label: 'Invoice',
      href: '/member/invoices'
    },
    {
      icon: HelpCircle,
      label: 'Bantuan',
      href: '/member/support'
    },
    {
      icon: Menu,
      label: 'Menu',
      href: '#',
      onClick: () => setIsMenuOpen(true)
    }
  ];

  const menuItems = [
    {
      icon: Wallet,
      label: 'Wallet',
      href: '/member/wallet'
    },
    {
      icon: User,
      label: 'Profil',
      href: '/member/profile'
    },
    {
      icon: LogOut,
      label: 'Logout',
      onClick: async () => {
        await supabase.auth.signOut();
        window.location.href = '/login';
      }
    }
  ];

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <>
      {/* Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      {/* Menu Sheet */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-[#0B0E11] via-[#1A1F2E] to-[#0B0E11]/95 backdrop-blur-sm border-t border-t-amber-500/25 transform transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="max-w-md mx-auto">
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Menu</h3>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="p-4">
            <div className="space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                
                if (item.onClick) {
                  return (
                    <button
                      key={index}
                      onClick={item.onClick}
                      className="w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-white/10 text-gray-300 hover:text-white"
                    >
                      <div className="flex-shrink-0">
                        <Icon className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-medium text-white">{item.label}</div>
                      </div>
                    </button>
                  );
                }
                
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-white/10 text-gray-300 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex-shrink-0">
                      <Icon className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">{item.label}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-[#0B0E11] via-[#1A1F2E] to-[#0B0E11]/95 backdrop-blur-sm border-t border-t-amber-500/25 safe-area-inset-bottom">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-5 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={item.onClick}
                  className={`
                    flex flex-col items-center justify-center py-3 px-2 transition-all duration-200 ease-out
                    ${active 
                      ? 'text-amber-400' 
                      : 'text-gray-400 hover:text-gray-300'
                    }
                  `}
                >
                  <div className="relative">
                    <Icon className="w-5 h-5 transition-transform duration-200 ease-out" />
                    {active && (
                      <div className="absolute -top-1 -right-1 w-1 h-1 bg-amber-400 rounded-full opacity-80"></div>
                    )}
                  </div>
                  <span className="text-xs mt-1 font-medium leading-tight">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
