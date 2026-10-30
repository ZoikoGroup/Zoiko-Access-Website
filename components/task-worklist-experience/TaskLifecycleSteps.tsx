import React from "react";
import Image from "next/image";

interface StepItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const steps: StepItem[] = [
  {
    id: 1,
    title: "Task defined",
    description: "A coordination item is created, with its source and purpose.",
    image: "/task-worklist-experience/twe6.jpg",
  },
  {
    id: 2,
    title: "Assigned",
    description: "An accountable owner is named, and who assigned it is recorded.",
    image: "/task-worklist-experience/twe7.jpg",
  },
  {
    id: 3,
    title: "Acknowledged or accepted",
    description: "The owner acknowledges it. Acknowledgment is not clinical review.",
    image: "/task-worklist-experience/twe8.jpg",
  },
  {
    id: 4,
    title: "Action recorded",
    description: "What was done is recorded, with who did it and when.",
    image: "/task-worklist-experience/twe9.jpg",
  },
  {
    id: 5,
    title: "Closed or escalated",
    description: "The task closes, or goes to the next responsible party.",
    image: "/task-worklist-experience/twe10.jpg",
  },
];

export const TaskLifecycleSteps: React.FC = () => {
  return (
    <section id="how-it-works" className="relative w-full bg-gradient-to-b from-[#f6f3ff] via-[#f0ecfc] to-[#f6f3ff] py-16 md:py-24 border-t border-purple-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#6d5ae6]" />
            <span className="text-[#6d5ae6] font-semibold text-xs md:text-sm uppercase tracking-wider">
              ILLUSTRATIVE TASK LIFECYCLE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Five steps. An owner and evidence at every one.
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            These steps are a design proposal. They are not a claim about an implemented workflow.
          </p>
        </div>

        {/* 5 Steps Grid with Connecting Line */}
        <div className="relative">
          {/* Connecting dashed line behind circles on desktop */}
          <div
            className="hidden md:block absolute top-[64px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-[#c4b5fd] -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center group"
              >
                {/* Circular image node */}
                <div className="relative mb-5">
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg shadow-purple-900/5 ring-1 ring-purple-200/60 bg-white relative">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#6d5ae6] text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-md">
                    {step.id}
                  </div>
                </div>

                {/* Step content */}
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
