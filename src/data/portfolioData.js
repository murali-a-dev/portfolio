/**
 * portfolioData.js
 * ─────────────────────────────────────────────────────────────
 * Single source of truth for ALL portfolio content and metadata.
 * Clean, structured, and modular data definitions.
 */

/* ── Personal Details & Metadata ────────────────────────────── */
export const PERSONAL = {
  name: "Murali A",
  shortName: "Murali",
  role: "Full-Stack Web Developer",
  location: "Erode, Tamil Nadu, India",
  email: "murali.dev6872@gmail.com",
  phone: "+91 6383217328",
  portfolio: "https://my-self-murali.vercel.app",
  github: "https://github.com/murali-a-dev",
  linkedin: "https://www.linkedin.com/in/murali6872",
  resume: "/Murali_A.pdf",
  bio: [
    "Web Developer with 2+ years of experience building responsive, user-focused web applications using React.js, Vue.js, JavaScript, Node.js, and Firebase.",
    "Experienced in developing reusable UI components, integrating REST APIs, working with databases, and delivering scalable web solutions with a focus on clean code, performance, and seamless user experiences.",
  ],
};

/* ── Navigation Items ────────────────────────────────────────── */
export const NAV_LINKS = [
  {
    label: "Home",
    href: "#hero",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    label: "About",
    href: "#about",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    label: "Skills",
    href: "#skills",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    label: "Experience",
    href: "#experience",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    label: "Projects",
    href: "#projects",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    label: "Contact",
    href: "#contact",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

/* ── Hero Tech Chips ─────────────────────────────────────────── */
export const TECH_STACK = [
  { name: "React.js", color: "#61DAFB", glyph: "⚛" },
  { name: "Vue 3", color: "#42b883", glyph: "◈" },
  { name: "Tailwind v4", color: "#38BDF8", glyph: "◉" },
  { name: "Node.js", color: "#8CC84B", glyph: "⬡" },
  { name: "Express.js", color: "#a78bfa", glyph: "🚂" },
  { name: "Firebase", color: "#FFCA28", glyph: "🔥" },
  { name: "MongoDB", color: "#4DB33D", glyph: "◆" },
];

/* ── Hero Typewriter Rotating Roles ──────────────────────────── */
export const ROLES = [
  "Full-Stack Web Developer",
  "React & Vue Specialist",
  "Tailwind CSS v4 Architect",
  "REST API & Backend Engineer",
  "Firebase Cloud Engineer",
];

/* ── Key Metrics & Statistics ────────────────────────────────── */
export const STATS = [
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Projects Shipped", value: 10, suffix: "+" },
  { label: "Tech Stack Tools", value: 20, suffix: "+" },
  { label: "Best Employee", value: 1, suffix: "🏆" },
];

/* ── Categorized Skills & Tooling ────────────────────────────── */
export const SKILL_CATEGORIES = [
  {
    label: "Frontend Frameworks",
    icon: "⚛",
    accent: "#61DAFB",
    accentBg: "rgba(97, 218, 251, 0.08)",
    accentDim: "rgba(97, 218, 251, 0.3)",
    skills: [
      { name: "React.js", icon: "⚛" },
      { name: "Vue 3", icon: "◈" },
      { name: "Handlebars.js", icon: "🖐" },
    ],
  },
  {
    label: "UI & Styling",
    icon: "🎨",
    accent: "#38BDF8",
    accentBg: "rgba(56, 189, 248, 0.08)",
    accentDim: "rgba(56, 189, 248, 0.3)",
    skills: [
      { name: "HTML5", icon: "🏗" },
      { name: "CSS3", icon: "🎨" },
      { name: "Tailwind CSS v4", icon: "◉" },
      { name: "Bootstrap", icon: "⚡" },
    ],
  },
  {
    label: "Backend & APIs",
    icon: "⬡",
    accent: "#8CC84B",
    accentBg: "rgba(140, 200, 75, 0.08)",
    accentDim: "rgba(140, 200, 75, 0.3)",
    skills: [
      { name: "Node.js", icon: "⬡" },
      { name: "Express.js", icon: "🚂" },
      { name: "REST APIs", icon: "🔗" },
      { name: "Axios", icon: "📡" },
    ],
  },
  {
    label: "Cloud & Database",
    icon: "🔥",
    accent: "#FFCA28",
    accentBg: "rgba(255, 202, 40, 0.08)",
    accentDim: "rgba(255, 202, 40, 0.3)",
    skills: [
      { name: "Firebase", icon: "🔥" },
      { name: "MongoDB", icon: "◆" },
      { name: "MySQL", icon: "🗄" },
    ],
  },
  {
    label: "Dev Tools & Workflow",
    icon: "🛠",
    accent: "#a78bfa",
    accentBg: "rgba(167, 139, 250, 0.08)",
    accentDim: "rgba(167, 139, 250, 0.3)",
    skills: [
      { name: "VS Code", icon: "📝" },
      { name: "Cursor AI", icon: "🤖" },
      { name: "Antigravity", icon: "🚀" },
      { name: "Claude AI", icon: "🧠" },
      { name: "Git & GitHub", icon: "🌿" },
      { name: "SourceTree", icon: "🌲" },
      { name: "Postman", icon: "📮" },
    ],
  },
];

/* ── Professional Work Experience ────────────────────────────── */
export const JOBS = [
  {
    role: "Web Developer",
    company: "BM Technovations",
    location: "Erode, TN, India",
    period: "Feb 2025 – Present",
    current: true,
    highlights: [
      "Built and maintained scalable web applications using Vue 3, Tailwind CSS v4, and Handlebars.js",
      "Delivered responsive, reusable UI components with a strong focus on performance, scalability, and user experience.",
      "Improved development efficiency using Cursor AI, with structured Git/SourceTree workflows for efficient feature delivery.",
    ],
    award: null,
  },
  {
    role: "Front-End Developer Intern",
    company: "Segolsys Software & Technology",
    location: "Coimbatore, TN, India",
    period: "Mar 2024 – Sep 2024",
    current: false,
    highlights: [
      "Built responsive and cross-browser web interfaces using React.js, JavaScript, HTML5, CSS3, and Bootstrap.",
      "Developed reusable React.js components and optimized frontend code for clean, maintainable, and user-friendly web experiences.",
    ],
    award: null,
  },
  {
    role: "Software Engineer",
    company: "Optech Software India Pvt. Ltd.",
    location: "Coimbatore, TN, India",
    period: "Dec 2022 – Dec 2023",
    current: false,
    highlights: [
      "Provided onsite and remote technical support for Billing ERP software and resolved client issues.",
      "Identified software issues and coordinated with the development team for timely resolution.",
      "Received Best Employee of the Year 2023 award for excellent technical support and client service.",
    ],
    award: "Best Employee of the Year 2023",
  },
];

/* ── Featured Flagship Projects ──────────────────────────────── */
export const PROJECTS = [
  {
    id: "buykart",
    name: "Buykart",
    tagline: "Supermart & Hyper-Local Logistics Ecosystem",
    subtitle: "Full-Stack Supermarket & Hyper-Local Delivery Platform",
    badge: "⭐ Featured Flagship",
    category: "Full-Stack",
    icon: "🛒",
    image: "/buykart.png",
    featured: true,
    description:
      "An end-to-end full-stack e-commerce supermarket and hyper-local delivery management platform integrating a customer storefront with OTP auth, a real-time back-office operations & inventory management panel, and a dedicated OnTime rider logistics portal.",
    link: "https://buykart-supermart.vercel.app",
    github: "https://github.com/muraliofficial/Buykart",
    statusText: "Live on Vercel",
    accent: "#8b5cf6",
    accentBg: "rgba(139, 92, 246, 0.12)",
    accentDim: "rgba(139, 92, 246, 0.45)",
    gradient: "linear-gradient(135deg, #7c3aed, #4f46e5)",
    stack: [
      "React 19",
      "Tailwind CSS v4",
      "Vite 8",
      "Node.js",
      "Express 5",
      "Firebase Firestore",
      "Cloudinary CDN",
      "Chart.js",
      "JWT Auth",
    ],
    highlights: [
      "3 Synchronized Real-Time Portals (Customer, Admin ERP, OnTime Rider)",
      "Real-time Inventory Mutation & Supplier Inward Purchase Entries",
      "Cloudinary Streaming Media Uploads & Image Optimization CDN",
      "Mobile OTP Passwordless Customer Verification & Dynamic Cart",
      "Full 6-Stage Order Fulfillment & Live Rider Dispatch Tracking",
    ],
    portals: [
      {
        name: "Buykart Website",
        badge: "Website Storefront",
        icon: "🛍️",
        desc: "Dynamic grocery catalog with live stock indicators, persistent cart, OTP customer verification, and live order tracking.",
        url: "https://buykart-supermart.vercel.app",
      },
      {
        name: "Admin & Inventory ERP",
        badge: "Admin ERP",
        icon: "📊",
        desc: "Real-time revenue metrics, Chart.js trend charts, inventory CRUD, stock replenishment logs, and rider assignment.",
        url: "https://buykart-supermart.vercel.app",
      },
      {
        name: "OnTime Rider Logistics",
        badge: "OnTime Rider App",
        icon: "🛵",
        desc: "Mobile-first courier interface with assigned task queues, route notes, and one-tap order state progression.",
        url: "https://buykart-supermart.vercel.app",
      },
    ],
    architecture: {
      client: "React 19 + Tailwind CSS v4 + Chart.js + Context API",
      backend: "Express.js 5 REST API + JWT Role Authentication + Multer Buffer Handling",
      database: "Google Cloud Firestore (Real-time NoSQL) + Cloudinary CDN Media Storage",
      flow: "Storefront / Admin / Rider ➔ Express 5 REST API ➔ Cloud Firestore & Cloudinary",
    },
  },
  {
    id: "chick-blast",
    name: "Chick Blast",
    tagline: "QSR & Real-Time Kitchen Operations Platform",
    subtitle: "Quick Service Restaurant & Live Kitchen Operations Engine",
    badge: "🔥 Flagship QSR",
    category: "Full-Stack",
    icon: "🍗",
    image: "/chick-blast.png",
    featured: true,
    description:
      "A high-performance Quick Service Restaurant (QSR) ordering and kitchen operations platform bridging dynamic customer digital menus and live order status tracking with kitchen staff via an interactive Kitchen Display System (KDS) and executive POS analytics.",
    link: "https://chick-blast.vercel.app",
    adminLink: "https://chick-blast.vercel.app/admin",
    kdsLink: "https://chick-blast.vercel.app/ready_for_pickup",
    github: "https://github.com/muraliofficial/chick_blast",
    statusText: "Live on Vercel",
    accent: "#f97316",
    accentBg: "rgba(249, 115, 22, 0.12)",
    accentDim: "rgba(249, 115, 22, 0.45)",
    gradient: "linear-gradient(135deg, #f97316, #ea580c)",
    stack: [
      "React 19",
      "Vite 8",
      "Tailwind CSS v4",
      "Node.js",
      "Express 5",
      "Firebase Firestore",
      "Recharts",
      "Axios",
      "Lucide React",
    ],
    highlights: [
      "Interactive Digital Menu with Dietary, Spicy & Allergen Indicators",
      "Real-Time Kitchen Display System (KDS) Pipeline (Pending ➔ Delivered)",
      "Multi-Fulfillment Checkout (Dine-In, Takeaway, Home Delivery)",
      "Executive POS Dashboard with Recharts Daily Sales & Dish Breakdown",
      "Dynamic Combo Deal Builder with Savings Badges & Multipart Media Uploads",
    ],
    portals: [
      {
        name: "Customer Web App",
        badge: "Website Storefront",
        icon: "🍗",
        desc: "Dynamic category menu browsing, smart cart calculation, auto-saved customer details, and live stepper order tracker.",
        url: "https://chick-blast.vercel.app",
      },
      {
        name: "Kitchen Display System",
        badge: "Kitchen KDS",
        icon: "👨‍🍳",
        desc: "Live kitchen pipeline for cooks with one-click status transitions across Pending, Preparing, Packed, and Delivered.",
        url: "https://chick-blast.vercel.app/ready_for_pickup",
      },
      {
        name: "Admin POS & Analytics",
        badge: "Admin POS",
        icon: "📈",
        desc: "Revenue metrics, Recharts visual trends, date-range order history query, menu item CRUD, and combo builder.",
        url: "https://chick-blast.vercel.app/admin",
      },
    ],
    architecture: {
      client: "React 19 + Vite + Tailwind CSS v4 + Lucide React + Recharts",
      backend: "Express.js 5 REST API + Multer File Upload Middleware",
      database: "Google Cloud Firestore (NoSQL) + Cloud Storage",
      flow: "Customer Storefront & Kitchen KDS ➔ Express 5 REST API ➔ Cloud Firestore",
    },
  },
];

/* ── Formal Education ────────────────────────────────────────── */
export const EDUCATION = {
  degree: "B.Sc. Information Technology",
  college: "Sri Vasavi College, Erode, TN, India",
  period: "Jun 2019 – May 2022",
  score: "84%",
};

/* ── Honors & Achievements ───────────────────────────────────── */
export const ACHIEVEMENTS = [
  {
    emoji: "🏆",
    title: "Best Employee of the Year",
    sub: "Optech Software India Pvt. Ltd. · 2023",
  },
  {
    emoji: "🥈",
    title: "Runner-up — Papyrus",
    sub: "Technical Presentation Competition",
  },
  {
    emoji: "📸",
    title: "First Prize — Photography",
    sub: "College Photography Competition",
  },
];

/* ── Floating Atmospheric Particles (Precomputed & Pure) ─────── */
export const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  size: 1.5 + ((i * 0.37) % 3),
  left: (i * 6.25) % 100,
  duration: 10 + ((i * 1.3) % 14),
  delay: (i * 0.75) % 12,
  opacity: 0.2 + ((i * 0.02) % 0.5),
}));
