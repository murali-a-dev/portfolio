import { useState, useEffect } from "react";
import muraliPhoto from "../../assets/murali-profile.jpg";

/**
 * LoadingScreen Component
 * Displays a sleek branded loading splash screen while assets initialize.
 * Automatically cleans up timers upon completion or unmount.
 */
export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  // Smooth progress increment
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // Safe fade out & completion transition
  useEffect(() => {
    if (progress < 100) return;

    const fadeTimer = setTimeout(() => setFadeOut(true), 250);
    const doneTimer = setTimeout(() => onDone(), 800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [progress, onDone]);

  return (
    <div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center transition-opacity duration-600 ease-out"
      style={{
        background: "#0f072a",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "auto",
      }}
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      {/* Profile avatar orb */}
      <div className="relative mb-8">
        <div
          className="w-20 h-20 rounded-full overflow-hidden"
          style={{
            border: "2.5px solid rgba(167, 139, 250, 0.6)",
            boxShadow: "0 0 40px rgba(124, 58, 237, 0.7)",
            animation: "ls-pulse 1.2s ease-in-out infinite",
          }}
        >
          <img
            src={muraliPhoto}
            alt="Murali A"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "center 32%",
              transform: "scale(1.3)",
              transformOrigin: "center 32%",
            }}
          />
        </div>
        <div
          className="absolute inset-[-8px] rounded-full pointer-events-none"
          style={{
            border: "1.5px solid rgba(167, 139, 250, 0.3)",
            animation: "ls-spin 3s linear infinite",
          }}
        />
      </div>

      <p
        className="text-2xl font-black mb-1 bg-gradient-to-r from-violet-200 via-purple-300 to-violet-500 bg-clip-text text-transparent"
      >
        Murali
      </p>
      <p className="text-xs text-white/40 font-semibold tracking-[0.2em] uppercase mb-10">
        Full-Stack Developer
      </p>

      {/* Progress bar */}
      <div
        className="w-48 h-[3px] rounded-full overflow-hidden bg-white/10"
      >
        <div
          className="h-full rounded-full transition-all duration-100 ease-out bg-gradient-to-r from-violet-600 to-purple-400"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-[10px] text-white/30 mt-2 font-mono">{progress}%</p>
    </div>
  );
}
