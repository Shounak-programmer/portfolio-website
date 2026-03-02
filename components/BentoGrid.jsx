'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const BentoCard = ({ title, description, icon, className = '', accentColor, accentGradient }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className={`glassmorphism relative group rounded-3xl p-8 cursor-default ${className}`}
            style={{
                border: `1px solid var(--border-subtle)`,
                transition: 'all 0.4s cubic-bezier(0.34, 1.2, 0.64, 1)',
            }}
            whileHover={{
                y: -4,
                borderColor: `${accentColor}44`,
                boxShadow: `0 20px 60px rgba(0,0,0,0.3), 0 0 30px ${accentColor}18`,
            }}
            transition={{ duration: 0.35 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Warm gradient overlay on hover */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: accentGradient,
                    opacity: isHovered ? 0.06 : 0,
                    transition: 'opacity 0.4s ease',
                    borderRadius: 'inherit',
                }}
            />

            {/* Top accent bar */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: accentGradient,
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                    borderRadius: '24px 24px 0 0',
                }}
            />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <motion.div
                    style={{ fontSize: '3rem', marginBottom: '0', paddingBottom: '24px', display: 'block' }}
                    animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
                >
                    {icon}
                </motion.div>

                <div>
                    <h3
                        style={{
                            fontFamily: 'var(--font-playfair), serif',
                            fontSize: '1.3rem',
                            fontWeight: 700,
                            color: isHovered ? accentColor : 'var(--text-primary)',
                            transition: 'color 0.3s ease',
                            marginBottom: '8px',
                            lineHeight: 1.3,
                        }}
                    >
                        {title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default function BentoGrid() {
    const cards = [
        {
            title: 'Full Stack Development',
            description: 'Building scalable web applications from concept to deployment — React, Node.js, and beyond.',
            icon: '🌿',
            colSpan: 'span 2',
            rowSpan: 'span 2',
            accentColor: '#7a9e7e',
            accentGradient: 'linear-gradient(135deg, #7a9e7e, #5a7a5a)',
        },
        {
            title: 'UI/UX Design',
            description: 'Crafting beautiful, intuitive interfaces that feel as natural as they look.',
            icon: '🎨',
            colSpan: 'span 1',
            accentColor: '#c17a5a',
            accentGradient: 'linear-gradient(135deg, #c17a5a, #d99070)',
        },
        {
            title: 'Cloud & DevOps',
            description: 'Deploying and managing applications on modern cloud infrastructure.',
            icon: '☁️',
            colSpan: 'span 1',
            accentColor: '#c8a96e',
            accentGradient: 'linear-gradient(135deg, #c8a96e, #ddc28a)',
        },
        {
            title: 'API Development',
            description: 'Designing robust RESTful and GraphQL APIs for seamless integration.',
            icon: '🔗',
            colSpan: 'span 1',
            accentColor: '#9dbc9f',
            accentGradient: 'linear-gradient(135deg, #9dbc9f, #7a9e7e)',
        },
        {
            title: 'Database Design',
            description: 'Architecting efficient database schemas optimized for real-world performance.',
            icon: '🗄️',
            colSpan: 'span 1',
            accentColor: '#d4a8a0',
            accentGradient: 'linear-gradient(135deg, #d4a8a0, #c17a5a)',
        },
        {
            title: 'Performance',
            description: 'Making applications blazing fast with optimization techniques that matter.',
            icon: '⚡',
            colSpan: 'span 1',
            accentColor: '#c8a96e',
            accentGradient: 'linear-gradient(135deg, #c8a96e, #7a9e7e)',
        },
    ];

    return (
        <section id="skills" style={{ position: 'relative', padding: '120px 24px', zIndex: 1 }}>
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
                        What I do
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
                        Areas of{' '}
                        <span className="text-gradient-sage">Expertise</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '16px', maxWidth: '480px', margin: '16px auto 0' }}>
                        Building end-to-end digital solutions with thoughtful engineering
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '20px',
                    }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            style={{ gridColumn: card.colSpan, gridRow: card.rowSpan }}
                        >
                            <BentoCard {...card} className="h-full" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Ambient glow decorations */}
            <div style={{
                position: 'absolute', top: '5%', left: '-5%',
                width: '400px', height: '400px',
                background: 'radial-gradient(circle, rgba(122, 158, 126, 0.06) 0%, transparent 70%)',
                filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: '5%', right: '-5%',
                width: '400px', height: '400px',
                background: 'radial-gradient(circle, rgba(193, 122, 90, 0.06) 0%, transparent 70%)',
                filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none',
            }} />
        </section>
    );
}
