"use client";
import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { debounce } from 'lodash';
import styles from './animated_background.module.css';

interface Bubble {
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
    originalRadius: number;
    isVisible: boolean;
}

interface Meteor {
    x: number;
    y: number;
    size: number;
    speed: number;
    direction: 'horizontal' | 'vertical';
    trail: { x: number; y: number; alpha: number }[];
}

interface MousePosition {
    x: number;
    y: number;
    active: boolean;
}

const AnimatedBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const animationFrameIdRef = useRef<number | null>(null);
    const lastFrameTimeRef = useRef<number>(0);
    
    const bubblesRef = useRef<Bubble[]>([]);
    const meteorsRef = useRef<Meteor[]>([]);
    const mouseRef = useRef<MousePosition>({ x: 0, y: 0, active: false });
    
    // Performance optimization refs
    const gridCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const gridNeedsRedrawRef = useRef<boolean>(true);
    
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [isMobile, setIsMobile] = useState(false);
    const [performance, setPerformance] = useState<'high' | 'medium' | 'low'>('high');

    // Constants with performance optimization
    const config = useMemo(() => ({
        gridSize: 50,
        mouseInfluenceRadius: isMobile ? 120 : 200,
        mouseInfluenceStrength: 0.8,
        maxRadius: isMobile ? 80 : 120,
        minRadius: isMobile ? 40 : 60,
        bubbleExpansionFactor: 1.2,
        maxBubbles: Math.max(3, Math.floor(dimensions.width * dimensions.height / (isMobile ? 120000 : 80000))),
        maxMeteors: Math.max(2, Math.floor(dimensions.width / (isMobile ? 400 : 250))),
        targetFPS: 60,
        frameInterval: 1000 / 60
    }), [dimensions, isMobile]);

    // Performance monitoring with throttling
    const performanceMonitor = useCallback((currentTime: number) => {
        const deltaTime = currentTime - lastFrameTimeRef.current;
        const fps = 1000 / deltaTime;
        
        // Only update performance state occasionally to avoid too many re-renders
        if (Math.random() < 0.01) { // 1% chance per frame
            if (fps < 25) {
                setPerformance(prev => prev !== 'low' ? 'low' : prev);
            } else if (fps < 40) {
                setPerformance(prev => prev !== 'medium' ? 'medium' : prev);
            } else {
                setPerformance(prev => prev !== 'high' ? 'high' : prev);
            }
        }
        
        lastFrameTimeRef.current = currentTime;
    }, []);

    // Optimized bubble creation
    const createBubbles = useCallback(() => {
        const adjustedMaxBubbles = performance === 'low' ? 
            Math.floor(config.maxBubbles * 0.5) : 
            performance === 'medium' ? 
            Math.floor(config.maxBubbles * 0.7) : 
            config.maxBubbles;

        const bubbles = Array.from({ length: adjustedMaxBubbles }, () => {
            const radius = Math.random() * (config.maxRadius - config.minRadius) + config.minRadius;
            return {
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                radius,
                originalRadius: radius,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                isVisible: true
            };
        });

        bubblesRef.current = bubbles;
        return bubbles;
    }, [dimensions, config, performance]);

    const createMeteors = useCallback(() => {
        const adjustedMaxMeteors = performance === 'low' ? 
            Math.max(1, Math.floor(config.maxMeteors * 0.5)) : 
            config.maxMeteors;

        const meteors = Array.from({ length: adjustedMaxMeteors }, () => ({
            x: Math.floor(Math.random() * (dimensions.width / config.gridSize)) * config.gridSize,
            y: Math.floor(Math.random() * (dimensions.height / config.gridSize)) * config.gridSize,
            size: Math.random() * 2 + 1,
            speed: Math.random() * 2 + 1,
            direction: Math.random() < 0.5 ? 'horizontal' : 'vertical',
            trail: []
        })) as Meteor[];
    
        meteorsRef.current = meteors;
        return meteors;
    }, [dimensions, config, performance]);

    // Pre-render grid to offscreen canvas for better performance
    const createGridCanvas = useCallback(() => {
        if (!dimensions.width || !dimensions.height) return;

        const gridCanvas = document.createElement('canvas');
        gridCanvas.width = dimensions.width;
        gridCanvas.height = dimensions.height;
        const gridCtx = gridCanvas.getContext('2d');
        
        if (gridCtx) {
            gridCtx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            gridCtx.lineWidth = 0.4;
            gridCtx.beginPath();
            
            for (let x = 0; x <= dimensions.width; x += config.gridSize) {
                gridCtx.moveTo(x, 0);
                gridCtx.lineTo(x, dimensions.height);
            }
            for (let y = 0; y <= dimensions.height; y += config.gridSize) {
                gridCtx.moveTo(0, y);
                gridCtx.lineTo(dimensions.width, y);
            }
            gridCtx.stroke();
        }
        
        gridCanvasRef.current = gridCanvas;
        gridNeedsRedrawRef.current = false;
    }, [dimensions, config.gridSize]);

    // Initialize dimensions
    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
            setIsMobile(window.innerWidth <= 768);
            gridNeedsRedrawRef.current = true;
        };

        const debouncedUpdateDimensions = debounce(updateDimensions, 250);
        window.addEventListener('resize', debouncedUpdateDimensions);
        updateDimensions();

        return () => {
            window.removeEventListener('resize', debouncedUpdateDimensions);
        };
    }, []);

    // Initialize elements and grid
    useEffect(() => {
        if (dimensions.width && dimensions.height) {
            createBubbles();
            createMeteors();
            createGridCanvas();
        }
    }, [dimensions, createBubbles, createMeteors, createGridCanvas]);

    // Mouse interaction with throttling
    useEffect(() => {
        let mouseMoveThrottle = false;
        
        const handleMouseMove = (e: MouseEvent) => {
            if (mouseMoveThrottle) return;
            mouseMoveThrottle = true;
            
            requestAnimationFrame(() => {
                mouseRef.current = {
                    x: e.clientX,
                    y: e.clientY,
                    active: true
                };
                mouseMoveThrottle = false;
            });
        };

        const handleMouseLeave = () => {
            mouseRef.current.active = false;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // Optimized drawing functions with caching
    const drawGrid = useCallback((ctx: CanvasRenderingContext2D) => {
        if (gridCanvasRef.current) {
            ctx.drawImage(gridCanvasRef.current, 0, 0);
        }
    }, []);

    const drawBubble = useCallback((ctx: CanvasRenderingContext2D, bubble: Bubble) => {
        if (!bubble.isVisible) return;

        // Use simpler gradient without blur for performance
        const gradient = ctx.createRadialGradient(bubble.x, bubble.y, 0, bubble.x, bubble.y, bubble.radius);
        gradient.addColorStop(0, 'rgba(253, 242, 225, 0.8)');
        gradient.addColorStop(1, 'rgba(253, 242, 225, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fill();
    }, []);

    const drawMeteor = useCallback((ctx: CanvasRenderingContext2D, meteor: Meteor) => {
        // Draw trail with optimized rendering
        if (meteor.trail.length > 1) {
            ctx.strokeStyle = 'rgba(254, 242, 226, 0.7)';
            ctx.lineWidth = meteor.size;
            ctx.beginPath();
            ctx.moveTo(meteor.trail[0].x, meteor.trail[0].y);
            
            for (let i = 1; i < meteor.trail.length; i++) {
                ctx.globalAlpha = meteor.trail[i].alpha;
                ctx.lineTo(meteor.trail[i].x, meteor.trail[i].y);
            }
            ctx.stroke();
            ctx.globalAlpha = 1;
        }

        // Draw meteor head
        ctx.fillStyle = 'rgba(252, 240, 225, 0.7)';
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, meteor.size, 0, Math.PI * 2);
        ctx.fill();
    }, []);

    // Optimized update functions with better collision detection
    const updateBubbles = useCallback((bubbles: Bubble[], canvas: HTMLCanvasElement) => {
        const mouse = mouseRef.current;
        const influenceRadiusSquared = config.mouseInfluenceRadius * config.mouseInfluenceRadius;
        
        return bubbles.map(bubble => {
            // Viewport culling for performance
            const margin = bubble.radius + 50;
            bubble.isVisible = (
                bubble.x > -margin && bubble.x < canvas.width + margin &&
                bubble.y > -margin && bubble.y < canvas.height + margin
            );

            if (!bubble.isVisible) return bubble;

            let newX = bubble.x + bubble.vx;
            let newY = bubble.y + bubble.vy;
            
            // Boundary collision with energy conservation
            if (newX + bubble.radius > canvas.width || newX - bubble.radius < 0) {
                bubble.vx *= -1;
                newX = Math.max(bubble.radius, Math.min(newX, canvas.width - bubble.radius));
            }
            if (newY + bubble.radius > canvas.height || newY - bubble.radius < 0) {
                bubble.vy *= -1;
                newY = Math.max(bubble.radius, Math.min(newY, canvas.height - bubble.radius));
            }
            
            let newRadius = bubble.originalRadius;
            
            // Mouse interaction with squared distance for performance
            if (mouse.active) {
                const dx = mouse.x - newX;
                const dy = mouse.y - newY;
                const distanceSquared = dx * dx + dy * dy;
                
                if (distanceSquared < influenceRadiusSquared) {
                    const distance = Math.sqrt(distanceSquared);
                    const influence = 1 - (distance / config.mouseInfluenceRadius);
                    newRadius = bubble.originalRadius * (1 + influence * config.bubbleExpansionFactor);
                    
                    const forceFactor = config.mouseInfluenceStrength * influence;
                    bubble.vx -= (dx / distance) * forceFactor;
                    bubble.vy -= (dy / distance) * forceFactor;
                    
                    // Velocity limiting
                    const speed = Math.sqrt(bubble.vx * bubble.vx + bubble.vy * bubble.vy);
                    const maxSpeed = 2;
                    if (speed > maxSpeed) {
                        bubble.vx = (bubble.vx / speed) * maxSpeed;
                        bubble.vy = (bubble.vy / speed) * maxSpeed;
                    }
                }
            }

            // Apply friction
            bubble.vx *= 0.99;
            bubble.vy *= 0.99;

            return {
                ...bubble,
                x: newX,
                y: newY,
                radius: newRadius
            };
        });
    }, [config]);

    const updateMeteors = useCallback((meteors: Meteor[], canvas: HTMLCanvasElement) => {
        const maxTrailLength = performance === 'low' ? 10 : 20;
        
        return meteors.map(meteor => {
            if (meteor.direction === 'horizontal') {
                meteor.x += meteor.speed;
                if (meteor.x > canvas.width) {
                    meteor.x = 0;
                    meteor.y = Math.floor(Math.random() * (canvas.height / config.gridSize)) * config.gridSize;
                    meteor.trail = [];
                }
            } else {
                meteor.y += meteor.speed;
                if (meteor.y > canvas.height) {
                    meteor.y = 0;
                    meteor.x = Math.floor(Math.random() * (canvas.width / config.gridSize)) * config.gridSize;
                    meteor.trail = [];
                }
            }

            // Optimized trail management
            meteor.trail.unshift({ x: meteor.x, y: meteor.y, alpha: 1 });
            if (meteor.trail.length > maxTrailLength) {
                meteor.trail.length = maxTrailLength; // More efficient than pop()
            }
            
            // Update trail alpha values
            const trailLength = meteor.trail.length;
            for (let i = 0; i < trailLength; i++) {
                meteor.trail[i].alpha = 1 - (i / trailLength);
            }

            return meteor;
        });
    }, [config.gridSize, performance]);

    // Main animation loop with frame rate control
    const animate = useCallback((currentTime: number) => {
        const canvas = canvasRef.current;
        const ctx = contextRef.current;
        if (!canvas || !ctx) return;

        // Frame rate limiting for better performance
        if (currentTime - lastFrameTimeRef.current < config.frameInterval) {
            animationFrameIdRef.current = requestAnimationFrame(animate);
            return;
        }

        // Performance monitoring
        performanceMonitor(currentTime);

        // Clear canvas efficiently
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw pre-rendered grid
        drawGrid(ctx);

        // Update and draw bubbles
        const updatedBubbles = updateBubbles(bubblesRef.current, canvas);
        for (let i = 0; i < updatedBubbles.length; i++) {
            drawBubble(ctx, updatedBubbles[i]);
        }
        bubblesRef.current = updatedBubbles;

        // Update and draw meteors
        const updatedMeteors = updateMeteors(meteorsRef.current, canvas);
        for (let i = 0; i < updatedMeteors.length; i++) {
            drawMeteor(ctx, updatedMeteors[i]);
        }
        meteorsRef.current = updatedMeteors;

        animationFrameIdRef.current = requestAnimationFrame(animate);
    }, [drawGrid, updateBubbles, updateMeteors, drawBubble, drawMeteor, performanceMonitor, config.frameInterval]);

    // Canvas setup with performance optimizations
    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas && dimensions.width && dimensions.height) {
            canvas.width = dimensions.width;
            canvas.height = dimensions.height;
            
            const ctx = canvas.getContext('2d', { 
                alpha: false,
                desynchronized: true,
                willReadFrequently: false
            });
            contextRef.current = ctx;
            
            if (ctx) {
                // Optimize canvas settings
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'low';
                
                // Start animation
                animationFrameIdRef.current = requestAnimationFrame(animate);
            }
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

export default AnimatedBackground;