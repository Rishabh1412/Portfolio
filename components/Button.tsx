"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetix";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  size?: "sm" | "lg";
  variant?: "primary" | "ghost";
  magnetic?: boolean; 
}

export default function Button({
  children,
  size = "sm",
  variant = "primary",
  className,
  magnetic = true, 
  ...props
}: ButtonProps) {
  
  const sizeStyles = {
    sm: "px-5 py-2 text-sm",
    lg: "px-6 py-3 text-sm",
  };

  const variantStyles = {
    primary: "bg-foreground text-background border border-transparent",
    ghost: "bg-transparent text-foreground border border-white/10",
  };

  const buttonElement = (
    <motion.button
      {...props}
      initial="initial"
      whileHover={props.disabled ? "initial" : "hover"}
      whileTap={props.disabled ? "initial" : "tap"}
      className={cn(
        "group relative overflow-hidden rounded-full font-semibold focus-visible:outline-none focus-visible:ring-2 border-white border disabled:opacity-70 disabled:cursor-not-allowed",
        sizeStyles[size],
        variantStyles[variant],
        className // Extends w-full safely
      )}
      variants={{
        initial: { scale: 1 },
        hover: { scale: 1.04 },
        tap: { scale: 0.96 },
      }}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 25,
        mass: 0.4,
      }}
    >
      {/* Slide-up Fill Effect */}
      <motion.div
        className={cn(
          "absolute inset-0 z-0 rounded-full",
          variant === "primary" ? "bg-background/20" : "bg-foreground/10"
        )}
        variants={{
          initial: { y: "100%", opacity: 0 },
          hover: { y: "0%", opacity: 1 },
          tap: { y: "0%", opacity: 1 },
        }}
        transition={{
          type: "spring",
          bounce: 0,
          duration: 0.35,
        }}
      />

      {/* Content Parallax Container */}
      <motion.span
        className="relative z-10 flex items-center justify-center gap-2 w-full"
        variants={{
          initial: { y: 0 },
          hover: { y: -1 },
          tap: { y: 0 },
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {children}
      </motion.span>
    </motion.button>
  );

  if (magnetic && !props.disabled) {
    // Pass the layout className down to the wrapper component!
    return <Magnetic className={className}>{buttonElement}</Magnetic>;
  }

  return buttonElement;
}