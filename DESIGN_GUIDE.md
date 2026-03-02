# Design Guide

A reference for the visual language, design tokens, and component patterns used throughout the portfolio.

---

## Design Philosophy

The site follows a **natural, warm, and elegant** aesthetic — think linen, sage, and terracotta rather than neon. The goal is to feel premium and approachable at the same time.

Key principles:
- **Warmth** — earthy tones and warm darks instead of cold blacks
- **Glassmorphism** — frosted glass cards with backdrop blur
- **Subtle motion** — animations that feel smooth, not flashy
- **Breathing room** — generous padding and whitespace

---

## Colour Palette

### Brand Colours

| Name | Variable | Hex | Usage |
|---|---|---|---|
| Sage Green | `--sage-primary` | `#7a9e7e` | Primary accent, hero gradient |
| Terracotta | `--terracotta` | `#c17a5a` | Secondary accent, CTAs |
| Warm Gold | `--warm-gold` | `#c8a96e` | Labels, highlights |
| Muted Blush | `--muted-blush` | `#d4a8a0` | Soft accents, tags |
| Light Sage | `--sage-light` | `#9dbc9f` | Hover states |

### Surface & Background

| Name | Variable | Value | Usage |
|---|---|---|---|
| Page Background | `--bg-primary` | `#0f0e0c` | Root background |
| Card Surface | `--glassmorphism` | `rgba(30,27,24,0.8)` + blur | All cards |
| Subtle Border | `--border-subtle` | `rgba(255,255,255,0.08)` | Card borders |
| Hover Border | Per-card `accentColor` + `44` alpha | — | On-hover card borders |

### Text

| Name | Variable | Value |
|---|---|---|
| Primary Text | `--text-primary` | `#f5f0eb` |
| Secondary Text | `--text-secondary` | `#a09080` |
| Gradient Sage | `.text-gradient-sage` | `#7a9e7e` → `#c8a96e` |

---

## Typography

### Font Families

| Font | Role | CSS Variable |
|---|---|---|
| **Playfair Display** | Headings, card titles, section headers | `--font-playfair` |
| **Inter** | Body copy, descriptions, labels | `--font-inter` (base) |

Loaded via `next/font/google` in `app/layout.js`.

### Font Scale

| Element | Size | Weight |
|---|---|---|
| Hero name | `clamp(3.5rem, 10vw, 8rem)` | 900 |
| Section heading | `clamp(2.2rem, 5vw, 3.5rem)` | 800 |
| Card title | `1.3rem` | 700 |
| Body / description | `0.9rem – 1.05rem` | 400 |
| Section label | `0.75rem` uppercase tracked | 600 |

---

## Layout

### Page Structure

```
┌────────────────────────────────────┐
│  Navigation (sticky, blur)         │
├────────────────────────────────────┤
│  Hero                              │  Full viewport height
│  ┌──────────────┐                  │  Name + ticker
│  │ Name         │ ← animated       │
│  │ Tagline      │                  │
│  │ CTA Buttons  │                  │
│  └──────────────┘                  │
│  ─── Tech Stack Ticker ───         │
├────────────────────────────────────┤
│  Skills (Bento Grid)               │  3-column grid
│  ┌──────────┬────┬────┐            │
│  │  2×2     │ 1  │ 1  │            │
│  │  card    ├────┴────┤            │
│  │          │ 1  │ 1  │            │
│  └──────────┴────┴────┘            │
├────────────────────────────────────┤
│  Projects                          │  Alternating or grid
├────────────────────────────────────┤
│  Contact                           │  Form + social links
├────────────────────────────────────┤
│  Footer                            │
└────────────────────────────────────┘
```

### Max Width & Spacing

- **Container max-width**: `1200px`, centred with `auto` margins
- **Section padding**: `120px` vertical, `24px` horizontal
- **Grid gap**: `20px`
- **Card padding**: `32px` (`p-8`)
- **Border radius**: `24px` (`rounded-3xl`)

---

## Glassmorphism Cards

Cards use the `.glassmorphism` utility class defined in `globals.css`:

```css
.glassmorphism {
  background: rgba(30, 27, 24, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
```

On hover, cards get:
- `y: -4px` lift (Framer Motion)
- Accent-coloured border (`accentColor + '44'` alpha)
- Soft box shadow with accent glow
- Gradient overlay (`opacity: 0 → 0.06`)
- Top accent bar (`opacity: 0 → 1`)

---

## Animation Patterns

### Scroll Reveal (all sections)
```jsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.55, delay: index * 0.08 }}
  viewport={{ once: true }}
>
```

### Card Hover (BentoGrid / Projects)
```jsx
whileHover={{
  y: -4,
  borderColor: `${accentColor}44`,
  boxShadow: `0 20px 60px rgba(0,0,0,0.3), 0 0 30px ${accentColor}18`,
}}
transition={{ duration: 0.35 }}
```

### Icon Bounce on Hover
```jsx
animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
```

### Infinite Ticker (Hero)
CSS `@keyframes scroll` with `translateX(-50%)` on a duplicated list, using `animation-play-state: paused` on hover.

---

## Section Labels

A reusable `.section-label` pattern is used before every section heading:

```html
<span class="section-label">What I do</span>
```

```css
.section-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--warm-gold);
}
/* Decorative line before the label */
.section-label::before {
  content: '';
  width: 32px;
  height: 1px;
  background: var(--warm-gold);
}
```

---

## Responsive Behaviour

| Breakpoint | Grid columns | Notes |
|---|---|---|
| Mobile (`< 768px`) | 1 | Bento grid stacks, nav collapses |
| Tablet (`768–1024px`) | 2 | Partial bento layout |
| Desktop (`> 1024px`) | 3 | Full 3-column bento |

---

## Ambient Glow Decorations

Each section has absolute-positioned blurred radial gradient orbs behind the content for depth:

```jsx
<div style={{
  position: 'absolute', top: '5%', left: '-5%',
  width: '400px', height: '400px',
  background: 'radial-gradient(circle, rgba(122,158,126,0.06) 0%, transparent 70%)',
  filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none',
}} />
```

These are purely decorative and never interfere with interactions (`pointerEvents: 'none'`).

---

**The design scales from very small screens to 4K — always test at multiple sizes after changes.**
