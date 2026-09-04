---
### ADR-001: Framework Choice (Next.js 14.x with App Router)

**Status**: Accepted

**Context**:
The project goal is to build a modern, performant, and SEO-friendly production portfolio website. The requirements explicitly state Next.js 14.x (latest stable version) and React 18.x (latest stable version). The existing codebase analysis indicates a current (though likely outdated placeholder) use of Next.js with the App Router.

**Decision**:
The project will be built using Next.js 14.x (the latest stable version at the time of development) and will leverage the App Router paradigm. React 18.x will be the underlying React version.

**Rationale**:
The App Router, introduced in Next.js 13, is the recommended and future-proof approach for building Next.js applications. It enables the use of React Server Components, which significantly improve performance by reducing client-side JavaScript, enhancing initial page load times, and improving SEO by rendering content on the server. This aligns directly with the performance goals (Lighthouse scores, Core Web Vitals, minimal JS bundle size) and SEO goals (comprehensive metadata, structured data). It also supports the strategic use of Server Components to minimize client-side JavaScript, as specified in the requirements.

**Trade-offs**:
Developers unfamiliar with the App Router and React Server Components may experience an initial learning curve. The mental model for data fetching and state management differs from the Pages Router, potentially introducing complexity. Debugging server-side and client-side interactions requires a clear understanding of component boundaries. However, the long-term benefits in performance, maintainability, and alignment with modern React practices outweigh these initial challenges.

---
### ADR-002: Styling Solution (Tailwind CSS v4 with shadcn/ui and CSS Variables)

**Status**: Accepted

**Context**:
The requirements specify Tailwind CSS v4 (stable release) as the primary styling solution, with a goal to minimize inline styles and custom CSS. The repository analysis shows the current project uses Tailwind CSS v4, vanilla CSS variables, and significant inline styling. A formal design system (e.g., using shadcn/ui, Radix UI) is also required for consistent UI elements.

**Decision**:
Tailwind CSS v4 will be the primary utility-first styling framework. It will be complemented by `shadcn/ui` for pre-built, accessible, and customizable UI components. CSS variables will be used for defining global design tokens (colors, typography, spacing, etc.) to ensure consistency and easy theming. Inline styles will be strictly minimized and used only for dynamic, component-specific values that cannot be expressed via Tailwind or CSS variables.

**Rationale**:
Tailwind CSS v4 offers a highly efficient and maintainable way to style applications, promoting rapid development and consistency through its utility classes. `shadcn/ui` provides a robust foundation of headless components that are easily styled with Tailwind, accelerating UI development while adhering to accessibility standards. Using CSS variables for design tokens centralizes design decisions, making it easy to manage the visual language and implement the "dark mode only" color palette. This combined approach directly addresses the requirements for a modern, minimal, premium aesthetic, and a formal design system, while minimizing custom CSS and inline styles.

**Trade-offs**:
The initial setup and configuration of Tailwind CSS v4 and `shadcn/ui` require some effort. Developers need to be proficient in Tailwind's utility-first approach. While Tailwind's JIT mode and purging minimize CSS bundle size, careful management is still needed. Integrating `shadcn/ui` means adopting its component structure and customization patterns.

---
### ADR-003: Animation Library (Framer Motion for Declarative, GSAP for Complex Timelines)

**Status**: Accepted

**Context**:
The requirements demand a "high density of intentional, fluid, and performant animations" that enhance storytelling, specifying Framer Motion (latest stable) and GSAP for complex timeline-based animations. The current project primarily uses Framer Motion.

**Decision**:
Framer Motion will be used for component-level, declarative animations, such as entrance/exit transitions, hover effects, scroll-triggered animations, and simple interactive elements. GSAP (GreenSock Animation Platform) will be employed for complex, timeline-based animations, choreographed sequences, dynamic backgrounds, and chapter transitions where precise control, high performance, and advanced easing are critical. Lenis will be used for smooth scrolling.

**Rationale**:
Framer Motion integrates seamlessly with React, offering a declarative API that makes it intuitive for animating component states and interactions. It's ideal for the "fluid" and "immersive" visual goals at a component level. GSAP, on the other hand, is an industry-standard for high-performance, complex, and timeline-orchestrated animations. Its robust feature set and superior control make it perfect for achieving the "dynamic and performant backgrounds" (procedural grids, particles, shaders, parallax) and the "chapter-based storytelling" with distinct visual language and animations. This dual-library approach allows leveraging the strengths of each for different animation complexities, ensuring both ease of development for common animations and unparalleled control for advanced effects.

**Trade-offs**:
Using two primary animation libraries increases the project's bundle size slightly and requires developers to be proficient in both Framer Motion and GSAP. Careful planning is needed to determine which library is best suited for a given animation to avoid unnecessary complexity or performance bottlenecks. Potential for conflicts between libraries must be managed through careful integration.

---
### ADR-004: Smooth Scroll (Lenis)

**Status**: Accepted

**Context**:
The requirements explicitly state the use of Lenis for smooth scrolling to achieve a fluid and highly polished user experience.

**Decision**:
Lenis will be integrated and used as the smooth scrolling library for the entire website.

**Rationale**:
Lenis provides a highly performant, customizable, and consistent smooth scrolling experience across different browsers and devices. This directly aligns with the visual goals of a "fluid" and "highly polished" aesthetic, enhancing the overall user experience and contributing to the immersive feel of the website. Native browser smooth scrolling can be inconsistent in its implementation and offers limited customization options, which would not meet the high visual and performance standards set for this project.

**Trade-offs**:
Introducing a third-party library adds to the overall bundle size. There's a potential for conflicts with other scroll-related JavaScript or browser extensions, which will need to be carefully managed during development and testing.

---
### ADR-005: 3D / Canvas Elements (Three.js, React Three Fiber, Drei)

**Status**: Accepted

**Context**:
The requirements call for 3D elements and dynamic backgrounds, specifically mentioning Three.js, React Three Fiber, and Drei. The Hero section is required to be "unforgettable" with "3D depth elements" and an "animated background with mouse interaction." Dynamic backgrounds are also specified for other sections (e.g., procedural grids, particles, constellations, shaders, parallax).

**Decision**:
Three.js, integrated via React Three Fiber (R3F) and Drei, will be used for all 3D and canvas-based elements. The initial focus will be on implementing the "unforgettable Hero section" with 3D depth and interactive animated backgrounds. The scope will then expand to incorporate dynamic backgrounds (e.g., procedural grids, particles, shaders, parallax, glass layers) into other "chapters" of the website, provided performance goals are consistently met.

**Rationale**:
React Three Fiber simplifies the process of working with Three.js within a React component structure, making 3D development more declarative and manageable. Drei provides a collection of useful abstractions and helpers for R3F, further streamlining common 3D tasks. This combination is ideal for achieving the complex 3D requirements for the Hero section and the advanced dynamic backgrounds specified in the visual goals. By carefully managing performance and optimizing 3D scenes, we can deliver a visually stunning and immersive experience without compromising loading metrics.

**Trade-offs**:
Implementing 3D graphics significantly increases the project's bundle size and demands specialized knowledge in 3D rendering, WebGL, and performance optimization. There's a risk of negatively impacting performance (LCP, INP, bundle size) if 3D elements are not meticulously optimized. Ensuring responsiveness and consistent visual quality across a wide range of devices and screen sizes will require considerable effort.

---
### ADR-006: Data Layer (Static JSON/TS, Local Knowledge Base, Serverless API for Contact)

**Status**: Accepted

**Context**:
The requirements state that "All factual information... must be extracted from the `Legacy/` folder" and refined. A "local knowledge base generated from the `Legacy/` content" is needed for the AI-powered Q&A. The existing contact form uses a Node.js/Express backend with an SQLite database (`contacts.db`), which needs to be re-evaluated or rebuilt.

**Decision**:
1.  **Static Content (Projects, Skills, Experience, etc.):** All factual information (personal info, projects, experience, education, resume, achievements, assets, code, icons, social links, images) will be extracted from the `Legacy/` folder. This data will be transformed and stored as static JSON files or directly embedded as TypeScript objects within the codebase.
2.  **AI Knowledge Base:** A dedicated local knowledge base will be generated from the refined `Legacy/` content. This will likely be a highly optimized data structure (e.g., JSON, a simple vector store) embedded within the application or served locally, specifically designed to power the interactive AI Q&A feature.
3.  **Contact Form Backend:** The existing Node.js/Express/SQLite backend for the contact form will be replaced. A new, modern, and scalable serverless function (e.g., Vercel Edge Function, AWS Lambda) will be implemented to handle contact submissions. The existing contact data from `Legacy/backend/contacts.db` will be migrated to a lightweight, scalable database solution (e.g., PlanetScale, Supabase, or a simple API that forwards to an email service) that integrates seamlessly with the serverless function.

**Rationale**:
Using static JSON/TypeScript objects for most content simplifies data fetching, improves performance (no database queries on the frontend), and aligns with the requirement to extract from `Legacy/`. A local knowledge base is essential for the AI Q&A feature, ensuring quick responses and control over the data source. Rebuilding the contact form with a serverless function provides a modern, scalable, and cost-effective solution that integrates well with Next.js deployments, while ensuring the migration of valuable existing contact data.

**Trade-offs**:
The initial extraction and transformation of `Legacy/` content into static files will be a manual process. Any updates to static content will require code changes and a redeployment. Generating and maintaining the local AI knowledge base adds a build step and requires careful optimization. Developing and deploying a new serverless backend for the contact form requires additional engineering effort and consideration of database choices and data migration.

---
### ADR-007: Deployment (Vercel)

**Status**: Accepted

**Context**:
The requirements state "Leverage Cloudflare and Vercel for optimal global delivery and caching." The repository analysis confirms the current frontend deployment on Vercel.

**Decision**:
The entire Next.js application, including any serverless functions for the contact form or AI backend, will be deployed to Vercel.

**Rationale**:
Vercel is the creator and primary maintainer of Next.js, offering unparalleled integration, optimization, and performance for Next.js applications. It provides a global CDN, serverless functions (Edge Functions, Serverless Functions), automatic scaling, and seamless Git integration for continuous deployment. This aligns perfectly with the performance goals (Lighthouse scores, Core Web Vitals, optimal global delivery and caching) and simplifies the deployment and operational aspects of the project. While Cloudflare can be used for additional DNS management or security, Vercel's built-in capabilities often suffice for a personal portfolio, and it already leverages Cloudflare's network for its CDN.

**Trade-offs**:
Reliance on a single vendor (Vercel) for deployment. While Vercel offers a generous free tier, potential cost implications could arise with extremely high traffic (though unlikely for a personal portfolio). Migrating to another platform in the future would require effort.

---
### ADR-008: TypeScript vs JSX Strategy

**Status**: Accepted

**Context**:
The requirements explicitly state "Strict TypeScript for the entire codebase. No JavaScript (JSX) files." The repository analysis indicates that the current codebase is entirely written in JavaScript (JSX).

**Decision**:
The entire new codebase will be developed using Strict TypeScript. All new files will be created as `.ts` or `.tsx` files. Existing relevant JSX components or logic from the `Legacy/` project will be rewritten and migrated to TypeScript during the development process. Strict TypeScript configurations will be enforced via `tsconfig.json` and ESLint rules.

**Rationale**:
Adopting Strict TypeScript across the entire codebase significantly enhances code quality, maintainability, and developer experience. It provides static type checking, which helps catch errors early in development, improves code readability and understanding through explicit type definitions, and facilitates better refactoring. This directly addresses the project's technical goals for "Strict TypeScript for the entire codebase," "zero TypeScript errors," and contributes to "maintainable and modular folder structure" and "well-documented code."

**Trade-offs**:
The migration of existing JSX code to TypeScript will require a significant initial effort. Developers unfamiliar with TypeScript will experience a learning curve. TypeScript can be more verbose than plain JavaScript, requiring more explicit type definitions. However, the long-term benefits in terms of code reliability, maintainability, and developer confidence far outweigh these initial costs.

---
### ADR-009: Font Loading Strategy (next/font/google)

**Status**: Accepted

**Context**:
The requirements specify using `next/font/google` for font loading. The repository analysis confirms the current project already uses `next/font/google` for Inter, Playfair Display, and DM Mono.

**Decision**:
The project will continue to utilize `next/font/google` for loading all required fonts.

**Rationale**:
`next/font/google` is the recommended and most optimized way to load Google Fonts in a Next.js application. It automatically handles font optimization, including self-hosting, caching, preloading, and reducing layout shifts (CLS) by automatically injecting `font-display: optional` or `swap`. This ensures optimal performance, improves Core Web Vitals, and simplifies font management, directly aligning with the performance and SEO goals.

**Trade-offs**:
While `next/font/google` optimizes the delivery, there is still an initial reliance on the Google Fonts API for fetching font metadata. For absolute maximum control or extreme privacy requirements, fully self-hosting fonts (downloading and serving them directly) might be considered, but the benefits of `next/font/google` typically outweigh this for most projects, including this portfolio.

---
### ADR-010: AI Chat Feature (Local Knowledge Base with Serverless LLM Interaction)

**Status**: Accepted

**Context**:
The requirements mandate an "AI-Powered Section" with an interactive Q&A interface, allowing users to ask questions about the portfolio content. This feature must be "Powered by a local knowledge base generated from the `Legacy/` content."

**Decision**:
The AI chat feature will be implemented with the following strategy:
1.  **Local Knowledge Base:** A comprehensive knowledge base will be generated from the `Legacy/` content (projects, skills, experience, resume, etc.). This will be processed and stored in an optimized, local format (e.g., a structured JSON, a simple in-memory vector store, or an embedded search index) that can be efficiently queried by the AI.
2.  **LLM Interaction:** User queries will be processed by a serverless function (e.g., Vercel Edge Function) that interacts with a lightweight, highly optimized Large Language Model (LLM) API. This could involve:
    *   A small, performant cloud-based LLM (e.g., Google's Gemini Nano if suitable for API access, or a highly optimized model from OpenAI/Anthropic).
    *   A self-hosted, lightweight LLM running on a serverless platform (e.g., Llama.cpp via a containerized serverless function) if performance and cost allow.
3.  **Retrieval Augmented Generation (RAG):** The user's query will first be used to retrieve relevant information from the local knowledge base. This retrieved context will then be provided to the LLM to generate accurate and context-aware responses.
4.  **Streaming Responses:** Responses from the LLM will be streamed back to the client to provide an immediate and engaging user experience.

**Rationale**:
This approach directly addresses the requirement for a "local knowledge base generated from the `Legacy/` content," ensuring the AI's responses are accurate and specific to the portfolio. Using a serverless function for LLM interaction provides scalability, cost-effectiveness, and allows for leveraging powerful models without exposing API keys directly on the client. Retrieval Augmented Generation (RAG) is crucial for grounding the LLM's responses in the provided content, preventing hallucinations and ensuring factual accuracy. Streaming responses enhance perceived performance and user engagement, aligning with the "highly polished" visual goals.

**Trade-offs**:
Generating and maintaining the local knowledge base adds complexity to the build process and requires careful content parsing and optimization. Choosing and integrating a suitable lightweight LLM API (cloud or self-hosted) requires research and potential cost management. The performance of the RAG system (retrieval speed and LLM inference time) is critical to meet the interaction goals. Ensuring the AI's responses are consistently accurate and helpful requires robust prompt engineering and potentially fine-tuning.
