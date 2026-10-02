import { useState, useEffect, useRef } from "react";
import SectionHeader from "../ui/SectionHeader";
import { PERSONAL } from "../../data/portfolioData";

/*
 * EmailJS Configuration
 * Service & Template IDs can be replaced with real keys from emailjs.com
 */
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";

/**
 * Section label helper
 */
function ContactLabel({ text }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-extrabold tracking-[0.18em] uppercase mb-3 text-violet-300">
      <span>{text}</span>
      <span className="flex-1 h-px bg-violet-400/20" />
    </div>
  );
}

/**
 * Left Column: Direct contact info badges & social buttons
 */
function ContactInfoPanel() {
  const displayWebsite = PERSONAL.portfolio.replace(/^https?:\/\//, "");

  const contactList = [
    { icon: "📧", label: "Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}`, clickable: true },
    { icon: "📞", label: "Phone", value: PERSONAL.phone, href: `tel:${PERSONAL.phone}`, clickable: true },
    { icon: "📍", label: "Location", value: PERSONAL.location, href: null, clickable: false },
  ];

  return (
    <div className="relative rounded-2xl overflow-hidden p-6 sm:p-7 border border-violet-500/30 bg-violet-950/10 backdrop-blur-md">
      {/* Top Gradient Shimmer Bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-600 via-purple-400 to-violet-600 rounded-t-2xl" />

      {/* Ambient Corner Glow */}
      <div
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124, 58, 237, 0.2), transparent 70%)" }}
      />

      <ContactLabel text="Get In Touch" />

      {/* Availability Status Badge */}
      <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl mb-5 border border-emerald-500/20 bg-emerald-500/[0.06]">
        <span
          className="w-2 h-2 rounded-full flex-shrink-0 bg-emerald-400"
          style={{ animation: "tl-pulse 1.8s ease-in-out infinite" }}
        />
        <p className="text-[12px] font-semibold text-white/70">
          Ready for <span className="text-emerald-400 font-bold">New Professional Challenges</span>
        </p>
      </div>

      {/* Contact Cards List */}
      <div className="flex flex-col gap-3 mb-6">
        {contactList.map((c) => {
          const Tag = c.clickable ? "a" : "div";
          return (
            <Tag
              key={c.label}
              href={c.href || undefined}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 border border-white/5 bg-white/[0.02] ${
                c.clickable ? "cursor-pointer hover:translate-x-1 hover:border-violet-500/30 hover:bg-white/[0.05]" : "cursor-default"
              }`}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0 bg-violet-600/15 border border-violet-400/20">
                {c.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">{c.label}</p>
                <p className="text-[13px] font-bold text-white/85 mt-0.5 truncate">{c.value}</p>
              </div>
              {c.clickable && <span className="ml-auto text-white/30 text-sm">→</span>}
            </Tag>
          );
        })}
      </div>

      {/* Social Media & Portfolio Links */}
      <ContactLabel text="Find Me On" />
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={PERSONAL.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-[12px] font-extrabold text-white/80 bg-white/5 border border-white/15 hover:border-white/30 hover:text-white transition-all duration-200"
        >
          GitHub
        </a>

        <a
          href={PERSONAL.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-[12px] font-extrabold text-sky-300 bg-sky-500/15 border border-sky-400/30 hover:border-sky-400/50 hover:text-white transition-all duration-200"
        >
          LinkedIn
        </a>

        <a
          href={PERSONAL.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-[12px] font-extrabold text-violet-300 bg-violet-600/15 border border-violet-400/30 hover:border-violet-400/50 hover:text-white transition-all duration-200"
        >
          <span>🌐</span>
          <span>{displayWebsite}</span>
        </a>
      </div>
    </div>
  );
}

/**
 * Right Column: Interactive email submission form
 */
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const sentTimerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(sentTimerRef.current);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in Name, Email, and Message.");
      return;
    }

    setError("");
    setSending(true);

    try {
      if (SERVICE_ID !== "YOUR_SERVICE_ID" && window.emailjs) {
        await window.emailjs.send(SERVICE_ID, TEMPLATE_ID, {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || "Portfolio Inquiry",
          message: form.message,
          to_email: PERSONAL.email,
        });
      } else {
        // Safe fallback using mailto link
        const subjectEnc = encodeURIComponent(form.subject || "Portfolio Inquiry");
        const bodyEnc = encodeURIComponent(
          `Sender: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
        );
        window.open(`mailto:${PERSONAL.email}?subject=${subjectEnc}&body=${bodyEnc}`, "_blank");
      }

      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });

      clearTimeout(sentTimerRef.current);
      sentTimerRef.current = setTimeout(() => setSent(false), 6000);
    } catch {
      setError("Something went wrong while sending. Please reach out directly via email.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="rounded-2xl p-6 sm:p-7 border border-white/10 bg-white/[0.03] backdrop-blur-md">
      <ContactLabel text="Send a Message" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name Input */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="text-[11px] font-extrabold uppercase tracking-wider text-white/40">
            Your Name *
          </label>
          <input
            id="contact-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Murali A"
            required
            className="w-full px-3.5 py-2.5 rounded-xl text-[13px] font-semibold text-white bg-white/[0.04] border border-white/10 focus:border-violet-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="text-[11px] font-extrabold uppercase tracking-wider text-white/40">
            Email Address *
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="murali@example.com"
            required
            className="w-full px-3.5 py-2.5 rounded-xl text-[13px] font-semibold text-white bg-white/[0.04] border border-white/10 focus:border-violet-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Subject Input */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-subject" className="text-[11px] font-extrabold uppercase tracking-wider text-white/40">
            Subject
          </label>
          <input
            id="contact-subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Project Collaboration / Career Opportunity"
            className="w-full px-3.5 py-2.5 rounded-xl text-[13px] font-semibold text-white bg-white/[0.04] border border-white/10 focus:border-violet-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Message Input */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-message" className="text-[11px] font-extrabold uppercase tracking-wider text-white/40">
            Message *
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project or opportunity..."
            rows={5}
            required
            className="w-full px-3.5 py-2.5 rounded-xl text-[13px] font-semibold text-white bg-white/[0.04] border border-white/10 focus:border-violet-500 focus:outline-none transition-colors resize-none leading-relaxed"
          />
        </div>

        {/* Validation / Error Message */}
        {error && (
          <p className="text-[12px] text-rose-400 font-semibold">{error}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={sending}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-[13.5px] font-extrabold text-white transition-all duration-200 hover:scale-[1.01] active:scale-98 disabled:opacity-60 bg-gradient-to-r from-violet-600 to-purple-800 shadow-lg shadow-violet-600/35 cursor-pointer mt-1"
        >
          {sending ? "Sending..." : "Send Message"}
          {!sending && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={15}
              height={15}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          )}
        </button>

        {/* Success Confirmation Toast */}
        {sent && (
          <div className="flex items-center gap-2.5 mt-2 px-4 py-3 rounded-xl text-[13px] font-bold text-emerald-400 border border-emerald-500/25 bg-emerald-500/10">
            <span>✅</span>
            <span>Message sent! I'll get back to you shortly.</span>
          </div>
        )}
      </form>
    </div>
  );
}

/**
 * Contact Section
 */
export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full mx-auto">
        <SectionHeader label="Contact" title="Let's Build Something Together" />
        <p className="text-center text-white/50 text-[13.5px] font-semibold -mt-8 mb-12">
          Got an exciting project or opportunity in mind? I'd love to connect.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <ContactInfoPanel />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
