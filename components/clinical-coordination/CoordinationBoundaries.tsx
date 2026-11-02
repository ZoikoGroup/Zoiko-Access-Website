import React from "react";
import { Check } from "lucide-react";

export default function CoordinationBoundaries() {
  const coordinationTasks = [
    "Sending and tracking an authorized referral",
    "Showing who owns the next step",
    "Keeping status, source and time together",
    "Passing permitted messages between teams",
  ];

  const professionalDecisions = [
    "Diagnosis and clinical triage",
    "Prescribing and treatment decisions",
    "Deciding whether a referral is accepted",
    "Ranking urgency automatically",
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Subtitle / Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#635BFF]"></span>
          <span className="text-xs font-bold tracking-wider text-[#635BFF] uppercase">
            RISKS, SAFEGUARDS & CLINICAL BOUNDARIES
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight mb-12">
          What coordination covers, and what stays with professionals.
        </h1>

        {/* Main Card Container */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E6EBF1] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          {/* Left Column - Coordination Tasks */}
          <div className="p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#0A2540] mb-2">
                Coordination tasks
              </h2>
              <p className="text-sm text-[#425466] mb-8">
                Shown on the page, where approved.
              </p>

              <ul className="space-y-4">
                {coordinationTasks.map((task, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 text-[#635BFF] shrink-0">
                      <Check size={18} strokeWidth={2.5} />
                    </span>
                    <span className="text-sm text-[#425466] font-medium leading-relaxed">
                      <a href="#" className="hover:underline">
                        {task}
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Reserved Professional Decisions */}
          <div className="bg-gradient-to-r from-[#1A1F6E] to-[#2B2FA0] p-8 lg:p-12 flex flex-col justify-between text-white">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">
                Reserved professional decisions
              </h2>
              <p className="text-sm text-white/80 mb-8">
                Never made by the platform.
              </p>

              <ul className="space-y-4">
                {professionalDecisions.map((decision, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-sm bg-white mt-2 shrink-0"></span>
                    <span className="text-sm text-white/90 font-medium leading-relaxed">
                      <a href="#" className="hover:underline">
                        {decision}
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
