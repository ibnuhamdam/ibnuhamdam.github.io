"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { useEffect, useState } from "react";

export function TerminalIdentity() {
  const [text, setText] = useState("");
  const fullText = "> whoami";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 px-4">
      <FadeIn>
        <div className="max-w-2xl mx-auto bg-surface border border-border rounded-xl overflow-hidden font-mono shadow-2xl">
          <div className="bg-border/50 px-4 py-2 flex items-center gap-2 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
            </div>
            <div className="text-[10px] text-ink-tertiary ml-2 uppercase tracking-widest">Digital-ID // Terminal</div>
          </div>
          
          <div className="p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-status-success font-bold">{text}</span>
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="w-2 h-5 bg-status-success"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="space-y-1"
            >
              <div className="text-xl md:text-2xl font-bold text-primary">Ibnu Hamdam</div>
              <div className="text-status-success/80 text-sm md:text-base">
                Software Engineer<br />
                AI Builder<br />
                Web3 Developer
              </div>
            </motion.div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
