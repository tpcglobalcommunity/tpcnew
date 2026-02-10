import { ReactNode } from 'react';

interface PremiumShellProps {
  children: ReactNode;
}

export function PremiumShell({ children }: PremiumShellProps) {
  return (
    <div className="min-h-screen bg-[#0B0E11] flex flex-col">
      {children}
    </div>
  );
}
