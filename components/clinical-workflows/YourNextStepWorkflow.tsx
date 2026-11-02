import React from "react";
import { ArrowRight } from "lucide-react";

export default function YourNextStepWorkflow() {
  return (
    <div className="relative font-sans text-white px-6 py-16 lg:px-24 lg:py-28 flex items-center justify-center overflow-hidden bg-[#02125F]">
      {/* Background Image with Blue Tint Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cor/14.png"
          alt="Hospital exterior background"
          className="w-full h-full object-cover"
        />
        {/* Semi-transparent blue gradient/overlay matching the theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B2FB5CC] to-[#02125FE5]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto">
        <div className="">
          {/* Subtitle / Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-white/70"></span>
            <span className="text-xs font-bold tracking-wider text-white/80 uppercase">
              YOUR NEXT STEP
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-[36px] max-w-xl lg:text-[40px] font-bold text-white tracking-tight mb-6 leading-[1.1]">
            See how each workflow is designed.
          </h1>

          {/* Description */}
          <p className="text-white/90 text-base md:text-lg max-w-xl leading-relaxed mb-8">
            Start with tasks and worklists, then results and secure communications.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#"
              className="bg-white hover:bg-white/90 text-[#0A2540] text-sm font-bold px-6 py-4 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center gap-2 transition-all group"
            >
              <span>Task &amp; worklist experience</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#"
              className="hover:bg-[#1A1F6E]/80 border border-white text-white text-sm font-bold px-6 py-4 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all"
            >
              Results &amp; review handoffs
            </a>

            <a
              href="#"
              className="hover:bg-[#1A1F6E]/80 border border-white text-white text-sm font-bold px-6 py-4 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all"
            >
              Secure communications
            </a>
          </div>

          {/* Disclaimer Note */}
          <p className="text-white/60 text-xs md:text-sm leading-relaxed">
            No live worklist, results or messaging service is offered on this page.
          </p>
        </div>
      </div>
    </div>
  );
}