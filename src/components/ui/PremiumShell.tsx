import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import BottomNavigation from "./BottomNavigation";

interface PremiumShellProps {
  children: ReactNode;
  className?: string;
}

export default function PremiumShell({ children, className }: PremiumShellProps) {
  return (
    <div className={cn("min-h-screen bg-[#0f0f1a] text-white", className)}>
      <div className="pb-20">
        {children}
      </div>
      <BottomNavigation />
    </div>
  );
}

export { PremiumShell };
