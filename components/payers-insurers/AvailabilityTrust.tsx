import Link from "next/link";
import Copy from "./Copy";
import { Eyebrow, Title, card, cardText, cardTitle, inner, sectionPad, sectionY } from "./ui";

const meta = [
  ["Content owner", "Product / Content"],
  ["Published", "21 Oct 2026"],
  ["Last reviewed", "21 Oct 2026"],
  ["Status", "Informational (P0)"],
];

export default function AvailabilityTrust() {
  return (
    <section id="trust" className={`w-full bg-[#f6f9fc] ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-[44px]`}>
        <div className="flex w-full flex-col items-start gap-[13.7px] pt-[6.9px]">
          <Eyebrow>Availability &amp; trust</Eyebrow>
          <Title>
            <Copy
              text="Clear about availability. Clear about sources."
              d={["Clear about availability.", "Clear about sources."]}
            />
          </Title>
        </div>

        <div className="grid w-full gap-6 lg:grid-cols-3">
          <div className={`${card} flex flex-col items-start gap-2 p-[26px]`}>
            <h3 className={cardTitle}>Market availability</h3>
            <p className={cardText}>
              <Copy
                text="Availability varies by market and approved partner. If your region is unknown or not yet launched, this page stays general and informational."
                d={[
                  "Availability varies by market and approved",
                  "partner. If your region is unknown or not yet",
                  "launched, this page stays general and",
                  "informational.",
                ]}
              />
            </p>
          </div>

          <div className={`${card} flex flex-col items-start gap-2 p-[26px]`}>
            <h3 className={cardTitle}>Source &amp; review</h3>
            <dl className="w-full">
              {meta.map(([label, value]) => (
                <div
                  key={label}
                  className="flex min-h-[39.39px] items-start justify-between gap-4 border-b border-dashed border-[#e3e8f2] py-2 text-[14px] leading-[22.4px]"
                >
                  <dt className="text-[#5b6678]">{label}</dt>
                  <dd className="text-right text-[#273444]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={`${card} flex flex-col items-start gap-2 p-[26px]`}>
            <h3 className={cardTitle}>Privacy &amp; safety</h3>
            <p className={cardText}>
              <Copy
                text="No patient records or policy data appear on this page. This is not an emergency service — for urgent medical needs, contact local emergency services."
                d={[
                  "No patient records or policy data appear on this",
                  "page. This is not an emergency service — for",
                  "urgent medical needs, contact local emergency",
                  "services.",
                ]}
              />
            </p>
            <p className="pt-[2px] text-[15px] leading-[24px] text-[#5b6678]">
              <Link href="/privacy-permissions" className="text-[#4267d5] underline">
                Privacy
              </Link>{" "}
              ·{" "}
              <Link href="/security" className="text-[#4267d5] underline">
                Security
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
