'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-[#1e293b] bg-[#0a0e27] py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <motion.h3
                            className="text-3xl font-black mb-4 bg-gradient-to-r from-[#00f0ff] to-[#ff006e] bg-clip-text text-transparent"
                            style={{ fontFamily: 'Orbitron, sans-serif' }}
                            whileHover={{ scale: 1.05 }}
                        >
                            SHOUNAK CHATTERJEE
                        </motion.h3>
                        <p className="text-[#94a3b8] leading-relaxed">
                            Full Stack Developer crafting digital experiences with passion and precision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[#00f0ff] font-bold mb-4 tracking-wider">QUICK LINKS</h4>
                        <ul className="space-y-2">
                            {['Home', 'Skills', 'Projects', 'Contact'].map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-[#94a3b8] hover:text-[#00f0ff] transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="mr-2 text-[#ff006e] opacity-0 group-hover:opacity-100 transition-opacity duration-300">▸</span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-[#ff006e] font-bold mb-4 tracking-wider">CONNECT</h4>
                        <div className="flex space-x-4">
                            {[
                                { name: 'GitHub', url: 'https://github.com/Shounak-programmer' },
                                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shounak-chatterjee-45480a258/' },
                                { name: 'Twitter', url: 'https://x.com/user_shounak' },
                                { name: 'Email', url: 'mailto:shhounakchatterjee@gmail.com' }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 border border-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:text-[#00f0ff] hover:border-[#00f0ff] transition-all duration-300"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {social.name[0]}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-[#1e293b] flex flex-col md:flex-row justify-between items-center">
                    <p className="text-[#94a3b8] text-sm mb-4 md:mb-0">
                        © {currentYear} Shounak Chatterjee. All rights reserved.
                    </p>
                    <p className="text-[#94a3b8] text-sm font-mono">
                        {'<'} Built with Next.js, Tailwind & Framer Motion {' />'}
                    </p>
                </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-50" />
        </footer>
    );
}
