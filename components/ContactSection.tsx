"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Mail, Terminal, MapPin } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal";

const Crosshair = ({ className }: { className?: string }) => (
  <div className={`absolute flex items-center justify-center bg-background w-[15px] h-[15px] ${className}`}>
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/30">
      <path d="M7.5 0V15M0 7.5H15" stroke="currentColor" strokeWidth="1"/>
    </svg>
  </div>
);

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset(); 
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus("idle"), 5000); 
    }
  };

  return (
    <section id="contact" className="w-full bg-background pt-32 pb-24 flex justify-center overflow-hidden">
      <div className="w-full max-w-7xl px-6 md:px-12 flex flex-col gap-8 lg:gap-16">
        
        {/* Wireframe Header */}
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-4 border-b border-white/10 pb-8 relative">
            <div className="absolute bottom-0 left-0 w-full h-px bg-white/[0.03]" />
            <Crosshair className="-bottom-[7px] -left-2" />
            <Crosshair className="-bottom-[7px] -right-2" />

            <div className="flex items-center gap-3 text-foreground/40 font-mono text-xs uppercase tracking-widest">
              <Terminal size={14} />
              <span>Initiate Protocol // Communication</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
              Let's Connect
            </h2>
          </div>
        </Reveal>

        {/* Main Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Side: Context & Info */}
          <Reveal delay={0.2}>
            <div className="flex flex-col justify-center h-full">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-6">
                Building something <span className="text-foreground/50">extraordinary?</span>
              </h3>
              <p className="text-base md:text-lg text-foreground/60 leading-relaxed font-light mb-12 lg:w-5/6">
                Whether you have a complex system architecture in mind, need a scalable full-stack application, or just want to discuss modern web technologies—my inbox is open.
              </p>

              <div className="flex flex-col gap-6 border-l border-white/10 pl-6">
                <div className="flex items-center gap-4 text-foreground/70 transition-colors hover:text-foreground">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] border border-white/5">
                    <Mail size={16} />
                  </div>
                  <span className="font-mono text-sm tracking-wide">rishabhkartik2004@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-foreground/70 transition-colors hover:text-foreground">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] border border-white/5">
                    <MapPin size={16} />
                  </div>
                  <span className="font-mono text-sm tracking-wide">Available for remote roles</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Side: The Form */}
          <Reveal delay={0.3}>
            <div className="relative p-8 md:p-10 bg-[#030303] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Subtle Grid Background */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                   style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
              
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="flex flex-col gap-2 group">
                    <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-foreground/40 group-focus-within:text-foreground/80 transition-colors">
                      [01] Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-[#0a0a0a] border border-white/5 rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.02] transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-2 group">
                    <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-foreground/40 group-focus-within:text-foreground/80 transition-colors">
                      [02] Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-[#0a0a0a] border border-white/5 rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.02] transition-all"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-2 group">
                  <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-foreground/40 group-focus-within:text-foreground/80 transition-colors">
                    [03] System Specs / Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-[#0a0a0a] border border-white/5 rounded-lg px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.02] transition-all resize-none"
                  />
                </div>

                {/* Submit Area */}
                <div className="flex flex-col gap-3 mt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full justify-center h-12"
                  >
                    {isSubmitting ? (
                      <>Transmitting <Loader2 size={16} className="ml-2 animate-spin" /></>
                    ) : (
                      <>Submit <Send size={16} className="ml-2" /></>
                    )}
                  </Button>
                  
                  {/* Status Messages */}
                  <div className="h-6 flex items-center justify-center">
                    {status === "success" && (
                      <motion.span 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-mono text-green-400 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        Transmission successful.
                      </motion.span>
                    )}
                    {status === "error" && (
                      <motion.span 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-mono text-red-400 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        Signal lost. Please try again.
                      </motion.span>
                    )}
                  </div>
                </div>

              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}