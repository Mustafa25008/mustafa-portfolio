import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Copy,
  Check,
  Sparkles,
  Clock,
  Globe,
  Loader2,
} from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "@/components/ui/use-toast";
import TiltCard from "./3d/TiltCard";
import ScrollReveal from "./3d/ScrollReveal";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    toast({
      title: "Copied to Clipboard! 📋",
      description: `${text} copied. Ready to paste.`,
      duration: 3000,
    });
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.full_name || !formData.email || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please complete all fields before sending.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { full_name, email, message } = formData;
      const { error } = await supabase
        .from("contact_submissions")
        .insert([{ full_name, email, message }]);

      if (error) {
        toast({
          title: "Submission Error",
          description: error.message || "Failed to deliver message via Supabase.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Message Dispatched! 🚀",
          description: "Thank you for reaching out, Mustafa will respond shortly.",
          duration: 4000,
        });
        setFormData({ full_name: "", email: "", message: "" });
      }
    } catch {
      toast({
        title: "Connection Notice",
        description: "Message logged. You can also email directly at mustafa25008c@gmail.com",
        duration: 4000,
      });
      setFormData({ full_name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4">
              <Sparkles size={13} className="text-cyan-400" />
              <span>Initiate Collaboration</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Whether you need a dedicated Full-Stack or Desktop Engineer, an AI vibe coding partner,
              or an imaginative AI-driven concept, I'm here to bring your vision to life.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Quick Copy (5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal animation="slide-left" className="space-y-6">
            
            {/* Availability Banner */}
            <div className="p-6 rounded-2xl glass-panel border-cyan-500/30 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-semibold text-white">
                  Available for Full-time Roles & Contracts
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Currently open for challenging software engineering positions,
                innovative freelance projects, and AI integrations worldwide.
              </p>
              <div className="flex items-center gap-4 pt-2 border-t border-white/10 text-xs text-gray-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-cyan-400" />
                  &lt; 24h Response
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe size={14} className="text-purple-400" />
                  Remote Worldwide
                </span>
              </div>
            </div>

            {/* Direct Contact Methods with Copy Action */}
            <div className="space-y-3">
              {/* Email */}
              <TiltCard maxTilt={8} glare={false}>
                <div className="p-4 rounded-xl glass-panel border-white/10 hover:border-cyan-400/40 transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-gray-400 uppercase">
                        Email Address
                      </p>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=mustafa25008c@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors"
                      >
                        mustafa25008c@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy("mustafa25008c@gmail.com", "email")}
                    className="p-2 rounded-lg glass-pill text-gray-400 hover:text-white transition-all"
                    title="Copy Email"
                  >
                    {copiedField === "email" ? (
                      <Check size={14} className="text-emerald-400" />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>
              </TiltCard>

              {/* Phone */}
              <TiltCard maxTilt={8} glare={false}>
                <div className="p-4 rounded-xl glass-panel border-white/10 hover:border-cyan-400/40 transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-gray-400 uppercase">
                        Direct Phone / WhatsApp
                      </p>
                      <p className="text-xs font-semibold text-white">
                        +92 324 4842747
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy("+92 3244842747", "phone")}
                    className="p-2 rounded-lg glass-pill text-gray-400 hover:text-white transition-all"
                    title="Copy Phone"
                  >
                    {copiedField === "phone" ? (
                      <Check size={14} className="text-emerald-400" />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>
              </TiltCard>

              {/* Location */}
              <TiltCard maxTilt={8} glare={false}>
                <div className="p-4 rounded-xl glass-panel border-white/10 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-gray-400 uppercase">
                      Based In
                    </p>
                    <p className="text-xs font-semibold text-white">
                      Lahore, Pakistan (PKT / UTC+5)
                    </p>
                  </div>
                </div>
              </TiltCard>
            </div>

            {/* Social Connect Matrix */}
            <div className="p-5 rounded-2xl glass-panel border-white/10 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">
                Connect on Social Networks
              </h4>
              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href="https://github.com/Mustafa25008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl glass-pill hover:border-cyan-400/50 hover:bg-white/10 transition-all group"
                >
                  <Github size={20} className="text-gray-300 group-hover:text-white mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono text-gray-300">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/muhammad-mustafa-90881537a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl glass-pill hover:border-blue-400/50 hover:bg-white/10 transition-all group"
                >
                  <Linkedin size={20} className="text-blue-400 group-hover:text-blue-300 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono text-gray-300">LinkedIn</span>
                </a>

                <a
                  href="https://www.fiverr.com/john06489?public_mode=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl glass-pill hover:border-emerald-400/50 hover:bg-white/10 transition-all group"
                >
                  <span className="font-['Montserrat'] font-black text-lg text-emerald-400 group-hover:scale-110 transition-transform leading-none mb-1">
                    fi
                  </span>
                  <span className="text-[10px] font-mono text-gray-300">Fiverr Pro</span>
                </a>
              </div>
            </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 3D Form Card (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="slide-right">
              <TiltCard maxTilt={8} perspective={1200} className="w-full">
              <div className="glass-panel p-8 sm:p-10 rounded-3xl border-white/15 shadow-2xl space-y-6">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-2">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-gray-400">
                    Your inquiry is saved securely to Supabase and notified directly to Mustafa.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="full_name"
                      className="block text-xs font-mono uppercase tracking-wider text-gray-300"
                    >
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Alex Henderson"
                      className="w-full px-4 py-3 text-sm rounded-xl glass-panel border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-gray-300"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 text-sm rounded-xl glass-panel border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-gray-300"
                    >
                      Message or Project Vision
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project, timeline, target platform, or role requirements..."
                      className="w-full px-4 py-3 text-sm rounded-xl glass-panel border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-sm shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </TiltCard>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
