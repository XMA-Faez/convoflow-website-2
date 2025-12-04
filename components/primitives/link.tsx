import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { AnchorHTMLAttributes, forwardRef } from "react";

const linkVariants = cva(
  "inline-flex items-center transition-all duration-200 cursor-pointer",
  {
    variants: {
      variant: {
        default: "text-primary-600 hover:text-primary-700 hover:underline",
        muted: "text-neutral-500 hover:text-neutral-700",
        nav: "text-neutral-700 hover:text-primary-600 font-medium",
        underline:
          "text-primary-600 underline underline-offset-2 hover:text-primary-700",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    VariantProps<typeof linkVariants> {
  href: string;
  external?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, href, external, children, ...props }, ref) => {
    const isExternal = external || href.startsWith("http") || href.startsWith("//");

    if (isExternal) {
      return (
        <a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(linkVariants({ variant, size }), className)}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <NextLink
        ref={ref}
        href={href}
        className={cn(linkVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";

export { linkVariants };
