import { useState, useEffect } from "react";
import muraliPhoto from "../../assets/murali-profile.jpg";

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut]   = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + 4;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setFadeOut(true), 300);
      setTimeout(() => onDone(), 900);
    }
  }, [progress, onDone]);

  return (
    <div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
      style={{
        background:    "#0f072a",
        opacity:       fadeOut ? 0 : 1,
        transition:    "opacity 0.6s ease",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Profile photo orb */}
      <div className="relative mb-8">
        <div
          className="w-20 h-20 rounded-full overflow-hidden"
          style={{
            border:    "2.5px solid rgba(167,139,250,0.6)",
            boxShadow: "0 0 40px rgba(124,58,237,0.7)",
            animation: "ls-pulse 1.2s ease-in-out infinite",
          }}
        >
          <img
            src={muraliPhoto}
            alt="Murali"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 32%", transform: "scale(1.3)", transformOrigin: "center 32%" }}
          />
        </div>
        <div
          className="absolute inset-[-8px] rounded-full"
          style={{
            border:    "1.5px solid rgba(167,139,250,0.3)",
            animation: "ls-spin 3s linear infinite",
          }}
        />
      </div>

      <p
        className="text-2xl font-black mb-1"
        style={{
          background:           "linear-gradient(135deg,#e2dcfc,#a78bfa,#7c3aed)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor:  "transparent",
          backgroundClip:       "text",
        }}
      >
        Murali
      </p>
      <p className="text-xs text-white/35 font-semibold tracking-[0.2em] uppercase mb-10">
        Full-Stack Developer
      </p>

      <div
        className="w-48 h-[3px] rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-100"
          style={{
            width:      `${progress}%`,
            background: "linear-gradient(90deg,#7c3aed,#a78bfa)",
          }}
        />
      </div>
      <p className="text-[10px] text-white/25 mt-2 font-mono">{progress}%</p>
    </div>
  );
}
