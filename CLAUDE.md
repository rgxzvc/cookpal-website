# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CookPal marketing website - a Next.js 14 (App Router) marketing site for a recipe management iOS app.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Run production server
npm run lint     # Run ESLint
```

## Architecture

### Tech Stack
- Next.js 14 with App Router
- TypeScript
- TailwindCSS with CSS variable-based theming
- Lucide React icons
- Inter + Space Grotesk fonts (via next/font)

### Directory Structure
- `app/` - Next.js App Router pages (/, /pricing, /privacy, /support, /terms)
- `components/ui/` - Reusable design system components (Button, Card, Badge, etc.)
- `components/landing/` - Landing page section components
- `components/layout/` - Header, Footer, Logo

### Design System

Colors use CSS variables defined in `app/globals.css` with RGB values:
- `primary-*` (Amber) - CTAs, highlights, active states
- `accent-*` (Pink) - Subtle micro-accents

Tailwind extends these in `tailwind.config.ts` using `rgb(var(--primary-*) / <alpha-value>)` syntax.

Key utility classes defined in globals.css:
- `.glass`, `.glass-strong` - Glassy card effects with backdrop blur
- `.gradient-mesh` - Multi-layer radial gradient backgrounds
- `.text-gradient` - Text with primary color gradient
- `.focus-ring` - Consistent focus states

### Component Patterns

UI components use variant/size props pattern:
```tsx
<Button variant="primary" size="lg" href="/pricing">Get Started</Button>
```

Button component doubles as Link when `href` prop is provided.

### Path Aliases

`@/` maps to project root (configured in tsconfig.json).

### Build Configuration

ESLint is skipped during production builds (`next.config.js: ignoreDuringBuilds: true`).