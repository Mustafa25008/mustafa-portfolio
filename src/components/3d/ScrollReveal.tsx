import React, { useEffect, useRef, useState } from "react";

type RevealAnimation =
  | "fade-up"
  | "3d-flip"
  | "scale-up"
  | "slide-left"
  | "slide-right"
  | "perspective-rise";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: RevealAnimation;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 800,
  threshold = 0.15,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const getInitialStyle = (): React.CSSProperties => {
    switch (animation) {
      case "3d-flip":
        return {
          opacity: 0,
          transform: "perspective(1000px) rotateX(25deg) translateY(45px) scale(0.94)",
        };
      case "perspective-rise":
        return {
          opacity: 0,
          transform: "perspective(1200px) rotateX(18deg) translateY(55px)",
        };
      case "scale-up":
        return {
          opacity: 0,
          transform: "scale(0.88)",
        };
      case "slide-left":
        return {
          opacity: 0,
          transform: "translateX(-50px)",
        };
      case "slide-right":
        return {
          opacity: 0,
          transform: "translateX(50px)",
        };
      case "fade-up":
      default:
        return {
          opacity: 0,
          transform: "translateY(35px)",
        };
    }
  };

  const getVisibleStyle = (): React.CSSProperties => ({
    opacity: 1,
    transform: "perspective(1000px) rotateX(0deg) translateX(0) translateY(0) scale(1)",
  });

  return (
    <div
      ref={elementRef}
      style={{
        ...(isVisible ? getVisibleStyle() : getInitialStyle()),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "transform, opacity",
      }}
      className={`preserve-3d ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;

