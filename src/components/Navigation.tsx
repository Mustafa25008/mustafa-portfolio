import React, { useState, useEffect } from "react";
import { Menu, X, Download, Sparkles, Send, Briefcase, User, Home, Layers, Award } from "lucide-react";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section scroll spy
      const sections = ["hero", "about", "portfolio", "certifications", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if ((window as any).__lenis) {
      (window as any).__lenis.scrollTo("#" + id, { duration: 1.3, offset: -40 });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "portfolio", label: "Work", icon: Layers },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "contact", label: "Contact", icon: Send },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Logo with 3D Monogram */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          className="group flex items-center gap-3 px-3.5 py-2 rounded-full glass-panel border-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
        >
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-[0_0_15px_rgba(56,189,248,0.4)] group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0B0F19] rounded-[7px] flex items-center justify-center">
              <span className="font-heading font-black text-sm tracking-tighter bg-gradient-to-r from-cyan-400 to-indigo-300 bg-clip-text text-transparent">
                M
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Mustafa<span className="text-cyan-400">.dev</span>
            </span>
            <span className="text-[10px] text-gray-400 flex items-center gap-1 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              Available for work
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Pill */}
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full glass-panel border-white/10 shadow-2xl shadow-indigo-950/40">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "text-white bg-gradient-to-r from-blue-600/90 to-purple-600/90 shadow-md shadow-blue-500/25"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon size={14} className={isActive ? "text-cyan-300" : "text-gray-400"} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Software Developer.pdf"
            download="Muhammad_Mustafa_Resume.pdf"
            className="group flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-white/10 hover:border-purple-400/40 text-xs font-semibold text-gray-200 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <Download size={14} className="text-purple-400 group-hover:translate-y-0.5 transition-transform" />
            <span>Resume</span>
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            className="group relative px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white text-xs font-semibold overflow-hidden shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <Sparkles size={13} className="text-cyan-200 animate-spin-slow" />
              <span>Let's Talk</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2.5 rounded-full glass-panel border-white/10 text-gray-200 hover:text-white active:scale-95 transition-all"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 pointer-events-auto animate-fade-in">
          <div className="glass-panel p-6 rounded-2xl border-white/15 shadow-2xl space-y-4">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left text-sm font-medium transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon size={18} className={isActive ? "text-cyan-300" : "text-gray-400"} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="/Software Developer.pdf"
                download="Muhammad_Mustafa_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl glass-pill text-sm font-semibold text-gray-200 hover:text-white"
              >
                <Download size={16} className="text-purple-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white text-sm font-semibold shadow-lg shadow-blue-600/30"
              >
                <Send size={16} />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
