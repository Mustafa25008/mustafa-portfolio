
import React from 'react';
import { Code, Palette, Bug, Download } from 'lucide-react';

const About = () => {
  const services = [
    {
      icon: Code,
      title: "Software Engineer",
      description: "Building scalable applications with modern technologies and best practices"
    },
    {
      icon: Palette,
      title: "AI Artist",
      description: "Creating stunning visual art using AI tools and creative prompts"
    },
    {
      icon: Bug,
      title: "QA Engineer",
      description: "Ensuring quality through comprehensive testing and automation"
    }
  ];

  const skills = [
    { category: "Programming", items: ["React", "TypeScript", "Python", "Node.js", "PostgreSQL"] },
    { category: "Design", items: ["Figma", "Adobe Creative Suite", "UI/UX Design", "Prototyping"] },
    { category: "AI Tools", items: ["Midjourney", "DALL-E", "Stable Diffusion", "ChatGPT"] },
    { category: "Soft Skills", items: ["Problem Solving", "Team Leadership", "Communication", "Project Management"] }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate creator at the intersection of technology and art, dedicated to building 
            innovative solutions and expressing creativity through AI-powered visual art.
          </p>
        </div>

        {/* Personal Bio */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              My journey began with a curiosity for how things work and evolved into a passion 
              for creating digital experiences that matter. As a software engineer, I love solving 
              complex problems with elegant code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The emergence of AI opened up a new creative frontier for me. I discovered that 
              artificial intelligence could be a powerful artistic tool, leading me to explore 
              AI-generated art and push the boundaries of digital creativity.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
                alt="Working"
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">What I Can Do</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Skills & Tools</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-lg font-semibold text-blue-600">{skillGroup.category}</h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Download */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Want the Full Resume?</h3>
          <p className="text-muted-foreground mb-6">
            Download my complete resume with detailed experience and achievements
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
