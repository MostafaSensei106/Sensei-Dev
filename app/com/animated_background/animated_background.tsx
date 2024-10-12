"use client";
import React, { useEffect, useRef } from 'react';
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

    const createBubbles = (width: number, height: number, count: number): Bubble[] => {
        const maxRadius = Math.min(150, Math.max(width, height) * 0.1);
        const minRadius = Math.min(50, maxRadius * 0.3);
        return Array.from({ length: count }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * (maxRadius - minRadius) + minRadius,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
        }));
    };

    const createMeteors = (width: number, height: number, count: number): Meteor[] => {
        const gridSize = 50;
        return Array.from({ length: count }, () => ({
            x: Math.floor(Math.random() * (width / gridSize)) * gridSize,
            y: Math.floor(Math.random() * (height / gridSize)) * gridSize,
            size: Math.random() * 2 + 1,
            speed: Math.random() * 2 + 1,
            direction: Math.random() < 0.5 ? 'horizontal' : 'vertical',
        }));
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number | null = null;
        let bubbles: Bubble[] = [];
        let meteors: Meteor[] = [];
        let lastTime = 0;

        const isMobile = window.innerWidth < 768;
        const targetFPS = isMobile ? 20 : 30;
        const frameInterval = 1000 / targetFPS;

        const resizeCanvas = () => {
            const scaleFactor = isMobile ? 0.5 : 1;
            canvas.width = window.innerWidth * scaleFactor;
            canvas.height = window.innerHeight * scaleFactor;
            ctx.scale(scaleFactor, scaleFactor);
            bubbles = createBubbles(canvas.width, canvas.height, isMobile ? 5 : 15);
            meteors = createMeteors(canvas.width, canvas.height, isMobile ? 1 : 3);
        };

        resizeCanvas();

        const drawBubble = (bubble: Bubble) => {
            ctx.beginPath();
            const gradient = ctx.createRadialGradient(bubble.x, bubble.y, 0, bubble.x, bubble.y, bubble.radius);
            gradient.addColorStop(0, 'rgba(252, 240, 225, 0.3)');
            gradient.addColorStop(1, 'rgba(252, 240, 225, 0)');
            ctx.fillStyle = gradient;
            ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
            ctx.fill();
        };

        const updateBubble = (bubble: Bubble) => {
            bubble.x += bubble.vx;
            bubble.y += bubble.vy;
            if (bubble.x + bubble.radius > canvas.width || bubble.x - bubble.radius < 0) {
                bubble.vx *= -1;
            }
            if (bubble.y + bubble.radius > canvas.height || bubble.y - bubble.radius < 0) {
                bubble.vy *= -1;
            }
        };

        const drawMeteor = (meteor: Meteor) => {
            ctx.beginPath();
            ctx.moveTo(meteor.x, meteor.y);
            const tailLength = meteor.speed * 5;
            const endX = meteor.direction === 'horizontal' ? meteor.x - tailLength : meteor.x;
            const endY = meteor.direction === 'vertical' ? meteor.y - tailLength : meteor.y;
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = 'rgba(252, 240, 225, 0.7)';
            ctx.lineWidth = meteor.size;
            ctx.stroke();
        };

        const updateMeteor = (meteor: Meteor) => {
            if (meteor.direction === 'horizontal') {
                meteor.x += meteor.speed;
                if (meteor.x > canvas.width) {
                    meteor.x = 0;
                    meteor.y = Math.floor(Math.random() * (canvas.height / 50)) * 50;
                }
            } else {
                meteor.y += meteor.speed;
                if (meteor.y > canvas.height) {
                    meteor.y = 0;
                    meteor.x = Math.floor(Math.random() * (canvas.width / 50)) * 50;
                }
            }
        };

        const drawMesh = () => {
            ctx.strokeStyle = 'rgba(252, 240, 225, 0.03)';
            ctx.lineWidth = 1;
            const gridSize = 50;

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

        const animate = (currentTime: number) => {
            if (document.visibilityState !== 'visible') return;
            animationFrameId = requestAnimationFrame(animate);

            const deltaTime = currentTime - lastTime;
            if (deltaTime < frameInterval) return;

            lastTime = currentTime - (deltaTime % frameInterval);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            drawMesh();

            ctx.filter = 'blur(25px)';
            bubbles.forEach((bubble) => {
                updateBubble(bubble);
                drawBubble(bubble);
            });
            ctx.filter = 'none';

            meteors.forEach((meteor) => {
                updateMeteor(meteor);
                drawMeteor(meteor);
            });
        };

        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible' && !animationFrameId) {
                animate(0);
            } else if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        });

        animate(0);
        window.addEventListener('resize', resizeCanvas);

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas className={styles.canvas} ref={canvasRef} />
    );
};

export default AnimatedBackground;
