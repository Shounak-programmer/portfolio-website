'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const techStack = [
        'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'TailwindCSS',
        'Framer Motion', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Git',
        'GraphQL', 'REST APIs', 'WebSockets', 'Redis', 'Kubernetes', 'CI/CD'
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated gradient orbs */}
            <motion.div
                className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
                style={{
                    background: 'radial-gradient(circle, #00f0ff 0%, transparent 70%)',
                    left: mousePosition.x - 192,
                    top: mousePosition.y - 192,
                }}
                animate={{
                    x: mousePosition.x * 0.02,
                    y: mousePosition.y * 0.02,
                }}
                transition={{ type: 'spring', damping: 30 }}
            />

            <motion.div
                className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
                style={{
                    background: 'radial-gradient(circle, #ff006e 0%, transparent 70%)',
                    right: mousePosition.x * 0.5,
                    bottom: mousePosition.y * 0.5,
                }}
                animate={{
                    x: -mousePosition.x * 0.02,
                    y: -mousePosition.y * 0.02,
                }}
                transition={{ type: 'spring', damping: 30 }}
            />

            <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
                {/* Glitch text effect */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <span className="text-[#00f0ff] font-mono text-sm md:text-base tracking-widest">
                        {'<'} DEVELOPER {'/>'}
                    </span>
                </motion.div>

                {/* Main name with glitch effect */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <span className="block text-6xl md:text-8xl lg:text-9xl font-black mb-4"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-[#00f0ff] via-[#8b5cf6] to-[#ff006e] bg-clip-text text-transparent">
                                SHOUNAK
                            </span>
                            {/* Glitch layers */}
                            <span className="absolute top-0 left-0 z-0 text-[#00f0ff] opacity-70"
                                style={{
                                    animation: 'glitch 0.3s infinite',
                                    clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)'
                                }}>
                                SHOUNAK
                            </span>
                            <span className="absolute top-0 left-0 z-0 text-[#ff006e] opacity-70"
                                style={{
                                    animation: 'glitch 0.3s infinite reverse',
                                    clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)'
                                }}>
                                SHOUNAK
                            </span>
                        </span>
                    </span>
                    <span className="block text-5xl md:text-7xl lg:text-8xl font-black"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-[#ff006e] via-[#8b5cf6] to-[#00f0ff] bg-clip-text text-transparent">
                                CHATTERJEE
                            </span>
                            {/* Glitch layers */}
                            <span className="absolute top-0 left-0 z-0 text-[#ff006e] opacity-70"
                                style={{
                                    animation: 'glitch 0.3s infinite',
                                    clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)'
                                }}>
                                CHATTERJEE
                            </span>
                            <span className="absolute top-0 left-0 z-0 text-[#00f0ff] opacity-70"
                                style={{
                                    animation: 'glitch 0.3s infinite reverse',
                                    clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)'
                                }}>
                                CHATTERJEE
                            </span>
                        </span>
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-[#94a3b8] mt-6 mb-12 font-light tracking-wide"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                    Full Stack Developer • Creative Coder • Tech Enthusiast
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap gap-4 justify-center mb-20"
                >
                    <a
                        href="#contact"
                        className="group relative rounded-full px-8 py-4 bg-transparent border-2 border-[#00f0ff] text-[#00f0ff] font-semibold tracking-wider overflow-hidden transition-all duration-300 hover:text-[#0a0e27]"
                    >
                        <span className="relative z-10">GET IN TOUCH</span>
                        <span className="absolute inset-0 bg-[#00f0ff] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        <span className="absolute inset-0 shadow-[0_0_20px_rgba(0,240,255,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </a>

                    <a
                        href="#projects"
                        className="group relative rounded-full px-8 py-4 bg-[#ff006e] text-white font-semibold tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,110,0.6)]"
                    >
                        <span className="relative z-10">VIEW PROJECTS</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-[#ff006e] to-[#8b5cf6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </a>
                </motion.div>

                {/* Tech Stack Ticker */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="relative overflow-hidden py-6 border-t border-b border-[#1e293b]"
                >
                    <div className="flex whitespace-nowrap animate-[ticker_30s_linear_infinite]">
                        {[...techStack, ...techStack].map((tech, index) => (
                            <div
                                key={index}
                                className="inline-flex items-center mx-6"
                            >
                                <span className="text-[#00f0ff] mr-2">▸</span>
                                <span className="text-lg font-semibold text-[#e0e7ff] tracking-wider">
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
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-[#00f0ff] rounded-full flex justify-center pt-2"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-2 bg-[#00f0ff] rounded-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
