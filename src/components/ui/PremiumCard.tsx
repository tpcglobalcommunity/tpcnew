import { ReactNode } from 'react';

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
}

export function PremiumCard({ children, className = "" }: PremiumCardProps) {
  return (
    <div className={`border border-gold-soft bg-card shadow-soft hover:border-gold hover:shadow-hover transition-all duration-300 relative overflow-hidden rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

export function PremiumCardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`p-6 relative z-10 ${className}`}>
      {children}
    </div>
  );
}
