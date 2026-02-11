'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { X, Menu, ChevronRight } from 'lucide-react';
import { navigationConfig, type NavigationSection, type NavigationItem } from '@/config/navigation';

interface SideMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: string;
}

export function SideMenuDrawer({ isOpen, onClose, currentLang }: SideMenuDrawerProps) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (href: string) => {
    const normalizedHref = href.replace('[lang]', currentLang);
    return pathname === normalizedHref;
  };

  const handleNavigation = (href: string) => {
    const normalizedHref = href.replace('[lang]', currentLang);
    router.push(normalizedHref);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-gradient-to-b from-[#0B0E11] to-[#0F141A] border-l border-amber-500/10 shadow-2xl transform transition-transform duration-300 ease-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800/60">
            <h2 className="text-xl font-semibold text-white tracking-wide">
              Menu<span className="ml-2 text-[10px] text-amber-400/80">v2</span>
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto px-5 py-6 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {Object.entries(navigationConfig).map(([sectionKey, section], index) => {
              // Filter out disabled items (primary navigation moved to BottomNav)
              const enabledItems = section.items.filter((item: NavigationItem) => !item.disabled);
              
              // Skip sections that have no enabled items
              if (enabledItems.length === 0) return null;
              
              return (
                <div key={sectionKey} className={`${index > 0 ? 'mt-8' : ''}`}>
                  <h3 className="text-[10px] tracking-[0.15em] uppercase text-gray-500 mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {enabledItems.map((item: NavigationItem) => {
                      const Icon = item.icon;
                      const active = isActive(item.href);
                      
                      return (
                        <button
                          key={item.key}
                          onClick={() => handleNavigation(item.href)}
                          className={`
                            group w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 border border-transparent
                            ${active 
                              ? 'bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.08)]' 
                              : 'text-gray-400 hover:bg-white/[0.04] hover:text-white hover:border-white/5'
                            }
                          `}
                        >
                          <Icon className={`w-5 h-5 flex-shrink-0 text-gray-500 group-hover:text-white ${
                            active ? 'text-amber-400' : ''
                          }`} />
                          <span className="truncate text-sm">{item.label}</span>
                          <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-40 transition-opacity" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
