import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import ProjectModal from "../ui/ProjectModal";
import { PROJECTS, PERSONAL } from "../../data/portfolioData";

function TechChip({ name, accent }) {
  return (
    <span
      className="tech-chip inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold cursor-default transition-all duration-200"
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.03)",
        color: "rgba(255,255,255,0.72)",
        "--chip-accent": accent,
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
      {name}
    </span>
  );
}

export default function Projects() {
  const [selectedModalProject, setSelectedModalProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-3.5 sm:px-6 lg:px-8 py-20 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] md:w-[650px] h-[350px] rounded-full pointer-events-none blur-[140px] -z-10 opacity-25"
        style={{ background: "radial-gradient(circle, #7c3aed 0%, #f97316 100%)" }}
      />

      <div className="max-w-6xl w-full mx-auto space-y-16">
        {/* Section Header */}
        <div>
          <SectionHeader label="Production Architectures" title="Featured Systems" />
          <p className="text-center text-white/55 text-[13px] sm:text-[14.5px] max-w-2xl mx-auto -mt-8 sm:-mt-9 px-4 leading-relaxed font-medium">
            Full-stack enterprise architectures, real-time operations engines, and live multi-portal deployments engineered from concept to production.
          </p>
        </div>

        {/* Dual Flagship Project Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="relative rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-2xl"
              style={{
                border:     `1px solid ${project.accentDim}`,
                background: "linear-gradient(165deg, rgba(26, 17, 56, 0.85) 0%, rgba(13, 6, 36, 0.95) 100%)",
                boxShadow:  `0 20px 50px -15px rgba(0,0,0,0.65), 0 0 35px -8px ${project.accent}22`,
              }}
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: project.gradient || project.accent }}
              />
              {/* Ambient Inner Glow */}
              <div
                className="absolute -top-24 -right-24 w-60 h-60 rounded-full pointer-events-none blur-3xl opacity-20 group-hover:opacity-35 transition-opacity"
                style={{ background: project.accent }}
              />

              <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                    <span
                      className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{
                        color: project.accent,
                        background: project.accentBg,
                        border: `1px solid ${project.accentDim}`,
                      }}
                    >
                      {project.badge}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {project.statusText}
                    </span>
                  </div>

                  {/* Project Artwork */}
                  <div
                    className="relative w-full rounded-2xl p-4 sm:p-6 mb-5 flex flex-col items-center justify-center border overflow-hidden transition-all duration-300 group-hover:border-white/20"
                    style={{
                      background: `radial-gradient(circle at center, ${project.accent}18 0%, rgba(10, 4, 28, 0.7) 80%)`,
                      borderColor: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center p-2">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)] transform group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Dynamic portal count from data */}
                    <div className="w-full mt-4 pt-3 border-t border-white/10">
                      <div className="flex items-center justify-between gap-2 mb-2 px-1">
                        <span className="text-[10px] font-black uppercase tracking-wider text-white/45">
                          ⚡ {project.portals?.length} Integrated Multi-Tier Apps
                        </span>
                        <span className="text-[9px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                          Live Ecosystem
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-2">
                        {project.portals?.map((portal, idx) => (
                          <a
                            key={idx}
                            href={portal.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 sm:p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-center transition-all flex items-center sm:flex-col justify-start sm:justify-center gap-2 sm:gap-1 group/p"
                          >
                            <span className="text-sm sm:text-base">{portal.icon}</span>
                            <div className="text-left sm:text-center min-w-0">
                              <span className="text-[10.5px] font-extrabold text-white/90 group-hover/p:text-violet-300 transition-colors block truncate">
                                {portal.badge}
                              </span>
                              <span className="text-[9px] text-white/45 block truncate">
                                {portal.name}
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight m-0">
                    {project.name}
                  </h3>
                  <p
                    className="text-[12.5px] sm:text-[13.5px] font-bold mt-1 mb-3"
                    style={{ color: project.accent }}
                  >
                    {project.subtitle || project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-[12.5px] sm:text-[13px] text-white/65 leading-[1.7] mb-5">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.slice(0, 3).map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11.5px] sm:text-[12px] text-white/80">
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black flex-shrink-0 mt-0.5"
                          style={{
                            background: project.accentBg,
                            color: project.accent,
                            border: `1px solid ${project.accentDim}`,
                          }}
                        >
                          ✓
                        </span>
                        <span className="leading-snug">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.slice(0, 6).map((s) => (
                      <TechChip key={s} name={s} accent={project.accent} />
                    ))}
                    {project.stack.length > 6 && (
                      <span className="text-[10px] font-bold text-white/40 self-center px-1">
                        +{project.stack.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-[12.5px] font-extrabold text-white transition-all duration-200 hover:scale-[1.02] active:scale-98 cursor-pointer shadow-lg w-full sm:w-auto flex-1"
                      style={{
                        background: project.gradient || project.accent,
                        boxShadow: `0 4px 18px ${project.accent}40`,
                      }}
                    >
                      <span>Launch Web App</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelectedModalProject(project)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-[12px] font-bold text-white bg-white/5 hover:bg-white/10 transition-all border border-white/15 hover:border-white/30 cursor-pointer w-full sm:w-auto"
                    >
                      <span>📋 Architecture & Flow</span>
                    </button>
                  </div>

                  {/* Portal quick-links */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-white/40 mr-1">Apps:</span>
                    {project.portals?.map((portal, idx) => (
                      <a
                        key={idx}
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-white/75 hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/25 transition-all"
                      >
                        <span className="text-xs">{portal.icon}</span>
                        <span>{portal.badge}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="opacity-40">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Banner */}
        <div className="pt-4 sm:pt-6">
          <div
            className="relative rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(28, 18, 62, 0.7) 0%, rgba(15, 7, 42, 0.9) 100%)",
              borderColor: "rgba(167, 139, 250, 0.25)",
              boxShadow: "0 20px 50px -15px rgba(0,0,0,0.6), 0 0 40px -10px rgba(124,58,237,0.18)",
            }}
          >
            <div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none blur-3xl opacity-20"
              style={{ background: "#7c3aed" }}
            />
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center flex-shrink-0 p-3.5 shadow-inner">
                <svg className="w-full h-full fill-white" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div className="space-y-1.5 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10.5px] font-extrabold uppercase tracking-widest text-violet-300 bg-violet-500/15 border border-violet-500/25">
                  <span>✦</span>
                  <span>More Repositories & Code</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight m-0">
                  Looking for more projects?
                </h4>
                <p className="text-[13px] sm:text-[13.5px] text-white/65 leading-relaxed m-0">
                  I have several web applications, experimental features, UI prototypes, and utilities open-sourced on my GitHub profile. Feel free to explore my repositories and inspect the code!
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto relative z-10 flex-shrink-0">
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-[13px] font-extrabold text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl w-full sm:w-auto cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                  boxShadow: "0 8px 24px -4px rgba(124, 58, 237, 0.45)",
                }}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>Visit My GitHub Profile</span>
                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedModalProject}
        onClose={() => setSelectedModalProject(null)}
      />
    </section>
  );
}
