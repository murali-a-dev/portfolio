import SectionHeader from "../ui/SectionHeader";
import { SKILL_CATEGORIES } from "../../data/portfolioData";

/* Pure CSS hover — no useState needed */
function SkillChip({ name, accent, accentBg, accentDim }) {
  return (
    <span
      className="skill-chip inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold cursor-default transition-all duration-200"
      style={{
        border: `1px solid rgba(255,255,255,0.09)`,
        background: "rgba(255,255,255,0.04)",
        color: "rgba(255,255,255,0.72)",
        "--chip-accent": accent,
        "--chip-bg": accentBg,
        "--chip-dim": accentDim,
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
      {name}
    </span>
  );
}

/* Pure CSS hover — no useState needed */
function SkillCard({ cat }) {
  return (
    <div
      className="skill-card relative rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        border: `1px solid rgba(255,255,255,0.07)`,
        background: "rgba(255,255,255,0.03)",
        "--card-accent-dim": cat.accentDim,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
        style={{ background: cat.accent, opacity: 0.85 }}
      />
      <div className="p-6 pt-7">
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
            style={{ background: cat.accentBg }}
          >
            {cat.icon}
          </div>
          <span className="text-sm font-extrabold text-white tracking-wide">{cat.label}</span>
          <span
            className="ml-auto text-[10px] font-bold px-2.5 py-1 rounded-full"
            style={{ color: cat.accent, background: cat.accentBg }}
          >
            {cat.skills.length} skills
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {cat.skills.map((s) => (
            <SkillChip
              key={s.name}
              name={s.name}
              accent={cat.accent}
              accentBg={cat.accentBg}
              accentDim={cat.accentDim}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillsMarquee() {
  const all = SKILL_CATEGORIES.flatMap((c) => c.skills.map((s) => ({ ...s, accent: c.accent })));
  const doubled = [...all, ...all];
  return (
    <div className="mt-12">
      <p className="text-center text-[10px] font-bold tracking-[0.2em] uppercase text-white/25 mb-4">
        All Technologies
      </p>
      <div
        className="overflow-hidden relative"
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
        }}
      >
        {/* marquee-track class used by prefers-reduced-motion rule in CSS */}
        <div
          className="marquee-track flex gap-2.5"
          style={{ width: "max-content", animation: "marquee 28s linear infinite" }}
        >
          {doubled.map((s, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[11px] font-bold border border-white/10 whitespace-nowrap flex-shrink-0"
              style={{ background: "rgba(124,58,237,0.08)", color: "rgba(255,255,255,0.6)" }}
            >
              {s.icon} {s.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full mx-auto">
        <SectionHeader label="Skills" title="My Technical Arsenal" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat) => <SkillCard key={cat.label} cat={cat} />)}
        </div>
        <SkillsMarquee />
      </div>
    </section>
  );
}
