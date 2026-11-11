import React from "react";
import Image from "next/image";

interface RightCardItem {
  title: string;
  subtitle: string;
  imageSrc: string;
}

const privacyRights: RightCardItem[] = [
  {
    title: "See your information",
    subtitle: "Access",
    imageSrc: "/resources-privacy-and-your-information/pyi7.png",
  },
  {
    title: "Correct it",
    subtitle: "Rectification",
    imageSrc: "/resources-privacy-and-your-information/pyi8.png",
  },
  {
    title: "Ask for deletion",
    subtitle: "Erasure",
    imageSrc: "/resources-privacy-and-your-information/pyi9.png",
  },
  {
    title: "Object or restrict",
    subtitle: "Objection",
    imageSrc: "/resources-privacy-and-your-information/pyi10.png",
  },
  {
    title: "Take a copy",
    subtitle: "Portability",
    imageSrc: "/resources-privacy-and-your-information/pyi11.png",
  },
  {
    title: "Withdraw consent",
    subtitle: "Where consent is the basis",
    imageSrc: "/resources-privacy-and-your-information/pyi12.png",
  },
];

export const PrivacyChoicesAndRights: React.FC = () => {
  return (
    <section
      id="privacy-choices"
      className="w-full bg-white py-16 md:py-20 text-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="block text-[#6366f1] text-xs font-semibold tracking-wider mb-1">
            08
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Privacy choices &amp; rights
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Depending on the law that applies to you, your rights may include:
          </p>
        </div>

        {/* 6 Photo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {privacyRights.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-3 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-3">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="px-2 pb-2">
                <h3 className="font-bold text-sm text-[#0f172a] mb-0.5">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-400">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notice Card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
          <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 border border-amber-200/80 text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Request route not active yet
          </span>
          <p className="text-xs text-slate-600 leading-relaxed">
            A request route appears only once it is verified for your region. We won&apos;t show a form or a response time we can&apos;t honour.
          </p>
        </div>
      </div>
    </section>
  );
};
