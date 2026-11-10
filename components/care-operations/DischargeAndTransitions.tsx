import Image from "next/image";

interface TransitionStage {
  stageNumber: string;
  title: string;
  description: string;
}

const transitionStages: TransitionStage[] = [
  {
    stageNumber: "STAGE 1",
    title: "Discharge plan owner",
    description: "A named clinician owns the discharge plan.",
  },
  {
    stageNumber: "STAGE 2",
    title: "Safe receiving organization",
    description: "The next organization is suitable and able to receive.",
  },
  {
    stageNumber: "STAGE 3",
    title: "Accepted tasks",
    description: "The receiving team explicitly accepts each task.",
  },
  {
    stageNumber: "STAGE 4",
    title: "Monitored follow-up",
    description: "Follow-up is tracked until it is closed.",
  },
];

export default function DischargeAndTransitions() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#EEE9FD] to-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Image with Floating Overlay Card */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/care/4.png"
                alt="Care transition consultation"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />

              {/* Floating Bottom Badge */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-md border border-slate-100 sm:left-6 sm:right-6">
                <p className="text-[13px] text-[#475569]">
                  <span className="font-bold text-[#0E1646]">
                    Safe handoff.
                  </span>{" "}
                  Nothing is handed over until someone accepts it.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Stage Timeline & Governance Content */}
          <div className="lg:col-span-7">
            <div className="mb-3">
              <span className="font-mono text-[12px] font-semibold tracking-wider text-[#7C3AED] uppercase">
                — DISCHARGE &amp; TRANSITIONS
              </span>
            </div>

            <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
              Every handoff has a named owner.
            </h2>

            <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
              Four stages of a care transition. Responsibility moves only when
              the next owner accepts.
            </p>

            {/* Vertical Timeline Steps */}
            <div className="relative mt-10 space-y-8 pl-4">
              {/* Vertical Connecting Line */}
              <div
                className="absolute left-[27px] top-3 bottom-3 w-[2px] bg-[#CBD5E1]"
                aria-hidden="true"
              />

              {transitionStages.map((stage, idx) => (
                <div key={idx} className="relative flex items-start gap-6">
                  {/* Circular Node Pin */}
                  <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#7C3AED] bg-white ring-4 ring-[#F6F9FC]">
                    <div className="h-2 w-2 rounded-full bg-[#7C3AED]" />
                  </div>

                  {/* Stage Text Details */}
                  <div className="-mt-1">
                    <span className="font-mono text-[11px] font-bold tracking-wider text-[#7C3AED] uppercase">
                      {stage.stageNumber}
                    </span>
                    <h3 className="mt-0.5 text-[18px] font-bold text-[#0E1646]">
                      {stage.title}
                    </h3>
                    <p className="mt-1 text-[14px] text-[#475569]">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
