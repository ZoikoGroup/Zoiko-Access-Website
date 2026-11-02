import React from "react";
import { ArrowRight } from "lucide-react";

interface UnderstandCard {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  linkText: string;
  linkHref?: string;
}

const cardsData: UnderstandCard[] = [
  {
    number: "01",
    title: "Privacy & permissions",
    description: "Who can see what, why, and how you change it.",
    imageSrc: "/our/3.png",
    linkText: "Read the guide",
    linkHref: "#",
  },
  {
    number: "02",
    title: "Health information access",
    description:
      "How authorized access works — record by record, source by source.",
    imageSrc: "/our/4.png",
    linkText: "Read the guide",
    linkHref: "#",
  },
  {
    number: "03",
    title: "Accessible help",
    description: "Ways to use Zoiko Access that fit your needs.",
    imageSrc: "/our/5.png",
    linkText: "Read the guide",
    linkHref: "#",
  },
];

export default function ThreeThingsToUnderstand() {
  return (
    <div className="bg-[#F6F9FC] font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Header Border / Divider */}
        <div className="w-full border-t border-[#E6EBF1] pt-8 mb-4">
          {/* Subtitle / Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#635BFF]"></span>
            <span className="text-xs font-bold tracking-wider text-[#635BFF] uppercase">
              IN THIS SECTION
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight mb-10">
            Three things to understand.
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card) => (
            <div key={card.number} className="flex flex-col">
              {/* Top Dark Border Accent */}
              <div className="w-full h-[2px] bg-[#0A2540] mb-6"></div>

              {/* Image Container */}
              <div className="w-full h-56 rounded-2xl overflow-hidden bg-[#02125F] mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Number Label */}
              <span className="text-4xl sm:text-[64px] font-extrabold text-[#E6DEFF] mb-2 leading-none">
                {card.number}
              </span>

              {/* Title */}
              <h2 className="text-xl font-bold text-[#0A2540] mb-2 leading-snug">
                <a href={card.linkHref || "#"} className="hover:underline">
                  {card.title}
                </a>
              </h2>

              {/* Description */}
              <p className="text-[#697386] text-sm leading-relaxed mb-6 flex-grow">
                {card.description}
              </p>

              {/* Link Action */}
              <a
                href={card.linkHref || "#"}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A2540] hover:text-[#635BFF] uppercase tracking-wider transition-colors group"
              >
                <span>{card.linkText}</span>
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
