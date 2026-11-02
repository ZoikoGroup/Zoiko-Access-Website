import React from "react";

interface StepItem {
  number: number;
  text: string;
}

const stepsData: StepItem[] = [
  {
    number: 1,
    text: "You can read every help page for anyone.",
  },
  {
    number: 2,
    text: "Acting for someone needs their permission or legal authority.",
  },
  {
    number: 3,
    text: "Support will never ask you to share their health details.",
  },
];

export default function CaregiverSupport() {
  return (
    <div className="bg-white font-sans text-[#1D2939] px-6 py-12 lg:px-24 lg:py-20 flex items-center justify-center">
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column Image */}
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full max-w-lg lg:max-w-none h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-[#02125F]">
            <img
              src="/acc/5.png"
              alt="Caregiver assisting an elderly woman reading"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column Content */}
        <div className="flex flex-col justify-center">
          {/* Subtitle / Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#635BFF]"></span>
            <span className="text-xs font-bold tracking-wider text-[#635BFF] uppercase">
              HELPING SOMEONE ELSE
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight mb-8 leading-[1.15]">
            Support for caregivers, with permission.
          </h1>

          {/* Numbered Steps List */}
          <div className="space-y-6">
            {stepsData.map((step) => (
              <div key={step.number} className="flex items-center gap-4">
                {/* Number Badge */}
                <span className="w-7 h-7 rounded-md bg-[#F3E8FF] text-[#6B21A8] font-bold text-xs flex items-center justify-center shrink-0">
                  {step.number}
                </span>

                {/* Text Description with link */}
                <p className="text-[#425466] text-sm md:text-base leading-relaxed">
                  <a href="#" className="hover:underline">
                    {step.text}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
