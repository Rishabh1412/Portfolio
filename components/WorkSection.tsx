"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Button from "./Button";
import Reveal from "./Reveal";

// Data with real, full-color SVGs for the Tech Stack
const projects = [
  {
    id: "01",
    title: "Banking Op Backend",
    category: "Fintech / Distributed Systems",
    description: "A distributed ledger backend using Node.js and Python. Features Redis caching layers and an asynchronous fraud detection microservice to process transactions securely.",
    tech: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
    ],
    links: { github: "#", live: "#" }
  },
  {
    id: "02",
    title: "E-Commerce Architecture",
    category: "High Availability API",
    description: "High-performance storefront architecture built with Go and PostgreSQL. Engineered to handle 10k+ concurrent requests during peak sales events with sub-50ms latency.",
    tech: [
      { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    ],
    links: { github: "#", live: "#" }
  },
  {
    id: "03",
    title: "AI Analytics Dashboard",
    category: "Data Visualization",
    description: "Real-time data visualization platform processing thousands of streams. Utilizes WebSockets for live updates and D3.js combined with React for highly interactive charting.",
    tech: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "D3.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    ],
    links: { github: "#", live: "#" }
  },
];

// Helper component for the technical crosshairs (+) at the corners of cards
const Crosshair = ({ className }: { className?: string }) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute text-white/20 ${className}`}>
    <path d="M7.5 0V15M0 7.5H15" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

export default function WorksSection() {
  return (
    <section id="projects" className="w-full bg-background pt-32 pb-24 flex justify-center overflow-hidden">
      <div className="w-full max-w-7xl px-6 md:px-12 flex flex-col gap-16">
        
        {/* Wireframe Header */}
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-4 border-b border-white/10 pb-8 relative">
            <Crosshair className="-bottom-2 -left-2" />
            <Crosshair className="-bottom-2 -right-2" />
            
            <div className="flex items-center gap-3 text-foreground/40 font-mono text-xs uppercase tracking-widest">
              <Code2 size={14} />
              <span>System Architecture // Case Studies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
              Engineering Works
            </h2>
          </div>
        </Reveal>

        {/* Projects List */}
        <div className="flex flex-col gap-12 md:gap-24">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={0.2}>
              {/* Technical Card Container */}
              <div className="group relative flex flex-col-reverse lg:flex-row bg-[#030303] border border-white/10 rounded-2xl overflow-hidden transition-colors duration-500 hover:border-white/20">
                
                {/* Tech Bar (Top on mobile, left side on desktop) */}
                <div className="hidden lg:flex flex-col items-center justify-between py-8 px-4 border-r border-white/10 bg-[#080808]">
                  <span className="text-white/30 font-mono text-sm [writing-mode:vertical-lr] rotate-180 tracking-widest">
                    PROJ_{project.id}
                  </span>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between p-8 lg:p-12 w-full lg:w-5/12 border-b lg:border-b-0 lg:border-r border-white/10">
                  
                  {/* Header info */}
                  <div className="flex items-center justify-between mb-8 lg:hidden">
                    <span className="text-white/40 font-mono text-xs">PROJ_{project.id}</span>
                  </div>

                  <div>
                    <p className="text-foreground/50 font-mono text-xs uppercase tracking-wider mb-3">
                      {project.category}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-6">
                      {project.title}
                    </h3>
                    <p className="text-base text-foreground/60 leading-relaxed font-light mb-10">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Logos */}
                  <div className="flex flex-col gap-4 mb-10">
                    <span className="text-white/30 font-mono text-[10px] uppercase tracking-widest">Core Stack</span>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <div 
                          key={tech.name} 
                          className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 transition-colors group-hover:bg-white/[0.06] group-hover:border-white/10"
                          title={tech.name}
                        >
                          <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-row gap-4 mt-auto">
                    <Button variant="primary" className="text-sm h-11">
                      <Github size={16} className="mr-2" /> Source
                    </Button>
                    <Button variant="ghost" className="text-sm h-11 group/btn">
                      Live Preview <ArrowUpRight size={16} className="ml-2 text-foreground/50 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Button>
                  </div>
                </div>

                {/* Visual / Wireframe Section */}
                <div className="relative w-full lg:w-7/12 min-h-[300px] lg:min-h-full bg-[#0a0a0a] overflow-hidden flex items-center justify-center p-8">
                  {/* Grid Background */}
                  <div className="absolute inset-0 opacity-[0.03]" 
                       style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                  
                  {/* Diagonal Wireframe Lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="1" />
                    <line x1="100%" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="1" />
                  </svg>

                  {/* Placeholder Graphic - Replace this div with your actual <Image /> component */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="relative z-10 w-full max-w-md aspect-[4/3] rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl flex flex-col overflow-hidden"
                  >
                    {/* Mock Browser/App Header */}
                    <div className="h-10 border-b border-white/10 bg-white/[0.02] flex items-center px-4 gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    </div>
                    {/* Mock App Body */}
                    <div className="flex-1 flex items-center justify-center">
                      <span className="text-white/20 font-mono text-sm text-center px-4">
                        [ Architecture Diagram / UI Screenshot ]
                      </span>
                    </div>
                  </motion.div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}