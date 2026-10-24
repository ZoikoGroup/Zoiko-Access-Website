import Copy from "./Copy";
import FigmaImage, { type ImageBox } from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lead, Title, head, inner, sectionPad } from "./ui";

const parties: {
  title: string;
  text: string;
  d?: string[];
  m?: string[];
  src: string;
  box: ImageBox;
  mbox: ImageBox;
}[] = [
  {
    title: "Treating clinicians",
    text: "Diagnosis, treatment, review and prescribing.",
    d: ["Diagnosis, treatment, review and", "prescribing."],
    src: "role-clinicians",
    box: { left: -12.45, width: 124.9 },
    mbox: { top: -0.53, height: 101.06 },
  },
  {
    title: "Healthcare organizations",
    text: "Service delivery and their own records.",
    d: ["Service delivery and their own", "records."],
    src: "role-organizations",
    box: { top: -40.16, height: 180.33 },
    mbox: { top: -63.8, height: 227.61 },
  },
  {
    title: "Zoiko Access",
    text: "Informational technical coordination only.",
    d: ["Informational technical", "coordination only."],
    src: "role-zoiko-access",
    box: { left: -12.45, width: 124.9 },
    mbox: { top: -0.53, height: 101.06 },
  },
  {
    title: "The institutional team",
    text: "Cannot diagnose, prioritize, prescribe or accept referrals.",
    d: ["Cannot diagnose, prioritize,", "prescribe or accept referrals."],
    m: ["Cannot diagnose, prioritize, prescribe or", "accept referrals."],
    src: "role-institutional-team",
    box: { left: -12.64, width: 125.28 },
    mbox: { top: -0.38, height: 100.75 },
  },
];

export default function ResponsibilityCards() {
  return (
    <section className={`w-full bg-white py-14 lg:py-[70px] ${sectionPad}`}>
      <div className={`${inner} ${head}`}>
        <Eyebrow>Governance and patient-safety boundary</Eyebrow>
        <Title>
          <Copy
            text="Who is responsible for what"
            m={["Who is responsible for", "what"]}
          />
        </Title>
        <Lead className="max-w-[626px]">
          <Copy
            text="Treating clinicians and healthcare organizations stay accountable for care. Technical coordination is separate."
            d={[
              "Treating clinicians and healthcare organizations stay accountable for care.",
              "Technical coordination is separate.",
            ]}
            m={[
              "Treating clinicians and healthcare",
              "organizations stay accountable for care.",
              "Technical coordination is separate.",
            ]}
          />
        </Lead>

        <ul className="grid w-full gap-[22px] pb-[14px] pt-[18.8px] sm:grid-cols-2 lg:grid-cols-4 lg:justify-between lg:gap-[0px] lg:gap-x-[0px] lg:pt-[18px] xl:gap-x-[0px]">
          {parties.map((party) => (
            <li
              key={party.title}
              className="overflow-hidden rounded-[24px] bg-white shadow-[0_12px_30px_rgba(27,23,80,0.12)] max-lg:border max-lg:border-solid max-lg:border-[#e1dbf9] lg:mx-auto lg:w-full lg:max-w-[313px] lg:drop-shadow-[0_12px_15px_rgba(27,23,80,0.12)] lg:shadow-none"
            >
              <div className="relative h-[230px] w-full overflow-hidden rounded-t-[120px] bg-[linear-gradient(138.54deg,#8e7bef_0%,#08176d_100%)]">
                <FigmaImage
                  src={`/institutional-team/${party.src}.webp`}
                  box={party.box}
                  mbox={party.mbox}
                  sizes="(min-width: 1024px) 313px, 90vw"
                />
              </div>
              <div className="flex flex-col items-center gap-[6px] px-[18px] pb-[22px] pt-[17px] text-center">
                <h3
                  className={`${fontPoppins} pb-[0.7px] text-[17.6px] font-semibold leading-[19.71px] text-[#1b1750]`}
                >
                  {party.title}
                </h3>
                <p className="text-[14.4px] font-normal leading-[23.76px] text-[#575387]">
                  <Copy text={party.text} d={party.d} m={party.m} />
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="w-full rounded-r-[14px] border-l-4 border-solid border-[#a28dfa] bg-white px-[18px] pb-[14px] pt-[28.81px] text-[15.2px] font-normal leading-[25px] text-[#575387] drop-shadow-[0_6px_9px_rgba(27,23,80,0.06)] lg:hidden">
          <strong className="font-bold text-[#1b1750]">
            Emergencies stay local.
          </strong>{" "}
          <Copy
            text="Use the emergency services appropriate to your location. This page does not collect medical questions or offer triage, and no phone number is shown unless it is verified."
            m={[
              "Use the",
              "emergency services appropriate to your",
              "location. This page does not collect",
              "medical questions or offer triage, and no",
              "phone number is shown unless it is",
              "verified.",
            ]}
          />
        </p>
      </div>
    </section>
  );
}
