import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, sectionPad } from "./ui";

// The Figma frame shows the first answer only. The other answers restate copy
// that already appears elsewhere on this page.
const faqs = [
  {
    question: "Does contacting Zoiko Access make my pharmacy a partner?",
    answer: "No. Assessment, terms and approvals are required.",
  },
  {
    question: "Can we send prescriptions now?",
    answer:
      "No. Participation is subject to assessment and does not confirm partnership, eligibility, supply or approval.",
  },
  {
    question: "Does Zoiko Access dispense or stock medicines?",
    answer:
      "No. Zoiko Access is not a pharmacy, prescriber or clinical source, and it has no warehouse or inventory role.",
  },
  {
    question: "Which countries are supported?",
    answer:
      "A care region gives context, not eligibility. Support depends on local rules and verified partners.",
  },
];

export default function PartnershipFaq() {
  return (
    <section
      id="faq"
      className={`w-full bg-[#f4fdff] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className="mx-auto grid w-full max-w-[1344px] gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-[56px]">
        <div className="flex flex-col items-start gap-[15.1px] lg:self-start lg:pb-[204px]">
          <Eyebrow>Evidence-conscious answers</Eyebrow>
          <Title size="md">
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
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
