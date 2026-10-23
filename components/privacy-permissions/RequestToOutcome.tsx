"use client";

import { User, FileText, Scale, Building2, CheckCircle2, ArrowRight } from "lucide-react";

export default function RequestToOutcome() {
  const steps = [
    {
      icon: User,
      title: "Actor",
      subtitle: "Someone acts",
      isPrimary: false,
    },
    {
      icon: FileText,
      title: "Scoped request",
      subtitle: "One defined action",
      isPrimary: false,
    },
    {
      icon: Scale,
      title: "Policy check",
      subtitle: "Rules and identity",
      isPrimary: false,
    },
    {
      icon: Building2,
      title: "Source decision",
      subtitle: "The responsible organization",
      isPrimary: true,
    },
    {
      icon: CheckCircle2,
      title: "Acknowledged outcome",
      subtitle: "Recorded, not assumed",
      isPrimary: false,
    },
  ];

  return (
    <section className="w-full bg-[#f4f1ff] py-16 lg:py-20 border-t border-[#eee9ff]">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#6d5ae6]" />
          <span>HOW INFORMATION SHARING WORKS</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-4 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          From a request to a
          <br className="hidden sm:inline" /> recorded outcome
        </h2>

        {/* Subtitle */}
        <p className="mb-12 max-w-[640px] text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
          Request sent, received, verified, actioned and declined are different
          things, and none of them is approved automatically.
        </p>

        {/* Flow Container */}
        <div className="rounded-3xl border border-[#ede9fe] bg-white/70 p-6 sm:p-10 lg:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)] backdrop-blur-sm">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex w-full flex-col items-center lg:w-auto lg:flex-row lg:flex-1"
                >
                  {/* Step Card */}
                  <div
                    className={`flex w-full flex-col items-center justify-center rounded-2xl p-5 sm:p-6 text-center transition-all ${
                      step.isPrimary
                        ? "bg-[#5244e6] text-white shadow-xl shadow-indigo-500/20"
                        : "border border-slate-100 bg-white text-slate-900 shadow-[0_2px_14px_rgba(0,0,0,0.03)]"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl ${
                        step.isPrimary
                          ? "bg-white/20 text-white"
                          : "bg-[#f5f3ff] text-[#6d5ae6]"
                      }`}
                    >
                      <Icon className="h-5 w-5 stroke-[2]" />
                    </div>

                    {/* Title */}
                    <h4
                      className={`mb-1 text-[14px] sm:text-[15px] font-bold tracking-tight [font-family:var(--font-poppins)] ${
                        step.isPrimary ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {step.title}
                    </h4>

                    {/* Subtitle */}
                    <p
                      className={`text-[11.5px] sm:text-[12px] leading-snug ${
                        step.isPrimary ? "text-white/80" : "text-slate-500"
                      }`}
                    >
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Connecting Arrow */}
                  {index < steps.length - 1 && (
                    <div className="my-2 flex items-center justify-center lg:my-0 lg:px-2 xl:px-3 text-[#6d5ae6]">
                      <ArrowRight className="h-5 w-5 stroke-[2.5] rotate-90 lg:rotate-0" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
