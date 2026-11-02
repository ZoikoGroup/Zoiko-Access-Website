import React from "react";

interface GuardrailCard {
  number: number;
  title: string;
  description: string;
  imageSrc: string;
}

const guardrailsData: GuardrailCard[] = [
  {
    number: 1,
    title: "Patient authorization",
    description:
      "A handoff relies on the patient's authorization or other legal authority, under local rules.",
    imageSrc: "/cor/9.png",
  },
  {
    number: 2,
    title: "Organizational scope",
    description:
      "Each participating organization sees only what its role and agreement allow.",
    imageSrc: "/cor/10.png",
  },
  {
    number: 3,
    title: "Source record accountability",
    description:
      "The source organization stays accountable for its own records and every handoff it sends.",
    imageSrc: "/cor/11.png",
  },
];

export default function GuardrailsSection() {
  return (
    <div className="bg-[#4267D5] font-sans text-white px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Subtitle / Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-white/70"></span>
          <span className="text-xs font-bold tracking-wider text-white/80 uppercase">
            PRIVACY, CONSENT & DELEGATED ACCESS
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Three guardrails on every handoff.
        </h1>

        {/* Description */}
        <p className="text-white/80 text-base md:text-lg max-w-3xl leading-relaxed mb-12">
          Data is minimized and access is decided by default. There is no
          central worldwide chart.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guardrailsData.map((card) => (
            <div
              key={card.number}
              className="rounded-2xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col justify-between overflow-hidden"
            >
              {/* Image Container with No Padding */}
              <div className="w-full h-60 overflow-hidden">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content with Padding */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Badge and Title */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 rounded-md bg-white/20 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {card.number}
                  </span>
                  <h2 className="text-lg font-bold text-white leading-tight">
                    <a href="#" className="hover:underline">
                      {card.title}
                    </a>
                  </h2>
                </div>

                {/* Description */}
                <p className="text-white/80 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
