import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import BottomNavigation from "./BottomNavigation";
import LanguageSwitch from "./LanguageSwitch";

interface PremiumShellProps {
  children: ReactNode;
  className?: string;
}

export default function PremiumShell({ children, className }: PremiumShellProps) {
  return (
    <div className={cn("min-h-screen bg-[#0E0B07] text-[#F5F5F4]", className)}>
      {/* Language Switch - Fixed Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitch />
      </div>
      
      <div className="pb-20">
        {children}
      </div>
      <BottomNavigation />
    </div>
  );
}

export { PremiumShell };
