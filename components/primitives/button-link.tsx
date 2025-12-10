import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { AnchorHTMLAttributes, forwardRef } from "react";
import { buttonVariants } from "./button";

export interface ButtonLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    VariantProps<typeof buttonVariants> {
  href: string;
  external?: boolean;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, intent, size, rounded, fullWidth, href, external, children, ...props }, ref) => {
    const isExternal = external || href.startsWith("http") || href.startsWith("//");

    const classes = cn(buttonVariants({ intent, size, rounded, fullWidth }), className);

    if (isExternal) {
      return (
        <a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
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
        className={classes}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
);

ButtonLink.displayName = "ButtonLink";
