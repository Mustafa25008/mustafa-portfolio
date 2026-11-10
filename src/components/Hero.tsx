import React, { useEffect, useRef } from "react";
import { ArrowDown, Sparkles, Terminal, Code2, Cpu, Rocket, Eye, FileText, ChevronRight, Bot, Database } from "lucide-react";
import Typed from "typed.js";
import pro from "@/components/images/img.jpg";
import ThreeHeroCanvas from "./3d/ThreeHeroCanvas";
import TiltCard from "./3d/TiltCard";
import ParticleNameLogo from "./3d/ParticleNameLogo";
import ScrollReveal from "./3d/ScrollReveal";

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  const scrollToSection = (id: string) => {
    if ((window as any).__lenis) {
      (window as any).__lenis.scrollTo("#" + id, { duration: 1.3, offset: -40 });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full-Stack Engineer (React, Node, Express)",
        "AI Vibe Coder (Antigravity, Cursor, Claude)",
        "Desktop App Architect (C# / .NET)",
        "Database Engineer (MongoDB, MySQL)",
        "Software QA & Testing Specialist",
      ],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 2200,
      loop: true,
      showCursor: true,
      cursorChar: "_",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const stats = [
    { value: "1+", label: "Years Experience", icon: Rocket },
    { value: "15+", label: "Engineered Projects", icon: Code2 },
    { value: "MERN + .NET", label: "Full-Stack Mastery", icon: Database },
    { value: "Vibe Coding", label: "Antigravity & Cursor", icon: Bot },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Radial Glow Spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.2)] animate-pulse-glow">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>Available for Full-Stack, .NET & AI Vibe Roles</span>
                <Sparkles size={12} className="text-cyan-400" />
              </div>
            </ScrollReveal>

            {/* Main Headline & Signature Particle Name Effect */}
            <ScrollReveal animation="fade-up" delay={150}>
              <div className="space-y-2">
                <h2 className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gray-400 font-semibold font-mono">
                  Muhammad
                </h2>

                {/* Interactive Particle Name Logo Generator */}
                <div className="w-full max-w-[560px] mx-auto lg:mx-0">
                  <ParticleNameLogo />
                </div>
                
                {/* Dynamic Typed Subheading */}
                <div className="h-12 flex items-center justify-center lg:justify-start text-lg sm:text-xl md:text-2xl font-light text-cyan-200/90 font-mono">
                  <span className="text-purple-400 mr-2">&gt;</span>
                  <span ref={typedRef} className="font-semibold" />
                </div>
              </div>
            </ScrollReveal>

            {/* Bio Paragraph */}
            <ScrollReveal animation="fade-up" delay={250}>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Building scalable web apps (React, Node, Express, MongoDB, MySQL), high-performance
                desktop systems (C#, .NET, SQL Server), and harnessing cutting-edge <strong>AI Vibe Coding</strong> (Antigravity, Cursor, Codex, Claude AI) to ship robust digital products at lightspeed.
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal animation="fade-up" delay={350}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-sm shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:shadow-[0_0_45px_rgba(56,189,248,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Rocket size={17} className="group-hover:translate-x-0.5 transition-transform" />
                    <span>Explore Work</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>

                <button
                  onClick={() => scrollToSection("certifications")}
                  className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel border-white/15 hover:border-cyan-400/50 text-white font-semibold text-sm hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Certifications</span>
                  <ChevronRight size={17} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="/Software Developer.pdf"
                  download="Muhammad_Mustafa_Resume.pdf"
                  className="w-full sm:w-auto px-6 py-4 rounded-full glass-pill text-gray-300 hover:text-white text-sm font-medium hover:border-purple-400/40 transition-all flex items-center justify-center gap-2 group"
                >
                  <FileText size={16} className="text-purple-400 group-hover:scale-110 transition-transform" />
                  <span>Resume</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Quick Stats Grid */}
            <ScrollReveal animation="fade-up" delay={450}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl glass-panel border-white/5 hover:border-cyan-500/30 transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon size={14} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                        <span className="font-heading font-bold text-base sm:text-lg text-white">
                          {stat.value}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400 font-medium leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 3D Interactive Canvas & Profile Focal (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* 3D Scene Wrapper */}
            <div className="relative w-full h-[430px] sm:h-[500px] flex items-center justify-center">
              
              {/* Three.js Interactive 3D Canvas */}
              <div className="absolute inset-0 z-0">
                <ThreeHeroCanvas />
              </div>

              {/* Central Floating Profile Hologram Card */}
              <ScrollReveal animation="3d-flip" delay={200} className="w-full max-w-[280px] sm:max-w-[300px]">
                <TiltCard
                  maxTilt={18}
                  perspective={1200}
                  className="relative z-10 w-full aspect-square"
                >
                  <div className="relative w-full h-full rounded-3xl p-1 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 shadow-[0_0_50px_rgba(99,102,241,0.4)]">
                    <div className="w-full h-full rounded-[22px] overflow-hidden relative bg-[#07090e]">
                      <img
                        src={pro}
                        alt="Muhammad Mustafa"
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 filter brightness-105 contrast-105"
                      />
                      
                      {/* Futuristic Glass Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-80" />
                      
                      {/* Hologram Grid Lines */}
                      <div 
                        className="absolute inset-0 opacity-15 pointer-events-none"
                        style={{
                          backgroundImage: "linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)",
                          backgroundSize: "20px 20px"
                        }}
                      />

                      {/* Bottom Floating Badge */}
                      <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl glass-panel border-white/20 backdrop-blur-md text-center">
                        <p className="text-xs font-bold text-white tracking-wide">
                          Muhammad Mustafa
                        </p>
                        <p className="text-[10px] text-cyan-300 font-mono">
                          BS Computer Science • Full-Stack & AI
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Orbit Tech Badges */}
                  <div className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full glass-panel border-cyan-400/40 text-[11px] font-mono text-cyan-300 shadow-lg shadow-cyan-500/20 animate-float">
                    ⚡ React & Node.js
                  </div>
                  <div className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full glass-panel border-purple-400/40 text-[11px] font-mono text-purple-300 shadow-lg shadow-purple-500/20 animate-float-reverse">
                    🚀 C# / .NET & Mongo
                  </div>
                  <div className="absolute top-1/2 -left-8 px-2.5 py-1 rounded-full glass-panel border-indigo-400/40 text-[10px] font-mono text-indigo-300 shadow-lg animate-float-slow hidden sm:block">
                    🤖 Cursor & Claude AI
                  </div>
                </TiltCard>
              </ScrollReveal>

              {/* Helper hint */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-mono text-gray-500 tracking-wider pointer-events-none uppercase">
                ✦ Interactive 3D • Drag to rotate ✦
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
