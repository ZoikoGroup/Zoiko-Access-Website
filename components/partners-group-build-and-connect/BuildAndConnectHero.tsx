import React from "react";
import Image from "next/image";
import Link from "next/link";

export const BuildAndConnectHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#090d2e] via-[#131760] to-[#4c1d95] text-white pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24">
      {/* Ambient Lighting */}
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-32 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="mb-5">
              <span className="inline-block border border-white/20 bg-white/5 text-purple-200/90 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-md">
                PARTNERS &amp; DEVELOPERS / BUILD &amp; CONNECT
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.12] mb-5">
              Build &amp; <span className="text-[#8da8ff]">Connect</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300/95 leading-relaxed max-w-xl mb-8">
              Standards-oriented connection principles, contract boundaries and the evidence required before any technical integration can be activated.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="/partners-developer-documentation"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#6d4aff] hover:bg-[#5a36ee] text-white font-medium text-xs sm:text-sm transition-all shadow-lg shadow-indigo-950/40"
              >
                <span>Explore API &amp; interoperability overview</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/partners-developer-documentation#sdks-events"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/25 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm transition-all"
              >
                Review SDKs, webhooks &amp; events
              </Link>
            </div>
          </div>

          {/* Right Column: Framed Image + Connector Diagram */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[540px] bg-white/5 backdrop-blur-md border border-white/15 rounded-3xl p-4 sm:p-5 shadow-2xl">
              {/* Top Photo */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-[#0d1338]">
                <Image
                  src="/partners-group-build-and-connect/pgbac1.png"
                  alt="Colleagues reviewing technical documentation on a tablet"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="object-cover object-center"
                />
              </div>

              {/* Architecture Flow Row */}
              <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 sm:gap-3">
                <div className="bg-white rounded-xl py-2.5 px-3 text-center shadow-sm">
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                    SOURCE
                  </span>
                  <span className="block text-[11px] sm:text-xs font-bold text-[#0f172a]">
                    Source system
                  </span>
                </div>

                <span className="text-purple-200/70 font-bold text-xs select-none">
                  →
                </span>

                <div className="bg-gradient-to-r from-[#5b4ce6] to-[#6d4aff] rounded-xl py-2.5 px-3 text-center shadow-md border border-purple-400/30">
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-purple-200 mb-0.5">
                    APPROVED
                  </span>
                  <span className="block text-[11px] sm:text-xs font-bold text-white">
                    Connector
                  </span>
                </div>

                <span className="text-purple-200/70 font-bold text-xs select-none">
                  →
                </span>

                <div className="bg-white rounded-xl py-2.5 px-3 text-center shadow-sm">
                  <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                    RECEIVER
                  </span>
                  <span className="block text-[11px] sm:text-xs font-bold text-[#0f172a]">
                    Institution
                  </span>
                </div>
              </div>

              {/* Status Sequence Note */}
              <p className="text-[10px] sm:text-[11px] font-mono text-purple-200/80 text-center mt-3.5 tracking-tight">
                sent &nbsp;≠&nbsp; acknowledged &nbsp;≠&nbsp; accepted &nbsp;≠&nbsp; reviewed &nbsp;≠&nbsp; completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
