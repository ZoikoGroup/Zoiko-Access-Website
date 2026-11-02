import React from "react";
import { User, HelpCircle, Headphones } from "lucide-react";

interface HelpCard {
  title: string;
  description: string;
  imageSrc: string;
  icon: React.ReactNode;
  badgeText: string;
  badgeType: "available" | "conditional";
}

const helpData: HelpCard[] = [
  {
    title: "Accessibility",
    description:
      "How the site supports keyboards, screen readers, zoom and plain language.",
    imageSrc: "/acc/2.png",
    icon: <User className="w-5 h-5 text-white" />,
    badgeText: "Always available",
    badgeType: "available",
  },
  {
    title: "Help Center",
    description: "Step-by-step answers about using Zoiko Access.",
    imageSrc: "/acc/3.png",
    icon: <HelpCircle className="w-5 h-5 text-white" />,
    badgeText: "Always available",
    badgeType: "available",
  },
  {
    title: "Contact support",
    description:
      "Talk to a person about the platform, where a staffed team exists.",
    imageSrc: "/acc/4.png",
    icon: <Headphones className="w-5 h-5 text-white" />,
    badgeText: "Only where staffed and approved",
    badgeType: "conditional",
  },
];

export default function WaysToGetHelp() {
  return (
    <div className="min-h-screen bg-[#F6F9FC] font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Subtitle / Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#635BFF]"></span>
          <span className="text-xs font-bold tracking-wider text-[#635BFF] uppercase">
            WAYS TO GET HELP
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight mb-4">
          Choose the help you need.
        </h1>

        {/* Description */}
        <p className="text-[#425466] text-base md:text-lg max-w-3xl leading-relaxed mb-12">
          Two are always available. Contact support appears only where a staffed
          team is approved for your location.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#E6EBF1] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Image Container */}
                <div className="w-full h-60 overflow-hidden bg-[#02125F]">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Icon positioned halfway between image and content */}
                <div className="px-6">
                  <div className="-mt-6 w-12 h-12 rounded-2xl bg-gradient-to-r from-[#16245A] to-[#2F4DC0] border-3 border-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-center justify-center relative z-10">
                    {card.icon}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 pt-4">
                  {/* Title */}
                  <h2 className="text-lg font-bold text-[#0A2540] mb-2 leading-tight">
                    <a href="#" className="hover:underline">
                      {card.title}
                    </a>
                  </h2>

                  {/* Description */}
                  <p className="text-[#425466] text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Card Footer / Status Badge */}
              <div className="px-6 pb-6 pt-0">
                <span
                  className={`text-xs font-bold tracking-wide inline-block ${
                    card.badgeType === "available"
                      ? "text-[#0A2540]"
                      : "text-[#8A6D0B]"
                  }`}
                >
                  {card.badgeText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
