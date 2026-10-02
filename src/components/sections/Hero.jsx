import { useState, useEffect, useRef } from "react";
import { TECH_STACK, PARTICLES, PERSONAL, STATS } from "../../data/portfolioData";
import muraliPhoto from "../../assets/murali-profile.jpg";

/* ── Animated counter ── */
function AnimatedNumber({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = Math.ceil(target / 50);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(start);
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Typewriter ── */
function Typewriter({ texts, speed = 80, pause = 2000 }) {
  const [display,  setDisplay]  = useState("");
  const [idx,      setIdx]      = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let timeout;
    if (!deleting && display.length < current.length) {
      timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), speed);
    } else if (!deleting && display.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display.length > 0) {
      timeout = setTimeout(() => setDisplay(display.slice(0, -1)), speed / 2);
    } else {
      setDeleting(false);
      setIdx((idx + 1) % texts.length);
    }
    return () => clearTimeout(timeout);
  }, [display, deleting, idx, texts, speed, pause]);

  return (
    <span>
      {display}
      <span style={{ color: "#a78bfa", animation: "blink .7s steps(1) infinite" }}>|</span>
    </span>
  );
}

/* ── Hero Photo Card ── */
function HeroPhotoCard() {
  return (
    <div className="flex justify-center md:justify-end items-center w-full">
      <div
        className="relative flex-shrink-0"
        style={{ width: "clamp(220px, 28vw, 310px)", height: "clamp(275px, 35vw, 390px)" }}
      >
        {/* Slow-spinning gradient ring */}
        <div
          className="absolute rounded-3xl"
          style={{
            inset: "-13px",
            background: "linear-gradient(135deg, rgba(124,58,237,0.8), rgba(167,139,250,0.3), rgba(88,28,201,0.8))",
            animation: "hero-ring-spin 7s linear infinite",
            zIndex: 0,
          }}
        />
        {/* Glassmorphic dark backing */}
        <div
          className="absolute rounded-3xl"
          style={{ inset: "-5px", background: "rgba(15,7,42,0.88)", backdropFilter: "blur(4px)", zIndex: 1 }}
        />
        {/* Photo */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden" style={{ zIndex: 2 }}>
          <img
            src={muraliPhoto}
            alt="Murali A — Full-Stack Web Developer"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 26%", transform: "scale(1.08)", transformOrigin: "center 28%" }}
            fetchpriority="high"
            loading="eager"
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-14 rounded-b-3xl"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(15,7,42,0.4))" }}
          />
        </div>
        {/* Corner glow dots */}
        {[
          { top: "-5px",    left:  "-5px"  },
          { top: "-5px",    right: "-5px"  },
          { bottom: "-5px", left:  "-5px"  },
          { bottom: "-5px", right: "-5px"  },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute w-2.5 h-2.5 rounded-full"
            style={{ ...pos, background: "#7c3aed", boxShadow: "0 0 14px rgba(124,58,237,0.9)", zIndex: 3 }}
          />
        ))}
        {/* Top-right floating badge */}
        <div
          className="absolute flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10.5px] font-extrabold text-white"
          style={{
            top: "-14px", right: "-8px", zIndex: 4,
            background: "rgba(124,58,237,0.94)",
            border: "1px solid rgba(167,139,250,0.4)",
            boxShadow: "0 4px 18px rgba(124,58,237,0.55)",
            backdropFilter: "blur(10px)",
          }}
        >
          ⚡ Full-Stack Dev
        </div>
        {/* Bottom-center floating badge */}
        <div
          className="absolute flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10.5px] font-extrabold"
          style={{
            bottom: "-16px", left: "50%", transform: "translateX(-50%)",
            zIndex: 4, color: "#34d399", whiteSpace: "nowrap",
            background: "rgba(15,7,42,0.94)",
            border: "1px solid rgba(52,211,153,0.32)",
            backdropFilter: "blur(10px)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: "#34d399", animation: "hero-dot-pulse 1.8s ease-in-out infinite" }}
          />
          Ready to Contribute
        </div>
      </div>
    </div>
  );
}

const ROLES = [
  "Full-Stack Web Developer",
  "React & Vue Specialist",
  "Tailwind CSS v4 Architect",
  "REST API & Backend Engineer",
  "Firebase Cloud Engineer",
];

const ORBS = [
  { w: 520, h: 520, top: "-100px", left: "-80px",  color: "rgba(124,58,237,0.22)", anim: "drift1 12s" },
  { w: 400, h: 400, top: "8%",     right: "-60px", color: "rgba(88,28,201,0.17)",  anim: "drift2 15s" },
  { w: 320, h: 320, bottom: "5%",  left: "18%",    color: "rgba(167,139,250,0.12)",anim: "drift3 18s" },
  { w: 260, h: 260, bottom: "20%", right: "8%",    color: "rgba(109,40,217,0.14)", anim: "drift1 14s reverse" },
];

const AURORAS = [
  { top: "25%", delay: "0s",   opacity: 1   },
  { top: "55%", delay: "3s",   opacity: 0.6 },
  { top: "75%", delay: "5.5s", opacity: 0.4 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pb-24 pt-8 overflow-hidden"
    >
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, #1a0840 0%, #0f072a 60%, #080318 100%)" }}
      />

      {/* Aurora streaks */}
      {AURORAS.map((a, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: a.top, left: "-10%", width: "120%", height: "2px",
            background: "linear-gradient(90deg,transparent,rgba(167,139,250,0.15),rgba(124,58,237,0.25),rgba(167,139,250,0.15),transparent)",
            filter: "blur(6px)", opacity: a.opacity,
            animation: `aurora-drift 8s ease-in-out ${a.delay} infinite`,
          }}
        />
      ))}

      {/* Floating orbs */}
      {ORBS.map((o, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: o.w, height: o.h,
            top: o.top, left: o.left, right: o.right, bottom: o.bottom,
            background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
            filter: "blur(75px)",
            animation: `${o.anim} ease-in-out infinite`,
          }}
        />
      ))}

      {/* Floating particles — respects prefers-reduced-motion via CSS */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none hero-particle"
          style={{
            width: `${p.size}px`, height: `${p.size}px`,
            left: `${p.left}%`,
            background: "rgba(167,139,250,0.6)",
            animation: `float-up ${p.duration}s ${p.delay}s linear infinite`,
            opacity: p.opacity,
          }}
        />
      ))}

      {/* ── TWO-COLUMN LAYOUT ── */}
      <div className="relative z-10 w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* ── LEFT: Text Content ── */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">

          {/* Available badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold mb-5 border"
            style={{ borderColor: "rgba(167,139,250,0.3)", color: "#a78bfa", background: "rgba(124,58,237,0.12)", letterSpacing: "0.1em" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#34d399" }} />
            OPEN TO OPPORTUNITIES · ERODE, TN
          </div>

          {/* Name */}
          <h1
            aria-label="Murali A"
            className="font-black mb-3 leading-none tracking-tight"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5rem)",
              background: "linear-gradient(135deg, #e2dcfc 0%, #a78bfa 40%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Murali A
          </h1>

          {/* Typewriter role */}
          <p
            className="font-light text-white/65 mb-5 min-h-[2rem]"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
          >
            <Typewriter texts={ROLES} />
          </p>

          {/* One-liner */}
          <p className="text-white/52 leading-relaxed mb-8 max-w-md" style={{ fontSize: "13.5px" }}>
            Crafting high-performance web architectures and fluid user experiences —
            from blazing React SPAs to scalable full-stack web platforms, powered by modern cloud infrastructure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white text-[13px] transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg,#7c3aed,#4c1d95)", boxShadow: "0 4px 22px rgba(124,58,237,0.5)" }}
            >
              🚀 View Projects
              <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} className="group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white/78 text-[13px] border border-white/14 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-200">
              <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.509 11.509 0 013.004-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>

            <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white/78 text-[13px] border border-white/14 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-200">
              <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>

            <a
              href={PERSONAL.resume}
              download="Murali_Resume.pdf"
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-[13px] border transition-all duration-200 hover:brightness-110"
              style={{ color: "#34d399", borderColor: "rgba(52,211,153,0.3)", background: "rgba(52,211,153,0.07)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              </svg>
              Resume
            </a>
          </div>

          {/* Tech Stack chips */}
          <p className="text-[10px] text-white/28 uppercase tracking-widest mb-3 font-bold">Tech Stack</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-9">
            {TECH_STACK.map((tech) => (
              <span
                key={tech.name}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-semibold border border-white/10 hover:border-white/22 transition-colors cursor-default"
                style={{ color: tech.color, background: "rgba(255,255,255,0.04)" }}
              >
                {tech.glyph} {tech.name}
              </span>
            ))}
          </div>

          {/* Stats — imported from portfolioData, single source of truth */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-md md:max-w-full">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center p-3.5 rounded-xl border hover:border-purple-400/30 transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(124,58,237,0.08)" }}
              >
                <span className="text-2xl font-black text-white mb-1">
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[10px] text-white/38 text-center leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Photo ── */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <HeroPhotoCard />
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/28">
        <span className="text-[9px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-9 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
