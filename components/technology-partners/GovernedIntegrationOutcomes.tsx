import React from "react";
import { ArrowRight, CheckCircle2, Shield, Link2 } from "lucide-react";

interface OutcomeCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const outcomesData: OutcomeCard[] = [
  {
    icon: <ArrowRight className="h-5 w-5 text-white stroke-[2.5]" />,
    title: "More traceable handoffs",
    description: "Each information handoff carries its source, time and owner.",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5 text-white stroke-[2.5]" />,
    title: "Clearer status",
    description: "Statuses say exactly what happened — nothing more.",
  },
  {
    icon: <Shield className="h-5 w-5 text-white stroke-[2.5]" />,
    title: "Governed access",
    description: "Data moves only with lawful purpose and permissions.",
  },
  {
    icon: <Link2 className="h-5 w-5 text-white stroke-[2.5]" />,
    title: "Clear accountability",
    description: "Source systems and care organizations keep their roles.",
  },
];

export default function GovernedIntegrationOutcomes() {
  return (
    <section
      className="relative w-full overflow-hidden py-20 font-sans sm:py-28"
      style={{
        background: "linear-gradient(to bottom, #B9A8FF 0%, #FFFFFF 100%)",
      }}
    >
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
              Value &amp; responsible outcomes
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            What a governed integration is designed to improve.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            Design goals, not promised results.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {outcomesData.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-5 rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] sm:p-8"
            >
              {/* Icon Badge */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#5A43C9] shadow-md">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#1E1B4B] sm:text-[20px]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#475569] sm:text-[15px]">
                  {item.description}
                </p>
                <p className="mt-3 text-[12px] font-medium text-[#B45309]">
                  Design goal &mdash; not a guaranteed outcome
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
