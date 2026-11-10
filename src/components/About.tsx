import React, { useState } from "react";
import pro from "@/components/images/img.jpg";
import { toast } from "@/components/ui/use-toast";
import {
  Code,
  Palette,
  Bug,
  Download,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Workflow,
  Database,
  ShieldCheck,
  FileDown,
  Bot,
  Server,
} from "lucide-react";
import TiltCard from "./3d/TiltCard";
import ScrollReveal from "./3d/ScrollReveal";

const About: React.FC = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");

  const handleDownload = async (role: string) => {
    const fileMap: Record<string, string> = {
      SQA: "/SQA Manual.pdf",
      SoftwareEngineer: "/Software Developer.pdf",
    };

    if (!role || !fileMap[role]) return;
    const fileUrl = fileMap[role];

    try {
      const response = await fetch(fileUrl, { method: "HEAD" });
      const contentType = response.headers.get("Content-Type");

      if (response.ok || (contentType && contentType.includes("pdf"))) {
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = `Muhammad_Mustafa_${role}_Resume.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast({
          title: "Download Started 🚀",
          description: `Muhammad Mustafa's ${
            role === "SoftwareEngineer" ? "Software Engineer" : "SQA"
          } resume is downloading.`,
          duration: 3500,
        });
      } else {
        toast({
          title: "File Not Found",
          description: "Resume file not found on server. Please try again.",
          variant: "destructive",
          duration: 3500,
        });
      }
    } catch {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = `Muhammad_Mustafa_${role}_Resume.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Download Initiated",
        description: "Your resume download has begun.",
        duration: 3500,
      });
    }
  };

  const services = [
    {
      icon: Code,
      title: "Full-Stack Web Engineering",
      badge: "MERN & React Ecosystem",
      description:
        "Architecting scalable web platforms with React, Vite, Next.js, Node.js, Express.js, MongoDB, MySQL, and Supabase with end-to-end type safety in TypeScript.",
      highlights: [
        "React & TypeScript UI/UX",
        "Node.js & Express.js Backends",
        "MongoDB & MySQL Databases",
        "REST & GraphQL Microservices",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Bot,
      title: "AI Vibe Coding & Tooling",
      badge: "Next-Gen Productivity",
      description:
        "Supercharging development velocity with AI vibe coding: Antigravity IDE, Cursor, OpenAI Codex, Claude AI, and autonomous agent workflows.",
      highlights: [
        "Antigravity & Cursor AI Workflows",
        "Claude AI & Codex Pair Programming",
        "n8n Workflow Automation",
        "Agentic Architectures & LLM APIs",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Terminal,
      title: "Desktop Application Engineering",
      badge: ".NET & C# Mastery",
      description:
        "Constructing robust Windows desktop applications using C#, .NET, Windows Forms, WPF, and Microsoft SQL Server with strict OOP and Design Patterns.",
      highlights: [
        "C# & .NET Platform",
        "SQL Server & Schema Architecture",
        "Clean OOP & Design Patterns",
        "High-Performance Desktop Clients",
      ],
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: Bug,
      title: "Quality Assurance & Testing",
      badge: "Reliability & Quality",
      description:
        "Ensuring bulletproof software reliability through rigorous manual testing, test cases, bug tracking, edge-case coverage, and SDLC compliance.",
      highlights: [
        "Manual Testing & QA Methodology",
        "Comprehensive Test Case Matrix",
        "Regression & Smoke Testing",
        "Defect Lifecycle Management",
      ],
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const skillCategories = [
    { id: "all", label: "All Arsenal" },
    { id: "frontend", label: "Frontend & React" },
    { id: "backend", label: "Node, Express & DBs" },
    { id: "vibe-ai", label: "AI Vibe Coding" },
    { id: "desktop-core", label: "Desktop & C# / .NET" },
    { id: "qa", label: "QA & Testing" },
  ];

  const allSkills = [
    // Frontend
    { name: "React", level: "94%", category: "frontend", tag: "Frontend Library" },
    { name: "TypeScript", level: "92%", category: "frontend", tag: "Typed JavaScript" },
    { name: "JavaScript (ES6+)", level: "96%", category: "frontend", tag: "Core Web" },
    { name: "Next.js", level: "86%", category: "frontend", tag: "React Framework" },
    { name: "Tailwind CSS", level: "95%", category: "frontend", tag: "Styling & UI" },
    { name: "HTML5 & CSS3", level: "98%", category: "frontend", tag: "Web Markup" },

    // Backend & DBs
    { name: "Node.js", level: "90%", category: "backend", tag: "JavaScript Runtime" },
    { name: "Express.js", level: "88%", category: "backend", tag: "Server Framework" },
    { name: "MongoDB", level: "88%", category: "backend", tag: "NoSQL Database" },
    { name: "MySQL", level: "90%", category: "backend", tag: "Relational DB" },
    { name: "Microsoft SQL Server", level: "92%", category: "backend", tag: "Relational Enterprise" },
    { name: "Supabase / PostgreSQL", level: "90%", category: "backend", tag: "Cloud BaaS" },
    { name: "RESTful APIs", level: "94%", category: "backend", tag: "API Architecture" },

    // AI Vibe Coding & Tooling
    { name: "Antigravity IDE", level: "95%", category: "vibe-ai", tag: "Agentic Vibe Coding" },
    { name: "Cursor AI", level: "95%", category: "vibe-ai", tag: "AI Pair Programming" },
    { name: "Claude AI", level: "96%", category: "vibe-ai", tag: "Anthropic LLM" },
    { name: "OpenAI Codex / ChatGPT", level: "95%", category: "vibe-ai", tag: "Code Generation" },
    { name: "Gemini AI API", level: "92%", category: "vibe-ai", tag: "Google Multimodal" },
    { name: "n8n Automation", level: "90%", category: "vibe-ai", tag: "Workflow Automation" },
    { name: "Prompt Engineering", level: "96%", category: "vibe-ai", tag: "AI Directive Craft" },
    { name: "Midjourney & DALL-E", level: "95%", category: "vibe-ai", tag: "Generative Visual Art" },

    // Desktop & Core
    { name: "C#", level: "92%", category: "desktop-core", tag: ".NET Language" },
    { name: ".NET Framework", level: "90%", category: "desktop-core", tag: "Enterprise Platform" },
    { name: "Windows Forms & WPF", level: "90%", category: "desktop-core", tag: "Desktop UI" },
    { name: "C / C++", level: "82%", category: "desktop-core", tag: "Systems Programming" },
    { name: "Python", level: "85%", category: "desktop-core", tag: "Scripting & Data" },
    { name: "OOP & Design Patterns", level: "95%", category: "desktop-core", tag: "Architecture" },
    { name: "DSA", level: "88%", category: "desktop-core", tag: "Data Structures & Algos" },

    // QA & Testing
    { name: "Manual QA Testing", level: "96%", category: "qa", tag: "Quality Assurance" },
    { name: "Test Case Design", level: "94%", category: "qa", tag: "Specification" },
    { name: "Defect Tracking & Jira", level: "92%", category: "qa", tag: "Bug Lifecycle" },
    { name: "SDLC & Agile", level: "94%", category: "qa", tag: "Methodologies" },
    { name: "Git & GitHub", level: "95%", category: "qa", tag: "Version Control" },
  ];

  const filteredSkills =
    activeSkillCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeSkillCategory);

  const milestones = [
    {
      year: "Academic",
      title: "BS in Computer Science",
      org: "Core Foundation",
      description:
        "Rigorous training in Object-Oriented Programming, Data Structures & Algorithms, Relational Database Design, and Software Quality Assurance.",
      icon: GraduationCap,
    },
    {
      year: "Full-Stack & Systems",
      title: "MERN, C#/.NET & Databases",
      org: "Enterprise & Modern Web",
      description:
        "Constructing full-stack web applications with React, Node.js, Express, MongoDB, and MySQL alongside enterprise desktop solutions in C# and SQL Server.",
      icon: Briefcase,
    },
    {
      year: "AI Vibe Era",
      title: "Agentic AI & Vibe Coding",
      org: "Antigravity, Cursor, Claude AI",
      description:
        "Pioneering modern vibe coding methodologies with Antigravity, Cursor, Codex, and Claude to build intelligent applications and automated n8n workflows 10x faster.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-20">
            
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Engineering with Full-Stack Rigor &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                AI Vibe Velocity
              </span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I am a Software Engineer, Full-Stack Developer (React, Node, Express, MongoDB, MySQL),
              and QA specialist who combines deep computer science fundamentals with cutting-edge
              AI vibe coding workflows like Antigravity, Cursor, Codex, and Claude.
            </p>
          </div>
        </ScrollReveal>

        {/* 3D Bio & Interactive Journey */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-24">
          
          {/* Left Column: Visual Hologram Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal animation="3d-flip" className="w-full max-w-md">
              <TiltCard maxTilt={15} perspective={1000} className="w-full">
                <div className="glass-panel p-4 rounded-3xl border-white/10 shadow-2xl relative overflow-hidden group">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900">
                    <img
                      src={pro}
                      alt="Muhammad Mustafa Working"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-90" />
                    
                    {/* Floating Specs on card */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border-white/15 backdrop-blur-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono text-cyan-300 font-semibold">
                          PRIMARY STACK
                        </span>
                        <span className="text-xs font-mono text-gray-300">
                          React • Node • C# • AI
                        </span>
                      </div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono text-purple-300 font-semibold">
                          DATABASES
                        </span>
                        <span className="text-xs font-mono text-gray-300">
                          MongoDB • MySQL • SQL Server
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-emerald-300 font-semibold">
                          VIBE CODING
                        </span>
                        <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          Antigravity • Cursor • Claude
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

          {/* Right Column: Timeline & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal animation="slide-right">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                  <Workflow className="text-cyan-400" />
                  <span>My Journey & Development Approach</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Starting with foundational systems engineering in C/C++ and enterprise desktop
                  development in C#/.NET with SQL Server, I mastered the core principles of OOP,
                  data structures, and robust application architecture.
                </p>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  As the web evolved, I expanded into modern full-stack development with React,
                  Node.js, Express, MongoDB, and MySQL. Today, I embrace modern <strong>AI Vibe Coding</strong>—leveraging
                  tools like Antigravity, Cursor, Codex, and Claude AI to rapidly ideate, refactor,
                  and construct production-ready software with unprecedented speed without compromising code quality.
                </p>
              </div>
            </ScrollReveal>

            {/* Milestones Timeline */}
            <div className="space-y-4 pt-2">
              {milestones.map((milestone, idx) => {
                const Icon = milestone.icon;
                return (
                  <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                    <div className="p-4 rounded-2xl glass-panel border-white/5 hover:border-cyan-500/30 transition-all flex items-start gap-4 group">
                      <div className="p-3 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 border border-white/10 text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-heading font-semibold text-white text-base">
                            {milestone.title}
                          </h4>
                          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-cyan-300 border border-white/10">
                            {milestone.year}
                          </span>
                        </div>
                        <p className="text-xs text-purple-300 font-mono font-medium">
                          {milestone.org}
                        </p>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Services / What I Can Do (3D Tilt Cards) */}
        <div className="mb-24">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3">
                Core Deliverables
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Engineering across full-stack web, AI vibe workflows, desktop systems,
                and comprehensive manual QA testing.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal
                  key={index}
                  animation="perspective-rise"
                  delay={index * 100}
                  className="h-full"
                >
                  <TiltCard maxTilt={14} className="h-full">
                    <div className="glass-panel p-6 rounded-2xl border-white/10 hover:border-cyan-400/40 transition-all h-full flex flex-col justify-between group shadow-xl">
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <div
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.color} p-0.5 shadow-lg group-hover:scale-110 transition-transform`}
                          >
                            <div className="w-full h-full bg-[#0B0F19] rounded-[14px] flex items-center justify-center">
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                          </div>
                          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                            {service.badge}
                          </span>
                        </div>

                        <h4 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-xs text-gray-400 leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>

                      <div className="space-y-1.5 pt-4 border-t border-white/10">
                        {service.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-center gap-2 text-[11px] text-gray-300"
                          >
                            <CheckCircle2 size={12} className="text-cyan-400 shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Skills Matrix with Category Tabs */}
        <div className="mb-24">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3">
                Technical Arsenal & AI Tooling
              </h3>
              <p className="text-gray-400 text-sm">
                Explore the languages, frameworks, AI tools, databases, and engineering principles I use.
              </p>
            </div>
          </ScrollReveal>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveSkillCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeSkillCategory === cat.id
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                    : "glass-panel text-gray-300 hover:text-white hover:border-white/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill, index) => (
              <ScrollReveal
                key={skill.name}
                animation="scale-up"
                delay={index * 40}
              >
                <TiltCard maxTilt={10} glare={false}>
                  <div className="p-4 rounded-xl glass-panel border-white/10 hover:border-cyan-400/40 transition-all group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-heading font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400 font-bold">
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-[10px] text-gray-400 font-mono mb-2">
                      {skill.tag}
                    </p>

                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-700"
                        style={{ width: skill.level }}
                      />
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* 3D Interactive Resume Download Hub */}
        <ScrollReveal animation="3d-flip">
          <TiltCard maxTilt={8} className="w-full">
            <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden glass-panel border-white/15 shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/15 via-purple-500/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/20">
                  <div className="w-full h-full bg-[#0B0F19] rounded-[14px] flex items-center justify-center">
                    <FileDown className="w-8 h-8 text-cyan-300 animate-bounce" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-4xl font-bold text-white">
                    Looking for My Complete Qualifications?
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                    Download my verified resume tailored to your team's specific focus:
                    Software Engineering or Quality Assurance.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <button
                    onClick={() => handleDownload("SoftwareEngineer")}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-[0_0_25px_rgba(79,70,229,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5"
                  >
                    <Download size={18} />
                    <span>Software Engineer Resume (PDF)</span>
                  </button>

                  <button
                    onClick={() => handleDownload("SQA")}
                    className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel border-white/20 hover:border-cyan-400 text-white font-semibold text-sm hover:bg-white/10 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5"
                  >
                    <ShieldCheck size={18} className="text-cyan-400" />
                    <span>SQA / Manual QA Resume</span>
                  </button>
                </div>

                <p className="text-[11px] font-mono text-gray-500">
                  PDF format • Updated 2026 • Verified Contact Information
                </p>
              </div>
            </div>
          </TiltCard>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default About;
