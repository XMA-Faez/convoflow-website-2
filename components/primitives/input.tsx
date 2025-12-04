import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

const inputVariants = cva(
  "w-full rounded-xl border bg-white px-4 py-3 text-base transition-all duration-200 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-offset-1",
  {
    variants: {
      state: {
        default:
          "border-neutral-200 focus:border-primary-400 focus:ring-primary-200",
        error: "border-error-600 focus:border-error-600 focus:ring-error-100",
        success:
          "border-success-600 focus:border-success-600 focus:ring-success-100",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, state, label, error, id, ...props }, ref) => {
    const inputId = id || props.name;
    const effectiveState = error ? "error" : state;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-neutral-700"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(inputVariants({ state: effectiveState }), className)}
          {...props}
        />
        {error && <span className="text-sm text-error-600">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { inputVariants };
