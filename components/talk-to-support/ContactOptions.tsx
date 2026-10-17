import Image from "next/image";
import Copy from "./Copy";
import Eyebrow from "./Eyebrow";
import SectionHeading from "./SectionHeading";
import { fontPoppins } from "./fonts";

const cards = [
  {
    title: "No contact intake connected",
    titleLines: undefined,
    text: "No public support form, chat widget, invented email, telephone number, office hours, or reply-time promise is shown.",
    d: [
      "No public support form, chat widget, invented",
      "email, telephone number, office hours, or",
      "reply-time promise is shown.",
    ],
    m: [
      "No public support form, chat widget,",
      "invented email, telephone number, office",
      "hours, or reply-time promise is shown.",
    ],
    image: "/talk-to-support/contact-no-intake.webp",
    overlay: "bg-[rgba(36,28,89,0.08)]",
  },
  {
    title: "Private cases need secure authorization",
    titleLines: ["Private cases need secure", "authorization"],
    text: "An existing support case can be viewed only through an approved authenticated process with case-specific permission. No public reference lookup is provided.",
    d: [
      "An existing support case can be viewed only",
      "through an approved authenticated process",
      "with case-specific permission. No public",
      "reference lookup is provided.",
    ],
    m: [
      "An existing support case can be viewed",
      "only through an approved authenticated",
      "process with case-specific permission.",
      "No public reference lookup is provided.",
    ],
    image: "/talk-to-support/contact-secure-cases.webp",
    overlay: "",
  },
  {
    title: "Clinical questions stay with providers",
    titleLines: ["Clinical questions stay with", "providers"],
    text: "For existing care, appointments, treatment, or referrals, use the responsible healthcare organization’s official contact route.",
    d: [
      "For existing care, appointments, treatment, or",
      "referrals, use the responsible healthcare",
      "organization’s official contact route.",
    ],
    m: [
      "For existing care, appointments,",
      "treatment, or referrals, use the",
      "responsible healthcare organization’s",
      "official contact route.",
    ],
    image: "/talk-to-support/contact-clinical.webp",
    overlay:
      "bg-[linear-gradient(156.9deg,rgba(255,255,255,0)_25%,rgba(255,255,255,0.8)_75%)]",
  },
];

export default function ContactOptions() {
  return (
    <section className="w-full bg-white px-[19.5px] pt-[56px] lg:px-[70px] lg:py-[96px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-[13.2px] lg:max-w-[1300px] lg:gap-[13.1px]">
        <Eyebrow>Contact options &amp; ownership</Eyebrow>

        <SectionHeading desktopLines={2}>
          <Copy
            text="Only real, authorized channels should appear."
            d={["Only real, authorized channels", "should appear."]}
            m={["Only real, authorized", "channels should appear."]}
          />
        </SectionHeading>

        <p className="w-full max-w-[686.38px] pt-[1.31px] text-[16px] font-normal leading-[26.4px] text-[#5e5a86] lg:max-w-[1048px] lg:pt-[6.96px]">
          <Copy
            text="A secure ticket form, email route, telephone number, or staffed chat requires verified purpose, location, language, hours where applicable, lawful notice, and an operational queue."
            m={[
              "A secure ticket form, email route, telephone",
              "number, or staffed chat requires verified",
              "purpose, location, language, hours where",
              "applicable, lawful notice, and an operational",
              "queue.",
            ]}
          />
        </p>

        <div className="flex w-full flex-col items-start gap-[20px] pt-[14.8px] lg:grid lg:grid-cols-[422fr_421fr_422fr] lg:items-stretch lg:gap-x-[17.5px] lg:gap-y-0 lg:pt-[14.9px]">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex w-full flex-col items-start overflow-clip rounded-[18px] border border-solid border-[#e3def8] bg-white shadow-[0px_12px_32px_0px_rgba(36,28,89,0.1),0px_2px_6px_0px_rgba(36,28,89,0.05)]"
            >
              <div className="relative hidden h-[180px] w-full shrink-0 overflow-clip lg:block">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(min-width: 1440px) 422px, 30vw"
                  className="object-cover"
                />
                {card.overlay && (
                  <div
                    className={`absolute inset-0 ${card.overlay}`}
                    aria-hidden="true"
                  />
                )}
              </div>
              <div className="flex w-full flex-col items-start gap-[9.5px] px-[24px] pb-[24px] pt-[17px]">
                <h3
                  className={`${fontPoppins} w-full pb-[0.79px] text-[17.3px] font-bold leading-[19.87px] text-[#241c59]`}
                >
                  <Copy
                    text={card.title}
                    d={card.titleLines}
                    m={card.titleLines}
                  />
                </h3>
                <p className="w-full max-w-[651.52px] text-[15.2px] font-normal leading-[25px] text-[#5e5a86]">
                  <Copy text={card.text} d={card.d} m={card.m} />
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
