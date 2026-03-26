# ==================== Etapa 1: Build ====================
FROM node:20-alpine AS builder

WORKDIR /app

# Copia package.json e instala dependências
COPY package*.json ./
RUN npm ci --only=production=false

# Copia o resto do código e faz o build
COPY . .
RUN npm run build

# ==================== Etapa 2: Produção (Nginx) ====================
FROM nginx:alpine

# Remove arquivos padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos gerados pelo Vite (dist)
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuração do Nginx para SPA (importante para React/Vite/Vue)
COPY <<'EOF' /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # Serve arquivos estáticos com cache bom
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2?|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Todas as rotas vão para index.html (SPA routing)
    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]