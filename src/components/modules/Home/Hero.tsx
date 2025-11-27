import Image from "next/image";
import heroBg from "@/assets/hero-bg.jpg";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src={heroBg}
        alt="Hero Background"
        fill
        priority
        className="object-cover z-0"
        quality={90}
      />

      {/* Solid Background Layer (#0a0f6a) */}
      <div className="absolute inset-0 bg-[#0a0f6a]/70 z-[1]" />

      {/* Additional Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f6a]/70 via-blue-900/50 to-[#0a0f6a]/90 z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-transparent to-emerald-500/10 z-[2]" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <Badge className="mb-6 bg-emerald-500/20 text-emerald-100 border-emerald-400/30 hover:bg-emerald-500/30 transition-colors">
            Available for projects
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Saddam
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
            MERN Stack Developer crafting modern, scalable web applications with exceptional user experiences
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/projects">
              <Button className="shadow-lg hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300 bg-emerald-600 hover:bg-emerald-700" size="lg">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/50"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-300/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-400/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

    </section>
  );
};

export default Hero;
