"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

interface LanguageSwitchProps {
  className?: string;
}

export default function LanguageSwitch({ className }: LanguageSwitchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = pathname.startsWith('/en') ? 'en' : pathname.startsWith('/id') ? 'id' : 'en';
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'id', name: 'Indonesia', flag: '🇮🇩' }
  ];

  const handleLanguageChange = (lang: string) => {
    const newPath = pathname.replace(/^\/(en|id)/, `/${lang}`);
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Current Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-[#1a1a24] border border-[#2a2a3a]/50 rounded-xl hover:border-[#d4af37]/50 transition-all duration-300 group"
      >
        <span className="text-lg">
          {languages.find(lang => lang.code === currentLang)?.flag}
        </span>
        <span className="text-sm font-medium text-[#a0a0a0] group-hover:text-white transition-colors duration-300">
          {languages.find(lang => lang.code === currentLang)?.name}
        </span>
        <svg 
          className={`w-4 h-4 text-[#a0a0a0] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-[#1a1a24] border border-[#2a2a3a]/50 rounded-xl shadow-2xl z-50 overflow-hidden">
          <div className="py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[#2a2a3a]/50 transition-colors duration-300 ${
                  lang.code === currentLang ? 'bg-[#d4af37]/10 text-[#d4af37]' : 'text-[#a0a0a0] hover:text-white'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
                {lang.code === currentLang && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
