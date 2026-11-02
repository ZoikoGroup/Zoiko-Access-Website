import React from "react";
import { ArrowRight } from "lucide-react";

export default function YourInformationHero() {
  return (
    <div className="relative font-sans text-white px-6 py-16 lg:px-24 lg:py-28 flex items-center justify-center overflow-hidden bg-[#02125F]">
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/acc/bg.png"
          alt="Background pattern"
          className="w-full h-full object-cover"
        />
        {/* Semi-transparent blue gradient/overlay matching the theme */}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Subtitle / Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-white/70"></span>
            <span className="text-xs font-bold tracking-wider text-white/80 uppercase">
              PATIENTS · YOUR INFORMATION
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.08]">
            Your information, your{" "}
            <span className="text-[#B383FF]">control.</span>
          </h1>

          {/* Description */}
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-4 max-w-xl">
            Learn who controls your health information, which permissions
            matter, and why reading a page never gives anyone access to your
            medical records — including us.
          </p>

          {/* Disclaimer Note */}
          <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-8">
            No personal or health information is requested on this page.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="bg-[#B383FF] hover:bg-[#A26DFF] text-white text-sm font-bold px-6 py-4 rounded-xl shadow-[0_4px_20px_rgba(179,131,255,0.3)] flex items-center gap-2 transition-all group"
            >
              <span>Who controls what</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#"
              className="hover:bg-white/10 border border-white text-white text-sm font-bold px-6 py-4 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-all"
            >
              Privacy &amp; permissions
            </a>
          </div>
        </div>

        {/* Right Column Circular Images Showcase */}
        <div className="lg:col-span-5 w-full flex justify-center items-center py-6">
          <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[440px] md:h-[440px]">
            {/* Primary Main Circle Image */}
            <div className="w-full h-full rounded-full overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.3)] bg-[#02125F]">
              <img
                src="/our/1.png"
                alt="Older man reading a newspaper"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Overlay Smaller Circle Image (positioned at bottom-left, extending outside) */}
            <div className="absolute -bottom-4 -left-6 w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.4)] bg-[#02125F] z-20">
              <img
                src="/our/2.png"
                alt="Person reading paper outdoors"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
