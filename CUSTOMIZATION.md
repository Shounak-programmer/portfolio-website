# Customization Guide

A practical guide to personalising this portfolio with your own content and branding.

---

## 1. Personal Information

### Name & Tagline
**File**: `components/Hero.jsx`

Find the name text and tagline string, and replace them with your own:
```jsx
// Change the first name and last name
<span>SHOUNAK</span>
<span>CHATTERJEE</span>

// Change the subtitle tagline
Full Stack Developer · Creative Coder · Tech Enthusiast
```

### Footer Name & Blurb
**File**: `components/Footer.jsx`

```jsx
// Update name and description
<h3>SHOUNAK CHATTERJEE</h3>
<p>Full Stack Developer crafting ...</p>
```

---

## 2. Tech Stack Ticker

**File**: `components/Hero.jsx` — find the `techStack` array:

```jsx
const techStack = [
  'React', 'Next.js', 'JavaScript',
  'Node.js', 'Python', 'TailwindCSS',
  // Add or remove as needed
];
```

---

## 3. Skills (Bento Grid)

**File**: `components/BentoGrid.jsx` — find the `cards` array:

```jsx
const cards = [
  {
    title: 'Full Stack Development',    // ← Card title
    description: 'Your description',   // ← Short description
    icon: '🌿',                         // ← Emoji icon
    colSpan: 'span 2',                  // ← 'span 1' or 'span 2'
    rowSpan: 'span 2',                  // ← 'span 1' or 'span 2' (optional)
    accentColor: '#7a9e7e',             // ← Hover accent colour
    accentGradient: 'linear-gradient(135deg, #7a9e7e, #5a7a5a)',
  },
  // Add more cards...
];
```

**Grid span options:**
| Value | Effect |
|---|---|
| `'span 1'` | 1 column / 1 row wide |
| `'span 2'` | 2 columns / 2 rows wide |

---

## 4. Projects

**File**: `components/Projects.jsx` — find the `projects` array:

```jsx
const projects = [
  {
    title: 'Your Project Name',
    description: 'A short description of what this project does.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/you/project',
    gradient: 'linear-gradient(135deg, #7a9e7e, #5a7a5a)',
  },
  // Add more projects...
];
```

---

## 5. Contact & Social Links

**File**: `components/Contact.jsx` — find the `socialLinks` array and info items:

```jsx
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/your-username',   // ← Your GitHub
    icon: '💻',
    color: '#7a9e7e',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/your-profile', // ← Your LinkedIn
    icon: '💼',
    color: '#c8a96e',
  },
  // Update or add more...
];
```

---

## 6. Navigation Links

**File**: `components/Navigation.jsx` — find the `navItems` array:

```jsx
const navItems = [
  { name: 'Home',     href: '#' },
  { name: 'Skills',   href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact',  href: '#contact' },
];
```

---

## 7. SEO & Metadata

**File**: `app/layout.js`

```js
export const metadata = {
  title: 'Your Name | Full Stack Developer',
  description: 'Portfolio of Your Name — building ...',
  keywords: ['Your Name', 'Developer', 'React'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name | Portfolio',
    description: 'Your tagline here',
    type: 'website',
  },
};
```

---

## 8. Colours & Design Tokens

All CSS variables live in `app/globals.css` under `:root`. Change these to retheme the entire site:

```css
:root {
  --sage-primary:   #7a9e7e;   /* Main green accent */
  --terracotta:     #c17a5a;   /* Warm orange accent */
  --warm-gold:      #c8a96e;   /* Gold accent */
  --muted-blush:    #d4a8a0;   /* Soft pink accent */

  --bg-primary:     #0f0e0c;   /* Page background */
  --text-primary:   #f5f0eb;   /* Main text */
  --text-secondary: #a09080;   /* Muted text */
  --border-subtle:  rgba(255,255,255,0.08); /* Card borders */
}
```

---

## 9. Fonts

Fonts are loaded in `app/layout.js` via `next/font/google`. To change them:

```js
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter    = Inter({ subsets: ['latin'], variable: '--font-inter' });
```

Replace `Playfair_Display` or `Inter` with any font from [Google Fonts](https://fonts.google.com).

---

## Quick Tips

- Run `npm run dev` after every change to preview instantly
- Keep images in `/public/` and reference them as `/your-image.jpg`
- Use WebP format for best performance
- Test on mobile — the layout is responsive but always worth checking
