import Copy from "./Copy";
import { Eyebrow, Lead, Ribbon, Title, inner, sectionPad, sectionY } from "./ui";

const fields = [
  ["Plan owner", "The responsible payer"],
  ["Source reference", "Payer response reference"],
  ["Retrieved at", "When the request was answered (with time zone)"],
  ["As of", "The date the source data reflects"],
  ["Date range", "Service date(s) covered"],
  ["Rule scope", "Which plan and benefit rules apply"],
  ["Limitations", "What the response cannot confirm"],
];

export default function Provenance() {
  return (
    <section id="provenance" className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:gap-14`}>
        <div className="flex w-full flex-col items-start gap-[13.7px] pt-[6.91px] lg:min-w-0 lg:flex-1">
          <Eyebrow>Trust &amp; provenance</Eyebrow>
          <Title>
            <Copy text="Know the source and the date." d={["Know the source and the", "date."]} />
          </Title>
          <Lead>
            <Copy
              text={`Every response should say who it came from, when it was retrieved, and which date and scope it applies to. "Retrieved at" and "as of" are different things — and neither is a real-time promise.`}
              d={[
                "Every response should say who it came from, when it was retrieved, and",
                `which date and scope it applies to. "Retrieved at" and "as of" are different`,
                "things — and neither is a real-time promise.",
              ]}
            />
          </Lead>
        </div>

        <div className="flex w-full flex-col items-start gap-[9.99px] rounded-[16px] border border-solid border-[#e3e8f2] bg-white p-7 drop-shadow-[0_10px_15px_rgba(36,59,115,0.08)] lg:min-w-0 lg:flex-1">
          <Ribbon>SAMPLE LABELS — NO REAL DATA</Ribbon>
          <dl className="w-full">
            {fields.map(([label, value]) => (
              <div
                key={label}
                className="flex min-h-[39.39px] items-start justify-between gap-4 border-b border-dashed border-[#e3e8f2] py-2 text-[14px] leading-[22.4px]"
              >
                <dt className="shrink-0 text-[#5b6678]">{label}</dt>
                <dd className="text-right text-[#273444]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
