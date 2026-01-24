# Quick Customization Guide

This guide will help you personalize the portfolio website with your own information.

## 🎯 Essential Customizations

### 1. Personal Information

#### Update Your Name
**File**: `components/Hero.tsx`

Find and replace:
```tsx
// Line ~74-76
<span className="relative z-10 bg-gradient-to-r from-[#00f0ff] via-[#8b5cf6] to-[#ff006e] bg-clip-text text-transparent">
  SHOUNAK  // ← Change this
</span>

// Line ~98-100
<span className="relative z-10 bg-gradient-to-r from-[#ff006e] via-[#8b5cf6] to-[#00f0ff] bg-clip-text text-transparent">
  CHATTERJEE  // ← Change this
</span>
```

#### Update Subtitle
**File**: `components/Hero.tsx` (Line ~130)

```tsx
Full Stack Developer • Creative Coder • Tech Enthusiast
// ↑ Change to your own tagline
```

### 2. Tech Stack Ticker

**File**: `components/Hero.tsx` (Line ~18-22)

```tsx
const techStack = [
  'React', 'Next.js', 'TypeScript', // ← Add/remove your technologies
  'Node.js', 'Python', 'TailwindCSS',
  // ... add more
];
```

### 3. Skills (Bento Grid)

**File**: `components/BentoGrid.tsx` (Line ~60-100)

```tsx
const cards = [
  {
    title: 'Full Stack Development',  // ← Change title
    description: 'Your description',   // ← Change description
    icon: '⚡',                        // ← Change emoji
    className: 'md:col-span-2 md:row-span-2',  // ← Grid size
    gradient: 'linear-gradient(135deg, #00f0ff, #0080ff)',
  },
  // Add more cards...
];
```

**Grid Size Options**:
- `md:col-span-1` = 1 column wide
- `md:col-span-2` = 2 columns wide
- `md:row-span-1` = 1 row tall
- `md:row-span-2` = 2 rows tall

### 4. Projects

**File**: `components/Projects.tsx` (Line ~18-60)

```tsx
const projects: Project[] = [
  {
    title: 'AI-Powered Dashboard',           // ← Project name
    description: 'Your project description', // ← Description
    tech: ['React', 'Python', 'TensorFlow'], // ← Tech used
    gradient: 'linear-gradient(135deg, #00f0ff, #0080ff)',
    link: '#',  // ← Project URL
  },
  // Add more projects...
];
```

### 5. Contact Information

**File**: `components/Contact.tsx`

#### Update Location (Line ~90)
```tsx
<p className="text-[#e0e7ff] font-semibold">India</p>
// ↑ Change to your location
```

#### Update Social Links (Line ~35-50)
```tsx
const socialLinks = [
  {
    name: 'GitHub',
    icon: '⚡',
    url: 'https://github.com/yourusername',  // ← Your GitHub
    color: '#00f0ff',
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    url: 'https://linkedin.com/in/yourprofile',  // ← Your LinkedIn
    color: '#0080ff',
  },
  // Update other links...
];
```

### 6. Footer

**File**: `components/Footer.tsx` (Line ~12-16)

```tsx
<motion.h3
  className="text-3xl font-black mb-4..."
>
  SHOUNAK CHATTERJEE  // ← Change to your name
</motion.h3>
<p className="text-[#94a3b8] leading-relaxed">
  Full Stack Developer crafting...  // ← Change tagline
</p>
```

### 7. SEO & Metadata

**File**: `app/layout.tsx` (Line ~15-25)

```tsx
export const metadata: Metadata = {
  title: "Your Name | Full Stack Developer",  // ← Your name
  description: "Portfolio of Your Name...",    // ← Your description
  keywords: ["Your Name", "Developer", ...],   // ← Your keywords
  authors: [{ name: "Your Name" }],            // ← Your name
  openGraph: {
    title: "Your Name | Full Stack Developer",
    description: "Your tagline",
    type: "website",
  },
};
```

## 🎨 Color Customization

**File**: `app/globals.css` (Line ~4-24)

```css
:root {
  /* Change these colors to match your brand */
  --cyber-primary: #00f0ff;      /* Main accent color */
  --cyber-secondary: #ff006e;    /* Secondary accent */
  --cyber-accent: #8b5cf6;       /* Tertiary accent */
  --cyber-warning: #ffbe0b;      /* Warning/yellow */
  --cyber-success: #00ff88;      /* Success/green */
  
  /* Background colors */
  --cyber-bg: #0a0e27;           /* Main background */
  --cyber-bg-secondary: #0f1429; /* Card backgrounds */
  --cyber-bg-tertiary: #1a1f3a;  /* Nested elements */
  
  /* Text colors */
  --cyber-text: #e0e7ff;         /* Main text */
  --cyber-text-muted: #94a3b8;   /* Secondary text */
  --cyber-border: #1e293b;       /* Borders */
}
```

## 🖼️ Adding Images

### Project Images

1. Add images to `public/projects/` folder
2. Update project cards in `components/Projects.tsx`:

```tsx
{
  title: 'Your Project',
  description: '...',
  tech: [...],
  gradient: '...',
  link: '#',
  image: '/projects/your-image.jpg',  // ← Add this
}
```

3. Display in component:
```tsx
{project.image && (
  <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4" />
)}
```

### Profile Picture

Add to Hero section in `components/Hero.tsx`:

```tsx
<div className="mb-6">
  <img 
    src="/profile.jpg" 
    alt="Your Name"
    className="w-32 h-32 rounded-full border-4 border-[#00f0ff] mx-auto"
  />
</div>
```

## 📱 Social Media Icons

To use actual icons instead of emojis, install React Icons:

```bash
npm install react-icons
```

Then update `components/Contact.tsx`:

```tsx
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

// Replace emoji with:
icon: <FaGithub />,
```

## 🔗 Navigation Links

**File**: `components/Navigation.tsx` (Line ~23-28)

```tsx
const navItems = [
  { name: 'HOME', href: '#' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'CONTACT', href: '#contact' },
  // Add more sections...
];
```

## 📊 Analytics (Optional)

### Add Google Analytics

1. Install package:
```bash
npm install @next/third-parties
```

2. Add to `app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

## 🚀 Quick Tips

1. **Test Locally**: Always run `npm run dev` to preview changes
2. **Commit Often**: Use git to track changes
3. **Mobile First**: Test on mobile devices
4. **Performance**: Keep images optimized (use WebP format)
5. **Accessibility**: Maintain proper heading hierarchy

## 🆘 Common Issues

### Animations Not Working
- Check if Framer Motion is installed: `npm install framer-motion`
- Ensure 'use client' is at the top of component files

### Styles Not Applying
- Clear `.next` folder: `rm -rf .next`
- Restart dev server: `npm run dev`

### Build Errors
- Check for TypeScript errors
- Ensure all imports are correct
- Run `npm run build` to test production build

---

**Need help?** Check the main README.md or DESIGN_GUIDE.md for more details!
