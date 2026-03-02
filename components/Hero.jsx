'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const [mounted, setMounted] = useState(false);

    const springConfig = { damping: 30, stiffness: 80 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        setMounted(true);
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, [mouseX, mouseY]);

    const techStack = [
        'React.js', 'Next.js', 'JavaScript', 'Node.js', 'Python', 'Express.js',
        'Framer Motion', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Git',
        'GraphQL', 'REST APIs', 'WebSockets', 'Redis', 'Tailwind CSS', 'CI/CD'
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ zIndex: 1 }}>

            {/* Ambient orbs - warm natural colors */}
            <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(122, 158, 126, 0.12) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    x: useTransform(springX, (v) => (v - windowSize.width / 2) * 0.06),
                    y: useTransform(springY, (v) => (v - windowSize.height / 2) * 0.06),
                }}
            />
            <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(193, 122, 90, 0.1) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    x: useTransform(springX, (v) => -(v - windowSize.width / 2) * 0.05),
                    y: useTransform(springY, (v) => -(v - windowSize.height / 2) * 0.05),
                    top: '20%',
                    right: '10%',
                }}
            />
            <motion.div
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(200, 169, 110, 0.08) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    bottom: '10%',
                    left: '15%',
                    animation: 'orb-drift-1 12s ease-in-out infinite',
                }}
            />

            {/* Main content */}
            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">

                {/* Badge / label */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mb-8 flex justify-center"
                >
                    <span
                        className="section-label"
                        style={{
                            background: 'rgba(122, 158, 126, 0.08)',
                            border: '1px solid rgba(122, 158, 126, 0.25)',
                            borderRadius: '100px',
                            padding: '6px 18px 6px 14px',
                            fontSize: '0.78rem',
                            letterSpacing: '0.1em',
                        }}
                    >
                        Full Stack Developer
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15 }}
                    style={{
                        fontFamily: 'var(--font-playfair), serif',
                        fontSize: 'clamp(3.5rem, 10vw, 8.5rem)',
                        fontWeight: 800,
                        lineHeight: 1.0,
                        marginBottom: '0.3em',
                    }}
                >
                    <span className="shimmer-text">Shounak</span>
                    <br />
                    <span
                        style={{
                            color: 'var(--text-primary)',
                            WebkitTextStrokeWidth: '1px',
                            WebkitTextStrokeColor: 'rgba(242, 237, 230, 0.3)',
                            opacity: 0.9,
                        }}
                    >
                        Chatterjee
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.35 }}
                    style={{
                        color: 'var(--text-secondary)',
                        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                        fontWeight: 300,
                        letterSpacing: '0.02em',
                        maxWidth: '520px',
                        margin: '1.5em auto 2.5em',
                        lineHeight: 1.6,
                    }}
                >
                    Crafting thoughtful digital experiences that blend elegant design with
                    powerful{' '}
                    <span style={{ color: 'var(--accent-sage-light)', fontWeight: 500 }}>
                        engineering
                    </span>.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '5rem' }}
                >
                    <a href="#contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                        Get in touch
                    </a>
                    <a href="#projects" className="btn-secondary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                        View projects
                    </a>
                </motion.div>

                {/* Tech Stack Ticker */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    style={{
                        overflow: 'hidden',
                        background: 'rgba(34, 31, 27, 0.6)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '100px',
                        padding: '14px 0',
                        maxWidth: '860px',
                        margin: '0 auto',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            whiteSpace: 'nowrap',
                            animation: 'ticker 35s linear infinite',
                        }}
                    >
                        {[...techStack, ...techStack].map((tech, index) => (
                            <div
                                key={index}
                                style={{ display: 'inline-flex', alignItems: 'center', margin: '0 24px' }}
                            >
                                <span style={{ color: 'var(--accent-gold)', marginRight: '8px', fontSize: '0.6rem' }}>◆</span>
                                <span style={{
                                    fontSize: '0.85rem',
                                    fontWeight: 500,
                                    color: 'var(--text-secondary)',
                                    letterSpacing: '0.04em',
                                }}>
                                    {tech}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
                style={{
                    position: 'absolute',
                    bottom: '32px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                }}
            >
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        width: '1px',
                        height: '40px',
                        background: 'linear-gradient(to bottom, var(--accent-sage), transparent)',
                    }}
                />
            </motion.div>
        </section>
    );
};

export default Hero;
