"use client";

import React from "react";
import Reveal from "./Reveal";
import { Terminal, Cpu, Layout, Layers } from "lucide-react";

const Crosshair = ({ className }: { className?: string }) => (
  <div className={`absolute flex items-center justify-center bg-background w-[15px] h-[15px] ${className}`}>
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/30">
      <path d="M7.5 0V15M0 7.5H15" stroke="currentColor" strokeWidth="1" />
    </svg>
  </div>
);

const toolCategories = [
  {
    category: "Architecture & Frameworks",
    icon: <Layers size={14} className="text-white/40" />,
    tools: [
      { name: "Next.js", description: "Production App Architecture", hotkey: "NXT" },
      { name: "TypeScript", description: "Strictly Typed Ecosystem", hotkey: "TS" },
      { name: "Tailwind CSS", description: "Fluid Design Systems", hotkey: "TW" },
      { name: "Zustand", description: "Atomic State Orchestration", hotkey: "ZST" },
    ]
  },
  {
    category: "AI Engineering & Pipeline",
    icon: <Cpu size={14} className="text-white/40" />,
    tools: [
      { name: "LangGraph", description: "Stateful Multi-Agent Runtime", hotkey: "LGH" },
      { name: "Google Gemini", description: "Context-Aware Generative Core", hotkey: "GEM" },
      { name: "Redis", description: "Real-Time Microservice Caching", hotkey: "RDS" },
      { name: "Vapi AI", description: "Real-Time Voice Orchestration", hotkey: "VAP" },
    ]
  },
  {
    category: "Design & Logic Layers",
    icon: <Layout size={14} className="text-white/40" />,
    tools: [
      { name: "Figma", description: "High-Fidelity UI Architectures", hotkey: "FIG" },
      { name: "Node.js", description: "Scalable Polyglot Backends", hotkey: "NODE" },
      { name: "C++", description: "Algorithmic Analysis & Optimization", hotkey: "CPP" },
      { name: "Python", description: "Distributed Systems & Automation", hotkey: "PY" },
    ]
  }
];

export default function ToolsSection() {
  return (
    <section id="tools" className="w-full bg-background pt-32 pb-24 flex justify-center overflow-hidden">
      <div className="w-full max-w-7xl px-6 md:px-12 flex flex-col gap-16">
        
        {/* Architectural Section Header */}
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-4 border-b border-white/10 pb-8 relative">
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/[0.03]" />
            <Crosshair className="-bottom-[7px] -left-2" />
            <Crosshair className="-bottom-[7px] -right-2" />

            <div className="flex items-center gap-3 text-white/40 font-mono text-xs uppercase tracking-widest">
              <Terminal size={14} />
              <span>[SYSTEM_INVENTORY] // Stack Modules</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
              Primary Tools
            </h2>
          </div>
        </Reveal>

        {/* Categories Pipeline Stack */}
        <div className="flex flex-col gap-16">
          {toolCategories.map((cat, catIndex) => (
            <div key={cat.category} className="flex flex-col gap-6">
              
              {/* Category Subheading Row */}
              <Reveal delay={0.2 + catIndex * 0.1}>
                <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                  {cat.icon}
                  <h3 className="text-xs font-mono tracking-widest text-white/50 uppercase">
                    {cat.category}
                  </h3>
                </div>
              </Reveal>

              {/* Grid System for Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.tools.map((tool, toolIndex) => (
                  <Reveal key={tool.name} delay={0.3 + (toolIndex * 0.05)}>
                    <div className="group relative bg-[#030303] border border-white/5 hover:border-white/20 rounded-xl p-5 flex flex-col justify-between min-h-[110px] shadow-sm transition-all duration-500 ease-out cursor-default hover:bg-white/[0.01]">
                      
                      {/* Top Row: Name & Terminal Access Key */}
                      <div className="flex justify-between items-start w-full">
                        <h4 className="text-lg font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                          {tool.name}
                        </h4>
                        <span className="font-mono text-[10px] text-white/20 tracking-wider group-hover:text-white/40 transition-colors duration-300">
                          // {tool.hotkey}
                        </span>
                      </div>

                      {/* Bottom Row: Granular Tool Description */}
                      <p className="text-xs text-white/40 font-light tracking-wide leading-relaxed mt-4 group-hover:text-white/60 transition-colors duration-300">
                        {tool.description}
                      </p>

                      {/* Subtle Internal Wireframe Corner Lines on Hover */}
                      <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-white/0 group-hover:border-white/20 transition-all duration-500" />
                      <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-white/0 group-hover:border-white/20 transition-all duration-500" />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Context Narrative Sign-Off */}
        <Reveal delay={0.6}>
          <p className="text-base md:text-lg font-light text-white/50 leading-relaxed max-w-4xl border-l border-white/10 pl-6 mt-4">
            From crafting high-fidelity interface paradigms in Figma to architecting low-latency distributed microservices, stateful multi-agent systems, and real-time streaming engines—these nodes compose my immediate engineering environment.
          </p>
        </Reveal>

      </div>
    </section>
  );
}