import { cn } from "@/lib/utils";

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
        <div key={index} className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0">
          <div className="flex-1">
            <p className="text-sm font-medium text-white">{item.label}</p>
            {item.hint && (
              <p className="text-xs text-[#a0a0a0] mt-1">{item.hint}</p>
            )}
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-[#d4af37]">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
