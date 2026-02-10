import { ReactNode } from 'react';

interface AlertProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  className?: string;
}

export function Alert({ children, variant = 'default', className = "" }: AlertProps) {
  const baseClasses = "p-4 rounded-lg border";
  const variantClasses = {
    default: "bg-gray-500/10 border-gray-500/30 text-gray-300",
    success: "bg-green-500/10 border-green-500/30 text-green-300",
    warning: "bg-amber-500/10 border-amber-500/30 text-amber-300",
    error: "bg-red-500/10 border-red-500/30 text-red-300"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
