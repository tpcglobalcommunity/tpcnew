import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import BottomNavigation from "@/components/ui/BottomNavigation";
import LanguageSwitch from "@/components/ui/LanguageSwitch";
import { normalizeLang, type LangParams } from "@/lib/lang-helpers";

export default function LangLayout({ children, params }: { children: React.ReactNode; params: LangParams }) {
  const lang = normalizeLang(params.lang);
  
  return (
    <div className="min-h-dvh bg-bg text-fg overflow-x-hidden">
      {/* Language Switch - Fixed Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitch />
      </div>
      
      <div className="pb-20">
        {children}
      </div>
      <BottomNavigation lang={lang} />
    </div>
  );
}
