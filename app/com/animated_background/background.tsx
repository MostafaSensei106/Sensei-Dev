"use client";
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { debounce } from 'lodash';
import styles from './animated_background.module.css';



const Background = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const animationFrameIdRef = useRef<number | null>(null);


    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const gridSize = 50;

    const updateGrid = useCallback((ctx: CanvasRenderingContext2D) => {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 0.4;
        ctx.beginPath();
        for (let x = 0; x <= dimensions.width; x += gridSize) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, dimensions.height);
        }
        for (let y = 0; y <= dimensions.height; y += gridSize) {
            ctx.moveTo(0, y);
            ctx.lineTo(dimensions.width, y);
        }
        ctx.stroke();
    }, [dimensions]);

    const animate = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = contextRef.current;
        if (!canvas || !ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const backgroundGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        backgroundGradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
        backgroundGradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
        ctx.fillStyle = backgroundGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        updateGrid(ctx);
        animationFrameIdRef.current = requestAnimationFrame(animate);
    }, [updateGrid]);

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        const debouncedUpdateDimensions = debounce(updateDimensions, 250);
        window.addEventListener('resize', debouncedUpdateDimensions);
        updateDimensions();
        return () => {
            window.removeEventListener('resize', debouncedUpdateDimensions);
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas && dimensions.width && dimensions.height) {
            canvas.width = dimensions.width;
            canvas.height = dimensions.height;
            contextRef.current = canvas.getContext('2d', { alpha: false });
            animate();
        }

        return () => {
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
        };
    }, [dimensions, animate]);

    return (
        <canvas ref={canvasRef} className={styles.canvas} />
    );
};

export default Background;
