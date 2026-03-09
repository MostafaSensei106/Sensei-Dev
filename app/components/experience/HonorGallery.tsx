"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Award, ExternalLink, Calendar, ShieldCheck } from "lucide-react";

export default function HonorGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = PORTFOLIO_DATA.certificates.map(c => ({
    src: c.image,
    title: c.title,
  }));

  return (
    <section id="certificates" className="relative py-40 px-6 md:px-20 bg-[#080808] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-secondary" />
              <span className="text-secondary text-xs font-black tracking-[0.4em] uppercase">Academic Excellence</span>
            </div>
            <h2 className="font-display text-6xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter">
              Certifications <br /> 
              <span className="text-white/40 italic">& Achievements.</span>
            </h2>
          </div>
          <p className="text-white/30 text-lg md:text-xl font-light max-w-sm text-right leading-relaxed">
            Technical mastery validated by global industry leaders in Flutter and systems engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PORTFOLIO_DATA.certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              onClick={() => { setIndex(idx); setOpen(true); }}
              className="relative group cursor-pointer bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden backdrop-blur-3xl hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-700"
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Certificate Preview */}
                <div className="w-full lg:w-2/5 h-64 lg:h-full relative overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                      <ExternalLink className="text-white" size={24} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-3/5 p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-primary mb-6">
                    <ShieldCheck size={20} />
                    <span className="font-mono text-[10px] tracking-[0.3em] font-bold uppercase">Verified Achievement</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white group-hover:text-primary transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-6 text-white/40 text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <Award size={14} className="text-secondary" />
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Japanese Decorative Stamp */}
              <div className="absolute bottom-6 right-8 text-white/[0.03] font-black text-6xl select-none group-hover:text-primary/10 transition-colors pointer-events-none">
                認定
              </div>
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

      {/* Background Decorative Kanji */}
      <div className="absolute left-10 bottom-20 vertical-text font-black text-[12vw] opacity-[0.01] pointer-events-none select-none uppercase leading-none">
        成就 - ACHIEVEMENT
      </div>
    </section>
  );
}
