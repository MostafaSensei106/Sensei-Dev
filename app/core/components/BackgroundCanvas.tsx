"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function BackgroundCanvas() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Very slow, soft spring for the background blobs to follow
  const springConfig = { damping: 50, stiffness: 50, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize values between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Translate the normalized mouse values into actual pixel movements
  const blob1X = useTransform(smoothMouseX, [-1, 1], ["-20%", "20%"]);
  const blob1Y = useTransform(smoothMouseY, [-1, 1], ["-20%", "20%"]);

  const blob2X = useTransform(smoothMouseX, [-1, 1], ["20%", "-20%"]);
  const blob2Y = useTransform(smoothMouseY, [-1, 1], ["20%", "-20%"]);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden pointer-events-none bg-background transition-colors duration-1000">
      {/* Blob 1 */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 bg-primary-container"
        style={{ x: blob1X, y: blob1Y }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 bg-tertiary-container"
        style={{ x: blob2X, y: blob2Y }}
        animate={{
          scale: [1, 1.2, 0.9, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
    </div>
  );
}
