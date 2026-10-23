import Image from "next/image";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    tag: "01 / DISCOVER",
    title: "Understand options",
    text: "Published information identifies its source and local scope.",
  },
  {
    tag: "02 / REQUEST",
    title: "Use an approved route",
    text: "Requests and referrals require separately authorized services.",
  },
  {
    tag: "03 / CONFIRM",
    title: "The partner decides",
    text: "Submission does not imply an accepted referral or a booked slot.",
  },
  {
    tag: "04 / FOLLOW UP",
    title: "The team takes the next step",
    text: "Confirmed updates belong to the responsible provider.",
  },
] as const;

export default function PlatformConnections() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-[60px] lg:py-16">
        <SectionHeading
          badge="Platform connections"
          title={
            <>
              Connected steps.
              <br />
              Clear responsibilities.
            </>
          }
          description="Discovery, requests, provider decisions, and follow-up depend on the responsible source and authorized local service."
        />

        <div className="mt-6 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,646fr)_minmax(0,501fr)] lg:gap-x-[100px]">
          <ul className="grid grid-cols-1 gap-x-[25px] gap-y-8 sm:grid-cols-2 lg:pl-[29px]">
            {STEPS.map((step) => (
              <li
                key={step.tag}
                className="rounded-t-[14px] border-t-2 border-[#1F5FC9] px-2.5 pb-4 pt-6"
              >
                <p className="text-[11px] font-bold tracking-[0.02em] text-[#7E5CFE]">
                  {step.tag}
                </p>
                <h3 className="mt-4 text-[18px] font-bold leading-snug tracking-[-0.01em] text-[#243B73]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[270px] text-[13px] leading-[22px] text-[#526174]">
                  {step.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="relative mx-auto aspect-[501/376] w-full max-w-[501px]">
            <Image
              src="/home/platform-connections.webp"
              alt="Isometric illustration of connected healthcare steps around a central cloud"
              fill
              sizes="(min-width: 1024px) 501px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
