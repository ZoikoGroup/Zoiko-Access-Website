import React from "react";

export default function HowControlCouldLook() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Top Border / Header Divider */}
        <div className="w-full border-t border-[#E6EBF1] pt-8 mb-4">
          {/* Subtitle / Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-wider text-[#635BFF] uppercase">
              IN PRACTICE
            </span>
            <span className="w-8 h-[2px] bg-[#635BFF]/30"></span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight mb-2">
            How control could look.
          </h1>

          {/* Subtitle / Caption */}
          <p className="text-[#697386] text-sm md:text-base mb-10">
            Illustrative scenarios — no real people or records.
          </p>
        </div>

        {/* Bento / Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large Left Image Card */}
          <div className="lg:col-span-6 h-[380px] lg:h-[500px] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] bg-[#02125F]">
            <img
              src="/our/7.png"
              alt="Family walking on the beach at sunset"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column Layout (2x2 sub-grid) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Top Left: Dark Blue Text Box */}
            <div className="bg-[#16245A] rounded-2xl p-8 flex flex-col justify-center min-h-[230px] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <h2 className="text-xl font-bold text-white mb-3 leading-snug">
                <a href="#" className="hover:underline">
                  A parent helps an adult child
                </a>
              </h2>
              <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                Only with that person&apos;s verified permission.
              </p>
            </div>

            {/* Top Right: Doctor Image Card */}
            <div className="h-[230px] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] bg-[#02125F]">
              <img
                src="/our/8.png"
                alt="Healthcare provider with arms crossed"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Left: Patient & Caregiver Image Card */}
            <div className="h-[230px] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] bg-[#02125F]">
              <img
                src="/our/9.png"
                alt="Caregiver assisting senior patient"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Right: Purple Text Box */}
            <div className="bg-[#6A4FE0] rounded-2xl p-8 flex flex-col justify-center min-h-[230px] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <h2 className="text-xl font-bold text-white mb-3 leading-snug">
                <a href="#" className="hover:underline">
                  A caregiver&apos;s access ends
                </a>
              </h2>
              <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                You revoke it, and the change is recorded.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
