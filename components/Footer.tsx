"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Network } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";
import Magnetic from "./Magnetix";

const Crosshair = ({ className }: { className?: string }) => (
  <div className={`absolute flex items-center justify-center bg-background w-[15px] h-[15px] ${className}`}>
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/30">
      <path d="M7.5 0V15M0 7.5H15" stroke="currentColor" strokeWidth="1" />
    </svg>
  </div>
);

// Added ID strings for the monospace indexing
const socialLinks = [
  {
    id: "01",
    platform: "Linkedin",
    handle: "/in/rishabh-kartik",
    url: "https://www.linkedin.com/in/rishabh-kartik-46838428b/",
  },
  {
    id: "02",
    platform: "Instagram",
    handle: "@aqxa.art",
    url: "https://instagram.com/aqxa.art",
  },
  {
    id: "03",
    platform: "Youtube",
    handle: "aqxa_art",
    url: "https://youtube.com/@aqxa_art",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-background flex flex-col items-center pt-32 pb-12 overflow-hidden">
      <div className="w-full max-w-7xl px-6 md:px-12 flex flex-col gap-12">
        
        {/* Footer Header */}
        <Reveal delay={0.1}>
          <div className="flex items-center justify-between pb-6 relative border-b border-white/10">
            {/* Ultra-subtle solid line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/[0.03]" />

            <Crosshair className="-bottom-[7px] -left-2" />
            <Crosshair className="-bottom-[7px] -right-2" />

            <div className="flex items-center gap-3 text-foreground/40 font-mono text-xs uppercase tracking-widest">
              <Network size={14} />
              <span>[EXTERNAL_CONNECTIONS] // Network</span>
            </div>
          </div>
        </Reveal>

        {/* Social Links List */}
        <div className="flex flex-col">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1] as const,
                delay: index * 0.1,
              }}
              className="group relative flex justify-between items-center py-8 md:py-10 border-b border-white/[0.03] transition-colors duration-500 hover:bg-white/[0.02] px-4 -mx-4 rounded-xl"
            >
              
              {/* Hover Accent Line (Left edge of the row) */}
              <div className="absolute left-0 top-1/4 h-1/2 w-[2px] bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/30 rounded-full" />

              {/* Left Side: ID & Platform Name */}
              <div className="flex items-center gap-6 md:gap-12 transition-transform duration-500 ease-out group-hover:translate-x-2">
                <span className="text-xs font-mono text-foreground/30 uppercase tracking-widest group-hover:text-foreground/50 transition-colors duration-500">
                  [{link.id}]
                </span>
                <span className="text-lg md:text-2xl font-medium tracking-tight text-foreground/80 group-hover:text-foreground transition-colors duration-500">
                  {link.platform}
                </span>
              </div>
              
              {/* Right Side: Handle & Arrow */}
              <div className="flex items-center gap-4 transition-transform duration-500 ease-out group-hover:-translate-x-2">
                <span className="text-sm md:text-base font-mono text-foreground/40 group-hover:text-foreground/80 transition-colors duration-500 truncate max-w-[150px] md:max-w-none">
                  {link.handle}
                </span>
                
                {/* Sleek sliding arrow */}
                <div className="transform translate-y-2 hidden lg:block -translate-x-2 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <ArrowUpRight size={20} className="text-foreground/80" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Section: Logo & System Halt */}
        <Reveal delay={0.4}>
          <div className="mt-16 md:mt-24 flex flex-col items-center justify-center gap-6">
            <Magnetic>
              <div className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-500">
                <Image src='/gray.png' alt="Logo" width={30} height={24} className="w-auto h-6" />
              </div>
            </Magnetic>
            
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-mono text-foreground/20 uppercase tracking-[0.2em]">
                [SYS_HALT] // End of Execution
              </span>
              <p className="text-xs md:text-sm text-foreground/40 font-light tracking-wide">
                [SYS_AUTHOR] Engineered by Rishabh Kartik.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </footer>
  );
}