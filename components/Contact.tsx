'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isHovered, setIsHovered] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: '⚡',
            url: 'https://github.com/Shounak-programmer',
            color: '#00f0ff',
        },
        {
            name: 'LinkedIn',
            icon: '💼',
            url: 'https://www.linkedin.com/in/shounak-chatterjee-45480a258/',
            color: '#0080ff',
        },
        {
            name: 'Twitter',
            icon: '🐦',
            url: 'https://x.com/user_shounak',
            color: '#00f0ff',
        },
        {
            name: 'Email',
            icon: '✉️',
            url: 'mailto:shhounakchatterjee@gmail.com',
            color: '#ff006e',
        },
    ];

    return (
        <section id="contact" className="relative py-32 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-[#ff006e] to-[#00f0ff] bg-clip-text text-transparent"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        LET&apos;S CONNECT
                    </h2>
                    <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
                        Have a project in mind? Let&apos;s build something amazing together.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-[#e0e7ff] mb-2 font-semibold tracking-wide">
                                    NAME
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full rounded-2xl bg-[#0f1429] border-2 border-[#1e293b] focus:border-[#00f0ff] outline-none px-4 py-3 text-[#e0e7ff] transition-all duration-300 focus:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-[#e0e7ff] mb-2 font-semibold tracking-wide">
                                    EMAIL
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-[#0f1429] border-2 border-[#1e293b] focus:border-[#00f0ff] outline-none px-4 py-3 text-[#e0e7ff] transition-all duration-300 focus:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-[#e0e7ff] mb-2 font-semibold tracking-wide">
                                    MESSAGE
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={6}
                                    className="w-full rounded-2xl bg-[#0f1429] border-2 border-[#1e293b] focus:border-[#00f0ff] outline-none px-4 py-3 text-[#e0e7ff] transition-all duration-300 resize-none focus:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full rounded-full bg-gradient-to-r from-[#00f0ff] to-[#0080ff] text-[#0a0e27] font-bold py-4 tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]"
                            >
                                SEND MESSAGE
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Social Links & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Quick Info */}
                        <div className="rounded-3xl border border-[#1e293b] bg-[#0f1429] p-8">
                            <h3 className="text-2xl font-bold mb-6 text-[#00f0ff]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                QUICK INFO
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <span className="text-[#ff006e] mr-3 text-xl">▸</span>
                                    <div>
                                        <p className="text-[#94a3b8] text-sm">LOCATION</p>
                                        <p className="text-[#e0e7ff] font-semibold">India</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#ff006e] mr-3 text-xl">▸</span>
                                    <div>
                                        <p className="text-[#94a3b8] text-sm">AVAILABILITY</p>
                                        <p className="text-[#00ff88] font-semibold">Open to opportunities</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#ff006e] mr-3 text-xl">▸</span>
                                    <div>
                                        <p className="text-[#94a3b8] text-sm">RESPONSE TIME</p>
                                        <p className="text-[#e0e7ff] font-semibold">Within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-[#ff006e]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                CONNECT
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative group rounded-3xl border border-[#1e293b] bg-[#0f1429] p-6 flex flex-col items-center justify-center transition-all duration-300 hover:border-[#00f0ff]"
                                        whileHover={{ scale: 1.05 }}
                                        onHoverStart={() => setIsHovered(link.name)}
                                        onHoverEnd={() => setIsHovered(null)}
                                    >
                                        <motion.div
                                            className="text-4xl mb-2"
                                            animate={{ rotate: isHovered === link.name ? 360 : 0 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            {link.icon}
                                        </motion.div>
                                        <span className="text-[#e0e7ff] font-semibold tracking-wide">
                                            {link.name}
                                        </span>

                                        {/* Hover effect */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{
                                                boxShadow: `inset 0 0 20px ${link.color}40`,
                                            }}
                                        />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00f0ff] rounded-full blur-[150px] opacity-5 -z-10" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ff006e] rounded-full blur-[150px] opacity-5 -z-10" />
        </section>
    );
}
