import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  variant?: "info" | "success" | "warning" | "error";
  className?: string;
}

export function Alert({ children, variant = "info", className }: AlertProps) {
  const variants = {
    info: "bg-blue-500/10 border border-blue-500/20 text-blue-400",
    success: "bg-green-500/10 border border-green-500/20 text-green-400",
    warning: "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400",
    error: "bg-red-500/10 border border-red-500/20 text-red-400",
  };

  return (
    <div className={cn("rounded-lg p-4", variants[variant], className)}>
      {children}
    </div>
  );
}

interface AlertTitleProps {
  children: ReactNode;
  className?: string;
}

export function AlertTitle({ children, className }: AlertTitleProps) {
  return <h5 className={cn("font-medium mb-1", className)}>{children}</h5>;
}

interface AlertDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function AlertDescription({ children, className }: AlertDescriptionProps) {
  return <div className={cn("text-sm opacity-90", className)}>{children}</div>;
}
