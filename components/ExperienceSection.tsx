"use client";

import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import Magnetic from "./Magnetix";
import { Briefcase } from "lucide-react";

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
    <section
      id="experience"
      className="w-full bg-background pt-40 flex justify-center"
    >
      <div className="w-full">
        {/* Section Header */}
        <Reveal delay={0.1}>
  <div className="w-full px-4 md:px-12">
    {/* Removed: border-b border-white/10 */}
    <div className="flex flex-col gap-4 pb-8 relative">
      
      {/* The new customized line - adjust the [0.03] to make it lighter/darker */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/[0.03]" />

      <Crosshair className="-bottom-[7px] -left-2" />
      <Crosshair className="-bottom-[7px] -right-2" />

      <div className="flex items-center gap-3 text-foreground/40 font-mono text-xs uppercase tracking-widest">
        <Briefcase size={14} />
        <span>Professional Roles // Career Journey</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
        Experience
      </h2>
    </div>
  </div>
</Reveal>

        {/* Experience List Container */}
        <div className="flex flex-col mt-4">
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
                  <p className="text-sm md:text-base leading-relaxed font-normal text-accent">
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
