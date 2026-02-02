'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface BentoCardProps {
    title: string;
    description: string;
    icon: string;
    className?: string;
    gradient: string;
}

const BentoCard = ({ title, description, icon, className = '', gradient }: BentoCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className={`glassmorphism relative group overflow-hidden rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] ${className}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Gradient overlay */}
            <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                style={{ background: gradient }}
            />

            {/* Border glow effect */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    boxShadow: `inset 0 0 20px ${gradient.split(' ')[1]}`,
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
                <motion.div
                    className="text-6xl mb-auto"
                    animate={{ rotate: isHovered ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {icon}
                </motion.div>

                <div>
                    <h3 className="text-2xl font-bold mb-2 text-[#e0e7ff]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        {title}
                    </h3>

                    <p className="text-[#94a3b8] leading-relaxed text-sm">
                        {description}
                    </p>
                </div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                    className="absolute top-0 right-0 w-full h-0.5"
                    style={{ background: gradient }}
                />
                <div
                    className="absolute top-0 right-0 w-0.5 h-full"
                    style={{ background: gradient }}
                />
            </div>
        </motion.div>
    );
};

export default function BentoGrid() {
    const cards = [
        {
            title: 'Full Stack Development',
            description: 'Building scalable web applications with modern frameworks and best practices. From concept to deployment.',
            icon: '⚡',
            className: 'md:col-span-2 md:row-span-2',
            gradient: 'linear-gradient(135deg, #00f0ff, #0080ff)',
        },
        {
            title: 'UI/UX Design',
            description: 'Creating beautiful, intuitive interfaces that users love.',
            icon: '🎨',
            className: 'md:col-span-1 md:row-span-1',
            gradient: 'linear-gradient(135deg, #ff006e, #ff4d9e)',
        },
        {
            title: 'Cloud & DevOps',
            description: 'Deploying and managing applications on cloud platforms.',
            icon: '☁️',
            className: 'md:col-span-1 md:row-span-1',
            gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
        },
        {
            title: 'API Development',
            description: 'Designing robust RESTful and GraphQL APIs for seamless integration.',
            icon: '🔌',
            className: 'md:col-span-1 md:row-span-1',
            gradient: 'linear-gradient(135deg, #00ff88, #00cc6a)',
        },
        {
            title: 'Database Design',
            description: 'Architecting efficient database schemas for optimal performance.',
            icon: '💾',
            className: 'md:col-span-1 md:row-span-1',
            gradient: 'linear-gradient(135deg, #ffbe0b, #ffa500)',
        },
        {
            title: 'Performance',
            description: 'Making applications blazing fast with advanced optimization techniques.',
            icon: '🚀',
            className: 'md:col-span-1 md:row-span-1',
            gradient: 'linear-gradient(135deg, #00f0ff, #ff006e)',
        },
    ];

    return (
        <section id="skills" className="relative py-32 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-[#00f0ff] to-[#ff006e] bg-clip-text text-transparent"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        EXPERTISE
                    </h2>
                    <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
                        Crafting digital experiences with cutting-edge technologies
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={card.className}
                        >
                            <BentoCard {...card} className="h-full" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#00f0ff] rounded-full blur-[120px] opacity-10 -z-10" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ff006e] rounded-full blur-[120px] opacity-10 -z-10" />
        </section>
    );
}
