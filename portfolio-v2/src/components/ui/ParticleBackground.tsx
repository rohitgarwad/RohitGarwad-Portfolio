"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles: Particle[] = [];
        const particleCount = 60; // Keep roughly similar density
        const connectionDistance = 150;
        const mouseDistance = 200;

        let animationFrameId: number;

        const mouse = { x: 0, y: 0 };

        window.addEventListener("mousemove", (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        window.addEventListener("resize", () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            init(); // Re-init on resize
        });

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5; // Slow movement
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.color = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#FF4D4D';
            }

            update() {
                // Move
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction (gentle repel)
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseDistance) {
                    const angle = Math.atan2(dy, dx);
                    const force = (mouseDistance - distance) / mouseDistance;
                    const repelStrength = 0.05 * force; // Scale force

                    this.vx -= Math.cos(angle) * repelStrength;
                    this.vy -= Math.sin(angle) * repelStrength;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = 0.2; // Semi-transparent
                ctx.fill();
            }
        }

        function init() {
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            particles.forEach((p, index) => {
                p.update();
                p.draw();

                // Connections
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = p.color;
                        ctx.globalAlpha = 1 - distance / connectionDistance;
                        ctx.lineWidth = 1;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            // Subtle global fade
            ctx.globalAlpha = 1;

            animationFrameId = requestAnimationFrame(animate);
        }

        init();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("mousemove", () => { }); // Simplified cleanup
            window.removeEventListener("resize", () => { });
        };

    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-40" />;
}
