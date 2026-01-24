# Shounak Chatterjee - Portfolio Website

A stunning cyberpunk/hacker-themed portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Cyberpunk Aesthetic**: Dark mode with neon colors, glowing effects, and animated backgrounds
- **Hero Section**: Large animated name with glitch effects and infinite tech stack ticker
- **Bento Grid Layout**: Modern grid showcasing skills and expertise with hover animations
- **Projects Showcase**: Featured projects with tech stack tags and smooth animations
- **Contact Section**: Interactive contact form with social links
- **Fully Responsive**: Optimized for all screen sizes
- **Smooth Animations**: Powered by Framer Motion for buttery-smooth interactions
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🎨 Design Elements

- **Animated Grid Background**: Moving cyberpunk grid pattern
- **Scanline Effect**: Retro CRT monitor scanlines
- **Glitch Effects**: Text glitch animations on hero section
- **Neon Glow**: Pulsing neon text and border effects
- **Custom Scrollbar**: Themed scrollbar with glow effects
- **Gradient Orbs**: Interactive gradient backgrounds that follow mouse movement
- **Tech Stack Ticker**: Infinite scrolling ticker showcasing technologies

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Fonts**: Orbitron, Rajdhani, Share Tech Mono (Google Fonts)

## 📦 Installation

The project is already set up! The dependencies have been installed.

## 🏃‍♂️ Running the Project

The development server is currently running at:
- **Local**: http://localhost:3000
- **Network**: http://192.168.153.1:3000

To start the dev server again in the future:

```bash
npm run dev
```

## 📁 Project Structure

```
portfolio website/
├── app/
│   ├── globals.css          # Global styles with cyberpunk theme
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── Navigation.tsx        # Sticky navigation bar
│   ├── Hero.tsx              # Hero section with name and ticker
│   ├── BentoGrid.tsx         # Skills showcase in bento grid
│   ├── Projects.tsx          # Featured projects section
│   ├── Contact.tsx           # Contact form and social links
│   └── Footer.tsx            # Footer component
└── public/                   # Static assets
```

## 🎯 Sections

1. **Navigation**: Sticky header with smooth scroll links
2. **Hero**: Large animated name with glitch effects and tech stack ticker
3. **Skills (Bento Grid)**: Expertise showcase with interactive cards
4. **Projects**: Featured work with hover effects and tech tags
5. **Contact**: Contact form and social media links
6. **Footer**: Brand info and quick links

## 🎨 Color Palette

- **Primary**: `#00f0ff` (Cyan)
- **Secondary**: `#ff006e` (Pink)
- **Accent**: `#8b5cf6` (Purple)
- **Success**: `#00ff88` (Green)
- **Warning**: `#ffbe0b` (Yellow)
- **Background**: `#0a0e27` (Dark Blue)

## ✨ Customization

### Update Personal Information

1. **Name**: Edit `components/Hero.tsx` - Change "SHOUNAK" and "CHATTERJEE"
2. **Skills**: Edit `components/BentoGrid.tsx` - Modify the `cards` array
3. **Projects**: Edit `components/Projects.tsx` - Update the `projects` array
4. **Contact Info**: Edit `components/Contact.tsx` - Update social links and info
5. **Tech Stack**: Edit `components/Hero.tsx` - Modify the `techStack` array

### Customize Colors

Edit `app/globals.css` and modify the CSS variables in the `:root` section:

```css
:root {
  --cyber-primary: #00f0ff;
  --cyber-secondary: #ff006e;
  --cyber-accent: #8b5cf6;
  /* ... more colors */
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Build for Production

```bash
npm run build
npm start
```

## 📝 Notes

- The `@theme` warning in CSS is expected - it's a Tailwind CSS v4 feature
- All animations are optimized for performance
- The website is fully responsive and works on all devices
- Custom fonts are loaded from Google Fonts

## 🎭 Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## 📄 License

Feel free to use this portfolio template for your own projects!

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
