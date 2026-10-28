import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Head, inner, sectionPad, sectionY } from "./ui";

const steps: { title: string; owner: string; state?: string; note: string; current?: boolean }[] = [
  {
    title: "Check whether a requirement may apply",
    owner: "provider office, using payer rules",
    state: "Not started",
    note: "Requirements depend on the plan, benefit and local rules.",
  },
  {
    title: "Gather permitted supporting information",
    owner: "provider office & treating professional",
    note: "Only what the payer's request requires — nothing more.",
  },
  {
    title: "Submit to the designated payer channel",
    owner: "provider office",
    state: "Sent",
    note: "Sending is not receipt, and not approval.",
  },
  {
    title: "Confirm technical receipt",
    owner: "payer channel",
    state: "Received",
    note: "An acknowledgment confirms delivery only. No decision is implied.",
  },
  {
    title: "Resolve additional information requests",
    owner: "payer asks · provider responds",
    state: "Information requested",
    note: "Incomplete requests stay open until resolved.",
  },
  {
    title: "Receive the payer-issued determination",
    owner: "payer (decision-maker)",
    state: "Approved / Denied by payer",
    note: "Only a payer-authored determination counts as an outcome.",
    current: true,
  },
  {
    title: "Coordinate member & provider next steps",
    owner: "provider, member and payer",
    note: "Approval alone doesn't guarantee coverage, claim payment or clinical outcome.",
  },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className={`w-full bg-[#f1f4ff] ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-3`}>
        <Head
          eyebrow="Seven-step conceptual journey"
          title="From requirement to next step."
          lead={
            <Copy
              text="Each step has a different owner and a different meaning. Conceptual sequence — not a live workflow."
              d={[
                "Each step has a different owner and a different meaning. Conceptual sequence — not a",
                "live workflow.",
              ]}
            />
          }
        />
        <ol className="relative flex w-full flex-col gap-4 pb-[18.7px] pt-4">
          <span
            className="absolute bottom-[10px] left-[21px] top-[25.99px] w-[2px] bg-[linear-gradient(180deg,#7160d5_0%,#4b3fb8_100%)]"
            aria-hidden="true"
          />
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex items-start gap-[22px]">
              <span
                className={`${fontPoppins} relative z-10 flex size-[44px] shrink-0 items-center justify-center rounded-full border-2 border-solid border-white bg-[#7160d5] text-[16px] font-semibold leading-[25.6px] text-white`}
              >
                {index + 1}
              </span>
              <div
                className={`relative flex min-w-0 flex-1 flex-col gap-[3px] rounded-[14px] border border-solid bg-white px-[22px] py-[18px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)] ${
                  step.current ? "border-[#7657e8] shadow-[0_0_0_3px_#eee9fd]" : "border-[#e3e8f2]"
                }`}
              >
                <h3 className={`${fontPoppins} text-[17px] font-semibold leading-[22.95px] text-[#16245a]`}>{step.title}</h3>
                <p className="pb-[0.59px] text-[13.5px] leading-[21.6px] text-[#243b73]">
                  <strong className="font-bold">Owner:</strong> {step.owner}
                  {step.state && (
                    <>
                      {" "}
                      · <strong className="font-bold">State:</strong> {step.state}
                    </>
                  )}
                </p>
                <p className="text-[14px] leading-[22.4px] text-[#5b6678]">{step.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
