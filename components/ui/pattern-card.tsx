"use client";

import { cn } from "@/lib/utils";

interface PatternCardProps extends React.HTMLAttributes<HTMLDivElement> {
  pattern?: "dots" | "lines" | "waves";
  intensity?: "light" | "medium" | "heavy";
  children: React.ReactNode;
}

export function PatternCard({
  pattern = "dots",
  intensity = "light",
  className,
  children,
  ...props
}: PatternCardProps) {
  const patternStyles = {
    dots: {
      light: "bg-[radial-gradient(circle,_rgba(var(--primary-rgb),_0.1)_1px,_transparent_1px)] [background-size:20px_20px]",
      medium: "bg-[radial-gradient(circle,_rgba(var(--primary-rgb),_0.15)_1.5px,_transparent_1.5px)] [background-size:16px_16px]",
      heavy: "bg-[radial-gradient(circle,_rgba(var(--primary-rgb),_0.2)_2px,_transparent_2px)] [background-size:14px_14px]",
    },
    lines: {
      light: "bg-[linear-gradient(45deg,_rgba(var(--primary-rgb),_0.1)_25%,_transparent_25%,_transparent_75%,_rgba(var(--primary-rgb),_0.1)_75%,_rgba(var(--primary-rgb),_0.1))]",
      medium: "bg-[linear-gradient(45deg,_rgba(var(--primary-rgb),_0.15)_25%,_transparent_25%,_transparent_75%,_rgba(var(--primary-rgb),_0.15)_75%,_rgba(var(--primary-rgb),_0.15))]",
      heavy: "bg-[linear-gradient(45deg,_rgba(var(--primary-rgb),_0.2)_25%,_transparent_25%,_transparent_75%,_rgba(var(--primary-rgb),_0.2)_75%,_rgba(var(--primary-rgb),_0.2))]",
    },
    waves: {
      light: "bg-[radial-gradient(ellipse_at_center,_rgba(var(--primary-rgb),_0.1)_0%,_transparent_70%)]",
      medium: "bg-[radial-gradient(ellipse_at_center,_rgba(var(--primary-rgb),_0.15)_0%,_transparent_70%)]",
      heavy: "bg-[radial-gradient(ellipse_at_center,_rgba(var(--primary-rgb),_0.2)_0%,_transparent_70%)]",
    },
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-colors",
        patternStyles[pattern][intensity],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}