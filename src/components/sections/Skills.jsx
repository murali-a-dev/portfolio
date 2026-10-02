import SectionHeader from "../ui/SectionHeader";
import { SKILL_CATEGORIES } from "../../data/portfolioData";

/**
 * SkillChip
 * Highly performant pure-CSS interactive chip with zero React state overhead.
 */
function SkillChip({ name, accent, accentBg, accentDim }) {
  return (
    <span
      className="group/chip inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold cursor-default transition-all duration-200 hover:-translate-y-0.5 border border-white/10 bg-white/[0.04] text-white/75 hover:text-white"
      style={{
        "--chip-accent": accent,
        "--chip-bg": accentBg,
        "--chip-dim": accentDim,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accentDim;
        e.currentTarget.style.background = accentBg;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform group-hover/chip:scale-125"
        style={{ background: accent }}
      />
      {name}
    </span>
  );
}

/**
 * SkillCard
 * Group container displaying category icon, count badge, and categorized skills.
 */
function SkillCard({ cat }) {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 border border-white/10 bg-white/[0.03] hover:border-violet-500/40 backdrop-blur-sm"
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = cat.accentDim;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
      }}
    >
      {/* Category Top Color Accent Bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl transition-opacity group-hover:opacity-100"
        style={{ background: cat.accent, opacity: 0.85 }}
      />

      <div className="p-6 pt-7">
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 shadow-inner"
            style={{ background: cat.accentBg }}
          >
            {cat.icon}
          </div>
          <span className="text-sm font-extrabold text-white tracking-wide">
            {cat.label}
          </span>
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

/**
 * SkillsMarquee
 * Infinite horizontal banner displaying all skills in a fluid ticker tape.
 */
function SkillsMarquee() {
  const allSkills = SKILL_CATEGORIES.flatMap((c) =>
    c.skills.map((s) => ({ ...s, accent: c.accent }))
  );
  const marqueeList = [...allSkills, ...allSkills];

  return (
    <div className="mt-14">
      <p className="text-center text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 mb-4">
        Continuous Stack Matrix
      </p>
      <div
        className="overflow-hidden relative"
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        <div
          className="flex gap-2.5"
          style={{ width: "max-content", animation: "marquee 26s linear infinite" }}
        >
          {marqueeList.map((skill, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-[11px] font-bold border border-white/10 bg-violet-950/20 text-white/70 whitespace-nowrap flex-shrink-0 hover:text-white transition-colors"
            >
              <span>{skill.icon}</span>
              <span>{skill.name}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Skills Section
 */
export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full mx-auto">
        <SectionHeader label="Skills & Arsenal" title="My Technical Stack" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat) => (
            <SkillCard key={cat.label} cat={cat} />
          ))}
        </div>
        <SkillsMarquee />
      </div>
    </section>
  );
}
