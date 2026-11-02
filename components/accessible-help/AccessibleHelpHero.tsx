import React from "react";
import { ArrowRight } from "lucide-react";

export default function AccessibleHelpHero() {
  return (
    <div className="relative font-sans text-white px-6 py-16 lg:px-24 lg:py-28 flex items-center justify-center overflow-hidden bg-[#02125F]">
      {/* Background Image with Blue Tint Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/acc/bg.png"
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
        {/* Semi-transparent blue gradient/overlay matching the theme */}
        <div className="absolute inset-0 bg-[#02125F]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#02125F]/95 via-[#02125F]/75 to-transparent"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column Content */}
        <div className="flex flex-col justify-center">
          {/* Subtitle / Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-white/70"></span>
            <span className="text-xs font-bold tracking-wider text-white/80 uppercase">
              PATIENTS / ACCESSIBLE HELP
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-[64px] font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
            Help that works <br /> <span className="text-[#B383FF]"> the way you do.</span>
          </h1>

          {/* Description */}
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4 max-w-xl">
            Find accessibility guidance, self-service help and the right way to
            get support. Staffed contact appears only where an approved support
            team is actually available.
          </p>

          {/* Disclaimer Note */}
          <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-8">
            No sign-in or personal details needed to read this page.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="bg-[#B383FF] hover:bg-[#A26DFF] text-white text-sm font-bold px-6 py-4 rounded-xl shadow-[0_4px_20px_rgba(179,131,255,0.3)] flex items-center gap-2 transition-all group"
            >
              <span>Find the right help</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#"
              className="hover:bg-white/10 border border-white text-white text-sm font-bold px-6 py-4 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all"
            >
              Accessibility statement
            </a>
          </div>
        </div>

        {/* Right Column Image */}
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full max-w-lg lg:max-w-none h-[420px] lg:h-[500px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2)] bg-[#02125F] border border-white/10">
            <img
              src="/acc/1.png"
              alt="Caregiver helping an elderly patient"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
