import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function Section({ children, title, subtitle, className, centered = true }: SectionProps) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      {(title || subtitle) && (
        <div className={cn(
          "mb-8 md:mb-12",
          centered && "text-center"
        )}>
          {title && (
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-base md:text-lg text-[#a0a0a0] leading-relaxed max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
