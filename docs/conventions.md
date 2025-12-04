# Coding Conventions

## General Rules

1. **No hex/rgb colors** - Always use OKLCH via Tailwind tokens
2. **Component-first** - Pages should import components, not contain large markup
3. **No hardcoded values** - Use design tokens for colors, spacing, radius
4. **Expressive naming** - Avoid comments; use clear function/variable names
5. **Use bun** - Never npm

## File Organization

```
components/
├── primitives/     # Base UI (Button, Input, Card)
├── layout/         # Structure (Container, Section, Header)
├── sections/       # Page sections (HeroSection, etc.)
├── features/       # Feature-specific (FlowDiagram, ContactForm)
└── animations/     # Animation wrappers
```

## Component Patterns

### Primitives with CVA
```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("base-classes", {
  variants: {
    intent: { primary: "...", secondary: "..." },
    size: { sm: "...", md: "...", lg: "..." },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
```

### Animation Wrappers
Use Framer Motion's `motion` components with `whileInView` for scroll-triggered animations.

## Tailwind Usage

- Use semantic color tokens: `bg-primary-500`, `text-neutral-600`
- Use spacing scale: `p-4`, `gap-6`, `space-y-8`
- Use responsive prefixes: `md:`, `lg:`, `xl:`

## Accessibility

- All interactive elements must be keyboard accessible
- Use semantic HTML (`<button>`, `<nav>`, `<main>`, etc.)
- Include proper ARIA labels where needed
- Ensure sufficient color contrast
