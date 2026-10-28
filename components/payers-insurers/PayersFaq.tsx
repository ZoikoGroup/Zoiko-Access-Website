import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lead, Title, inner, sectionPad } from "./ui";

const faqs: { q: string; a: string; d?: string[] }[] = [
  {
    q: "What does the platform do?",
    a: "Zoiko Access is designed as a coordination layer for authorized payer and insurer administrative pathways, helping parties follow eligibility information, requests and status handoffs where supported.",
    d: [
      "Zoiko Access is designed as a coordination layer for authorized payer and insurer administrative pathways,",
      "helping parties follow eligibility information, requests and status handoffs where supported.",
    ],
  },
  {
    q: "Does it decide eligibility?",
    a: "No. The payer remains authoritative for plan membership, benefits and coverage. Zoiko Access does not determine eligibility.",
    d: [
      "No. The payer remains authoritative for plan membership, benefits and coverage. Zoiko Access does not",
      "determine eligibility.",
    ],
  },
  {
    q: "Does it approve care?",
    a: "No. Prior authorization decisions belong to the payer, and clinical decisions belong to care professionals.",
  },
  {
    q: "Can insurers see medical records?",
    a: "Not by default. Funding or sponsoring coverage does not grant record access. Any access is purpose-bound, minimum-necessary and separately permissioned.",
    d: [
      "Not by default. Funding or sponsoring coverage does not grant record access. Any access is purpose-bound,",
      "minimum-necessary and separately permissioned.",
    ],
  },
  {
    q: "Are integrations live?",
    a: "Not on this page. Capabilities and integrations vary by market and approved partner; only verified availability is ever marked available.",
    d: [
      "Not on this page. Capabilities and integrations vary by market and approved partner; only verified availability",
      "is ever marked available.",
    ],
  },
  {
    q: "How do we engage?",
    a: "Start with the implementation approach. Institutional contact opens only once an approved, staffed intake process is operational.",
    d: [
      "Start with the implementation approach. Institutional contact opens only once an approved, staffed intake",
      "process is operational.",
    ],
  },
];

export default function PayersFaq() {
  return (
    <section id="faq" className={`w-full bg-white py-12 lg:py-[96px] ${sectionPad}`}>
      <div className={`${inner} grid items-start gap-10 lg:grid-cols-[4fr_7fr] lg:gap-14`}>
        <div className="flex w-full flex-col items-start gap-[13.7px] pt-[6.9px]">
          <Eyebrow>Questions, answered</Eyebrow>
          <Title>
            <Copy
              text="Know what it does. Know what it doesn't."
              d={["Know what it does.", "Know what it doesn't."]}
            />
          </Title>
          <Lead>
            <Copy
              text="Short, direct answers reviewed against the published page."
              d={["Short, direct answers reviewed against the published", "page."]}
            />
          </Lead>
        </div>

        <div className="w-full">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              open
              className="group flex flex-col gap-[10px] border-b border-solid border-[#e3e8f2] py-5"
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
