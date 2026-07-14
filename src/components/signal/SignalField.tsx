"use client";

import { useEffect, useRef } from "react";

const MANTRAS = ["hire satwik", "say yes"];
const ASIDES = [
  "works on prod",
  "i ship",
  "unless you hire me first",
  "five projects. one you.",
  "the thought is correct",
  "5/5 online",
];

function pickFragment() {
  if (Math.random() < 0.68) {
    return MANTRAS[Math.floor(Math.random() * MANTRAS.length)]!;
  }
  return ASIDES[Math.floor(Math.random() * ASIDES.length)]!;
}

type Particle = {
  angle: number;
  radius: number;
  orbitSpeed: number;
  wobble: number;
  text: string;
  size: number;
  alpha: number;
  phase: number;
};

export function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const scrollRef = useRef(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let particles: Particle[] = [];
    let center = { x: 0, y: 0 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      center = { x: rect.width / 2, y: rect.height / 2 };
    };

    const seed = () => {
      const rect = canvas.getBoundingClientRect();
      const maxR = Math.min(rect.width, rect.height) * 0.48;
      particles = Array.from({ length: 56 }, () => {
        const text = pickFragment();
        return {
          angle: Math.random() * Math.PI * 2,
          radius: 60 + Math.random() * maxR,
          orbitSpeed: 0.0008 + Math.random() * 0.0016,
          wobble: Math.random() * Math.PI * 2,
          text,
          size: text.length > 14 ? 8 + Math.random() * 2.5 : 9 + Math.random() * 3.5,
          alpha: 0.12 + Math.random() * 0.18,
          phase: Math.random() * Math.PI * 2,
        };
      });
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const onLeave = () => {
      mouseRef.current.active = false;
    };

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };

    const drawRings = (fade: number, t: number) => {
      const rings = [0.18, 0.32, 0.46, 0.58];
      for (let i = 0; i < rings.length; i++) {
        const r = rings[i]! * Math.min(center.x, center.y) * 2;
        const pulse = 1 + Math.sin(t * 0.0012 + i) * 0.012;
        ctx.beginPath();
        ctx.arc(center.x, center.y, r * pulse, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(61, 90, 71, ${0.06 * fade})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        const tickCount = 12 + i * 4;
        for (let j = 0; j < tickCount; j++) {
          const a = (j / tickCount) * Math.PI * 2 + t * 0.0003 * (i % 2 === 0 ? 1 : -1);
          const inner = r * pulse - 6;
          const outer = r * pulse + 6;
          ctx.beginPath();
          ctx.moveTo(center.x + Math.cos(a) * inner, center.y + Math.sin(a) * inner);
          ctx.lineTo(center.x + Math.cos(a) * outer, center.y + Math.sin(a) * outer);
          ctx.strokeStyle = `rgba(212, 167, 44, ${0.08 * fade})`;
          ctx.stroke();
        }
      }
    };

    const draw = (t: number) => {
      timeRef.current = t;
      const rect = canvas.getBoundingClientRect();
      const fade = Math.max(0, 1 - scrollRef.current / 520);
      ctx.clearRect(0, 0, rect.width, rect.height);

      drawRings(fade, t);

      for (const p of particles) {
        p.angle += p.orbitSpeed;
        const wobbleR = p.radius + Math.sin(t * 0.001 + p.wobble) * 18;
        let x = center.x + Math.cos(p.angle) * wobbleR;
        let y = center.y + Math.sin(p.angle) * wobbleR * 0.72;

        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - x;
          const dy = mouseRef.current.y - y;
          const dist = Math.hypot(dx, dy);
          if (dist > 0 && dist < 280) {
            const pull = (1 - dist / 280) * 0.45;
            x += (dx / dist) * pull * 2.2;
            y += (dy / dist) * pull * 2.2;
          }
        }

        const pulse = 0.75 + Math.sin(t * 0.002 + p.phase) * 0.25;
        const gold =
          MANTRAS.includes(p.text) ||
          p.text.includes("unless") ||
          p.text.includes("one you");

        ctx.font = `500 ${p.size}px ui-monospace, monospace`;
        ctx.fillStyle = gold
          ? `rgba(212, 167, 44, ${p.alpha * fade * pulse})`
          : `rgba(61, 90, 71, ${p.alpha * fade * pulse * 0.9})`;
        ctx.fillText(p.text, x, y);
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    seed();
    raf = requestAnimationFrame(draw);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="signal-field"
      aria-hidden
    />
  );
}
