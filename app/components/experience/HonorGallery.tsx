"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Award, ExternalLink, Calendar } from "lucide-react";

export default function HonorGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = PORTFOLIO_DATA.certificates.map(c => ({
    src: c.image,
    title: c.title,
  }));

  return (
    <section className="relative py-32 px-6 md:px-20 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h2 className="font-display text-5xl md:text-8xl font-black uppercase leading-none mb-4">
              Honor <span className="text-secondary">&</span> <br /> 
              <span className="text-primary italic">Heritage.</span>
            </h2>
            <div className="w-24 h-1 bg-primary" />
          </div>
          <p className="text-on-surface-variant text-xl md:text-2xl font-light max-w-sm text-right leading-relaxed">
            Technical scrolls awarded for mastering the digital arts of Flutter and Dart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => { setIndex(idx); setOpen(true); }}
              className="katana-card p-0 group relative cursor-pointer border-white/5 bg-white/[0.02]"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Certificate Preview */}
                <div className="w-full md:w-1/3 h-48 md:h-full relative overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ExternalLink className="text-white" size={32} />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-primary mb-4">
                    <Award size={24} />
                    <span className="font-mono text-xs tracking-widest uppercase">Certified Skill</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-on-surface-variant font-medium mb-6">{cert.issuer}</p>
                  
                  <div className="flex items-center gap-2 text-white/30 font-mono text-xs">
                    <Calendar size={12} />
                    {cert.date}
                  </div>
                </div>
              </div>

              {/* Hanko Stamp */}
              <div className="absolute top-4 right-4 w-12 h-12 border-2 border-secondary rounded-sm flex items-center justify-center rotate-12 opacity-20 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:scale-100">
                <span className="text-secondary font-bold text-[10px]">証</span>
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
      />
    </section>
  );
}
