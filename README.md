# CookPal Marketing Website

A modern, responsive marketing website for CookPal - the app that transforms cluttered recipe websites into clean, cookable recipe cards.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Icons:** Lucide React
- **Fonts:** Inter + Space Grotesk (via next/font)

## 📁 Project Structure

```
website/
├── app/                    # Next.js App Router pages
│   ├── pricing/           # Pricing page
│   ├── privacy/           # Privacy policy
│   ├── support/           # FAQ & support
│   ├── terms/             # Terms of service
│   ├── globals.css        # Global styles & CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Landing page
│   └── sitemap.ts         # Dynamic sitemap
├── components/
│   ├── landing/           # Landing page sections
│   │   ├── HeroSection.tsx
│   │   ├── RecipeCardMock.tsx
│   │   ├── SocialProofSection.tsx
│   │   ├── ProblemSolutionSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── PricingTeaserSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── FinalCTASection.tsx
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Logo.tsx
│   └── ui/                # Design system components
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       ├── Input.tsx
│       ├── Section.tsx
│       ├── Select.tsx
│       └── Textarea.tsx
├── public/                # Static assets
│   ├── fonts/            # Local fonts (optional)
│   ├── favicon.ico
│   ├── icon.svg
│   ├── og-image.png
│   ├── robots.txt
│   └── site.webmanifest
├── data/                  # Local data storage (dev only, gitignored)
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Design System

### Colors

The site uses CSS variables for easy theming:

- **Primary (Amber):** CTAs, highlights, active states
- **Accent (Pink):** Subtle micro-accents (used sparingly)
- **Neutrals:** Text, backgrounds, borders

### Components

All UI components are in `components/ui/`:

- `Button` - Primary, secondary, outline, ghost variants
- `Card` - Default, glass, elevated, outline variants
- `Badge` - Status indicators and labels
- `Section` - Page sections with consistent padding
- `Container` - Responsive max-width wrapper
- `Input`, `Select`, `Textarea` - Form elements

## 🛠 Setup

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Navigate to the website directory
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Environment Variables

Create a `.env.local` file for local development:

```env
# Optional: Custom domain for metadata
NEXT_PUBLIC_SITE_URL=https://cookpal.app
```

## 🔗 App Store Links

Update the App Store URL placeholder in the following files:
- `components/landing/HeroSection.tsx`
- `components/landing/FinalCTASection.tsx`
- `components/landing/PricingTeaserSection.tsx`
- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`
- `app/pricing/page.tsx`

Search for `https://apps.apple.com/app/cookpal` and replace with your actual App Store URL.

## 🖼 Assets to Replace

Before deploying, replace these placeholder files:

- `public/favicon.ico` - 32x32 ICO file
- `public/apple-touch-icon.png` - 180x180 PNG
- `public/og-image.png` - 1200x630 PNG for social sharing
- `public/icon-192.png` - 192x192 PNG
- `public/icon-512.png` - 512x512 PNG

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The site is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Any Node.js hosting

## 📱 Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, features, pricing teaser, FAQ |
| `/pricing` | Full pricing page with comparison table |
| `/support` | FAQ and contact information |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## ✨ Features

- **Responsive Design:** Works on all screen sizes
- **Sticky Header:** Transparent → glassy on scroll
- **Mobile Navigation:** Slide-out drawer menu
- **Smooth Scrolling:** Native CSS smooth scroll
- **SEO Optimized:** Metadata, Open Graph, Twitter cards, sitemap
- **Performance:** Optimized fonts, minimal JS, Lighthouse-friendly
- **Accessible:** Semantic HTML, focus states, ARIA labels

## 🎯 Customization

### Changing Brand Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  /* Primary - Change to your brand color */
  --primary-500: 245 158 11; /* RGB values */
  
  /* Adjust the full scale as needed */
  --primary-50: 255 251 235;
  --primary-100: 254 243 199;
  /* ... */
}
```

### Changing Fonts

Edit `app/layout.tsx` to use different fonts from Google Fonts or local files.

## 📄 License

Proprietary - Banana Bread Labs

## 📧 Contact

For questions or support: [bananabreadlabs@gmail.com](mailto:bananabreadlabs@gmail.com)
