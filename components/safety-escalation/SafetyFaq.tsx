import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, sectionPad } from "./ui";

// The Figma frame shows the first answer only. The other answers restate copy
// that already appears elsewhere on this page.
const faqs = [
  {
    question: "Does delivery mean review?",
    answer:
      "No. Delivery is transport evidence. Review needs a qualified person's recorded evidence.",
  },
  {
    question: "Who acts on a critical result?",
    answer:
      "The issuing source is responsible for the finding. It goes to an authorized recipient under locally approved escalation practice.",
  },
  {
    question: "Can Zoiko Access provide emergency help?",
    answer:
      "No. Emergencies stay with local emergency services. This page never collects medical questions or offers triage.",
  },
  {
    question: "What happens if a message cannot be delivered?",
    answer:
      "The sender uses an approved alternative route. A technical retry is never clinical closure.",
  },
  {
    question: "Is every laboratory connected?",
    answer:
      "No. Information varies by location and participating organization.",
  },
];

export default function SafetyFaq() {
  return (
    <section
      id="faq"
      className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className="mx-auto flex w-full max-w-[1051px] flex-col items-start gap-10 lg:flex-row lg:justify-center lg:gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[15.1px] lg:w-[497.6px] lg:shrink-0 lg:pb-[298.66px]">
          <Eyebrow>Direct answers</Eyebrow>
          <Title size="md">
            <Copy
              text="Clear answers, with clear limits."
              d={["Clear answers, with", "clear limits."]}
            />
          </Title>
        </div>

        <div className="flex w-full flex-col items-start lg:w-[497.6px] lg:shrink-0">
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
