"use client";
import React from 'react';
import { Code2, Database, Globe, Sparkles, Cpu, Palette } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';


const techStack = [
  { Icon: Code2, title: 'React & Next.js', gradient: 'from-cyan-500 to-blue-600' },
  { Icon: Cpu, title: 'TypeScript', gradient: 'from-blue-600 to-indigo-700' },
  { Icon: Database, title: 'MongoDB & Prisma', gradient: 'from-green-500 to-emerald-600' },
  { Icon: Globe, title: 'Node.js & Express', gradient: 'from-emerald-500 to-teal-600' },
  { Icon: Sparkles, title: 'Modern UI/UX', gradient: 'from-purple-500 to-pink-600' },
  { Icon: Palette, title: 'Tailwind & Shadcn', gradient: 'from-pink-500 to-rose-600' },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
            Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Crafting high-performance, scalable, and beautiful applications with cutting-edge tools
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <Card className="group relative overflow-hidden border border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card/95 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 h-full p-8">
                {/* Gradient Hover Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <tech.Icon className="h-10 w-10 text-foreground/90 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-medium text-foreground tracking-tight">
                    {tech.title}
                  </h3>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Optional Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-muted-foreground mt-16"
        >
          Always exploring new tools • Focused on performance, accessibility, and developer experience
        </motion.p>
      </div>
    </section>
  );
}