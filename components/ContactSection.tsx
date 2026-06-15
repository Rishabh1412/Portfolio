"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal"; // Import your Reveal wrapper

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
        (e.target as HTMLFormElement).reset(); // Clear the form
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      
      // Clear the status message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000); 
    }
  };

  return (
    <section id="contact" className="w-full bg-background pt-40 pb-12 flex justify-center">
      <div className="w-full px-4 md:px-12">
        
        {/* Header - Smooth reveal */}
        <Reveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-12">
            Contact Me
          </h2>
        </Reveal>

        {/* Form - Cascades in right after the header */}
        <Reveal delay={0.2}>
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            {/* Top Row: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter Your Name"
                  className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter Your Email"
                  className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Message..."
                className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
              />
            </div>

            {/* Footer: Button & Status Messages */}
            <div className="flex items-center gap-4 mt-2">
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending <Loader2 size={16} className="animate-spin" /></>
                ) : (
                  <>Submit <Send size={16} /></>
                )}
              </Button>
              
              {/* Kept motion here just for the quick pop-in effect of the status messages */}
              {status === "success" && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm text-green-400"
                >
                  Message sent successfully!
                </motion.span>
              )}
              {status === "error" && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm text-red-400"
                >
                  Something went wrong. Please try again.
                </motion.span>
              )}
            </div>
          </form>
        </Reveal>

      </div>
    </section>
  );
}