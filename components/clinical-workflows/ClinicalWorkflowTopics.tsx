import React from "react";
import { ArrowRight } from "lucide-react";

interface WorkflowCard {
  title: string;
  description: string;
  imageSrc: string;
  badgeText: string;
  linkText: string;
}

const workflowData: WorkflowCard[] = [
  {
    title: "Task & worklist experience",
    description:
      "How tasks are assigned, owned and closed — without guessing the owner.",
    imageSrc: "/work/2.png",
    badgeText: "Information",
    linkText: "Explore task & worklist experience",
  },
  {
    title: "Results & review handoffs",
    description:
      "Why a result being received is not the same as it being reviewed.",
    imageSrc: "/work/3.png",
    badgeText: "Information",
    linkText: "Explore results & review handoffs",
  },
  {
    title: "Secure communications",
    description:
      "How permitted messages move between care teams, and what they don't prove.",
    imageSrc: "/work/4.png",
    badgeText: "Information",
    linkText: "Explore secure communications",
  },
];

export default function ClinicalWorkflowTopics() {
  return (
    <div className="bg-gradient-to-r from-[#F5F2FF] to-[#ECE6FE] font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto">
        {/* Subtitle / Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#635BFF]"></span>
          <span className="text-xs font-bold tracking-wider text-[#635BFF] uppercase">
            CLINICAL WORKFLOW TOPICS
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight mb-4">
          Three workflow areas, explained.
        </h1>

        {/* Description */}
        <p className="text-[#425466] text-base md:text-lg max-w-3xl leading-relaxed mb-12">
          Each topic describes a proposed workflow view and who owns each state.
          None of them is a live workspace.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#E6EBF1] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Image Container with No Padding */}
                <div className="w-full h-60 overflow-hidden">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Container */}
                <div className="p-6">
                  {/* Badge positioned between image and content */}
                  <div className="mb-4">
                    <span className="bg-[#E0E7FF] text-[#3730A3] text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide inline-block">
                      {card.badgeText}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-[#0A2540] mb-2 leading-tight">
                    <a href="#" className="hover:underline">
                      {card.title}
                    </a>
                  </h2>

                  {/* Description */}
                  <p className="text-[#425466] text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Card Footer / Link */}
              <div className="px-6 pb-6 pt-0">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#635BFF] hover:underline uppercase tracking-wider group"
                >
                  <span>{card.linkText}</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
