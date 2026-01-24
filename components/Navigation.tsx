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
            style={{ opacity }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0e27]/90 backdrop-blur-lg border-b border-[#1e293b]' : ''
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="text-2xl font-black tracking-wider"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="bg-gradient-to-r from-[#00f0ff] to-[#ff006e] bg-clip-text text-transparent">
                            SC
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                className="relative text-[#e0e7ff] font-semibold tracking-wider hover:text-[#00f0ff] transition-colors duration-300 group"
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
                        className="hidden md:block rounded-full px-6 py-2 border-2 border-[#00f0ff] text-[#00f0ff] font-semibold tracking-wider hover:bg-[#00f0ff] hover:text-[#0a0e27] transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        HIRE ME
                    </motion.a>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden flex flex-col space-y-1.5"
                        whileTap={{ scale: 0.9 }}
                    >
                        <span className="block w-6 h-0.5 bg-[#00f0ff]" />
                        <span className="block w-6 h-0.5 bg-[#ff006e]" />
                        <span className="block w-6 h-0.5 bg-[#8b5cf6]" />
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
}
