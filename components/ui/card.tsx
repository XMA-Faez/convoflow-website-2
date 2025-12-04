import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

const cardVariants = cva("rounded-2xl transition-all duration-200", {
  variants: {
    variant: {
      default: "bg-white border border-neutral-100",
      elevated: "bg-white shadow-lg shadow-neutral-200/50",
      glass: "bg-white/80 backdrop-blur-sm border border-neutral-200/50 shadow-lg",
      bordered: "bg-white border border-neutral-200",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("p-6", className)} {...props} />;
});

CardContent.displayName = "CardContent";

export { cardVariants };
