import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      "bg-[#1a1a24] border border-[#2a2a3a]/50 rounded-xl p-4 md:p-6",
      className
    )}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn("text-lg md:text-xl font-bold text-white", className)}>
      {children}
    </h3>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Button({ children, href, variant = "primary", size = "md", className }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl";
  
  const variants = {
    primary: "bg-[#d4af37] hover:bg-[#b8941f] text-black",
    secondary: "bg-[#2a2a3a] hover:bg-[#3a3a4a] text-white border border-[#d4af37]/30 hover:border-[#d4af37]/50"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-[#2a2a3a]/50 text-[#a0a0a0] border border-[#2a2a3a]/50",
    success: "bg-green-500/10 text-green-400 border border-green-500/30",
    warning: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30"
  };

  const classes = cn(
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border",
    variants[variant],
    className
  );

  return (
    <span className={classes}>
      {children}
    </span>
  );
}

interface SeparatorProps {
  className?: string;
}

export function Separator({ className }: SeparatorProps) {
  return (
    <div className={cn("border-t border-[#2a2a3a]/50", className)} />
  );
}
