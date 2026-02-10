'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { 
  Menu,
  X,
  Home,
  Users,
  DollarSign,
  GraduationCap,
  Shield,
  FileText,
  AlertTriangle,
  HelpCircle,
  User,
  ChevronRight,
  ExternalLink,
  Globe,
  Eye
} from 'lucide-react';
import { type Language } from '@/lib/lang-helpers';

interface PublicMenuWindowProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

interface MenuItem {
  icon: React.ComponentType<any>;
  label: string;
  href?: string;
  subLabel?: string;
  disabled?: boolean;
  external?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export function PublicMenuWindow({ isOpen, onClose, currentLang }: PublicMenuWindowProps) {
  // Trap scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems: MenuItem[] = [
    // Information Section
    {
      icon: Shield,
      label: currentLang === 'id' ? 'Tentang TPC' : 'About TPC',
      href: `/${currentLang}/why-tpc`
    },
    {
      icon: Eye,
      label: currentLang === 'id' ? 'Transparansi' : 'Transparency',
      href: `/${currentLang}/transparency`
    },
    {
      icon: AlertTriangle,
      label: currentLang === 'id' ? 'Risiko' : 'Risk Disclosure',
      href: `/${currentLang}/risk-disclosure`
    },
    
    // Legal Section
    {
      icon: FileText,
      label: currentLang === 'id' ? 'Syarat' : 'Terms',
      href: `/${currentLang}/terms`
    },
    {
      icon: FileText,
      label: currentLang === 'id' ? 'Privasi' : 'Privacy',
      href: `/${currentLang}/privacy`
    },
    
    // Support Section
    {
      icon: HelpCircle,
      label: 'FAQ',
      href: `/${currentLang}/faq`
    },
    
    // Account Section
    {
      icon: User,
      label: currentLang === 'id' ? 'Login' : 'Login',
      href: '/login',
      external: true
    },
    
    // Language Section
    {
      icon: Globe,
      label: currentLang === 'id' ? 'Bahasa' : 'Language',
      href: '#',
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        // Toggle language logic would go here
        // For now, just close menu
        if (onClose) onClose();
      }
    },
    
    // Main Navigation
    {
      icon: Home,
      label: currentLang === 'id' ? 'Utama' : 'Main',
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
      label: currentLang === 'id' ? 'Edukasi' : 'Education',
      href: `/${currentLang}/academy`
    }
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Menu Sheet */}
      <div className={`fixed inset-y-0 right-0 w-full max-w-md bg-[#0B0E11] border-l border-yellow-500/15 shadow-2xl transform transition-transform duration-300 ease-out z-[60] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <h2 className="text-lg font-semibold text-white">
              {currentLang === 'id' ? 'Menu' : 'Menu'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {/* Information Section */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                  {currentLang === 'id' ? 'Informasi' : 'Information'}
                </h3>
                <div className="space-y-1">
                  {menuItems.slice(0, 3).map((item, index) => {
                    const Icon = item.icon;
                    
                    if (item.href) {
                      return (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-white/10 text-gray-300 hover:text-white"
                          onClick={onClose}
                        >
                          <div className="flex-shrink-0">
                            <Icon className="w-5 h-5 text-amber-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-white">{item.label}</div>
                            {item.subLabel && (
                              <div className="text-sm text-gray-400">{item.subLabel}</div>
                            )}
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </Link>
                      );
                    }
                    
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 text-gray-300 hover:text-white"
                      >
                        <div className="flex-shrink-0">
                          <Icon className="w-5 h-5 text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-white">{item.label}</div>
                          {item.subLabel && (
                            <div className="text-sm text-gray-400">{item.subLabel}</div>
                          )}
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Legal Section */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                  {currentLang === 'id' ? 'Legal' : 'Legal'}
                </h3>
                <div className="space-y-1">
                  {menuItems.slice(3, 5).map((item, index) => {
                    const Icon = item.icon;
                    
                    if (item.href) {
                      return (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-white/10 text-gray-300 hover:text-white"
                          onClick={onClose}
                        >
                          <div className="flex-shrink-0">
                            <Icon className="w-5 h-5 text-blue-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-white">{item.label}</div>
                            {item.subLabel && (
                              <div className="text-sm text-gray-400">{item.subLabel}</div>
                            )}
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </Link>
                      );
                    }
                    
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 text-gray-300 hover:text-white"
                      >
                        <div className="flex-shrink-0">
                          <Icon className="w-5 h-5 text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-white">{item.label}</div>
                          {item.subLabel && (
                            <div className="text-sm text-gray-400">{item.subLabel}</div>
                          )}
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Support & Account Section */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                  {currentLang === 'id' ? 'Support & Akun' : 'Support & Account'}
                </h3>
                <div className="space-y-1">
                  {menuItems.slice(5, 8).map((item, index) => {
                    const Icon = item.icon;
                    
                    if (item.href) {
                      return (
                        <Link
                          key={index}
                          href={item.href}
                          className={`
                            flex items-center gap-3 p-3 rounded-xl transition-all duration-200
                            ${item.disabled 
                              ? 'opacity-50 cursor-not-allowed' 
                              : 'hover:bg-white/10 text-gray-300 hover:text-white'
                            }
                          `}
                          onClick={onClose}
                        >
                          <div className="flex-shrink-0">
                            <Icon className={`w-5 h-5 ${item.label === 'FAQ' ? 'text-green-400' : item.label === 'Login' ? 'text-purple-400' : 'text-cyan-400'}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-white">{item.label}</div>
                            {item.subLabel && (
                              <div className="text-sm text-gray-400">{item.subLabel}</div>
                            )}
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </Link>
                      );
                    }
                    
                    return (
                      <div
                        key={index}
                        className={`
                          flex items-center gap-3 p-3 rounded-xl
                          ${item.disabled 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-white/10 text-gray-300 hover:text-white'
                          }
                        `}
                      >
                        <div className="flex-shrink-0">
                          <Icon className="w-5 h-5 text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-white">{item.label}</div>
                          {item.subLabel && (
                            <div className="text-sm text-gray-400">{item.subLabel}</div>
                          )}
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Main Navigation Section */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                  {currentLang === 'id' ? 'Navigasi Utama' : 'Main Navigation'}
                </h3>
                <div className="space-y-1">
                  {menuItems.slice(8).map((item, index) => {
                    const Icon = item.icon;
                    
                    if (item.href) {
                      return (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-white/10 text-gray-300 hover:text-white"
                          onClick={onClose}
                        >
                          <div className="flex-shrink-0">
                            <Icon className="w-5 h-5 text-gray-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-white">{item.label}</div>
                            {item.subLabel && (
                              <div className="text-sm text-gray-400">{item.subLabel}</div>
                            )}
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </Link>
                      );
                    }
                    
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 text-gray-300 hover:text-white"
                      >
                        <div className="flex-shrink-0">
                          <Icon className="w-5 h-5 text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-white">{item.label}</div>
                          {item.subLabel && (
                            <div className="text-sm text-gray-400">{item.subLabel}</div>
                          )}
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
