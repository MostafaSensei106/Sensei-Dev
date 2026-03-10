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

  const slides = PORTFOLIO_DATA.certificates.map(c => ({
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
        <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-accent text-xs font-black tracking-[0.4em] uppercase">Academic Excellence</span>
            </div>
            <h2 className="font-display text-5xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter">
              <span className="text-white">Certifications</span> <br />
              <span className="text-primary italic">& Achievements.</span>
            </h2>
          </div>
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
              className="relative group cursor-pointer bg-surface border border-white/5 rounded-card overflow-hidden backdrop-blur-3xl hover:border-quaternary/30 transition-all duration-700"
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Certificate Preview */}
                <div className="w-full lg:w-2/5 h-64 lg:h-full relative overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-quaternary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                      <ExternalLink className="text-white" size={24} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-3/5 p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-quaternary mb-6">
                    <ShieldCheck size={20} />
                    <span className="font-mono text-[10px] tracking-[0.3em] font-bold uppercase">Verified Achievement</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white group-hover:text-quaternary transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-6 text-on-surface-variant text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <Award size={14} className="text-quaternary" />
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
              <div className="absolute bottom-6 right-8 text-white/[0.05] font-black text-6xl select-none group-hover:text-quaternary/20 transition-colors pointer-events-none" role="presentation">
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
    </section>
  );
}
