"use client";

import React, { useState } from "react";
import Image from "next/image";

interface RoleItem {
  num: string;
  title: string;
  subtitle: string;
  cardTitle: string;
  quote: string;
  safeNextStep: string;
}

const roles: RoleItem[] = [
  {
    num: "01",
    title: "Technical",
    subtitle: "Healthcare technology vendors · developers / architects",
    cardTitle: "Healthcare technology vendors · developers / architects",
    quote:
      "\"What would a permitted integration require? Are API, webhook, SDK or docs public and supported?\"",
    safeNextStep:
      "Review technology and architecture information; view factual published material only.",
  },
  {
    num: "02",
    title: "Institutional",
    subtitle: "Institutional CIO / IT leads · partnership decision-makers",
    cardTitle: "Institutional CIO / IT leads · partnership decision-makers",
    quote:
      "\"Can this connect to our systems in our market? How can we begin a legitimate evaluation?\"",
    safeNextStep:
      "Review governance boundaries, market eligibility and source-system ownership before any formal evaluation.",
  },
  {
    num: "03",
    title: "Privacy & compliance",
    subtitle: "Privacy and security reviewers",
    cardTitle: "Privacy and security reviewers",
    quote: "\"Who approves data access and monitors incidents?\"",
    safeNextStep:
      "Inspect scope restrictions, lawful-basis rules, audit trails and security evidence gates.",
  },
  {
    num: "04",
    title: "Operational",
    subtitle: "System integrators",
    cardTitle: "System integrators",
    quote: "\"Who authorizes the connection and owns exceptions?\"",
    safeNextStep:
      "Review implementation responsibilities, error-handling lifecycles and clinical escalation ownership.",
  },
];

export const PickYourRoleSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const activeRole = roles[selectedIdx];

  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="inline-block bg-[#f3f0ff] text-[#6366f1] text-xs font-semibold px-3 py-1 rounded-full mb-3">
            01 · Who this is for
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Pick your role,{" "}
            <span className="bg-[#ede9fe] px-1.5 py-0.5 rounded-md">
              see your safe next step
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Choosing a role never grants permissions or unlocks records.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: 4 Role Buttons */}
          <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
            {roles.map((role, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <button
                  key={role.num}
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full text-left rounded-2xl p-4 sm:p-5 border transition-all flex items-center gap-4 ${
                    isSelected
                      ? "bg-white border-[#6d4aff] ring-1 ring-[#6d4aff] shadow-sm"
                      : "bg-white border-slate-200/80 hover:border-purple-200"
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? "bg-[#6d4aff] text-white"
                        : "bg-[#f1effd] text-[#6366f1]"
                    }`}
                  >
                    {role.num}
                  </span>
                  <div>
                    <span className="block font-bold text-sm text-[#0f172a]">
                      {role.title}
                    </span>
                    <span className="block text-[11px] sm:text-xs text-slate-500 mt-0.5">
                      {role.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Card with Background Image */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[300px] sm:min-h-[340px] rounded-2xl overflow-hidden shadow-xl bg-[#0d1438] p-6 sm:p-8 flex flex-col justify-end text-white">
              <Image
                src="/partners-group-partner-onboarding/pgpo2.jpg"
                alt="Technical engineers inspecting server infrastructure"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#080d2b]/95 via-[#0b1340]/75 to-[#0b1340]/30 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <h3 className="font-bold text-lg sm:text-xl text-white mb-2.5 leading-snug">
                  {activeRole.cardTitle}
                </h3>
                <p className="text-xs sm:text-sm italic text-purple-100/90 leading-relaxed mb-4">
                  {activeRole.quote}
                </p>
                <div className="border-t border-white/15 pt-3.5">
                  <p className="text-xs text-slate-200 leading-relaxed">
                    <strong className="font-bold text-white">
                      Safe next step:
                    </strong>{" "}
                    {activeRole.safeNextStep}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
