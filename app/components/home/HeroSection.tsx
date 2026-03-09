"use client";

import { motion, Variants } from "framer-motion";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 md:px-20 pt-20 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full flex flex-col items-start z-10"
      >
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <span className="glass-panel px-6 py-2 rounded-full text-sm font-medium tracking-wide text-primary shadow-sm border border-primary/20">
            Based in Egypt
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl md:text-8xl lg:text-[7rem] font-bold leading-[0.9] tracking-tighter text-balance mb-6"
        >
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
            expressive
          </span>{" "}
          <br className="hidden md:block" />
          digital experiences.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-on-surface-variant max-w-2xl text-balance mb-12 font-light"
        >
          Hi, I&apos;m Mostafa Mahmoud. I blend software engineering with artistic design to craft fluid, performant, and memorable interfaces.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
          <a
            href="#work"
            className="interactive group relative px-8 py-4 bg-primary text-on-primary rounded-full font-medium overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </a>
          <a
            href="#contact"
            className="interactive px-8 py-4 bg-surface-variant text-on-surface-variant rounded-full font-medium hover:bg-surface-variant/80 transition-all hover:scale-105 active:scale-95"
          >
            Let&apos;s Talk
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute right-[10%] top-[30%] w-64 h-64 border border-tertiary/20 rounded-[4rem] -z-10 mix-blend-overlay"
        animate={{
          rotate: 360,
          borderRadius: ["4rem", "8rem", "4rem"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
