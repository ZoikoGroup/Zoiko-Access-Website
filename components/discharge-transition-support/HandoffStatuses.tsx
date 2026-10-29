import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lead, Title, inner, sectionPad } from "./ui";

// Desktop positions come from the Figma frame; narrower screens just wrap.
const statuses = [
  { name: "Prepared", pos: "lg:left-0 lg:top-[13px]", active: true },
  { name: "Sent", pos: "lg:left-[123px] lg:top-[13px]" },
  { name: "Delivery confirmed", pos: "lg:left-[210px] lg:top-[13px]" },
  { name: "Acknowledged", pos: "lg:left-[407px] lg:top-[13px]" },
  { name: "In clinical review", pos: "lg:left-[573px] lg:top-[13px]" },
  { name: "Accepted by receiver", pos: "lg:left-[752px] lg:top-[13px]" },
  { name: "Not accepted", pos: "lg:left-[966px] lg:top-[13px]" },
  { name: "Follow-up recorded", pos: "lg:left-0 lg:top-[73px]" },
  { name: "Unresolved", pos: "lg:left-[203px] lg:top-[73px]" },
];

export default function HandoffStatuses() {
  return (
    <section
      className={`w-full bg-[linear-gradient(156.29deg,#f1eefe_10.48%,#ccc0ff_73.45%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[13px]`}>
        <Eyebrow>HANDOFF STATUSES</Eyebrow>
        <Title>Nine statuses, each defined</Title>
        <Lead>
          <Copy
            text="Delivery by transport is different from a receiving team taking clinical responsibility. A status is never made up from telemetry."
            d={[
              "Delivery by transport is different from a receiving team taking clinical responsibility.",
              "A status is never made up from telemetry.",
            ]}
          />
        </Lead>

        <ul className="flex w-full flex-wrap gap-[10px] pt-[13px] lg:relative lg:block lg:h-[115px] lg:pt-0">
          {statuses.map((status) => (
            <li key={status.name} className={`lg:absolute ${status.pos}`}>
              <span
                className={`${fontPoppins} flex min-h-[46px] items-center justify-center rounded-full border border-solid px-[20px] text-[15px] font-semibold leading-[normal] ${
                  status.active
                    ? "border-[#7b3ff2] bg-[#7b3ff2] text-white"
                    : "border-[#d9d3f5] bg-white text-[#031974]"
                }`}
              >
                {status.name}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex w-full flex-col gap-[18px] rounded-[20px] border border-solid border-[#d9d3f5] bg-white px-[26px] pb-[22px] pt-[25px]">
          <h3
            className={`${fontPoppins} text-[20px] font-semibold leading-[normal] text-[#031974]`}
          >
            Prepared
          </h3>
          <p className="text-[16px] font-normal leading-[26.4px] text-[#273444]">
            The sender has assembled the handoff.
          </p>
        </div>
      </div>
    </section>
  );
}
