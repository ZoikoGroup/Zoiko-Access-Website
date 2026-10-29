import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lead, Title, cardTitle, inner, note, sectionPad, sectionY } from "./ui";

const pairs = [
  ["Member identity", "Plan enrollment"],
  ["Plan enrollment", "Benefit entitlement"],
  ["Benefit entitlement", "Authorization"],
];

export default function Eligibility() {
  return (
    <section id="eligibility" className={`w-full bg-[#f6f9fc] ${sectionY} ${sectionPad}`}>
      <div className={`${inner} grid items-center gap-10 lg:grid-cols-2 lg:gap-14`}>
        <div className="flex w-full flex-col items-start gap-[13.7px] pt-[6.9px]">
          <Eyebrow>Eligibility &amp; benefits</Eyebrow>
          <Title>
            <Copy
              text="Eligibility provides context. It does not grant approval."
              d={["Eligibility provides context.", "It does not grant approval."]}
            />
          </Title>
          <Lead>
            <Copy
              text="Being identified as a member is different from being enrolled in a plan, having a benefit, or having a service authorized. Each fact has its own source and effective date — and the payer is the source of record."
              d={[
                "Being identified as a member is different from being enrolled in a plan,",
                "having a benefit, or having a service authorized. Each fact has its own",
                "source and effective date — and the payer is the source of record.",
              ]}
            />
          </Lead>
          <p className="w-full text-[16px] leading-[26px] text-[#5b6678] lg:text-[17px] lg:leading-[27.2px]">
            <Copy
              text="This public page never queries payer systems and never displays a coverage determination."
              d={["This public page never queries payer systems and never displays a", "coverage determination."]}
            />
          </p>
        </div>

        <div className="w-full rounded-[16px] bg-white p-5 shadow-[0_10px_30px_rgba(36,59,115,0.08)] lg:p-7">
          <h3 className={`${cardTitle} pb-2`}>Four facts that are never interchangeable</h3>
          <ul>
            {pairs.map(([a, b], index) => (
              <li
                key={a}
                className={`flex items-center justify-between gap-2 border-b border-dashed border-[#e3e8f2] py-[14px] ${
                  index === pairs.length - 1 ? "lg:pb-8" : ""
                }`}
              >
                <Pill>{a}</Pill>
                <span className={`${fontPoppins} text-[24px] font-bold leading-[38px] text-[#7657e8]`} aria-label="is not">
                  ≠
                </span>
                <Pill>{b}</Pill>
              </li>
            ))}
          </ul>
          <p className={`${note} mt-[3px]`}>
            <Copy
              text="Each status shows its source and effective date. If the source is stale or unavailable, verify directly with the payer."
              d={[
                "Each status shows its source and effective date. If the source is stale or unavailable,",
                "verify directly with the payer.",
              ]}
            />
          </p>
        </div>
      </div>
    </section>
  );
}

function Pill({ children }: { children: string }) {
  return (
    <span className="flex min-h-[44px] w-[40%] max-w-[258px] flex-1 items-center justify-center rounded-[10px] border border-solid border-[#e3e8f2] bg-[#f6f9fc] px-2 text-center text-[13px] font-medium leading-[20px] text-[#273444] lg:text-[14px] lg:leading-[22.4px]">
      {children}
    </span>
  );
}
