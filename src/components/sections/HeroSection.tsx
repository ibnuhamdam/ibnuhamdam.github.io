import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowRight, NotebookPen } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="pt-24 pb-32 px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 flex flex-col items-start">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center space-x-2 bg-surface border border-border rounded-full px-3 py-1 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-status-success animate-pulse"></span>
            <span className="text-xs font-mono text-ink-secondary tracking-widest uppercase">Currently Focused On: Procurement & Goverment Technology</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary leading-tight mb-6">
            I build technology for the public sector, analyze deep data, and engineer autonomous AI.
          </h1>
        </FadeIn>

        <FadeIn delay={0.3} className="max-w-2xl text-lg md:text-xl text-ink-secondary leading-relaxed mb-10">
          This is my public profile and digital journal. I document my process bridging government procurement systems with modern web engineering, while actively building trading algorithms and exploring the crypto ecosystem.
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#work" className="bg-primary text-canvas px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
            Read My Log <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="bg-transparent border border-border text-primary px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-surface-hover transition-colors">
            <NotebookPen className="w-4 h-4 text-ink-secondary" /> Connect
          </a>
        </FadeIn>
      </div>

      <FadeIn delay={0.5} className="lg:col-span-5 relative group">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
          <Image
            src="/foto/ibnu-hero.PNG"
            alt="Ibnu Hamdam"
            fill
            priority
            className="object-cover transition-all duration-700 ease-in-out scale-110 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 via-transparent to-transparent opacity-60" />
          
          {/* Decorative frame elements */}
          <div className="absolute top-4 left-4 h-4 w-4 border-t-2 border-l-2 border-white/20" />
          <div className="absolute top-4 right-4 h-4 w-4 border-t-2 border-r-2 border-white/20" />
          <div className="absolute bottom-4 left-4 h-4 w-4 border-b-2 border-l-2 border-white/20" />
          <div className="absolute bottom-4 right-4 h-4 w-4 border-b-2 border-r-2 border-white/20" />
          
          <div className="absolute bottom-6 left-6 text-[10px] font-mono text-white/40 tracking-tighter uppercase">
            Builder ID: Ibnu Hamdam // 06.14.2026
          </div>
        </div>
        
        {/* Shadow glow background */}
        <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent blur-2xl -z-10 opacity-30 group-hover:opacity-50 transition-opacity" />
      </FadeIn>
    </section>
  );
}
