'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const links = {
        navigation: [
            { name: 'Home', href: '#' },
            { name: 'Skills', href: '#skills' },
            { name: 'Projects', href: '#projects' },
            { name: 'Contact', href: '#contact' },
        ],
        social: [
            { name: 'GitHub', url: 'https://github.com/Shounak-programmer' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shounak-chatterjee-45480a258/' },
            { name: 'Twitter', url: 'https://x.com/user_shounak' },
            { name: 'Email', url: 'mailto:shhounakchatterjee@gmail.com' },
        ],
    };

    return (
        <footer
            style={{
                position: 'relative',
                borderTop: '1px solid var(--border-subtle)',
                background: 'var(--bg-primary)',
                padding: '64px 24px 32px',
                zIndex: 1,
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1.5fr 1fr 1fr',
                        gap: '48px',
                        marginBottom: '48px',
                    }}
                    className="footer-grid"
                >
                    {/* Brand */}
                    <div>
                        <motion.h3
                            whileHover={{ scale: 1.01 }}
                            style={{
                                fontFamily: 'var(--font-playfair), serif',
                                fontSize: '1.6rem',
                                fontWeight: 800,
                                marginBottom: '16px',
                                lineHeight: 1.2,
                            }}
                        >
                            <span className="text-gradient-full">Shounak</span>
                            <br />
                            <span style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '1.1rem' }}>
                                Chatterjee
                            </span>
                        </motion.h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.9rem', maxWidth: '280px' }}>
                            Full Stack Developer crafting digital experiences with passion, precision, and a love for clean code.
                        </p>
                        <div style={{ marginTop: '24px' }}>
                            <span
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '6px 14px',
                                    background: 'rgba(122, 158, 126, 0.1)',
                                    border: '1px solid rgba(122, 158, 126, 0.2)',
                                    borderRadius: '100px',
                                    fontSize: '0.78rem',
                                    color: 'var(--accent-sage-light)',
                                    fontWeight: 500,
                                }}
                            >
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-sage)', display: 'inline-block', animation: 'pulse-ring 2s infinite' }} />
                                Available for work
                            </span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 style={{
                            color: 'var(--text-primary)',
                            fontWeight: 600,
                            fontSize: '0.82rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            marginBottom: '20px',
                        }}>
                            Navigate
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {links.navigation.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.href}
                                        style={{
                                            color: 'var(--text-muted)',
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            transition: 'color 0.2s ease',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                        }}
                                        onMouseEnter={e => e.target.style.color = 'var(--accent-sage-light)'}
                                        onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 style={{
                            color: 'var(--text-primary)',
                            fontWeight: 600,
                            fontSize: '0.82rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            marginBottom: '20px',
                        }}>
                            Connect
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {links.social.map((link, i) => (
                                <li key={i}>
                                    <motion.a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 4 }}
                                        style={{
                                            color: 'var(--text-muted)',
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            transition: 'color 0.2s ease',
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-gold)'}
                                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                                    >
                                        {link.name}
                                        <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>↗</span>
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="divider" style={{ marginBottom: '28px' }} />

                {/* Bottom bar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px',
                }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                        © {currentYear} Shounak Chatterjee. All rights reserved.
                    </p>
                    <p
                        style={{
                            color: 'var(--text-muted)',
                            fontSize: '0.82rem',
                            fontFamily: 'var(--font-dm-mono), monospace',
                        }}
                    >
                        Built with React.js · Node.js · Framer Motion
                    </p>
                </div>
            </div>

            {/* Ambient bottom glow */}
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(122, 158, 126, 0.4), rgba(200, 169, 110, 0.4), transparent)',
            }} />

            <style>{`
                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </footer>
    );
}
