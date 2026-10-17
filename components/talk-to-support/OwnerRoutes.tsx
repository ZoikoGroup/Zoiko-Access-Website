import Image from "next/image";
import Copy from "./Copy";
import Eyebrow from "./Eyebrow";
import SectionHeading from "./SectionHeading";
import { fontPoppins } from "./fonts";

const routes = [
  {
    title: "Care and medical questions",
    text: "Use the treating professional or responsible care organization’s official channel. Platform support is not a clinical service.",
    d: [
      "Use the treating professional or responsible",
      "care organization’s official channel. Platform",
      "support is not a clinical service.",
    ],
    m: [
      "Use the treating professional or",
      "responsible care organization’s official",
      "channel. Platform support is not a clinical",
      "service.",
    ],
    image: "/talk-to-support/owner-care.webp",
    articleClass: "lg:pb-[25.08px]",
  },
  {
    title: "Privacy or security concerns",
    text: "Use a verified specialist intake when published. Do not send identity documents, records, credentials, or incident evidence through a general help topic.",
    d: [
      "Use a verified specialist intake when",
      "published. Do not send identity documents,",
      "records, credentials, or incident evidence",
      "through a general help topic.",
    ],
    m: [
      "Use a verified specialist intake when",
      "published. Do not send identity",
      "documents, records, credentials, or",
      "incident evidence through a general help",
      "topic.",
    ],
    image: "/talk-to-support/owner-privacy.webp",
    articleClass: "",
  },
  {
    title: "Caregiver or guardian matters",
    text: "General help can explain permissions. Private information requires verified representation and authorized access; relationship is never inferred.",
    d: [
      "General help can explain permissions. Private",
      "information requires verified representation",
      "and authorized access; relationship is never",
      "inferred.",
    ],
    m: [
      "General help can explain permissions.",
      "Private information requires verified",
      "representation and authorized access;",
      "relationship is never inferred.",
    ],
    image: "/talk-to-support/owner-caregiver.webp",
    articleClass: "",
  },
];

export default function OwnerRoutes() {
  return (
    <section className="w-full bg-white px-[19.5px] pt-[56px] lg:px-[70px] lg:py-[96px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-[13.2px] lg:max-w-[1300px] lg:gap-[13.1px]">
        <Eyebrow>Choose the right owner</Eyebrow>

        <SectionHeading desktopLines={2}>
          <Copy
            text="Some questions need a different kind of route."
            d={["Some questions need a", "different kind of route."]}
            m={["Some questions need a", "different kind of route."]}
          />
        </SectionHeading>

        <div className="flex w-full flex-col items-start gap-[20px] pt-[14.8px] lg:flex-row lg:items-stretch lg:justify-between lg:gap-x-[20px] lg:gap-y-0 lg:pt-[14.9px]">
          {routes.map((route) => (
            <article
              key={route.title}
              className={`flex w-full flex-col items-start gap-[9.5px] overflow-clip rounded-[18px] border border-solid border-[#e3def8] bg-white shadow-[0px_12px_32px_0px_rgba(36,28,89,0.1),0px_2px_6px_0px_rgba(36,28,89,0.05)] lg:min-w-0 lg:shrink lg:basis-[385px] ${route.articleClass}`}
            >
              <div className="flex w-full flex-col items-start gap-[9.5px] px-[24px] pb-[24px] pt-[17px]">
                <div className="relative hidden h-[140px] w-full overflow-hidden rounded-[14px] lg:block">
                  <Image
                    src={route.image}
                    alt=""
                    fill
                    sizes="(min-width: 1440px) 337px, 28vw"
                    className="object-cover"
                  />
                </div>
                <h3
                  className={`${fontPoppins} w-full pb-[0.86px] text-[17.3px] font-bold leading-[19.87px] text-[#241c59]`}
                >
                  {route.title}
                </h3>
                <p className="w-full max-w-[651.52px] text-[15.2px] font-normal leading-[25px] text-[#5e5a86]">
                  <Copy text={route.text} d={route.d} m={route.m} />
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
