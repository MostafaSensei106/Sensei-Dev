"use client";

import CounterChip from "@/app/core/components/CounterChip";
import { TiltCard } from "@/app/core/components/Motion";
import SectionHeader from "@/app/core/components/SectionHeader";
import SectionWatermark from "@/app/core/components/SectionWatermark";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";
import { EASE } from "@/app/core/motion";
import { motion } from "framer-motion";
import { Maximize2, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const GalleryLightbox = dynamic(() => import("./GalleryLightbox"), { ssr: false });

export default function ArtGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const lightboxSlides = PORTFOLIO_DATA.artGallery.map((img) => ({
    src: img.src,
    title: img.title,
    description: "Digital Art by Mostafa Mahmoud",
  }));

  return (
    <section id="art" className="relative py-24 md:py-32 px-6 md:px-20 bg-background overflow-hidden">
      <SectionWatermark japanese="芸術創造" corner="left" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Visual Archive"
          titleA="Art"
          titleB="Gallery."
          size="lg"
          aside={
            <CounterChip
              stats={[
                {
                  value: String(PORTFOLIO_DATA.artGallery.length).padStart(2, "0"),
                  label: "Items indexed",
                },
              ]}
            />
          }
        />

        {/* Art Grid  masonry columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {PORTFOLIO_DATA.artGallery.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: (idx % 6) * 0.08,
                ease: EASE,
              }}
              className="break-inside-avoid"
            >
              <TiltCard
                max={5}
                className="spotlight relative group overflow-hidden bg-surface border border-foreground/5 transition-all duration-700 hover:border-primary/40"
              >
                {/* Corner bracket accents */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/60 transition-colors duration-500 z-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/60 transition-colors duration-500 z-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary/0 group-hover:border-primary/60 transition-colors duration-500 z-20 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/60 transition-colors duration-500 z-20 pointer-events-none" />

                {/* Full-card keyboard/AT target for the lightbox */}
                <button
                  type="button"
                  onClick={() => {
                    setIndex(idx);
                    setOpen(true);
                  }}
                  aria-label={`Open ${img.title} in lightbox`}
                  className="absolute inset-0 z-30 cursor-pointer"
                />

                {/* Image */}
                <Image
                  src={img.thumb}
                  alt={img.title}
                  width={500}
                  height={500}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  loading="lazy"
                  unoptimized={true}
                />

                {/* Halftone print grain  drifts in on hover, above the image
                    but below the caption gradient. */}
                <div
                  className="halftone pointer-events-none absolute inset-0 z-[5] scale-100 opacity-0 transition-[opacity,transform] duration-[900ms] ease-out group-hover:scale-[1.2] group-hover:opacity-100"
                  aria-hidden="true"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 z-10">
                  {/* Diagonal line accent */}
                  <div
                    className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, transparent 48%, var(--primary) 48%, var(--primary) 49%, transparent 49%)",
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Sparkles size={12} />
                      <span className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
                        Visual Entry {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-black text-foreground uppercase tracking-tight">
                      {img.title}
                    </h3>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="w-10 h-[1px] bg-primary/40" />
                      <Maximize2 size={14} className="text-on-surface-variant" />
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {open && (
        <GalleryLightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={lightboxSlides}
        />
      )}
    </section>
  );
}
