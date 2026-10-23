import React from "react";
import Image from "next/image";

interface ExceptionCard {
  title: string;
  description: string;
  image?: string;
  isSpecial?: boolean;
}

const exceptionCards: ExceptionCard[] = [
  {
    title: "Unassigned",
    description: "Nobody owns it yet. It is shown as unassigned, never quietly given to someone.",
    image: "/task-worklist-experience/twe11.jpg",
  },
  {
    title: "Declined",
    description: "The receiving party declined. The next responsible organization is shown.",
    image: "/task-worklist-experience/twe12.jpg",
  },
  {
    title: "Pending acceptance",
    description: "Assigned but not yet accepted. It stays pending, and a timeout never changes that.",
    image: "/task-worklist-experience/twe13.jpg",
  },
  {
    title: "Stale",
    description: "The latest information is old. The last-verified time is shown.",
    image: "/task-worklist-experience/twe14.jpg",
  },
  {
    title: "Source unavailable",
    description: "The source cannot be reached, so the state is shown as unknown.",
    image: "/task-worklist-experience/twe15.jpg",
  },
  {
    title: "Delayed",
    description: "The due window passed. It is escalated through a governed, traceable path.",
    image: "/task-worklist-experience/twe16.jpg",
  },
  {
    title: "Reassigned",
    description: "Ownership moved. The earlier owner and the reason stay in the record.",
    image: "/task-worklist-experience/twe17.jpg",
  },
  {
    title: "Never silent",
    description: "No task is marked accepted or completed because time ran out.",
    isSpecial: true,
  },
];

export const HandoffExceptions: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#6d5ae6]" />
            <span className="text-[#6d5ae6] font-semibold text-xs md:text-sm uppercase tracking-wider">
              HANDOFFS, EXCEPTIONS AND ESCALATION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            When things do not go to plan
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Error messages always say what to do next. Color is never the only signal.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exceptionCards.map((card, idx) => {
            if (card.isSpecial) {
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#3730a3] p-7 text-white shadow-lg flex flex-col justify-center min-h-[250px] hover:shadow-xl transition-shadow duration-200"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-purple-100/90 text-sm sm:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            }

            return (
              <div
                key={idx}
                className="group rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow duration-200"
              >
                {/* Image */}
                {card.image && (
                  <div className="relative w-full h-40 overflow-hidden bg-slate-100">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
