import { ReactNode } from "react";
import clsx from "clsx";

export type PremiumCardVariant = "default" | "glass";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  variant?: PremiumCardVariant;
}

export function PremiumCard({
  children,
  className = "",
  variant = "default",
}: PremiumCardProps) {
  const baseClass =
    "relative overflow-hidden rounded-2xl transition-all duration-300";

  const variantClass =
    variant === "glass"
      ? // glass / hero / warning style
        "border-2 border-gold/30 bg-white/5 backdrop-blur-md shadow-2xl hover:border-gold/50"
      : // default card style (yang lama)
        "border border-gold-soft bg-card shadow-soft hover:border-gold hover:shadow-hover";

  return (
    <div className={clsx(baseClass, variantClass, className)}>
      {children}
    </div>
  );
}

export function PremiumCardContent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("relative z-10 p-6", className)}>
      {children}
    </div>
  );
}
