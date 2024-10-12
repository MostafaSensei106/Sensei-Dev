"use client";
import React, { useEffect, useRef, useMemo } from 'react';
import styles from './animated_background.module.css';

interface Bubble {
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
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
    const workerRef = useRef<Worker | null>(null);

    const gridSize = 50;
    const numberOfBubbles = 10;
    const numberOfMeteors = 3;
    const maxRadius = 100;
    const minRadius = 30;

    const createBubbles = (width: number, height: number): Bubble[] =>
        Array.from({ length: numberOfBubbles }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * (maxRadius - minRadius) + minRadius,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        }));

    const createMeteors = (width: number, height: number): Meteor[] =>
        Array.from({ length: numberOfMeteors }, () => ({
            x: Math.floor(Math.random() * (width / gridSize)) * gridSize,
            y: Math.floor(Math.random() * (height / gridSize)) * gridSize,
            size: Math.random() * 2 + 1,
            speed: Math.random() * 2 + 1,
            direction: Math.random() < 0.5 ? 'horizontal' : 'vertical'
        }));

    const [bubbles, meteors] = useMemo(() => {
        const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
        const height = typeof window !== 'undefined' ? window.innerHeight : 1080;
        return [createBubbles(width, height), createMeteors(width, height)];
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const offscreenCanvas = new OffscreenCanvas(canvas.width, canvas.height);
        const ctx = offscreenCanvas.getContext('2d');
        if (!ctx) return;

        workerRef.current = new Worker(new URL('./worker.ts', window.location.href));

        const updateCanvas = () => {
            if (workerRef.current) {
                workerRef.current.postMessage({ bubbles, meteors });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, offscreenCanvas.width, offscreenCanvas.height);

            bubbles.forEach(bubble => {
                const gradient = ctx.createRadialGradient(bubble.x, bubble.y, 0, bubble.x, bubble.y, bubble.radius);
                gradient.addColorStop(0, 'rgba(252, 240, 225, 0.3)');
                gradient.addColorStop(1, 'rgba(252, 240, 225, 0)');
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            meteors.forEach(meteor => {
                const tailLength = meteor.speed * 5;
                const endX = meteor.direction === 'horizontal' ? meteor.x - tailLength : meteor.x;
                const endY = meteor.direction === 'vertical' ? meteor.y - tailLength : meteor.y;
                ctx.beginPath();
                ctx.moveTo(meteor.x, meteor.y);
                ctx.lineTo(endX, endY);
                ctx.strokeStyle = 'rgba(252, 240, 225, 0.7)';
                ctx.lineWidth = meteor.size;
                ctx.stroke();
            });

            canvas.getContext('2d')?.drawImage(offscreenCanvas, 0, 0);
            requestAnimationFrame(draw);
        };

        workerRef.current.onmessage = (event) => {
            const { bubbles: newBubbles, meteors: newMeteors } = event.data;
            bubbles.forEach((bubble, index) => {
                bubble.x = newBubbles[index].x;
                bubble.y = newBubbles[index].y;
            });
            meteors.forEach((meteor, index) => {
                meteor.x = newMeteors[index].x;
                meteor.y = newMeteors[index].y;
            });
        };

        updateCanvas();
        draw();

        return () => {
            workerRef.current?.terminate();
        };
    }, [bubbles, meteors]);

    return (
        <canvas
            className={styles.canvas}
            ref={canvasRef}
        />
    );
};

export default AnimatedBackground;
