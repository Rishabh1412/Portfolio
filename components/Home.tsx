"use client";

import React from "react";
import Button from "./Button";
import Image from "next/image";
import Reveal from "./Reveal";
import StaggerText from "./StaggerText";

const Home = () => {
  return (
    <div className="md:px-12 px-4 md:py-9 flex flex-col gap-12 py-4 bg-gradient-to-b from-background from-70% md:from-0% to-gradient-end h-full min-h-screen w-full overflow-hidden">
      <div className="pt-40 lg:pt-28 gap-9 flex-col flex">
        {/* Profile Section */}
        <Reveal delay={0.1}>
          <div className="flex gap-4 items-center">
            <Image
              src="/pfp.jpeg"
              className="rounded-full border-2 border-white"
              alt="pfp"
              width={56}
              height={56}
            />
            <div className="flex flex-col">
              <h4 className="font-medium text-white text-xl tracking-tight">
                Rishabh Kartik
              </h4>
              <p className="description-text">
                Final Year CSE Student,{" "}
                <span className="text-white">IIIT Kalyani</span>
              </p>
            </div>
          </div>
        </Reveal>

        {/* Main Headline */}
        {/* We use a flex-col here to maintain your explicit line break (<br/>) while using the StaggerText component */}
        <h1 className="heading-text flex flex-col gap-2">
          <StaggerText text="I’m a Computer Science" />
          <StaggerText text="student and full-stack developer." />
        </h1>

        {/* Description */}
        <Reveal delay={0.3}>
          <p className="description-text lg:w-1/2 w-full leading-[1.75]">
            I turn ideas into production-ready applications through clean
            design, scalable architecture, and modern technologies. My focus is
            building products people enjoy using and businesses can depend on.
          </p>
        </Reveal>

        {/* Action Buttons */}
        <Reveal delay={0.4}>
          <div className="flex flex-col md:flex-row gap-4 w-full">
            {/* Wrapped in anchor tags to make them actively scroll to sections */}
            <a href="#projects" className="w-full md:w-auto">
              <Button variant="primary" size="lg" className="w-full">
                View My Works
              </Button>
            </a>

            <a href="#contact" className="w-full md:w-auto">
              <Button variant="ghost" size="lg" className="w-full">
                Get in Touch
              </Button>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Recent Project Section - UPGRADED */}
      <div className="gap-6 flex flex-col mt-8 md:mt-12 w-full">
        <Reveal delay={0.5}>
          <div className="flex items-center gap-4">
            
            {/* Added a simple minimalist dot sign in front */}
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <p className="text-white/40 tracking-[2px] text-xs font-mono uppercase mt-0.5">
                Recent Project
              </p>
            </div>
            
            {/* Subtle connecting line */}
            <div className="flex-1 h-px bg-white/[0.05]" />
          </div>
        </Reveal>

        <Reveal delay={0.6}>
          {/* Added a glass browser frame, smoother border radius, and deeper shadow */}
          <div className="group w-full rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 bg-[#050505] shadow-2xl transition-all duration-700 hover:border-white/20">
            
            {/* Mock App Header */}
            <div className="h-10 md:h-12 border-b border-white/5 bg-white/[0.02] backdrop-blur-sm flex items-center px-4 md:px-6 gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-red-500/80" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white/20 transition-colors duration-300 group-hover:bg-green-500/80" />
            </div>

            {/* Image Container */}
            <div className="relative overflow-hidden">
              <Image
                src="/mainimg.png"
                alt="Main Image"
                width={1920}
                height={1080}
                sizes="100vw"
                className="w-full h-auto object-cover opacity-90 transition-all duration-1000 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
              />
            </div>
            
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Home;