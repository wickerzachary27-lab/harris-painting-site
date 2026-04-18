"use client";

import { ArrowRight } from "lucide-react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function HeroCTAs() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
      <button
        onClick={() => scrollToId("contact")}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-terra px-8 py-4 text-base font-bold text-cream shadow-lg hover:bg-terra-dark hover:shadow-xl transition-all w-full sm:w-auto"
      >
        Get a Free Quote
        <ArrowRight
          size={18}
          strokeWidth={2}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
      <button
        onClick={() => scrollToId("gallery")}
        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/80 bg-transparent px-8 py-4 text-base font-bold text-cream hover:bg-cream hover:text-forest transition-colors w-full sm:w-auto"
      >
        See Our Work
      </button>
    </div>
  );
}
