import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, sectionPad } from "./ui";

// The Figma frame shows the first answer only. The other answers restate copy
// that already appears elsewhere on this page.
const faqs: { question: string; answer: string; d?: string[] }[] = [
  {
    question: "Does Zoiko Access show real-time stock?",
    answer:
      "No. Only the responsible pharmacy can confirm stock, and any published information can change.",
    d: [
      "No. Only the responsible pharmacy can confirm stock, and any published information",
      "can change.",
    ],
  },
  {
    question: "Can I reserve a medicine here?",
    answer:
      "No. This page does not take reservations. Contact the pharmacy using its own route.",
  },
  {
    question: `Does "stock confirmed" mean it will be dispensed?`,
    answer:
      "No. Confirmed stock is not the same as dispensed. A pharmacist decides whether to dispense.",
  },
  {
    question: "What if a pharmacy is not listed?",
    answer:
      "Absence of a listing is not unavailability. Contact the pharmacy.",
  },
  {
    question: "Who can authorize a substitution?",
    answer:
      "Only an authorized prescriber or pharmacist, under local rules. This page never authorizes substitution.",
  },
];

export default function FulfillmentFaq() {
  return (
    <section
      id="faq"
      className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className="mx-auto grid w-full max-w-[1344px] gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-[56px]">
        <div className="flex flex-col items-start gap-[15.1px] lg:self-start lg:pb-[298px]">
          <Eyebrow>Questions, answered</Eyebrow>
          <h2
            className={`${fontPoppins} w-full text-[28px] font-semibold leading-[34px] tracking-[-0.56px] text-[#243b73] lg:text-[40px] lg:leading-[41.22px] lg:tracking-[-0.736px]`}
          >
            <Copy
              text="Clear answers, with clear limits."
              d={["Clear answers, with", "clear limits."]}
            />
          </h2>
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
