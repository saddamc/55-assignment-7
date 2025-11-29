"use client"
import { Github, Heart, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Navbar/logo";
import { motion } from 'framer-motion';

const currentYear = new Date().getFullYear();

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

const socialLinks = [
  { href: "https://github.com/saddamc", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/saddamdev", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/saddam_kaium", icon: Twitter, label: "Twitter" },
  { href: "mailto:saddam13bd@gmail.com", icon: Mail, label: "Email" },
];


export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand & Description */}
          <div className="md:col-span-4 ">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              <Logo />
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              MERN Stack Developer passionate about building fast, accessible, and beautiful web applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 ease-out inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <a
              href="mailto:contact@saddam.dev"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
            >
              <Mail className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
              saddam13bd@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border/50 mt-4 py-4 text-center text-muted-foreground"
        >
          <p className="flex items-center justify-center">
            © {currentYear} Saddam Hossain. Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mx-1 text-red-500"
            >
              <Heart className="h-4 w-4 fill-current" />
            </motion.span>
            and lots of coffee.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}