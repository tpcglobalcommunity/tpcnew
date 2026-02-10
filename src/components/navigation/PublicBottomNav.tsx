'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  Home, 
  Users, 
  DollarSign, 
  GraduationCap, 
  Menu
} from 'lucide-react';
import { normalizeLang, type Language } from '@/lib/lang-helpers';
import { PublicMenuWindow } from './PublicMenuWindow';

interface PublicBottomNavProps {
  currentLang: Language;
}

interface NavItem {
  icon: any;
  label: string;
  href: string;
  isExternal?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export function PublicBottomNav({ currentLang }: PublicBottomNavProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    {
      icon: Home,
      label: currentLang === 'en' ? 'Home' : 'Beranda',
      href: `/${currentLang}`
    },
    {
      icon: Users,
      label: 'DAO',
      href: `/${currentLang}/dao`
    },
    {
      icon: DollarSign,
      label: 'Presale',
      href: `/${currentLang}/presale`
    },
    {
      icon: GraduationCap,
      label: currentLang === 'en' ? 'Education' : 'Edukasi',
      href: `/${currentLang}/academy`
    },
    {
      icon: Menu,
      label: 'Menu',
      href: '#',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setIsMenuOpen(true);
      }
    }
  ];

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <>
      {/* Menu Window Overlay */}
      <PublicMenuWindow
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentLang={currentLang}
      />
      
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-[#0B0E11] via-[#1A1F2E] to-[#0B0E11]/95 backdrop-blur-sm border-t border-t-amber-500/25 safe-area-inset-bottom">
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
                    flex flex-col items-center justify-center py-3 px-2 transition-all duration-200 ease-out rounded-lg
                    ${active 
                      ? 'text-amber-400 bg-amber-500/10' 
                      : item.label === 'Menu'
                        ? 'text-amber-400 bg-amber-500/20 border border-amber-500/30'
                        : 'text-gray-400 hover:text-gray-300 hover:bg-white/5'
                    }
                  `}
                >
                  <div className="relative">
                    <Icon className={`w-5 h-5 transition-transform duration-200 ease-out ${item.label === 'Menu' ? 'hover:scale-110' : ''}`} />
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
