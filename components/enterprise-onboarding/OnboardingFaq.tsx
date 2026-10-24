import FigmaImage from "./FigmaImage";
import Copy from "./Copy";
import Kicker from "./Kicker";
import SectionTitle from "./SectionTitle";
import { fontPoppins } from "./fonts";

// The Figma frame only gives the answer to the first question. The other
// answers restate copy that already appears elsewhere on this page.
const faqs = [
  {
    question: "What is enterprise onboarding?",
    text: "The assessments, agreements, technical preparation, clinical safeguards and operational readiness that may be needed before an institution can use supported coordination services.",
    d: [
      "The assessments, agreements, technical preparation, clinical safeguards",
      "and operational readiness that may be needed before an institution can",
      "use supported coordination services.",
    ],
  },
  {
    question: "Who can inquire?",
    text: "If a channel opens for your region, it will be for institutions only: hospitals, clinic networks and independent or multi-site practices.",
  },
  {
    question: "Does submitting an inquiry guarantee access?",
    text: "No. Contact never implies that terms are agreed or in force, and nothing here is a promise of eligibility.",
  },
  {
    question: "Who holds clinical records?",
    text: "The responsible organization and its source systems. Access needs patient-level authority, and only the minimum necessary information is exchanged.",
  },
  {
    question: "Are integrations available in every country?",
    text: "No. Each area links to its own page only when that page is published, and no deployments or timelines are claimed.",
  },
  {
    question: "How are requirements assessed?",
    text: "Through six illustrative gates, each with an owner. There is no score, no verdict and no “you qualify”.",
  },
];

export default function OnboardingFaq() {
  return (
    <section
      id="faq"
      className="w-full bg-[linear-gradient(115.47deg,#eeeaff_25.2%,#cabeff_100.01%)] px-4 py-12 sm:px-6 lg:px-12 lg:pb-[64px] lg:pt-[70px]"
    >
      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-start justify-center gap-[48px] lg:h-[551px] lg:flex-row">
        <div className="flex w-full flex-col items-start gap-[10px] lg:min-w-px lg:flex-1">
          <Kicker>Plain answers</Kicker>
          <SectionTitle>Straight answers</SectionTitle>

          <div className="flex w-full flex-col items-start border-t border-solid border-[#e1dbf9] pt-[9.19px]">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group w-full border-b border-solid border-[#e1dbf9] open:pb-[20px]"
              >
                <summary
                  className={`${fontPoppins} flex min-h-[60px] w-full cursor-pointer list-none items-center justify-between py-[12.5px] text-[16.3px] font-semibold leading-[normal] text-[#1b1750] [&::-webkit-details-marker]:hidden`}
                >
                  {faq.question}
                  <span
                    className="flex h-[35px] w-[16.19px] shrink-0 items-start py-px text-[24px] font-semibold leading-[normal] text-[#6d4fe6]"
                    aria-hidden="true"
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">–</span>
                  </span>
                </summary>
                <p className="w-full max-w-[666.19px] text-[16px] font-normal leading-[26.4px] text-[#575387]">
                  <Copy text={faq.text} d={faq.d} />
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="relative flex h-[420px] w-full flex-col justify-center overflow-clip rounded-[26px] bg-[linear-gradient(140.95deg,#8e7bef_0%,#08176d_100%)] shadow-[0px_24px_56px_0px_rgba(27,23,80,0.25)] lg:h-[551px] lg:w-[566px] lg:shrink-0">
          <div className="relative h-[679.19px] w-full shrink-0 overflow-hidden">
            <FigmaImage
              src="/enterprise-onboarding/faq-clinician.webp"
              alt="A smiling clinician in a white coat standing outdoors among trees"
              box={{ left: -40.05, width: 180.11 }}
              sizes="(min-width: 1440px) 1020px, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
