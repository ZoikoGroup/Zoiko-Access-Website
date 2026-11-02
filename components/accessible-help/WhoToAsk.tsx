import React from "react";
import { ArrowRight } from "lucide-react";

interface AskCard {
  badgeText: string;
  badgeStyle: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

const askData: AskCard[] = [
  {
    badgeText: "Platform",
    badgeStyle: "bg-[#E0E7FF] text-[#3730A3]",
    title: "Using Zoiko Access",
    description: "Accounts, pages and settings. Start with the Help Center.",
    linkText: "Help Center",
    linkHref: "#",
  },
  {
    badgeText: "Your care",
    badgeStyle: "bg-[#DCFCE7] text-[#166534]",
    title: "Health and treatment",
    description:
      "Your healthcare provider — support can't give medical advice.",
  },
  {
    badgeText: "Urgent",
    badgeStyle: "bg-[#FEE2E2] text-[#991B1B]",
    title: "Emergencies",
    description: "Local emergency services, straight away.",
  },
];

export default function WhoToAsk() {
  return (
    <div className="bg-gradient-to-r from-[#F2EFFF] to-[#D1C5FE] font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Subtitle / Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#635BFF]"></span>
          <span className="text-xs font-bold tracking-wider text-[#635BFF] uppercase">
            WHO TO ASK
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight mb-10">
          The right person for each question.
        </h1>

        {/* Outer White Card Container with Divided Sections */}
        <div className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E6EBF1] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E6EBF1] overflow-hidden">
          {askData.map((card, index) => (
            <div
              key={index}
              className="p-8 lg:p-10 flex flex-col justify-between"
            >
              <div>
                {/* Badge */}
                <div className="mb-4">
                  <span
                    className={`text-[11px] font-bold px-3 py-1 rounded-full tracking-wide inline-block ${card.badgeStyle}`}
                  >
                    {card.badgeText}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-[#0A2540] mb-2 leading-snug">
                  <a href="#" className="hover:underline">
                    {card.title}
                  </a>
                </h2>

                {/* Description */}
                <p className="text-sm text-[#697386] leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Optional Link Footer */}
              {card.linkText && (
                <div>
                  <a
                    href={card.linkHref || "#"}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#635BFF] hover:underline uppercase tracking-wider group"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
