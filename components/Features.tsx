"use client";

import React from "react";
import { motion } from "framer-motion";

const featuresData = [
  {
    title: "Built for Scale",
    description: "Designed with modern architecture patterns to handle growing workloads without compromising performance.",
    // Abstract grid/network icon
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/50 transition-colors duration-500 group-hover:text-foreground">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <path d="M3 14h7v7H3z" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Workflow",
    description: "Integrates intelligent automation and contextual decision-making across every step of the process.",
    // Abstract spark/AI icon
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/50 transition-colors duration-500 group-hover:text-foreground">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      </svg>
    ),
  },
  {
    title: "Performance First",
    description: "Optimized for speed, responsiveness, and seamless user experiences across devices.",
    // Abstract speed/lightning icon
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/50 transition-colors duration-500 group-hover:text-foreground">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full bg-background py-4 flex justify-center">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] as const, // Using your premium ease curve
                delay: index * 0.1,
              }}
              className="group relative flex flex-col p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.05] overflow-hidden transition-all duration-500 hover:border-white/[0.15]"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Top right decorative arrow (appears on hover) */}
              <div className="absolute top-6 right-6 opacity-0 -translate-x-2 translate-y-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/20">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>

              {/* Icon Container with slight lift interaction */}
              <div className="relative z-10 mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.05] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-white/[0.08]">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div className="relative z-10 flex flex-col gap-3 mt-auto">
                <h3 className="text-xl font-medium tracking-tight text-foreground/90 transition-colors duration-300 group-hover:text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/50 transition-colors duration-300 group-hover:text-foreground/70">
                  {feature.description}
                </p>
              </div>
              
              {/* Bottom accent line that expands on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-foreground/40 to-transparent transition-all duration-500 ease-out group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}