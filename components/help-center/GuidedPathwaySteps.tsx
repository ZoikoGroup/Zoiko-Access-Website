import Image from "next/image";
import { RotateCcw } from "lucide-react";

interface StepItem {
  number: number;
  title: string;
  description: string;
  disclaimer: string;
}

const pathwaySteps: StepItem[] = [
  {
    number: 1,
    title: "Select audience",
    description:
      "Patient, caregiver, clinician, institution, developer or general.",
    disclaimer: "We never ask about your health.",
  },
  {
    number: 2,
    title: "Select task",
    description:
      "Choose a public education topic: access, accounts or referral concepts.",
    disclaimer: "No symptoms or medical history.",
  },
  {
    number: 3,
    title: "Review answer",
    description:
      "Read a current, source-grounded article with its availability note.",
    disclaimer: "No simulated booking or support session.",
  },
  {
    number: 4,
    title: "Choose next step",
    description:
      "Go to a published specialist page or a verified support path.",
    disclaimer: "Gated links are replaced by safe alternatives.",
  },
];

export default function GuidedPathwaySteps() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAFC] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left Column: Image Container */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
              <Image
                src="/help/10.png"
                alt="Guided pathway team session"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: 4 Ordered Steps + Reassess Box */}
          <div className="lg:col-span-7">
            {/* Header */}
            <div className="mb-3">
              <span className="font-mono text-[12px] font-semibold tracking-wider text-[#7C3AED] uppercase">
                — GUIDED PATHWAY
              </span>
            </div>

            <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
              Four steps to the{" "}
              <span className="text-[#7C3AED]">right answer</span>
            </h2>

            <p className="mt-3 text-[15px] leading-[1.65] text-[#64748B] sm:text-[16px]">
              Education, not clinical triage. We never ask about symptoms.
            </p>

            {/* Steps List */}
            <div className="mt-8 space-y-4">
              {pathwaySteps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-start gap-5 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all hover:border-[#CBD5E1]"
                >
                  {/* Step Number Badge */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6A3CF0] font-mono text-[15px] font-bold text-white shadow-sm">
                    {step.number}
                  </div>

                  {/* Step Details */}
                  <div className="pt-0.5">
                    <h3 className="text-[17px] font-bold text-[#0E1646]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[14px] text-[#475569]">
                      {step.description}
                    </p>
                    <p className="mt-1 text-[13px] font-medium text-[#166534]">
                      {step.disclaimer}
                    </p>
                  </div>
                </div>
              ))}

              {/* Reassess Light Purple Box */}
              <div className="flex items-start gap-5 rounded-2xl border border-[#7C3AED]/20 bg-[#F1F0FE] p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#7C3AED] shadow-sm">
                  <RotateCcw className="h-5 w-5 stroke-[2]" />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-[17px] font-bold text-[#0E1646]">
                    Reassess
                  </h3>
                  <p className="mt-1 text-[14px] leading-[1.6] text-[#475569]">
                    Tell us if an answer helped, or browse a related topic.
                    Reading an article never closes a case.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
