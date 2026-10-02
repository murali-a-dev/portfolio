import SectionHeader from "../ui/SectionHeader";
import { AboutPhotoCircle } from "../ui/PhotoCard";
import { PERSONAL, EDUCATION, ACHIEVEMENTS } from "../../data/portfolioData";
import muraliPhoto from "../../assets/murali-profile.jpg";

/**
 * Visual section label with trailing horizontal rule
 */
function AboutLabel({ text }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-extrabold tracking-[0.18em] uppercase mb-3 text-violet-300">
      <span>{text}</span>
      <span className="flex-1 h-px bg-violet-400/20" />
    </div>
  );
}

/**
 * Profile identity card showcasing contact badges and avatar
 */
function ProfileCard() {
  const displayWebsite = PERSONAL.portfolio.replace(/^https?:\/\//, "");

  const contactRows = [
    { icon: "📍", text: PERSONAL.location },
    { icon: "📧", text: PERSONAL.email },
    { icon: "📞", text: PERSONAL.phone },
    { icon: "🌐", text: displayWebsite },
  ];

  const socialLinks = [
    { label: "GitHub", href: PERSONAL.github },
    { label: "LinkedIn", href: PERSONAL.linkedin },
  ];

  return (
    <div className="relative rounded-2xl overflow-hidden text-center p-6 sm:p-8 border border-violet-500/30 bg-violet-950/10 backdrop-blur-md">
      {/* Top shimmer accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-600 via-purple-400 to-violet-600 rounded-t-2xl" />

      {/* Top ambient glow */}
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.25), transparent 70%)" }}
      />

      {/* Interactive Photo Avatar */}
      <AboutPhotoCircle src={muraliPhoto} alt={PERSONAL.name} />

      <h3 className="text-xl font-black text-white mb-1">{PERSONAL.name}</h3>
      <span className="inline-block text-[11px] font-bold px-4 py-1 rounded-full mb-5 text-violet-300 bg-violet-600/15 border border-violet-400/25">
        {PERSONAL.role}
      </span>

      <div className="h-px bg-white/10 mb-5" />

      {/* Contact Quick Details */}
      <div className="flex flex-col gap-3 mb-6 text-left">
        {contactRows.map((item) => (
          <div key={item.icon} className="flex items-center gap-3 text-[12px] text-white/70 font-semibold">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 bg-violet-600/15 border border-violet-400/20">
              {item.icon}
            </div>
            <span className="break-all">{item.text}</span>
          </div>
        ))}
      </div>

      {/* Social Outlets */}
      <div className="flex gap-2.5 mb-3">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center py-2.5 rounded-xl text-[12px] font-bold text-white/75 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200"
          >
            {s.label}
          </a>
        ))}
      </div>

      {/* Resume Download Action */}
      <a
        href={PERSONAL.resume}
        download="Murali_A.pdf"
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[12px] font-bold text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={14}
          height={14}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
        Download Resume
      </a>
    </div>
  );
}

/**
 * About Section
 * Highlights engineering background, formal education, and honors.
 */
export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full mx-auto">
        <SectionHeader label="About Me" title="The Engineer Behind the Code" />

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 items-start">
          {/* Left Column: Profile Card */}
          <ProfileCard />

          {/* Right Column: Narrative, Academic Background & Accolades */}
          <div className="flex flex-col gap-5">
            {/* Professional Biography */}
            <div className="rounded-2xl p-6 border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <AboutLabel text="Bio" />
              <div className="text-[13.5px] text-white/65 leading-[1.85] space-y-4">
                {PERSONAL.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Academic Credentials */}
            <div className="relative rounded-2xl p-6 overflow-hidden border border-sky-500/20 bg-sky-500/[0.04]">
              <div className="absolute top-0 left-0 bottom-0 w-[3px] rounded-l-2xl bg-sky-400" />
              <AboutLabel text="Education" />
              <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                <p className="text-[14px] font-black text-white">🎓 {EDUCATION.degree}</p>
                <span className="text-[13px] font-black px-3 py-1 rounded-full text-sky-400 bg-sky-500/10 border border-sky-400/25">
                  {EDUCATION.score}
                </span>
              </div>
              <p className="text-[12px] text-white/55 font-semibold">{EDUCATION.college}</p>
              <p className="text-[11px] text-white/35 font-semibold mt-1">{EDUCATION.period}</p>
            </div>

            {/* Notable Accolades & Milestones */}
            <div className="rounded-2xl p-6 border border-white/10 bg-white/[0.03]">
              <AboutLabel text="Achievements" />
              <div className="flex flex-col gap-3">
                {ACHIEVEMENTS.map((a) => (
                  <div
                    key={a.title}
                    className="flex items-center gap-3.5 px-4 py-3 rounded-xl cursor-default transition-all duration-200 border border-white/5 bg-white/[0.02] hover:border-violet-500/30 hover:bg-white/[0.04]"
                  >
                    <span className="text-[22px] flex-shrink-0">{a.emoji}</span>
                    <div>
                      <p className="text-[13px] font-extrabold text-white">{a.title}</p>
                      <p className="text-[11px] text-white/45 font-semibold mt-0.5">{a.sub}</p>
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
