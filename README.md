# Zahra Kleermakerij Website

Een moderne, professionele website voor Zahra Kleermakerij in Delft, gebouwd met Next.js, React, Tailwind CSS en shadcn/ui.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)

## ✨ Features

- **🎨 Modern Design**: Schone, moderne UI met gradient effecten en smooth animaties
- **📱 Fully Responsive**: Volledig responsive design voor alle apparaten (mobile-first)
- **⚡ Geoptimaliseerd**: Gebouwd met Next.js 14 voor optimale prestaties
- **♿ Toegankelijk**: Volgens WCAG best practices met ARIA labels
- **🔍 SEO-vriendelijk**: Volledig geoptimaliseerd voor zoekmachines
- **🍔 Mobile Menu**: Hamburger menu met smooth animaties
- **⬆️ Scroll to Top**: Floating button voor betere navigatie
- **💼 Professioneel**: Meerdere secties (Hero, Diensten, Why Choose Us, Reviews, Contact)
- **🎭 Smooth Scrolling**: Automatische smooth scroll voor anchor links
- **🎯 Call-to-Actions**: Strategisch geplaatste CTA buttons

## 🛠️ Tech Stack

### Core
- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4

### UI & Components
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge, class-variance-authority

### Development
- **Package Manager**: npm
- **Linting**: ESLint (Next.js config)
- **Type Checking**: TypeScript strict mode

## 📦 Installatie

```bash
# Clone de repository
git clone <repository-url>
cd "Zahra kleermakerij"

# Installeer dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:3000 (of 3001/3002 als 3000 in gebruik is)
```

## 🚀 Scripts

```bash
# Development server met hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## 📁 Project Structuur

```
zahra-kleermakerij/
├── app/
│   ├── favicon.ico          # Website favicon
│   ├── globals.css          # Global styles en animaties
│   ├── layout.tsx           # Root layout met metadata
│   └── page.tsx             # Homepage component
├── components/
│   ├── ui/
│   │   ├── button.tsx       # Button component (shadcn/ui)
│   │   └── card.tsx         # Card component (shadcn/ui)
│   ├── mobile-menu.tsx      # Mobile hamburger menu
│   └── scroll-to-top.tsx    # Scroll to top button
├── lib/
│   └── utils.ts             # Utility functies (cn helper)
├── public/                  # Static assets
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── README.md
├── DEPLOYMENT.md            # Deployment guide
└── FEATURES.md              # Gedetailleerde features lijst
```

## 🌐 Secties

### 1. **Header**
- Sticky navigation met blur effect
- Logo met gradient
- Desktop navigatie
- Mobile hamburger menu
- CTA button (Bel ons)

### 2. **Hero Sectie**
- Aandachttrekkende heading met gradient accent
- Email badge
- Twee CTA buttons
- Hero afbeelding met overlay effect

### 3. **Diensten**
- 4 service cards met afbeeldingen
  - Maatkleding
  - Kledingreparatie
  - Gordijnen op Maat
  - Stomerij
- Hover effecten en transitions
- Icons per dienst

### 4. **Why Choose Us**
- 3 USPs (Unique Selling Points)
  - Vakmanschap
  - Snelle Service
  - Persoonlijke Aandacht
- Icon-based presentatie met gradients

### 5. **Reviews**
- 4 klantbeoordelingen
- 5-ster rating systeem
- Card-based responsive layout

### 6. **Contact**
- Dedicated contact sectie met gradient achtergrond
- Telefoon, Email, Adres
- Prominente CTA

### 7. **Footer**
- Dark theme voor contrast
- 4 kolommen:
  - Bedrijfsinfo
  - Contactgegevens
  - Navigatie links
  - Openingstijden & Social media
- Copyright notice

## 🎨 Design System

### Kleuren
- **Primary**: Cyan (500) to Blue (500) gradient
- **Background**: White to Gray (50)
- **Text**: Gray scale (900, 600, 400)
- **Accent**: Gradient overlays

### Typografie
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, tight tracking
- **Body**: Regular, relaxed leading

### Animaties
- Fade-in effect
- Slide-up transitions
- Scale-in voor cards
- Smooth scroll gedrag

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📱 Contact

- **Telefoon**: [015 - 785 1161](tel:0157851161)
- **Email**: [zahra22@live.nl](mailto:zahra22@live.nl)
- **Adres**: Gasthuislaan 52, 2611RB - Delft
- **Openingstijden**: 
  - Ma - Vr: 09:00 - 18:00
  - Za: 10:00 - 17:00
  - Zo: Gesloten

## 🚀 Deployment

Zie [DEPLOYMENT.md](DEPLOYMENT.md) voor gedetailleerde deployment instructies voor:
- Vercel (aanbevolen)
- Netlify
- Docker
- VPS (Ubuntu/Debian)
- Nginx configuratie

## 📊 Performance

Verwachte Lighthouse scores:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 100
- **SEO**: 100

## 🔄 Git Workflow

```bash
# Check status
git status

# Stage changes
git add .

# Commit
git commit -m "Your message"

# Push to remote
git push origin main
```

## 📚 Documentatie

- **[FEATURES.md](FEATURES.md)**: Gedetailleerde lijst van alle features en verbeteringen
- **[DEPLOYMENT.md](DEPLOYMENT.md)**: Complete deployment guide
- **[Next.js Docs](https://nextjs.org/docs)**: Next.js documentatie
- **[Tailwind CSS](https://tailwindcss.com/docs)**: Tailwind documentatie
- **[shadcn/ui](https://ui.shadcn.com)**: Component documentatie

## 🆚 Verbeteringen t.o.v. Origineel

| Aspect | Origineel | Nieuw |
|--------|-----------|-------|
| Framework | Statisch HTML | Next.js 14 + React |
| Styling | Basis CSS | Tailwind CSS + shadcn/ui |
| Responsive | Beperkt | Volledig responsive |
| Animaties | Geen | Smooth animations |
| Mobile Menu | Geen | Hamburger menu |
| SEO | Basis | Volledig geoptimaliseerd |
| Performance | Standaard | Next.js optimalisaties |
| Onderhoud | Moeilijk | Component-based |

## 🤝 Contributing

Suggesties voor verbeteringen zijn welkom! Neem contact op via email of telefoon.

## 📄 License

© 2026 Zahra Kleermakerij. Alle rechten voorbehouden.

---

**Gemaakt met ❤️ voor Zahra Kleermakerij**
