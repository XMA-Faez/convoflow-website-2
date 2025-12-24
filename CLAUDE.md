# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ConvoFlow marketing website built with Next.js 16, React 19, and Tailwind CSS v4. The site showcases AI-powered lead conversion services with interactive demos and animations.

## Commands

```bash
bun dev          # Start development server
bun run build    # Production build
bun run lint     # Run ESLint
bun add <pkg>    # Install packages (never use npm)
```

## Architecture

### Directory Structure

```
app/                      # Next.js app directory
├── (home)/               # Route group for home page
│   ├── page.tsx          # Composes section components
│   └── _components/      # Page-specific sections
│       ├── hero/         # Hero with flow diagram
│       ├── ai-demo/      # AI assistant demo
│       ├── clients/      # Client logos
│       ├── process/      # Process steps
│       ├── calculator/   # Lead cost calculator
│       └── contact/      # Contact form
├── globals.css           # Tailwind v4 @theme configuration
└── layout.tsx            # Root layout with Geist fonts

components/
├── primitives/           # CVA-based base components (Button, Input, Card)
├── layout/               # Structure (Container, Section, Header, Footer)
├── animations/           # Framer Motion wrappers (ScrollReveal, StaggerChildren)
└── ui/                   # Custom UI (scroll-velocity marquee)

lib/
├── utils.ts              # cn() utility (clsx + tailwind-merge)
├── animations.ts         # Framer Motion variant presets
├── icon-map.ts           # Lucide icon name to component mapping
└── sanity/               # Sanity CMS integration
    ├── client.ts         # Sanity client
    ├── queries.ts        # GROQ queries
    ├── fetch.ts          # Data fetching with fallbacks
    ├── types.ts          # TypeScript types
    └── fallback.ts       # Default content

sanity/
├── sanity.config.ts      # Sanity configuration
├── env.ts                # Environment variables
└── schemaTypes/          # Content schemas

app/studio/               # Sanity Studio (embedded)

data/                     # Static data (country codes, etc.)
```

### Component Pattern

All primitives use class-variance-authority (CVA) for type-safe variants:

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const variants = cva("base-classes", {
  variants: {
    intent: { primary: "...", secondary: "..." },
    size: { sm: "...", md: "...", lg: "..." },
  },
  defaultVariants: { intent: "primary", size: "md" },
});
```

### Animation System

Use presets from `lib/animations.ts` with Framer Motion:
- `fadeInUp`, `fadeIn`, `fadeInDown` - entrance animations
- `staggerContainer` - parent for staggered children
- `slideInLeft`, `slideInRight` - horizontal slides
- `scaleIn` - scale entrance
- `pulseScale`, `floatY` - infinite animations

## Code Conventions

### Colors
- **Always use OKLCH** via Tailwind tokens, never hex/rgb
- Primary: `primary-50` through `primary-950` (coral pink)
- Neutral: `neutral-50` through `neutral-950` (stone-based)
- Semantic: `success-*`, `warning-*`, `error-*`

### Styling
- Use design tokens from `globals.css` @theme block
- Border radius uses `--radius-base` offset system (currently 0 = sharp corners)
- Responsive prefixes: `md:`, `lg:`, `xl:`

### Components
- Pages import components, never contain large markup
- Use expressive function/variable names, minimize comments
- All interactive elements must be keyboard accessible
- Use `forwardRef` for primitive components

### Path Alias
- `@/*` maps to project root (e.g., `@/components/primitives/button`)

## Design Tokens

The theme is defined in `app/globals.css` using Tailwind v4's @theme syntax:

```css
--color-primary-*: Coral pink scale (brand-pink)
--color-neutral-*: Stone scale
--font-sans: Geist Sans
--font-mono: Geist Mono
--radius-base: 0rem (sharp corners - adjustable)
```

See `docs/design-system.md` for full token documentation.

## Content Management (Sanity CMS)

Content is managed via Sanity CMS with an embedded studio at `/studio`.

### Data Flow
1. Content is fetched from Sanity at build time (static generation)
2. Falls back to `lib/sanity/fallback.ts` when Sanity is empty
3. Components receive content as props from page.tsx

### Key Files
- `lib/sanity/fetch.ts` - Data fetching utilities
- `lib/sanity/queries.ts` - GROQ queries
- `sanity/schemaTypes/` - Content schemas

### Environment Variables
```
NEXT_PUBLIC_SANITY_PROJECT_ID=8iy7ioai
NEXT_PUBLIC_SANITY_DATASET=production
```

See `docs/cms.md` for detailed CMS documentation.
