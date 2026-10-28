import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Head, inner, sectionPad, sectionY } from "./ui";

const grey = "#8a94a6";
const blue = "#4267d5";
const amber = "#b7791f";
const violet = "#7657e8";
const green = "#1f8a5b";
const red = "#c2413b";

const statuses = [
  { label: "Not started", color: grey, text: "No request has been sent.", active: true },
  { label: "Sent", color: blue, text: "Submitted to the payer channel; not yet confirmed received." },
  { label: "Received", color: blue, text: "The payer channel acknowledged delivery. No decision." },
  { label: "Incomplete / information requested", color: amber, text: "The payer needs more before it can review." },
  { label: "Under review", color: violet, text: "The payer is reviewing the request." },
  { label: "Approved by payer", color: green, text: "A payer-authored approval exists. Not a payment guarantee." },
  { label: "Denied by payer", color: red, text: "A payer-authored denial exists. See the official notice." },
  { label: "Withdrawn", color: grey, text: "The requester withdrew the request." },
  { label: "Cancelled", color: grey, text: "The request was cancelled and will not be decided." },
  { label: "Source unavailable", color: amber, text: "No current answer. Nothing is inferred — check with the payer." },
];

export default function StatusVocabulary() {
  return (
    <section id="statuses" className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-3`}>
        <Head
          eyebrow="Status vocabulary"
          title="Ten statuses. Ten different meanings."
          lead={
            <Copy
              text={`A glossary, not a live feed. Source ownership and validity vary — "approved" only ever comes from payer-authored evidence, and unknown is never shown as denied.`}
              d={[
                `A glossary, not a live feed. Source ownership and validity vary — "approved" only ever`,
                "comes from payer-authored evidence, and unknown is never shown as denied.",
              ]}
            />
          }
        />
        <dl className="grid w-full gap-x-10 gap-y-4 border-t border-solid border-[#e3e8f2] pt-4 md:grid-cols-2 lg:auto-rows-[minmax(84.98px,auto)] lg:gap-y-0 lg:pb-[10.5px]">
          {statuses.map((s) => (
            <div
              key={s.label}
              className={`flex items-start gap-1 self-start rounded-[20px] px-5 py-4 ${
                s.active
                  ? "bg-[#4267d5] drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]"
                  : "bg-[rgba(185,168,255,0.4)] shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
              }`}
            >
              <dt
                className={`${fontPoppins} relative shrink-0 whitespace-nowrap pl-5 text-[15.5px] font-semibold leading-[24.8px] ${
                  s.active ? "text-white" : "text-[#16245a]"
                }`}
              >
                <span
                  className="absolute left-0 top-1/2 size-[10px] -translate-y-1/2 rounded-[3px]"
                  style={{ backgroundColor: s.color }}
                  aria-hidden="true"
                />
                {s.label}
              </dt>
              <dd
                className={`min-w-0 flex-1 text-[14.5px] leading-[23.2px] lg:ml-auto lg:max-w-[448px] ${
                  s.active ? "text-[#c5cbd8]" : "text-[#5b6678]"
                }`}
              >
                {s.text}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
