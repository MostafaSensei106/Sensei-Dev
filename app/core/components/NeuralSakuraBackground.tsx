"use client";

import { useEffect, useRef } from "react";
import { PORTFOLIO_DATA } from "../config/portfolio";

export default function NeuralSakuraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const petals: Petal[] = [];
    const petalCount = 60; // Increased for better density

    // Convert hex to rgb for canvas
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ?
        `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` :
        "255, 255, 255";
    };

    const primaryRGB = hexToRgb(PORTFOLIO_DATA.theme.colors.primary);
    const accentRGB = hexToRgb(PORTFOLIO_DATA.theme.colors.accent);
    const tertiaryRGB = hexToRgb(PORTFOLIO_DATA.theme.colors.tertiary);
    const quaternaryRGB = hexToRgb(PORTFOLIO_DATA.theme.colors.quaternary);

    class Petal {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      spin: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 4 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 1.5 + 0.5;
        this.rotation = Math.random() * 360;
        this.spin = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.4 + 0.1;

        const rand = Math.random();
        if (rand > 0.75) this.color = primaryRGB;
        else if (rand > 0.5) this.color = accentRGB;
        else if (rand > 0.25) this.color = tertiaryRGB;
        else this.color = quaternaryRGB;
      }

      update(mouseX: number, mouseY: number) {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.y / 50) * 0.5;
        this.rotation += this.spin;

        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 200) {
          const force = (200 - distance) / 200;
          this.x += (dx / distance) * force * 5;
          this.y += (dy / distance) * force * 5;
        }

        if (this.y > height + 20) {
          this.y = -20;
          this.x = Math.random() * width;
          this.opacity = Math.random() * 0.4 + 0.1;
        }
        if (this.x > width + 20) this.x = -20;
        if (this.x < -20) this.x = width + 20;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;

        // Petal shape (ellipse-like)
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(this.size, -this.size, this.size * 2, this.size, 0, this.size * 2);
        ctx.bezierCurveTo(-this.size * 2, this.size, -this.size, -this.size, 0, 0);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < petalCount; i++) {
      petals.push(new Petal());
    }

    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;
    function animate() {
      ctx!.clearRect(0, 0, width, height);
      petals.forEach((petal) => {
        petal.update(mouseX, mouseY);
        petal.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-background overflow-hidden neural-grid">
      <canvas ref={canvasRef} className="opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
    </div>
  );
}
