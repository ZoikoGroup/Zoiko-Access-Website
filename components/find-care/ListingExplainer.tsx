import Image from "next/image";
import Copy from "./Copy";
import Eyebrow from "./Eyebrow";
import SectionHeading from "./SectionHeading";
import { fontPoppins } from "./fonts";

const items = [
  {
    icon: "/find-care/icon-building.svg",
    term: "Organization & service",
    text: "The verified published name and service scope—not a fabricated provider.",
    m: [
      "The verified published name and service scope—",
      "not a fabricated provider.",
    ],
    layout: "lg:min-h-[92px] lg:gap-[17px]",
    mobileLines: 2,
  },
  {
    icon: "/find-care/icon-map-pin.svg",
    term: "Locality & participation",
    text: "The approved geographic context and what participation actually means.",
    m: [
      "The approved geographic context and what",
      "participation actually means.",
    ],
    layout: "lg:min-h-[92px] lg:gap-[17px]",
    mobileLines: 2,
  },
  {
    icon: "/find-care/icon-shield-check.svg",
    term: "Responsible source",
    text: "Who provided or verified each relevant claim.",
    m: undefined,
    layout: "lg:min-h-[92px] lg:gap-[17px]",
    mobileLines: 1,
  },
  {
    icon: "/find-care/icon-clock.svg",
    term: "Review & expiry",
    text: "A supported review date, current status, and withdrawal when evidence expires.",
    m: [
      "A supported review date, current status, and",
      "withdrawal when evidence expires.",
    ],
    layout: "lg:min-h-[116px] lg:gap-[17px]",
    mobileLines: 2,
  },
  {
    icon: "/find-care/icon-arrow-right.svg",
    term: "Permitted next action",
    text: "The clearly named destination and whether it is information, contact, or an authorized request.",
    d: [
      "The clearly named destination and whether it is information, contact, or an",
      "authorized request.",
    ],
    m: [
      "The clearly named destination and whether it is",
      "information, contact, or an authorized request.",
    ],
    layout: "lg:min-h-[116px] lg:gap-[16px]",
    mobileLines: 2,
  },
];

export default function ListingExplainer() {
  return (
    <section className="w-full bg-white px-[19.5px] pt-[56px] lg:px-[70px] lg:py-[96px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-[44px] lg:max-w-[1300px] lg:flex-row lg:items-end lg:justify-center">
        <div className="flex w-full flex-col items-start gap-[13.2px] lg:min-w-px lg:flex-1 lg:gap-[13.1px]">
          <Eyebrow>Source &amp; currentness</Eyebrow>

          <SectionHeading desktopLines={2}>
            <Copy
              text="What an approved listing should explain."
              d={["What an approved listing", "should explain."]}
              m={["What an approved listing", "should explain."]}
            />
          </SectionHeading>

          <p className="w-full max-w-[686.38px] pt-[0.71px] text-[16px] font-normal leading-[26.4px] text-[#5e5a86] lg:pt-[7.57px]">
            <Copy
              text="A record describes published information. It is not a clinical endorsement, quality ranking, or assurance of capacity."
              d={[
                "A record describes published information. It is not a clinical endorsement,",
                "quality ranking, or assurance of capacity.",
              ]}
              m={[
                "A record describes published information. It is",
                "not a clinical endorsement, quality ranking, or",
                "assurance of capacity.",
              ]}
            />
          </p>

          <ul className="flex w-full flex-col items-start pt-[10.81px] lg:gap-[12px] lg:pt-[10.9px]">
            {items.map((item) => (
              <li
                key={item.term}
                className={`flex w-full flex-col items-start gap-[4.38px] border-t border-solid border-[#e3def8] py-[15px] lg:flex-row lg:gap-[17px] lg:rounded-[16px] lg:border lg:bg-white lg:p-[19px] ${item.layout}`}
              >
                <span className="hidden size-[44px] shrink-0 items-center justify-center rounded-[12px] bg-[#e5deff] lg:flex">
                  <Image
                    src={item.icon}
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                    className="size-[24px]"
                  />
                </span>
                <div className="flex w-full flex-col items-start gap-[4.38px] lg:min-w-px lg:flex-1 lg:gap-[6px]">
                  <p
                    className={`${fontPoppins} min-h-[23px] w-full text-[14.4px] font-semibold leading-[normal] text-[#241c59] lg:min-h-0`}
                  >
                    {item.term}
                  </p>
                  <p
                    className={`w-full text-[14.4px] font-normal leading-[23.76px] text-[#5e5a86] ${
                      item.mobileLines === 1
                        ? "min-h-[24px]"
                        : "min-h-[48px]"
                    } lg:min-h-0`}
                  >
                    <Copy text={item.text} d={item.d} m={item.m} />
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure className="m-0 flex w-full flex-col items-start gap-[11.99px] rounded-[22px] border border-solid border-[#e3def8] bg-white p-[12px] lg:hidden">
          <div className="relative aspect-[325/216.66] w-full max-w-[560px] overflow-hidden rounded-[13px]">
            <Image
              src="/find-care/discovery-illustration.webp"
              alt="Conceptual illustration of healthcare information and distinct responsible participants"
              fill
              sizes="(min-width: 640px) 560px, 90vw"
              className="object-cover"
            />
          </div>
          <figcaption className="flex w-full flex-col items-center">
            <span className="text-center text-[10.4px] font-normal leading-[17.16px] text-[#5e5a86]">
              <Copy
                text="Illustrative source relationships · No verified provider record is displayed"
                m={[
                  "Illustrative source relationships · No verified provider record is",
                  "displayed",
                ]}
              />
            </span>
          </figcaption>
        </figure>

        <div className="relative hidden h-[556px] min-w-px flex-1 rounded-[22px] border border-solid border-[#e3def8] p-[15px] lg:block">
          <Image
            src="/find-care/listing.webp"
            alt="Two clinic colleagues reviewing a directory record on a laptop"
            fill
            sizes="(min-width: 1440px) 644px, 45vw"
            className="pointer-events-none rounded-[22px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
