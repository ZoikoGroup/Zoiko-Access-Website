import React from "react";
import { List, User, Shield, Landmark, MessageSquare } from "lucide-react";

interface BoundaryCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cardData: BoundaryCard[] = [
  {
    icon: <List className="w-6 h-6 text-[#635BFF]" />,
    title: "Not a record system",
    description: "Source systems keep the clinical record.",
  },
  {
    icon: <User className="w-6 h-6 text-[#635BFF]" />,
    title: "Not a clinician",
    description: "Licensed professionals make clinical decisions.",
  },
  {
    icon: <Shield className="w-6 h-6 text-[#635BFF]" />,
    title: "Not open access",
    description: "Every view is permission-bound and audited.",
  },
  {
    icon: <Landmark className="w-6 h-6 text-[#635BFF]" />,
    title: "Not legal advice",
    description: "Local rules and your organization decide.",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-[#635BFF]" />,
    title: "Not for emergencies",
    description: "Use local emergency services for urgent needs.",
  },
];

export default function TrustBoundaries() {
  return (
    <div className="bg-gradient-to-r from-[#02125F] to-[#2F42CB] font-sans text-white px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Subtitle / Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-white/70"></span>
          <span className="text-xs font-bold tracking-wider text-white/80 uppercase">
            TRUST & BOUNDARIES
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-10">
          Clear about what this is and isn&apos;t.
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col items-center text-center transition-all hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)]"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-[#E0E7FF]/50 flex items-center justify-center mb-6">
                {card.icon}
              </div>

              {/* Title */}
              <h2 className="text-base font-bold text-[#0A2540] mb-2 leading-snug">
                <a href="#" className="hover:underline">
                  {card.title}
                </a>
              </h2>

              {/* Description */}
              <p className="text-xs text-[#697386] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Accessibility Note Footer */}
        <p className="text-xs text-white/75 leading-relaxed">
          Accessible alternatives: every diagram has a text version, and page
          content works with keyboard, screen readers and 400% zoom.
        </p>
      </div>
    </div>
  );
}
