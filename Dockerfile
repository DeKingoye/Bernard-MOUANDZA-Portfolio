# -------- 1) BUILD --------
FROM node:20-alpine AS builder
WORKDIR /app

# Évite de retélécharger les deps à chaque build
COPY package*.json ./
RUN npm ci

# Copie le code et build Next (standalone)
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# -------- 2) RUNTIME --------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Pour que Next écoute correctement dans un conteneur / derrière LB
ENV HOSTNAME=0.0.0.0
ENV PORT=80
ENV NEXT_TELEMETRY_DISABLED=1

# Copie le résultat standalone : inclut server.js + node_modules nécessaires
COPY --from=builder /app/.next/standalone ./
# Assets publics & static
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Si tu as des variables d'env runtime (ex: NEXT_PUBLIC_*), tu les passeras via --container-env sur GCP

EXPOSE 80
CMD ["node", "server.js"]
