# Deployment Guide - Zahra Kleermakerij Website

## 🚀 Deployment Opties

### 1. Vercel (Aanbevolen)

Vercel is de maker van Next.js en biedt de beste integratie:

```bash
# Installeer Vercel CLI
npm i -g vercel

# Login bij Vercel
vercel login

# Deploy naar productie
vercel --prod
```

Of gebruik de Vercel Dashboard:
1. Ga naar [vercel.com](https://vercel.com)
2. Importeer je Git repository
3. Vercel detecteert automatisch Next.js
4. Klik op "Deploy"

### 2. Netlify

```bash
# Installeer Netlify CLI
npm install -g netlify-cli

# Login bij Netlify
netlify login

# Deploy
netlify deploy --prod
```

Build settings voor Netlify:
- Build command: `npm run build`
- Publish directory: `.next`

### 3. Docker

Maak een `Dockerfile`:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

Build en run:
```bash
docker build -t zahra-kleermakerij .
docker run -p 3000:3000 zahra-kleermakerij
```

### 4. VPS (Ubuntu/Debian)

```bash
# Update systeem
sudo apt update && sudo apt upgrade -y

# Installeer Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Installeer PM2
sudo npm install -g pm2

# Clone repository
git clone <jouw-repo-url>
cd zahra-kleermakerij

# Installeer dependencies
npm install

# Build
npm run build

# Start met PM2
pm2 start npm --name "zahra-website" -- start
pm2 save
pm2 startup
```

### 5. Nginx als Reverse Proxy

```nginx
server {
    listen 80;
    server_name jouwdomein.nl;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔒 SSL Certificaat

Gebruik Let's Encrypt voor gratis SSL:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d jouwdomein.nl
```

## 📊 Environment Variables

Maak een `.env.local` bestand voor productie:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://jouwdomein.nl
```

## 🔍 SEO Checklist

- [ ] Voeg Google Analytics toe
- [ ] Submit sitemap naar Google Search Console
- [ ] Voeg structured data toe (Schema.org)
- [ ] Test met Lighthouse
- [ ] Optimaliseer afbeeldingen

## 📈 Performance Optimalisatie

De website is al geoptimaliseerd met:
- Next.js 14 App Router
- Automatische code splitting
- Image optimization
- CSS minification
- Gzip compression

## 🐛 Troubleshooting

### Port al in gebruik
```bash
# Vind proces op port 3000
lsof -ti:3000

# Stop proces
kill -9 <PID>
```

### Build errors
```bash
# Clear cache en rebuild
rm -rf .next node_modules
npm install
npm run build
```

## 📱 Analytics Integratie

### Google Analytics 4

In `app/layout.tsx`:

```typescript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## 🎯 Custom Domain

### Bij Vercel:
1. Ga naar project settings
2. Domains → Add domain
3. Voeg DNS records toe bij je provider

### DNS Records:
```
Type: A
Name: @
Value: [Vercel IP]

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 🔄 Continuous Deployment

Met GitHub/GitLab integratie:
1. Push naar main branch
2. Automatische deployment
3. Preview deployments voor pull requests

## 📞 Support

Voor vragen over deployment:
- Email: zahra22@live.nl
- Tel: 015 - 785 1161
