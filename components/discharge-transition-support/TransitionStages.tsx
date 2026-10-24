import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, sectionPad } from "./ui";

type Cell = { text: string; d?: string[] };

const stages = [
  "Prepare",
  "Communicate",
  "Receive",
  "Review / accept",
  "Follow through",
];

const rows: { label: string; dashed?: boolean; cells: Cell[] }[] = [
  {
    label: "Actor",
    cells: [
      { text: "Sending provider" },
      { text: "Coordination platform" },
      { text: "Receiving organization" },
      { text: "Receiving professional" },
      { text: "Named follow-up owner" },
    ],
  },
  {
    label: "Input",
    cells: [
      {
        text: "Discharge information, as authorized",
        d: ["Discharge information, as", "authorized"],
      },
      {
        text: "A permitted handoff message",
        d: ["A permitted handoff", "message"],
      },
      { text: "The incoming handoff" },
      {
        text: "The handoff and its context",
        d: ["The handoff and its", "context"],
      },
      { text: "The accepted plan" },
    ],
  },
  {
    label: "Observable evidence",
    cells: [
      { text: "Prepared record" },
      { text: "Transport result" },
      { text: "Receipt event" },
      { text: "Review or decision event" },
      { text: "Follow-up recorded" },
    ],
  },
  {
    label: "Clinical decision?",
    dashed: true,
    cells: [
      { text: "Yes, by the sender" },
      { text: "No" },
      { text: "No" },
      { text: "Yes, by the receiver" },
      {
        text: "Yes, where care continues",
        d: ["Yes, where care", "continues"],
      },
    ],
  },
];

export default function TransitionStages() {
  return (
    <section
      id="transition-process"
      className={`w-full scroll-mt-[40px] bg-[linear-gradient(136.14deg,#02125f_0%,#2f42cb_55%,#7b3ff2_100%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[13px]`}>
        <Eyebrow tone="light">CONCEPTUAL TRANSITION SEQUENCE</Eyebrow>
        <Title tone="light">Five stages, each with an actor and evidence</Title>
        <p className="w-full pt-[0.99px] text-[16px] font-normal leading-[26.4px] text-[#e6e9ff]">
          For every stage: who acts, what goes in, what can be observed, and
          whether a clinical decision happens.
        </p>

        <div className="w-full overflow-x-auto pt-[17px]">
          <div className="grid min-w-[980px] grid-cols-[130px_repeat(5,minmax(0,1fr))] gap-[8px]">
            <div aria-hidden="true" />
            {stages.map((stage, index) => (
              <div
                key={stage}
                className="flex flex-col items-center justify-center gap-[8px] rounded-[14px] bg-white px-[12px] py-[14px] text-center"
              >
                <span
                  className={`${fontPoppins} flex size-[30px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#6043e8_0%,#7b3ff2_100%)] text-[13px] font-bold leading-none text-white`}
                >
                  {index + 1}
                </span>
                <span
                  className={`${fontPoppins} text-[15px] font-semibold leading-[normal] text-[#031974]`}
                >
                  {stage}
                </span>
              </div>
            ))}

            {rows.map((row) => (
              <div key={row.label} className="contents">
                <div className="flex items-center rounded-[14px] bg-[rgba(60,77,192,0.5)] p-[12px] text-[12px] font-bold uppercase leading-[normal] tracking-[0.72px] text-[#c9b8ff]">
                  {row.label}
                </div>
                {row.cells.map((cell, cellIndex) => (
                  <div
                    key={`${row.label}-${cellIndex}`}
                    className={`flex min-h-[57.5px] items-center justify-center rounded-[14px] bg-[rgba(255,255,255,0.1)] px-[12px] py-[10px] text-center text-[14px] font-normal leading-[23.1px] text-white ${
                      row.dashed
                        ? "border border-dashed border-[rgba(255,255,255,0.25)]"
                        : "border border-solid border-[rgba(255,255,255,0.25)]"
                    }`}
                  >
                    <span>
                      <Copy text={cell.text} d={cell.d} />
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
