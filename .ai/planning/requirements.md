# Requirements Document

This document outlines the comprehensive requirements for the new production portfolio website, translating the project goal into specific, measurable, achievable, relevant, and time-bound (SMART) targets.

### Business Goals
*   **Recruiter Impact:** The website must immediately communicate "I build production-grade software" and be memorable enough to encourage recruiters to spend several minutes exploring.
*   **Job Applications:** Facilitate successful applications for roles at AI Companies, Product Companies, and Open Source projects by showcasing advanced software engineering capabilities.
*   **Personal Brand:** Establish a premium, modern, and highly polished personal brand that reflects exceptional engineering quality and user experience.
*   **Demonstrate Expertise:** Clearly and compellingly demonstrate expertise in Full Stack and AI-focused Software Engineering, including design, building, deployment, and scaling of production systems.

### Target Audience
*   Software Engineers
*   Recruiters
*   Hiring Managers
*   CTOs
*   Startup Founders
*   Open Source Maintainers
*   AI Companies
*   Product Companies

### Performance Goals
*   **Lighthouse Scores:**
    *   Performance: > 98
    *   Accessibility: > 98
    *   SEO: > 98
    *   Best Practices: > 98
*   **Core Web Vitals:**
    *   Largest Contentful Paint (LCP): < 2.5 seconds
    *   Interaction to Next Paint (INP): < 200 milliseconds
    *   Cumulative Layout Shift (CLS): Near 0
*   **Loading Metrics:**
    *   Fast First Paint: Achieve within 1.0 second.
    *   Minimal JavaScript bundle size: Target < 100 KB (gzipped).
    *   Minimal overall bundle size: Target < 500 KB (gzipped).
*   **Optimization Techniques:**
    *   Aggressive image optimization (Next/Image, AVIF/WebP formats).
    *   Code splitting and lazy loading for non-critical assets and components.
    *   Strategic use of Server Components whenever appropriate to minimize client-side JavaScript.
    *   Implementation of Priority Hints for critical resources.
    *   Leverage Cloudflare and Vercel for optimal global delivery and caching.
    *   Support for HTTP/3.

### Accessibility Goals
*   **WCAG Compliance:** Achieve WCAG 2.1 AA compliance.
*   **Keyboard Navigation:** Full site navigability using only the keyboard, with logical tab order and clear focus states.
*   **Screen Reader Support:** Comprehensive support for screen readers (e.g., JAWS, NVDA, VoiceOver) with appropriate ARIA attributes and semantic HTML.
*   **Reduced Motion Support:** Implement `prefers-reduced-motion` media query to provide a less animated experience for users who prefer it.
*   **Proper Contrast:** All text and interactive elements must meet a minimum contrast ratio of 4.5:1 (or 3:1 for large text) against their background.
*   **Semantic HTML:** Utilize semantic HTML5 elements correctly to convey structure and meaning.
*   **Visible Focus States:** Clearly visible and distinct focus indicators for all interactive elements.

### Visual Goals
*   **Aesthetic Direction:** Modern, Minimal, Premium, Dark, Elegant, Highly polished, Layered, Immersive, Fluid, Clean, Sophisticated.
*   **Color Palette:** Primarily dark mode. No light mode toggle required.
*   **Animation Density:** High density of intentional, fluid, and performant animations that enhance storytelling and user experience without feeling gratuitous or distracting.
*   **Design Language:** Original design language inspired by Apple, Linear, Vercel, Stripe, Notion, Raycast, Anime.js, Spline, Aceternity UI, Magic UI, 21st.dev, but not imitative.
*   **Backgrounds:** Dynamic and performant backgrounds (e.g., procedural grids, particles, constellations, floating objects, lighting, shader effects, depth, parallax, glass layers, noise textures). No static backgrounds.
*   **Hero Section:** Unforgettable, including:
    *   My name, Role, Professional headline, Short introduction.
    *   Resume button, GitHub button, Contact button.
    *   Availability indicator.
    *   Animated background with mouse interaction.
    *   3D depth elements.
    *   Smooth entrance animation.
    *   Subtle camera movement.
*   **Project Pages:** Each project presented as a "product page" with high-quality screenshots, animations, and a distinct visual presentation.

### Technical Goals
*   **Framework:** Next.js 14.x (latest stable version).
*   **React:** React 18.x (latest stable version).
*   **Language:** Strict TypeScript for the entire codebase. No JavaScript (JSX) files.
*   **Styling:** Tailwind CSS v4 (stable release) as the primary styling solution. Minimize inline styles and custom CSS.
*   **Component Architecture:**
    *   Maximize use of Server Components where appropriate for performance and SEO.
    *   Client Components used only for interactivity.
    *   Reusable components and animations.
    *   Formal design system (e.g., using shadcn/ui, Radix UI) for consistent UI elements.
*   **Animation Libraries:**
    *   Framer Motion (latest stable version, currently 11.x.x).
    *   GSAP for complex timeline-based animations.
    *   Lenis for smooth scrolling.
    *   SplitType for text animations.
    *   Motion Path for advanced path-based animations.
*   **3D Libraries:** Three.js, React Three Fiber, and Drei for 3D elements and scene management. OGL can be considered if beneficial for specific effects.
*   **UI Libraries:** shadcn/ui, Radix UI, cmdk (for command palette), Sonner (for toasts/notifications).
*   **Code Quality:**
    *   Zero duplicated code.
    *   Consistent spacing and formatting (enforced by Prettier/ESLint).
    *   Maintainable and modular folder structure.
    *   Well-documented code (inline comments, JSDoc where appropriate).
    *   Strict adherence to development rules: never leave broken code, no TODOs, zero TypeScript errors, zero ESLint warnings, always a passing build (`npm run lint` and `npm run build` after every milestone).
*   **Backend:** Re-evaluate or rebuild the contact form backend using a modern, scalable approach (e.g., serverless functions or a lightweight API integrated with Next.js). Migrate existing contact data from `Legacy/backend/contacts.db`.

### Content Requirements
*   **Source of Truth:** All factual information (personal info, projects, experience, education, resume, achievements, assets, code, icons, social links, images) must be extracted from the `Legacy/` folder.
*   **Content Refinement:** Improve wording, grammar, and readability of extracted content without fabricating facts.
*   **Chapter-Based Storytelling:** The website must flow as a narrative with distinct chapters, each featuring new animations, visual language, and interactions.
    *   **Chapters:** Hero -> Who I Am -> Engineering Philosophy -> Projects -> Architecture Thinking -> Skills -> Experience -> Education -> Achievements -> Open Source -> Contact
*   **Hero Section:** Must include: Name, Role, Professional headline, Short introduction, Resume button, GitHub button, Contact button, Availability indicator.
*   **Projects Section:** Each project must be a detailed "product page" including:
    *   Overview
    *   Problem
    *   Solution
    *   Architecture
    *   Challenges
    *   Engineering decisions
    *   Technology stack
    *   Screenshots
    *   GitHub link
    *   Live Demo link
    *   Animations specific to the project.
*   **AI-Powered Section:**
    *   Implement an interactive Q&A interface.
    *   Users can ask questions like: "What projects has Shounak built?", "What technologies does he know?", "What AI experience does he have?", "Summarize his resume.", "Explain the Smart Traffic project."
    *   Powered by a local knowledge base generated from the `Legacy/` content.
*   **Extracted Data:** Skills, projects, technologies, descriptions, GitHub links, social links, resume, images, metadata, certifications, achievements.

### SEO Goals
*   **Metadata:** Comprehensive and dynamic metadata for all pages.
*   **OpenGraph:** Full OpenGraph implementation for rich social media previews.
*   **Twitter Cards:** Full Twitter Cards implementation for rich Twitter previews.
*   **Schema.org:** Implement relevant Schema.org structured data (e.g., `Person`, `WebSite`, `Project`, `Article`) to enhance search engine understanding.
*   **Robots.txt:** Properly configured `robots.txt` to guide search engine crawlers.
*   **Sitemap.xml:** Dynamically generated `sitemap.xml` for comprehensive indexing.
*   **Target Keywords:** Optimize content for relevant keywords such as "Full Stack Engineer," "AI Engineer," "Software Engineer Portfolio," "Production-grade software," "React Next.js Developer," "Shounak Chatterjee portfolio."
*   **Performance for SEO:** Ensure all performance goals are met to positively impact search engine rankings.
