import React from "react";

const roleCards = [
  {
    eyebrow: "SOURCE SYSTEM",
    title: "Independent source",
    description: "Owns the record and decides what it sends.",
  },
  {
    eyebrow: "APPROVED CONNECTOR",
    title: "Within approved scope",
    description: "Moves permitted data; validates, signs and logs.",
  },
  {
    eyebrow: "RECEIVING INSTITUTION",
    title: "Accepts the next step",
    description: "Decides whether to accept, review and act.",
  },
];

const stateSteps = [
  {
    num: "01",
    title: "Sent",
    description: "The source system sent the message.",
  },
  {
    num: "02",
    title: "Transport ack",
    description: "The transport layer confirmed receipt.",
  },
  {
    num: "03",
    title: "Accepted",
    description: "The receiving institution accepted it.",
  },
  {
    num: "04",
    title: "Reviewed",
    description: "A professional reviewed it.",
  },
  {
    num: "05",
    title: "Completed",
    description: "The next step was completed.",
  },
];

export const ArchitectureFiveStates: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0b103b] via-[#1a1868] to-[#581c87] text-white py-16 md:py-20 relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="block text-purple-200/80 text-xs font-semibold tracking-wider uppercase mb-2">
            03 / ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
            One flow, five separately evidenced states
          </h2>
          <p className="text-xs sm:text-sm text-purple-200/85 leading-relaxed">
            Each state needs its own evidence. A transport acknowledgment is never clinical acceptance.
          </p>
        </div>

        {/* Top 3 Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {roleCards.map((role, idx) => (
            <div
              key={idx}
              className="bg-white/10 border border-white/15 rounded-2xl p-5 sm:p-6 backdrop-blur-md"
            >
              <span className="block text-[10px] font-bold tracking-wider uppercase text-purple-200/80 mb-1.5">
                {role.eyebrow}
              </span>
              <h3 className="font-bold text-base text-white mb-1">
                {role.title}
              </h3>
              <p className="text-xs text-purple-100/80 leading-relaxed">
                {role.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom 5 White State Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {stateSteps.map((step) => (
            <div
              key={step.num}
              className="bg-white text-slate-800 rounded-xl p-4 sm:p-5 shadow-md flex flex-col justify-between"
            >
              <div>
                <span className="block text-[10px] font-bold text-[#6366f1] mb-1">
                  {step.num}
                </span>
                <h3 className="font-bold text-sm text-[#0f172a] mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
