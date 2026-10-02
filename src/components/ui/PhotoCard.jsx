/**
 * PhotoCard.jsx
 * ─────────────────────────────────────────────
 * Two reusable photo components:
 *
 *  HeroPhotoCard    — large 4:5 portrait for Hero section
 *                     with spinning ring, floating badges, corner dots
 *
 *  AboutPhotoCircle — small circular avatar for About / Profile card
 *                     with spinning ring border and glow
 *
 * Usage:
 *   import { HeroPhotoCard, AboutPhotoCircle } from "../ui/PhotoCard";
 *   import muraliPhoto from "../../assets/murali-profile.jpg";
 *
 *   <HeroPhotoCard    src={muraliPhoto} />
 *   <AboutPhotoCircle src={muraliPhoto} alt="Murali A" />
 */

/* ══════════════════════════════════════════════
   HERO PHOTO CARD — 4:5 Portrait
══════════════════════════════════════════════ */
export function HeroPhotoCard({ src, alt = "Murali A — Full-Stack Web Developer" }) {
  return (
    <div className="flex justify-center md:justify-end items-center w-full">

      {/* ── Keyframes (injected once) ── */}
      <style>{`
        @keyframes photo-ring-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes photo-avail-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
      `}</style>

      {/* Outer size container — 4:5 ratio, fluid */}
      <div
        className="relative flex-shrink-0"
        style={{
          width:  "clamp(220px, 28vw, 310px)",
          height: "clamp(275px, 35vw, 390px)",
        }}
      >

        {/* ── 1. Spinning gradient ring ── */}
        <div
          className="absolute rounded-3xl"
          style={{
            inset:      "-13px",
            background: "linear-gradient(135deg, rgba(124,58,237,0.82), rgba(167,139,250,0.32), rgba(88,28,201,0.82))",
            animation:  "photo-ring-spin 7s linear infinite",
            zIndex:     0,
          }}
        />

        {/* ── 2. Glassmorphic dark backing ── */}
        <div
          className="absolute rounded-3xl"
          style={{
            inset:           "-5px",
            background:      "rgba(15, 7, 42, 0.88)",
            backdropFilter:  "blur(4px)",
            zIndex:          1,
          }}
        />

        {/* ── 3. Photo image ── */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden"
          style={{ zIndex: 2 }}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 26%", transform: "scale(1.08)", transformOrigin: "center 28%" }}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentNode.style.background =
                "linear-gradient(135deg,#1a0840,#0f072a)";
            }}
          />
          {/* Subtle bottom fade → blends into dark bg */}
          <div
            className="absolute bottom-0 left-0 right-0 h-14 rounded-b-3xl"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(15,7,42,0.45))",
            }}
          />
        </div>

        {/* ── 4. Corner accent glow dots ── */}
        {[
          { top: "-5px",    left:  "-5px"  },
          { top: "-5px",    right: "-5px"  },
          { bottom: "-5px", left:  "-5px"  },
          { bottom: "-5px", right: "-5px"  },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute w-2.5 h-2.5 rounded-full"
            style={{
              ...pos,
              background:  "#7c3aed",
              boxShadow:   "0 0 14px rgba(124,58,237,0.9)",
              zIndex:      3,
            }}
          />
        ))}

        {/* ── 5. Floating badge — top right "⚡ Full-Stack Dev" ── */}
        <div
          className="absolute flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10.5px] font-extrabold text-white"
          style={{
            top:           "-14px",
            right:         "-8px",
            zIndex:        4,
            background:    "rgba(124,58,237,0.94)",
            border:        "1px solid rgba(167,139,250,0.42)",
            boxShadow:     "0 4px 18px rgba(124,58,237,0.55)",
            backdropFilter:"blur(12px)",
            whiteSpace:    "nowrap",
          }}
        >
          ⚡ Full-Stack Dev
        </div>

        {/* ── 6. Floating badge — bottom center "Available for Work" ── */}
        <div
          className="absolute flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10.5px] font-extrabold"
          style={{
            bottom:        "-16px",
            left:          "50%",
            transform:     "translateX(-50%)",
            zIndex:        4,
            color:         "#34d399",
            background:    "rgba(15,7,42,0.94)",
            border:        "1px solid rgba(52,211,153,0.32)",
            backdropFilter:"blur(12px)",
            whiteSpace:    "nowrap",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{
              background: "#34d399",
              animation:  "photo-avail-pulse 1.8s ease-in-out infinite",
            }}
          />
          Available for Work
        </div>

      </div>
    </div>
  );
}


/* ══════════════════════════════════════════════
   ABOUT PHOTO CIRCLE — circular avatar
══════════════════════════════════════════════ */
export function AboutPhotoCircle({ src, alt = "Murali A" }) {
  return (
    <div className="relative w-28 h-28 mx-auto mb-4">

      {/* Slow spinning ring border */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset:     "-6px",
          border:    "1.5px solid rgba(167,139,250,0.3)",
          animation: "photo-ring-spin 8s linear infinite",
        }}
      />

      {/* Photo circle */}
      <div
        className="w-28 h-28 rounded-full overflow-hidden"
        style={{
          border:    "3px solid rgba(167,139,250,0.48)",
          boxShadow: "0 0 28px rgba(124,58,237,0.6)",
          position:  "relative",
          zIndex:    1,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 32%", transform: "scale(1.3)", transformOrigin: "center 32%" }}
          onError={(e) => {
            /* Fallback: show "M" monogram if photo fails to load */
            e.target.style.display = "none";
            const parent = e.target.parentNode;
            parent.style.background = "linear-gradient(135deg,#7c3aed,#4c1d95)";
            parent.style.display    = "flex";
            parent.style.alignItems = "center";
            parent.style.justifyContent = "center";
            const span = document.createElement("span");
            span.textContent = "M";
            span.style.cssText = "color:#fff;font-size:2.4rem;font-weight:900;line-height:1";
            parent.appendChild(span);
          }}
        />
      </div>
    </div>
  );
}
