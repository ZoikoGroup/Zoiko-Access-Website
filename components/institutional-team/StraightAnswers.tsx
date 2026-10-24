import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, sectionPad } from "./ui";

const faqs: {
  question: string;
  questionM?: string[];
  answer: string;
  d?: string[];
  m?: string[];
}[] = [
  {
    question: "Who should contact the institutional team?",
    questionM: ["Who should contact the institutional", "team?"],
    answer:
      "Hospitals, clinic networks, private practices and qualified organizations exploring participation, once a contact service is operating for their location.",
    d: [
      "Hospitals, clinic networks, private practices and qualified organizations",
      "exploring participation, once a contact service is operating for their",
      "location.",
    ],
    m: [
      "Hospitals, clinic networks, private practices",
      "and qualified organizations exploring",
      "participation, once a contact service is",
      "operating for their location.",
    ],
  },
  {
    question: "Can I request patient care here?",
    answer:
      "No. This page is not for patient care, referrals or emergencies. Use local care services, or the emergency services appropriate to your location.",
  },
  {
    question: "Does an inquiry confirm a partnership?",
    questionM: ["Does an inquiry confirm a", "partnership?"],
    answer:
      "No. A received inquiry does not establish a partnership or service availability.",
  },
  {
    question: "Is integration available everywhere?",
    answer:
      "No. A capability may need local authorization and integration, and it is available only where a verified route exists.",
  },
  {
    question: "Can I share a patient record?",
    answer:
      "No. Please do not send patient or health information through any commercial inquiry.",
  },
  {
    question: "How do I know if the contact channel is available?",
    questionM: ["How do I know if the contact channel is", "available?"],
    answer:
      "When a service is operating for your location, this page will say so and show a verified route.",
  },
];

export default function StraightAnswers() {
  return (
    <section
      id="faq"
      className={`w-full bg-[#f1eefe] py-14 lg:bg-[linear-gradient(180deg,#f1eefe_0%,#d1c7ff_100%)] lg:py-[70px] ${sectionPad}`}
    >
      <div
        className={`${inner} flex flex-col items-start gap-[48px] lg:flex-row lg:justify-center`}
      >
        <div className="flex w-full flex-col items-start gap-[9px] lg:min-w-0 lg:flex-1 lg:gap-[10px]">
          <Eyebrow>Plain answers</Eyebrow>
          <Title>Straight answers</Title>

          <div className="w-full border-t border-solid border-[#e1dbf9] pt-[4.6px] lg:pt-[9.19px]">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group border-b border-solid border-[#e1dbf9]"
              >
                <summary
                  className={`${fontPoppins} flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-4 py-[12.5px] text-[16.3px] font-semibold leading-[normal] text-[#1b1750] [&::-webkit-details-marker]:hidden ${faq.questionM ? "max-lg:py-[6px]" : ""}`}
                >
                  <span>
                    <Copy text={faq.question} m={faq.questionM} />
                  </span>
                  <span
                    className="shrink-0 text-[24px] leading-[normal] text-[#6d4fe6]"
                    aria-hidden="true"
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">–</span>
                  </span>
                </summary>
                <p className="max-w-[666px] pb-[20px] text-[16px] font-normal leading-[26.4px] text-[#575387]">
                  <Copy text={faq.answer} d={faq.d} m={faq.m} />
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="relative aspect-[351/421] w-full shrink-0 overflow-hidden rounded-[26px] bg-[linear-gradient(137deg,#8e7bef_0%,#08176d_100%)] shadow-[0_24px_56px_rgba(27,23,80,0.25)] lg:aspect-auto lg:h-[550px] lg:w-[491px]">
          <FigmaImage
            src="/institutional-team/faq-workshop.webp"
            alt="A laboratory worker in a mask holding up a sample"
            box={{ left: -38.07, width: 176.14, top: -11.74, height: 123.49 }}
            mbox={{ left: -38.07, width: 176.14 }}
            sizes="(min-width: 1024px) 800px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
