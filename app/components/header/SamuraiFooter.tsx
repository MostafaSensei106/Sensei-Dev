"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, Facebook, Twitter, ArrowUpRight, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";

export default function SamuraiFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: Github, href: `https://github.com/${PORTFOLIO_DATA.profile.contact.github}`, color: "text-primary" },
    { name: "LinkedIn", icon: Linkedin, href: `${PORTFOLIO_DATA.profile.contact.linkedin}`, color: "text-[#0077b5]" },
    { name: "WhatsApp", icon: MessageCircle, href: `https://wa.me/${PORTFOLIO_DATA.profile.contact.whatsapp}`, color: "text-[#25d366]" },
    { name: "Facebook", icon: Facebook, href: `${PORTFOLIO_DATA.profile.contact.facebook}`, color: "text-[#1877f2]" },
    { name: "X", icon: Twitter, href: `${PORTFOLIO_DATA.profile.contact.x}`, color: "text-white" },
  ];

  return (
    <footer className="relative bg-background pt-32 pb-12 px-6 md:px-20 overflow-hidden border-t border-white/5">
      {/* Background Torii Silhouette */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140vw] h-[70vh] opacity-[0.02] pointer-events-none select-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
          <path d="M5,25 Q50,15 95,25 L95,32 Q50,22 5,32 Z M20,32 L20,100 M80,32 L80,100 M15,50 L85,50" />
        </svg>
      </div>

      {/* Background 終わり in massive faded text */}
      <div
        className="absolute right-0 bottom-10 vertical-text font-black text-[20vw] opacity-[0.03] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        終わり
      </div>

      {/* Decorative speed lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[15%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/3 to-transparent" />
        <div className="absolute top-[60%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-[85%] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/3 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Brand Column */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-primary" />
                <span className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase font-bold">
                  The End of the Path
                </span>
              </div>

              <h2 className="font-display text-6xl sm:text-7xl md:text-9xl font-black uppercase leading-[0.8] mb-12 tracking-tighter">
                Forge <br /> <span className="text-primary italic">Together.</span>
              </h2>

              {/* Social Links — sharp-edged tags */}
              <div className="flex flex-wrap gap-3 mb-16">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 hover:border-primary/40 transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                    <span className="font-mono font-bold uppercase tracking-[0.15em] text-[10px]">
                      {social.name}
                    </span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 group-hover:translate-y-0"
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Form Column — Mission Briefing style */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative bg-surface/60 backdrop-blur-xl border border-white/5 p-8 md:p-12 group"
          >
            {/* Corner bracket accents */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary/40" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary/40" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary/40" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary/40" />

            {/* Background mail icon */}
            <div className="absolute top-4 right-4 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
              <Mail size={120} className="text-primary" />
            </div>

            {/* Briefing header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-6 h-[2px] bg-primary" />
              <span className="font-mono text-[9px] text-primary tracking-[0.4em] uppercase font-bold">
                Mission Briefing
              </span>
            </div>
            <h3 className="font-display text-3xl font-black mb-8 uppercase tracking-tight text-white">
              Seal Intent
            </h3>

            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => {
                e.preventDefault();

                const form = e.currentTarget;
                const formData = new FormData(form);

                const name = formData.get("name")?.toString() || "";
                const message = formData.get("message")?.toString() || "";

                const subject = encodeURIComponent(`Inquiry from ${name}`);
                const body = encodeURIComponent(message || "");

                const mailto = `mailto:${PORTFOLIO_DATA.profile.contact.email}?subject=${subject}&body=${body}`;

                window.location.assign(mailto);
              }}
            >
              <div className="relative">
                <label htmlFor="name" className="sr-only">
                  Name / Organization
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary transition-all duration-300 text-lg font-light placeholder:text-white/30 font-mono"
                  placeholder="Name / Organization"
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className="sr-only">
                  Digital Address (Email)
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary transition-all duration-300 text-lg font-light placeholder:text-white/30 font-mono"
                  placeholder="Digital Address (Email)"
                />
              </div>
              <div className="relative">
                <label htmlFor="message" className="sr-only">
                  The Scroll of Intent (Message)
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={3}
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary transition-all duration-300 text-lg font-light resize-none placeholder:text-white/30 font-mono"
                  placeholder="The Scroll of Intent (Message)"
                />
              </div>
              <button
                type="submit"
                aria-label="Dispatch Message"
                className="mt-4 w-full py-5 bg-primary text-white font-mono font-black uppercase tracking-[0.3em] text-sm hover:bg-white hover:text-background active:scale-[0.98] transition-all duration-300 shadow-2xl shadow-primary/20"
              >
                DISPATCH MESSAGE
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-on-surface-variant font-mono text-[10px] tracking-[0.3em] uppercase opacity-70">
          <div className="flex items-center gap-4">
            <span className="text-primary font-black text-base tracking-normal font-display">
              MH.
            </span>
            <span>
              © {currentYear} {PORTFOLIO_DATA.profile.name}
            </span>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant/50">
            <span>Built with precision</span>
            <span className="text-primary">•</span>
            <span>次のレベル</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
