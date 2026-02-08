import { cn } from "@/lib/cn";

interface StatItem {
  label: string;
  value: string;
  hint?: string;
}

interface StatRowProps {
  items: StatItem[];
  className?: string;
}

export function StatRow({ items, className }: StatRowProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted">{item.label}</span>
            <span className="text-sm font-bold text-fg">{item.value}</span>
          </div>
          {item.hint && (
            <span className="text-xs text-muted font-mono truncate">{item.hint}</span>
          )}
        </div>
      ))}
    </div>
  );
}
