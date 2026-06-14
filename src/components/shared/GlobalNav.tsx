"use client";

import Link from "next/link";
import { Command } from "lucide-react";
import { siteConfig } from "@/config/site";

export function GlobalNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/40 backdrop-blur-md bg-canvas/60">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 font-mono text-sm font-bold tracking-tight">
          <span className="text-primary">{siteConfig.name}</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-ink-secondary">
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#work" className="hover:text-primary transition-colors">Work</Link>
          <Link href="#focus" className="hover:text-primary transition-colors">Focus On</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="text-xs font-mono text-ink-secondary bg-surface items-center gap-2 border border-border rounded-md px-3 py-1.5 hidden md:flex hover:bg-surface-hover transition-colors">
            <Command className="w-3 h-3" />
            <span>Cmd+K</span>
          </button>
          <a href="#contact" className="text-sm font-medium bg-ink-primary text-canvas px-4 py-1.5 rounded-md hover:bg-white/90 transition-colors">
            Connect
          </a>
        </div>
      </div>
    </header>
  );
}
