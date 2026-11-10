"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ReadinessState {
  code: string;
  title: string;
  description: string;
  isCurrent?: boolean;
  codeColor?: string;
}

const readinessStates: ReadinessState[] = [
  {
    code: "P0",
    title: "Public education",
    description: "Explains how workflows may work. Nothing is active.",
    isCurrent: true,
  },
  {
    code: "P1",
    title: "Verified pilot",
    description: "Only with a locally verified partner and role.",
    codeColor: "text-[#7C3AED]",
  },
  {
    code: "P2",
    title: "Activated workflow",
    description: "After capability, partner and role gates are passed.",
    codeColor: "text-[#7C3AED]",
  },
  {
    code: "PX",
    title: "Suspended or degraded",
    description: "Falls back safely to information only.",
    codeColor: "text-[#C2410C]",
  },
];

export default function MarketProductReadiness() {
  const [selectedMarket, setSelectedMarket] = useState("");

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#EEE9FD] to-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="font-mono text-[12px] font-semibold tracking-wider text-[#7C3AED] uppercase">
              — MARKET &amp; PRODUCT READINESS
            </span>
          </div>

          <h2 className="mt-2 text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            Education today. Workflows only after approval.
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            Four readiness states. This page is in P0: public education only.
          </p>
        </div>

        {/* 4 Readiness Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {readinessStates.map((state, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
                state.isCurrent
                  ? "bg-[#16245A] text-white shadow-xl"
                  : "border border-[#E2E8F0] bg-white text-[#0E1646] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#CBD5E1]"
              }`}
            >
              <div>
                {/* Header Row: Code + Optional Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-[32px] font-bold leading-none ${
                      state.isCurrent ? "text-white" : state.codeColor
                    }`}
                  >
                    {state.code}
                  </span>

                  {state.isCurrent && (
                    <span className="rounded-full bg-[#FEF3C7] px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider text-[#92400E] uppercase">
                      CURRENT STATE
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3
                  className={`mt-6 text-[18px] font-bold ${
                    state.isCurrent ? "text-white" : "text-[#0E1646]"
                  }`}
                >
                  {state.title}
                </h3>
                <p
                  className={`mt-2 text-[13px] leading-[1.6] ${
                    state.isCurrent ? "text-slate-300" : "text-[#64748B]"
                  }`}
                >
                  {state.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Market Selector Bar */}
        <div className="mt-8 flex flex-col items-start gap-4 rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] sm:flex-row sm:items-center sm:p-6">
          <span className="text-[15px] font-bold text-[#0E1646] shrink-0">
            Check a market
          </span>

          <div className="relative w-full max-w-xs">
            <select
              value={selectedMarket}
              onChange={(e) => setSelectedMarket(e.target.value)}
              className="w-full appearance-none rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 font-sans text-[14px] text-[#475569] focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED]"
            >
              <option value="">Select a market</option>
              <option value="us-east">United States (East)</option>
              <option value="us-west">United States (West)</option>
              <option value="eu-central">European Union</option>
              <option value="uk">United Kingdom</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />
          </div>

          <span className="font-mono text-[13px] text-[#64748B]">
            All markets are in P0 (public education) today.
          </span>
        </div>
      </div>
    </section>
  );
}
