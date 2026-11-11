import React from "react";
import Image from "next/image";

const emergencySteps = [
  {
    num: "1",
    title: "Stop using this site",
    description: "Every second counts. This website cannot help in an emergency.",
    imageSrc: "/resources-safety-and-emergencies/rsae2.jpg",
  },
  {
    num: "2",
    title: "Contact local emergency services",
    description: "Use the official emergency service where you are.",
    imageSrc: "/resources-safety-and-emergencies/rsae3.jpg",
  },
  {
    num: "3",
    title: "Follow their guidance",
    description: "Trained responders will tell you what to do next.",
    imageSrc: "/resources-safety-and-emergencies/rsae4.jpg",
  },
];

export const ThreeStepsNoDelayGrid: React.FC = () => {
  return (
    <section
      id="immediate-danger"
      className="w-full bg-white py-16 md:py-20 text-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#6366f1]" />
            <span className="text-[#6366f1] text-xs font-semibold tracking-wider uppercase">
              WHAT TO DO IN IMMEDIATE DANGER
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
            Three steps, <span className="text-[#7c5cff]">no delay</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            High-level steps only. This page never assesses how serious a situation is.
          </p>
        </div>

        {/* 3 Overlay Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {emergencySteps.map((step) => (
            <div
              key={step.num}
              className="group relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/11] shadow-md hover:shadow-xl transition-all flex flex-col justify-end p-5 sm:p-6 text-white bg-[#0d1538]"
            >
              <Image
                src={step.imageSrc}
                alt={step.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#090f38]/95 via-[#0f1a5c]/75 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 mt-auto">
                <span className="w-7 h-7 rounded-full bg-white text-[#0f172a] font-extrabold text-xs flex items-center justify-center mb-3 shadow-md">
                  {step.num}
                </span>
                <h3 className="font-bold text-base text-white mb-1 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-200/90 leading-relaxed">
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
