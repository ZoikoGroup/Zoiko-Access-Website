import React from "react";
import Link from "next/link";

const ctaLinks = [
  {
    title: "Prescription routing",
    href: "/labs-pharmacies#prescription-routing",
  },
  {
    title: "Fulfillment & availability",
    href: "/labs-pharmacies#fulfillment",
  },
  {
    title: "Partner connectivity",
    href: "/partners-become-a-partner",
  },
];

export const KeepLearningCta: React.FC = () => {
  return (
    <section className="w-full bg-[#fbfbff] py-16 md:py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0c1448] via-[#102070] to-[#45107e] p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Ambient lighting */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
                  Keep learning first.
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-purple-200/90 leading-relaxed max-w-lg mb-8">
                  Explore the related topics. No sign-up, order or payment is offered here.
                </p>
              </div>

              <p className="text-[11px] sm:text-xs text-purple-300/70 leading-relaxed">
                Educational content. Not a prescription, dispensing, clinical or emergency service.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              {ctaLinks.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="w-full bg-white/10 hover:bg-white/20 border border-white/15 px-6 py-4 rounded-2xl text-xs sm:text-sm font-semibold flex items-center justify-between text-white backdrop-blur-md transition-all group shadow-sm hover:shadow-md"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    {item.title}
                  </span>
                  <span
                    className="text-purple-300 group-hover:text-white group-hover:translate-x-1 transition-all"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
