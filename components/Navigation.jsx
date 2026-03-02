'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { scrollY } = useScroll();
    const navBg = useTransform(scrollY, [0, 80], ['rgba(18,17,15,0.0)', 'rgba(18,17,15,0.92)']);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                padding: '0 24px',
            }}
        >
            <motion.div
                style={{
                    background: navBg,
                    backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                    borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
                    transition: 'border-color 0.4s ease',
                }}
            >
                <div
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: '72px',
                    }}
                >
                    {/* Logo */}
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.03 }}
                        style={{
                            fontFamily: 'var(--font-playfair), serif',
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            textDecoration: 'none',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        <span className="text-gradient-sage">SC</span>
                    </motion.a>

                    {/* Desktop nav links */}
                    <div
                        className="hidden md:flex"
                        style={{ alignItems: 'center', gap: '40px' }}
                    >
                        {navItems.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                whileHover={{ y: -1 }}
                                style={{
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    letterSpacing: '0.02em',
                                    transition: 'color 0.2s ease',
                                    position: 'relative',
                                }}
                                className="nav-link"
                                onMouseEnter={e => e.target.style.color = 'var(--accent-sage-light)'}
                                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.a
                        href="#contact"
                        className="hidden md:inline-flex btn-primary"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        style={{
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            padding: '10px 24px',
                        }}
                    >
                        Hire me
                    </motion.a>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '8px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px',
                        }}
                    >
                        <span style={{
                            display: 'block', width: '22px', height: '1.5px',
                            background: mobileOpen ? 'var(--accent-sage-light)' : 'var(--text-primary)',
                            transition: 'all 0.3s ease',
                            transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                        }} />
                        <span style={{
                            display: 'block', width: '22px', height: '1.5px',
                            background: 'var(--text-primary)',
                            transition: 'all 0.3s ease',
                            opacity: mobileOpen ? 0 : 1,
                        }} />
                        <span style={{
                            display: 'block', width: '22px', height: '1.5px',
                            background: mobileOpen ? 'var(--accent-sage-light)' : 'var(--text-primary)',
                            transition: 'all 0.3s ease',
                            transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                        }} />
                    </button>
                </div>

                {/* Mobile dropdown */}
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            borderTop: '1px solid var(--border-subtle)',
                            padding: '16px 0',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                        }}
                    >
                        {navItems.map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    padding: '10px 16px',
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    transition: 'color 0.2s',
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div style={{ padding: '8px 16px' }}>
                            <a href="#contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block', fontSize: '0.85rem' }}>
                                Hire me
                            </a>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </motion.nav>
    );
}
