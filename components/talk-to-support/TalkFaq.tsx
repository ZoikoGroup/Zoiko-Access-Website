import Copy from "./Copy";
import Eyebrow from "./Eyebrow";
import SectionHeading from "./SectionHeading";
import { fontSora } from "./fonts";

// The Figma frames only specify the questions. The answers restate copy that
// already appears elsewhere on this page.
const faqs = [
  {
    question: "Can I send a support request here?",
    m: undefined,
    answer:
      "No. No public support form, chat widget, email, or telephone number is connected in this preview.",
  },
  {
    question: "Can support confirm my appointment or referral?",
    m: ["Can support confirm my appointment or", "referral?"],
    answer:
      "No. Care-related decisions, appointments, and referrals belong with the responsible healthcare organization, whose official contact route should be used.",
  },
  {
    question: "Is support available all day or in every country?",
    m: ["Is support available all day or in every", "country?"],
    answer:
      "Availability depends on your care location and on verified, market-specific channels. Language preference does not establish support availability.",
  },
  {
    question: "What information should I avoid sharing?",
    m: ["What information should I avoid", "sharing?"],
    answer:
      "Do not enter symptoms, diagnoses, records, insurance identifiers, identity documents, credentials, or another person’s clinical information.",
  },
  {
    question: "Can I track an existing support case?",
    m: undefined,
    answer:
      "Not here. An existing case can be viewed only through an approved authenticated process with case-specific permission.",
  },
  {
    question: "What if a support channel is unavailable?",
    m: ["What if a support channel is", "unavailable?"],
    answer:
      "General guidance remains available. For existing care or referrals, contact the responsible healthcare organization through its official channels.",
  },
];

export default function TalkFaq() {
  return (
    <section className="w-full bg-white px-[19.5px] py-[56px] lg:px-[70px] lg:py-[96px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-[44px] lg:max-w-[1300px]">
        <div className="flex w-full flex-col items-start gap-[13.18px] pb-[14.51px] lg:gap-[13px] lg:pb-[20.67px]">
          <Eyebrow>Questions, answered</Eyebrow>

          <SectionHeading>
            <Copy
              text="Help with clear expectations."
              m={["Help with clear", "expectations."]}
            />
          </SectionHeading>
        </div>

        <div className="flex w-full flex-col items-start pt-[22px]">
          <div className="flex w-full flex-col items-start border-t border-solid border-[#e3def8]">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group w-full border-b border-solid border-[#e3def8]"
              >
                <summary
                  className={`${fontSora} flex min-h-[60px] w-full cursor-pointer list-none items-center justify-between gap-[8px] pb-[11px] pt-[10px] text-[16.8px] font-semibold leading-[normal] text-[#241c59] lg:gap-[24px] lg:py-[16px] [&::-webkit-details-marker]:hidden`}
                >
                  <span className="min-w-0">
                    <Copy text={faq.question} m={faq.m} />
                  </span>
                  <span
                    className="flex h-[28px] w-[14px] shrink-0 items-start text-[24px] font-semibold leading-[normal] text-[#5b49c8]"
                    aria-hidden="true"
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="pb-[20px] text-[14.4px] font-normal leading-[23.76px] text-[#5e5a86] lg:max-w-[900px]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
