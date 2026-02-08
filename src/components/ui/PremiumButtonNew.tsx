import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PremiumButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
  disabled?: boolean;
}

export function PremiumButton({ children, href, variant = "primary", size = "md", className, disabled = false }: PremiumButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8A24D]/50 focus:ring-offset-2 focus:ring-offset-[#0E0B07]";
  
  const variants = {
    primary: disabled 
      ? "bg-gray-600 text-gray-400 cursor-not-allowed" 
      : "bg-[#C8A24D] hover:bg-[#B8941F] text-black shadow-lg hover:shadow-xl",
    secondary: disabled 
      ? "border-gray-600 text-gray-400 cursor-not-allowed" 
      : "bg-transparent border border-[#C8A24D]/50 text-[#C8A24D] hover:bg-[#C8A24D]/10 hover:border-[#C8A24D]"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base"
  };

  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  if (href && !disabled) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
