'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [hoveredSocial, setHoveredSocial] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                const data = await res.json().catch(() => ({}));
                setSubmitError(data.error || 'Something went wrong. Please try again.');
            }
        } catch {
            setSubmitError('Could not reach the server. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: '⬡',
            label: 'github.com/Shounak-programmer',
            url: 'https://github.com/Shounak-programmer',
            accent: '#9dbc9f',
        },
        {
            name: 'LinkedIn',
            icon: '◈',
            label: 'linkedin.com/in/shounak-chatterjee',
            url: 'https://www.linkedin.com/in/shounak-chatterjee-45480a258/',
            accent: '#c8a96e',
        },
        {
            name: 'Twitter / X',
            icon: '◉',
            label: '@user_shounak',
            url: 'https://x.com/user_shounak',
            accent: '#7a9e7e',
        },
        {
            name: 'Email',
            icon: '◎',
            label: 'shhounakchatterjee@gmail.com',
            url: 'mailto:shhounakchatterjee@gmail.com',
            accent: '#c17a5a',
        },
    ];

    const inputStyle = {
        width: '100%',
        background: 'rgba(34, 31, 27, 0.6)',
        border: '1px solid var(--border-medium)',
        borderRadius: '14px',
        padding: '14px 18px',
        color: 'var(--text-primary)',
        fontSize: '0.95rem',
        outline: 'none',
        transition: 'all 0.3s ease',
        fontFamily: 'var(--font-inter), sans-serif',
    };

    return (
        <section id="contact" style={{ position: 'relative', padding: '120px 24px', overflow: 'hidden', zIndex: 1 }}>
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
                        Reach out
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
                        Let&apos;s{' '}
                        <span className="text-gradient-full">Connect</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '16px', maxWidth: '480px', margin: '16px auto 0' }}>
                        Have a project in mind or want to collaborate? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }} className="grid-contact">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div
                            style={{
                                background: 'var(--bg-card)',
                                backdropFilter: 'blur(16px)',
                                border: '1px solid var(--border-subtle)',
                                borderRadius: '28px',
                                padding: '40px',
                            }}
                        >
                            <h3
                                style={{
                                    fontFamily: 'var(--font-playfair), serif',
                                    fontSize: '1.4rem',
                                    fontWeight: 700,
                                    color: 'var(--text-primary)',
                                    marginBottom: '28px',
                                }}
                            >
                                Send a message
                            </h3>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{
                                        textAlign: 'center',
                                        padding: '40px 24px',
                                        color: 'var(--accent-sage-light)',
                                    }}
                                >
                                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🌿</div>
                                    <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>Message sent!</p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>I&apos;ll get back to you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div>
                                        <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            style={inputStyle}
                                            placeholder="Your name"
                                            required
                                            onFocus={e => {
                                                e.target.style.borderColor = 'var(--accent-sage)';
                                                e.target.style.boxShadow = '0 0 0 3px rgba(122, 158, 126, 0.12)';
                                            }}
                                            onBlur={e => {
                                                e.target.style.borderColor = 'var(--border-medium)';
                                                e.target.style.boxShadow = 'none';
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            style={inputStyle}
                                            placeholder="your.email@example.com"
                                            required
                                            onFocus={e => {
                                                e.target.style.borderColor = 'var(--accent-sage)';
                                                e.target.style.boxShadow = '0 0 0 3px rgba(122, 158, 126, 0.12)';
                                            }}
                                            onBlur={e => {
                                                e.target.style.borderColor = 'var(--border-medium)';
                                                e.target.style.boxShadow = 'none';
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                                            rows={5}
                                            style={{ ...inputStyle, resize: 'none' }}
                                            placeholder="Tell me about your project or idea..."
                                            required
                                            onFocus={e => {
                                                e.target.style.borderColor = 'var(--accent-sage)';
                                                e.target.style.boxShadow = '0 0 0 3px rgba(122, 158, 126, 0.12)';
                                            }}
                                            onBlur={e => {
                                                e.target.style.borderColor = 'var(--border-medium)';
                                                e.target.style.boxShadow = 'none';
                                            }}
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-primary"
                                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                        style={{
                                            opacity: isSubmitting ? 0.7 : 1,
                                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                            width: '100%',
                                            fontSize: '0.95rem',
                                            padding: '15px',
                                        }}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send message'}
                                    </motion.button>

                                    {submitError && (
                                        <p style={{ color: '#c0665a', fontSize: '0.85rem', marginTop: '4px', textAlign: 'center' }}>
                                            ⚠ {submitError}
                                        </p>
                                    )}
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Right side: info + social links */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
                    >
                        {/* Quick info */}
                        <div
                            style={{
                                background: 'var(--bg-card)',
                                backdropFilter: 'blur(16px)',
                                border: '1px solid var(--border-subtle)',
                                borderRadius: '24px',
                                padding: '32px',
                            }}
                        >
                            <h3
                                style={{
                                    fontFamily: 'var(--font-playfair), serif',
                                    fontSize: '1.2rem',
                                    fontWeight: 700,
                                    color: 'var(--accent-sage-light)',
                                    marginBottom: '24px',
                                }}
                            >
                                Quick Info
                            </h3>
                            {[
                                { label: 'Location', value: 'India', icon: '📍' },
                                { label: 'Availability', value: 'Open to opportunities', icon: '✅', accent: 'var(--accent-sage-light)' },
                                { label: 'Response time', value: 'Within 24 hours', icon: '⏱️' },
                            ].map((info, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: i < 2 ? '20px' : 0 }}>
                                    <span style={{ fontSize: '1.1rem', marginTop: '1px' }}>{info.icon}</span>
                                    <div>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '3px' }}>
                                            {info.label}
                                        </p>
                                        <p style={{ color: info.accent || 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                                            {info.value}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 6 }}
                                    onHoverStart={() => setHoveredSocial(link.name)}
                                    onHoverEnd={() => setHoveredSocial(null)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px',
                                        padding: '16px 20px',
                                        background: 'var(--bg-card)',
                                        backdropFilter: 'blur(12px)',
                                        border: `1px solid ${hoveredSocial === link.name ? link.accent + '44' : 'var(--border-subtle)'}`,
                                        borderRadius: '16px',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        boxShadow: hoveredSocial === link.name ? `0 8px 24px rgba(0,0,0,0.2), 0 0 16px ${link.accent}14` : 'none',
                                    }}
                                >
                                    <span style={{
                                        fontSize: '1.4rem',
                                        color: link.accent,
                                        width: '40px',
                                        textAlign: 'center',
                                        flexShrink: 0,
                                    }}>
                                        {link.icon}
                                    </span>
                                    <div>
                                        <p style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '2px' }}>
                                            {link.name}
                                        </p>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: 'var(--font-dm-mono), monospace' }}>
                                            {link.label}
                                        </p>
                                    </div>
                                    <span style={{
                                        marginLeft: 'auto',
                                        color: hoveredSocial === link.name ? link.accent : 'var(--text-muted)',
                                        transition: 'color 0.3s ease',
                                        fontSize: '1rem',
                                    }}>
                                        →
                                    </span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Ambient elements */}
            <div style={{
                position: 'absolute', top: '20%', left: '-5%',
                width: '400px', height: '400px',
                background: 'radial-gradient(circle, rgba(122, 158, 126, 0.05) 0%, transparent 70%)',
                filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: '20%', right: '-5%',
                width: '400px', height: '400px',
                background: 'radial-gradient(circle, rgba(193, 122, 90, 0.05) 0%, transparent 70%)',
                filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none',
            }} />

            <style>{`
                @media (max-width: 768px) {
                    .grid-contact {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}
