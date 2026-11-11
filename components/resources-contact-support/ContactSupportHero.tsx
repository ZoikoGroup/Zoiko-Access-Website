import React from "react";
import Image from "next/image";
import Link from "next/link";

const supportChannels = [
  { name: "Help Center", status: "Available", dotColor: "bg-emerald-500" },
  { name: "FAQ", status: "Available", dotColor: "bg-emerald-500" },
  {
    name: "Support request",
    status: "Not active yet",
    dotColor: "bg-amber-400",
  },
  { name: "Chat & phone", status: "Not offered", dotColor: "bg-slate-300" },
];

export const ContactSupportHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0e1548] via-[#17216b] to-[#2e389e] text-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-0 lg:pb-0">
      {/* Subtle Topographic / Decorative Rings */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full border border-white/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-12 -left-12 h-[320px] w-[320px] rounded-full border border-white/5"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[440px] lg:min-h-[480px]">
          {/* Left Column */}
          <div className="lg:col-span-6 px-4 sm:px-6 lg:px-8 py-6 lg:py-24 flex flex-col justify-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-purple-300/70" />
              <span className="text-purple-200/80 text-[11px] font-semibold tracking-wider uppercase">
                RESOURCES / SUPPORT
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.1] mb-4">
              Contact <span className="text-[#8ba8ff]">support</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed max-w-lg mb-8">
              Find guidance for Zoiko Access account, accessibility and service-navigation questions. Staffed assistance appears only where an approved support channel is available.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/help-center"
                className="bg-white hover:bg-slate-100 text-[#0f172a] font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl inline-flex items-center gap-2 shadow-md transition-all"
              >
                <span>Visit the Help Center</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/resources-frequently-asked-questions"
                className="border border-white/25 bg-white/5 hover:bg-white/15 text-white font-medium text-xs sm:text-sm px-5 py-3 rounded-xl transition-all"
              >
                Frequently asked questions
              </Link>
            </div>
          </div>

          {/* Right Column: Curved Monochrome Photo + Support Channels Card */}
          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[360px] lg:min-h-full px-4 sm:px-6 lg:px-0 pb-4 lg:pb-0">
            <div className="relative w-full h-full min-h-[300px] lg:min-h-[480px] rounded-2xl lg:rounded-none lg:rounded-tl-[260px] overflow-hidden shadow-2xl bg-[#0b1033]">
              <Image
                src="/resources-contact-support/rcs1.jpg"
                alt="Support team member at laptop"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale contrast-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#090d2e]/60 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Floating Support Channels Card */}
              <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 bg-white text-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100 w-[235px] sm:w-[255px] z-20">
                <h2 className="font-bold text-xs text-[#0f172a] mb-3">
                  Support channels
                </h2>
                <div className="space-y-2">
                  {supportChannels.map((ch) => (
                    <div
                      key={ch.name}
                      className="flex items-center justify-between text-[11px]"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${ch.dotColor} shrink-0`}
                        />
                        <span className="font-semibold text-[#0f172a]">
                          {ch.name}
                        </span>
                      </div>
                      <span className="text-slate-400">{ch.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
