import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import Image from "next/image";

const About = () => {
  const experience = [
    {
      year: "2023 - Present",
      title: "Senior MERN Developer",
      company: "Tech Innovations Inc.",
      description: "Leading development of scalable web applications using React, Node.js, and MongoDB.",
    },
    {
      year: "2021 - 2023",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      description: "Built and maintained multiple client projects using the MERN stack.",
    },
    {
      year: "2019 - 2021",
      title: "Junior Developer",
      company: "StartUp Hub",
      description: "Developed frontend components and learned backend development.",
    },
  ];

  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    Backend: ["Node.js", "Express", "MongoDB", "Prisma", "PostgreSQL"],
    Tools: ["Git", "Docker", "AWS", "Vercel", "Jest"],
  };

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-white" style={{ backgroundColor: '#081361' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <Badge className="mb-6  bg-[#2640d3] hover:bg-[#0d23a4] text-white border-accent/30">
              About Me
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Crafting Digital Excellence
            </h1>
            <p className="text-xl text-gray-200">
              A passionate MERN stack developer dedicated to building modern, scalable web applications
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Profile Image */}
            <div className="md:col-span-1 animate-fade-in">
              <Image
                src={profileImg}
                alt="Saddam"
                className="rounded-3xl shadow-strong w-full"
              />
            </div>

            {/* Bio */}
            <div className="md:col-span-2 space-y-6 animate-fade-up">
              <h2 className="text-3xl font-bold">Hi, I'm Saddam 👋</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I'm a passionate MERN Stack Developer with over 4 years of experience building modern web applications. My journey in web development started with a curiosity about how websites work, and it has evolved into a career I absolutely love.
                </p>
                <p>
                  I specialize in creating full-stack applications using MongoDB, Express.js, React, and Node.js. I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blogs. I'm always excited to take on new challenges and collaborate on interesting projects.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <Card key={category} className="p-6 shadow-soft hover:shadow-medium hover:bg-[#0d23a4]/5 hover:border-[#0d23a4]/20 transition-all duration-300">
                  <h3 className="font-bold text-xl mb-4 text-primary">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h2 className="text-3xl font-bold mb-12 text-center">Experience Journey</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-smooth animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary shadow-glow" />
                  <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline">{exp.year}</Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-primary mb-3">{exp.company}</p>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
