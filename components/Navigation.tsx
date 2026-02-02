'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], [0, 1]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'HOME', href: '#' },
        { name: 'SKILLS', href: '#skills' },
        { name: 'PROJECTS', href: '#projects' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed z-50 left-1/2 transform -translate-x-1/2 bottom-6 md:bottom-auto md:top-8 w-[90%] md:w-auto"
        >
            <div className="glassmorphism rounded-full px-6 py-4 md:py-3 flex items-center justify-between gap-8 shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300">
                {/* Logo */}
                <motion.a
                    href="#"
                    className="text-2xl font-black tracking-wider flex-shrink-0"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                    whileHover={{ scale: 1.05 }}
                >
                    <span className="bg-gradient-to-r from-[#00f0ff] to-[#ff006e] bg-clip-text text-transparent">
                        SC
                    </span>
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            className="relative text-[#e0e7ff] text-sm font-semibold tracking-wider hover:text-[#00f0ff] transition-colors duration-300 group"
                            whileHover={{ scale: 1.05 }}
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00f0ff] to-[#ff006e] group-hover:w-full transition-all duration-300" />
                        </motion.a>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.a
                    href="#contact"
                    className="hidden md:block rounded-full px-5 py-2 bg-[#00f0ff] text-[#0a0e27] text-sm font-bold tracking-wider hover:bg-[#ff006e] hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.5)] hover:shadow-[0_0_20px_rgba(255,0,110,0.6)]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    HIRE ME
                </motion.a>

                {/* Mobile Menu Button - maintained for mobile responsiveness */}
                <motion.button
                    className="md:hidden flex flex-col space-y-1.5 ml-auto"
                    whileTap={{ scale: 0.9 }}
                >
                    <span className="block w-6 h-0.5 bg-[#00f0ff]" />
                    <span className="block w-6 h-0.5 bg-[#ff006e]" />
                    <span className="block w-6 h-0.5 bg-[#8b5cf6]" />
                </motion.button>
            </div>
        </motion.nav>
    );
}
