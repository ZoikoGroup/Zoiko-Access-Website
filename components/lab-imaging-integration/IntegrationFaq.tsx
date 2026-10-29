import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, sectionPad } from "./ui";

// The Figma frame shows the first answer only. The other answers restate copy
// that already appears elsewhere on this page.
const faqs: { question: string; answer: string; d?: string[] }[] = [
  {
    question: "Is integration live?",
    answer:
      "This page does not show any live integration. Availability depends on verified partners, agreements and local rules.",
    d: [
      "This page does not show any live integration. Availability depends on verified partners,",
      "agreements and local rules.",
    ],
  },
  {
    question: "Which systems connect?",
    answer:
      "No vendor or compatibility matrix is shown without certification artifacts. Connections depend on source systems and agreements.",
  },
  {
    question: "Who owns results?",
    answer:
      "The authoritative source system holds the record and owns its correctness. The receiving organization decides the next action.",
  },
  {
    question: "Does receipt mean review?",
    answer:
      "No. Technical states are never clinical states. Review needs a qualified professional's recorded evidence.",
  },
  {
    question: "How are corrections handled?",
    answer:
      "A new version supersedes the earlier one, and the earlier version is kept in history.",
  },
  {
    question: "How do we inquire?",
    answer:
      "A contact route opens only when a trained intake team and route are verified. Until then, no form or booking widget is offered.",
  },
];

export default function IntegrationFaq() {
  return (
    <section
      id="faq"
      className={`w-full bg-[linear-gradient(180deg,#ffffff_0%,#ebe9fb_40%,#ffffff_100%)] py-12 lg:py-[88px] ${sectionPad}`}
    >
      <div className="mx-auto grid w-full max-w-[1160px] gap-10 lg:min-h-[487px] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-[56px] lg:px-6">
        <div className="flex flex-col items-start gap-[15.11px] lg:self-start lg:pb-[368px]">
          <Eyebrow>Direct answers</Eyebrow>
          <Title size="md">
            <Copy
              text="Six questions, answered plainly."
              d={["Six questions,", "answered plainly."]}
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
