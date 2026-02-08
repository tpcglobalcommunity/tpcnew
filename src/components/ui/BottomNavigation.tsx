"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { publicPath } from "@/lib/lang-helpers";

interface BottomNavigationProps {
  lang?: string;
}

export default function BottomNavigation({ lang }: BottomNavigationProps) {
  const pathname = usePathname();
  
  // Extract current language from pathname or use prop
  const getCurrentLang = () => {
    if (lang) return lang;
    const segments = pathname.split('/').filter(Boolean);
    return segments[0] || 'en';
  };
  
  const currentLang = getCurrentLang();
  
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
    <div className="fixed bottom-0 left-0 right-0 bg-bg border-t border-border/20 backdrop-blur-lg z-50 shadow-2xl" style={{ zIndex: 9999 }}>
      <div className="max-w-6xl mx-auto" style={{ position: 'relative', zIndex: 9999 }}>
        <div className="flex justify-around items-center py-3">
          {navItems.map((item) => {
            let fullHref;
            
            // Login route - NO language prefix
            if (item.href === "/login") {
              fullHref = "/login";
            } else {
              fullHref = publicPath(currentLang, item.href);
            }
            
            const isActive = pathname === fullHref || 
                           (item.href !== "/" && item.href !== "/login" && pathname.startsWith(fullHref));
            
            return (
              <Link
                key={item.href}
                href={fullHref}
                className={`group flex flex-col items-center justify-center px-3 py-2 rounded-xl transition-all duration-300 relative ${
                  isActive
                    ? "text-accent"
                    : "text-muted hover:text-fg"
                }`}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full"></div>
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
                <div className={`absolute inset-0 bg-accent/5 rounded-xl transition-opacity duration-300 ${
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
