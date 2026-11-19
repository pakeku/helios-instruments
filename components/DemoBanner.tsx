"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import SocialLinks from "./SocialLinks";

const KEY = "helios-demo-banner-closed";

export default function DemoBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      setOpen(localStorage.getItem(KEY) !== "1");
    } catch {
      setOpen(true);
    }
  }, []);

  const close = () => {
    setOpen(false);
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* storage unavailable: banner just returns next visit */
    }
  };

  if (!open) return null;

  return (
    <div
      role="region"
      aria-label="Demo notice"
      className="relative border-b border-gold-500/30 bg-gradient-to-r from-navy-950 via-navy-800 to-navy-950 text-sm text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1 py-1.5 pl-4 pr-12">
        <p className="py-1 text-center text-white/90">This is a demo website created for a case study.</p>
        <SocialLinks size={16} />
      </div>
      <button
        type="button"
        onClick={close}
        aria-label="Dismiss demo banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        <X size={16} aria-hidden />
      </button>
    </div>
  );
}
