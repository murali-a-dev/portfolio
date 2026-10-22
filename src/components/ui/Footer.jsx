import { PERSONAL } from "../../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center pt-10 pb-32 text-white/25 text-xs border-t border-white/5">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="inline-flex items-center gap-1.5 mb-6 px-4 py-2 rounded-xl text-[11px] font-bold text-white/40 hover:text-white border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-200 cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        Back to Top
      </button>

      <div className="flex items-center justify-center gap-4 mb-3">
        <a
          href={PERSONAL.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 hover:text-purple-400 transition-colors font-semibold"
        >
          GitHub
        </a>
        <span className="text-white/15">·</span>
        <a
          href={PERSONAL.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 hover:text-sky-400 transition-colors font-semibold"
        >
          LinkedIn
        </a>
      </div>

      <p>
        Designed &amp; Crafted by{" "}
        <a
          href={PERSONAL.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-white transition-colors"
        >
          {PERSONAL.shortName || "Murali"}
        </a>
        {" "}· React + Tailwind CSS v4 · © {year}
      </p>
    </footer>
  );
}
