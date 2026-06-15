"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";
import Magnetic from "./Magnetix";

const socialLinks = [
  {
    platform: "Linkedin",
    handle: "/in/rishabh-kartik",
    url: "https://linkedin.com/in/rishabh-kartik",
  },
  {
    platform: "Instagram",
    handle: "rishabh_14__p",
    url: "https://instagram.com/rishabh_14__p",
  },
  {
    platform: "Youtube",
    handle: "aqxa_art",
    url: "https://youtube.com/@aqxa_art",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-background flex flex-col items-center pt-40 pb-16 overflow-hidden">
      <div className="w-full px-4 md:px-12">
        
        {/* Social Links List - Kept as motion.a for perfect divide-y borders */}
        <div className="flex flex-col border-b border-white/10 divide-y divide-white/10">
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
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1, // Stagger effect
              }}
              className="group flex justify-between items-start md:items-center py-6 md:py-8 gap-2 md:gap-0 cursor-pointer"
            >
              {/* Platform Name */}
              <span className="text-sm md:text-lg font-medium tracking-tight text-foreground group-hover:text-white transition-colors duration-300">
                {link.platform}
              </span>
              
              {/* Handle & Arrow */}
              <div className="flex items-center gap-3">
                <span className="text-sm md:text-lg text-foreground/50 group-hover:text-foreground/90 transition-colors duration-300 truncate max-w-[250px] md:max-w-none">
                  {link.handle}
                </span>
                
                {/* Fixed Arrow: Removed Framer Motion here. 
                  Pure Tailwind handles group hovers much smoother.
                */}
                <div className="transform translate-y-2 -translate-x-2 opacity-0 hidden lg:block group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  <ArrowUpRight size={18} className="text-foreground/60" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Section: Logo & Copyright */}
        <Reveal delay={0.4}>
          <div className="mt-24 mb-8 flex flex-col items-center justify-center gap-6">
            <Magnetic>
              <div className="cursor-pointer">
                <Image src='/gray.png' alt="gray logo" width={30} height={24} className="w-auto h-6"/>
              </div>
            </Magnetic>
            <p className="text-xs md:text-sm text-foreground/40 tracking-wide">
              Designed and Built with love and precision by me.
            </p>
          </div>
        </Reveal>

      </div>
    </footer>
  );
}