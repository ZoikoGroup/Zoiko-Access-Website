import Copy from "./Copy";
import Eyebrow from "./Eyebrow";
import SectionHeading from "./SectionHeading";
import { fontSora } from "./fonts";

// The Figma frames only specify the questions. The answers restate copy that
// already appears elsewhere on this page. `plusInset` is where the desktop
// frame places the "+" marker (38-43px in from the row edge, row by row).
const faqs = [
  {
    question: "Why is there no provider search here?",
    m: undefined,
    plusInset: "lg:pr-[43px]",
    answer:
      "Healthcare-service search is not currently shown for your selected care location. A locally approved directory needs current, source-attributed provider records and separate authorization before it can be offered.",
  },
  {
    question: "Does choosing a location activate a directory?",
    m: ["Does choosing a location activate a", "directory?"],
    plusInset: "lg:pr-[41px]",
    answer:
      "No. Public location context is separate from language, identity, payer eligibility, clinical jurisdiction, and data residency. All locations remain informational because operational capability and current source evidence have not been supplied.",
  },
  {
    question: "Does a listing guarantee an appointment?",
    m: ["Does a listing guarantee an", "appointment?"],
    plusInset: "lg:pr-[40px]",
    answer:
      "No. A record describes published information. It is not a clinical endorsement, quality ranking, or assurance of capacity, and a request is not a confirmation.",
  },
  {
    question: "What should “verified” mean on a listing?",
    m: ["What should “verified” mean on a", "listing?"],
    plusInset: "lg:pr-[40px]",
    answer:
      "A verified listing should show the published name and service scope, the approved locality, who provided or verified each claim, and a supported review date.",
  },
  {
    question: "Can a caregiver browse public information?",
    m: ["Can a caregiver browse public", "information?"],
    plusInset: "lg:pr-[38px]",
    answer:
      "Yes. General browsing is open, but it does not grant caregiver authority, record access, account eligibility, or permission to view a private case.",
  },
];

export default function FindCareFaq() {
  return (
    <section className="w-full bg-white px-[19.5px] py-[56px] lg:px-[70px] lg:py-[96px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-[44px] lg:max-w-[1300px] lg:flex-row lg:justify-center">
        <div className="flex w-full flex-col items-start gap-[13.18px] pb-[14.51px] lg:min-w-px lg:flex-1 lg:gap-[13.11px] lg:pb-[20.67px]">
          <Eyebrow>Questions, answered</Eyebrow>

          <SectionHeading desktopLines={2}>
            <Copy
              text="Know before you look for care."
              d={["Know before you look for", "care."]}
              m={["Know before you look for", "care."]}
            />
          </SectionHeading>
        </div>

        <div className="flex w-full flex-col items-start pt-[22px] lg:min-w-px lg:flex-1">
          <div className="flex w-full flex-col items-start border-t border-solid border-[#e3def8]">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group w-full border-b border-solid border-[#e3def8]"
              >
                <summary
                  className={`${fontSora} flex min-h-[60px] w-full cursor-pointer list-none items-center justify-between gap-[8px] pb-[11px] pt-[10px] text-[16.8px] font-semibold leading-[normal] text-[#241c59] lg:gap-[24px] lg:py-[16px] ${faq.plusInset} [&::-webkit-details-marker]:hidden`}
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
                <p className="pb-[20px] text-[14.4px] font-normal leading-[23.76px] text-[#5e5a86] lg:pr-[38px]">
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
