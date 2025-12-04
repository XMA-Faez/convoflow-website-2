import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: "default" | "muted" | "primary";
}

export function Section({
  children,
  id,
  className,
  background = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        {
          "bg-background": background === "default",
          "bg-neutral-50": background === "muted",
          "bg-primary-50": background === "primary",
        },
        className
      )}
    >
      {children}
    </section>
  );
}
