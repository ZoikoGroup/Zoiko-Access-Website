import React from "react";
import { ArrowRight } from "lucide-react";

export default function StartAlwaysAvailable() {
  return (
    <div className="relative font-sans text-white px-6 py-16 lg:px-24 lg:py-24 flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#282063] via-[#4B3FB5] to-[#7160D5]">
      {/* Decorative Top Right Half Circle */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#B49CFA]/16 pointer-events-none" />

      {/* Decorative Bottom Left Half Circle */}
      <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-[#B49CFA]/16 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto text-center flex flex-col items-center">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-[1.15]">
          Start with what&apos;s always available.
        </h1>

        {/* Description */}
        <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
          The Accessibility page and Help Center are open to everyone, any time.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="bg-white hover:bg-white/90 text-[#0A2540] text-sm font-bold px-6 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.12)] flex items-center gap-2 transition-all group"
          >
            <span>Accessibility</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#"
            className="hover:bg-white/10 border border-white/30 text-white text-sm font-bold px-6 py-3.5 rounded-xl backdrop-blur-sm transition-all"
          >
            Help Center
          </a>
        </div>
      </div>
    </div>
  );
}
