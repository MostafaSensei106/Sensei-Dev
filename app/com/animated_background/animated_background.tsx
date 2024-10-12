"use client";
import React, { useEffect, useRef } from 'react';
import styles from './animated_background.module.css';

interface Bubble {
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
    canvas: HTMLCanvasElement | null;
}

interface Meteor {
    x: number;
    y: number;
    size: number;
    speed: number;
    direction: 'horizontal' | 'vertical';
}

const AnimatedBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number | null = null;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const bubbles: BubbleImpl[] = [];
        const numberOfBubbles = 15;
        const maxRadius = 150;
        const minRadius = 50;

        const meteors: MeteorImpl[] = [];
        const numberOfMeteors = 3;
        const gridSize = 50;

        class BubbleImpl implements Bubble {
            x: number;
            y: number;
            radius: number;
            vx: number;
            vy: number;
            canvas: HTMLCanvasElement | null;

            constructor(x: number, y: number, canvas: HTMLCanvasElement | null) {
                this.x = x;
                this.y = y;
                this.radius = Math.random() * (maxRadius - minRadius) + minRadius;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.canvas = canvas;
            }

            draw(ctx: CanvasRenderingContext2D | null): void {
                if (!ctx) return;
                ctx.beginPath();
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
                gradient.addColorStop(0, 'rgba(252, 240, 225, 0.3)');
                gradient.addColorStop(1, 'rgba(252, 240, 225, 0)');
                ctx.fillStyle = gradient;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }

            update(): void {
                if (this.canvas) {
                    this.x += this.vx;
                    this.y += this.vy;
                    if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) {
                        this.vx *= -1;
                    }
                    if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {
                        this.vy *= -1;
                    }
                }
            }
        }

        class MeteorImpl implements Meteor {
            x: number;
            y: number;
            size: number;
            speed: number;
            direction: 'horizontal' | 'vertical';

            constructor() {
                this.x = 0;
                this.y = 0;
                this.size = 0;
                this.speed = Math.random() * 2 + 1;
                this.direction = 'horizontal';
                this.reset();
            }

            reset(): void {
                if (canvas) {
                    this.x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
                    this.y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
                }
                this.size = Math.random() * 2 + 1;
                this.speed = Math.random() * 2 + 1;
                this.direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
            }

            draw(ctx: CanvasRenderingContext2D | null): void {
                if (!ctx) return;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                const tailLength = this.speed * 5;
                const endX = this.direction === 'horizontal' ? this.x - tailLength : this.x;
                const endY = this.direction === 'vertical' ? this.y - tailLength : this.y;
                ctx.lineTo(endX, endY);
                ctx.strokeStyle = 'rgba(252, 240, 225, 0.7)';
                ctx.lineWidth = this.size;
                ctx.stroke();
            }

            update(): void {
                if (!canvas) return;
                if (this.direction === 'horizontal') {
                    this.x += this.speed;
                    if (this.x > canvas.width) {
                        this.reset();
                    }
                } else {
                    this.y += this.speed;
                    if (this.y > canvas.height) {
                        this.reset();
                    }
                }
            }
        }

        for (let i = 0; i < numberOfBubbles; i++) {
            bubbles.push(new BubbleImpl(Math.random() * canvas.width, Math.random() * canvas.height, canvas));
        }

        for (let i = 0; i < numberOfMeteors; i++) {
            meteors.push(new MeteorImpl());
        }

        const drawMesh = (): void => {
            if (!ctx) return;
            ctx.strokeStyle = 'rgba(252, 240, 225, 0.03)';
            ctx.lineWidth = 1;

            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        };

        const animate = (): void => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            drawMesh();

            ctx.filter = 'blur(30px)';
            bubbles.forEach((bubble) => {
                bubble.update();
                bubble.draw(ctx);
            });
            ctx.filter = 'none';

            meteors.forEach((meteor) => {
                meteor.update();
                meteor.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleMouseMove = (e: MouseEvent): void => {
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            bubbles.forEach((bubble) => {
                const dx = mouseX - bubble.x;
                const dy = mouseY - bubble.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 200) {
                    bubble.x += dx * 0.02;
                    bubble.y += dy * 0.02;
                }
            });
        };

        canvas.addEventListener('mousemove', handleMouseMove);

        const handleResize = (): void => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            canvas.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            className={styles.canvas}
            ref={canvasRef}
        />
    );
};

export default AnimatedBackground;
