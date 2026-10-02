import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/portfolioData";

/**
 * SVG Icon helper for navigation tabs
 */
function NavIcon({ path, size = 17 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0"
    >
      <path d={path} />
    </svg>
  );
}

/**
 * Navbar Component
 * Floating glassmorphic dock with active section tracking and theme toggle.
 */
export default function Navbar({ darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState("hero");

  // Optimized scroll tracking with requestAnimationFrame
  useEffect(() => {
    let ticking = false;
    const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const el = document.getElementById(sectionIds[i]);
            if (el && el.getBoundingClientRect().top <= 140) {
              setActiveSection(sectionIds[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
      aria-label="Main Navigation"
    >
      <div
        className="flex items-center gap-1 p-1.5 sm:px-2.5 sm:py-2 rounded-2xl border border-white/10 backdrop-blur-xl transition-all duration-300"
        style={{
          background: darkMode ? "rgba(15, 7, 42, 0.85)" : "rgba(35, 18, 75, 0.88)",
          boxShadow: "0 8px 32px rgba(124, 58, 237, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Navigation Section Links */}
        {NAV_LINKS.map((link) => {
          const sectionId = link.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              title={link.label}
              aria-label={link.label}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "text-white bg-gradient-to-r from-violet-600 to-purple-800 shadow-md shadow-violet-600/40"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <NavIcon path={link.icon} />
              <span className="hidden md:inline">{link.label}</span>
            </a>
          );
        })}

        {/* Vertical Divider */}
        {setDarkMode && (
          <>
            <div className="w-px h-5 bg-white/15 mx-1" />

            {/* Dark / Light Mode Toggle Button */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              title={darkMode ? "Switch to Royal Mode" : "Switch to Deep Dark Mode"}
              aria-label="Toggle theme mode"
              className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center justify-center cursor-pointer"
            >
              {darkMode ? (
                /* Moon Icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                /* Sun Icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
