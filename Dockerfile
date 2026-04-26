# Stage 1: Build frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Install backend deps
FROM node:20-alpine AS backend-builder
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install --omit=dev

# Stage 3: Runtime — nginx + node managed by supervisord
FROM node:20-alpine
RUN apk add --no-cache nginx supervisor && \
    mkdir -p /run/nginx /var/log/supervisor

# Frontend static files
COPY --from=frontend-builder /app/dist /usr/share/nginx/html

# Nginx config (alpine uses /etc/nginx/http.d/)
COPY nginx.conf /etc/nginx/http.d/default.conf

# Backend
WORKDIR /app/server
COPY --from=backend-builder /app/server/node_modules ./node_modules
COPY server/ ./

# Supervisord config
COPY supervisord.conf /etc/supervisord.conf

EXPOSE 8080
CMD ["supervisord", "-c", "/etc/supervisord.conf"]
