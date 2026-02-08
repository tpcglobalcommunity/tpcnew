import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import LanguageSwitch from "./LanguageSwitch";

interface PremiumShellProps {
  children: ReactNode;
  className?: string;
}

export default function PremiumShell({ children, className }: PremiumShellProps) {
  return (
    <div className={cn("min-h-screen bg-bg text-fg", className)}>
      {/* Language Switch - Fixed Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitch />
      </div>
      
      <div className="pb-28">
        {children}
      </div>
    </div>
  );
}

export { PremiumShell };
