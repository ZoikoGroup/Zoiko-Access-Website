import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, sectionPad } from "./ui";

// The Figma frame shows the questions only. The answers restate copy that
// already appears elsewhere on this page.
const faqs = [
  {
    question: "What does discharge coordination mean?",
    answer:
      "Clearer, authorized coordination of handoffs and next-step ownership between independent teams and systems, where participating services exist.",
  },
  {
    question: "Who decides readiness to discharge?",
    answer:
      "The sending provider. Readiness to discharge, treatment instructions and prescribing stay with the responsible professionals.",
  },
  {
    question: "What does a handoff acknowledgment prove?",
    answer:
      "Only that a message was received. A notification never transfers clinical duty, and acceptance of care is a separate decision by the receiver.",
  },
  {
    question: "What happens when a next step is delayed?",
    answer:
      "The owning care organization follows up. Exceptions such as a missing receiver or an undeliverable notice are escalated to it.",
  },
  {
    question: "Is it available in my country?",
    answer:
      "Only where participating services and local approvals are in place. Examples need review for each country, and no local network coverage is claimed.",
  },
];

export default function DischargeFaq() {
  return (
    <section
      id="faq"
      className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-start justify-between gap-10 lg:h-[556px] lg:flex-row lg:items-center lg:gap-0">
        <div className="flex w-full flex-col items-start lg:h-[468px] lg:w-[674px] lg:justify-between">
          <Eyebrow>FAQ</Eyebrow>
          <Title className="pt-[12.99px]">Straight answers</Title>

          <div className="flex w-full flex-col items-start gap-[12px] pb-[12px]">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="w-full rounded-[14px] border border-solid border-[#d9d3f5] bg-[#eae4ff]"
              >
                <summary
                  className={`${fontPoppins} relative flex min-h-[52px] w-full cursor-pointer list-none items-start py-[17px] pl-[27px] pr-4 text-[16.5px] font-semibold leading-[normal] text-[#031974] [&::-webkit-details-marker]:hidden`}
                >
                  <span
                    className="absolute left-[13px] top-[17px] leading-[normal]"
                    aria-hidden="true"
                  >
                    •
                  </span>
                  {faq.question}
                </summary>
                <p className="px-[27px] pb-[17px] text-[16px] font-normal leading-[26.4px] text-[#273444]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col items-start pt-[20px] lg:h-[568px] lg:w-[466px] lg:overflow-visible lg:shrink-0">
          <div className="relative h-[360px] w-full overflow-hidden rounded-[26px] bg-[linear-gradient(138.64deg,#e8e2ff_0%,#d5dcff_100%)] lg:h-[547px]">
            <FigmaImage
              src="/discharge-transition-support/faq-care-products.webp"
              alt="Hands holding a small jar of gel, in a white linen shirt"
              box={{ left: 0.06, top: -1.96, width: 100.09, height: 104.27 }}
              sizes="(min-width: 1024px) 466px, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
