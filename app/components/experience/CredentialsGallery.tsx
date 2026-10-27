"use client";

import CounterChip from "@/app/core/components/CounterChip";
import { TiltCard } from "@/app/core/components/Motion";
import SectionHeader from "@/app/core/components/SectionHeader";
import SectionWatermark from "@/app/core/components/SectionWatermark";
import { PORTFOLIO_DATA } from "@/app/core/config/portfolio";
import { EASE } from "@/app/core/motion";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, ShieldCheck } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });

export default function CredentialsGallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = PORTFOLIO_DATA.certificates.map((c) => ({
    src: c.image,
    title: c.title,
  }));

  return (
    <section id="certificates" className="relative py-24 md:py-32 px-6 md:px-20 bg-background overflow-hidden">
      <SectionWatermark japanese="実績認定" corner="right" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Credentials"
          japanese="実績"
          titleA="Certifications"
          titleB="& Achievements."
          size="lg"
          aside={
            <CounterChip
              tone="accent"
              stats={[
                {
                  value: String(PORTFOLIO_DATA.certificates.length).padStart(2, "0"),
                  label: "Sealed",
                },
              ]}
            />
          }
        />

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PORTFOLIO_DATA.certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: EASE }}
            >
              <TiltCard className="spotlight relative group bg-surface/60 border border-foreground/5 overflow-hidden backdrop-blur-xl hover:border-accent/40 transition-all duration-700 h-full"
              >
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Certificate Image  40% width on desktop */}
                  <div className="w-full lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={400}
                      height={300}
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 400px"
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
                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="p-3 bg-foreground/10 backdrop-blur-xl border border-foreground/20">
                        <ExternalLink className="text-foreground" size={22} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-accent mb-5">
                      <ShieldCheck size={18} />
                      <span className="font-mono text-[10px] tracking-[0.3em] font-bold uppercase">
                        Verified Achievement
                      </span>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-black mb-5 text-foreground group-hover:text-accent transition-colors duration-300 leading-tight uppercase tracking-tight">
                      {cert.title}
                    </h3>

                    <div className="flex items-center gap-6 text-on-surface-variant text-sm">
                      <div className="flex items-center gap-2">
                        <Award size={14} className="text-accent" />
                        <span className="font-mono text-xs">{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-on-surface-variant/60" />
                        <span className="font-mono text-xs">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Japanese Decorative 認定 Watermark  more visible on hover */}
                <div
                  className="absolute bottom-4 right-6 text-foreground/[0.04] font-black text-7xl select-none group-hover:text-accent/15 transition-colors duration-700 pointer-events-none"
                  role="presentation"
                >
                  認定
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/40 transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/40 transition-colors duration-500" />

                {/* Full-card keyboard/AT target for the lightbox */}
                <button
                  type="button"
                  onClick={() => {
                    setIndex(idx);
                    setOpen(true);
                  }}
                  aria-label={`Open ${cert.title} in lightbox`}
                  className="absolute inset-0 z-30 cursor-pointer"
                />
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.98)" } }}
        />
      )}
    </section>
  );
}
