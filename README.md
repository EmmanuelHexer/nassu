# NASSU - National Sports Supporters Union (Ghana)

A professional, SEO-optimized website for Ghana's National Sports Supporters Union built with Next.js 15 and Tailwind CSS 4.

## Overview

NASSU (National Sports Supporters Union) is Ghana's premier independent, democratic organization that unites football supporters from Accra to Kumasi, giving fans a collective voice to influence clubs, advocate for supporter rights, and fight for fair treatment across Ghanaian football. This website serves as the primary digital presence for the organization.

## Tech Stack

- **Framework:** Next.js 15.1.2 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.1.18
- **Runtime:** React 19
- **Build Tool:** Turbopack

## Features

### Core Pages

- **Home:** Modern hero section with Ghana-specific messaging, recent campaign victories, supporter testimonials, and compelling CTAs
- **About:** Organization mission, values, leadership team, and advocacy approach
- **Membership:** Membership tiers with pricing (GH₵), benefits, and signup process
- **News:** Latest updates from GPL campaigns, advocacy wins, and announcements
- **Events:** Upcoming supporter meetups, watch parties, and past events
- **Contact:** Multi-channel contact options, department directory, and contact form

### Technical Features

- **SEO Optimization**
  - Metadata API for dynamic meta tags
  - Automatic sitemap generation
  - Robots.txt configuration
  - OpenGraph and Twitter Card support
  - Semantic HTML structure

- **Responsive Design**
  - Mobile-first approach
  - Breakpoint-optimized layouts
  - Touch-friendly navigation
  - Accessible UI components

- **Performance**
  - Static Site Generation (SSG) for all pages
  - Optimized Core Web Vitals
  - Fast page loads with Turbopack
  - Minimal JavaScript bundle size

- **Accessibility**
  - WCAG 2.2 AA compliance considerations
  - Keyboard navigation support
  - Screen reader friendly markup
  - Proper heading hierarchy

## Project Structure

```
nassu/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── events/         # Events page
│   ├── membership/     # Membership page
│   ├── news/           # News page
│   ├── globals.css     # Global styles and Tailwind config
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   ├── manifest.ts     # PWA manifest
│   ├── robots.ts       # Robots.txt configuration
│   └── sitemap.ts      # Sitemap generation
├── components/
│   └── layout/
│       ├── Footer.tsx  # Site footer
│       └── Navbar.tsx  # Navigation header
├── public/             # Static assets
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/EmmanuelHexer/nassu.git
cd nassu
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Build and Deployment

### Building for Production

```bash
npm run build
```

This generates an optimized production build in the `.next` directory with:
- Pre-rendered static pages
- Optimized assets
- Minified JavaScript and CSS

### Deployment Options

The site is optimized for deployment on:

- **Vercel** (Recommended): Zero-configuration deployment with automatic CI/CD
- **Netlify**: Static site hosting with edge functions support
- **Self-hosted**: Deploy to any Node.js hosting environment

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_SITE_URL=https://nassuashanti.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## SEO Configuration

The site implements comprehensive SEO through:

- **Metadata API**: Type-safe meta tags in each page
- **Structured Data**: JSON-LD for rich search results
- **Sitemap**: Auto-generated XML sitemap at `/sitemap.xml`
- **Robots.txt**: Search engine crawling directives at `/robots.txt`
- **Canonical URLs**: Prevent duplicate content issues
- **Social Sharing**: Optimized OpenGraph and Twitter Cards

Update the base URL in `app/sitemap.ts` and `app/layout.tsx` before deployment.

## Customization

### Theme Colors

Colors are defined in [app/globals.css](app/globals.css) using the `@theme` directive:

```css
@theme {
  --color-primary-600: #0284c7;
  --color-primary-700: #0369a1;
}
```

### Typography

The site uses Inter font from Google Fonts. To change fonts, update [app/layout.tsx](app/layout.tsx):

```tsx
import { YourFont } from "next/font/google";
```

### Navigation

Edit navigation links in [components/layout/Navbar.tsx](components/layout/Navbar.tsx):

```tsx
const navLinks = [
  { href: "/", label: "Home" },
  // Add your links here
];
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Metrics

Target performance benchmarks:

- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## Contributing

This is a private project for the National Sports Supporters Union. For questions or suggestions, contact the development team.

## License

Copyright 2026 NASSU - National Sports Supporters Union. All rights reserved.

## Contact

- Website: https://nassuashanti.com
- Email: nassu.blackstars@gmail.com
- Twitter: @nassu_ghana
- Facebook: facebook.com/nassuashanti
- Instagram: @nassuashanti

---

Built with Next.js 15, Tailwind CSS 4, and modern web technologies for Ghana's football supporters.
