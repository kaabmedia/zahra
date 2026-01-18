# 🚀 Quick Start Guide

## Welkom bij de Zahra Kleermakerij Website!

Deze guide helpt je om binnen 5 minuten de website draaiend te krijgen.

## ⚡ Snelstart (3 stappen)

### 1️⃣ Installeer Dependencies

```bash
npm install
```

⏱️ Dit duurt ongeveer 30 seconden

### 2️⃣ Start Development Server

```bash
npm run dev
```

✅ Server draait op: `http://localhost:3000`

### 3️⃣ Open in Browser

Open je browser en ga naar:
- **http://localhost:3000**

🎉 **Klaar! De website draait nu lokaal**

## 📝 Belangrijke Commando's

```bash
# Development server starten
npm run dev

# Production build maken
npm run build

# Production server starten (na build)
npm start

# Code linting
npm run lint
```

## 🔧 Veelvoorkomende Problemen

### ❌ Port 3000 al in gebruik?

De server kiest automatisch een andere port (3001, 3002, etc.)

Of stop de andere server:
```bash
lsof -ti:3000 | xargs kill -9
```

### ❌ Dependencies installatie mislukt?

```bash
# Verwijder node_modules en probeer opnieuw
rm -rf node_modules package-lock.json
npm install
```

### ❌ Build errors?

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## 📂 Bestanden die je waarschijnlijk wilt aanpassen

### Inhoud wijzigen
- **`app/page.tsx`** - Alle content van de homepage
  - Teksten
  - Diensten
  - Reviews
  - Contactgegevens

### Styling aanpassen
- **`app/globals.css`** - Globale styles en animaties
- **`tailwind.config.ts`** - Tailwind configuratie (kleuren, etc.)

### Components
- **`components/mobile-menu.tsx`** - Mobile menu
- **`components/scroll-to-top.tsx`** - Scroll to top button
- **`components/ui/button.tsx`** - Button component
- **`components/ui/card.tsx`** - Card component

### Meta informatie
- **`app/layout.tsx`** - Website metadata (title, description, etc.)

## 🎨 Kleuren Aanpassen

In `tailwind.config.ts`:

```typescript
// Verander de primary color gradient
colors: {
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
}
```

In `app/globals.css`:

```css
:root {
  --primary: 193 100% 50%; /* Cyan - verander deze waarde */
}
```

## 📱 Contactgegevens Wijzigen

In `app/page.tsx`, zoek naar:

```typescript
// Telefoon
015 - 785 148 40

// Email
kleermakerij.zahra@hotmail.com

// Adres
Oosthaven 52, 2611 RB Delft
```

Vervang deze waarden met de nieuwe gegevens.

## 🖼️ Afbeeldingen Vervangen

De website gebruikt nu placeholder afbeeldingen van Unsplash. 

Om eigen afbeeldingen te gebruiken:

1. Plaats afbeeldingen in de `public/` folder
2. Update de src in `app/page.tsx`:

```typescript
// Van:
src="https://images.unsplash.com/photo-xxx"

// Naar:
src="/jouw-afbeelding.jpg"
```

## 🌐 Deployment (5 minuten naar live!)

### Optie 1: Vercel (Makkelijkst)

1. Ga naar [vercel.com](https://vercel.com)
2. Sign up / Login
3. "Import Git Repository"
4. Selecteer deze repository
5. Klik "Deploy"

✅ **Live in < 2 minuten!**

### Optie 2: Netlify

1. Ga naar [netlify.com](https://netlify.com)
2. "Import from Git"
3. Selecteer repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy

## 📊 Website Testen

Open de browser en test:

- ✅ Homepage laadt correct
- ✅ Mobile menu werkt (verklein browser)
- ✅ Smooth scrolling naar secties
- ✅ Scroll-to-top button verschijnt bij scrollen
- ✅ Alle links werken
- ✅ Telefoon link opent telefoon app
- ✅ Email link opent email client
- ✅ Hover effecten werken op cards

## 🆘 Hulp Nodig?

### Documentatie
- **README.md** - Algemene informatie
- **FEATURES.md** - Alle features en verbeteringen
- **DEPLOYMENT.md** - Gedetailleerde deployment guide

### Contact
- **Email**: kleermakerij.zahra@hotmail.com
- **Telefoon**: 015 - 785 148 40

### Online Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

## ✨ Tips

### Hot Reload
Wijzigingen in code worden automatisch zichtbaar in de browser (geen refresh nodig!)

### TypeScript Errors
TypeScript helpt je fouten te vinden voordat je ze maakt. Luister naar de rode squiggly lines!

### Tailwind IntelliSense
Installeer de Tailwind CSS IntelliSense extension in je editor voor autocomplete.

### Git Best Practices
```bash
# Check wat je hebt gewijzigd
git status

# Stage je wijzigingen
git add .

# Commit met duidelijke message
git commit -m "Update: contactgegevens aangepast"

# Push naar remote
git push
```

## 🎯 Volgende Stappen

1. ✅ Website draait lokaal
2. 📝 Pas content aan naar wens
3. 🎨 Verander kleuren en styling (optioneel)
4. 🖼️ Vervang afbeeldingen met eigen foto's
5. 🚀 Deploy naar Vercel/Netlify
6. 🌐 Koppel custom domain
7. 📊 Voeg analytics toe (Google Analytics)

## 🎉 Succes!

Je hebt nu een moderne, professionele website voor Zahra Kleermakerij!

**Veel plezier met de website! 🎊**

---

*Voor meer gedetailleerde informatie, zie de andere documentatie bestanden.*
