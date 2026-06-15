"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cat, ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal";
import Magnetic from "./Magnetix";

// Sample data - you can add more projects here to see the carousel in action
const projects = [
  {
    id: "01",
    title: "Banking Op",
    description:
      "A distributed ledger backend using Node.js and Python, featuring Redis caching and an async fraud detection microservice.",
    imageColor: "from-white/5 to-white/10", // Placeholder gradient colors
  },
  {
    id: "02",
    title: "E-Commerce API",
    description:
      "High-performance storefront architecture built with Go and PostgreSQL, handling 10k+ concurrent requests during peak events.",
    imageColor: "from-foreground/10 to-foreground/5",
  },
  {
    id: "03",
    title: "AI Analytics Dash",
    description:
      "Real-time data visualization platform processing thousands of streams utilizing WebSockets, React, and D3.js.",
    imageColor: "from-white/10 to-transparent",
  },
];

export default function WorksSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  // Variants for the slide animation
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
      filter: "blur(4px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 40 : -40,
      opacity: 0,
      filter: "blur(4px)",
    }),
  };

  return (
    <section id="projects" className="w-full bg-background pt-40 pb-4 md:pb-12 flex justify-center overflow-hidden">
      <div className="w-full px-4 md:px-12 flex-col flex gap-9">
        
        {/* Section Header */}
        <Reveal delay={0.1}>
          <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-foreground">
            More from my Works
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 md:gap-16 lg:gap-24">
          
          {/* Left Side: Image Carousel */}
          <Reveal delay={0.2}>
            <div className="relative w-full aspect-4/3 md:aspect-auto md:h-full min-h-75 rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/5">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                  }}
                  className={`absolute inset-0 w-full h-full bg-gradient-to-br ${projects[currentIndex].imageColor}`}
                >
                  {/* Replace this gradient div with your actual Next.js Image component when ready */}
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          {/* Right Side: Content */}
          <Reveal delay={0.3}>
            <div className="flex flex-col justify-center h-full">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="flex flex-col"
                >
                  {/* Title & Index Row */}
                  <div className="flex justify-between items-end mb-6">
                    <h3 className="text-lg md:text-xl font-semibold tracking-tight text-foreground">
                      {projects[currentIndex].title}
                    </h3>
                    <span className="text-foreground/40 font-light text-lg md:text-xl">
                      {projects[currentIndex].id}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-lg w-full lg:w-3/4 leading-relaxed font-light mb-8 md:mb-12">
                    {projects[currentIndex].description}
                  </p>

                  {/* Action Buttons (Automatically Magnetic via your Button component) */}
                  <div className="flex flex-wrap gap-4 mb-12 md:mb-16">
                    <Button variant="primary" className="pl-5 pr-6">
                      Github <Cat size={16} className="ml-1" />
                    </Button>
                    
                    <Button variant="ghost" className="pl-5 pr-6">
                      More <ArrowUpRight size={16} className="ml-1 text-foreground/70" />
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="flex gap-4 justify-center md:justify-start mt-auto">
                <Magnetic>
                  <button
                    onClick={handlePrev}
                    className="flex items-center justify-center h-12 w-12 rounded-full border border-white/10 text-foreground/70 transition-all duration-300 hover:bg-white/10 hover:text-foreground active:scale-95"
                    aria-label="Previous Project"
                  >
                    <ArrowLeft size={20} strokeWidth={1.5} />
                  </button>
                </Magnetic>
                
                <Magnetic>
                  <button
                    onClick={handleNext}
                    className="flex items-center justify-center h-12 w-12 rounded-full border border-white/10 text-foreground/70 transition-all duration-300 hover:bg-white/10 hover:text-foreground active:scale-95"
                    aria-label="Next Project"
                  >
                    <ArrowRight size={20} strokeWidth={1.5} />
                  </button>
                </Magnetic>
              </div>
              
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}