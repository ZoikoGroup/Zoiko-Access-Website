import Image from "next/image";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Lead, Title, inner, sectionPad } from "./ui";

const fields = [
  { text: "Organization name" },
  { text: "Organization type" },
  {
    text: "Country or region (from an approved list)",
    m: ["Country or region (from an approved", "list)"],
  },
  { text: "Contact name" },
  { text: "Professional work email" },
  { text: "Role or title (optional)" },
  { text: "Inquiry topic" },
  {
    text: "Brief context (optional, 500 characters)",
    m: ["Brief context (optional, 500", "characters)"],
  },
  { text: "Privacy acknowledgement" },
];

export default function SafeShare() {
  return (
    <section
      className={`w-full bg-[#f1eefe] py-14 lg:bg-[linear-gradient(180deg,#ede8ff_0%,#c1b1fd_100%)] lg:py-[70px] ${sectionPad}`}
    >
      <div
        className={`${inner} flex flex-col items-center gap-[48px] lg:flex-row lg:min-h-[806px] lg:items-end lg:justify-center`}
      >
        <div className="flex w-full flex-col items-start gap-[9px] pb-[15.99px] lg:min-w-0 lg:flex-1 lg:gap-[10px] lg:pb-[2px]">
          <Eyebrow>What an organization may safely share</Eyebrow>
          <Title>
            <Copy
              text="Only what an inquiry needs, never health information"
              d={["Only what an inquiry needs,", "never health information"]}
              m={["Only what an inquiry", "needs, never health", "information"]}
            />
          </Title>
          <Lead className="max-w-[626px] pt-[3.99px] lg:pt-[9.19px]">
            <Copy
              text="This is what the form would ask for if a channel is open for your region. Today it is not open here, so no form is shown."
              d={[
                "This is what the form would ask for if a channel is open for your region.",
                "Today it is not open here, so no form is shown.",
              ]}
              m={[
                "This is what the form would ask for if a",
                "channel is open for your region. Today it is not",
                "open here, so no form is shown.",
              ]}
            />
          </Lead>

          <ul className="flex w-full flex-col gap-[10px] pt-[11px] lg:pt-[10px]">
            {fields.map((field) => (
              <li
                key={field.text}
                className="relative flex min-h-[48px] items-center rounded-[14px] border border-solid border-[#e1dbf9] bg-white py-[13.5px] pl-[52px] pr-[16px] text-[16px] font-normal leading-[26.4px] text-[#1b1750] drop-shadow-[0_6px_8px_rgba(27,23,80,0.06)]"
              >
                <span
                  className="absolute left-[16px] top-1/2 flex size-[24px] -translate-y-1/2 items-center justify-center rounded-[12px] bg-[#f1eefe]"
                  aria-hidden="true"
                >
                  <span className="relative size-[13px]">
                    <Image
                      src="/institutional-team/icon-check.svg"
                      alt=""
                      fill
                      sizes="13px"
                      className="object-fill"
                    />
                  </span>
                </span>
                <Copy text={field.text} m={field.m} />
              </li>
            ))}
          </ul>

          <p className="w-full max-w-[666px] pt-[11px] text-[16px] font-normal leading-[26.4px] text-[#575387] lg:hidden">
            <strong className="font-bold text-[#1b1750]">
              It will never ask for:
            </strong>{" "}
            <Copy
              text="patient names or dates of birth, symptoms, diagnoses or images, insurance numbers, appointment requests, referral details or attachments."
              m={[
                "patient names or dates of",
                "birth, symptoms, diagnoses or images,",
                "insurance numbers, appointment requests,",
                "referral details or attachments.",
              ]}
            />
          </p>
        </div>

        <div className="relative aspect-[351/421] w-full shrink-0 overflow-hidden rounded-[26px] bg-[linear-gradient(137.88deg,#8e7bef_0%,#08176d_100%)] shadow-[0_24px_56px_rgba(27,23,80,0.25)] lg:aspect-auto lg:min-w-0 lg:flex-1 lg:self-end lg:h-[679px]">
          <FigmaImage
            src="/institutional-team/share-coordinator.webp"
            alt="A healthcare coordinator wearing a mask, with a stethoscope"
            box={{ top: -12.5, height: 125 }}
            sizes="(min-width: 1024px) 620px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
