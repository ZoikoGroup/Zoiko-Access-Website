import React from "react";

const lifecycleStages = [
  { num: "01", label: "Queued", tinted: true },
  { num: "02", label: "Sent", tinted: false },
  { num: "03", label: "Delivered / acknowledged", tinted: true },
  { num: "04", label: "Processed / rejected", tinted: false },
  { num: "05", label: "Reconciled", tinted: true },
];

const reliabilityCards = [
  {
    title: "Idempotent retries",
    description: "Retrying never duplicates an event.",
  },
  {
    title: "Guarded dead-letter",
    description: "Failed events are held, not lost.",
  },
  {
    title: "Controlled replay",
    description: "Replays need authorization and are logged.",
  },
];

export const WebhookEventLifecycle: React.FC = () => {
  return (
    <section className="w-full bg-[#f8f9fe] py-16 md:py-20 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="block text-[#6366f1] text-xs font-semibold tracking-wider uppercase mb-2">
            05 / WEBHOOK &amp; EVENT LIFECYCLE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            From queued to reconciled
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Every event moves through the same states, with a named owner for anything that fails.
          </p>
        </div>

        {/* 5 Chevron Flow Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 mb-6">
          {lifecycleStages.map((stage) => (
            <div
              key={stage.num}
              className={`rounded-xl px-5 py-4 border border-slate-200/70 shadow-sm flex flex-col justify-center relative ${
                stage.tinted ? "bg-[#efeafd]" : "bg-white"
              }`}
            >
              <span className="text-[10px] font-bold text-[#6366f1] mb-1">
                {stage.num}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#0f172a] leading-snug">
                {stage.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom 3 Reliability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reliabilityCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm"
            >
              <h3 className="font-bold text-sm text-[#0f172a] mb-1">
                {card.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
