import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Lede, Title, inner, sectionPad } from "./ui";

const points = [
  "Clinical ordering belongs to the authorized professional",
  "Identity matching happens at the source organization",
  "Preparation and scheduling are set by the provider",
  "No order form, triage priority or example times appear here",
];

export default function OrderResponsibility() {
  return (
    <section
      id="order"
      className={`w-full bg-[linear-gradient(-66.25deg,#a508bd_1.74%,#00248f_34.33%,#01003f_99.65%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div
        className={`${inner} flex flex-col items-start gap-10 lg:flex-row lg:justify-center lg:gap-[56px]`}
      >
        <div className="flex w-full flex-col items-start gap-[12.7px] lg:min-w-0 lg:flex-1">
          <Eyebrow tone="light">Order and service responsibility</Eyebrow>
          <Title large tone="light" className="lg:pt-[2.4px]">
            Clinical decisions start and stay at the source.
          </Title>
          <Lede tone="light">
            <Copy
              text="The ordering authority decides what is ordered and why. Source organizations handle identity matching, patient preparation and scheduling."
              d={[
                "The ordering authority decides what is ordered and why. Source",
                "organizations handle identity matching, patient preparation and",
                "scheduling.",
              ]}
            />
          </Lede>
          <ul className="flex w-full flex-col gap-[9px] pt-[2.3px]">
            {points.map((point) => (
              <li
                key={point}
                className="relative pb-[0.81px] pl-[20px] text-[15px] font-normal leading-[24.75px] text-white"
              >
                <span
                  className="absolute left-0 top-[10.31px] size-[6px] rounded-[3px] bg-[#7657e8]"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="relative aspect-[528/422.39] w-full overflow-hidden rounded-[18px] bg-[linear-gradient(135deg,#4267d5_0%,#7657e8_100%)] lg:min-w-0 lg:flex-1"
          role="img"
          aria-label="Two clinicians reviewing notes together at a desk"
        >
          <FigmaImage
            src="/diagnostics-coordination/order-clinicians.webp"
            box={{ top: -4.79, width: 152.46, height: 127.1 }}
            sizes="(min-width: 1024px) 700px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
