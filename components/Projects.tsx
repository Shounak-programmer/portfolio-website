'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Project {
    title: string;
    description: string;
    tech: string[];
    gradient: string;
    link?: string;
}

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const projects: Project[] = [
        {
            title: 'AI-Powered Dashboard',
            description: 'Real-time analytics dashboard with machine learning predictions and data visualization.',
            tech: ['React', 'Python', 'TensorFlow', 'D3.js'],
            gradient: 'linear-gradient(135deg, #00f0ff, #0080ff)',
            link: '#',
        },
        {
            title: 'E-Commerce Platform',
            description: 'Full-stack marketplace with payment integration, real-time inventory, and admin panel.',
            tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
            gradient: 'linear-gradient(135deg, #ff006e, #ff4d9e)',
            link: '#',
        },
        {
            title: 'Social Media App',
            description: 'Mobile-first social platform with real-time messaging and content sharing.',
            tech: ['React Native', 'Firebase', 'WebSockets'],
            gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
            link: '#',
        },
        {
            title: 'DevOps Pipeline',
            description: 'Automated CI/CD pipeline with containerization and cloud deployment.',
            tech: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
            gradient: 'linear-gradient(135deg, #00ff88, #00cc6a)',
            link: '#',
        },
        {
            title: 'Blockchain Wallet',
            description: 'Secure cryptocurrency wallet with multi-chain support and DeFi integration.',
            tech: ['Web3.js', 'Solidity', 'React', 'Ethers.js'],
            gradient: 'linear-gradient(135deg, #ffbe0b, #ffa500)',
            link: '#',
        },
        {
            title: 'IoT Dashboard',
            description: 'Real-time monitoring system for IoT devices with data analytics.',
            tech: ['MQTT', 'Node.js', 'InfluxDB', 'Grafana'],
            gradient: 'linear-gradient(135deg, #00f0ff, #ff006e)',
            link: '#',
        },
    ];

    return (
        <section id="projects" className="relative py-32 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-[#8b5cf6] to-[#00f0ff] bg-clip-text text-transparent"
                        style={{ fontFamily: 'Orbitron, sans-serif' }}>
                        FEATURED PROJECTS
                    </h2>
                    <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
                        A showcase of my recent work and side projects
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                        >
                            <motion.div
                                className="relative h-full rounded-3xl border border-[#1e293b] bg-[#0f1429] p-8 overflow-hidden cursor-pointer"
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Gradient overlay */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                    style={{ background: project.gradient }}
                                />

                                {/* Animated border */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        boxShadow: `inset 0 0 30px ${project.gradient.split(' ')[1]}40`,
                                    }}
                                />

                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col">
                                    {/* Project number */}
                                    <div className="text-[#00f0ff] font-mono text-sm mb-4">
                                        {'<'}{String(index + 1).padStart(2, '0')}{' />'}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold mb-3 text-[#e0e7ff] group-hover:text-[#00f0ff] transition-colors duration-300"
                                        style={{ fontFamily: 'Orbitron, sans-serif' }}>
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#94a3b8] mb-6 flex-grow leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1a1f3a] text-[#00f0ff] border border-[#1e293b] tracking-wider"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* View project link */}
                                    <motion.a
                                        href={project.link}
                                        className="inline-flex items-center text-[#ff006e] font-semibold group-hover:text-[#00f0ff] transition-colors duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        VIEW PROJECT
                                        <motion.span
                                            className="ml-2"
                                            animate={{ x: hoveredIndex === index ? [0, 5, 0] : 0 }}
                                            transition={{ duration: 0.6, repeat: hoveredIndex === index ? Infinity : 0 }}
                                        >
                                            →
                                        </motion.span>
                                    </motion.a>
                                </div>

                                {/* Corner accent */}
                                <div className="absolute bottom-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div
                                        className="absolute bottom-0 left-0 w-full h-0.5"
                                        style={{ background: project.gradient }}
                                    />
                                    <div
                                        className="absolute bottom-0 left-0 w-0.5 h-full"
                                        style={{ background: project.gradient }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* View all projects button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <motion.a
                        href="#"
                        className="inline-block rounded-full px-8 py-4 border-2 border-[#8b5cf6] text-[#8b5cf6] font-semibold tracking-wider hover:bg-[#8b5cf6] hover:text-[#0a0e27] transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        VIEW ALL PROJECTS
                    </motion.a>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/3 right-0 w-64 h-64 bg-[#8b5cf6] rounded-full blur-[120px] opacity-10 -z-10" />
            <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-[#00f0ff] rounded-full blur-[120px] opacity-10 -z-10" />
        </section>
    );
}
