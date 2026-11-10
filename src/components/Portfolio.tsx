import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  Search,
  Eye,
  Sliders,
  X,
  Code2,
  Cpu,
  Monitor,
  Palette,
  CheckCircle2,
} from "lucide-react";
import TiltCard from "./3d/TiltCard";
import ScrollReveal from "./3d/ScrollReveal";

interface ProjectItem {
  id: string;
  title: string;
  category: "web" | "desktop" | "illusion" | "ai-art";
  categoryLabel: string;
  description: string;
  fullDetails?: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  tool?: string;
  hint?: string;
}

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<ProjectItem | null>(null);
  const [illusionBlur, setIllusionBlur] = useState<boolean>(false);

  const portfolioItems: ProjectItem[] = [
    {
      id: "recipe-magic",
      title: "AI Recipe Generator (Recipe Magic)",
      category: "web",
      categoryLabel: "Web & AI Application",
      description:
        "Intelligent culinary platform that transforms user ingredients into curated chef-grade recipes with nutritional analysis and dynamic dashboards.",
      fullDetails:
        "Built with React, Vite, and Supabase, integrated with Gemini AI via n8n automation webhooks. Users can specify dietary preferences, available ingredients, and calorie constraints to generate mouth-watering recipes stored permanently in Supabase with instant reactive UI.",
      image: "/project/recipe.png",
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "shadcn/ui",
        "Supabase",
        "n8n",
        "Gemini AI",
      ],
      github: "https://github.com/Mustafa25008",
      demo: "https://ai-recipemix.vercel.app/",
    },
    {
      id: "blog-summarizer",
      title: "Blog Summarizer & Urdu Translator",
      category: "web",
      categoryLabel: "Web & AI Application",
      description:
        "AI-powered content intelligence platform that compresses long-form articles into bullet summaries and provides one-click Urdu translations.",
      fullDetails:
        "Leverages cutting-edge LLMs to parse complex editorial content, extract key takeaways, and provide natural Urdu translations. Features modern glassmorphic UI, responsive layouts, and saved reading histories in Supabase.",
      image: "/project/blog.png",
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "shadcn/ui",
        "Supabase",
        "Lucide React",
        "AI Engine",
      ],
      github: "https://github.com/Mustafa25008",
      demo: "https://blog-summarizer-topaz.vercel.app/",
    },
    {
      id: "lms-system",
      title: "Learning Management System (LMS)",
      category: "desktop",
      categoryLabel: "Desktop Enterprise Software",
      description:
        "Full-fledged institutional management software for academic courses, student enrollments, faculty grade books, and real-time GPA tracking.",
      fullDetails:
        "Engineered with C# and .NET Windows Forms backed by Microsoft SQL Server. Implements rigorous Object-Oriented Principles, Repository and Factory Design Patterns, role-based authentication, and automated report card generation.",
      image: "/project/lms.png",
      tech: [
        "C#",
        ".NET Platform",
        "Windows Forms",
        "SQL Server",
        "OOP Design Patterns",
        "Relational DB",
      ],
      github: "https://github.com/Mustafa25008",
      demo: "",
    },
    {
      id: "gmail-desktop",
      title: "Gmail-Style Desktop Mail Client",
      category: "desktop",
      categoryLabel: "Desktop Enterprise Software",
      description:
        "High-performance Windows email application replicating Gmail core workflows: composition, inbox classification, label indexing, and search.",
      fullDetails:
        "A desktop client developed in C# and .NET Windows Forms with a normalized Microsoft SQL Server architecture. Includes local caching, inbox folder hierarchy, message tagging, and full draft serialization.",
      image: "/project/mail.png",
      tech: [
        "C#",
        ".NET",
        "Windows Forms",
        "SQL Server",
        "Visual Studio",
        "Desktop Architecture",
      ],
      github: "https://github.com/Mustafa25008",
      demo: "",
    },
    // Optical Illusions
    {
      id: "illusion-1",
      title: "Optical Illusion: 'HARD WORK'",
      category: "illusion",
      categoryLabel: "Optical Illusion Art",
      description:
        "Intricate generative architecture concealing the words 'HARD WORK' within urban depth perspective.",
      fullDetails:
        "Crafted using ControlNet and custom latent diffusion checkpoints. Step back from the screen, squint your eyes, or use the interactive Blur Assist button to reveal the hidden typography embedded in the street scene.",
      image: "/img/o1.jpg",
      tool: "ControlNet / Diffusion",
      hint: "Squint your eyes or step 2 meters back to reveal 'HARD WORK'",
      tech: ["ControlNet", "Stable Diffusion", "Latent AI", "Visual Psychology"],
    },
    {
      id: "illusion-2",
      title: "Optical Illusion: Hidden Message II",
      category: "illusion",
      categoryLabel: "Optical Illusion Art",
      description:
        "High-contrast visual topography embedding subtle typographic silhouettes across natural landscapes.",
      fullDetails:
        "Synthesized through AI prompt geometry and spatial weight modulation. When viewed at a distance or slightly blurred, the landscape shifts to spell a covert word.",
      image: "/img/o2.png",
      tool: "Stable Diffusion",
      hint: "Squint your eyes to reveal the hidden text in the scenery",
      tech: ["Stable Diffusion", "Prompt Matrix", "Optical Art"],
    },
    {
      id: "illusion-3",
      title: "Optical Illusion: Hidden Word III",
      category: "illusion",
      categoryLabel: "Optical Illusion Art",
      description:
        "Seamless fusion of architectural structures that conceal typography within roofs and alleys.",
      fullDetails:
        "Created with fine-tuned spatial latent maps. Blurs the boundary between graphic lettering and scenic environments.",
      image: "/img/o3.png",
      tool: "ControlNet AI",
      hint: "Close your eyes halfway to see the hidden word",
      tech: ["ControlNet", "Diffusion Architecture", "AI Art"],
    },
    {
      id: "illusion-4",
      title: "Optical Illusion: Hidden Portrait IV",
      category: "illusion",
      categoryLabel: "Optical Illusion Art",
      description:
        "Surreal landscape contours that form the subtle contour of a legendary human face.",
      fullDetails:
        "Engineered with semantic depth guidance. Looking closely reveals trees and cliffs; relaxing focus uncovers an unmistakable human portrait.",
      image: "/img/o4.png",
      tool: "Diffusion Models",
      hint: "Squint or step back to discover the hidden portrait",
      tech: ["Latent Diffusion", "Face Weight Matrix"],
    },
    {
      id: "illusion-5",
      title: "Optical Illusion: Hidden Face V",
      category: "illusion",
      categoryLabel: "Optical Illusion Art",
      description:
        "Hypnotic interplay of shadows and organic elements manifesting a hidden face.",
      fullDetails:
        "A tribute to classic pareidolia rendered through cutting-edge neural generative tools.",
      image: "/img/o5.png",
      tool: "Stable Diffusion",
      hint: "Step back or squint to uncover the hidden face",
      tech: ["Stable Diffusion", "Generative AI"],
    },
    // Generative AI Art Gallery
    {
      id: "art-1",
      title: "Forest Friends Gathering",
      category: "ai-art",
      categoryLabel: "Generative Art",
      description:
        "Whimsical storybook illustration of woodland creatures in an ethereal luminous meadow.",
      fullDetails:
        "Generated with DALL-E 3 utilizing detailed atmospheric lighting prompts, soft depth of field, and fairytale character composition.",
      image: "/img/1.png",
      tool: "DALL-E 3",
      tech: ["DALL-E 3", "Prompt Engineering", "Digital Art"],
    },
    {
      id: "art-2",
      title: "Sunlit Autumn Canopy",
      category: "ai-art",
      categoryLabel: "Generative Art",
      description:
        "Atmospheric digital canvas of a radiant ancient tree bathed in morning golden mist.",
      fullDetails:
        "Rendered with Google Imagen. Highlights volumetric sunlight, golden particle dispersion, and painterly texture realism.",
      image: "/img/2.png",
      tool: "Google Imagen",
      tech: ["Google Imagen", "Color Theory", "Volumetric Lighting"],
    },
    {
      id: "art-3",
      title: "Wonders of the Galaxy",
      category: "ai-art",
      categoryLabel: "Generative Art",
      description:
        "Majestic cosmic artwork featuring a spiral nebula and a solitary astronaut drifting among stars.",
      fullDetails:
        "Masterfully prompted in Midjourney v6 with cinematic 8k resolution, color-graded space dust, and deep celestial contrast.",
      image: "/img/3.png",
      tool: "Midjourney v6",
      tech: ["Midjourney v6", "Space Conceptualization", "Cinematic Art"],
    },
    {
      id: "art-4",
      title: "Aurora X1 Futuristic Smartphone",
      category: "ai-art",
      categoryLabel: "Generative Art",
      description:
        "Industrial design product concept with transparent glass edges and holographic UI.",
      fullDetails:
        "Product conceptualization combining minimalist Scandinavian industrial design with futuristic cyberpunk edge illumination.",
      image: "/img/4.jpeg",
      tool: "Generative AI Concept",
      tech: ["AI Product Design", "3D Rendering Simulation", "Concept Art"],
    },
    {
      id: "art-5",
      title: "Gothic Cathedral Architectural Sketch",
      category: "ai-art",
      categoryLabel: "Generative Art",
      description:
        "Hand-drawn graphite pencil study capturing soaring gothic flying buttresses and stained glass arches.",
      fullDetails:
        "Prompted to emulate classical Renaissance architectural draughtsmanship with accurate perspective vanishing points and charcoal hatching.",
      image: "/img/5.jpg",
      tool: "Midjourney",
      tech: ["Midjourney", "Graphite Style", "Architectural Perspective"],
    },
    {
      id: "art-6",
      title: "Blossom Festival Night",
      category: "ai-art",
      categoryLabel: "Generative Art",
      description:
        "Anime-inspired fantasy cityscape celebrating cherry blossoms under floating paper lanterns.",
      fullDetails:
        "Vibrant Japanese anime aesthetic with glowing magenta reflections, tranquil river ripples, and magical nocturnal ambience.",
      image: "/img/6.png",
      tool: "AI Studio",
      tech: ["Anime Aesthetics", "Color Harmony", "Concept Illustration"],
    },
    {
      id: "art-7",
      title: "Golden Countryside Dawn",
      category: "ai-art",
      categoryLabel: "Generative Art",
      description:
        "Impressionistic oil study of sunrise over rolling meadows and a quiet timber cabin.",
      fullDetails:
        "Evokes French impressionist brushwork with vibrant impasto textures, morning dew glint, and radiant warm sunrise palettes.",
      image: "/img/7.jpg",
      tool: "Stable Diffusion",
      tech: ["Stable Diffusion", "Impressionism", "Oil Art Emulation"],
    },
  ];

  const categories = [
    { id: "all", label: "All Creations", icon: Layers },
    { id: "web", label: "Web & AI Apps", icon: Code2 },
    { id: "desktop", label: "Desktop Engineering", icon: Monitor },
    { id: "illusion", label: "Optical Illusions", icon: Eye },
    { id: "ai-art", label: "AI Art Gallery", icon: Palette },
  ];

  const filteredItems = portfolioItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tech.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-[32rem] h-[32rem] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[28rem] h-[28rem] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-purple-500/20 text-xs font-mono text-purple-300 mb-4">
              <Sparkles size={13} className="text-purple-400" />
              <span>Showcase of Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Featured Projects &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Visual Creations
              </span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              From reactive AI web platforms and mission-critical desktop systems to
              jaw-dropping optical illusions and fine-art generative prompts.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full glass-panel border-white/10">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={14} className={isActive ? "text-cyan-200" : "text-gray-400"} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search stack, title, art..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-full glass-panel border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <ScrollReveal
              key={item.id}
              animation={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={(index % 3) * 100}
              className="h-full"
            >
              <TiltCard
                maxTilt={12}
                perspective={1000}
                scale={1.02}
                className="h-full"
              >
              <div
                onClick={() => setSelectedItem(item)}
                className="group glass-panel rounded-2xl overflow-hidden border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer shadow-xl"
              >
                {/* Image Banner */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold glass-panel border-white/20 text-cyan-300">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Tool Badge */}
                  {item.tool && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono glass-panel border-purple-400/30 text-purple-300">
                        {item.tool}
                      </span>
                    </div>
                  )}

                  {/* Hover Quick Action Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-4 py-2 rounded-full glass-panel border-cyan-400/50 text-white text-xs font-semibold flex items-center gap-2 shadow-2xl shadow-cyan-500/30 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye size={14} className="text-cyan-400" />
                      <span>View</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Tech stack pills */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-gray-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {item.tech.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-cyan-400">
                          +{item.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        {item.github && item.github !== "#" && (
                          <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono"
                          >
                            <Github size={15} />
                            <span>Code</span>
                          </a>
                        )}

                        {item.demo && item.demo !== "#" && (
                          <a
                            href={item.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 text-xs font-mono"
                          >
                            <ExternalLink size={15} />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>

                      <span className="text-[11px] font-mono text-purple-400 group-hover:underline">
                        Details →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 glass-panel rounded-3xl p-8 max-w-md mx-auto">
            <p className="text-gray-300 text-sm mb-4">
              No matching creations found for "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono border border-cyan-500/40 hover:bg-cyan-500/30 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* 3D LIGHTBOX / DETAIL MODAL */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in"
          onClick={() => {
            setSelectedItem(null);
            setIllusionBlur(false);
          }}
        >
          <div
            className="relative w-full max-w-4xl glass-panel rounded-3xl border-white/20 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedItem(null);
                setIllusionBlur(false);
              }}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full glass-panel border-white/20 text-gray-300 hover:text-white active:scale-95 transition-all"
              aria-label="Close Modal"
            >
              <X size={18} />
            </button>

            {/* Modal Image Half */}
            <div className="relative md:w-1/2 bg-black flex flex-col items-center justify-center overflow-hidden p-4">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className={`max-h-[60vh] md:max-h-[80vh] w-auto object-contain rounded-xl transition-all duration-500 ${
                  illusionBlur ? "blur-md scale-95" : "blur-0"
                }`}
              />

              {/* Optical Illusion interactive blur toggle */}
              {selectedItem.category === "illusion" && (
                <div className="mt-4 flex flex-col items-center gap-2">
                  <button
                    onClick={() => setIllusionBlur(!illusionBlur)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-cyan-400 text-cyan-300 text-xs font-mono hover:bg-cyan-400/10 transition-all shadow-lg"
                  >
                    <Sliders size={14} />
                    <span>
                      {illusionBlur ? "Disable Blur Filter" : "Enable Squint / Blur Helper"}
                    </span>
                  </button>
                  <p className="text-[11px] font-mono text-cyan-300 text-center">
                    💡 Hint: {selectedItem.hint}
                  </p>
                </div>
              )}
            </div>

            {/* Modal Details Half */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono glass-panel border-cyan-500/30 text-cyan-300">
                    {selectedItem.categoryLabel}
                  </span>
                  {selectedItem.tool && (
                    <span className="px-3 py-1 rounded-full text-xs font-mono glass-panel border-purple-500/30 text-purple-300">
                      {selectedItem.tool}
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  {selectedItem.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {selectedItem.fullDetails || selectedItem.description}
                </p>

                {/* Tech & Specifications */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    Technologies & Workflow
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedItem.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-cyan-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
                {selectedItem.demo && selectedItem.demo !== "#" && (
                  <a
                    href={selectedItem.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all"
                  >
                    <ExternalLink size={15} />
                    <span>Launch Live Demo</span>
                  </a>
                )}

                {selectedItem.github && selectedItem.github !== "#" && (
                  <a
                    href={selectedItem.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full glass-panel border-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                  >
                    <Github size={15} />
                    <span>View Repository</span>
                  </a>
                )}

                <button
                  onClick={() => {
                    setSelectedItem(null);
                    setIllusionBlur(false);
                  }}
                  className="px-5 py-3 rounded-full glass-pill text-gray-300 text-xs font-semibold hover:text-white"
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

export default Portfolio;
