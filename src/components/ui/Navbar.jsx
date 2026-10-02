import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/portfolioData";

function Icon({ path, size = 17 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} height={size}
      viewBox="0 0 24 24"
      fill="none" stroke="currentColor"
      strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );
}

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((n) => n.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed bottom-5 left-1/2 z-50"
      style={{ transform: "translateX(-50%)" }}
      aria-label="Main navigation"
    >
      <div
        className="flex items-center gap-1 px-3 py-2 rounded-2xl border border-white/10"
        style={{
          background: "rgba(15,7,42,0.82)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          boxShadow: "0 8px 40px rgba(124,58,237,0.35), 0 1px 0 rgba(255,255,255,0.08) inset",
        }}
      >
        {NAV_LINKS.map((link) => {
          const isActive = active === link.href.replace("#", "");
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              title={link.label}
              aria-label={link.label}
              className={`flex items-center gap-1.5 rounded-xl text-sm font-medium transition-all duration-200
                ${isActive
                  ? "px-3 py-2 text-white"
                  : "px-2.5 py-2 text-white/55 hover:text-white/90"
                }`}
              style={
                isActive
                  ? {
                    background: "linear-gradient(135deg,rgba(124,58,237,0.85),rgba(76,29,149,0.9))",
                    boxShadow: "0 2px 12px rgba(124,58,237,0.55)",
                  }
                  : {}
              }
            >
              <Icon path={link.icon} />
              {/* Active item always shows label even on mobile */}
              <span className={isActive ? "text-[12px] font-bold" : "hidden md:inline"}>
                {link.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
