"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavigation() {
  const pathname = usePathname();
  
  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: "🏠",
      label: "Home"
    },
    {
      name: "DAO",
      href: "/dao",
      icon: "🏛️",
      label: "DAO"
    },
    {
      name: "Presale",
      href: "/presale",
      icon: "🚀",
      label: "Presale"
    },
    {
      name: "Academy",
      href: "/academy",
      icon: "📚",
      label: "Academy"
    },
    {
      name: "Login",
      href: "/login",
      icon: "👤",
      label: "Login"
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
                    : "text-[#a0a0a0] hover:text-white"
                }`}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#d4af37] rounded-full"></div>
                )}
                
                {/* Icon */}
                <span className={`text-lg md:text-xl mb-1 transition-transform duration-300 ${
                  isActive ? "scale-110" : "group-hover:scale-105"
                }`}>
                  {item.icon}
                </span>
                
                {/* Label */}
                <span className="text-xs md:text-sm font-medium">
                  {item.name}
                </span>
                
                {/* Hover effect */}
                <div className={`absolute inset-0 bg-[#d4af37]/5 rounded-xl transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}></div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
