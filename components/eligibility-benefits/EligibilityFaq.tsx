import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lead, Title, inner, sectionPad, sectionY } from "./ui";

const faqs = [
  {
    q: "Does eligible mean a service is covered?",
    a: "No. Eligibility shows plan association for a date. Coverage of a specific service depends on plan terms and may need separate authorization.",
    d: [
      "No. Eligibility shows plan association for a date. Coverage of a specific service depends on plan terms",
      "and may need separate authorization.",
    ],
  },
  { q: "Who decides my benefits?", a: "Your payer or plan, under its plan rules and contracts." },
  {
    q: "Does an inquiry approve treatment?",
    a: "No. Treatment decisions are clinical, and prior authorization is a separate payer decision.",
  },
  {
    q: "What if the source cannot confirm?",
    a: "Recheck with the plan. Nothing is assumed when a source can't confirm.",
  },
  {
    q: "Why does the date matter?",
    a: "Eligibility and benefits can change. A response applies only to the service date and as-of date it states.",
  },
  { q: "Can a caregiver check?", a: "Only with applicable, verified authority to act for the member." },
];

export default function EligibilityFaq() {
  return (
    <section
      id="faq"
      className={`w-full bg-[linear-gradient(180deg,#f3effe_0%,#e9e3fc_100%)] ${sectionY} ${sectionPad}`}
    >
      <div className={`${inner} grid items-start gap-10 lg:h-[637.13px] lg:grid-cols-[4fr_7fr] lg:gap-14 lg:px-10`}>
        <div className="flex w-full flex-col items-start gap-[13.7px] pt-[6.9px]">
          <Eyebrow>Questions, answered</Eyebrow>
          <Title>
            <Copy text="Direct answers on eligibility." d={["Direct answers on", "eligibility."]} />
          </Title>
          <Lead>
            <Copy
              text="Short, plain answers. For your own coverage, your insurer or plan administrator decides."
              d={["Short, plain answers. For your own coverage, your", "insurer or plan administrator decides."]}
            />
          </Lead>
        </div>

        <div className="w-full">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              open
              className="group flex flex-col gap-[10px] border-b border-solid border-[#5566c9] py-5"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <span className={`${fontPoppins} text-[17px] font-semibold leading-[27.2px] text-[#16245a]`}>{faq.q}</span>
                <span
                  className={`${fontPoppins} w-[14px] shrink-0 pt-[3px] text-[20px] font-semibold leading-[20px] text-[#7657e8]`}
                  aria-hidden="true"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">–</span>
                </span>
              </summary>
              <p className="text-[15px] leading-[24px] text-[#5b6678]">
                <Copy text={faq.a} d={faq.d} />
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
