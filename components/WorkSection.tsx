"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub as Github } from "react-icons/fa";
import { Code2, Network, Server, Database, Cpu, Activity } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal";
import Image from "next/image";

const BackendSchematic = () => {
  return (
    <div className="relative w-full h-full min-h-[250px] flex items-center justify-center p-6 font-mono text-xs overflow-hidden">
      {/* Background Data Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="relative w-full max-w-[320px] h-[200px] flex items-center justify-between z-10">
        
        {/* SVG Connection Lines with Animated Data Packets */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
          {/* Main API to Redis Line */}
          <path id="path-redis" d="M 60 100 L 160 100 L 160 40 L 260 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
          {/* Main API to Python Line */}
          <path id="path-python" d="M 60 100 L 160 100 L 160 160 L 260 160" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Glowing Data Dots traveling along paths */}
          <circle r="3" fill="#10B981" className="drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">
            <animateMotion dur="2s" repeatCount="indefinite" path="M 60 100 L 160 100 L 160 40 L 260 40" />
          </circle>
          <circle r="3" fill="#3B82F6" className="drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 60 100 L 160 100 L 160 160 L 260 160" />
          </circle>
          <circle r="3" fill="#10B981" className="drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">
            <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M 260 40 L 160 40 L 160 100 L 60 100" /> {/* Returning packet */}
          </circle>
        </svg>

        {/* Node 1: API Gateway (Left) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-xl bg-[#0a0a0a] border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)] flex items-center justify-center relative group">
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <Server size={20} className="text-white/70 group-hover:text-white transition-colors" />
          </div>
          <span className="text-white/40 tracking-wider text-[10px]">NODE.JS</span>
        </div>

        {/* Node 2: Redis Cache (Top Right) */}
        <div className="absolute right-0 top-[10px] flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-white/20 shadow-[0_0_15px_rgba(16,185,129,0.05)] flex items-center justify-center group">
            <Database size={18} className="text-emerald-500/70 group-hover:text-emerald-400 transition-colors" />
          </div>
          <span className="text-white/40 tracking-wider text-[10px]">REDIS CACHE</span>
        </div>

        {/* Node 3: Python ML Worker (Bottom Right) */}
        <div className="absolute right-0 bottom-[10px] flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-white/20 shadow-[0_0_15px_rgba(59,130,246,0.05)] flex items-center justify-center group">
            <Cpu size={18} className="text-blue-500/70 group-hover:text-blue-400 transition-colors" />
          </div>
          <span className="text-white/40 tracking-wider text-[10px]">ML WORKER</span>
        </div>

      </div>
    </div>
  );
};

const projects = [
  {
    id: "01",
    title: "Banking Op Backend",
    category: "Fintech / Distributed Systems",
    description:
      "Architected a polyglot distributed systems backend with ACID-compliant transactions. Features a Redis cache-aside pattern to reduce read latency by 70% and an async isolation forest fraud detection microservice decoupled via BullMQ queues.",
    tech: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
      },
      {
        name: "Scikit-Learn",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
      },
    ],
    link: "https://github.com/rishabh1412/banking-op",
  },
  {
    id: "02",
    title: "Mowee System",
    category: "Web Architecture / Real-Time Microservices",
    description:
      "Architected a microservices ticket booking system with a race-condition prevention engine using MongoDB TTL auto-expiry seat locks. Implemented real-time seat sync via Socket.IO and sustained concurrent load verified via k6 stress testing.",
    tech: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Socket.io",
        icon: "https://cdn.simpleicons.org/socketdotio/white",
      },
    ],
    link: "https://github.com/rishabh1412/movie-frontend",
    img: "/mowee.png"
  },
];

// Helper component for the technical crosshairs (+) at the corners of cards
const Crosshair = ({ className }: { className?: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`absolute text-white/20 ${className}`}
  >
    <path d="M7.5 0V15M0 7.5H15" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export default function WorksSection() {
  return (
    <section
      id="projects"
      className="w-full bg-background pt-32 pb-24 flex justify-center overflow-hidden"
    >
      <div className="w-full max-w-7xl px-6 md:px-12 flex flex-col gap-8 lg:gap-16">
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
        <div className="flex flex-col gap-8 md:gap-24">
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
                    <span className="text-white/40 font-mono text-xs">
                      PROJ_{project.id}
                    </span>
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
                    <span className="text-white/30 font-mono text-[10px] uppercase tracking-widest">
                      Core Stack
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 transition-colors group-hover:bg-white/[0.06] group-hover:border-white/10"
                          title={tech.name}
                        >
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-row gap-4 mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="primary" className="text-sm h-11">
                        <Github size={16} className="mr-2" /> Source
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Visual / Wireframe Section */}
                <div className="relative w-full lg:w-7/12 min-h-[300px] lg:min-h-full bg-[#0a0a0a] overflow-hidden flex items-center justify-center p-8">
                  {/* Grid Background */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />

                  {/* Diagonal Wireframe Lines */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-[0.05]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="100%"
                      stroke="white"
                      strokeWidth="1"
                    />
                    <line
                      x1="100%"
                      y1="0"
                      x2="0"
                      y2="100%"
                      stroke="white"
                      strokeWidth="1"
                    />
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
                    {/* Container to enforce standard blueprint frame geometry */}
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#050505] group/img mt-4 shadow-inner">
                      {/* The Live Screenshot Engine */}
                      {project.img ? (
                        <Image
                          src={project.img}
                          alt={`${project.title} Interface`}
                          fill
                          sizes="(max-w-7xl) 100vw, 80vw"
                          className="object-cover opacity-80 transition-all duration-1000 ease-out group-hover/img:scale-[1.03] group-hover/img:opacity-100"
                        />
                      ) : (
                        // Render the Animated Architecture Graph
                        <BackendSchematic />
                      )}

                      {/* Subtle grid lines overlaid on top of the image to keep the wireframe design consistent */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay transition-opacity duration-700 group-hover/img:opacity-[0.01]"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                          backgroundSize: "32px 32px",
                        }}
                      />
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
