"use client";
import React, { useRef } from "react";
import styles from "./animated_background.module.css";
import { useAnimatedBackground } from "@/app/core/hooks/useAnimatedBackground";

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useAnimatedBackground(canvasRef);

  return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default AnimatedBackground;