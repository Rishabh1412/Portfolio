"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, ShieldAlert, CornerDownRight } from "lucide-react";
import Button from "@/components/Button";

// The structural crosshair marker
const Crosshair = ({ className }: { className?: string }) => (
  <div className={`absolute flex items-center justify-center bg-background w-[15px] h-[15px] z-20 ${className}`}>
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/30">
      <path d="M7.5 0V15M0 7.5H15" stroke="currentColor" strokeWidth="1" />
    </svg>
  </div>
);

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error("[SYSTEM_FAULT] 404: Unresolved route accessed ->", pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6 overflow-hidden relative">
      
      {/* Background Architectural Grid */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', 
          backgroundSize: '48px 48px' 
        }} 
      />

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-[#030303] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
      >
        {/* Wireframe Intersection Crosshairs */}
        <Crosshair className="-top-[7px] -left-[7px]" />
        <Crosshair className="-top-[7px] -right-[7px]" />
        <Crosshair className="-bottom-[7px] -left-[7px]" />
        <Crosshair className="-bottom-[7px] -right-[7px]" />

        {/* Mock Window Header */}
        <div className="h-10 border-b border-white/10 bg-white/[0.02] flex items-center justify-between px-4">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <div className="flex items-center gap-2 text-white/30 font-mono text-[10px] tracking-widest uppercase">
            <ShieldAlert size={12} className="text-red-500/70" /> 
            <span>System_Fault // 404</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-12 flex flex-col gap-8">
          
          {/* Headline */}
          <div className="flex flex-col gap-2 border-l-2 border-red-500/50 pl-4">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Unresolved Route
            </h1>
            <p className="text-sm md:text-base text-white/40 font-light">
              The requested node could not be located within the current topology.
            </p>
          </div>

          {/* Terminal Readout Window */}
          <div className="w-full bg-[#080808] border border-white/5 rounded-xl p-5 font-mono text-xs md:text-sm text-white/50 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-white/30 mb-2 border-b border-white/5 pb-2">
              <Terminal size={14} /> Diagnostic Log
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-emerald-500 shrink-0">~</span>
              <span>Attempting connection to remote path...</span>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-emerald-500 shrink-0">~</span>
              <span className="break-all">Target URL: <span className="text-white/80">{pathname}</span></span>
            </div>
            
            <div className="flex items-start gap-3 text-red-400/80 mt-1">
              <CornerDownRight size={14} className="shrink-0 mt-0.5" />
              <span>[EXCEPTION] ERR_NOT_FOUND: Node mapping failed.</span>
            </div>
            
            <div className="mt-2 w-2.5 h-4 bg-emerald-500/80 animate-pulse" />
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full">
            <Link href="/" className="w-full sm:w-auto block">
              <Button variant="primary" className="w-full sm:w-auto text-sm h-11 px-8">
                Initialize Reboot (Home)
              </Button>
            </Link>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;