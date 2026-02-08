"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavigation() {
  const pathname = usePathname();
  
  const navItems = [
    {
      name: "Presale",
      href: "/presale",
      icon: "🚀",
      label: "Beli Token"
    },
    {
      name: "Kenapa TPC",
      href: "/why-tpc",
      icon: "💎",
      label: "Tentang Kami"
    },
    {
      name: "Risiko",
      href: "/risk-disclosure",
      icon: "⚠️",
      label: "Disclosure"
    },
    {
      name: "Masuk",
      href: "/login",
      icon: "👤",
      label: "Akun Saya"
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0f] via-[#1a1a24] to-[#1a1a24] border-t border-[#2a2a3a]/50 backdrop-blur-lg z-50 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-around items-center py-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex flex-col items-center justify-center px-3 py-2 rounded-xl transition-all duration-300 relative ${
                  isActive
                    ? "text-[#d4af37]"
                    : "text-[#6b7280] hover:text-white"
                }`}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4e4c1] rounded-full"></div>
                )}
                
                {/* Icon container */}
                <div className={`relative transition-all duration-300 ${
                  isActive ? "scale-110" : "scale-100 group-hover:scale-105"
                }`}>
                  <span className="text-2xl block filter drop-shadow-lg">{item.icon}</span>
                  {/* Glow effect for active */}
                  {isActive && (
                    <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-xl"></div>
                  )}
                </div>
                
                {/* Label */}
                <span className="text-xs font-medium mt-1 leading-tight">
                  {item.name}
                </span>
                
                {/* Subtle hover background */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#d4af37]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
