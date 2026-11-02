import React from "react";
import { Check } from "lucide-react";

interface AccessibilityFeature {
  title: string;
  description: string;
}

const featuresData: AccessibilityFeature[] = [
  {
    title: "Keyboard navigation",
    description: "Every control can be reached and used without a mouse.",
  },
  {
    title: "Screen readers",
    description: "Headings, labels and text versions of every diagram.",
  },
  {
    title: "Zoom to 400%",
    description: "Content reflows without sideways scrolling.",
  },
  {
    title: "Status in words",
    description: "Never color alone.",
  },
  {
    title: "Plain language",
    description: "Short sentences and explained terms.",
  },
  {
    title: "Reduced motion",
    description: "Animations respect your device setting.",
  },
  {
    title: "Large targets",
    description: "Buttons sized for touch and limited dexterity.",
  },
  {
    title: "Visible focus",
    description: "You can always see where you are.",
  },
];

export default function AccessibilityFeatures() {
  return (
    <div className="bg-gradient-to-r from-[#F2EFFF] to-[#D1C5FE] font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Subtitle / Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#635BFF]"></span>
          <span className="text-xs font-bold tracking-wider text-[#635BFF] uppercase">
            BUILT IN
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight mb-10">
          Accessibility features on every page.
        </h1>

        {/* Features Grid (2 rows x 4 columns on large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-[#E6EBF1] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col items-start transition-all hover:shadow-[0_6px_24px_rgba(0,0,0,0.05)] min-h-[160px]"
            >
              {/* Check Icon Badge */}
              <div className="w-8 h-8 rounded-full bg-[#D1FAE5] text-[#10B981] flex items-center justify-center mb-4 shrink-0">
                <Check size={18} strokeWidth={3} />
              </div>

              {/* Title */}
              <h2 className="text-base font-bold text-[#0A2540] mb-2 leading-snug">
                <a href="#" className="hover:underline">
                  {feature.title}
                </a>
              </h2>

              {/* Description */}
              <p className="text-xs text-[#697386] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
