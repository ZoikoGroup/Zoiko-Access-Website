import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Title, inner, photoBg, sectionPad } from "./ui";
import { fontPoppins } from "./fonts";

const items = [
  "Prescription",
  "Patient identity",
  "Supply restrictions",
  "Substitution",
  "Counseling",
];

export default function RegulatedSafeguards() {
  return (
    <section className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}>
      <div
        className={`${inner} grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-[48px]`}
      >
        <div
          className={`relative h-[360px] w-full overflow-hidden rounded-[18px] lg:order-1 lg:h-auto lg:self-stretch ${photoBg}`}
          role="img"
          aria-label="People wading at the edge of a misty beach at dusk"
        >
          <FigmaImage
            src="/fulfillment-availability/safeguards-beach.webp"
            box={{ left: -30.36, width: 160.71 }}
            sizes="(min-width: 1024px) 560px, 90vw"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-[15.1px] lg:order-2">
          <Eyebrow>Regulated safeguards</Eyebrow>
          <Title size="md">
            <Copy
              text="A licensed pharmacy evaluates, not this website."
              d={["A licensed pharmacy evaluates,", "not this website."]}
            />
          </Title>
          <ol className="flex w-full flex-col gap-[12px] pt-[6.9px]">
            {items.map((item) => (
              <li
                key={item}
                className={`${fontPoppins} relative flex min-h-[56.39px] items-center rounded-[14px] border border-solid border-[#dcd6f2] bg-white py-[15px] pl-[44px] pr-4 text-[16px] font-semibold leading-[26.4px] text-[#243b73]`}
              >
                <span
                  className="absolute left-[18px] top-1/2 size-[12px] -translate-y-1/2 rounded-[6px] bg-[#7657e8]"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
            <li
              className={`${fontPoppins} relative flex min-h-[82.78px] items-center rounded-[14px] border border-dashed border-[#dcd6f2] bg-[#f6f3fe] py-[15px] pl-[44px] pr-4 text-[16px] font-semibold leading-[26.4px] text-[#7a2b3a]`}
            >
              <span
                className="absolute left-[18px] top-1/2 size-[12px] -translate-y-1/2 rounded-[6px] bg-[#d65668]"
                aria-hidden="true"
              />
              <Copy
                text="This page never prescribes, recommends dosage or authorizes substitution"
                d={[
                  "This page never prescribes, recommends dosage or authorizes",
                  "substitution",
                ]}
              />
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
