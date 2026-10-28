import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, card, inner, sectionPad, sectionY } from "./ui";

type Scenario = { title: string; scope: string; decides: string; dd?: string[]; next: string };

const scenarios: Scenario[] = [
  { title: "Recently changed plan", scope: "Which plan applies on the service date.", decides: "The new and previous plan owners.", next: "Confirm effective dates with the plan." },
  { title: "Eligibility vs. appointment date", scope: "Coverage period relative to the visit.", decides: "The plan.", next: "Check the response for the actual service date." },
  { title: "Multiple plans", scope: "Which plan pays first.", decides: "Insurers and applicable law — coordination of benefits.", dd: ["Insurers and applicable law —", "coordination of benefits."], next: "Ask each plan how coordination applies." },
  { title: "Network mismatch", scope: "Provider or location network conditions.", decides: "The plan.", next: "Confirm network status with the plan." },
  { title: "Service requires authorization", scope: "A separate prior authorization decision.", decides: "The payer.", next: "Follow the plan's authorization process." },
  { title: "Interrupted source", scope: "No current response available.", decides: "The plan, once reachable.", next: "Recheck later or contact the plan directly." },
];

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <dt className="text-[11px] font-semibold uppercase leading-[17.6px] tracking-[0.88px] text-[#7657e8]">{label}</dt>
      <dd className="text-[14px] leading-[22.4px] text-[#5b6678]">{children}</dd>
    </div>
  );
}

export default function Scenarios() {
  return (
    <section
      id="scenarios"
      className={`w-full bg-[conic-gradient(from_55deg_at_50%_50%,#c0acff_0%,#f3effe_99.79%,#c0acff_100%),linear-gradient(180deg,#f3effe_0%,#e9e3fc_100%)] ${sectionY} ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[22px]`}>
        <div className="flex w-full flex-col items-start gap-[13.7px] pb-[41px] pt-[6.9px]">
          <Eyebrow>Common scenarios</Eyebrow>
          <Title>Common eligibility questions.</Title>
          <p className="rounded-full bg-[#fff4e0] px-3 pb-[5.69px] pt-[7.8px] text-[12px] font-semibold leading-[19.2px] text-[#7a4b00]">
            CONCEPTUAL EXAMPLES — NO INSURER NAMES OR REAL CASES
          </p>
        </div>

        <ul className="flex w-full flex-col gap-[11px]">
          {scenarios.map((s) => (
            <li
              key={s.title}
              className={`${card} grid items-center gap-4 px-[26px] py-5 drop-shadow-[0_10px_15px_rgba(36,59,115,0.08)] lg:h-[100px] lg:grid-cols-[344px_298px_285px_1fr] lg:gap-0 lg:py-0`}
            >
              <h3 className={`${fontPoppins} text-[19px] font-semibold leading-[25.65px] text-[#16245a]`}>{s.title}</h3>
              <dl className="contents">
                <Field label="Scope">{s.scope}</Field>
                <Field label="Decides">
                  <Copy text={s.decides} d={s.dd} />
                </Field>
                <Field label="Safe next step">{s.next}</Field>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
