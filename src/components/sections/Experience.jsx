import SectionHeader from "../ui/SectionHeader";
import { JOBS } from "../../data/portfolioData";

/**
 * TimelineCard
 * Renders individual job milestone with pulsing active badge, location & bullet points.
 */
function TimelineCard({ job }) {
  return (
    <div className="relative group">
      {/* Timeline Node Indicator */}
      <div className="absolute -left-[33px] top-5 w-4 h-4 flex items-center justify-center">
        {job.current ? (
          <>
            <span
              className="absolute w-4 h-4 rounded-full bg-violet-600 border-2 border-violet-300"
            />
            <span
              className="absolute w-4 h-4 rounded-full border border-violet-400/50"
              style={{ animation: "tl-ripple 2s ease-out infinite" }}
            />
          </>
        ) : (
          <span
            className="w-3.5 h-3.5 rounded-full bg-[#0f072a] border-2 border-violet-600"
          />
        )}
      </div>

      {/* Main Experience Card */}
      <div className="rounded-2xl p-5 sm:p-6 transition-all duration-300 border border-white/10 bg-white/[0.03] group-hover:translate-x-1 group-hover:border-violet-500/40 backdrop-blur-sm">
        {/* Role & Duration Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
          <h3 className="text-[15px] font-black text-white">{job.role}</h3>
          <span className="text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap text-violet-300 bg-violet-600/15 border border-violet-400/20">
            {job.period}
          </span>
        </div>

        {/* Company, Location & Current Status Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[13px] font-bold text-white/70">{job.company}</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span className="text-[12px] font-semibold text-white/45">{job.location}</span>

          {job.current && (
            <>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-emerald-400 bg-emerald-500/10 border border-emerald-500/25">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                  style={{ animation: "tl-pulse 1.8s ease-in-out infinite" }}
                />
                Currently Active
              </span>
            </>
          )}
        </div>

        <div className="h-px bg-white/10 mb-4" />

        {/* Key Role Highlights & Impact */}
        <ul className="m-0 p-0 list-none flex flex-col gap-2">
          {job.highlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-[12.5px] text-white/65 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 bg-violet-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Achievement Award Callout */}
        {job.award && (
          <div className="flex items-center gap-2.5 mt-4 px-4 py-2.5 rounded-xl border border-amber-400/25 bg-amber-400/[0.08]">
            <span className="text-lg">🏆</span>
            <span className="text-[12px] font-extrabold text-amber-300">{job.award}</span>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Experience Section
 */
export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full mx-auto">
        <SectionHeader label="Work Timeline" title="Where I've Built Things" />

        <div className="relative pl-8">
          {/* Vertical Track Line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-[2px] rounded-full"
            style={{
              background: "linear-gradient(to bottom, #7c3aed 0%, rgba(124, 58, 237, 0.15) 100%)",
            }}
          />

          <div className="flex flex-col gap-8">
            {JOBS.map((job) => (
              <TimelineCard key={job.company} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
