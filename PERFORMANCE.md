# Performance Guide

Notes on the performance optimisations already in place, and tips for keeping Lighthouse scores high.

---

## What's Already Optimised

### Fonts
- Loaded via `next/font/google` — fonts are self-hosted at build time (no external network request at runtime)
- `display: 'swap'` prevents invisible text flash (FOIT)
- Only the required weights are loaded for **Playfair Display** and **Inter**

### JavaScript
- Next.js App Router enables automatic code splitting by route
- Framer Motion is imported selectively — only the components in use
- `optimizePackageImports` is enabled in `next.config.js` for Framer Motion

### Animations
- All Framer Motion transforms use GPU-composited properties (`transform`, `opacity`) — no layout-triggering properties
- `viewport={{ once: true }}` ensures scroll animations only fire once, not on every scroll pass
- Ambient glow orbs use `pointerEvents: 'none'` to avoid interaction overhead

### SEO
- Metadata exported from `app/layout.js` (title, description, keywords, Open Graph)
- Semantic HTML — single `<h1>` per page, proper heading hierarchy
- All sections have `id` attributes for smooth-scroll anchor links

### Images
- Next.js `<Image>` component is available if needed — use it for any photos you add (automatic WebP conversion, lazy loading, correct sizing)

---

## Running a Lighthouse Audit

1. Build for production (dev server results are not representative):
   ```bash
   npm run build
   npm start
   ```

2. Open Chrome DevTools → **Lighthouse** tab
3. Select **Desktop** or **Mobile**, then **Analyse page load**

---

## Tips to Keep Scores High

### Performance
- **Use WebP/AVIF images** — convert any photos before adding them to `/public`
- **Use `next/image`** — wrap all `<img>` tags with Next.js `<Image>` for automatic optimisation
- **Avoid large dependencies** — check bundle impact before adding new npm packages with [Bundlephobia](https://bundlephobia.com)
- **Lazy-load below-the-fold content** — already handled by `whileInView` in Framer Motion

### Accessibility
- Maintain **one `<h1>` per page** (the hero name)
- Add `alt` text to all images
- Ensure colour contrast ratios meet WCAG AA (4.5:1 for normal text)
- Don't remove focus outlines — they're needed for keyboard navigation

### SEO
- Keep the `<title>` and `<meta description>` unique and descriptive
- Don't remove `id` attributes from section elements (they're used for anchor links and structured navigation)

### Best Practices
- Keep dependencies up to date: `npm outdated`
- No `console.error` or unhandled promise rejections in production
- HTTPS is handled automatically by Vercel

---

## Monitoring After Deployment

- **Google PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev) — paste your live URL
- **Core Web Vitals**: Available in Vercel Analytics and Google Search Console
- **Vercel Analytics**: Add with `npm install @vercel/analytics` if you want real-user metrics

```js
// app/layout.js
import { Analytics } from '@vercel/analytics/react';

// Inside the <body>:
<Analytics />
```

---

## Adding Security Headers (Optional)

In `next.config.js`, add a `headers()` function for extra hardening:

```js
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      ],
    },
  ];
},
```

---

**Keep it lean, keep it fast. Every millisecond matters for first impressions.**
