# ── Build stage ────────────────────────────────────────────────
FROM node:20 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# ── Production stage ──────────────────────────────────────────
FROM node:20-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    libsqlite3-0 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY . .

# Ensure /data directory exists for persistent storage
# Use the existing 'node' user (UID 1000) — already in the image
RUN mkdir -p /data && chown node:node /data

USER node

EXPOSE 7860

ENV PORT=7860
ENV DB_PATH=/data/contacts.db

CMD ["node", "server.js"]
