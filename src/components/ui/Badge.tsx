import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  tone?: "gold" | "neutral";
}

export function Badge({ children, className, tone = "neutral" }: BadgeProps) {
  const variants = {
    gold: "border-accent/30 text-fg",
    neutral: "border-border/10 text-fg/90"
  };

  return (
    <span className={cn(
      "inline-flex items-center rounded-full border bg-white/5 px-3 py-1 text-xs font-medium",
      variants[tone],
      className
    )}>
      {children}
    </span>
  );
}
