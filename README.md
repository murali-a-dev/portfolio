# Murali — Portfolio

**Full-Stack Web Developer Portfolio**
Built with React 18 + Vite + Tailwind CSS v4

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
murali-portfolio/
├── public/
│   ├── favicon.svg          # M monogram favicon
│   └── Murali_Resume.pdf    # ← Add your resume PDF here
│
├── src/
│   ├── assets/              # Static images, icons
│   │
│   ├── components/
│   │   ├── sections/        # Full page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   │
│   │   └── ui/              # Reusable UI primitives
│   │       ├── Navbar.jsx
│   │       ├── LoadingScreen.jsx
│   │       ├── Reveal.jsx
│   │       ├── SectionHeader.jsx
│   │       └── Footer.jsx
│   │
│   ├── hooks/
│   │   └── useScrollReveal.js
│   │
│   ├── data/
│   │   └── portfolioData.js  # All content — edit here
│   │
│   ├── index.css             # Tailwind v4 theme + global styles
│   ├── main.jsx              # React entry point
│   └── App.jsx               # Root component
│
├── index.html                # SEO meta tags, fonts, EmailJS
├── vite.config.js
├── vercel.json               # Vercel SPA routing
├── package.json
└── .gitignore
```

---

## ⚙️ EmailJS Setup (Contact Form)

1. Go to [https://emailjs.com](https://emailjs.com) and create a free account
2. Create a **Service** (Gmail) → copy **Service ID**
3. Create an **Email Template** → copy **Template ID**
4. Go to Account → copy **Public Key**
5. Open `src/components/sections/Contact.jsx`
6. Replace these 3 values:

```js
const SERVICE_ID  = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
// Public key is already set in index.html
```

---

## 📄 Resume

Place your resume PDF at:
```
public/Murali_Resume.pdf
```
The download button in the Hero section links to this file automatically.

---

## 🌐 Deploy to Vercel

```bash
# Option 1 — Vercel CLI
npm i -g vercel
vercel

# Option 2 — GitHub
# Push to GitHub → Import repo on vercel.com → Deploy (zero config)
```

---

## 🎨 Customization

All content lives in one file:
```
src/data/portfolioData.js
```
Edit your name, bio, skills, experience, projects and contact info there.

---

Built by **Murali A** · React + Tailwind CSS v4
