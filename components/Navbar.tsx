"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Menu,
  X,
} from "lucide-react";

// 1. Updated navItems to include target hrefs
const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Techstack", href: "#techstack" },
  { name: "Contact", href: "#contact" },
];

const premiumEase = [0.16, 1, 0.3, 1];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <motion.nav
        initial={{
          opacity: 0,
          y: -20,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
        className="sticky top-0 z-50 flex items-center gap-4 border-b border-white/5 bg-background/60 backdrop-blur-3xl px-4 md:px-12 py-3">
        
        {/* Logo - Clicks back to top */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="cursor-pointer"
        >
          <Image
            src="/whitelogo.png"
            alt="Logo"
            width={24}
            height={20}
            priority
            className="w-auto h-5"
          />
        </motion.a>

        

        {/* Desktop Nav */}
        <div 
          className="hidden md:flex flex-1 justify-end gap-1 description-text"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navItems.map((item, index) => (
            // 2. Converted to <a> tag and added href
            <a
              key={item.name}
              href={item.href}
              className="relative px-5 py-2 cursor-pointer rounded-full"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8,
                  }}
                />
              )}
              <motion.span 
                className="relative z-10 text-white/70 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </motion.span>
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button>Let's Talk</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="ml-auto md:hidden text-white/70 hover:text-white transition-colors"
        >
          <Menu size={24} />
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed inset-0 z-[100] bg-black/80"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex h-full flex-col items-center justify-center gap-8"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              >
                <X size={28} />
              </button>

              {/* Mobile Links */}
              {navItems.map((item, index) => (
                <div key={item.name} className="overflow-hidden">
                  {/* 3. Added <a> tag with onClick to close menu */}
                  <a href={item.href} onClick={() => setOpen(false)}>
                    <motion.p
                      initial={{ y: "100%", rotate: 2 }}
                      animate={{ y: 0, rotate: 0 }}
                      exit={{ y: "100%", rotate: 2 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1] as const,
                      }}
                      className="text-4xl font-medium tracking-tight cursor-pointer text-white/80 hover:text-white transition-colors"
                    >
                      {item.name}
                    </motion.p>
                  </a>
                </div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const}}
                className="mt-8"
              >
                {/* Mobile CTA */}
                <a href="#contact" onClick={() => setOpen(false)}>
                  <Button size="lg">Let's Talk</Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;