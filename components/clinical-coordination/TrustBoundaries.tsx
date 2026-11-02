import React from "react";
import {
  ListChecks,
  User,
  Shield,
  Building2,
  MessageSquare,
} from "lucide-react";

interface TrustCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const trustCardsData: TrustCard[] = [
  {
    icon: <ListChecks size={22} className="text-[#7657E8]" />,
    title: "Not a record system",
    description: "Source systems keep the clinical record.",
  },
  {
    icon: <User size={22} className="text-[#7657E8]" />,
    title: "Not a clinician",
    description: "Licensed professionals make clinical decisions.",
  },
  {
    icon: <Shield size={22} className="text-[#7657E8]" />,
    title: "Not open access",
    description: "Every view is permission-bound and audited.",
  },
  {
    icon: <Building2 size={22} className="text-[#7657E8]" />,
    title: "Not legal advice",
    description: "Local rules and your organization decide.",
  },
  {
    icon: <MessageSquare size={22} className="text-[#7657E8]" />,
    title: "Not for emergencies",
    description: "Use local emergency services for urgent needs.",
  },
];

export default function TrustBoundaries() {
  return (
    <div className="bg-[#F6F9FC] font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Subtitle / Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#635BFF]"></span>
          <span className="text-xs font-bold tracking-wider text-[#635BFF] uppercase">
            TRUST & BOUNDARIES
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight mb-10">
          Clear about what this is and isn&apos;t.
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-8">
          {trustCardsData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E6EBF1] flex flex-col items-center text-center justify-between"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-[#EEE9FD] flex items-center justify-center mb-6">
                {card.icon}
              </div>

              {/* Text Content */}
              <div>
                <h2 className="text-base font-bold text-[#0A2540] mb-2">
                  <a href="#" className="hover:underline">
                    {card.title}
                  </a>
                </h2>
                <p className="text-xs text-[#425466] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-xs text-[#697386] text-center lg:text-left">
          Accessible alternatives: every diagram has a text version, and page
          content works with keyboard, screen readers and 400% zoom.
        </p>
      </div>
    </div>
  );
}
