import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className={cn(
      "min-h-screen bg-[#0E0B07]",
      className
    )}>
      {/* Subtle radial gold glow overlay for HERO only */}
      <div className="fixed inset-0 pointer-events-none" 
           style={{
             background: 'radial-gradient(circle at 30% 20%, rgba(200, 162, 77, 0.08) 0%, transparent 40%), radial-gradient(circle at 70% 80%, rgba(200, 162, 77, 0.05) 0%, transparent 35%)'
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
