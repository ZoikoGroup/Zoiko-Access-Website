import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, sectionPad } from "./ui";

// The Figma frame shows the first answer only. The other answers restate copy
// that already appears elsewhere on this page.
const faqs: { question: string; answer: string; d?: string[] }[] = [
  {
    question: "What is diagnostic coordination?",
    answer:
      "Diagnostic coordination is the governed tracking of authorized order, service, report and handoff stages, with clear responsible organizations. Delivery does not establish clinical review.",
    d: [
      "Diagnostic coordination is the governed tracking of authorized order, service, report",
      "and handoff stages, with clear responsible organizations. Delivery does not establish",
      "clinical review.",
    ],
  },
  {
    question: "Who issues a report?",
    answer:
      "The source organization issues the authoritative report. Zoiko Access does not interpret findings, validate clinical quality or store report content.",
  },
  {
    question: "Does delivery mean a clinician read it?",
    answer:
      "No. Delivery, acceptance and clinical review stay separate, so no one step is shown as overall success.",
  },
  {
    question: "Who handles urgent findings?",
    answer:
      "Urgent and critical findings follow locally governed clinical protocols, not this public website. Escalation belongs to authorized service parties.",
  },
  {
    question: "How does availability vary?",
    answer:
      "Any connection depends on partner approvals and local rules. No standards, certifications or integrations are claimed here.",
  },
];

export default function DiagnosticsFaq() {
  return (
    <section
      id="faq"
      className={`w-full bg-[radial-gradient(ellipse_520px_600px_at_381px_356px,#ac96ff_0%,#e0d8ff_100%)] py-12 lg:py-[88px] ${sectionPad}`}
    >
      <div className="mx-auto grid w-full max-w-[1160px] gap-10 lg:min-h-[442.73px] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-[56px] lg:px-6">
        <div className="flex flex-col items-start gap-[15.11px] lg:self-start">
          <Eyebrow>Questions, answered</Eyebrow>
          <Title>
            <Copy
              text="Clear answers, with clear limits."
              d={["Clear answers, with", "clear limits."]}
            />
          </Title>
        </div>

        <div className="flex flex-col items-start lg:self-start">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group w-full border-b border-solid border-[#dcd6f2]"
            >
              <summary
                className={`${fontPoppins} flex cursor-pointer list-none items-start justify-between gap-4 py-[20px] text-[17.3px] font-semibold leading-[28.51px] text-[#243b73] [&::-webkit-details-marker]:hidden`}
              >
                <span>{faq.question}</span>
                <span
                  className="flex h-[28.5px] w-[16px] shrink-0 items-center justify-center text-[22.4px] leading-[22.4px] text-[#7657e8]"
                  aria-hidden="true"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">–</span>
                </span>
              </summary>
              <p className="max-w-[652px] pb-[20px] text-[15.2px] font-normal leading-[25px] text-[#273444]">
                <Copy text={faq.answer} d={faq.d} />
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
