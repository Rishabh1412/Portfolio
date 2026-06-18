"use client";

import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal"; 
import { Layers, Database, Cpu, LayoutTemplate } from "lucide-react";

const topologyLayers = [
  {
    id: "01",
    name: "Client & Interface",
    description: "Building responsive, pixel-perfect user interfaces and reusable component systems.",
    icon: <LayoutTemplate size={16} className="text-white/40" />,
    tools: [
      { name: "Figma", asset: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Next.js", asset: "https://cdn.simpleicons.org/nextdotjs/white" },
      { name: "Tailwind", asset: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "TypeScript", asset: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    ]
  },
  {
    id: "02",
    name: "Logic & AI Integration",
    description: "Developing serverless APIs, backend logic, and integrating generative AI tools.",
    icon: <Cpu size={16} className="text-white/40" />,
    tools: [
      { name: "Node.js", asset: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Python", asset: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "LLM Orchestration", asset: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" },
      { name: "Javascript", asset: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    ]
  },
  {
    id: "03",
    name: "Data & Infrastructure",
    description: "Designing scalable databases, implementing caching, and handling real-time data sync.",
    icon: <Database size={16} className="text-white/40" />,
    tools: [
      { name: "MongoDB", asset: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", asset: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
      { name: "Socket.io", asset: "https://cdn.simpleicons.org/socketdotio/white" },
      { name: "Docker", asset: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    ]
  }
];

const Crosshair = ({ className }: { className?: string }) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`absolute text-white/20 z-10 bg-background ${className}`}>
    <path d="M7.5 0V15M0 7.5H15" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export default function TechTopology() {
  return (
    <section className="w-full bg-background pt-32 pb-24 flex justify-center overflow-hidden">
      <div className="w-full max-w-7xl px-6 md:px-12 flex flex-col gap-16">
        
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-4 border-b border-white/10 pb-8 relative">
            <Crosshair className="-bottom-[7px] -left-2" />
            <Crosshair className="-bottom-[7px] -right-2" />

            <div className="flex items-center gap-3 text-white/40 font-mono text-xs uppercase tracking-widest">
              <Layers size={14} />
              <span>[SYSTEM_INVENTORY] // Stack Topology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
              Primary Tools
            </h2>
          </div>
        </Reveal>

        <div className="relative flex flex-col w-full">
          <div className="absolute left-6 md:left-[2.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent z-0 hidden md:block" />

          <div className="flex flex-col gap-6 md:gap-8 relative z-10">
            {topologyLayers.map((layer, index) => (
              <Reveal key={layer.id} delay={0.2 + (index * 0.1)}>
                <div className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 bg-[#030303] border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-white/30 hover:bg-[#050505] overflow-hidden">
                  
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                  <div className="flex flex-col gap-3 md:w-1/3 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 bg-white/[0.03]">
                        {layer.icon}
                      </div>
                      <span className="font-mono text-[10px] text-white/40 tracking-widest">
                        LAYER_{layer.id}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-white/90">
                      {layer.name}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed max-w-sm">
                      {layer.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 md:gap-4 md:w-2/3 relative z-10 w-full">
                    {layer.tools.map((tool) => (
                      <div 
                        key={tool.name}
                        className="flex flex-row items-center gap-3 bg-[#080808] border border-white/5 rounded-xl py-3 px-4 md:px-5 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/20 hover:-translate-y-1"
                      >
                        <img 
                          src={tool.asset} 
                          alt={tool.name} 
                          // Removed: opacity-70 filter grayscale group-hover:grayscale-0 group-hover:opacity-100
                          // The icon is now 100% visible and colorful all the time.
                          className="w-5 h-5 md:w-6 md:h-6 object-contain" 
                        />
                        <span className="text-xs md:text-sm font-medium text-white/60 tracking-wide transition-colors group-hover:text-white">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}