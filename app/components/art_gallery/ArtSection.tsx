"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ArtSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-75%"]);

  // Use PNG for high-res Lightbox and WEBP for thumbnails
  const lightboxSlides = PORTFOLIO_DATA.artGallery.map((img) => ({
    src: `/${img.src}`, // This is the .png / high-res version
  }));

  return (
    <section id="art" ref={targetRef} className="relative h-[400vh] bg-background overflow-hidden">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="px-6 md:px-20 mb-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-black tracking-tighter uppercase leading-none"
          >
            Spirit <span className="text-secondary">&</span> <br /> 
            <span className="text-primary italic">Canvas.</span>
          </motion.h2>
          <div className="mt-4 flex items-center gap-4">
            <span className="text-xs sm:text-sm font-mono tracking-[0.5em] text-white/30 uppercase">Ukiyo-e Digitalis — Master Archive</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-6 md:px-20 items-center">
          {PORTFOLIO_DATA.artGallery.map((img, idx) => (
            <motion.div
              key={idx}
              className="interactive relative shrink-0 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden group cursor-pointer border border-white/5 bg-surface/50 backdrop-blur-sm"
              style={{
                width: idx % 3 === 0 ? "80vw" : "60vw",
                maxWidth: idx % 3 === 0 ? "700px" : "500px",
                height: "60vh",
              }}
              whileHover={{ scale: 0.98, borderRadius: "5rem" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={() => {
                setIndex(idx);
                setOpen(true);
              }}
            >
              {/* WEBP Thumbnail for lightness and performance */}
              <img
                src={`/${img.thumb}`}
                alt="Artwork Thumbnail"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 filter contrast-110 brightness-90 group-hover:brightness-100"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 md:p-12 flex flex-col justify-end">
                <span className="text-primary font-mono text-xs md:text-sm tracking-widest mb-2 font-bold">ENTRY 0{idx + 1}</span>
                <h3 className="font-display text-2xl md:text-4xl font-black uppercase leading-tight">Digital Bushido <br /> Reflection</h3>
                <div className="w-12 h-1 bg-primary mt-4 group-hover:w-24 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={lightboxSlides}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.98)" } }}
      />

      {/* Decorative vertical Kanji */}
      <div className="absolute left-10 top-0 h-full vertical-text font-black text-[15vw] opacity-[0.01] pointer-events-none select-none uppercase">
        Artistic Soul - 芸術的魂
      </div>
    </section>
  );
}
