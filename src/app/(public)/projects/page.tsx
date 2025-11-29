import { Badge } from "@/components/ui/badge";
import Project from "@/components/modules/Projects/Project";


const Projects = () => {
  const projects = [
    {
      id: "cryptoprotfolio",
      title: "CryptoProtfolio",
      description:
        "A comprehensive cryptocurrency portfolio management application built with React and Shadcn/ui for tracking investments and market trends.",
      image: "https://res.cloudinary.com/dgntsaro7/image/upload/v1761811601/cabro_reqey8.png",
      tags: ["React", "Shadcn/ui", "TypeScript", "TailwindCSS"],
      liveUrl: "https://cryptoprotfolio.com",
      githubUrl: "https://cryptoprotfolio.com", // if private, you can omit
      color: "from-green-400 to-blue-500",
      year: "2025",
      category: "React",
    },
    {
      id: "cabro",
      title: "Cabro",
      description:
        "A modern cab booking platform built with React and Shadcn/ui, featuring lazy loading for optimized performance and numerous functions including real-time tracking, booking management, and user interface components.",
      image: "https://res.cloudinary.com/dgntsaro7/image/upload/v1761811601/cabro_reqey8.png",
      tags: ["React", "Shadcn/ui", "TypeScript", "TailwindCSS"],
      liveUrl: "https://cabro.vercel.app",
      githubUrl: "https://cabro.vercel.app", // if private, you can omit
      color: "from-green-400 to-blue-500",
      year: "2025",
      category: "React",
    },
    {
      id: "ecoverabd",
      title: "EcoveraBD",
      description:
        "A professional Sourcing and eco-friendly apparel website built with Next.js. It showcases products, company profile, services, and integrates SEO optimization for global reach.",
      image: "https://res.cloudinary.com/dgntsaro7/image/upload/v1764414306/e_tuirda.png",
      tags: ["Next.js", "TypeScript", "React", "TailwindCSS", "framer-motion"],
      liveUrl: "https://ecoverabd.com",
      githubUrl: "https://github.com/saddamc", // if private, you can omit
      color: "from-green-400 to-blue-500",
      year: "2025",
      category: "Next.js",
    },
    {
      id: "ecommerce-platform",
      title: "Dashboard / SaaS App",
      description:
        "This project is a modern React + Vite web app with Firebase authentication, Stripe payments, Tailwind/MUI styling, and features for booking, e-commerce, or dashboard analytics.",
      image:
        "https://res.cloudinary.com/drtzgyetn/image/upload/v1757156003/Petco_unkdw6.jpg",
      tech: ["React", "Node.js", "MongoDB", "Stripe Payment"],
      liveUrl: "https://assignment-pets.web.app",
      githubUrl: "https://github.com/saddamc/Assignment-12-client-pets",
      color: "from-purple-400 to-pink-500",
      year: "2023",
      category: "Mern Stack",
    },
    {
      id: "task-management",
      title: "Modern React web application",
      description:
        "This is a modern React web application project built in TypeScript, using Vite as a bundler. It has Tailwind CSS for styling and uses Radix UI components for base UI elements. It leverages Redux Toolkit for state management, React Router for routing, and React Hook Form with Zod for form management and validation. The project also emphasizes developer experience with ESLint and utilities for notifications, themes, and animations.",
      image:
        "https://res.cloudinary.com/drtzgyetn/image/upload/v1757168029/Book_ocb8rn.jpg",
      tags: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Tailwind CSS",
        "MongoDB",
        "Node.js",
      ],
      liveUrl: "https://book-4-woad.vercel.app/books",
      githubUrl: "https://github.com/saddamc/book-frontend-4",
      color: "from-cyan-400 to-blue-500",
      year: "2023",
      category: "Frontend",
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
      <Project projects={projects} />

    </div>
  );
};

export default Projects;
