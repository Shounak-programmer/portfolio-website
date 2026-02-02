'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    const springConfig = { damping: 25, stiffness: 100 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Set initial window size
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

        const handleMouseMove = (e: MouseEvent) => {
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
        'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'TailwindCSS',
        'Framer Motion', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Git',
        'GraphQL', 'REST APIs', 'WebSockets', 'Redis', 'Kubernetes', 'CI/CD'
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated gradient orbs */}
            <motion.div
                className="absolute w-96 h-96 rounded-full blur-[100px] opacity-20"
                style={{
                    background: 'radial-gradient(circle, #00f0ff 0%, transparent 70%)',
                    x: useTransform(springX, (value: number) => (value - windowSize.width / 2) * 0.1),
                    y: useTransform(springY, (value: number) => (value - windowSize.height / 2) * 0.1),
                }}
            />

            <motion.div
                className="absolute w-96 h-96 rounded-full blur-[100px] opacity-20"
                style={{
                    background: 'radial-gradient(circle, #ff006e 0%, transparent 70%)',
                    x: useTransform(springX, (value: number) => -(value - windowSize.width / 2) * 0.1),
                    y: useTransform(springY, (value: number) => -(value - windowSize.height / 2) * 0.1),
                }}
            />

            <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
                {/* Glitch text effect */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <span className="text-[#00f0ff] font-mono text-sm md:text-base tracking-widest px-4 py-1 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/5 backdrop-blur-sm">
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
                        <span className="relative inline-block hover:scale-105 transition-transform duration-500 cursor-default">
                            <span className="relative z-10 bg-gradient-to-r from-[#00f0ff] via-[#8b5cf6] to-[#ff006e] bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
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
                        <span className="relative inline-block hover:scale-105 transition-transform duration-500 cursor-default">
                            <span className="relative z-10 bg-gradient-to-r from-[#ff006e] via-[#8b5cf6] to-[#00f0ff] bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(255,0,110,0.3)]">
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
                    className="text-xl md:text-2xl text-[#94a3b8] mt-8 mb-12 font-light tracking-wide max-w-2xl mx-auto"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                    Full Stack Developer <span className="text-[#ff006e] mx-2">•</span> Creative Coder <span className="text-[#00f0ff] mx-2">•</span> Tech Enthusiast
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap gap-6 justify-center mb-24"
                >
                    <a
                        href="#contact"
                        className="group relative rounded-full px-8 py-4 bg-[#0a0e27] border border-[#00f0ff]/50 text-[#00f0ff] font-semibold tracking-wider overflow-hidden transition-all duration-300 hover:text-[#0a0e27] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                    >
                        <span className="relative z-10">GET IN TOUCH</span>
                        <span className="absolute inset-0 bg-[#00f0ff] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </a>

                    <a
                        href="#projects"
                        className="group relative rounded-full px-8 py-4 bg-[#ff006e] text-white font-bold tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,110,0.6)]"
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
                    className="glassmorphism rounded-2xl mx-auto max-w-5xl overflow-hidden py-4 border border-[#1e293b]/50"
                >
                    <div className="flex whitespace-nowrap animate-[ticker_30s_linear_infinite]">
                        {[...techStack, ...techStack].map((tech, index) => (
                            <div
                                key={index}
                                className="inline-flex items-center mx-8"
                            >
                                <span className="text-[#00f0ff] mr-2 text-xl">⚡</span>
                                <span className="text-lg font-semibold text-[#e0e7ff] tracking-wider opacity-80 hover:opacity-100 transition-opacity">
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
                    className="w-6 h-10 border-2 border-[#00f0ff]/30 rounded-full flex justify-center pt-2"
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
};
export default Hero;
