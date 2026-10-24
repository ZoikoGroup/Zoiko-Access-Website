import FigmaImage from "./FigmaImage";
import Copy from "./Copy";
import Kicker from "./Kicker";
import SectionTitle from "./SectionTitle";
import { fontPoppins } from "./fonts";

const chips = ["Illustrative process", "Not a promise", "No automatic access"];

const gates = [
  {
    title: "Initial inquiry",
    text: "An institution raises its interest. Accountable: Institutional partnerships team.",
    d: [
      "An institution raises its interest. Accountable: Institutional partnerships",
      "team.",
    ],
  },
  {
    title: "Scope and fit",
    text: "The scope and the care location are discussed. Accountable: Institution sponsor and partnerships.",
    d: [
      "The scope and the care location are discussed. Accountable: Institution",
      "sponsor and partnerships.",
    ],
  },
  {
    title: "Security, privacy and clinical assessment",
    text: "Each review is done by its own owner. Accountable: Clinical lead and security or DPO.",
    d: [
      "Each review is done by its own owner. Accountable: Clinical lead and",
      "security or DPO.",
    ],
  },
  {
    title: "Contract and approvals",
    text: "Agreements and approvals are completed. Accountable: Legal and the institution.",
    d: [
      "Agreements and approvals are completed. Accountable: Legal and the",
      "institution.",
    ],
  },
  {
    title: "Technical configuration and validation",
    text: "Source systems are configured and tested. Accountable: IT integration and Zoiko teams.",
    d: [
      "Source systems are configured and tested. Accountable: IT integration",
      "and Zoiko teams.",
    ],
  },
  {
    title: "Authorized release and governance",
    text: "Release is authorized, and governance continues. Accountable: Institution and Zoiko teams, as agreed.",
    d: [
      "Release is authorized, and governance continues. Accountable:",
      "Institution and Zoiko teams, as agreed.",
    ],
  },
];

export default function SixGates() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:px-12 lg:py-[68.3px]">
      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-center justify-center gap-[48px] lg:flex-row">
        <div className="flex w-full flex-col items-start gap-[10px] pb-[16px] lg:min-w-px lg:flex-1">
          <Kicker>Illustrative process</Kicker>
          <SectionTitle>Six gates, each with an owner</SectionTitle>

          <ul className="flex h-[42.19px] w-full flex-wrap items-start gap-[8px] pt-[9.19px]">
            {chips.map((chip) => (
              <li
                key={chip}
                className="flex self-stretch rounded-full border border-solid border-[#e1dbf9] bg-white px-[14px] py-[4px] text-[13.4px] font-semibold leading-[22.18px] text-[#1b1750]"
              >
                {chip}
              </li>
            ))}
          </ul>

          <ol className="flex w-full flex-col items-start gap-[16px] pt-[10px]">
            {gates.map((gate, index) => (
              <li
                key={gate.title}
                className="relative min-h-[80.53px] w-full pl-[50px]"
              >
                <span
                  className="absolute left-0 top-0 flex size-[34px] items-center justify-center rounded-[17px] bg-[#0023b3] text-[11.8px] font-semibold leading-[normal] text-white"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div className="-mt-px flex flex-col items-start gap-[1px] pb-[0.81px]">
                  <b
                    className={`${fontPoppins} w-full pb-[0.91px] text-[16.3px] font-bold leading-[26.93px] text-[#1b1750]`}
                  >
                    {gate.title}
                  </b>
                  <p className="w-full text-[15px] font-normal leading-[24.75px] text-[#575387]">
                    <Copy text={gate.text} d={gate.d} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative h-[420px] w-full overflow-clip rounded-[26px] bg-[linear-gradient(137.88deg,#8e7bef_0%,#08176d_100%)] shadow-[0px_24px_56px_0px_rgba(27,23,80,0.25)] lg:h-[679.19px] lg:min-w-px lg:flex-1">
          <FigmaImage
            src="/enterprise-onboarding/process-hospital-building.webp"
            alt="A regional hospital building with emergency parking and entrance signs"
            box={{ left: -40.22, width: 180.45 }}
            sizes="(min-width: 1440px) 1130px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
