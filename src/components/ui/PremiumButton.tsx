import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface PremiumButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  fullWidth?: boolean;
  disabled?: boolean;
}

export function PremiumButton({ 
  children, 
  className, 
  variant = "primary", 
  size = "md", 
  fullWidth = false,
  disabled = false 
}: PremiumButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-0";
  
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base"
  };

  const variants = {
    primary: disabled 
      ? "bg-gray-600 text-gray-400 cursor-not-allowed" 
      : "bg-accent text-bg hover:bg-accent2",
    secondary: disabled 
      ? "border-gray-600 text-gray-400 cursor-not-allowed" 
      : "border border-accent/60 text-fg hover:bg-accent/10",
    ghost: disabled 
      ? "text-gray-400 cursor-not-allowed" 
      : "text-fg hover:bg-white/5"
  };

  return (
    <button 
      className={cn(
        baseClasses,
        sizes[size],
        variants[variant],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
