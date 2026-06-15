"use client";

import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import Magnetic from "./Magnetix";

// Extracted data from your design
const experiences = [
  {
    id: 1,
    title: "Led Design Team at Status Code 2",
    subtitle: "(IIIT Kalyani)",
    description:
      "Spearheaded the visual identity and UI assets for the college hackathon. Managed end-to-end design team operations to ensure a cohesive digital experience for all participants.",
    // Replace these paths with your actual icon image paths in your public folder
    iconUrl: "/sc2lg.png", 
  },
  {
    id: 2,
    title: "Pixel Club Secretary",
    subtitle: "(IIIT Kalyani)",
    description:
      "Directed club operations and organized technical workshops for the 2024-2025 academic session. Fostered a collaborative campus community focused on modern development and design practices.",
    iconUrl: "/pxllg.png",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full bg-background pt-40 flex justify-center">
      <div className="w-full">
        
        {/* Section Header */}
        <Reveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl px-4 md:px-12 font-medium tracking-tight text-foreground mb-9">
            Experience
          </h2>
        </Reveal>

        {/* Experience List Container */}
        <div className="flex flex-col">
          
          {experiences.map((exp, index) => (
            <Reveal key={exp.id} delay={0.2 + index * 0.15}>
              <div 
                // Grid handles the side-by-side layout on desktop, and stacking on mobile
                className="grid grid-cols-1 px-4 md:px-12 md:grid-cols-12 gap-4 md:gap-12 py-10 md:py-12 hover:bg-white/[0.02] transition-colors duration-500 border-b border-[#1E1E1E] group"
              >
                
                {/* Left Column: Icon + Titles */}
                <div className="md:col-span-5 flex gap-4">
                  
                  {/* Magnetic Icon Wrapper for that premium feel */}
                  <Magnetic>
                    <div className="relative shrink-0 h-9 w-9 md:h-12 md:w-12 rounded-full overflow-hidden border-2 border-white/40 group-hover:border-white transition-colors duration-500 bg-[#121212] flex items-center justify-center text-xl">
                      {/* Remove the fallback text and uncomment the Image component once you have your assets */}
                      <Image 
                        src={exp.iconUrl} 
                        alt={exp.title} 
                        fill 
                        className="object-cover"
                        sizes="48px"
                      /> 
                    </div>
                  </Magnetic>

                  {/* Title & Subtitle */}
                  <div className="flex flex-col pt-1">
                    <h3 className="text-lg md:text-xl leading-[80%] font-medium tracking-tight text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-sm md:text-base font-medium text-muted mt-2">
                      {exp.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right Column: Description */}
                <div className="md:col-span-7 flex items-start md:items-center md:pl-8">
                  <p className="text-base md:text-lg leading-relaxed font-normal text-accent">
                    {exp.description}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}
          
        </div>
      </div>
    </section>
  );
}