import { ReactNode } from 'react';

interface PremiumButtonProps {
  children: ReactNode;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function PremiumButton({ 
  children, 
  href, 
  size = 'md', 
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
  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseClasses} ${sizeClasses[size]} ${widthClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

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
      className={`${classes} shadow-gold hover:shadow-hover transform hover:-translate-y-1 active:scale-99`}
    >
      {children}
    </button>
  );
}
