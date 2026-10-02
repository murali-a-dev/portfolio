import { useState } from "react";

/**
 * HeroPhotoCard
 * 4:5 Aspect Portrait card for the Hero section.
 * Features rotating gradient halo, glassmorphic backplate, and floating status tags.
 */
export function HeroPhotoCard({ src, alt = "Murali A — Full-Stack Web Developer" }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex justify-center md:justify-end items-center w-full">
      {/* Outer fluid container with 4:5 ratio */}
      <div
        className="relative flex-shrink-0"
        style={{
          width: "clamp(220px, 28vw, 310px)",
          height: "clamp(275px, 35vw, 390px)",
        }}
      >
        {/* 1. Rotating gradient aura ring */}
        <div
          className="absolute rounded-3xl"
          style={{
            inset: "-13px",
            background:
              "linear-gradient(135deg, rgba(124, 58, 237, 0.82), rgba(167, 139, 250, 0.32), rgba(88, 28, 201, 0.82))",
            animation: "photo-ring-spin 7s linear infinite",
            zIndex: 0,
          }}
        />

        {/* 2. Glassmorphic dark backplate */}
        <div
          className="absolute rounded-3xl backdrop-blur-sm"
          style={{
            inset: "-5px",
            background: "rgba(15, 7, 42, 0.9)",
            zIndex: 1,
          }}
        />

        {/* 3. Main photo frame */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-violet-950/60 to-purple-900/40"
          style={{ zIndex: 2 }}
        >
          {!imgError ? (
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              style={{
                objectPosition: "center 26%",
                transform: "scale(1.08)",
                transformOrigin: "center 28%",
              }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-violet-950/80 text-violet-300">
              <span className="text-4xl font-black">MA</span>
              <span className="text-xs font-semibold mt-1">Full-Stack Dev</span>
            </div>
          )}

          {/* Subtle bottom gradient vignette */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(15, 7, 42, 0.6))",
            }}
          />
        </div>

        {/* 4. Corner accent dots */}
        {[
          "top-[-5px] left-[-5px]",
          "top-[-5px] right-[-5px]",
          "bottom-[-5px] left-[-5px]",
          "bottom-[-5px] right-[-5px]",
        ].map((pos, i) => (
          <div
            key={i}
            className={`absolute w-2.5 h-2.5 rounded-full ${pos}`}
            style={{
              background: "#7c3aed",
              boxShadow: "0 0 14px rgba(124, 58, 237, 0.9)",
              zIndex: 3,
            }}
          />
        ))}

        {/* 5. Floating Badge: Top Right */}
        <div
          className="absolute flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10.5px] font-extrabold text-white backdrop-blur-md shadow-lg"
          style={{
            top: "-14px",
            right: "-8px",
            zIndex: 4,
            background: "rgba(124, 58, 237, 0.94)",
            border: "1px solid rgba(167, 139, 250, 0.42)",
            boxShadow: "0 4px 18px rgba(124, 58, 237, 0.55)",
            whiteSpace: "nowrap",
          }}
        >
          ⚡ Full-Stack Dev
        </div>

        {/* 6. Floating Badge: Bottom Center */}
        <div
          className="absolute flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-[10.5px] font-extrabold backdrop-blur-md shadow-lg"
          style={{
            bottom: "-16px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 4,
            color: "#34d399",
            background: "rgba(15, 7, 42, 0.94)",
            border: "1px solid rgba(52, 211, 153, 0.32)",
            whiteSpace: "nowrap",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{
              background: "#34d399",
              animation: "photo-avail-pulse 1.8s ease-in-out infinite",
            }}
          />
          Available for Work
        </div>
      </div>
    </div>
  );
}

/**
 * AboutPhotoCircle
 * Circular avatar for About / Profile cards with glowing spinning aura ring.
 */
export function AboutPhotoCircle({ src, alt = "Murali A" }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-28 h-28 mx-auto mb-4">
      {/* Spinning halo border */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: "-6px",
          border: "1.5px solid rgba(167, 139, 250, 0.3)",
          animation: "photo-ring-spin 8s linear infinite",
        }}
      />

      {/* Avatar frame */}
      <div
        className="w-28 h-28 rounded-full overflow-hidden relative z-10"
        style={{
          border: "3px solid rgba(167, 139, 250, 0.5)",
          boxShadow: "0 0 28px rgba(124, 58, 237, 0.6)",
        }}
      >
        {!imgError ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            style={{
              objectPosition: "center 32%",
              transform: "scale(1.3)",
              transformOrigin: "center 32%",
            }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-600 to-purple-900 text-white font-black text-3xl">
            M
          </div>
        )}
      </div>
    </div>
  );
}
