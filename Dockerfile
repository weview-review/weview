# Base stage
FROM node:20-alpine AS base

# Install necessary dependencies
RUN npm install -g pnpm
RUN apk add --no-cache libc6-compat


# Set working directory
WORKDIR /app

# Install dependencies only when needed
FROM base AS deps
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Run Prisma generate
COPY prisma ./prisma
RUN npx prisma generate

# Development stage
FROM base AS dev
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Builder stage
FROM dev AS builder
RUN yarn build

# Production stage
FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./.next/standalone
COPY --from=builder /app/.next/static ./.next/static
USER nextjs
CMD ["node", "server.js"]
