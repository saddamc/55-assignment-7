/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, Globe, Sparkles } from "lucide-react";

import profileImg from "../../assets/profile.jpg";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Hero from "@/components/modules/Home/Hero";
import Tech from "@/components/modules/Home/Tech";

export default async function HomePage() {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`,
  //   {
  //     next: {
  //       tags: ["BLOGS"],
  //     },
  //   });
  // const {data:blogs} = await res.json();
  // console.log(blogs)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Skills Preview */}
      <Tech />


      {/* About Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Image
                src={profileImg}
                alt="Saddam - MERN Developer"
                className="rounded-3xl shadow-strong w-full max-w-md mx-auto hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
            <div className="animate-fade-up">
              <Badge className="mb-4  bg-green/10 text-primary border-green/20">
                About Me
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Passionate Developer Building Digital Experiences
              </h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                With expertise in the MERN stack, I create full-stack applications that combine beautiful design with powerful functionality. From responsive frontends to scalable backends, I bring ideas to life.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="secondary" className="hover:bg-primary/20 transition-colors cursor-default">React</Badge>
                <Badge variant="secondary" className="hover:bg-primary/20 transition-colors cursor-default">Node.js</Badge>
                <Badge variant="secondary" className="hover:bg-primary/20 transition-colors cursor-default">MongoDB</Badge>
                <Badge variant="secondary" className="hover:bg-primary/20 transition-colors cursor-default">Express</Badge>
                <Badge variant="secondary" className="hover:bg-primary/20 transition-colors cursor-default">TypeScript</Badge>
                <Badge variant="secondary" className="hover:bg-primary/20 transition-colors cursor-default">Prisma</Badge>
              </div>
              <Link href="/about">
                <Button variant="outline" className="transition-all duration-300 hover:scale-105">
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in drop-shadow-lg">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg mb-8 text-white/95 max-w-2xl mx-auto animate-fade-up drop-shadow-md">
            Have a project in mind? Let's discuss how we can bring your vision to life.
          </p>
          <div className="flex gap-4 justify-center animate-fade-up flex-wrap">
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-emerald-700 hover:bg-white/90 transition-all duration-300 border-white hover:scale-105 font-semibold"
              >
                View My Work
              </Button>
            </Link>
            <a href="mailto:contact@saddam.dev">
              <Button
                size="lg"
                className="bg-emerald-900 hover:bg-emerald-950 text-white transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get In Touch
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}