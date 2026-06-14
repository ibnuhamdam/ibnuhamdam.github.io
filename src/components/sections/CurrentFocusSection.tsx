import { FadeIn } from "@/components/animations/FadeIn";
import data from "@/content/data.json";

export function CurrentFocusSection() {
  return (
    <section id="focus" className="py-24 px-4 border-t border-border/50">
      <FadeIn>
        <h2 className="text-3xl font-bold tracking-tight mb-4">Current Focus</h2>
        <p className="text-ink-secondary mb-16 max-w-2xl leading-relaxed">
          I don't just build features; I solve structural problems. Here are the missions I am currently pursuing at the intersection of public policy and advanced engineering.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 gap-16">
        {data.currentFocus.map((focus, idx) => (
          <FadeIn key={idx} delay={0.1 * idx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <h3 className="text-xl font-bold text-primary sticky top-24">
                {focus.title}
              </h3>
            </div>
            
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h4 className="text-xs font-mono text-ink-tertiary uppercase tracking-widest mb-3">The Problem</h4>
                <p className="text-ink-secondary leading-relaxed text-lg">
                  {focus.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-ink-tertiary uppercase tracking-widest mb-3">Why It Matters</h4>
                <p className="text-ink-secondary leading-relaxed">
                  {focus.whyItMatters}
                </p>
              </div>

              <div className="bg-surface border border-border p-6 rounded-xl">
                <h4 className="text-xs font-mono text-ink-tertiary uppercase tracking-widest mb-3">What I Am Building</h4>
                <p className="text-primary leading-relaxed mb-4">
                  {focus.whatIAmBuilding}
                </p>
                <div className="pt-4 border-t border-border flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-status-success" />
                  <p className="text-sm font-medium text-primary italic">
                    {focus.impact}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
