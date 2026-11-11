import React from "react";
import Image from "next/image";

const protectionCards = [
  {
    eyebrow: "CAREGIVERS & CHILDREN",
    title: "Safeguarding",
    description:
      "If a child or vulnerable person is at risk, contact local emergency services or official safeguarding authorities. No proxy rights are assumed.",
    imageSrc: "/resources-safety-and-emergencies/rsae6.jpg",
  },
  {
    eyebrow: "SAFE ACCESS & PRIVACY",
    title: "No health details collected",
    description:
      "Never type symptoms or personal details here. We don't infer your location or record what you search.",
    imageSrc: "/resources-safety-and-emergencies/rsae7.jpg",
  },
  {
    eyebrow: "ACCESSIBILITY",
    title: "Accessible emergency access",
    description:
      "Use the accessible emergency options your local service provides, such as text-based services where they exist.",
    imageSrc: "/resources-safety-and-emergencies/rsae8.jpg",
  },
];

export const ProtectingPeopleSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              SAFETY, PRIVACY AND ACCESS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Protecting people{" "}
            <span className="text-[#7c5cff]">who need it most</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            General information, reviewed for each region before publication.
          </p>
        </div>

        {/* 3 Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {protectionCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-[16/10] bg-slate-100">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5 sm:p-6 flex-1">
                <span className="block text-[10px] font-bold tracking-wider uppercase text-[#6366f1] mb-1.5">
                  {card.eyebrow}
                </span>
                <h3 className="font-bold text-base text-[#0f172a] mb-1.5 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
