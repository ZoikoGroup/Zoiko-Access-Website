import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, sectionPad } from "./ui";

// The Figma frame shows the questions only. The answers restate copy that
// already appears elsewhere on this page.
const faqs = [
  {
    question: "Does Zoiko Access replace our EHR?",
    answer:
      "No. Participating hospitals and clinics remain responsible for their own records, clinical reviews, care decisions, and local procedures.",
  },
  {
    question: "Which standards does it use?",
    answer:
      "No standard is claimed on this page. A standard applies only after mapping, testing, and review for a specific use case and partner.",
  },
  {
    question: "Does it hold patient records?",
    answer:
      "No. Source data stays where it is; only authorized task context is exchanged between systems.",
  },
  {
    question: "Is access real-time?",
    answer:
      "Nothing here promises real-time access. Each pattern is conditional, and none is promised as available.",
  },
  {
    question: "Is it secure?",
    answer:
      "“Secure by design” is a direction, not a certificate. These are design requirements, not certifications.",
  },
  {
    question: "Is it available now?",
    answer:
      "Only what is verified by country, partner, workflow and release. There is no connector directory and no “Connect EHR” button.",
  },
];

export default function EhrFaq() {
  return (
    <section
      id="faq"
      className={`w-full bg-[linear-gradient(152.97deg,#f1eefe_10.48%,#ccc0ff_73.45%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-start justify-between gap-10 lg:h-[509px] lg:flex-row lg:gap-0">
        <div className="flex w-full flex-col items-start lg:w-[768px] lg:max-w-full">
          <Eyebrow>FAQ</Eyebrow>
          <Title className="pt-[12.99px]">Straight answers</Title>

          <div className="flex w-full flex-col items-start gap-[12px] pb-[12px]">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group w-full rounded-[14px] border border-solid border-[#d9d3f5] bg-white"
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

        <div className="flex w-full flex-col items-start pt-[20px] lg:sticky lg:top-0 lg:w-[370px] lg:shrink-0">
          <div className="relative h-[360px] w-full overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#e8e2ff_0%,#d5dcff_100%)] lg:h-[492px] lg:w-[369px]">
            <FigmaImage
              src="/ehr-interoperability/faq-workstation.webp"
              alt="An overhead view of hands on a keyboard beside a monitor showing code"
              box={{ left: -50.04, top: -1.81, width: 207.5, height: 103.54 }}
              sizes="(min-width: 1024px) 770px, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
