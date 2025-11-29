"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export default function TimelineSection({ projects }: { projects: Project[] }) {
  const extendedProjects = projects.map((project, index) => ({
    ...project,
    id: `project-${index}`,
    tech: project.tags,
    color: index % 2 === 0 ? "from-green-400 to-blue-500" : "from-purple-400 to-pink-500",
    year: "2023",
    category: "Web App",
  }));

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work featuring innovative web applications,
            mobile solutions, and platforms that solve real-world problems.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/70 to-primary/40 rounded-full shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/70 to-primary/40 rounded-full opacity-50 blur-sm"></div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-24">
            {extendedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                  <motion.div
                    className={`w-6 h-6 bg-gradient-to-r ${project.color} rounded-full shadow-lg border-4 border-background cursor-pointer relative group`}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-full animate-ping opacity-30`}
                    ></div>

                    {/* Dynamic Connecting Lines */}
                    <div
                      className={`connecting-line hidden lg:block absolute top-1/2 ${
                        index % 2 === 0
                          ? "left-full ml-3 w-16"
                          : "right-full mr-3 w-16"
                      } h-0.5 bg-gradient-to-r ${
                        project.color
                      } transition-all duration-500`}
                    >
                      <div
                        className={`pulse-line absolute inset-0 bg-gradient-to-r ${project.color} blur-sm opacity-50`}
                      ></div>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 0 ? "" : "lg:grid-flow-col-dense"
                  }`}
                >
                  {/* Project Info */}
                  <div
                    className={`${
                      index % 2 === 0 ? "lg:pr-16" : "lg:pl-16 lg:col-start-2"
                    }`}
                  >
                    <motion.div className="space-y-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge
                          variant="secondary"
                          className="bg-secondary hover:bg-secondary/80"
                        >
                          {project.category}
                        </Badge>
                        <Badge variant="secondary" className="bg-secondary hover:bg-secondary/80">
                          <Calendar className="h-3 w-3 mr-1" />
                          {project.year}
                        </Badge>
                      </div>

                      <h3 className="text-3xl font-bold mb-4 text-foreground">
                        {project.title}
                      </h3>

                      <Card className="p-6 bg-card border">
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {project.description}
                        </p>
                      </Card>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech: string) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <Button
                          variant="outline"
                          className="transition-smooth"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>

                        <Button
                          variant="outline"
                          className="transition-smooth"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Image */}
                  <div
                    className={`${
                      index % 2 === 0 ? "lg:pl-16" : "lg:pr-16 lg:col-start-1"
                    }`}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                      }}
                      className="relative z-10 group"
                    >
                      <Card className="overflow-hidden shadow-soft hover:shadow-strong transition-smooth">
                        <div className="relative h-80 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-smooth group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}