"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticProps {
  children: React.ReactNode;
  className?: string; // Accept incoming alignment layout styling
}

export default function Magnetic({ children, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    setPosition({ x: middleX / 4, y: middleY / 4 }); 
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Determine standard display block patterns dynamically
  const isFullWidth = className?.includes("w-full");

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      // Use block layout structure if specified, otherwise default to inline-block
      className={cn(
        isFullWidth ? "block w-full md:w-auto" : "inline-block",
        className
      )}
    >
      {children}
    </motion.div>
  );
}