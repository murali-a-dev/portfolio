import SectionHeader from "../ui/SectionHeader";
import { JOBS } from "../../data/portfolioData";

function TimelineCard({ job }) {
  return (
    <div className="relative experience-card">
      {/* Dot */}
      <div className="absolute -left-[33px] top-5 w-4 h-4 flex items-center justify-center">
        {job.current ? (
          <>
            <span className="absolute w-4 h-4 rounded-full" style={{ background: "#7c3aed", border: "2px solid #a78bfa" }} />
            <span className="absolute w-4 h-4 rounded-full" style={{ border: "1.5px solid rgba(167,139,250,0.45)", animation: "tl-ripple 2s ease-out infinite" }} />
          </>
        ) : (
          <span className="w-3.5 h-3.5 rounded-full" style={{ background: "#0f072a", border: "2px solid #7c3aed" }} />
        )}
      </div>

      {/* Card */}
      <div
        className="rounded-2xl p-5 sm:p-6 transition-all duration-300"
        style={{
          border: "1px solid rgba(255,255,255,0.07)",
          background: "rgba(255,255,255,0.03)",
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
          <p className="text-[15px] font-black text-white">{job.role}</p>
          <span
            className="text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap"
            style={{ color: "#a78bfa", background: "rgba(124,58,237,0.12)", border: "1px solid rgba(167,139,250,0.2)" }}
          >
            {job.period}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[13px] font-bold text-white/55">{job.company}</span>
          <span className="w-1 h-1 rounded-full bg-white/25" />
          <span className="text-[12px] font-semibold text-white/38">{job.location}</span>
          {job.current && (
            <>
              <span className="w-1 h-1 rounded-full bg-white/25" />
              <span
                className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                style={{ color: "#34d399", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.25)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#34d399", animation: "tl-pulse 1.8s ease-in-out infinite" }} />
                Currently Here
              </span>
            </>
          )}
        </div>

        <div className="h-px mb-4" style={{ background: "rgba(255,255,255,0.06)" }} />

        <ul className="m-0 p-0 list-none flex flex-col gap-2">
          {job.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[12.5px] text-white/62 leading-relaxed">
              <span className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-[7px]" style={{ background: "#7c3aed" }} />
              {h}
            </li>
          ))}
        </ul>

        {job.award && (
          <div
            className="flex items-center gap-2.5 mt-4 px-4 py-2.5 rounded-xl"
            style={{ background: "rgba(250,199,117,0.07)", border: "1px solid rgba(250,199,117,0.18)" }}
          >
            <span className="text-lg">🏆</span>
            <span className="text-[12px] font-extrabold" style={{ color: "#FAC775" }}>{job.award}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full mx-auto">
        <SectionHeader label="Work Timeline" title="Where I've Built Things" />
        <div className="relative pl-8">
          {/* Timeline vertical line — ends at last card, not cut off */}
          <div
            className="absolute left-[7px] top-2 w-[2px] rounded-full"
            style={{
              bottom: "2rem",
              background: "linear-gradient(to bottom, #7c3aed 0%, rgba(124,58,237,0.12) 100%)",
            }}
          />
          <div className="flex flex-col gap-8">
            {JOBS.map((job) => (
              /* Unique key using company + period to handle multiple roles at same company */
              <TimelineCard key={`${job.company}-${job.period}`} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
