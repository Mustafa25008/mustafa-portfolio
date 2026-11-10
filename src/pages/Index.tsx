import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import ThreeBackground from "../components/3d/ThreeBackground";
import CustomCursor from "../components/3d/CustomCursor";
import ScrollProgress from "../components/3d/ScrollProgress";
import SmoothScroll from "../components/3d/SmoothScroll";
import { Github, Linkedin, Heart, Clock, Sparkles } from "lucide-react";

const Index: React.FC = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in Asia/Karachi (PKT)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#07090e] text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
        {/* Interactive 3D Ambient Canvas Background */}
        <ThreeBackground />

        {/* Cyber Magnetic Custom Cursor */}
        <CustomCursor />

        {/* Top Scroll Indicator & 3D Back-to-Top Dial */}
        <ScrollProgress />

        {/* Capsule Navigation Header */}
        <Navigation />

        {/* Main Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Portfolio />
          <Certifications />
          <Contact />
        </main>

      {/* High-End Cyber Glassmorphic Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#07090e]/80 backdrop-blur-xl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
            
            {/* Left Monogram & Bio */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 p-[1.5px] shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center font-heading font-black text-sm text-cyan-300">
                  M
                </div>
              </div>
              <div>
                <p className="font-heading font-bold text-white text-sm">
                  Muhammad Mustafa
                </p>
                <p className="text-[11px] font-mono text-gray-400">
                  Software Engineer • Full Stack • AI Technologist
                </p>
              </div>
            </div>

            {/* Middle: Live Pakistan Time */}
            <div className="px-4 py-2 rounded-full glass-panel border-white/10 flex items-center gap-2 text-xs font-mono text-cyan-300">
              <Clock size={13} className="text-cyan-400" />
              <span>Lahore, PK: {localTime || "PKT"}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
            </div>

            {/* Right: Social Quick Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Mustafa25008"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass-pill text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-mustafa-90881537a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass-pill text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.fiverr.com/john06489?public_mode=true"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full glass-pill text-xs font-bold text-emerald-400 hover:text-white transition-colors"
                aria-label="Fiverr Profile"
              >
                fi
              </a>
            </div>
          </div>

          {/* Bottom Copyright & Tech Stack */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center text-xs text-gray-500 font-mono gap-3">
            <p>
              © {new Date().getFullYear()} Muhammad Mustafa. All rights reserved.
            </p>
            {/* <p className="flex items-center gap-1.5">
              <span>Engineered with 3D WebGL</span>
              <span className="text-purple-400">•</span>
              <span>Three.js</span>
              <span className="text-purple-400">•</span>
              <span>React</span>
              <span className="text-purple-400">•</span>
              <span>Tailwind CSS</span>
            </p> */}
          </div>
        </div>
      </footer>
      </div>
    </SmoothScroll>
  );
};

export default Index;
