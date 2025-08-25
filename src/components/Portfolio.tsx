import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      title: "Learning Management System",
      description:
        "Manage courses, students, and instructors with features like enrollment, grading, and progress tracking.",
      image: "/project/lms.png",
      tech: ["C#", ".NET", "Windows Forms", "SQL Server", "Design Patterns"],
      github: "#",
      demo: "",
    },
    {
      title: "Gmail-like Desktop App",
      description:
        "A desktop application replicating Gmail’s core features including sending, receiving, and organizing emails with labels.",
      image: "/project/mail.png",
      tech: ["C#", ".NET", "Windows Forms", "SQL Server", "Visual Studio"],
      github: "#",
      demo: "",
    },
    {
      title: "AI Recipe Generator (Recipe Magic)",
      description:
        "Generate creative AI-based recipes, store them in Supabase, and explore them on a dynamic dashboard.",
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
      github: "#",
      demo: "https://ai-recipemix.vercel.app/",
    },
    {
      title: "Blog Summarizer",
      description:
        "Summarize lengthy blog posts into clear, concise summaries and instantly translate them into Urdu with one click.",
      image: "/project/blog.png",
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "shadcn/ui",
        "Supabase",
        "Lucide React",
        "AI",
      ],
      github: "#",
      demo: "https://blog-summarizer-topaz.vercel.app/",
    },
    /*
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team features",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      tech: ["TypeScript", "React", "Firebase", "Tailwind"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Code Analyzer",
      description: "Machine learning tool for code quality analysis and suggestions",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Recipe Generator",
      description: "Machine learning tool for code quality analysis and suggestions",
      image: "/recipe.png",
      tech: ["Next.js", "Typescript", "Shadcn", "n8n"],
      github: "https://github.com/Mustafa25008/internship/tree/ea75a6e8ca3bcf00e354c8449e8f7cc415d06b72/recipe-gen-ai",
      demo: "https://ai-recipemix.vercel.app/"
    }*/
  ];

  const aiArt = [
    {
      title: "Optical Illusion Image 1",
      description: "Hidden word 'HARD WORK' in the design",
      //image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=400&fit=crop",
      image: "/img/o1.jpg",
      tool: "Illusion",
    },
    {
      title: "Optical Illusion Image 2",
      description: "Close your eye to see hidden word",
      image: "/img/o2.png",
      tool: "Illusion",
    },
    {
      title: "Optical Illusion Image 3",
      description: "Close your eye to see hidden word",
      image: "/img/o3.png",
      tool: "Illusion",
    },
    {
      title: "Optical Illusion Image 4",
      description: "Close your eye to see hidden person",
      image: "/img/o4.png",
      tool: "Illusion",
    },
    {
      title: "Optical Illusion Image 5",
      description: "Close your eye to see hidden person",
      image: "/img/o5.png",
      tool: "Illusion",
    },
    {
      title: "Forest Friends Gathering",
      description:
        "Whimsical digital illustration of forest animals in a lush, storybook setting.",
      image: "/img/1.png",
      tool: "DALL-E",
    },
    {
      title: "Sunlit Autumn Canopy",
      description:
        "Atmospheric digital painting of a radiant tree bathed in golden light and morning mist.",
      image: "/img/2.png",
      tool: "Imagen",
    },
    {
      title: "Wonders of the Galaxy",
      description:
        "Majestic cosmic artwork featuring a glowing spiral galaxy, nebulae, and a lone astronaut drifting among the stars.",
      image: "/img/3.png",
      tool: "Midjourney",
    },
    {
      title: "Aurora X1 Smartphone",
      description:
        "High-end product shot of a futuristic smartphone with neon edge lighting and sleek design.",
      image: "/img/4.jpeg",
      tool: "AI",
    },
    {
      title: "Gothic Cathedral Sketch",
      description:
        "Hand-drawn pencil sketch of a grand gothic cathedral with intricate details.",
      image: "/img/5.jpg",
      tool: "Midjourney",
    },
    {
      title: "Blossom Festival Night",
      description:
        "Anime-inspired fantasy scene of a cherry blossom festival under glowing lanterns.",
      image: "/img/6.png",
      tool: "Sora",
    },
    {
      title: "Golden Countryside",
      description:
        "Oil painting of a peaceful sunrise over rolling hills and a cozy cabin.",
      image: "/img/7.jpg",
      tool: "Stable Diffusion",
      demo: "https://stablediffusionweb.com/",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my development projects and AI art creations
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-background rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "projects"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Development Projects
            </button>
            <button
              onClick={() => setActiveTab("art")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "art"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              AI Art
            </button>
          </div>
        </div>

        {/* Projects Content */}
        {activeTab === "projects" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-justify">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <Github size={20} />
                      Code
                    </a>
                    {project.demo && project.demo !== "#" ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                        Demo
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-gray-400 cursor-not-allowed">
                        <ExternalLink size={20} />
                        Demo
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* AI Art Content */}
        {activeTab === "art" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiArt.map((art, index) => (
              <div
                key={index}
                className="group bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="text-sm font-medium">{art.tool}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{art.title}</h3>
                  <p className="text-sm text-muted-foreground text-justify">
                    {art.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
