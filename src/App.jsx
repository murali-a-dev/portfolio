import { useState, useEffect } from "react";

/* ── Global UI Components ── */
import Navbar from "./components/ui/Navbar";
import LoadingScreen from "./components/ui/LoadingScreen";
import Reveal from "./components/ui/Reveal";
import Footer from "./components/ui/Footer";

/* ── Section Views ── */
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

/**
 * Root Application Component
 * Manages global theme state, loading transitions, and section assembly.
 */
export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  // Sync Tailwind .dark class with html root element
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const backgroundColor = darkMode ? "#0f072a" : "#1a103c";

  return (
    <>
      {/* Intro Splash Loader */}
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}

      <div
        className="min-h-screen text-white font-['Nunito',sans-serif] transition-colors duration-500 ease-out overflow-x-hidden"
        style={{
          background: backgroundColor,
          visibility: loading ? "hidden" : "visible",
        }}
      >
        {/* Floating Glassmorphic Dock Navigation */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section — immediate viewport landing */}
          <Hero />

          {/* Scroll-revealed sections with subtle stagger */}
          <Reveal direction="up">
            <About />
          </Reveal>

          <Reveal direction="up" delay={0.05}>
            <Skills />
          </Reveal>

          <Reveal direction="left" delay={0.05}>
            <Experience />
          </Reveal>

          <Reveal direction="up" delay={0.05}>
            <Projects />
          </Reveal>

          <Reveal direction="up" delay={0.05}>
            <Contact />
          </Reveal>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </>
  );
}
