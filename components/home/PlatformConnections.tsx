import Image from "next/image";

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
    <section className="w-full bg-[#f8fafc] font-sans">
      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-[60px] lg:py-[70px]">
        <p className="inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#5B3FD1]">
          <span
            className="block h-2 w-2 rounded-full bg-[#7C5CE8]"
            aria-hidden="true"
          />
          Platform connections
        </p>

        <h2 className="mt-5 text-[36px] font-bold leading-[1.1] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
          Connected steps.
          <br />
          Clear responsibilities.
        </h2>

        <p className="mt-6 max-w-[1000px] text-[17px] leading-[1.7] text-[#4B5563]">
          Discovery, requests, provider decisions, and follow-up depend on the
          responsible source and authorized local service.
        </p>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-6">
          <ul className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pl-[30px]">
            {STEPS.map((step) => (
              <li
                key={step.tag}
                className="rounded-t-[20px] border-t-2 border-[#1F5FC9] px-5 pb-6 pt-8"
              >
                <p className="text-[14px] font-semibold tracking-[0.02em] text-[#6D4AD8]">
                  {step.tag}
                </p>
                <h3 className="mt-5 text-[24px] font-semibold leading-snug tracking-[-0.02em] text-[#23327A]">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-[300px] text-[16px] leading-[1.7] text-[#4B5563]">
                  {step.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="relative mx-auto aspect-[4/3] w-full max-w-[640px] lg:max-w-none">
            <Image
              src="/home/11.png"
              alt="Isometric illustration of connected healthcare steps around a central cloud"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
