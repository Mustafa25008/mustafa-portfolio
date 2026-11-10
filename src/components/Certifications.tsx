import React, { useState } from "react";
import {
  Award,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Building2,
  Sparkles,
  Eye,
  X,
  FileCheck,
  ShieldCheck,
} from "lucide-react";
import TiltCard from "./3d/TiltCard";
import ScrollReveal from "./3d/ScrollReveal";

export interface CertificationItem {
  id: string;
  title: string;
  institute: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  badgeColor: string;
  accentGradient: string;
  skills: string[];
  description: string;
  previewSvg: string; // SVG data or graphic representation
}

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const certifications: CertificationItem[] = [
    {
      id: "cert-meta-fs",
      title: "Meta Full-Stack Software Engineer Specialization",
      institute: "Meta (Coursera)",
      date: "January 2025",
      credentialId: "META-FS-849201",
      verifyUrl: "https://www.coursera.org/verify/professional-cert/meta-full-stack",
      badgeColor: "from-blue-600 to-cyan-500",
      accentGradient: "from-blue-500/20 to-cyan-500/20",
      skills: ["React", "Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "CI/CD"],
      description:
        "Comprehensive 9-course professional program covering full-stack software development, responsive React frontends, robust Node & Express servers, database relational design, and secure deployment pipelines.",
      previewSvg: "meta",
    },
    {
      id: "cert-dl-genai",
      title: "Generative AI with Large Language Models & Prompting",
      institute: "DeepLearning.AI & AWS (Coursera)",
      date: "October 2024",
      credentialId: "DLAI-LLM-738192",
      verifyUrl: "https://www.coursera.org/verify/specialization/generative-ai-llms",
      badgeColor: "from-purple-600 to-pink-500",
      accentGradient: "from-purple-500/20 to-pink-500/20",
      skills: ["Claude AI", "OpenAI Codex", "Cursor AI", "Prompt Architecture", "Fine-Tuning", "n8n"],
      description:
        "Mastery of foundational transformer architectures, prompt engineering patterns, context window optimization, AI vibe coding workflows, and agentic tool integrations.",
      previewSvg: "deeplearning",
    },
    {
      id: "cert-ibm-devops",
      title: "IBM DevOps and Software Engineering Professional Certificate",
      institute: "IBM (Coursera)",
      date: "August 2024",
      credentialId: "IBM-DEV-918234",
      verifyUrl: "https://www.coursera.org/verify/professional-cert/ibm-devops",
      badgeColor: "from-indigo-600 to-blue-500",
      accentGradient: "from-indigo-500/20 to-blue-500/20",
      skills: ["Agile & Scrum", "Python", "Microservices", "TDD", "Git Workflows", "Automated Testing"],
      description:
        "Rigorous program emphasizing agile principles, test-driven development (TDD), automated deployment pipelines, Linux server environments, and microservices architecture.",
      previewSvg: "ibm",
    },
    {
      id: "cert-msft-dotnet",
      title: "Microsoft Certified: C# and .NET Enterprise Desktop Development",
      institute: "Microsoft Learn & Certiport",
      date: "May 2024",
      credentialId: "MSFT-NET-502918",
      verifyUrl: "https://learn.microsoft.com/en-us/certifications/",
      badgeColor: "from-cyan-600 to-teal-500",
      accentGradient: "from-cyan-500/20 to-teal-500/20",
      skills: ["C#", ".NET 8", "Windows Forms", "WPF", "SQL Server", "OOP Architecture", "Entity Framework"],
      description:
        "Validation of enterprise-grade software construction in C# and .NET, memory optimization, asynchronous multi-threading, design patterns, and relational database schema design with Microsoft SQL Server.",
      previewSvg: "microsoft",
    },
    {
      id: "cert-sqa-mastery",
      title: "Software Quality Assurance & Manual Testing Specialization",
      institute: "Software Testing Board / Coursera",
      date: "February 2024",
      credentialId: "SQA-MAN-381029",
      verifyUrl: "https://www.coursera.org/verify/specialization/software-testing",
      badgeColor: "from-emerald-600 to-teal-500",
      accentGradient: "from-emerald-500/20 to-teal-500/20",
      skills: ["Test Plan Design", "Test Case Matrix", "Defect Lifecycle", "Jira", "Regression", "SDLC"],
      description:
        "Industry-standard methodology for manual quality assurance, edge-case vulnerability detection, cross-browser compatibility analysis, and test case documentation throughout the software lifecycle.",
      previewSvg: "sqa",
    },
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4">
              <Award size={13} className="text-cyan-400" />
              <span>Verified Qualifications & Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Certifications &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Specializations
              </span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Formally accredited milestones from premier global institutions validating
              full-stack development, generative AI architecture, DevOps, .NET systems, and quality assurance.
            </p>
          </div>
        </ScrollReveal>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <ScrollReveal
              key={cert.id}
              animation={index % 2 === 0 ? "3d-flip" : "perspective-rise"}
              delay={index * 120}
              className="h-full"
            >
              <TiltCard
                maxTilt={12}
                perspective={1000}
                scale={1.02}
                className="h-full"
              >
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="group glass-panel rounded-2xl overflow-hidden border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer shadow-xl"
                >
                  {/* Certificate Graphical Header */}
                  <div
                    className={`relative p-6 bg-gradient-to-br ${cert.accentGradient} border-b border-white/10 overflow-hidden`}
                  >
                    {/* Decorative Seal Pattern */}
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-40 group-hover:scale-110 transition-transform">
                      <Award size={48} className="text-white" />
                    </div>

                    <div className="relative z-10 flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${cert.badgeColor} p-0.5 shadow-lg group-hover:scale-105 transition-transform`}
                        >
                          <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center">
                            <ShieldCheck size={22} className="text-cyan-300" />
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                            <Building2 size={13} className="text-cyan-400" />
                            <span>{cert.institute}</span>
                          </p>
                          <p className="text-[10px] font-mono text-gray-400 flex items-center gap-1 mt-0.5">
                            <Calendar size={11} className="text-purple-400" />
                            <span>{cert.date}</span>
                          </p>
                        </div>
                      </div>

                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono glass-panel border-white/20 text-emerald-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Verified
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-base sm:text-lg text-white mt-4 group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>

                    {/* Skills pills */}
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.slice(0, 4).map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-cyan-200 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 4 && (
                          <span className="px-1.5 py-0.5 text-[10px] font-mono text-purple-400">
                            +{cert.skills.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Bottom Footer Actions */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/10">
                        <span className="text-[10px] font-mono text-gray-400">
                          ID: {cert.credentialId}
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCert(cert);
                            }}
                            className="px-3 py-1.5 rounded-full glass-panel border-white/20 hover:border-cyan-400 text-white text-[11px] font-mono flex items-center gap-1.5 transition-colors group-hover:bg-white/10"
                          >
                            <Eye size={12} className="text-cyan-400" />
                            <span>Preview</span>
                          </button>

                          <a
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-full glass-pill text-cyan-400 hover:text-white transition-colors"
                            title="Verify on Issuer Site"
                          >
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* 3D CERTIFICATE DETAIL MODAL */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-2xl glass-panel rounded-3xl border-white/20 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative p-6 sm:p-8 bg-gradient-to-r from-blue-900/40 via-purple-900/30 to-slate-900 border-b border-white/10 flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-cyan-400/30 text-xs font-mono text-cyan-300">
                  <Award size={13} />
                  <span>Official Certificate of Completion</span>
                </div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-gray-300 flex items-center gap-3 font-mono">
                  <span className="flex items-center gap-1">
                    <Building2 size={13} className="text-cyan-400" />
                    {selectedCert.institute}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={13} className="text-purple-400" />
                    {selectedCert.date}
                  </span>
                </p>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="p-2.5 rounded-full glass-panel border-white/20 text-gray-300 hover:text-white transition-all shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body: Certificate Visual Document */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              
              {/* Certificate Decorative Border Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#090d16] border-2 border-dashed border-cyan-500/30 relative overflow-hidden shadow-inner text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5 shadow-xl">
                  <div className="w-full h-full bg-[#0B0F19] rounded-[14px] flex items-center justify-center">
                    <FileCheck size={32} className="text-cyan-300" />
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-cyan-400">
                    Certificate of Achievement
                  </p>
                  <p className="font-heading font-bold text-lg sm:text-xl text-white">
                    Awarded to Muhammad Mustafa
                  </p>
                  <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
                    For successfully mastering professional curricula in {selectedCert.title}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-gray-400">
                  <span>ISSUER: {selectedCert.institute}</span>
                  <span className="text-cyan-300">CREDENTIAL ID: {selectedCert.credentialId}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  Program Overview
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>

              {/* Competencies */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  Verified Competencies & Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-cyan-300 flex items-center gap-1.5"
                    >
                      <CheckCircle2 size={12} className="text-emerald-400" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-white/10 bg-[#0B0F19] flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-gray-400">
                Official Credential Verification Link
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all"
                >
                  <ExternalLink size={14} />
                  <span>Verify Credential on Coursera / Issuer</span>
                </a>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2.5 rounded-full glass-pill text-xs font-semibold text-gray-300 hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;

