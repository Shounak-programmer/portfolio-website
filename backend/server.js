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
