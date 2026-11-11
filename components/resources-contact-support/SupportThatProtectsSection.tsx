import React from "react";
import Image from "next/image";

const protectionCards = [
  {
    eyebrow: "PRIVACY",
    title: "Data rights go elsewhere",
    description:
      "Privacy rights requests use the privacy route, not general support.",
    imageSrc: "/resources-contact-support/rcs10.jpg",
  },
  {
    eyebrow: "SAFEGUARDING",
    title: "Someone at risk?",
    description:
      "Contact local emergency services or official safeguarding authorities immediately.",
    imageSrc: "/resources-contact-support/rcs11.jpg",
  },
  {
    eyebrow: "ACCESSIBILITY",
    title: "Accessible alternatives",
    description:
      "Accessible routes are listed on the Accessibility page as they become available.",
    imageSrc: "/resources-contact-support/rcs12.jpg",
  },
];

export const SupportThatProtectsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              PRIVACY, SAFEGUARDING AND ACCESS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Support that <span className="text-[#7c5cff]">protects you</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            The right route for sensitive requests.
          </p>
        </div>

        {/* 3 Cards Grid */}
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
