'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

export default function Chatbot() {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "Hello! I'm Shounak's AI assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input, history: messages }),
            });

            if (!response.ok) throw new Error('Failed to fetch');

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting to my brain right now. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!mounted) return null;

    return createPortal(
        <div style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 1000, pointerEvents: 'auto' }}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        style={{
                            position: 'absolute',
                            bottom: '80px',
                            right: 0,
                            width: 'min(380px, 90vw)',
                            height: 'min(520px, 70vh)',
                            background: 'var(--bg-card)',
                            backdropFilter: 'blur(24px)',
                            border: '1px solid var(--border-medium)',
                            borderRadius: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            padding: '20px 24px',
                            background: 'linear-gradient(135deg, rgba(122, 158, 126, 0.1), rgba(193, 122, 90, 0.05))',
                            borderBottom: '1px solid var(--border-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: 'var(--accent-sage)',
                                    boxShadow: '0 0 10px var(--accent-sage)'
                                }} />
                                <span style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 700, fontSize: '1rem' }}>AI Assistant</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '1.2rem' }}
                            >
                                ✕
                            </button>
                        </div>

                        {/* Messages */}
                        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {messages.map((msg, i) => (
                                <div key={i} style={{
                                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '85%',
                                    padding: '12px 16px',
                                    borderRadius: msg.role === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                                    background: msg.role === 'user' ? 'var(--accent-sage)' : 'rgba(255,255,255,0.05)',
                                    color: msg.role === 'user' ? '#fff' : 'var(--text-primary)',
                                    fontSize: '0.9rem',
                                    lineHeight: 1.5,
                                    border: msg.role === 'user' ? 'none' : '1px solid var(--border-subtle)',
                                    wordBreak: 'break-word',
                                }}>
                                    {/* Simple Markdown-like formatting Tool */}
                                    {msg.content.split('\n').map((line, k) => {
                                        if (!line.trim()) return <div key={k} style={{ height: '8px' }} />;

                                        // Simple regex for bolding as suggested: "either use formatting tools or..."
                                        const formattedLine = line.split(/(\*\*.*?\*\*)/).map((part, j) => {
                                            if (part.startsWith('**') && part.endsWith('**')) {
                                                return <strong key={j} style={{ fontWeight: '700', color: msg.role === 'user' ? '#fff' : 'var(--accent-sage-light)' }}>{part.slice(2, -2)}</strong>;
                                            }
                                            return part;
                                        });

                                        return <div key={k} style={{ marginBottom: k < msg.content.split('\n').length - 1 ? '4px' : 0 }}>{formattedLine}</div>;
                                    })}
                                </div>
                            ))}
                            {isLoading && (
                                <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.05)', padding: '12px 16px', borderRadius: '18px 18px 18px 2px', border: '1px solid var(--border-subtle)' }}>
                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        {[0, 1, 2].map(j => (
                                            <motion.div
                                                key={j}
                                                animate={{ y: [0, -4, 0] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: j * 0.1 }}
                                                style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-secondary)' }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} style={{ padding: '16px', borderTop: '1px solid var(--border-subtle)', background: 'rgba(0,0,0,0.1)' }}>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type a message..."
                                    style={{
                                        flex: 1,
                                        background: 'rgba(0,0,0,0.2)',
                                        border: '1px solid var(--border-medium)',
                                        borderRadius: '12px',
                                        padding: '10px 16px',
                                        color: '#fff',
                                        outline: 'none',
                                        fontSize: '0.85rem'
                                    }}
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    style={{
                                        background: 'var(--accent-sage)',
                                        border: 'none',
                                        borderRadius: '12px',
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        opacity: (!input.trim() || isLoading) ? 0.5 : 1
                                    }}
                                >
                                    <span style={{ color: '#fff', fontSize: '1.2rem' }}>→</span>
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FAB */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent-sage), var(--accent-terracotta))',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.6rem',
                    boxShadow: '0 8px 32px rgba(122, 158, 126, 0.4)',
                    color: '#fff',
                    zIndex: 1001
                }}
            >
                {isOpen ? '✕' : '💬'}
            </motion.button>
        </div>,
        document.body
    );
}
