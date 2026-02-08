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
    glass: "bg-[#15110C]/80 backdrop-blur-sm border border-[#C8A24D]/20",
    solid: "bg-[#15110C] border border-[#C8A24D]/30"
  };

  return (
    <div className={cn(
      "rounded-2xl shadow-lg transition-all duration-300",
      variants[variant],
      hover && "hover:shadow-xl hover:border-[#C8A24D]/40 hover:bg-[#15110C]/90",
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
    <div className={cn("p-6 pt-4 border-t border-[#C8A24D]/20", className)}>
      {children}
    </div>
  );
}
