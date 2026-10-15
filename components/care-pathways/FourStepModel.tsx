import SectionHeading from "./SectionHeading";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Learn about service types and verify the source and location of information.",
    participant: "Patient or caregiver reads published information.",
    outcome:
      "A better understanding of options; no recommendation or guaranteed availability.",
  },
  {
    number: "02",
    title: "Navigate",
    description:
      "Understand whether the next step is information, contact, an appointment request, a referral, or another organization-specific process.",
    participant: "The relevant organization defines its permitted route.",
    outcome:
      "A possible next step—not a clinical suitability or eligibility decision.",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Use an authorized pathway with a participating organization when supported.",
    participant:
      "Sender and receiving organization retain their separate responsibilities.",
    outcome:
      "A handoff or request may be transmitted; receipt and acceptance remain distinct.",
  },
  {
    number: "04",
    title: "Follow through",
    description:
      "Check what is known, what remains pending, and which organization owns the next action.",
    participant: "The responsible source provides authoritative updates.",
    outcome:
      "Understand the reported state; no status is inferred from a transport event.",
  },
];

export default function FourStepModel() {
  return (
    <section
      id="four-step-model"
      className="w-full scroll-mt-24 bg-gradient-to-br from-[#F4F2FD] via-[#EEEAFE] to-[#DCD0FF] py-20"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="The four-step model"
          title={
            <>
              Discover. Navigate.
              <br />
              Connect. Follow through.
            </>
          }
          description="This is a general coordination model, not an instruction to choose treatment or a claim that any service is operating."
          className="lg:max-w-[900px]"
        />

        <ol className="mt-9">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <li
                key={step.number}
                className={`relative flex gap-4 sm:gap-8 ${isLast ? "" : "pb-7"}`}
              >
                {/* Connector line */}
                {!isLast && (
                  <span
                    className="absolute left-[27px] top-16 bottom-0 w-0.5 bg-[#D4CCF3]"
                    aria-hidden="true"
                  />
                )}

                <div className="flex h-16 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#4267D5] text-[14px] font-bold text-white">
                  {step.number}
                </div>

                <div className="flex-1 rounded-xl border border-[#E5E7EB] bg-white px-5 py-4 sm:px-7">
                  <h3 className="text-[22px] font-bold leading-[1.4] text-[#23327A] sm:text-[24px]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-[#4B5563] sm:text-[16px]">
                    {step.description}
                  </p>

                  <div className="mt-3 grid grid-cols-1 gap-5 border-t border-[#E5E7EB] pt-5 md:grid-cols-2">
                    <div>
                      <p className="text-[12px] font-bold uppercase text-[#7657E8]">
                        Responsible participant
                      </p>
                      <p className="mt-2.5 text-[13px] leading-[1.8] text-[#4B5563]">
                        {step.participant}
                      </p>
                    </div>
                    <div>
                      <p className="text-[12px] font-bold uppercase text-[#7657E8]">
                        Possible outcome &amp; boundary
                      </p>
                      <p className="mt-2.5 text-[13px] leading-[1.8] text-[#4B5563]">
                        {step.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
