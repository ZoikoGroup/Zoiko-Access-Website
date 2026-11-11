import React from "react";

const securityCards = [
  {
    title: "Protected by design",
    description: "Security controls are reviewed before services go live.",
  },
  {
    title: "Kept only as needed",
    description: "Retention periods come from the applicable notice.",
  },
  {
    title: "No absolute promises",
    description:
      "We don't claim perfect security or fixed timelines without proof.",
  },
];

export const SecurityAndRetention: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0b103b] via-[#1a1868] to-[#581c87] text-white py-16 md:py-20 relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <span className="block text-purple-200/80 text-xs font-semibold tracking-wider mb-1">
            09
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
            Security &amp; retention
          </h2>
          <p className="text-xs sm:text-sm text-purple-200/85 leading-relaxed">
            What we say, and what we won&apos;t claim without evidence.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {securityCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#4f46e5]/80 to-[#6d4aff]/80 border border-white/15 rounded-2xl p-6 shadow-md backdrop-blur-md"
            >
              <h3 className="font-bold text-sm sm:text-base text-white mb-2">
                {card.title}
              </h3>
              <p className="text-xs text-purple-100/90 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
