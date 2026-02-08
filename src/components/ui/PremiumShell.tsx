import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PremiumShellProps {
  children: ReactNode;
  className?: string;
}

export function PremiumShell({ children, className }: PremiumShellProps) {
  return (
    <div className={cn("min-h-screen bg-[#0a0a0f] text-white", className)}>
      {children}
    </div>
  );
}
