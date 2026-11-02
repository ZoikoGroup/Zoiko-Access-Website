import React from "react";
import { ArrowRight } from "lucide-react";

export default function YourNextStep() {
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
        <div className="absolute inset-0 bg-[#02125F]/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#02125F]/95 via-[#02125F]/75 to-transparent"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto">
        <div className="max-w-xl">
          {/* Subtitle / Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-white/70"></span>
            <span className="text-xs font-bold tracking-wider text-white/80 uppercase">
              YOUR NEXT STEP
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-[36px] lg:text-[40px] font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Start with how coordination really works.
          </h1>

          {/* Description */}
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4">
            Read about clinical coordination first, then learn where clinical
            responsibility sits.
          </p>

          {/* Disclaimer Note */}
          <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-10">
            No clinical workspace, patient data or live referral service is
            offered on this page.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="bg-white hover:bg-white/90 text-[#0A2540] text-sm font-bold px-6 py-4 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center gap-2 transition-all group"
            >
              <span>Explore referral coordination</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#"
              className="hover:bg-[#1A1F6E]/80 border border-white/20 text-white text-sm font-bold px-6 py-4 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all"
            >
              Care transitions &amp; follow-up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
