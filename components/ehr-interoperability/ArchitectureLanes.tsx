import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, sectionPad } from "./ui";

const lanes = [
  {
    title: "Participating EHR",
    titleLines: undefined,
    note: "Locally controlled source of record",
    noteLines: ["Locally controlled source of", "record"],
    active: true,
  },
  {
    title: "Authorized interface or adapter",
    titleLines: ["Authorized interface or", "adapter"],
    note: "Approved connector",
    noteLines: undefined,
  },
  {
    title: "Regional governance gateway",
    titleLines: ["Regional governance", "gateway"],
    note: "Applies local rules",
    noteLines: undefined,
  },
  {
    title: "Coordination service",
    titleLines: undefined,
    note: "Handles regional metadata",
    noteLines: undefined,
  },
  {
    title: "Receiving authorized organization",
    titleLines: ["Receiving authorized", "organization"],
    note: "The permitted recipient",
    noteLines: undefined,
  },
];

// Pills above the lanes: label and left position as a share of the 1300px frame.
const pills = [
  { label: "Requesting role", left: 1 },
  { label: "Source EHR", left: 145 },
  { label: "Approved gateway", left: 262 },
  { label: "Coordination metadata", left: 425 },
];

export default function ArchitectureLanes() {
  return (
    <section
      id="architecture"
      className={`w-full bg-[linear-gradient(131.54deg,#02125f_0%,#2f42cb_55%,#7b3ff2_100%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[25px]`}>
        <Eyebrow tone="light">CONCEPTUAL ARCHITECTURE</Eyebrow>
        <Title tone="light">Five lanes, and what each one may do</Title>
        <p className="w-full pt-px text-[16px] font-normal leading-[26.4px] text-[#e6e9ff]">
          Select a lane. No two-way arrow is drawn, because that would need
          separate approvals.
        </p>

        <div className="relative w-full pt-[57px] lg:h-[185px]">
          <div
            className="pointer-events-none absolute inset-x-0 top-[15.47px] hidden h-[28px] lg:block"
            aria-hidden="true"
          >
            {pills.map((pill) => (
              <span
                key={pill.label}
                className="absolute flex h-[28px] items-center justify-center whitespace-nowrap rounded-full bg-[#c9b8ff] px-[8px] py-[2px] text-[11px] font-bold leading-[normal] text-[#031974]"
                style={{ left: `${(pill.left / 1300) * 100}%` }}
              >
                {pill.label}
              </span>
            ))}
          </div>

          <ul className="grid w-full gap-[15px] sm:grid-cols-2 lg:grid-cols-5">
            {lanes.map((lane) => (
              <li
                key={lane.title}
                aria-current={lane.active ? "true" : undefined}
                className={`flex min-h-[120px] flex-col justify-center gap-[7px] rounded-[18px] border border-solid border-[rgba(255,255,255,0.35)] px-[16px] ${
                  lane.active ? "bg-white" : "bg-[rgba(255,255,255,0.1)]"
                }`}
              >
                <span
                  className={`${fontPoppins} text-[15px] font-semibold leading-[normal] ${
                    lane.active ? "text-[#031974]" : "text-white"
                  }`}
                >
                  <Copy text={lane.title} d={lane.titleLines} />
                </span>
                <small
                  className={`text-[12.5px] font-normal leading-[normal] ${
                    lane.active ? "text-[#273444]" : "text-[#d8dcff]"
                  }`}
                >
                  <Copy text={lane.note} d={lane.noteLines} />
                </small>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex w-full flex-col items-start gap-[0.39px] rounded-[20px] bg-white px-[26px] pb-[22px] pt-[27px]">
          <p
            className={`${fontPoppins} text-[16px] font-bold leading-[26.4px] text-[#031974]`}
          >
            1. Participating EHR
          </p>
          <p className="w-full text-[16px] font-normal leading-[26.4px] text-[#273444]">
            Locally controlled source of record. It acts only inside its own
            approvals.
          </p>
        </div>

        <div className="flex w-full flex-wrap items-start gap-[10px] pt-[3px] lg:h-[39px]">
          {[
            "Missing authorization: exchange stops",
            "Failed exchange: shown as failed",
          ].map((text) => (
            <span
              key={text}
              className="rounded-full border border-dashed border-[#c9b8ff] px-[14px] py-[5px] text-[14px] font-normal leading-[23.1px] text-white"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
