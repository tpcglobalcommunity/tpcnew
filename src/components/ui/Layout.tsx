import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className={cn(
      "min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a24] to-[#0f0f1a]",
      className
    )}>
      {/* Subtle radial gradient overlay */}
      <div className="fixed inset-0 bg-gradient-radial from-[#d4af37]/5 via-transparent to-transparent pointer-events-none" 
           style={{
             background: 'radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.03) 0%, transparent 50%)'
           }}
      />
      
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

export function PageWrapper({ children, className }: LayoutProps) {
  return (
    <div className={cn("pb-20", className)}>
      {children}
    </div>
  );
}
