import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Container({ children, className, size = "md" }: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-[480px]",
    md: "max-w-[560px] md:max-w-[760px]",
    lg: "max-w-[640px] md:max-w-[880px] lg:max-w-[1120px]"
  };

  return (
    <div className={cn(
      "mx-auto w-full px-4",
      sizeClasses[size],
      className
    )}>
      {children}
    </div>
  );
}
