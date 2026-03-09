"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, Facebook, Twitter, ArrowUpRight, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";

export default function SamuraiFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: Github, href: `https://github.com/${PORTFOLIO_DATA.profile.contact.github}`, color: "text-primary" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "text-[#0077b5]" },
    { name: "WhatsApp", icon: MessageCircle, href: `https://wa.me/${PORTFOLIO_DATA.profile.contact.whatsapp}`, color: "text-[#25d366]" },
    { name: "Facebook", icon: Facebook, href: `https://facebook.com/${PORTFOLIO_DATA.profile.contact.facebook}`, color: "text-[#1877f2]" },
    { name: "X", icon: Twitter, href: `https://x.com/${PORTFOLIO_DATA.profile.contact.x}`, color: "text-white" },
  ];

  return (
    <footer className="relative bg-background pt-32 pb-12 px-6 md:px-20 overflow-hidden border-t border-white/5">
      {/* Background Torii Silhouette */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140vw] h-[70vh] opacity-[0.02] pointer-events-none select-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
          <path d="M5,25 Q50,15 95,25 L95,32 Q50,22 5,32 Z M20,32 L20,100 M80,32 L80,100 M15,50 L85,50" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Brand Column */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-mono text-sm tracking-[0.5em] uppercase mb-6 block font-bold">The End of the Path</span>
              <h2 className="font-display text-6xl sm:text-7xl md:text-9xl font-black uppercase leading-[0.8] mb-10 tracking-tighter">
                Forge <br /> <span className="text-primary italic">Together.</span>
              </h2>
              
              <div className="flex flex-wrap gap-4 md:gap-6 mb-16">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`interactive group flex items-center gap-3 px-5 py-3 bg-white/5 rounded-full border border-white/10 hover:border-primary/40 transition-all ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                    <span className="font-bold uppercase tracking-widest text-[10px] md:text-xs">{social.name}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 group-hover:translate-y-0" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="katana-card p-8 md:p-16 bg-surface/40 backdrop-blur-xl border-white/5 relative group rounded-card"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
              <Mail size={100} className="text-primary" />
            </div>
            
            <h3 className="font-display text-3xl font-bold mb-8 uppercase tracking-tighter flex items-center gap-4">
              <div className="w-8 h-[2px] bg-primary" />
              Seal Intent
            </h3>
            
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                required
                className="interactive w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary transition-all text-xl font-light placeholder:text-white/20"
                placeholder="Name / Organization"
              />
              <input
                type="email"
                required
                className="interactive w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary transition-all text-xl font-light placeholder:text-white/20"
                placeholder="Digital Address (Email)"
              />
              <textarea
                required
                rows={2}
                className="interactive w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-primary transition-all text-xl font-light resize-none placeholder:text-white/20"
                placeholder="The Scroll of Intent (Message)"
              />
              <button
                type="submit"
                className="interactive mt-4 py-6 bg-primary text-black rounded-button font-black uppercase tracking-[0.3em] text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-primary/20"
              >
                DISPATCH MESSAGE
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-on-surface-variant font-mono text-[10px] tracking-[0.3em] uppercase opacity-50">
          <div className="flex items-center gap-4">
            <span className="text-primary font-bold text-base tracking-normal">MM.</span>
            <span>© {currentYear} {PORTFOLIO_DATA.profile.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Constructed with Honor in {PORTFOLIO_DATA.profile.contact.location}</span>
          </div>
        </div>
      </div>

      {/* Floating Final Kanji */}
      <div className="absolute right-0 bottom-10 vertical-text font-black text-[20vw] opacity-[0.005] pointer-events-none select-none">
        終わり
      </div>
    </footer>
  );
}
