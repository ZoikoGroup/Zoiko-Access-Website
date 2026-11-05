import React from "react";
import { ChevronDown } from "lucide-react";

export default function MarketServiceActivation() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6F9FC] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Side: Overlapping Venn Diagram Circles */}
          <div className="relative flex justify-center lg:col-span-6">
            <div className="relative h-[340px] w-[380px] sm:h-[400px] sm:w-[440px]">
              {/* Circle 1: Jurisdiction (Top Left) */}
              <div className="absolute left-0 top-0 h-[240px] w-[240px] rounded-full bg-[#C4B5FD]/40 mix-blend-multiply transition-transform sm:h-[280px] sm:w-[280px] flex items-start p-10">
                <span className="text-[15px] font-bold tracking-tight text-[#1E1B4B]">
                  Jurisdiction
                </span>
              </div>

              {/* Circle 2: Feature (Top Right) */}
              <div className="absolute right-0 top-0 h-[240px] w-[240px] rounded-full bg-[#A5B4FC]/40 mix-blend-multiply transition-transform sm:h-[280px] sm:w-[280px] flex items-start justify-end p-10">
                <span className="text-[15px] font-bold tracking-tight text-[#1E1B4B]">
                  Feature
                </span>
              </div>

              {/* Circle 3: Contract (Bottom Center) */}
              <div className="absolute bottom-0 left-1/2 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-[#94A3B8]/30 mix-blend-multiply transition-transform sm:h-[280px] sm:w-[280px] flex items-end justify-center pb-8">
                <span className="text-[15px] font-bold tracking-tight text-[#1E1B4B]">
                  Contract
                </span>
              </div>

              {/* Centered Overlap Badge: "Active only here" */}
              <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white px-4 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.08)] backdrop-blur-md">
                <span className="text-[13px] font-semibold tracking-tight text-[#1E1B4B]">
                  Active only here
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Content & Dropdown */}
          <div className="lg:col-span-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
                Market &amp; service activation
              </span>
            </div>

            <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
              Jurisdiction &times; feature &times; contract.
            </h2>

            <p className="mt-4 max-w-xl text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
              A capability is live only where a released jurisdiction, an
              approved feature and a signed contract all overlap. Geographic
              release states are never assumed.
            </p>

            {/* Check a Market Select Widget */}
            <div className="mt-8 max-w-md">
              <label className="block text-[13px] font-bold tracking-wide text-[#1E1B4B]">
                Check a market
              </label>

              <div className="relative mt-2">
                <div className="flex w-full items-center justify-between rounded-xl border border-[#CBD5E1] bg-[#E2E8F0]/50 px-4 py-3.5 text-[15px] font-medium text-[#1E1B4B] shadow-sm transition-colors hover:border-[#94A3B8]">
                  <span>Choose a market</span>
                  <ChevronDown className="h-4 w-4 text-[#475569]" />
                </div>
              </div>

              <p className="mt-2 text-[12px] font-medium text-[#64748B]">
                No market selected. No release state is shown.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
