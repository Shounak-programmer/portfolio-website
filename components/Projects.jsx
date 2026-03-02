'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const projects = [
        {
            title: 'IDP — Intelligent Dispatch & Pathfinding',
            description:
                'A traffic management solution designed to reduce ambulance delays and eliminate noise pollution on Indian roads. Features a real-time Driver Radar App with spatial audio alerts, an Ambulance Navigation App that auto-clears traffic signals, and an Admin Dashboard for live monitoring. Built with Kalman filtering for smooth location prediction and Firebase for sub-second sync across all apps.',
            tech: ['React', 'Vite', 'Node.js', 'Firebase', 'Google Maps API', 'Web Audio API', 'Tailwind CSS'],
            accent: '#7a9e7e',
            accentGradient: 'linear-gradient(135deg, #7a9e7e, #5a7a5a)',
            emoji: '🚑',
            link: 'https://github.com/Shounak-programmer/idp',
            ongoing: true,
            featured: true,
        },
        {
            title: 'Portfolio Website',
            description:
                'This very portfolio — a personal showcase website built with Next.js, Framer Motion, and a custom natural design system. Features smooth scroll animations, a bento-grid skills layout, glassmorphism cards, and a fully responsive design. Deployed on Vercel with a custom domain.',
            tech: ['Next.js', 'React', 'Framer Motion', 'CSS', 'Vercel'],
            accent: '#c17a5a',
            accentGradient: 'linear-gradient(135deg, #c17a5a, #d99070)',
            emoji: '🌿',
            link: 'https://github.com/Shounak-programmer/portfolio-website',
            liveLink: 'https://shounakchatterjee.tech',
            ongoing: false,
            featured: false,
        },
    ];

    return (
        <section id="projects" style={{ position: 'relative', padding: '120px 24px', zIndex: 1 }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '64px', textAlign: 'center' }}
                >
                    <span className="section-label" style={{ justifyContent: 'center' }}>
                        Portfolio
                    </span>
                    <h2
                        style={{
                            fontFamily: 'var(--font-playfair), serif',
                            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                            fontWeight: 800,
                            color: 'var(--text-primary)',
                            marginTop: '12px',
                            lineHeight: 1.15,
                        }}
                    >
                        Featured{' '}
                        <span className="text-gradient-warm">Projects</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '16px', maxWidth: '480px', margin: '16px auto 0' }}>
                        Two standalone projects that represent my craft and problem-solving
                    </p>
                </motion.div>

                {/* Projects — stacked featured layout */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.12 }}
                            viewport={{ once: true }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                        >
                            <motion.div
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.35, type: 'spring', stiffness: 200, damping: 22 }}
                                style={{
                                    background: 'var(--bg-card)',
                                    backdropFilter: 'blur(16px)',
                                    borderRadius: '28px',
                                    padding: '40px 44px',
                                    border: `1px solid var(--border-subtle)`,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                                    borderColor: hoveredIndex === index ? `${project.accent}44` : undefined,
                                    boxShadow: hoveredIndex === index
                                        ? `0 28px 70px rgba(0,0,0,0.28), 0 0 40px ${project.accent}12`
                                        : 'none',
                                }}
                            >
                                {/* Top gradient bar */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0, left: 0, right: 0,
                                        height: '3px',
                                        background: project.accentGradient,
                                        opacity: hoveredIndex === index ? 1 : 0,
                                        transition: 'opacity 0.35s ease',
                                        borderRadius: '28px 28px 0 0',
                                    }}
                                />

                                {/* Subtle background glow */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: project.accentGradient,
                                        opacity: hoveredIndex === index ? 0.04 : 0,
                                        transition: 'opacity 0.35s ease',
                                        borderRadius: 'inherit',
                                    }}
                                />

                                {/* Content */}
                                <div style={{ position: 'relative', zIndex: 1 }}>

                                    {/* Header row */}
                                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>

                                        {/* Left: emoji + badges */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                                            <motion.span
                                                style={{ fontSize: '2.4rem', display: 'block' }}
                                                animate={{ scale: hoveredIndex === index ? 1.12 : 1 }}
                                                transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
                                            >
                                                {project.emoji}
                                            </motion.span>

                                            {project.ongoing && (
                                                <span style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '6px',
                                                    padding: '4px 12px',
                                                    borderRadius: '100px',
                                                    fontSize: '0.7rem',
                                                    fontWeight: 700,
                                                    letterSpacing: '0.08em',
                                                    textTransform: 'uppercase',
                                                    background: `${project.accent}20`,
                                                    color: project.accent,
                                                    border: `1px solid ${project.accent}40`,
                                                }}>
                                                    <span style={{
                                                        width: '6px', height: '6px', borderRadius: '50%',
                                                        background: project.accent,
                                                        boxShadow: `0 0 6px ${project.accent}`,
                                                        animation: 'pulse-dot 2s ease-in-out infinite',
                                                    }} />
                                                    Ongoing
                                                </span>
                                            )}

                                            {project.featured && (
                                                <span style={{
                                                    padding: '4px 12px',
                                                    borderRadius: '100px',
                                                    fontSize: '0.7rem',
                                                    fontWeight: 700,
                                                    letterSpacing: '0.08em',
                                                    textTransform: 'uppercase',
                                                    background: 'rgba(200, 169, 110, 0.15)',
                                                    color: '#c8a96e',
                                                    border: '1px solid rgba(200, 169, 110, 0.35)',
                                                }}>
                                                    ⭐ Featured
                                                </span>
                                            )}
                                        </div>

                                        {/* Right: project number */}
                                        <span style={{
                                            fontFamily: 'var(--font-dm-mono), monospace',
                                            fontSize: '0.75rem',
                                            color: 'var(--text-muted)',
                                            letterSpacing: '0.1em',
                                            marginTop: '4px',
                                        }}>
                                            {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        style={{
                                            fontFamily: 'var(--font-playfair), serif',
                                            fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                                            fontWeight: 700,
                                            color: hoveredIndex === index ? project.accent : 'var(--text-primary)',
                                            transition: 'color 0.3s ease',
                                            marginBottom: '14px',
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        style={{
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.95rem',
                                            lineHeight: 1.75,
                                            marginBottom: '28px',
                                            maxWidth: '800px',
                                        }}
                                    >
                                        {project.description}
                                    </p>

                                    {/* Tech tags */}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                                        {project.tech.map((tech, ti) => (
                                            <span
                                                key={ti}
                                                style={{
                                                    padding: '5px 14px',
                                                    borderRadius: '100px',
                                                    fontSize: '0.73rem',
                                                    fontWeight: 600,
                                                    letterSpacing: '0.04em',
                                                    background: `${project.accent}14`,
                                                    color: project.accent,
                                                    border: `1px solid ${project.accent}30`,
                                                    transition: 'background 0.2s ease',
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action links row */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                color: project.accent,
                                                textDecoration: 'none',
                                                fontSize: '0.875rem',
                                                fontWeight: 600,
                                                letterSpacing: '0.04em',
                                            }}
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            View on GitHub
                                            <motion.span
                                                animate={{ x: hoveredIndex === index ? [0, 4, 0] : 0 }}
                                                transition={{ duration: 0.8, repeat: hoveredIndex === index ? Infinity : 0 }}
                                            >
                                                →
                                            </motion.span>
                                        </motion.a>

                                        {project.liveLink && (
                                            <motion.a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '6px',
                                                    color: 'var(--text-muted)',
                                                    textDecoration: 'none',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 500,
                                                    letterSpacing: '0.04em',
                                                    transition: 'color 0.2s ease',
                                                }}
                                                whileHover={{ x: 4, color: project.accent }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                                    <polyline points="15 3 21 3 21 9" />
                                                    <line x1="10" y1="14" x2="21" y2="3" />
                                                </svg>
                                                Live site
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* View all on GitHub button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    style={{ marginTop: '56px', textAlign: 'center' }}
                >
                    <motion.a
                        href="https://github.com/Shounak-programmer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        View all on GitHub
                    </motion.a>
                </motion.div>
            </div>

            {/* Ambient decorations */}
            <div style={{
                position: 'absolute', top: '30%', right: '-5%',
                width: '350px', height: '350px',
                background: 'radial-gradient(circle, rgba(193, 122, 90, 0.06) 0%, transparent 70%)',
                filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: '20%', left: '-5%',
                width: '350px', height: '350px',
                background: 'radial-gradient(circle, rgba(122, 158, 126, 0.06) 0%, transparent 70%)',
                filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none',
            }} />

            <style>{`
                @keyframes pulse-dot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(0.7); }
                }
            `}</style>
        </section>
    );
}
