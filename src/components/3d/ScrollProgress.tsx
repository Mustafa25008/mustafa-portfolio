import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(scroll);
      setShowTopBtn(totalScroll > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Top Header Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[100] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_12px_#38bdf8]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating 3D Back to Top Dial */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 transform ${
          showTopBtn
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-90 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full glass-panel hover:border-cyan-400/50 shadow-xl hover:shadow-cyan-500/20 hover:scale-110 active:scale-95 transition-all duration-300"
        >
          {/* Circular SVG Progress */}
          <svg className="absolute inset-0 w-12 h-12 -rotate-90 pointer-events-none">
            <circle
              cx="24"
              cy="24"
              r="18"
              fill="transparent"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="2.5"
            />
            <circle
              cx="24"
              cy="24"
              r="18"
              fill="transparent"
              stroke="url(#progressGradient)"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-150"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>

          <ArrowUp className="w-5 h-5 text-gray-200 group-hover:text-cyan-400 transition-colors" />
        </button>
      </div>
    </>
  );
};

export default ScrollProgress;

