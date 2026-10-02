import { PERSONAL } from "../../data/portfolioData";

/**
 * Footer Component
 * Minimalist glassmorphic footer with active links and attribution.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-8 px-4 text-white/40 text-xs border-t border-white/5 backdrop-blur-sm">
      <p className="flex items-center justify-center flex-wrap gap-1.5">
        <span>Designed & Engineered by</span>
        <a
          href={PERSONAL.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-400 hover:text-white transition-colors font-semibold"
        >
          Murali A
        </a>
        <span className="text-white/20">•</span>
        <span>React & Tailwind CSS v4</span>
        <span className="text-white/20">•</span>
        <span>© {currentYear}</span>
      </p>
    </footer>
  );
}
