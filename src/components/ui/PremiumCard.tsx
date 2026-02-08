import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  variant?: "glass" | "solid";
}

export function PremiumCard({ children, className, variant = "glass" }: PremiumCardProps) {
  const variants = {
    glass: "bg-white/5 backdrop-blur-sm",
    solid: "bg-surface"
  };

  return (
    <div className={cn(
      "rounded-2xl border border-border/10 shadow-soft",
      variants[variant],
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
    <div className={cn("p-4 pb-3", className)}>
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
    <div className={cn("p-4 pt-0", className)}>
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
    <div className={cn("p-4 pt-3 border-t border-border/10", className)}>
      {children}
    </div>
  );
}
