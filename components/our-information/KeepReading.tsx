import React from "react";
import { ArrowRight } from "lucide-react";

interface NavigationLink {
  title: string;
  href: string;
}

const navLinks: NavigationLink[] = [
  { title: "Privacy & permissions", href: "#" },
  { title: "Health information access", href: "#" },
  { title: "Accessible help", href: "#" },
];

export default function KeepReading() {
  return (
    <div className="relative font-sans text-white px-6 py-16 lg:px-24 lg:py-24 flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#282063] via-[#4B3FB5] to-[#7160D5]">
      {/* Decorative Top Right Half Circle */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#B49CFA]/16 pointer-events-none" />

      {/* Decorative Bottom Left Half Circle */}
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#B49CFA]/16 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column Content */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-[1.15]">
            Keep reading.
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-md">
            Go deeper into privacy, health information access and accessible
            help.
          </p>
        </div>

        {/* Right Column Links List */}
        <div className="lg:col-span-6 flex flex-col divide-y divide-white/20">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="py-6 flex items-center justify-between text-lg font-bold text-white hover:text-white/80 transition-colors group"
            >
              <span className="hover:underline">{link.title}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-white/90" />
            </a>
          ))}
          {/* Bottom border line matching design */}
          <div className="w-full h-[1px] bg-white/20" />
        </div>
      </div>
    </div>
  );
}
