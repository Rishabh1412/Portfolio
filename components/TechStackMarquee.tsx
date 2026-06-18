"use client";

import React from "react";
import { motion } from "framer-motion";

const techStack = [
  // Using explicitly white logos for Vercel & Next.js so they are visible on dark mode
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  // Using Devicon for the true, multi-color original logos
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  // Using Google's official Gemini sparkle asset for the true gradient
  { name: "Gemini API", icon: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" },
];

export default function TechStackMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10 bg-black">
      
      {/* Edge Fades */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 md:w-48 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 md:w-48 bg-gradient-to-l from-black to-transparent" />

      {/* Marquee Track */}
      <motion.div
        className="flex w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration: 40, 
          repeat: Infinity,
        }}
      >
        {[1, 2, 3, 4].map((setIndex) => (
          <div 
            key={setIndex} 
            className="flex items-center gap-16 pr-16 md:gap-24 md:pr-24"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05, 
                  y: -4        
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="group flex cursor-pointer items-center gap-3 transition-all duration-500"
              >
                {/* Image Container with Ambient Glow */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 z-0 scale-150 rounded-full bg-white/0 opacity-0 blur-xl transition-all duration-500 group-hover:bg-white/10 group-hover:opacity-100" />
                  
                  <img 
                    src={tech.icon} 
                    alt={`${tech.name} logo`} 
                    className="
                      relative z-10
                      h-7 w-7 object-contain md:h-9 md:w-9 
                      opacity-40 grayscale 
                      transition-all duration-500 ease-out 
                      group-hover:opacity-100 
                      group-hover:grayscale-0 
                    " 
                  />
                </div>
                
                <span className="text-xl font-medium tracking-tight text-foreground opacity-50 transition-opacity duration-500 group-hover:opacity-100 md:text-2xl">
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