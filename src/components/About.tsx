import React, { useState } from "react";
import pro from "@/components/images/img.jpg";
import { toast } from "@/components/ui/use-toast";
import { Code, Palette, Bug, Download } from "lucide-react";

const About = () => {
  const [selectedRole, setSelectedRole] = useState("");

  /*const handleDownload = async(role: string) => {
    const fileMap: Record<string, string> = {
      SQA: "/SQA-Manual.pdf",
      SoftwareEngineer: "/SoftwareDeveloper.pdf",
    };

    if (!role || !fileMap[role]) return;
    const fileUrl = fileMap[role];
    try {
      const response = await fetch(fileUrl, { method: "HEAD" });

    if (response.ok) {
      // File exists → download
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = `Muhammad_Mustafa_${role}_Resume.pdf`;
      alert("✅ Your download will start shortly.");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("❌ File not found. Please try again later.");
    }
    }
    catch (error) {

    }
    /*const link = document.createElement("a");
    link.href = fileMap[role];
    link.download = `Muhammad_Mustafa_${role}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);*/

  // reset back to "Select Resume"
  //setSelectedRole("");
  /*};*/
  const handleDownload = async (role: string) => {
    const fileMap: Record<string, string> = {
      SQA: "/SQA Manual.pdf",
      SoftwareEngineer: "/Software Developer.pdf",
    };

    if (!role || !fileMap[role]) return;

    const fileUrl = fileMap[role];

    try {
      const response = await fetch(fileUrl, { method: "HEAD" });

      // Check both status AND content type
      const contentType = response.headers.get("Content-Type");

      if (response.ok && contentType?.includes("pdf")) {
        // ✅ File exists and is a PDF → download
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = `Muhammad_Mustafa_${role}_Resume.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast({
          title: "Download Starting",
          description: "Your resume has been downloaded.",
          variant: "success",
          duration: 3000,
        });

      } else {
        toast({
          title: "Error",
          description: "Resume file not found. Please try again later.",
          variant: "destructive",
          duration: 3000,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
        duration: 3000,
      });
    }

    // Reset dropdown
    setSelectedRole("");
  };

  const services = [
    {
      icon: Code,
      title: "Software Engineer",
      description:
        "Building scalable applications or websites with modern technologies and best practices",
    },
    {
      icon: Bug,
      title: "QA Engineer",
      description: "Ensuring quality through comprehensive manual testing",
    },
    {
      icon: Palette,
      title: "AI Artist",
      description:
        "Creating stunning visual art using AI tools and creative prompts",
    },
  ];

  const skills = [
    {
      category: "Programming",
      items: ["C/C++", "C#", "JavaScript", "TypeScript", "Python", "Dart"],
    },
    {
      category: "Frameworks & Platforms",
      items: ["WPF", ".NET", "Node.js", "Next.js", "Tkinter", "Flutter"],
    },
    {
      category: "AI Tools",
      items: ["ChatGPT", "Copilot", "Midjourney", "DALL-E", "Veo 3", "n8n"],
    },
    {
      category: "Other Skills",
      items: [
        "OOP",
        "DSA",
        "Databases (SQL Server/SupaBase)",
        "SDLC",
        "Problem Solving",
        "Communication",
      ],
    },
    //{ category: "Soft Skills", items: ["Problem Solving", "Team Leadership", "Communication", "Project Management"] },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-justify">
            I’m a passionate Software Engineer and QA specialist who thrives at
            the intersection of technology and creativity. With a BS in Computer
            Science and hands-on experience in Desktop Application Development,
            Web Development, QA Manual testing, and AI-powered solutions, I
            craft digital experiences that are both reliable and inspiring. From
            building scalable applications to ensuring product quality and
            exploring AI-driven art, I bring a unique blend of precision and
            imagination to every project I take on.
          </p>
        </div>

        {/* Personal Bio */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed text-justify">
              My journey started with a curiosity for how things work, which
              grew into a passion for creating meaningful digital solutions. As
              I explored programming and software engineering, I discovered the
              joy of solving problems and turning ideas into reality through
              code.
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify">
              Along the way, I became fascinated by AI and automation, realizing
              their potential not just in engineering but also in art. This led
              me to explore AI-generated creativity, where I combine logic and
              imagination to push the boundaries of what technology can achieve.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75"></div>
              <img
                src={pro}
                alt="Working"
                className="relative z-10 rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            What I Can Do
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
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
          <h3 className="text-3xl font-bold text-center mb-12">
            Skills & Tools
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-lg font-semibold text-blue-600">
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* End of Container */}
        {/* Resume Download */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Want the Full Resume?</h3>
          <p className="text-muted-foreground mb-6">
            Download my complete resume with detailed experience and
            achievements
          </p>

          <div className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Download size={20} />
            <select
              value={selectedRole}
              onChange={(e) => {
                const role = e.target.value;
                setSelectedRole(role);
                handleDownload(role);
              }}
              className="bg-transparent text-white font-semibold outline-none cursor-pointer px-2 py-2 rounded w-full sm:w-auto min-w-[150px]"
            >
              <option className="bg-purple-600 text-white" value="">
                Select Resume
              </option>
              <option className="bg-purple-600 text-white" value="SQA">
                SQA Resume
              </option>
              <option
                className="bg-purple-600 text-white"
                value="SoftwareEngineer"
              >
                Software Engineer Resume
              </option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
