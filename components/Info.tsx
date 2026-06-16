"use client";

import React from 'react';
import { motion } from 'framer-motion';
import TechStackMarquee from './TechStackMarquee';
import Features from './Features';
import Reveal from './Reveal'; 
import { Terminal } from 'lucide-react';

const Info = () => {
  return (
    <section className='w-full bg-background flex justify-center overflow-hidden py-16'>
      <div className='w-full px-4 md:px-12 flex flex-col gap-16 md:gap-24'>
          
        {/* Top Info Block (Header & Description) */}
        <div className='flex flex-col gap-10 md:gap-14'>
            
            {/* Header with Custom Line Draw Animation */}
            <div className='flex gap-6 items-center w-full'>
              <Reveal delay={0.1}>
                <h2 className='text-3xl md:text-4xl font-semibold tracking-tight text-foreground'>
                  Intervue
                </h2>
              </Reveal>
              
              {/* The line smoothly grows from left to right */}
              <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 }}
                className='flex-1 h-px bg-white/10 origin-left'
              />
            </div>

            {/* Subheader with Metadata */}
            <Reveal delay={0.2}>
              <div className='flex flex-col gap-5'>
                <div className="flex items-center gap-3 text-foreground/40 font-mono text-xs uppercase tracking-widest">
                  <Terminal size={14} />
                  <span>Project Overview // Architecture</span>
                </div>
                <h3 className='text-2xl md:text-4xl lg:w-4/5 w-full font-medium tracking-tight leading-snug text-foreground/50'>
                  <span className='text-foreground font-medium'>An AI voice interviewer platform</span> built with Next.js, integrating the Google Gemini API and Vapi for real-time voice interaction.
                </h3>
              </div>
            </Reveal>
        </div>

        {/* Content Blocks (Tech Stack & Features) */}
        <div className='flex flex-col gap-20'>
            
            {/* Tech Stack Block */}
            <Reveal delay={0.3}>
              <div className='flex flex-col gap-8'>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-foreground/40 uppercase tracking-widest">
                    [01] Core Stack
                  </span>
                  {/* Subtle connecting line */}
                  <div className="flex-1 h-px bg-white/[0.03]" />
                </div>
                
                {/* Wrapped in a subtle bordered container to match the wireframe look */}
                <div className="w-full bg-[#030303] border border-white/5 rounded-2xl py-4 overflow-hidden shadow-2xl">
                  <TechStackMarquee />
                </div>
              </div>
            </Reveal>

            {/* Features Block */}
            <Reveal delay={0.4}>
              <div className='flex flex-col gap-8'>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-foreground/40 uppercase tracking-widest">
                    [02] System Capabilities
                  </span>
                  {/* Subtle connecting line */}
                  <div className="flex-1 h-px bg-white/[0.03]" />
                </div>
                
                <div className="w-full">
                  <Features />
                </div>
              </div>
            </Reveal>
            
        </div>
      </div>
    </section>
  );
};

export default Info;