import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { TextareaHTMLAttributes, forwardRef } from "react";

const textareaVariants = cva(
  "w-full rounded-xl border bg-white px-4 py-3 text-base transition-all duration-200 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-offset-1 resize-none",
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

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, state, label, error, id, rows = 4, ...props }, ref) => {
    const textareaId = id || props.name;
    const effectiveState = error ? "error" : state;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-neutral-700"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(textareaVariants({ state: effectiveState }), className)}
          {...props}
        />
        {error && <span className="text-sm text-error-600">{error}</span>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { textareaVariants };
