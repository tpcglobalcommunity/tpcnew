import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  variant?: "glass" | "solid";
  hover?: boolean;
}

export function PremiumCard({ children, className, variant = "glass", hover = true }: PremiumCardProps) {
  const variants = {
    glass: "bg-white/5 backdrop-blur-sm border border-white/10",
    solid: "bg-[#1a1a24] border border-[#2a2a3a]/50"
  };

  return (
    <div className={cn(
      "rounded-2xl shadow-lg transition-all duration-300",
      variants[variant],
      hover && "hover:shadow-xl hover:border-[#d4af37]/20 hover:bg-white/10",
      className
    )}>
      {children}
    </div>
  );
}

interface PremiumCardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function PremiumCardHeader({ children, className }: PremiumCardHeaderProps) {
  return (
    <div className={cn("p-6 pb-4", className)}>
      {children}
    </div>
  );
}

interface PremiumCardContentProps {
  children: ReactNode;
  className?: string;
}

export function PremiumCardContent({ children, className }: PremiumCardContentProps) {
  return (
    <div className={cn("p-6 pt-0", className)}>
      {children}
    </div>
  );
}

interface PremiumCardFooterProps {
  children: ReactNode;
  className?: string;
}

export function PremiumCardFooter({ children, className }: PremiumCardFooterProps) {
  return (
    <div className={cn("p-6 pt-4 border-t border-white/10", className)}>
      {children}
    </div>
  );
}
