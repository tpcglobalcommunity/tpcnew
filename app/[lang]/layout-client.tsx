'use client';

import { normalizeLang, type LangParams, type Lang } from "@/lib/lang-helpers";
import { PublicTopBar } from "@/components/navigation/PublicTopBar";
import { SideMenuDrawer } from "@/components/navigation/SideMenuDrawer";
import { LegalFooter } from "@/components/navigation/LegalFooter";
import { useState, useEffect } from "react";
import "../globals.css";

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<LangParams>;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<Lang>('id');

  useEffect(() => {
    const initLang = async () => {
      const { lang } = await params;
      return normalizeLang(lang);
    };
    initLang().then(setCurrentLang);
  }, [params]);

  return (
    <div className="min-h-screen bg-[#0B0E11]">
      <div className="min-h-screen flex flex-col">
        <PublicTopBar currentLang={currentLang} onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
        
        <main className="pt-14 pb-20 flex-1">
          {children}
        </main>
        
        <LegalFooter currentLang={currentLang} />
      </div>
      
      {/* Mobile Menu Drawer */}
      <SideMenuDrawer 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        currentLang={currentLang} 
      />
    </div>
  );
}
