import React from "react";

interface EscalationCard {
  title: string;
  description: string;
}

const escalationCards: EscalationCard[] = [
  {
    title: "Delayed or unreceived order",
    description:
      "The ordering and receiving organizations confirm status through their own approved process.",
  },
  {
    title: "Mismatch",
    description:
      "The laboratory reconciles the order against its source records.",
  },
  {
    title: "Amended report",
    description:
      "The source publishes a versioned correction. The original stays visible in history.",
  },
  {
    title: "Failed delivery",
    description:
      "The responsible organization uses an approved alternative route.",
  },
  {
    title: "Critical communication",
    description:
      "Governed manual escalation by the responsible organizations. No automated alerting is implied.",
  },
];

export const ExceptionsAndEscalation: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#eee8fc] via-[#f5f0ff] to-[#e4d9fb] py-16 md:py-24 border-t border-purple-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#6d5ae6]" />
            <span className="text-[#6d5ae6] font-semibold text-xs sm:text-sm tracking-wide">
              Exceptions and escalation
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
            When something goes wrong, a named human is accountable.
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Time-sensitive or critical findings must follow the responsible laboratory&apos;s and clinical organization&apos;s approved escalation procedures. A website or generic message receipt is not an emergency channel.
          </p>
        </div>

        {/* 5 Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {escalationCards.slice(0, 3).map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-white/90 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[140px]"
            >
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-2 leading-snug">
                {card.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {escalationCards.slice(3, 5).map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-white/90 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[140px]"
            >
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-2 leading-snug">
                {card.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
