import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Start with the appropriate route",
    description:
      "Talk with a qualified care professional or follow a permitted local self-referral process.",
    owner: "Qualified professional or the permitted local process.",
  },
  {
    title: "Create and send the referral",
    description:
      "The authorized party creates and submits required information to the designated service.",
    owner: "Authorized sender and sending organization.",
  },
  {
    title: "Establish receipt",
    description:
      "The receiving organization confirms receipt when supported. This is not acceptance.",
    owner: "Receiving organization or its authoritative intake source.",
  },
  {
    title: "Review and communicate a decision",
    description:
      "The receiving organization assesses suitability and communicates its decision under its own rules.",
    owner: "Receiving service and appropriately authorized reviewers.",
  },
  {
    title: "Understand the next step",
    description:
      "The responsible organization explains accepted next steps, further information needed, or an alternative route.",
    owner: "The organization responsible for that decision and communication.",
  },
];

export default function ProcessSteps() {
  return (
    <section
      id="referral-steps"
      className="w-full scroll-mt-24 bg-gradient-to-r from-[#F7F4FF] to-[#C4B4FB] py-20"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="The process, step by step"
          title={
            <>
              From referral request
              <br />
              to the next care step.
            </>
          }
          description="This ordered sequence is an educational explanation. It is not a live referral timeline or a promise of a particular workflow."
        />

        <ol className="relative mt-9 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {/* Connector line behind the numbered circles */}
          <span
            className="absolute left-[25px] right-[25px] top-[26px] hidden h-0.5 bg-[#B6A6EE] lg:block"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col gap-5">
              <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-white bg-[#4267D5] text-[12px] font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex flex-1 flex-col border-t-2 border-[#BCC8F0] pt-5">
                <h3 className="pb-3 text-[20px] font-bold leading-6 tracking-[-0.02em] text-[#23327A] [font-family:var(--font-poppins)]">
                  {step.title}
                </h3>
                <p className="text-[14px] leading-6 text-[#5E6B85]">
                  {step.description}
                </p>
                <div className="min-h-6 flex-1" aria-hidden="true" />
                <p className="border-t border-[#D6CCF3] pt-3.5 text-[12px] leading-5 text-[#5E6B85]">
                  <strong className="font-bold text-[#23327A]">
                    Responsible owner:
                  </strong>{" "}
                  {step.owner}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
