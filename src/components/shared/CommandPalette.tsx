"use client";

import { useEffect, useState } from "react";

// For a premium portfolio, a real cmd+k component is highly complex to build from scratch 
// but we will provide a stylized placeholder for now.
export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-canvas/80 backdrop-blur-sm flex items-start justify-center pt-[20vh]">
      <div className="w-full max-w-lg bg-surface border border-border shadow-2xl rounded-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="p-4 border-b border-border flex items-center">
          <span className="text-ink-secondary mr-2">{'>'}</span>
          <input 
            autoFocus
            type="text" 
            placeholder="Type a command or search..." 
            className="w-full bg-transparent outline-none text-primary placeholder:text-ink-tertiary"
            onChange={(e) => {}}
          />
        </div>
        <div className="p-2 py-4 flex flex-col gap-1">
          <div className="px-3 text-xs font-mono text-ink-tertiary mb-2 uppercase">Suggestions</div>
          <button onClick={() => setOpen(false)} className="w-full text-left px-3 py-2 text-sm text-ink-secondary hover:bg-surface-hover hover:text-primary rounded-md transition-colors flex justify-between">
            <span>Send an Email</span>
            <span className="font-mono text-xs text-ink-tertiary">E</span>
          </button>
          <button onClick={() => setOpen(false)} className="w-full text-left px-3 py-2 text-sm text-ink-secondary hover:bg-surface-hover hover:text-primary rounded-md transition-colors flex justify-between">
            <span>Download Resume</span>
            <span className="font-mono text-xs text-ink-tertiary">R</span>
          </button>
          <button onClick={() => {setOpen(false); window.open('https://github.com/ibnuhamdam', '_blank');}} className="w-full text-left px-3 py-2 text-sm text-ink-secondary hover:bg-surface-hover hover:text-primary rounded-md transition-colors flex justify-between">
            <span>View GitHub</span>
            <span className="font-mono text-xs text-ink-tertiary">G</span>
          </button>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10" onClick={() => setOpen(false)} />
    </div>
  );
}
