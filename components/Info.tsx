"use client";

import React from 'react';
import { motion } from 'framer-motion';
import TechStackMarquee from './TechStackMarquee';
import Features from './Features';
import Reveal from './Reveal'; // Import your universal animation wrapper

const Info = () => {
  return (
    <div className='bg-background md:p-12 flex flex-col gap-12 py-12 px-4 overflow-hidden'>
        
        {/* Header with Custom Line Draw Animation */}
        <div className='flex gap-6 items-center w-full'>
            <Reveal delay={0.1}>
                <h2 className='lg:text-4xl text-2xl font-semibold tracking-tight'>
                    Intervue
                </h2>
            </Reveal>
            
            {/* The line smoothly grows from left to right */}
            <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className='flex-1 h-px bg-[#333333] origin-left'
            />
        </div>

        {/* Subheader */}
        <Reveal delay={0.2}>
            <h2 className='text-foreground/60 lg:text-4xl lg:w-2/3 w-full text-2xl font-medium tracking-tight leading-snug'>
                <span className='text-white'>An AI voice interviewer platform</span> built with Next.js, integrating the Google Gemini API and Vapi for real-time voice interaction.
            </h2>
        </Reveal>

        {/* Content Blocks */}
        <div className='flex flex-col gap-16 mt-4'>
            
            <Reveal delay={0.3}>
                <div className='flex flex-col gap-6'>
                  <p className="text-foreground/50 text-sm font-medium tracking-[2px]">TECHSTACK USED</p>
                  <TechStackMarquee/>
                </div>
            </Reveal>

            <Reveal delay={0.4}>
                <div className='flex flex-col gap-6'>
                  <p className="text-foreground/50 text-sm font-medium tracking-[2px]">FEATURES</p>
                  <Features/>
                </div>
            </Reveal>
            
        </div>
    </div>
  );
};

export default Info;