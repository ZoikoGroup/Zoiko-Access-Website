import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ForPharmaciesHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0c1448] text-white pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24">
      {/* Background Graphic Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/labs-pharmacies-for-pharmacies/lpfp1.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center opacity-85"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0c1448]/80 via-[#0c1448]/40 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Text content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Breadcrumb pill */}
            <div className="mb-6">
              <span className="inline-block bg-white text-[#1e3a8a] text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                LABS &amp; PHARMACIES / PHARMACY SERVICES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.12] mb-5">
              Understand the
              <br />
              pharmacy pathway
              <br />
              <span className="text-[#a5b4fc]">and its</span>
              <br />
              responsibilities.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-2xl mb-4">
              Explore how accurate pharmacy service information, prescription-related handoffs and locally permitted coordination may work without treating Zoiko Access as a prescriber, pharmacy, inventory owner or dispensing provider.
            </p>

            {/* Disclaimer */}
            <p className="text-xs text-blue-200/75 leading-relaxed max-w-xl mb-8">
              For urgent prescription, dispensing or clinical concerns, contact a local licensed pharmacist, clinician or emergency service.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="#prescription-routing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#6355ec] hover:bg-[#5244dd] text-white font-medium text-xs sm:text-sm transition-all shadow-lg shadow-indigo-950/40"
              >
                <span>Prescription routing</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="#fulfillment"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs sm:text-sm transition-all shadow-md shadow-black/10"
              >
                Fulfillment &amp; availability
              </Link>
            </div>
          </div>

          {/* Right Column: Blister packs image with curved top-left corner & overlay */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[480px]">
              {/* Image Container with Custom Corner Cut */}
              <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[5/4] rounded-tl-[100px] sm:rounded-tl-[130px] lg:rounded-tl-[150px] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl overflow-hidden shadow-2xl border border-white/20 bg-[#091122]">
                <Image
                  src="/labs-pharmacies-for-pharmacies/lpfp2.jpg"
                  alt="Blister packs of colorful prescription pills and capsules"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center"
                />
              </div>

              {/* Floating Prescription states card */}
              <div className="absolute -bottom-6 left-4 right-4 sm:left-auto sm:-left-8 sm:w-[280px] bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 text-slate-800 z-20">
                <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                  <span className="font-bold text-xs text-[#0f172a]">
                    Prescription states
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    Illustrative
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1e40af] shrink-0" />
                      <span className="text-[11px] text-slate-700">Issued by prescriber</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider">
                      DONE
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1e40af] shrink-0" />
                      <span className="text-[11px] text-slate-700">Routed to pharmacy</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider">
                      DONE
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full border-2 border-[#7c3aed] bg-white shrink-0" />
                      <span className="text-[11px] text-slate-700 font-medium">
                        Pharmacist validation
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#7c3aed] tracking-wider">
                      PENDING
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full border-2 border-slate-300 bg-white shrink-0" />
                      <span className="text-[11px] text-slate-500">
                        Supplied or not supplied
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400">
                      —
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
