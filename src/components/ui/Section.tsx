import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  right?: ReactNode;
  className?: string;
}

export function Section({ children, title, subtitle, right, className }: SectionProps) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      {(title || subtitle || right) && (
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-6">
          <div>
            {title && (
              <h2 className="text-lg font-semibold text-fg leading-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm text-muted leading-relaxed mt-2">
                {subtitle}
              </p>
            )}
          </div>
          {right && (
            <div className="flex-shrink-0">
              {right}
            </div>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
