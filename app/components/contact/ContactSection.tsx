"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-20 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="glass-panel p-10 md:p-20 rounded-[3rem] md:rounded-[4rem] text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Let&apos;s build something <span className="text-primary italic">beautiful</span> together.
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <form className="flex flex-col gap-6 max-w-xl mx-auto text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="relative group">
              <input
                type="text"
                id="name"
                required
                className="interactive w-full bg-surface/50 border border-surface-variant rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-6 top-4 text-on-surface-variant transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-surface px-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:bg-surface px-2 pointer-events-none"
              >
                Your Name
              </label>
            </div>

            <div className="relative group">
              <input
                type="email"
                id="email"
                required
                className="interactive w-full bg-surface/50 border border-surface-variant rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-6 top-4 text-on-surface-variant transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-surface px-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:bg-surface px-2 pointer-events-none"
              >
                Your Email
              </label>
            </div>

            <div className="relative group">
              <textarea
                id="message"
                required
                rows={4}
                className="interactive w-full bg-surface/50 border border-surface-variant rounded-3xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all peer resize-none"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-6 top-4 text-on-surface-variant transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-surface px-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:bg-surface px-2 pointer-events-none"
              >
                Your Message
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="interactive w-full py-4 mt-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all"
              type="submit"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
