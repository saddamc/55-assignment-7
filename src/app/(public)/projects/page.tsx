import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics platform with real-time data visualization, built with React, Node.js, and MongoDB. Features include custom dashboards, data export, and team collaboration.",
      image: project1,
      tags: ["React", "Node.js", "MongoDB", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with product management, cart functionality, payment integration, and order tracking. Built with Next.js and Stripe.",
      image: project2,
      tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Task Management App",
      description: "Modern task management application with drag-and-drop functionality, team collaboration, and real-time updates using WebSockets.",
      image: project3,
      tags: ["React", "Express", "MongoDB", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Social Media Platform",
      description: "A social networking site with user profiles, posts, comments, likes, and real-time chat functionality. Built with the MERN stack.",
      image: project1,
      tags: ["React", "Node.js", "MongoDB", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Blog CMS",
      description: "Content management system for bloggers with markdown support, SEO optimization, and analytics integration.",
      image: project2,
      tags: ["Next.js", "MongoDB", "MDX", "Vercel"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Weather App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts using third-party APIs.",
      image: project3,
      tags: ["React", "OpenWeather API", "Mapbox"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-white" style={{ backgroundColor: '#081361' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <Badge className="mb-6  bg-[#2640d3] hover:bg-[#0d23a4] text-white border-accent/30">
              Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Featured Projects
            </h1>
            <p className="text-xl text-gray-200">
              A collection of my recent work and side projects
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden shadow-soft hover:shadow-strong transition-smooth animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full transition-smooth"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="transition-smooth"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Projects;
