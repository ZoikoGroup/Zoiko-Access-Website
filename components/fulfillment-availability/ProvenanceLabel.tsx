import Copy from "./Copy";
import { Eyebrow, Lede, inner, sectionPad } from "./ui";
import { fontPoppins } from "./fonts";

const fields: [string, string][] = [
  ["pharmacy ID: ", "[from source]"],
  ["licensed entity: ", "[from source]"],
  ["partner data source: ", "[from source]"],
  ["sourceEventId: ", "[from source]"],
  ["checkedAt: ", "[timestamp]"],
  ["validUntil: ", "[timestamp]"],
  ["region: ", "[from source]"],
  ["availability scope: ", "[from source]"],
  ["limitations: ", "[from source]"],
];

export default function ProvenanceLabel() {
  return (
    <section className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}>
      <div
        className={`${inner} flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-[48px]`}
      >
        <div className="flex w-full flex-col items-start gap-[12.7px] lg:min-w-0 lg:flex-1">
          <Eyebrow>Provenance and freshness</Eyebrow>
          <h2
            className={`${fontPoppins} w-full pt-[2.5px] text-[28px] font-bold leading-[34px] tracking-[-0.56px] text-[#243b73] lg:text-[40px] lg:leading-[41.22px] lg:tracking-[-0.736px]`}
          >
            <Copy
              text="Every signal must show where it came from and when."
              d={["Every signal must show", "where it came from and", "when."]}
            />
          </h2>
          <Lede>
            <Copy
              text={`If availability data is ever authorized, each signal would carry the fields shown here. Without a known source, or once expired, the answer is "Availability not confirmed."`}
              d={[
                "If availability data is ever authorized, each signal would carry the",
                "fields shown here. Without a known source, or once expired, the",
                `answer is "Availability not confirmed."`,
              ]}
            />
          </Lede>
        </div>

        <div
          className="w-full rounded-[18px] bg-[#243b73] px-[26px] pb-[26px] pt-[26px] font-mono text-[13.1px] leading-[24.93px] text-[#cdd8f7] lg:min-h-[354px] lg:pb-[20px] lg:min-w-0 lg:flex-1"
          role="group"
          aria-label="Example provenance label"
        >
          <p className="flex items-center gap-[14px] pb-[10px] text-[13.1px] font-bold leading-[24.93px] text-white">
            Provenance label
            <span className="rounded-[6px] bg-[#fff0d9] px-[8px] pb-[2.28px] pt-px font-sans text-[11.2px] font-bold leading-[21.28px] text-[#7a4b00]">
              Example only
            </span>
          </p>
          <ul>
            {fields.map(([label, value]) => (
              <li key={label}>
                {label}
                <span className="text-[#9a82f0]">{value}</span>
              </li>
            ))}
          </ul>
          <p className="mt-[24px] border-t border-dashed border-[rgba(255,255,255,0.25)] pt-[12px] text-[#ffd666]">
            Unknown source or expired data → Availability not confirmed
          </p>
        </div>
      </div>
    </section>
  );
}
