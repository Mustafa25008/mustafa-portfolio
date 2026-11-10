import React, { useEffect, useRef, useState } from "react";
import { Sparkles, RefreshCw } from "lucide-react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

export const ParticleNameLogo: React.FC<{
  className?: string;
  defaultText?: "MUSTAFA" | "M";
}> = ({ className = "", defaultText = "MUSTAFA" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentText, setCurrentText] = useState<"MUSTAFA" | "M">(defaultText);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 90 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const width = (canvas.width = canvas.parentElement?.clientWidth || 550);
    const height = (canvas.height = 140);

    // Create offscreen canvas to sample pixel targets for text
    const offCanvas = document.createElement("canvas");
    offCanvas.width = width;
    offCanvas.height = height;
    const offCtx = offCanvas.getContext("2d");
    if (!offCtx) return;

    const generateTextCoordinates = (text: string) => {
      offCtx.clearRect(0, 0, width, height);

      const fontSize = text === "M" ? 110 : Math.min(width / 7.2, 76);
      offCtx.font = `900 ${fontSize}px 'Outfit', 'Montserrat', sans-serif`;
      offCtx.fillStyle = "#ffffff";
      offCtx.textAlign = "center";
      offCtx.textBaseline = "middle";
      offCtx.fillText(text, width / 2, height / 2);

      const imgData = offCtx.getImageData(0, 0, width, height);
      const data = imgData.data;
      const step = text === "M" ? 3 : 4;
      const targets: { x: number; y: number }[] = [];

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          if (data[index + 3] > 128) {
            targets.push({ x, y });
          }
        }
      }
      return targets;
    };

    const targets = generateTextCoordinates(currentText);
    const colors = [
      "#38bdf8", // cyan
      "#60a5fa", // sky blue
      "#818cf8", // indigo
      "#a855f7", // purple
      "#c084fc", // lavender
    ];

    // Initialize or morph particles
    const newParticles: Particle[] = [];
    const prevParticles = particlesRef.current;

    for (let i = 0; i < targets.length; i++) {
      const target = targets[i];
      const prev = prevParticles[i];

      const startX = prev ? prev.x : Math.random() * width;
      const startY = prev ? prev.y : Math.random() * height;

      newParticles.push({
        x: startX,
        y: startY,
        originX: target.x,
        originY: target.y,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        size: Math.random() * 1.8 + 1.2,
        color: colors[i % colors.length],
      });
    }

    particlesRef.current = newParticles;

    // Mouse movement
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    // Click creates a shockwave repulsion
    const onClick = () => {
      particlesRef.current.forEach((p) => {
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = 120 / dist;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      });
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("click", onClick);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const particles = particlesRef.current;
      const friction = 0.88;
      const ease = 0.08;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Repulsion from cursor
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - distance) / mouse.radius;
          p.vx -= Math.cos(angle) * force * 7;
          p.vy -= Math.sin(angle) * force * 7;
        }

        // Spring return to origin
        p.vx += (p.originX - p.x) * ease;
        p.vy += (p.originY - p.y) * ease;

        p.vx *= friction;
        p.vy *= friction;

        p.x += p.vx;
        p.y += p.vy;

        // Draw glowing particle
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("click", onClick);
    };
  }, [currentText]);

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full max-w-[560px] h-[140px] cursor-pointer active:scale-[0.99] transition-transform"
        title="Interactive particle text! Move mouse to scatter or click to shockwave"
      />

      <div className="flex items-center gap-2 mt-1">
        <button
          onClick={() =>
            setCurrentText((prev) => (prev === "MUSTAFA" ? "M" : "MUSTAFA"))
          }
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-pill text-[10px] font-mono text-cyan-300 hover:text-white hover:border-cyan-400/50 transition-all group"
        >
          <RefreshCw size={11} className="group-hover:rotate-180 transition-transform duration-500" />
          <span>Morph Particle Logo: {currentText === "MUSTAFA" ? "Show Monogram 'M'" : "Show 'MUSTAFA'"}</span>
        </button>
      </div>
    </div>
  );
};

export default ParticleNameLogo;

