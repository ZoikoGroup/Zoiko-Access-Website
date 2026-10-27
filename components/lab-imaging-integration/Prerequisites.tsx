import Image from "next/image";
import Copy from "./Copy";
import { Eyebrow, Lede, Title, inner, sectionPad } from "./ui";

const left = [
  "Partner qualification",
  "Market authority",
  "Contractual basis",
  "Technical specification",
  "Identity and access",
  "Consent or lawful basis",
];
const right = [
  "Localization and residency",
  "Clinical safety",
  "Testing",
  "Support ownership",
  "Release approval",
];

function Item({ label }: { label: string }) {
  return (
    <li className="relative border-b border-solid border-[#dcd6f2] py-[13px] pl-[34px] text-[14.9px] font-normal leading-[24.55px] text-[#273444]">
      <span
        className="absolute left-0 top-[15px] size-[22px] rounded-[5px] border-2 border-solid border-[#7657e8]"
        aria-hidden="true"
      />
      {label}
    </li>
  );
}

export default function Prerequisites() {
  return (
    <section className={`w-full bg-[#f4f8fd] py-12 lg:py-[70px] ${sectionPad}`}>
      <div
        className={`${inner} grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_658px] lg:gap-[0px]`}
      >
        <div className="flex w-full flex-col items-start gap-[12.9px] lg:pr-[40px]">
          <Eyebrow>Governed integration prerequisites</Eyebrow>
          <Title size="md" className="lg:pt-[2.1px]">
            Eleven things must be in place first.
          </Title>
          <Lede className="max-w-[678px] lg:pb-[0.55px]">
            <Copy
              text="A read-only list. It is explanatory and is not a compliance certification or self-service approval."
              d={[
                "A read-only list. It is explanatory and is not a compliance certification or self-service",
                "approval.",
              ]}
            />
          </Lede>

          <div className="grid w-full gap-x-[48px] pt-[20px] sm:grid-cols-2 lg:max-w-[620px] lg:pt-[8px]">
            <ul>
              {left.map((label) => (
                <Item key={label} label={label} />
              ))}
            </ul>
            <ul>
              {right.map((label) => (
                <Item key={label} label={label} />
              ))}
            </ul>
          </div>
        </div>

        <div className="relative aspect-[658/439] w-full max-w-[658px] lg:-mb-[38px] lg:mt-[95px]">
          <Image
            src="/lab-imaging-integration/prerequisites-illustration.webp"
            alt="A student at a desk with a laptop, books and a plant, beside a large checklist"
            fill
            sizes="(min-width: 1024px) 658px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
