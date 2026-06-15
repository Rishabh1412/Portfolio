"use client";

import React from "react";
import { motion } from "framer-motion";

const featuresData = [
  {
    title: "Built for Scale",
    description:
      "Designed with modern architecture patterns to handle growing workloads without compromising performance.",
  },
  {
    title: "AI-Powered Workflow",
    description:
      "Integrates intelligent automation and contextual decision-making across every step of the process.",
  },
  {
    title: "Performance First",
    description:
      "Optimized for speed, responsiveness, and seamless user experiences across devices.",
  },
];

const WireframeS = () => (
  <svg
    viewBox="0 0 200 300"
    className="w-full h-full max-h-[240px] text-foreground/10 transition-all duration-700 group-hover:text-foreground/30 group-hover:scale-105"
  >
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="260"
      fontWeight="200"
      fill="transparent"
      stroke="currentColor"
      strokeWidth="2"
      fontFamily="system-ui, sans-serif"
    >
      S
    </text>
  </svg>
);

export default function FeaturesSection() {
  return (
    <section className="w-full bg-background flex justify-center overflow-hidden">
      <div className="w-full">
        {/* 1. Always flex-row
          2. overflow-x-auto for scrolling
          3. Scrollbar hiding utilities: [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
          4. snap-x snap-mandatory for smooth carousel locking
        */}
        <div 
          className="flex flex-row items-stretch gap-6 md:gap-12 overflow-x-auto snap-x snap-mandatory px-6 md:px-0 pb-8 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {featuresData.map((feature, index) => (
            <React.Fragment key={feature.title}>
              {/* Feature Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.15,
                }}
                className="group flex flex-col p-4 lg:p-none gap-8 py-4 w-[85vw] bg-card-bg lg:bg-background rounded-2xl md:w-auto md:flex-1 shrink-0 snap-center"
              >
                {/* Graphic Area */}
                <div className="flex flex-1 items-center justify-center pointer-events-none min-h-[200px]">
                  <WireframeS />
                </div>

                {/* Text Content */}
                <div className="mt-auto flex flex-col gap-3">
                  <h3 className="text-xl font-medium tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                  <p className="description-text">
                    {feature.description}
                  </p>
                </div>
              </motion.div>

               {/* Explicit Separator Line - Now always vertical */}
              {index !== featuresData.length - 1 && (
                <div className="w-px hidden lg:block bg-[#1e1e1e] shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}