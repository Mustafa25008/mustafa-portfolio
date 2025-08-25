import React from "react";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import pro from "@/components/images/img.jpg";

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Typing effect
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Software Engineer", "Software Quality Assurance", "AI Artist"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true, // blinking cursor
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <div className="relative w-32 h-32 mx-auto mb-6 animate-pulse">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              style={{
                backgroundImage: `url(${pro})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <img
              src=""
              //alt="Profile"
              className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white/20"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 animate-fade-in delay-300">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.4]">
            Muhammad
            <span className="block bg-gradient-to-r pb-3 from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-3">
              Mustafa
            </span>
            {/* Typing Effect */}
            <span className="block text-3xl md:text-4xl font-light mt-2">
              <span ref={typedRef} />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Crafting innovative digital experiences through code and AI-powered
            creativity
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 mb-16">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore My Work
            </button>

            {/* Down Arrow in between */}
            <div className="hidden sm:flex items-center">
              <button
                onClick={() => scrollToSection("about")}
                style={{ animation: "bounce 1s infinite" }}
                className="text-white/70 hover:text-white transition-colors duration-200  mx-2"
              >
                <ArrowDown size={28} />
              </button>
            </div>

            <button
              onClick={() => scrollToSection("about")}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Know Me More
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/*<div className="absolute bottom-15 left-1/2  transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            <ArrowDown size={32} />
          </button>
        </div>*/}
      </div>
    </section>
  );
};

export default Hero;
