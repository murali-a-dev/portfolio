import { useState, useEffect } from "react";

import Navbar        from "./components/ui/Navbar";
import LoadingScreen from "./components/ui/LoadingScreen";
import Reveal        from "./components/ui/Reveal";
import Footer        from "./components/ui/Footer";

import Hero       from "./components/sections/Hero";
import About      from "./components/sections/About";
import Skills     from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects   from "./components/sections/Projects";
import Contact    from "./components/sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  /* Ensure dark class is always on <html> */
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}

      <div
        style={{
          background:  "#0f072a",
          color:       "#ffffff",
          minHeight:   "100vh",
          fontFamily:  "'Nunito', sans-serif",
          visibility:  loading ? "hidden" : "visible",
          transition:  "background 0.5s ease",
        }}
      >
        <Navbar />

        <Hero />

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

        <Footer />
      </div>
    </>
  );
}
