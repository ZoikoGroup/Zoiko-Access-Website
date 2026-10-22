import React from "react";
import {
  User,
  Link2,
  CheckCircle2,
  FileText,
  Sliders,
  Lock,
} from "lucide-react";

interface AnatomyCard {
  icon: React.ElementType;
  title: string;
  description: string;
}

const cards: AnatomyCard[] = [
  {
    icon: User,
    title: "Accountable owner",
    description: "A named role or person responsible for the task.",
  },
  {
    icon: Link2,
    title: "Creation source",
    description: "Where the request came from.",
  },
  {
    icon: CheckCircle2,
    title: "Assignment acceptance",
    description: "Whether the owner has accepted the work.",
  },
  {
    icon: FileText,
    title: "Evidence ledger",
    description: "The record of what happened, in order.",
  },
  {
    icon: Sliders,
    title: "System of record",
    description: "A link to the source system that holds the primary record.",
  },
  {
    icon: Lock,
    title: "Task ID",
    description: "Shown as a placeholder only. No downloads or audit logs for anonymous visitors.",
  },
];

export const TaskDetailAnatomy: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#123088] via-[#0f246e] to-[#0c1a4e] py-16 md:py-24 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#c4b5fd]" />
            <span className="text-[#c4b5fd] font-semibold text-xs md:text-sm uppercase tracking-wider">
              TASK DETAIL ANATOMY
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            What sits behind a task
          </h2>
          <p className="text-blue-100/80 text-sm md:text-base leading-relaxed">
            An abstract record. Nothing here is a real task or a real person.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 text-slate-900 shadow-xl border border-white/90 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  {/* Icon badge */}
                  <div className="w-11 h-11 rounded-xl bg-purple-50 text-[#6d5ae6] flex items-center justify-center mb-4 ring-1 ring-purple-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  {/* Title */}
                  <h3 className="font-bold text-lg text-slate-900 mb-3">
                    {card.title}
                  </h3>
                </div>

                {/* Sub-box description */}
                <div className="bg-[#f8f9ff] rounded-xl p-4 border border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                  {card.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
