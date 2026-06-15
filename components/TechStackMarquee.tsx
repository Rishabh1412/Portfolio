"use client";

import React from "react";
import { motion } from "framer-motion";

const techStack = [
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
  { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini" },
];

export default function TechStackMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10 bg-background">
      
      {/* Edge Fades */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 md:w-48 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 md:w-48 bg-gradient-to-l from-background to-transparent" />

      {/* Marquee Track
        We animate to -50%. Because we have 4 identical blocks inside, 
        moving 50% shifts exactly 2 blocks over, creating a mathematically perfect, infinite loop.
      */}
      <motion.div
        className="flex w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration: 40, // Increased duration slightly so it doesn't move too fast across 4 blocks
          repeat: Infinity,
        }}
      >
        {/* Render 4 sets to ensure it never runs out of track on Ultra-wide monitors */}
        {[1, 2, 3, 4].map((setIndex) => (
          <div 
            key={setIndex} 
            className="flex items-center gap-16 pr-16 md:gap-24 md:pr-24"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.1,
                  y: -2 
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
                className="group flex cursor-pointer items-center gap-3 opacity-50 transition-all duration-300 hover:opacity-100"
              >
                <img 
                  src={tech.icon} 
                  alt={`${tech.name} logo`} 
                  /* Added group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] 
                    This creates a soft white halo on hover. Colored logos look radiant, 
                    and the pure black Next.js logo stays clearly visible!
                  */
                  className="
                    h-7 w-7 md:h-9 md:w-9 object-contain 
                    grayscale brightness-0 invert 
                    transition-all duration-300 
                    group-hover:grayscale-0 
                    group-hover:brightness-100 
                    group-hover:invert-0 
                    group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]
                  " 
                />
                <span className="text-xl font-medium tracking-tight text-foreground md:text-2xl">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}