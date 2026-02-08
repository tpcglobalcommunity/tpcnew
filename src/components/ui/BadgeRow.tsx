import { cn } from "@/lib/utils";

interface BadgeRowProps {
  items: string[];
  className?: string;
  variant?: "default" | "success" | "warning";
}

export function BadgeRow({ items, className, variant = "default" }: BadgeRowProps) {
  const variants = {
    default: "bg-[#15110C]/60 text-[#F5F5F4] border-[#C8A24D]/30",
    success: "bg-green-500/10 text-green-400 border-green-500/30",
    warning: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
  };

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item, index) => (
        <span
          key={index}
          className={cn(
            "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-300",
            variants[variant]
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
