"use client";

import Image from "next/image";

export default function LocalAvailability() {
  return (
    <section className="w-full bg-gradient-to-br from-[#f2edff] via-[#ebe6fc] to-[#d1c4fa] py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left Column: Text & Info Box */}
          <div>
            {/* Eyebrow */}
            <div className="mb-3 inline-flex items-center gap-2 text-[12px] font-semibold text-[#6d5ae6]">
              <span className="h-0.5 w-3.5 bg-[#6d5ae6]" />
              <span>Local availability</span>
            </div>

            {/* Section Heading */}
            <h2 className="mb-4 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)] leading-tight">
              What you see depends on where you work
            </h2>

            {/* Subtitle */}
            <p className="mb-8 max-w-[500px] text-[14px] sm:text-[15px] leading-relaxed text-slate-600">
              Information shown here describes planned and approved design.
              Availability varies by country and provider. Use the care-location
              menu to preview each state.
            </p>

            {/* Info Card */}
            <div className="max-w-[480px] rounded-2xl border border-white/80 bg-white/95 p-6 shadow-sm backdrop-blur-sm">
              <span className="inline-block rounded bg-[#e0e7ff] px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-[#3730a3] uppercase">
                General education
              </span>
              <h3 className="mt-2.5 mb-1.5 text-[17px] font-bold text-slate-900 [font-family:var(--font-poppins)]">
                No care location selected
              </h3>
              <p className="text-[13px] leading-relaxed text-slate-500">
                You are reading the general design narrative. We do not infer a
                license or live coverage from your location.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[300px] sm:h-[360px] lg:h-[400px] w-full max-w-[520px] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/for-clinicians/fc15.jpg"
                alt="Clinicians reviewing imaging data on workstation screen"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
