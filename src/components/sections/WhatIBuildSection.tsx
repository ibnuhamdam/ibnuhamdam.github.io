import { FadeIn } from "@/components/animations/FadeIn";
import { SpotlightCard } from "@/components/animations/SpotlightCard";

export function WhatIBuildSection() {
  const pillars = [
    {
      title: "Public Sector & Procurement",
      description: "Government software is notoriously slow and fragmented. I restructure complex procurement operations into streamlined applications that civil servants actually want to use. It's about real logistical efficiency.",
    },
    {
      title: "Data Analysis & Web3",
      description: "Data tells a story if you know how to look. I sift through on-chain transactions and traditional databases to map out trends, track whale movements, and optimize financial decision-making.",
    },
    {
      title: "AI Automation",
      description: "LLMs shouldn't just be chatbots. I wire artificial intelligence into practical, daily workflows—like autonomous trading bots that execute predetermined strategies purely based on market rules, zero emotion.",
    }
  ];

  return (
    <section id="about" className="py-24 px-4 border-t border-border/50">
      <FadeIn>
        <h2 className="text-3xl font-bold tracking-tight mb-4">Why My Perspective Defaults to Utility</h2>
        <p className="text-ink-secondary mb-12 max-w-2xl leading-relaxed">
          The public sector teaches you extreme constraints. Web3 teaches you hard math and fast execution. AI gives you the raw tooling. I spend my time merging these disciplines to solve actual friction points.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => (
          <FadeIn key={idx} delay={0.1 * idx}>
            <SpotlightCard className="p-8 h-full">
              <h3 className="text-lg font-bold text-primary mb-3">{pillar.title}</h3>
              <p className="text-sm text-ink-secondary leading-relaxed">{pillar.description}</p>
            </SpotlightCard>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
