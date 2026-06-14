"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SpotlightCard({ children, className, ...props }: SpotlightCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();

  // Calculate cursor position relative to the element
  let mouseX = 0;
  let mouseY = 0;
  if (containerRef.current) {
    const rect = containerRef.current.getBoundingClientRect();
    mouseX = mousePosition.x - rect.left;
    mouseY = mousePosition.y - rect.top;
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative rounded-xl border border-border bg-surface overflow-hidden group",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}
