# Sanity CMS Integration

## Overview

The website uses Sanity CMS for content management, allowing non-technical users to edit content through a visual interface.

## Access

- **Studio URL**: `http://localhost:3000/studio` (development) or `https://your-domain.com/studio` (production)
- **Sanity Dashboard**: https://sanity.io/manage (project administration)

## Project Configuration

- **Project ID**: `8iy7ioai`
- **Dataset**: `production`
- **API Version**: `2024-01-01`

## Content Structure

### Singleton Documents (one per type)

| Document | Description |
|----------|-------------|
| Hero | Main hero section content |
| AI Demo | AI demo section labels and text |
| Process | Process section with steps |
| Calculator | ROI calculator labels and settings |
| Contact | Contact form text and settings |
| Testimonial Section | Section header for testimonials |
| Navigation | Nav links, contact info, social links |
| Layout | Header/footer content |

### Collection Documents (multiple entries)

| Document | Description |
|----------|-------------|
| Testimonials | Individual customer testimonials |
| Client Logos | Company logos for the marquee |

## File Structure

```
sanity/
├── sanity.config.ts     # Main configuration
├── env.ts               # Environment variables
└── schemaTypes/         # Content schemas
    ├── index.ts
    ├── hero.ts
    ├── aiDemo.ts
    ├── process.ts
    ├── processStep.ts
    ├── calculator.ts
    ├── contact.ts
    ├── testimonial.ts
    ├── client.ts
    ├── navigation.ts
    └── layout.ts

lib/sanity/
├── client.ts           # Sanity client
├── image.ts            # Image URL builder
├── queries.ts          # GROQ queries
├── fetch.ts            # Data fetching utilities
├── types.ts            # TypeScript types
├── fallback.ts         # Fallback content
└── index.ts            # Exports

app/studio/
└── [[...tool]]/
    ├── page.tsx        # Studio component
    └── layout.tsx      # Studio layout
```

## Data Fetching

Content is fetched at build time (static generation) with fallback content for empty Sanity:

```typescript
import { getAllContent } from "@/lib/sanity";

export default async function Home() {
  const content = await getAllContent();
  // Use content in components
}
```

## Icon Mapping

Process steps use icon names that map to Lucide icons:

| Name | Icon |
|------|------|
| clipboardCheck | ClipboardCheck |
| brain | Brain |
| rocket | Rocket |
| barChart3 | BarChart3 |
| refreshCw | RefreshCw |

To add more icons, update `lib/icon-map.ts`.

## Environment Variables

Required in `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=8iy7ioai
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

## Initial Content Setup

1. Start the dev server: `bun dev`
2. Navigate to `/studio`
3. Log in with your Sanity account
4. Create each singleton document (Hero, AI Demo, etc.)
5. Copy content from the fallback values or enter new content

## Deployment

When deploying:
1. Add environment variables to your hosting platform
2. The studio is embedded at `/studio` - no separate deployment needed
3. Content is fetched at build time - trigger a rebuild when content changes
