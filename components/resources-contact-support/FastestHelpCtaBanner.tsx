import React from "react";
import Image from "next/image";
import Link from "next/link";

export const FastestHelpCtaBanner: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#10184d] py-16 md:py-20 text-white text-center">
      {/* Background Photo & Indigo Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/resources-contact-support/rcs20.jpg"
          alt="Support workstation background"
          fill
          className="object-cover object-center grayscale opacity-20"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0e1548]/95 via-[#1a2273]/90 to-[#5346d8]/90"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
          The fastest help is often a click away
        </h2>
        <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed mb-7">
          Start with the Help Center. In an emergency, contact local emergency services.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/help-center"
            className="bg-white hover:bg-slate-100 text-[#0f172a] font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl inline-flex items-center gap-2 shadow-md transition-all"
          >
            <span>Visit the Help Center</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/safety-escalation"
            className="border border-white/35 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all"
          >
            Safety and emergencies
          </Link>
        </div>
      </div>
    </section>
  );
};
