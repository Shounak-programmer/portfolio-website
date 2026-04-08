# ── Build stage ────────────────────────────────────────────────
FROM node:20-slim AS builder

WORKDIR /app

# Install dependencies (better-sqlite3 needs build tools)
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# ── Production stage ──────────────────────────────────────────
FROM node:20-slim

# better-sqlite3 needs these native libs at runtime
RUN apt-get update && apt-get install -y --no-install-recommends \
    libsqlite3-0 \
    && rm -rf /var/lib/apt/lists/*

# Create a non-root user (required by HuggingFace Spaces)
RUN useradd -m -u 1000 appuser

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY . .

# Ensure /data directory exists for persistent storage
RUN mkdir -p /data && chown appuser:appuser /data

USER appuser

# HuggingFace Spaces expects port 7860
EXPOSE 7860

ENV PORT=7860
ENV DB_PATH=/data/contacts.db

CMD ["node", "server.js"]
