import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "gold" | "dark";
}

export function PremiumCard({ children, className, variant = "default" }: PremiumCardProps) {
  const variants = {
    default: "bg-[#12121a] border border-[#2a2a3a]",
    gold: "bg-[#12121a] border border-[rgba(212,175,55,0.3)]",
    dark: "bg-[#0a0a0f] border border-[#1a1a24]",
  };

  return (
    <div className={cn("rounded-lg p-6", variants[variant], className)}>
      {children}
    </div>
  );
}
