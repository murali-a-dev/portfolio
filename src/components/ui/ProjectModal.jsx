import { useState, useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("architecture");

  // Handle ESC key press and body scroll locking
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  const tabs = [
    { id: "architecture", label: "Architecture & Flow", icon: "🏗️" },
    { id: "capabilities", label: "Key Capabilities",   icon: "⚡" },
    { id: "stack",        label: "Technology Matrix",  icon: "🛠️" },
    { id: "portals",      label: "Live Portals",       icon: "🌐" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 sm:py-8 transition-all duration-300"
      style={{ background: "rgba(10, 5, 25, 0.82)", backdropFilter: "blur(12px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] transition-all duration-300"
        style={{
          background: "linear-gradient(170deg, rgba(26, 17, 56, 0.96) 0%, rgba(15, 7, 42, 0.98) 100%)",
          border: `1px solid ${project.accentDim}`,
          boxShadow: `0 24px 60px -12px rgba(0,0,0,0.7), 0 0 45px -5px ${project.accent}25`,
        }}
      >
        {/* Ambient Top Glow Line */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: project.gradient || project.accent }}
        />

        {/* Modal Header */}
        <div className="relative p-4 sm:p-6 pb-3 sm:pb-4 border-b border-white/10 flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            <div
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0 p-1.5 sm:p-2 shadow-inner"
              style={{
                background: project.accentBg,
                border: `1px solid ${project.accentDim}`,
              }}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-contain filter drop-shadow"
                />
              ) : (
                <span>{project.icon}</span>
              )}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-black text-white m-0 tracking-tight">
                  {project.name}
                </h3>
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                  style={{
                    color: project.accent,
                    background: project.accentBg,
                    border: `1px solid ${project.accentDim}`,
                  }}
                >
                  {project.badge}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {project.statusText}
                </span>
              </div>
              <p className="text-[12px] sm:text-[13px] text-white/55 font-semibold mt-1">
                {project.subtitle || project.tagline}
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white/60 hover:text-white bg-white/5 hover:bg-white/10 transition-colors border border-white/10 flex-shrink-0 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-5 sm:px-7 pt-3 bg-black/20 border-b border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-1.5 px-3.5 py-2.5 text-[12px] font-bold rounded-t-xl transition-all relative whitespace-nowrap cursor-pointer"
                style={{
                  color: active ? "#ffffff" : "rgba(255,255,255,0.5)",
                  background: active ? "rgba(255,255,255,0.06)" : "transparent",
                  borderBottom: active ? `2px solid ${project.accent}` : "2px solid transparent",
                }}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-5 text-left custom-scrollbar flex-1">
          {/* 1. ARCHITECTURE TAB */}
          {activeTab === "architecture" && (
            <div className="space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-white/40">
                    System Topology & Flow
                  </span>
                  <span className="text-[11px] font-bold text-white/60 px-2.5 py-0.5 rounded bg-white/5 border border-white/10">
                    Microservices & Cloud
                  </span>
                </div>

                {/* Visual Multi-Tier Flow Diagram */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {/* Tier 1: Client */}
                  <div
                    className="p-3.5 rounded-xl border flex flex-col justify-between relative overflow-hidden"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      borderColor: "rgba(255,255,255,0.1)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm">💻</span>
                      <span className="text-[12px] font-black text-white">Client Tier</span>
                    </div>
                    <p className="text-[11.5px] text-white/60 leading-relaxed">
                      {project.architecture?.client || "Responsive Modern Web App"}
                    </p>
                    <span className="mt-2 text-[10px] font-bold text-white/35">
                      Fast SPA • Dynamic State
                    </span>
                  </div>

                  {/* Tier 2: Backend REST Gateway */}
                  <div
                    className="p-3.5 rounded-xl border flex flex-col justify-between relative overflow-hidden"
                    style={{
                      background: project.accentBg,
                      borderColor: project.accentDim,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm">⚡</span>
                      <span className="text-[12px] font-black" style={{ color: project.accent }}>
                        API Gateway
                      </span>
                    </div>
                    <p className="text-[11.5px] text-white/75 leading-relaxed">
                      {project.architecture?.backend || "Express.js REST APIs with Secure Endpoints"}
                    </p>
                    <span className="mt-2 text-[10px] font-bold text-white/45">
                      JWT Auth • Multer • CORS
                    </span>
                  </div>

                  {/* Tier 3: Cloud & Persistence */}
                  <div
                    className="p-3.5 rounded-xl border flex flex-col justify-between relative overflow-hidden"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      borderColor: "rgba(255,255,255,0.1)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm">☁️</span>
                      <span className="text-[12px] font-black text-white">Cloud Storage & DB</span>
                    </div>
                    <p className="text-[11.5px] text-white/60 leading-relaxed">
                      {project.architecture?.database || "Realtime Cloud Database & Asset CDN"}
                    </p>
                    <span className="mt-2 text-[10px] font-bold text-white/35">
                      Real-time Sync • CDN Delivery
                    </span>
                  </div>
                </div>

                {/* Pipeline Flow Bar */}
                <div
                  className="p-3 rounded-xl flex flex-wrap items-center gap-2 text-[11px] sm:text-[11.5px] font-mono border leading-relaxed"
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    borderColor: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  <span className="text-emerald-400 font-bold flex-shrink-0">FLOW ➔</span>
                  <span className="break-words">{project.architecture?.flow}</span>
                </div>
              </div>

              {/* High-Level Overview Paragraph */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <h4 className="text-[12px] font-black uppercase tracking-wider text-white/40 mb-2">
                  System Overview
                </h4>
                <p className="text-[13px] text-white/70 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          )}

          {/* 2. CAPABILITIES TAB */}
          {activeTab === "capabilities" && (
            <div className="space-y-3">
              <h4 className="text-[12px] font-black uppercase tracking-wider text-white/40 mb-1">
                Engineering Highlights & Key Features
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3 hover:border-white/20 transition-colors"
                  >
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-[12px] font-bold flex-shrink-0 mt-0.5"
                      style={{
                        background: project.accentBg,
                        color: project.accent,
                        border: `1px solid ${project.accentDim}`,
                      }}
                    >
                      {idx + 1}
                    </div>
                    <span className="text-[12.5px] font-semibold text-white/80 leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. TECH STACK TAB */}
          {activeTab === "stack" && (
            <div className="space-y-4">
              <h4 className="text-[12px] font-black uppercase tracking-wider text-white/40">
                Core Stack & Dependencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <div
                    key={tech}
                    className="px-3.5 py-2 rounded-xl text-[12px] font-bold flex items-center gap-2 border transition-all"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      borderColor: "rgba(255,255,255,0.12)",
                      color: "#ffffff",
                    }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ background: project.accent }} />
                    {tech}
                  </div>
                ))}
              </div>

              {/* Developer Insights Box */}
              <div
                className="p-4 rounded-2xl border"
                style={{
                  background: project.accentBg,
                  borderColor: project.accentDim,
                }}
              >
                <p className="text-[12px] font-black mb-1" style={{ color: project.accent }}>
                  💡 Modern Architecture Design
                </p>
                <p className="text-[11.5px] text-white/70 leading-relaxed">
                  Engineered with production-ready patterns including strict separation of concerns,
                  stateless authentication token protocols, responsive mobile-first views, and real-time database state sync.
                </p>
              </div>
            </div>
          )}

          {/* 4. LIVE PORTALS TAB */}
          {activeTab === "portals" && (
            <div className="space-y-3">
              <h4 className="text-[12px] font-black uppercase tracking-wider text-white/40 mb-1">
                Sub-Portals & Application Endpoints
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {project.portals?.map((portal, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl p-2 rounded-xl bg-white/5 border border-white/10 flex-shrink-0">
                        {portal.icon}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h5 className="text-[14px] font-black text-white m-0">
                            {portal.name}
                          </h5>
                          <span
                            className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full"
                            style={{
                              color: project.accent,
                              background: project.accentBg,
                              border: `1px solid ${project.accentDim}`,
                            }}
                          >
                            {portal.badge}
                          </span>
                        </div>
                        <p className="text-[11.5px] text-white/55 mt-1 leading-relaxed max-w-lg">
                          {portal.desc}
                        </p>
                      </div>
                    </div>

                    <a
                      href={portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-[11.5px] font-extrabold text-white transition-all duration-200 hover:scale-105 active:scale-95 flex-shrink-0 self-start sm:self-auto"
                      style={{
                        background: project.gradient || project.accent,
                        boxShadow: `0 4px 14px ${project.accent}30`,
                      }}
                    >
                      Open Portal
                      <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Bar with CTAs */}
        <div className="p-3.5 sm:p-5 bg-black/40 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11.5px] sm:text-[12px] font-bold text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub Repo
              </a>
            )}
            {project.adminLink && (
              <a
                href={project.adminLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11.5px] sm:text-[12px] font-bold text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>👨‍🍳</span> Admin / KDS
              </a>
            )}
          </div>

          <div className="flex items-center justify-end gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-3.5 py-2.5 rounded-xl text-[12px] font-bold text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-[12px] sm:text-[12.5px] font-extrabold text-white transition-all duration-200 hover:scale-[1.02] active:scale-98 flex-1 sm:flex-initial"
              style={{
                background: project.gradient || project.accent,
                boxShadow: `0 4px 18px ${project.accent}45`,
              }}
            >
              Launch Live App
              <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
