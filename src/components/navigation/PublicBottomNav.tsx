'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Users, BookOpen, Wallet, Menu } from 'lucide-react';
import { normalizeLang, type Lang } from '@/lib/lang-helpers';

interface PublicBottomNavProps {
  currentLang: Lang;
  onMenuToggle: () => void;
}

export function PublicBottomNav({ currentLang, onMenuToggle }: PublicBottomNavProps) {
  const pathname = usePathname();

  // BottomNav items - PRIMARY navigation (English only)
  const bottomNavItems = [
    {
      key: 'home',
      label: 'Home',
      href: `/${currentLang}`,
      icon: Home
    },
    {
      key: 'dao',
      label: 'DAO',
      href: `/${currentLang}/dao`,
      icon: Users
    },
    {
      key: 'presale',
      label: 'Presale',
      href: `/${currentLang}/presale`,
      icon: Wallet
    },
    {
      key: 'academy',
      label: 'Academy',
      href: `/${currentLang}/academy`,
      icon: BookOpen
    },
    {
      key: 'menu',
      label: 'Menu',
      href: '#',
      icon: Menu,
      onClick: onMenuToggle,
      isButton: true
    }
  ];

  const isActive = (href: string) => {
    if (href === '#') return false;
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B0E11]/95 backdrop-blur-sm border-t border-white/5">
      <div className="max-w-[480px] mx-auto px-4">
        <div className="flex justify-around items-center h-16">
          {bottomNavItems.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            
            if (item.isButton) {
              return (
                <button
                  key={item.key}
                  onClick={item.onClick}
                  className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors text-gray-400 hover:text-white"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              );
            }
            
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  active 
                    ? 'text-amber-400 bg-amber-500/10' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
