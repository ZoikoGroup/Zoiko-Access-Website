import Image from "next/image";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lede, Title, inner, sectionPad } from "./ui";

const events = [
  ["Sent", "The source system transmits the report."],
  ["Received", "The receiving system gets it. This is not review."],
  ["Acknowledged", "The recipient endpoint confirms receipt."],
  ["Assigned for review", "The receiving team assigns it to a clinician."],
  ["Reviewed", "A clinician confirms review."],
  ["Clinical action recorded", "Shown only when the source confirms it."],
];

export default function ReviewEvents() {
  return (
    <section className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start`}>
        <div className="flex w-full flex-col items-start gap-[12.9px]">
          <Eyebrow>Receiving-party handoff and review</Eyebrow>
          <Title className="lg:pt-[2.2px]">
            Six events. No single green tick.
          </Title>
          <Lede className="lg:max-w-none lg:whitespace-nowrap lg:pb-[0.56px]">
            Delivery, acceptance and clinical review stay separate, so no one
            step is shown as overall success.
          </Lede>
        </div>

        <div className="flex w-full flex-col gap-10 pt-[40px] lg:flex-row lg:items-end lg:justify-between lg:gap-[56px] lg:pt-[57px]">
          <ol className="ml-[6px] w-full max-w-[494px] border-l-[3px] border-solid border-[#7657e8] pl-[0px] lg:ml-[6px] lg:h-[448.69px] lg:w-[494px]">
            {events.map(([title, text]) => (
              <li
                key={title}
                className="relative flex flex-col gap-[1.5px] pb-[22.89px] pl-[26px] pt-0 first:-mt-[1px]"
              >
                <span
                  className="absolute left-[-10px] top-[7px] size-[23px] rounded-full border-[3px] border-solid border-[#7657e8] bg-white"
                  aria-hidden="true"
                />
                <b
                  className={`${fontPoppins} text-[16px] font-bold leading-[26.4px] text-[#243b73]`}
                >
                  {title}
                </b>
                <span className="text-[14.1px] font-normal leading-[23.23px] text-[#273444]">
                  {text}
                </span>
              </li>
            ))}
          </ol>

          <div className="relative aspect-[629/472] w-full max-w-[629px] shrink-0 lg:aspect-auto lg:h-[448.69px] lg:w-[629px]">
            <div className="absolute inset-0 lg:bottom-auto lg:-top-[23.31px] lg:h-[472px]">
            <Image
              src="/diagnostics-coordination/events-diagram.webp"
              alt="Diagram of six report events from sent to action recorded, each step separate with no single success tick"
              fill
              sizes="(min-width: 1024px) 629px, 90vw"
              className="object-cover"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
