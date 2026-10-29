import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { SecHead, inner, sectionPad, sectionY } from "./ui";

const grey = "#8a94a6";
const blue = "#4267d5";
const violet = "#7657e8";
const orange = "#b7791f";
const green = "#1f8a5b";
const red = "#c2413b";

type Lane = {
  title: string;
  owner: string;
  rows: [string, string][];
  extra?: string[];
};

const lanes: Lane[] = [
  {
    title: "Before submission",
    owner: "Owner: requesting organization",
    rows: [
      ["Not initiated", grey],
      ["Submitted", blue],
      ["Withdrawn", grey],
    ],
  },
  {
    title: "Receipt & review",
    owner: "Owner: payer",
    rows: [
      ["Received", blue],
      ["In review", violet],
      ["Additional information requested", orange],
    ],
  },
  {
    title: "Payer decision",
    owner: "Owner: payer (decision owner)",
    rows: [
      ["Approved", green],
      ["Denied", red],
      ["Expired", grey],
    ],
  },
  {
    title: "Degraded state",
    owner: "Safe fallback: verify with payer",
    rows: [["Source unavailable", orange]],
    extra: ["When the source can't be reached, no", "status is assumed. Denials and follow-ups", "always name the next-step owner."],
  },
];

export default function PriorAuthorizations() {
  return (
    <section id="authorizations" className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-11`}>
        <SecHead
          eyebrow="Prior authorizations"
          title={<Copy text="A request is not an approval." d={["A request is not", "an approval."]} />}
          lead={
            <Copy
              text="Submitted, received, reviewed and approved are separate states owned by different parties. The payer is the named decision owner. This is a published concept, not a deployed workflow; localized statuses are confirmed by the domain owner."
              d={[
                "Submitted, received, reviewed and approved are separate states owned by different parties.",
                "The payer is the named decision owner. This is a published concept, not a deployed workflow;",
                "localized statuses are confirmed by the domain owner.",
              ]}
            />
          }
        />
        <ul className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lanes.map((lane) => (
            <li
              key={lane.title}
              className="rounded-[14px] border border-solid border-[#e3e8f2] bg-white p-5 lg:min-h-[241.56px]"
            >
              <h3 className={`${fontPoppins} text-[14px] font-semibold leading-[22.4px] text-[#16245a]`}>{lane.title}</h3>
              <p className="pb-[10px] text-[12.5px] leading-[20px] text-[#5b6678]">{lane.owner}</p>
              <ul className="flex flex-col gap-[7.6px]">
                {lane.rows.map(([label, color]) => (
                  <li
                    key={label}
                    className="relative flex min-h-[38.39px] items-center rounded-[8px] bg-[#f6f9fc] py-[7px] pl-[27px] pr-2 text-[14px] leading-[22.4px] text-[#273444]"
                  >
                    <span
                      className="absolute left-[10px] top-1/2 size-[9px] -translate-y-1/2 rounded-full"
                      style={{ backgroundColor: color }}
                      aria-hidden="true"
                    />
                    {label}
                  </li>
                ))}
              </ul>
              {lane.extra && (
                <p className="pt-3 text-[13px] leading-[20.8px] text-[#5b6678]">
                  <Copy text={lane.extra.join(" ")} d={lane.extra} />
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
