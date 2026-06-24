"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Award, ExternalLink, Calendar, ShieldCheck } from "lucide-react";

export default function HonorGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = PORTFOLIO_DATA.certificates.map((c) => ({
    src: c.image,
    title: c.title,
  }));

  return (
    <section id="certificates" className="relative py-40 px-6 md:px-20 bg-background overflow-hidden">
      {/* Background Decorative Kanji */}
      <div
        className="absolute left-10 top-20 pointer-events-none select-none text-white/[0.03] text-[15vw] font-black z-0 vertical-text uppercase"
        aria-hidden="true"
        role="img"
      >
        <span>実</span>
        <span>績</span>
        <span>認</span>
        <span>定</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-accent text-xs font-black tracking-[0.4em] uppercase font-mono">
                Academic Excellence
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter">
              <span className="text-white">Certifications</span> <br />
              <span className="text-primary italic">&amp; Achievements.</span>
            </h2>
          </div>

          {/* Counter */}
          <div className="relative px-6 py-3 border border-white/10 bg-surface/60 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-quaternary" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-quaternary" />
            <div className="flex items-center gap-3">
              <span className="font-mono text-quaternary text-2xl font-black">
                {String(PORTFOLIO_DATA.certificates.length).padStart(2, "0")}
              </span>
              <span className="font-mono text-[9px] text-on-surface-variant tracking-[0.3em] uppercase">
                Sealed
              </span>
            </div>
          </div>
        </motion.div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PORTFOLIO_DATA.certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => {
                setIndex(idx);
                setOpen(true);
              }}
              className="relative group cursor-pointer bg-surface/60 border border-white/5 overflow-hidden backdrop-blur-xl hover:border-quaternary/40 transition-all duration-700"
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Certificate Image — 40% width on desktop */}
                <div className="w-full lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />

                  {/* Red seal overlay */}
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-700" />

                  {/* Seal stamp effect */}
                  <div className="absolute top-4 right-4 w-14 h-14 rounded-full border-2 border-primary/40 flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:border-primary transition-all duration-500">
                    <span className="text-primary font-black text-[10px] font-mono tracking-wider rotate-[-12deg]">
                      認定
                    </span>
                  </div>

                  {/* Expand icon overlay */}
                  <div className="absolute inset-0 bg-quaternary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="p-3 bg-white/10 backdrop-blur-xl border border-white/20">
                      <ExternalLink className="text-white" size={22} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-quaternary mb-5">
                    <ShieldCheck size={18} />
                    <span className="font-mono text-[10px] tracking-[0.3em] font-bold uppercase">
                      Verified Achievement
                    </span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-black mb-5 text-white group-hover:text-quaternary transition-colors duration-300 leading-tight uppercase tracking-tight">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-6 text-on-surface-variant text-sm">
                    <div className="flex items-center gap-2">
                      <Award size={14} className="text-quaternary" />
                      <span className="font-mono text-xs">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-on-surface-variant/60" />
                      <span className="font-mono text-xs">{cert.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Japanese Decorative 認定 Watermark — more visible on hover */}
              <div
                className="absolute bottom-4 right-6 text-white/[0.04] font-black text-7xl select-none group-hover:text-quaternary/15 transition-colors duration-700 pointer-events-none"
                role="presentation"
              >
                認定
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/40 transition-colors duration-500" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/40 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.98)" } }}
      />
    </section>
  );
}
