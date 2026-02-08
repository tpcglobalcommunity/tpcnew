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
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-[#0f0f1a]";
  
  const variants = {
    primary: disabled 
      ? "bg-gray-600 text-gray-400 cursor-not-allowed" 
      : "bg-[#d4af37] hover:bg-[#b8941f] text-black shadow-lg hover:shadow-xl",
    secondary: disabled 
      ? "border-gray-600 text-gray-400 cursor-not-allowed" 
      : "bg-transparent border border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37]/10 hover:border-[#d4af37]"
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
