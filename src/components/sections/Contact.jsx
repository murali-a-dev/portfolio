import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import AboutLabel from "../ui/AboutLabel";
import { PERSONAL } from "../../data/portfolioData";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || "";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE = 2000;

function ContactInfoPanel() {
  const portfolioHost = new URL(PERSONAL.portfolio).hostname;

  const contacts = [
    { icon: "📧", label: "Email",    value: PERSONAL.email,    href: `mailto:${PERSONAL.email}`, clickable: true  },
    { icon: "📞", label: "Phone",    value: PERSONAL.phone,    href: `tel:${PERSONAL.phone}`,    clickable: true  },
    { icon: "📍", label: "Location", value: PERSONAL.location, href: null,                       clickable: false },
  ];

  return (
    <div
      className="relative rounded-2xl overflow-hidden p-7"
      style={{ border: "1px solid rgba(124,58,237,0.35)", background: "rgba(124,58,237,0.06)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(90deg,#7c3aed,#a78bfa,#7c3aed)", borderRadius: "20px 20px 0 0" }}
      />
      <div
        className="absolute top-[-50px] right-[-50px] w-40 h-40 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(124,58,237,0.2),transparent 70%)" }}
      />

      <AboutLabel text="Get In Touch" />

      {/* Availability */}
      <div
        className="flex items-center gap-2.5 px-4 py-3 rounded-xl mb-5"
        style={{ border: "1px solid rgba(52,211,153,0.2)", background: "rgba(52,211,153,0.06)" }}
      >
        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#34d399", animation: "tl-pulse 1.8s ease-in-out infinite" }} />
        <p className="text-[12px] font-semibold text-white/65">
          Ready for <span className="text-emerald-400 font-bold">New Professional Challenges</span>
        </p>
      </div>

      <div className="flex flex-col gap-3 mb-6">
        {contacts.map((c) => {
          const Tag = c.clickable ? "a" : "div";
          return (
            <Tag
              key={c.label}
              href={c.href || undefined}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${c.clickable ? "cursor-pointer hover:translate-x-1" : "cursor-default"}`}
              style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", textDecoration: "none" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)" }}
              >
                {c.icon}
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">{c.label}</p>
                <p className="text-[13px] font-bold text-white/80 mt-0.5">{c.value}</p>
              </div>
              {c.clickable && <span className="ml-auto text-white/25 text-sm">→</span>}
            </Tag>
          );
        })}
      </div>

      <AboutLabel text="Find Me On" />
      <div className="grid grid-cols-2 gap-2.5">
        {[
          { label: "GitHub",   href: PERSONAL.github,    color: "rgba(255,255,255,0.75)", accent: "rgba(255,255,255,0.12)", full: false },
          { label: "LinkedIn", href: PERSONAL.linkedin,  color: "#38BDF8",                accent: "rgba(56,189,248,0.22)",  full: false },
          { label: `🌐  ${portfolioHost}`, href: PERSONAL.portfolio, color: "#a78bfa", accent: "rgba(167,139,250,0.22)", full: true },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-[12px] font-extrabold transition-all duration-200 hover:brightness-125 ${s.full ? "col-span-2" : ""}`}
            style={{ color: s.color, border: `1px solid ${s.accent}`, background: `${s.accent}55`, textDecoration: "none" }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function ContactForm() {
  const [form,     setForm]     = useState({ name: "", email: "", subject: "", message: "" });
  const [sent,     setSent]     = useState(false);
  const [sending,  setSending]  = useState(false);
  const [error,    setError]    = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    /* Validate */
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in Name, Email, and Message.");
      return;
    }
    if (!EMAIL_REGEX.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSending(true);

    try {
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY && window.emailjs) {
        await window.emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name:  form.name,
            from_email: form.email,
            subject:    form.subject || "Portfolio Contact",
            message:    form.message,
            to_email:   PERSONAL.email,
          },
          PUBLIC_KEY
        );
      } else {
        /* Fallback: open default mail client */
        const mailto = `mailto:${PERSONAL.email}?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
        window.open(mailto, "_blank");
      }
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 8000);
    } catch {
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  const inputStyle = {
    background:  "rgba(255,255,255,0.04)",
    border:      "1px solid rgba(255,255,255,0.1)",
    borderRadius:"10px",
    padding:     "11px 14px",
    color:       "#fff",
    fontSize:    "13px",
    fontFamily:  "Nunito, sans-serif",
    fontWeight:  600,
    outline:     "none",
    width:       "100%",
    transition:  "border-color .2s, background .2s",
  };

  const fields = [
    { label: "Your Name",      name: "name",    type: "input",    placeholder: "Murali A" },
    { label: "Email Address",  name: "email",   type: "input",    placeholder: "murali@example.com" },
    { label: "Subject",        name: "subject", type: "input",    placeholder: "Project Collaboration / Job Opportunity" },
    { label: "Message",        name: "message", type: "textarea", placeholder: "Tell me about your project or opportunity..." },
  ];

  return (
    <div
      className="rounded-2xl p-7"
      style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}
    >
      <AboutLabel text="Send a Message" />
      <div className="flex flex-col gap-4 mb-5">
        {fields.map((f) => (
          <div key={f.name} className="flex flex-col gap-1.5">
            <label className="text-[11px] font-extrabold uppercase tracking-wider text-white/40">
              {f.label}
            </label>
            {f.type === "input" ? (
              <input
                name={f.name}
                value={form[f.name]}
                onChange={handleChange}
                placeholder={f.placeholder}
                style={inputStyle}
              />
            ) : (
              <>
                <textarea
                  name={f.name}
                  value={form[f.name]}
                  onChange={handleChange}
                  placeholder={f.placeholder}
                  maxLength={MAX_MESSAGE}
                  rows={5}
                  style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }}
                />
                <span className="text-[10px] text-white/30 text-right font-mono">
                  {form.message.length}/{MAX_MESSAGE}
                </span>
              </>
            )}
          </div>
        ))}
      </div>

      {error && <p className="text-[12px] text-red-400 mb-3 font-semibold">{error}</p>}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={sending}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-[13.5px] font-extrabold text-white transition-all duration-200 hover:scale-[1.02] active:scale-100 disabled:opacity-60"
        style={{
          background:  "linear-gradient(135deg,#7c3aed,#4c1d95)",
          boxShadow:   "0 4px 18px rgba(124,58,237,0.45)",
          border:      "none",
          cursor:      sending ? "wait" : "pointer",
        }}
      >
        {sending ? "Sending..." : "Send Message"}
        {!sending && (
          <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        )}
      </button>

      {sent && (
        <div
          className="flex items-center gap-2.5 mt-4 px-4 py-3 rounded-xl text-[13px] font-bold transition-all duration-500"
          style={{ color: "#34d399", border: "1px solid rgba(52,211,153,0.25)", background: "rgba(52,211,153,0.07)" }}
        >
          ✅&nbsp; Message sent! I'll get back to you soon.
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full mx-auto">
        <SectionHeader label="Contact" title="Let's Build Something Together" />
        <p className="text-center text-white/45 text-[13.5px] font-semibold -mt-8 mb-12">
          Got a project in mind? I'd love to hear about it.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          <ContactInfoPanel />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
