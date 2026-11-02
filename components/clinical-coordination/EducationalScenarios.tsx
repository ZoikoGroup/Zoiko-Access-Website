import React from "react";
import { Check } from "lucide-react";

interface ScenarioItem {
  boldTitle: string;
  description: string;
}

const scenarios: ScenarioItem[] = [
  {
    boldTitle: "Primary care to specialist.",
    description:
      "A referral is sent, acknowledged, then accepted for review by the specialist team",
  },
  {
    boldTitle: "Hospital to community.",
    description:
      "A discharge handoff names the community team that owns follow-up",
  },
  {
    boldTitle: "Declined referral.",
    description:
      "The sending clinician sees the decline and the receiving team's stated reason",
  },
  {
    boldTitle: "Uncertain status.",
    description:
      'The page shows "unable to confirm" rather than assuming success',
  },
];

export default function EducationalScenarios() {
  return (
    <div className="min-h-screen font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column Image */}
        <div className="w-full h-full flex justify-center items-center order-2 lg:order-1">
          <div className="w-full max-w-lg lg:max-w-none h-[420px] lg:h-[500px] rounded-3xl overflow-hidden">
            <img
              src="/cor/13.png"
              alt="Male doctor with stethoscope standing arms crossed"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column Content */}
        <div className="flex flex-col justify-center order-1 lg:order-2">
          {/* Subtitle / Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#635BFF]"></span>
            <span className="text-xs font-bold tracking-wider text-[#635BFF] uppercase">
              EDUCATIONAL SCENARIOS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A2540] tracking-tight mb-3 leading-[1.15]">
            How coordination could look in practice.
          </h1>

          {/* Description */}
          <p className="text-[#697386] text-sm md:text-base leading-relaxed mb-8">
            Illustrative scenarios only — no real patients or live services.
          </p>

          {/* List of Scenarios */}
          <div className="space-y-4">
            {scenarios.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 md:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-[#E6EBF1] flex items-start gap-4 transition-all hover:border-[#635BFF]/40"
              >
                {/* Check Icon Badge */}
                <div className="w-6 h-6 rounded-full bg-[#7657E8] text-[#FFFFFF] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} strokeWidth={3} />
                </div>

                {/* Text Content */}
                <p className="text-sm text-[#425466] leading-relaxed">
                  <a
                    href="#"
                    className="font-bold text-[#0A2540] hover:underline mr-1.5"
                  >
                    {item.boldTitle}
                  </a>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
