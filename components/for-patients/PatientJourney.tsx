import Image from "next/image";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Choose care location",
    description:
      "Understand local context; country preference does not establish eligibility or account access.",
  },
  {
    title: "Explore published options",
    description:
      "Review educational information and, where separately authorized, current source-attributed services.",
  },
  {
    title: "Begin an approved next step",
    description:
      "Only an operational, authorized service can accept a request. Sending is not confirmation.",
  },
  {
    title: "Follow source-confirmed progress",
    description:
      "The responsible organization establishes the state and owns the next action where supported.",
  },
];

export default function PatientJourney() {
  return (
    <section className="w-full bg-gradient-to-br from-[#F4F2FD] via-[#EEEAFE] to-[#DACEFE] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="How a patient journey is designed to work"
          title={
            <>
              Four steps.
              <br />
              Clear responsibilities.
            </>
          }
        />

        <div className="mt-9 grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[minmax(0,645fr)_minmax(0,584fr)] lg:gap-x-[52px]">
          <ol className="grid grid-cols-1 gap-[22px] sm:grid-cols-2">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex flex-col gap-4 rounded-xl border border-[#E4DEFB] bg-white p-6"
              >
                <span className="text-[10px] font-bold leading-4 text-[#C4B5FD]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[18px] font-bold leading-6 tracking-[-0.02em] text-[#23327A] [font-family:var(--font-poppins)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#5E6B85]">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white p-4">
            <div className="relative aspect-[550/349] w-full">
              <Image
                src="/for-patients/journey.webp"
                alt="Illustration of people, information and independent healthcare organizations connected through authorized coordination"
                fill
                sizes="(min-width: 1024px) 550px, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
