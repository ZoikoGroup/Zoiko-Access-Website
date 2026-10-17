import Image from "next/image";
import Copy from "./Copy";
import Eyebrow from "./Eyebrow";
import SectionHeading from "./SectionHeading";
import { fontPoppins } from "./fonts";

const cards = [
  {
    title: "No medical details requested",
    titleLines: undefined,
    text: "Do not enter symptoms, diagnoses, records, insurance identifiers, or another person’s clinical information. This preview has no medical input or uploads.",
    d: [
      "Do not enter symptoms, diagnoses, records,",
      "insurance identifiers, or another person’s",
      "clinical information. This preview has no",
      "medical input or uploads.",
    ],
    m: [
      "Do not enter symptoms, diagnoses,",
      "records, insurance identifiers, or another",
      "person’s clinical information. This preview",
      "has no medical input or uploads.",
    ],
  },
  {
    title: "Permissions remain separate",
    titleLines: undefined,
    text: "General browsing does not grant caregiver authority, record access, account eligibility, or permission to view a private case.",
    d: [
      "General browsing does not grant caregiver",
      "authority, record access, account eligibility,",
      "or permission to view a private case.",
    ],
    m: [
      "General browsing does not grant",
      "caregiver authority, record access,",
      "account eligibility, or permission to view a",
      "private case.",
    ],
  },
  {
    title: "Responsible organizations retain control",
    titleLines: ["Responsible organizations retain", "control"],
    text: "Provider decisions, clinical advice, case status, and appointment confirmation need their own authoritative source.",
    d: [
      "Provider decisions, clinical advice, case",
      "status, and appointment confirmation need",
      "their own authoritative source.",
    ],
    m: [
      "Provider decisions, clinical advice, case",
      "status, and appointment confirmation",
      "need their own authoritative source.",
    ],
  },
];

export default function SafetyPrivacy() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f6f3ff] to-[#ece7ff] px-[19.5px] pb-[56px] pt-[112px] lg:px-[70px] lg:py-[96px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-[12.9px] lg:max-w-[1300px] lg:gap-[13.2px]">
        <Eyebrow>Safety &amp; privacy</Eyebrow>

        <SectionHeading desktopLines={2} mobileLines={3} wide>
          <Copy
            text="Information and administrative guidance—not clinical care."
            d={["Information and administrative", "guidance—not clinical care."]}
            m={[
              "Information and",
              "administrative guidance",
              "—not clinical care.",
            ]}
          />
        </SectionHeading>

        <div className="flex w-full max-w-[767.13px] items-start rounded-[16px] border-2 border-solid border-[#8e7bef] bg-white px-[20px] pb-[16px] pt-[25.09px] lg:hidden">
          <p className="w-full max-w-[686.38px] text-[16px] font-normal leading-[26.4px] text-[#241c59]">
            <strong className="font-bold">
              <Copy
                text="Zoiko Access is not an emergency response service."
                m={["Zoiko Access is not an emergency", "response service."]}
              />
            </strong>{" "}
            <Copy
              text="For urgent medical attention, contact the appropriate local emergency or urgent-care service. Do not use this page for diagnosis, triage, or personal medical advice."
              m={[
                "For urgent medical",
                "attention, contact the appropriate local",
                "emergency or urgent-care service. Do",
                "not use this page for diagnosis, triage,",
                "or personal medical advice.",
              ]}
            />
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-[20px] pt-[15.11px] lg:grid lg:grid-cols-3 lg:items-stretch lg:gap-x-[18.5px] lg:gap-y-0 lg:pb-[29.8px] lg:pt-[14.8px]">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex w-full flex-col items-start overflow-clip rounded-[18px] border border-solid border-[#e3def8] bg-white shadow-[0px_12px_32px_0px_rgba(36,28,89,0.1),0px_2px_6px_0px_rgba(36,28,89,0.05)]"
            >
              <div className="flex w-full flex-col items-start gap-[9.5px] px-[24px] pb-[24px] pt-[17px]">
                <h3
                  className={`${fontPoppins} w-full pb-[0.86px] text-[17.3px] font-bold leading-[19.87px] text-[#241c59]`}
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

        <div className="relative hidden h-[546px] w-full max-w-[1299px] shrink-0 overflow-hidden lg:block">
          <Image
            src="/talk-to-support/safety-illustration.webp"
            alt="Illustration of private information protected by a security shield, with permissions kept separate"
            fill
            sizes="(min-width: 1440px) 1299px, 100vw"
            className="pointer-events-none object-cover object-[50%_50.8%]"
          />
        </div>
      </div>
    </section>
  );
}
