import React, { useEffect, useState, useRef } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const sparkIdCounter = useRef(0);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setIsVisible(true);

    let lastSparkTime = 0;
    const colors = ["#38bdf8", "#818cf8", "#c084fc"];

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const now = performance.now();
      if (now - lastSparkTime > 55) {
        lastSparkTime = now;
        const newSpark: Spark = {
          id: ++sparkIdCounter.current,
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          size: Math.random() * 3 + 2,
          color: colors[sparkIdCounter.current % colors.length],
        };

        setSparks((prev) => [...prev.slice(-12), newSpark]);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("button") ||
        target?.closest("a") ||
        target?.closest("input") ||
        target?.closest("textarea") ||
        target?.closest("select") ||
        target?.closest(".interactive-hover")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Smooth trailing cursor animation loop
  useEffect(() => {
    if (!isVisible) return;
    let animId: number;

    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.22,
        y: prev.y + (pos.y - prev.y) * 0.22,
      }));
      animId = requestAnimationFrame(follow);
    };

    animId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animId);
  }, [pos, isVisible]);

  // Decay sparks
  useEffect(() => {
    if (sparks.length === 0) return;
    const timer = setTimeout(() => {
      setSparks((prev) => prev.slice(1));
    }, 450);
    return () => clearTimeout(timer);
  }, [sparks]);

  if (!isVisible) return null;

  return (
    <>
      {/* Trailing Particle Sparks */}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="fixed pointer-events-none z-[9997] rounded-full animate-ping opacity-60 transition-opacity duration-300"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`,
            width: `${spark.size}px`,
            height: `${spark.size}px`,
            backgroundColor: spark.color,
            boxShadow: `0 0 8px ${spark.color}`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Precision Core Dot */}
      <div
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.6 : isHovering ? 1.5 : 1})`,
        }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_14px_#38bdf8]" />
      </div>

      {/* Trailing Fluid Aura */}
      <div
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          transition: "width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background-color 0.25s ease",
        }}
      >
        <div
          className={`rounded-full border transition-all duration-200 -translate-x-1/2 -translate-y-1/2 ${
            isHovering
              ? "w-14 h-14 border-cyan-400/80 bg-cyan-400/10 backdrop-blur-[1px]"
              : isClicking
              ? "w-7 h-7 border-purple-400 bg-purple-500/25"
              : "w-8 h-8 border-indigo-400/50 bg-indigo-500/5"
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
