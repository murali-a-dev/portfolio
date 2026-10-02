import SectionHeader from "../ui/SectionHeader";
import AboutLabel from "../ui/AboutLabel";
import { AboutPhotoCircle } from "../ui/PhotoCard";
import { PERSONAL, EDUCATION, ACHIEVEMENTS } from "../../data/portfolioData";
import muraliPhoto from "../../assets/murali-profile.jpg";

function ProfileCard() {
  const portfolioHost = new URL(PERSONAL.portfolio).hostname;

  return (
    <div
      className="relative rounded-2xl overflow-hidden text-center p-8"
      style={{ border: "1px solid rgba(124,58,237,0.35)", background: "rgba(124,58,237,0.06)" }}
    >
      {/* Top shimmer bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(90deg,#7c3aed,#a78bfa,#7c3aed)", borderRadius: "22px 22px 0 0" }}
      />
      {/* Background glow */}
      <div
        className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-44 h-44 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(124,58,237,0.22),transparent 70%)" }}
      />

      <AboutPhotoCircle src={muraliPhoto} alt="Murali A" />

      <p className="text-[20px] font-black text-white mb-1">{PERSONAL.name}</p>
      <span
        className="inline-block text-[11px] font-bold px-4 py-1 rounded-full mb-5"
        style={{ color: "#a78bfa", background: "rgba(124,58,237,0.15)", border: "1px solid rgba(167,139,250,0.25)" }}
      >
        {PERSONAL.role}
      </span>

      <div className="h-px mb-5" style={{ background: "rgba(255,255,255,0.07)" }} />

      {/* Info rows — phone omitted from public display for privacy */}
      <div className="flex flex-col gap-3 mb-6 text-left">
        {[
          { icon: "📍", text: PERSONAL.location },
          { icon: "📧", text: PERSONAL.email },
          { icon: "🌐", text: portfolioHost },
        ].map((item) => (
          <div key={item.icon} className="flex items-center gap-3 text-[12px] text-white/62 font-semibold">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
              style={{ background: "rgba(124,58,237,0.14)" }}
            >
              {item.icon}
            </div>
            <span className="break-all">{item.text}</span>
          </div>
        ))}
      </div>

      {/* Social buttons */}
      <div className="flex gap-2.5 mb-3">
        {[
          { label: "GitHub",   href: PERSONAL.github   },
          { label: "LinkedIn", href: PERSONAL.linkedin  },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center py-2.5 rounded-xl text-[12px] font-bold text-white/70 hover:text-white transition-all duration-200"
            style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)" }}
          >
            {s.label}
          </a>
        ))}
      </div>

      {/* Resume download */}
      <a
        href={PERSONAL.resume}
        download="Murali_Resume.pdf"
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[12px] font-bold transition-all duration-200 hover:brightness-110"
        style={{ color: "#34d399", border: "1px solid rgba(52,211,153,0.3)", background: "rgba(52,211,153,0.07)" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        </svg>
        Download Resume
      </a>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full mx-auto">
        <SectionHeader label="About Me" title="The Engineer Behind the Code" />

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 items-start">

          {/* Left — Profile card */}
          <ProfileCard />

          {/* Right — Bio, Education, Achievements */}
          <div className="flex flex-col gap-5">

            {/* Bio */}
            <div
              className="rounded-2xl p-6"
              style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}
            >
              <AboutLabel text="Bio" />
              <p className="text-[13.5px] text-white/62 leading-[1.85]">
                I'm a <span className="text-purple-400 font-bold">Full-Stack Web Developer</span> with{" "}
                <span className="text-purple-400 font-bold">2+ years</span> of experience building
                high-performance web architectures and fluid user experiences. My core stack revolves around{" "}
                <span className="text-purple-400 font-bold">React.js</span>,{" "}
                <span className="text-purple-400 font-bold">Vue 3</span>,{" "}
                <span className="text-purple-400 font-bold">Tailwind CSS v4</span>, and{" "}
                <span className="text-purple-400 font-bold">Node.js</span> — backed by{" "}
                <span className="text-purple-400 font-bold">Firebase</span> for scalable cloud infrastructure.
                <br /><br />
                I care deeply about the intersection of performance and design — writing code that is both
                maintainable and visually expressive. When I'm not engineering systems at{" "}
                <span className="text-purple-400 font-bold">BMTechnovations</span>, I'm exploring new frontend
                patterns, building side projects, or sharpening my design sensibility through photography.
              </p>
            </div>

            {/* Education */}
            <div
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{ border: "1px solid rgba(56,189,248,0.2)", background: "rgba(56,189,248,0.04)" }}
            >
              <div className="absolute top-0 left-0 bottom-0 w-[3px] rounded-l-2xl" style={{ background: "#38BDF8" }} />
              <AboutLabel text="Education" />
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <p className="text-[14px] font-black text-white">🎓 {EDUCATION.degree}</p>
                <span
                  className="text-[13px] font-black px-3 py-1 rounded-full"
                  style={{ color: "#38BDF8", background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.25)" }}
                >
                  {EDUCATION.score}
                </span>
              </div>
              <p className="text-[12px] text-white/50 font-semibold">{EDUCATION.college}</p>
              <p className="text-[11px] text-white/32 font-semibold mt-1">{EDUCATION.period}</p>
            </div>

            {/* Achievements */}
            <div
              className="rounded-2xl p-6"
              style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}
            >
              <AboutLabel text="Achievements" />
              <div className="flex flex-col gap-3">
                {ACHIEVEMENTS.map((a) => (
                  <div
                    key={a.title}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-default transition-all duration-200 hover:border-purple-500/30"
                    style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
                  >
                    <span className="text-[22px] flex-shrink-0">{a.emoji}</span>
                    <div>
                      <p className="text-[13px] font-extrabold text-white">{a.title}</p>
                      <p className="text-[11px] text-white/40 font-semibold mt-0.5">{a.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
