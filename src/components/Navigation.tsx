import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <a href="#">Mustafa`s Portfolio</a>
              
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-foreground hover:text-blue-600 transition-colors duration-200 text-slate-400"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-blue-600 transition-colors duration-200 text-slate-400"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-foreground hover:text-blue-600 transition-colors duration-200 text-slate-400"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-blue-600 transition-colors duration-200 text-slate-400"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-blue-600 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md border-b">
            <button
              onClick={() => scrollToSection("hero")}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-blue-600 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-blue-600 transition-colors duration-200"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
