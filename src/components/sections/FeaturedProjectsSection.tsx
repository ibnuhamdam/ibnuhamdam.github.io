import { FadeIn } from "@/components/animations/FadeIn";
import { SpotlightCard } from "@/components/animations/SpotlightCard";
import data from "@/content/data.json";
import Image from "next/image";

export function FeaturedProjectsSection() {
  const projects = data.projects;

  return (
    <section id="work" className="py-24 px-4 border-t border-border/50">
      <FadeIn>
        <h2 className="text-3xl font-bold tracking-tight mb-4">The Builder's Log</h2>
        <p className="text-ink-secondary mb-12 max-w-2xl leading-relaxed">
          I document what I build. Each entry represents a distinct friction point I encountered in the real world—from civil service logistics to emotional trading errors—and how I wrote code to fix it.
        </p>
      </FadeIn>

      <div className="flex flex-col gap-12">
        {projects.map((project: any, idx) => (
          <FadeIn key={project.id} delay={0.1 * idx}>
            <SpotlightCard className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6 flex-wrap">
                    {project.tags.map((tag: string) => (
                      <span key={tag} className="bg-canvas border border-border text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full font-mono text-ink-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {project.title}
                  </h3>
                  <p className="text-ink-secondary mb-6 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="text-xs font-mono text-primary flex items-center gap-3">
                    <span className="h-px w-6 bg-border" />
                    <span className="text-ink-tertiary uppercase tracking-tighter">Impact:</span> 
                    {project.metrics}
                  </div>
                </div>

                <div className={`lg:col-span-5 relative min-h-[300px] bg-canvas border-l border-border transition-all duration-500 ${!project.image ? 'hidden lg:flex items-center justify-center bg-surface/50' : ''}`}>
                  {project.image ? (
                    <div className="relative w-full h-full p-4 group">
                      <div className="relative w-full h-full rounded-lg overflow-hidden border border-border shadow-xl">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-canvas/40 to-transparent pointer-events-none" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 opacity-20">
                      <div className="h-12 w-12 border-2 border-dashed border-white/50 rounded-lg" />
                      <span className="text-[10px] font-mono uppercase tracking-widest">Documentation Pending</span>
                    </div>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
