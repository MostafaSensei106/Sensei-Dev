"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Zoom, Fullscreen, Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Image as ImageIcon, Sparkles, Maximize2 } from "lucide-react";

export default function ArtSection() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const lightboxSlides = PORTFOLIO_DATA.artGallery.map((img) => ({
    src: img.src.startsWith("/") ? img.src : `/${img.src}`,
    title: img.title,
    description: "Digital Art by Mostafa Mahmoud",
  }));

  return (
    <section id="art" className="relative py-40 px-6 md:px-20 bg-background overflow-hidden">
      {/* Background Decorative Kanji */}
      <div 
        className="absolute right-10 top-0 h-full vertical-text font-black text-[18vw] text-white/[0.02] pointer-events-none select-none uppercase leading-none z-0" 
        aria-hidden="true"
        role="img"
      >
        芸術적魂
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-accent text-xs font-black tracking-[0.4em] uppercase">Visual Archive</span>
            </div>
            <h2 className="font-display text-6xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter">
              <span className="text-white">Spirit</span> <br /> 
              <span className="text-primary italic">& Canvas.</span>
            </h2>
          </div>
          <div className="flex flex-col items-end text-right">
            <p className="text-on-surface-variant text-lg md:text-xl font-light max-w-sm leading-relaxed mb-6">
              A curated collection of digital explorations, from brand identities to expressive character studies.
            </p>
            <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-on-surface-variant text-[10px] font-bold uppercase tracking-[0.2em]">
              {PORTFOLIO_DATA.artGallery.length} Items Indexed
            </div>
          </div>
        </div>

        {/* Art Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {PORTFOLIO_DATA.artGallery.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: (idx % 6) * 0.1,
                ease: [0.215, 0.61, 0.355, 1] 
              }}
              onClick={() => {
                setIndex(idx);
                setOpen(true);
              }}
              className="relative group cursor-pointer overflow-hidden rounded-card bg-surface border border-white/5 transition-all duration-700 hover:border-quaternary/40 hover:scale-[1.02]"
            >
              <Image
                src={img.thumb.startsWith("/") ? img.thumb : `/${img.thumb}`}
                alt={img.title}
                width={500}
                height={500}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                loading="lazy"
                unoptimized={true}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="flex items-center gap-2 text-quaternary mb-2">
                  <Sparkles size={12} />
                  <span className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase">Visual ENTRY 0{idx + 1}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white uppercase tracking-tight">
                  {img.title}
                </h3>
                <div className="mt-4 flex items-center justify-between">
                  <div className="w-8 h-[1px] bg-white/20" />
                  <Maximize2 size={16} className="text-on-surface-variant" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={lightboxSlides}
        plugins={[Zoom, Fullscreen, Thumbnails]}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.98)" } }}
      />
    </section>
  );
}
