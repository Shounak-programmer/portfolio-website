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

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY . .

# Fly.io injects PORT as 8080 by default
EXPOSE 8080

CMD ["node", "server.js"]
