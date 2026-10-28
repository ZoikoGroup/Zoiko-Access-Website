import Copy from "./Copy";
import { Eyebrow, Lead, Ribbon, Title, card, inner, sectionPad, sectionY } from "./ui";

const grey = "#8a94a6";
const green = "#1f8a5b";
const orange = "#b7791f";
const blue = "#4267d5";
const violet = "#7657e8";
const red = "#c2413b";

const statuses: { label: string; color: string; text: string; d: string[] }[] = [
  { label: "Not checked", color: grey, text: "No inquiry has been made. Start with the correct plan and date.", d: ["No inquiry has been made.", "Start with the correct plan and date."] },
  { label: "Source-verified for date & scope", color: green, text: "Valid only for the stated date and scope. Still not a coverage or payment promise.", d: ["Valid only for the stated date", "and scope. Still not a coverage or", "payment promise."] },
  { label: "Insufficient match", color: orange, text: "Re-check identifying details with the plan.", d: ["Re-check identifying details", "with the plan."] },
  { label: "Awaiting source", color: blue, text: "Wait for the payer's response; nothing is inferred meanwhile.", d: ["Wait for the payer's response;", "nothing is inferred meanwhile."] },
  { label: "Inaccessible by role", color: violet, text: "Your role or purpose doesn't permit this view. Use an authorized route.", d: ["Your role or purpose doesn't", "permit this view. Use an authorized", "route."] },
  { label: "Outdated", color: grey, text: "The response is stale. Recheck with the plan before relying on it.", d: ["The response is stale. Recheck", "with the plan before relying on it."] },
  { label: "Conflicting", color: red, text: "Sources disagree. The plan owner decides — contact the plan.", d: ["Sources disagree. The plan", "owner decides — contact the plan."] },
  { label: "Source unavailable", color: orange, text: "The plan can't be reached. Verify directly with the insurer.", d: ["The plan can't be reached.", "Verify directly with the insurer."] },
];

export default function StatusPatterns() {
  return (
    <section id="status" className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-[43.99px]`}>
        <div className="flex w-full flex-col items-start pb-4 pt-[6.9px]">
          <Eyebrow>Educational status patterns</Eyebrow>
          <div className="w-full pt-[13.69px]">
            <Title>Why a response may be uncertain.</Title>
          </div>
          <div className="w-full pt-[15.1px]">
            <Lead>
              <Copy
                text="A single yes/no hides what matters. These sample labels show how uncertainty is explained, each with a plain next step."
                d={[
                  "A single yes/no hides what matters. These sample labels show how uncertainty is explained,",
                  "each with a plain next step.",
                ]}
              />
            </Lead>
          </div>
          <Ribbon>SAMPLE LABELS — NOT A LIVE STATUS FEED</Ribbon>
        </div>

        <ul className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statuses.map((s) => (
            <li
              key={s.label}
              className={`${card} flex flex-col items-start gap-[9px] p-[26px] drop-shadow-[0_10px_10px_rgba(36,59,115,0.1)] lg:min-h-[153.56px]`}
            >
              <p className="relative flex h-[22.39px] w-full items-center pl-[17px] text-[14px] font-semibold leading-[22.4px] text-[#16245a]">
                <span
                  className="absolute left-0 top-1/2 size-[9px] -translate-y-1/2 rounded-[4.5px]"
                  style={{ backgroundColor: s.color }}
                  aria-hidden="true"
                />
                {s.label}
              </p>
              <p className="text-[14px] leading-[22.4px] text-[#5b6678]">
                <strong className="font-bold">Next:</strong> <Copy text={s.text} d={s.d} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
