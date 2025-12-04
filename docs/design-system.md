# Design System

## Color Palette

All colors use OKLCH format for perceptual uniformity.

### Primary (Coral Pink)
| Token | Value | Usage |
|-------|-------|-------|
| `primary-50` | `oklch(0.97 0.015 25)` | Backgrounds, hover states |
| `primary-100` | `oklch(0.94 0.035 25)` | Light backgrounds |
| `primary-200` | `oklch(0.88 0.07 22)` | Borders, dividers |
| `primary-300` | `oklch(0.80 0.12 20)` | Icons, decorative |
| `primary-400` | `oklch(0.72 0.15 18)` | Accent elements |
| `primary-500` | `oklch(0.65 0.16 16)` | Primary buttons, links |
| `primary-600` | `oklch(0.55 0.14 16)` | Hover states |
| `primary-700` | `oklch(0.45 0.12 16)` | Active states |
| `primary-800` | `oklch(0.35 0.09 16)` | Dark accents |
| `primary-900` | `oklch(0.25 0.06 16)` | Text on light backgrounds |
| `primary-950` | `oklch(0.18 0.04 16)` | Darkest accent |

### Neutral (Stone-based)
Uses Tailwind's stone palette for neutral grays with warm undertones.

### Semantic Colors
- **Success**: Green variants for positive feedback
- **Warning**: Orange variants for caution states
- **Error**: Red variants for error states

## Typography

### Font Family
- **Sans**: Geist Sans (variable font)
- **Mono**: Geist Mono (for code)

### Usage
- Headlines: `font-sans font-bold`
- Body: `font-sans font-normal`
- Code: `font-mono`

## Spacing

Using Tailwind's default spacing scale. Section padding:
- Desktop: `py-24` (6rem)
- Mobile: `py-16` (4rem)

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | `0.375rem` | Small elements |
| `radius-md` | `0.5rem` | Buttons, inputs |
| `radius-lg` | `0.75rem` | Cards |
| `radius-xl` | `1rem` | Large cards |
| `radius-2xl` | `1.5rem` | Hero elements |
| `radius-full` | `9999px` | Pills, avatars |

## Components

All primitive components use `class-variance-authority` (CVA) for type-safe variants.

### Button Variants
- `primary`: Solid coral background
- `secondary`: Outlined coral border
- `ghost`: Transparent with hover state

### Input States
- `default`: Standard neutral border
- `error`: Red border for validation errors
- `success`: Green border for valid input
