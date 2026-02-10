import { ReactNode } from 'react';

interface PremiumButtonProps {
  children: ReactNode;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'gold' | 'outline';
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function PremiumButton({ 
  children, 
  href, 
  size = 'md', 
  variant = 'primary',
  fullWidth = false, 
  className = "", 
  onClick,
  disabled = false
}: PremiumButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  const variantClasses = {
    primary: "bg-amber-500 text-black hover:bg-amber-600 focus:ring-amber-500",
    secondary: "bg-[#1A1F2E] text-white hover:bg-[#2A2F3E] focus:ring-[#1A1F2E]",
    gold: "bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 focus:ring-amber-500 shadow-gold hover:shadow-hover transform hover:-translate-y-1 active:scale-99",
    outline: "border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500/50 transition-all duration-300 font-semibold"
  };
  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className={classes}
    >
      {children}
    </button>
  );
}
