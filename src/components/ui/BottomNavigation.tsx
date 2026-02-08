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
      icon: "🚀"
    },
    {
      name: "Why TPC",
      href: "/why-tpc",
      icon: "💎"
    },
    {
      name: "Risk",
      href: "/risk-disclosure",
      icon: "⚠️"
    },
    {
      name: "Login",
      href: "/login",
      icon: "👤"
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a24] border-t border-[#2a2a3a] z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-all ${
                  isActive
                    ? "text-[#d4af37]"
                    : "text-[#6b7280] hover:text-white"
                }`}
              >
                <span className="text-xl mb-1">{item.icon}</span>
                <span className="text-xs font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
