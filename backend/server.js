require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 4000;

// ─── Database Setup ─────────────────────────────────────────────────────────
const dbPath = process.env.DB_PATH || path.join(__dirname, 'contacts.db');
const db = new Database(dbPath);

db.exec(`
    CREATE TABLE IF NOT EXISTS contacts (
        id          INTEGER PRIMARY KEY AUTOINCREMENT,
        name        TEXT    NOT NULL,
        email       TEXT    NOT NULL,
        message     TEXT    NOT NULL,
        ip          TEXT,
        user_agent  TEXT,
        created_at  DATETIME DEFAULT (datetime('now', 'localtime')),
        is_read     INTEGER  DEFAULT 0
    );
`);

// Prepared statements
const insertContact = db.prepare(
    `INSERT INTO contacts (name, email, message, ip, user_agent) VALUES (?, ?, ?, ?, ?)`
);
const getAllContacts = db.prepare(
    `SELECT * FROM contacts ORDER BY created_at DESC`
);
const markRead = db.prepare(
    `UPDATE contacts SET is_read = 1 WHERE id = ?`
);
const deleteContact = db.prepare(
    `DELETE FROM contacts WHERE id = ?`
);
const getStats = db.prepare(`
    SELECT
        COUNT(*) as total,
        SUM(CASE WHEN is_read = 0 THEN 1 ELSE 0 END) as unread,
        MAX(created_at) as latest
    FROM contacts
`);

// ─── Middleware ──────────────────────────────────────────────────────────────
app.use(cors({
    origin: process.env.ALLOWED_ORIGIN || '*',
    methods: ['GET', 'POST', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'admin')));

// ─── Auth Middleware ────────────────────────────────────────────────────────
function requireAdminToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>
    if (!token || token !== process.env.ADMIN_TOKEN) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
}

// ─── Public: Submit Contact Form ─────────────────────────────────────────────
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    if (name.length > 100 || email.length > 200 || message.length > 5000) {
        return res.status(400).json({ error: 'Input too long.' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'Invalid email address.' });
    }

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    const userAgent = req.headers['user-agent'] || 'unknown';

    try {
        const result = insertContact.run(name.trim(), email.trim(), message.trim(), ip, userAgent);
        res.status(201).json({ success: true, id: result.lastInsertRowid });
    } catch (err) {
        console.error('DB insert error:', err);
        res.status(500).json({ error: 'Failed to save message.' });
    }
});

// ─── Admin: Login (exchange credentials for token) ────────────────────────
app.post('/api/admin/login', (req, res) => {
    const { username, password } = req.body;
    if (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
    ) {
        return res.json({ token: process.env.ADMIN_TOKEN });
    }
    res.status(401).json({ error: 'Invalid credentials' });
});

// ─── Admin: Get All Contacts ───────────────────────────────────────────────
app.get('/api/admin/contacts', requireAdminToken, (req, res) => {
    try {
        const contacts = getAllContacts.all();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch contacts.' });
    }
});

// ─── Admin: Get Stats ─────────────────────────────────────────────────────
app.get('/api/admin/stats', requireAdminToken, (req, res) => {
    try {
        const stats = getStats.get();
        res.json(stats);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch stats.' });
    }
});

// ─── Admin: Mark as Read ─────────────────────────────────────────────────
app.patch('/api/admin/contacts/:id/read', requireAdminToken, (req, res) => {
    const id = parseInt(req.params.id);
    markRead.run(id);
    res.json({ success: true });
});

const { HfInference } = require('@huggingface/inference');

// ─── AI Chatbot: Hugging Face Proxy ──────────────────────────────────────────
app.post('/api/chat', async (req, res) => {
    const { message, history } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required.' });
    }

    const HUGGINGFACE_TOKEN = process.env.HUGGINGFACE_TOKEN;
    const MODEL_ID = process.env.HUGGINGFACE_MODEL_ID || "Qwen/Qwen2.5-Coder-32B-Instruct"; // More capable coder model

    if (!HUGGINGFACE_TOKEN) {
        return res.json({ reply: "I'm currently in 'offline mode' (HuggingFace token missing). Shounak is a Full Stack Developer specializing in React, Next.js, and Node.js. How can he help you?" });
    }

    const hf = new HfInference(HUGGINGFACE_TOKEN);

    // System prompt to give the AI context about Shounak
    const systemPrompt = `You are a helpful and knowledgeable AI assistant for Shounak Chatterjee's portfolio website. 
    About Shounak: A Full Stack Developer from India, currently a B.Tech CSE student at Adamas University, Kolkata.
    
    Technical Skills:
    - Frontend: React.js, Next.js (App Router), JavaScript (ES6+), Tailwind CSS, Framer Motion (animations), CSS3 (specializing in natural/earthy themes).
    - Backend: Node.js, Express.js, Python, Java, C, C++.
    - Database/Infrastructure: SQLite (better-sqlite3), Firebase (Real-time sync), MongoDB, PostgreSQL, Git, GitHub.
    - Specialized: Web Audio API (spatial audio), Google Maps API integration, Kalman filters for location smoothing.

    Key Projects:
    1. IDP (Intelligent Dispatch & Pathfinding): A sub-second traffic management system to reduce ambulance delays. It uses real-time Firebase sync, spatial audio radar alerts for drivers, and auto-clearing traffic signals via a navigation app.
    2. Personal Portfolio: A high-performance personal site built with Next.js, featuring a custom "Natural Design System" with earthy tones and glassmorphism.

    Role: You answer questions about Shounak's work, experience, and fee structure (2,000 to 50,000 INR for contract work).
    Tone: Professional yet approachable, concise, and enthusiastic about tech. 
    Crucial: If asked about personal life details not mentioned here, politely decline. Stay in character as his portfolio assistant.`;

    try {
        // Map history to the format expected by chatCompletion
        const messages = [
            { role: "system", content: systemPrompt },
            ...history.slice(-4).map(m => ({
                role: m.role === 'user' ? 'user' : 'assistant',
                content: m.content
            })),
            { role: "user", content: message }
        ];

        const response = await hf.chatCompletion({
            model: MODEL_ID,
            messages: messages,
            max_tokens: 400,
            temperature: 0.7,
        });

        const reply = response.choices[0].message.content;

        if (!reply) {
            return res.json({ reply: "I'm here, but my processing felt a bit empty. Could you ask me again?" });
        }

        res.json({ reply });
    } catch (err) {
        console.error('Hugging Face SDK error:', err);

        // Handle "Model is loading" or high traffic cases gracefully
        if (err.message && (err.message.includes("loading") || err.message.includes("503") || err.message.includes("504"))) {
            return res.json({
                reply: `My AI "brain" is currently waking up or under high load. It usually takes 20-30 seconds. Please try asking again in a moment!`
            });
        }

        res.status(500).json({ error: 'AI failed to respond.' });
    }
});

// ─── Admin: Delete Contact ───────────────────────────────────────────────
app.delete('/api/admin/contacts/:id', requireAdminToken, (req, res) => {
    const id = parseInt(req.params.id);
    deleteContact.run(id);
    res.json({ success: true });
});

// ─── Catch-all: serve admin dashboard ────────────────────────────────────
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin', 'index.html'));
});

// ─── Start ───────────────────────────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`\n  🌿 Portfolio Backend running on http://localhost:${PORT}`);
    console.log(`  🔐 Admin dashboard: http://localhost:${PORT}/admin\n`);
});
