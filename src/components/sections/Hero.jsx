import { useState, useEffect, useRef } from "react";
import { TECH_STACK, PARTICLES, PERSONAL, ROLES, STATS } from "../../data/portfolioData";
import { HeroPhotoCard } from "../ui/PhotoCard";
import muraliPhoto from "../../assets/murali-profile.jpg";

/**
 * AnimatedNumber
 * Smoothly interpolates an integer from 0 to target on viewport intersection.
 * Safe cleanup of intervals on unmount.
 */
function AnimatedNumber({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0;
          const step = Math.max(1, Math.ceil(target / 40));

          clearInterval(timerRef.current);
          timerRef.current = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(timerRef.current);
            } else {
              setCount(current);
            }
          }, 35);

          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      clearInterval(timerRef.current);
    };
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/**
 * Typewriter
 * Loops through an array of strings with smooth typing and backspacing.
 */
function Typewriter({ texts, speed = 75, pause = 2200 }) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let timeout;

    if (!deleting && display.length < current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, display.length + 1));
      }, speed);
    } else if (!deleting && display.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && display.length > 0) {
      timeout = setTimeout(() => {
        setDisplay(display.slice(0, -1));
      }, speed / 2);
    } else {
      setDeleting(false);
      setIdx((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, idx, texts, speed, pause]);

  return (
    <span className="inline-block">
      {display}
      <span className="text-violet-400 font-normal animate-[blink_0.8s_steps(1)_infinite]">
        |
      </span>
    </span>
  );
}

// Background atmospheric ambient orbs
const AMBIENT_ORBS = [
  { w: 520, h: 520, top: "-100px", left: "-80px", color: "rgba(124,58,237,0.22)", anim: "drift1 12s" },
  { w: 400, h: 400, top: "8%", right: "-60px", color: "rgba(88,28,201,0.17)", anim: "drift2 15s" },
  { w: 320, h: 320, bottom: "5%", left: "18%", color: "rgba(167,139,250,0.12)", anim: "drift3 18s" },
  { w: 260, h: 260, bottom: "20%", right: "8%", color: "rgba(109,40,217,0.14)", anim: "drift1 14s reverse" },
];

const AURORAS = [
  { top: "25%", delay: "0s", opacity: 0.8 },
  { top: "55%", delay: "3s", opacity: 0.5 },
  { top: "75%", delay: "5.5s", opacity: 0.35 },
];

/**
 * Hero Section
 * High-impact landing showcase featuring interactive typography, tech badges, and portrait card.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pb-24 pt-12 overflow-hidden"
    >
      {/* ── Dynamic Radial Background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, #1a0840 0%, #0f072a 60%, #080318 100%)",
        }}
      />

      {/* ── Aurora Streaks ── */}
      {AURORAS.map((a, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: a.top,
            left: "-10%",
            width: "120%",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, rgba(167,139,250,0.15), rgba(124,58,237,0.25), rgba(167,139,250,0.15), transparent)",
            filter: "blur(6px)",
            opacity: a.opacity,
            animation: `aurora-drift 8s ease-in-out ${a.delay} infinite`,
          }}
        />
      ))}

      {/* ── Floating Atmospheric Orbs ── */}
      {AMBIENT_ORBS.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.w,
            height: orb.h,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: "blur(75px)",
            animation: `${orb.anim} ease-in-out infinite`,
          }}
        />
      ))}

      {/* ── Particles ── */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            background: "rgba(167,139,250,0.6)",
            animation: `float-up ${p.duration}s ${p.delay}s linear infinite`,
            opacity: p.opacity,
          }}
        />
      ))}

      {/* ── Content Grid ── */}
      <div className="relative z-10 w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Left Column: Introductions & CTAs */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          {/* Availability Pill */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold mb-5 border backdrop-blur-sm"
            style={{
              borderColor: "rgba(167, 139, 250, 0.3)",
              color: "#a78bfa",
              background: "rgba(124, 58, 237, 0.12)",
              letterSpacing: "0.1em",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            READY TO CONTRIBUTE · ERODE, TN
          </div>

          {/* Name Header */}
          <h1
            className="font-black mb-3 leading-none tracking-tight bg-gradient-to-r from-violet-100 via-purple-300 to-violet-600 bg-clip-text text-transparent"
            style={{ fontSize: "clamp(2.8rem, 7vw, 4.8rem)" }}
          >
            {PERSONAL.name}
          </h1>

          {/* Rotating Role Headline */}
          <div
            className="font-light text-white/70 mb-5 min-h-[2rem]"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
          >
            <Typewriter texts={ROLES} />
          </div>

          {/* Short Bio One-liner */}
          <p className="text-white/60 leading-relaxed mb-8 max-w-md text-[13.5px]">
            Crafting high-performance web architectures and fluid user experiences —
            from reactive client applications to scalable full-stack web platforms, powered by modern cloud infrastructure.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white text-[13px] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-violet-600/40 bg-gradient-to-r from-violet-600 to-purple-800"
            >
              <span>🚀 View Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={13}
                height={13}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
                className="group-hover:translate-x-1 transition-transform"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white/80 text-[13px] border border-white/15 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.509 11.509 0 013.004-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>

            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white/80 text-[13px] border border-white/15 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>

            <a
              href={PERSONAL.resume}
              download="Murali_A.pdf"
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-[13px] border text-emerald-400 border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Resume
            </a>
          </div>

          {/* Tech Stack Chips */}
          <p className="text-[10px] text-white/35 uppercase tracking-widest mb-3 font-bold">
            Core Technologies
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
            {TECH_STACK.map((tech) => (
              <span
                key={tech.name}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold border border-white/10 bg-white/[0.04] hover:border-white/25 transition-colors cursor-default"
                style={{ color: tech.color }}
              >
                <span>{tech.glyph}</span>
                <span>{tech.name}</span>
              </span>
            ))}
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-md md:max-w-full">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center p-3.5 rounded-xl border border-white/10 bg-violet-950/20 hover:border-violet-500/30 transition-colors"
              >
                <span className="text-2xl font-black text-white mb-1">
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-[10px] text-white/40 text-center leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: High-Impact Portrait */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <HeroPhotoCard src={muraliPhoto} />
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 pointer-events-none">
        <span className="text-[9px] tracking-widest uppercase font-semibold">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
