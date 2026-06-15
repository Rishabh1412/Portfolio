"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { premiumEase } from "@/lib/animations";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export default function Reveal({ children, width = "100%", delay = 0 }: RevealProps) {
  const ref = useRef(null);
  // once: true ensures it only animates the first time you scroll past it
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} style={{ width, position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}