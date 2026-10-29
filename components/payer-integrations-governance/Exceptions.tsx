import { Head, darkBg, glow, inner, sectionPad, sectionY } from "./shared";

const dot = {
  grey: "bg-[#8a94a6]",
  violet: "bg-[#7657e8]",
  amber: "bg-[#b7791f]",
  blue: "bg-[#4267d5]",
  green: "bg-[#1f8a4c]",
} as const;

const states: [string, keyof typeof dot][] = [
  ["Not available in this market", "grey"],
  ["Not yet connected", "grey"],
  ["Evaluation in progress", "violet"],
  ["Source unavailable", "amber"],
  ["Information needs verification", "amber"],
  ["Request transmitted", "blue"],
  ["Received by destination system", "blue"],
  ["Accepted for review", "violet"],
  ["Decision recorded by authoritative party", "green"],
];

export default function Exceptions() {
  return (
    <section
      className={`w-full ${sectionY} ${sectionPad}`}
      style={{ backgroundImage: `${glow("1100px 700px", "100% 0")},${darkBg}` }}
    >
      <div className={`${inner} flex flex-col gap-11`}>
        <div className="flex flex-col items-start gap-3.5">
          <Head
            tone="light"
            eyebrow="Exception & failure transparency"
            title="A receipt is never an approval."
            lead="Invalid entitlement, missing authorization, stale payer responses, partner downtime, duplicate messages and conflicting statuses are shown plainly. A later state is never inferred from an earlier one."
          />
          <span className="rounded-full bg-[#fff4e0] px-3 py-1.5 text-[12px] font-semibold uppercase leading-5 text-[#7a4b00]">
            Sample state labels
          </span>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {states.map(([label, color]) => (
            <li
              key={label}
              className="flex items-center gap-2.5 rounded-lg border border-solid border-white/60 bg-[#b9befb] px-4 py-3 text-[14.5px] leading-6 text-[#16245a]"
            >
              <span aria-hidden="true" className={`size-2 shrink-0 rounded-full ${dot[color]}`} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
