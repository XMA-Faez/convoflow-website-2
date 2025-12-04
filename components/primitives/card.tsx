import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

const cardVariants = cva("rounded-2xl transition-all duration-200", {
  variants: {
    variant: {
      default: "bg-white border border-neutral-100",
      elevated: "bg-white shadow-lg shadow-neutral-200/50",
      muted: "bg-neutral-50 border border-neutral-100",
      primary: "bg-primary-50 border border-primary-100",
      glass: "bg-white/80 backdrop-blur-sm border border-neutral-200/50 shadow-lg",
      bordered: "bg-white border border-neutral-200",
    },
    padding: {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    },
    hover: {
      true: "hover:shadow-xl hover:-translate-y-1",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "md",
    hover: false,
  },
});

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hover, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, padding, hover }), className)}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export { cardVariants };
