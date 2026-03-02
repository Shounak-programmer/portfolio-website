# Shounak Chatterjee — Portfolio Website

A modern, elegant portfolio website built with **Next.js**, **Tailwind CSS**, and **Framer Motion**, featuring a natural, warm colour palette with glassmorphism effects and smooth animations.

🌐 **Live:** [shounakchatterjee.tech](https://shounakchatterjee.tech)

---

## ✨ Features

- **Elegant Natural Theme** — Warm earthy tones, sage greens, and terracotta with glassmorphism cards
- **Hero Section** — Animated name reveal with an infinite tech-stack ticker
- **Bento Grid Skills** — Interactive cards showcasing areas of expertise with hover animations
- **Projects Showcase** — Featured projects with tech-stack tags and smooth scroll animations
- **Contact Section** — Interactive contact form with social links
- **Fully Responsive** — Optimised for all screen sizes and devices
- **Smooth Animations** — Powered by Framer Motion for buttery-smooth transitions
- **SEO Optimised** — Proper meta tags and semantic HTML structure

---

## 🎨 Design

| Element | Detail |
|---|---|
| Theme | Natural, warm, and elegant — earthy greens & terracotta |
| UI Style | Glassmorphism cards with subtle gradients and blur |
| Animations | Framer Motion — fade-ins, hover lifts, spring physics |
| Typography | Playfair Display (headings) + Inter (body) |
| Scrollbar | Custom-styled to match the overall palette |
| Backgrounds | Radial ambient glow decorations |

### 🎨 Colour Palette

| Role | Colour |
|---|---|
| Sage Green (primary) | `#7a9e7e` |
| Terracotta | `#c17a5a` |
| Warm Gold | `#c8a96e` |
| Muted Blush | `#d4a8a0` |
| Background | `#0f0e0c` (warm dark) |
| Surface | `rgba(30, 27, 24, 0.8)` (glassmorphism) |

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | JavaScript (React JSX) |
| Styling | Tailwind CSS v4 + Vanilla CSS Variables |
| Animations | Framer Motion 12 |
| Fonts | Playfair Display, Inter (Google Fonts) |
| Deployment | Vercel |

---

## 📦 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install & Run

```bash
# Clone the repo
git clone https://github.com/Shounak-programmer/portfolio-website.git
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css          # Global styles & CSS design tokens
│   ├── layout.js            # Root layout with metadata & fonts
│   └── page.js              # Main page — assembles all sections
├── components/
│   ├── Navigation.jsx        # Sticky navigation bar
│   ├── Hero.jsx              # Hero section with name & tech ticker
│   ├── BentoGrid.jsx         # Skills showcase in bento grid layout
│   ├── Projects.jsx          # Featured projects section
│   ├── Contact.jsx           # Contact form and social links
│   └── Footer.jsx            # Footer with quick links
└── public/                   # Static assets
```

---

## 🎯 Page Sections

1. **Navigation** — Sticky header with smooth-scroll links and active state
2. **Hero** — Animated name with subtitle and infinite tech-stack ticker
3. **Skills (Bento Grid)** — Expertise cards with interactive hover effects
4. **Projects** — Featured work with descriptions, tech tags, and links
5. **Contact** — Contact form and social media links
6. **Footer** — Branding and quick navigation links

---

## ✏️ Customisation

### Personal Information

| What to change | Where |
|---|---|
| Name & tagline | `components/Hero.jsx` |
| Tech stack ticker | `components/Hero.jsx` → `techStack` array |
| Skills cards | `components/BentoGrid.jsx` → `cards` array |
| Projects | `components/Projects.jsx` → `projects` array |
| Contact & social links | `components/Contact.jsx` |

### Colours & Design Tokens

All design tokens live in `app/globals.css` under `:root`:

```css
:root {
  --sage-primary: #7a9e7e;
  --terracotta: #c17a5a;
  --warm-gold: #c8a96e;
  --bg-primary: #0f0e0c;
  /* ... */
}
```

---

## 🚀 Deployment

This site is deployed on **Vercel** and connected to the custom domain `shounakchatterjee.tech`.

To deploy your own fork:
1. Push the repo to GitHub
2. Import it at [vercel.com](https://vercel.com)
3. Set the framework preset to **Next.js**
4. Hit **Deploy** — you're live!

---

## 🌐 Browser Compatibility

- ✅ Chrome / Edge
- ✅ Firefox
- ✅ Safari
- ✅ Opera

---

## 📄 License

Feel free to use this as a template for your own portfolio. A credit or a ⭐ on the repo is appreciated!

---

**Built with ❤️ by Shounak Chatterjee — using Next.js, Tailwind CSS, and Framer Motion**
