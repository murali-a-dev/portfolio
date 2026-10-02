/**
 * AboutLabel — shared section sub-label component
 * Used in About.jsx and Contact.jsx
 */
export default function AboutLabel({ text }) {
  return (
    <div
      className="flex items-center gap-2 text-[10px] font-extrabold tracking-[0.18em] uppercase mb-3"
      style={{ color: "#a78bfa" }}
    >
      {text}
      <span className="flex-1 h-px" style={{ background: "rgba(167,139,250,0.2)" }} />
    </div>
  );
}
