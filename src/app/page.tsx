"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIBuildSection } from "@/components/sections/WhatIBuildSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { CurrentFocusSection } from "@/components/sections/CurrentFocusSection";
import { TerminalIdentity } from "@/components/sections/TerminalIdentity";
import { FadeIn } from "@/components/animations/FadeIn";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatIBuildSection />
      <FeaturedProjectsSection />
      <CurrentFocusSection />
      <TerminalIdentity />

      <footer id="contact" className="py-24 border-t border-border/50 px-4">
         <FadeIn>
            <div className="bg-surface rounded-xl border border-border p-8 mb-20 max-w-2xl mx-auto text-center">
               <h2 className="text-2xl font-bold mb-4">Start a Conversation</h2>
               <p className="text-ink-secondary mb-8 leading-relaxed">
                 Whether you want to discuss public sector procurement operations, data analytics workflows, or the friction of building autonomous AI agents—my inbox is open.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <a href="mailto:contact@ibnuhamdam.dev" className="bg-primary text-canvas px-6 py-2 rounded-md font-medium hover:bg-white/90 transition-colors">
                   Email Ibnu
                 </a>
                 <button onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))} className="bg-transparent border border-border text-primary px-6 py-2 rounded-md font-medium hover:bg-surface-hover transition-colors inline-block">
                   Open Command Center
                 </button>
               </div>
            </div>
            
            <div className="flex justify-between items-center pt-8 border-t border-border text-xs text-ink-tertiary font-mono">
              <p>Ibnu Hamdam's Operating System.</p>
              <p>Journaling the process.</p>
            </div>
         </FadeIn>
      </footer>
    </>
  );
}
