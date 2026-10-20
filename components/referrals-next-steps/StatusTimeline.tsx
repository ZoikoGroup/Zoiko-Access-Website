import Image from "next/image";
import SectionHeading from "./SectionHeading";

const events = [
  {
    title: "Sent",
    text: "Sent by the referring organization. Transport is not implied.",
    tags: ["Source: referring organization", "Occurred: specimen time"],
    recorded: true,
  },
  {
    title: "Delivered to system",
    text: "Delivered to a technical destination. Not clinician-reviewed.",
    tags: ["Source: transport receipt", "Received: specimen time"],
    recorded: true,
  },
  {
    title: "Acknowledged",
    text: "Acknowledged by the receiving organization. No clinical inference.",
    tags: ["Source: receiving organization", "Evidence: record pointer"],
    recorded: true,
  },
  {
    title: "Clinically reviewed",
    text: "Not recorded. A review is shown only with a qualified clinical source event.",
    tags: ["Source: none yet", "Status: not confirmed"],
    recorded: false,
  },
];

export default function StatusTimeline() {
  return (
    <section className="w-full bg-white py-[70px]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,700fr)_minmax(0,368px)] lg:justify-between lg:gap-x-16 lg:px-[70px]">
        <div>
          <SectionHeading
            badge="Status timeline"
            title={
              <>
                Every event shows its
                <br className="hidden sm:block" /> source and its time
              </>
            }
            description="Each event carries a plain label, the organization that supplied it, when it occurred, when we received it, and the evidence behind it. Out-of-order events keep the source’s chronology."
          />

          <ol className="relative mt-4">
            <span className="absolute bottom-6 left-[9px] top-3 w-0.5 bg-[#D9D0FB]" aria-hidden="true" />
            {events.map((event) => (
              <li key={event.title} className="relative flex gap-5 pb-4 last:pb-0">
                <span
                  className={`relative z-10 mt-1 h-5 w-5 shrink-0 rounded-full ${
                    event.recorded ? "bg-[#5B3FD1]" : "border-2 border-[#B9A6F9] bg-white"
                  }`}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-[18px] font-semibold text-[#1D1A5A] [font-family:var(--font-poppins)]">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-[15px] text-[#5B5880]">{event.text}</p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#DCD3FB] bg-white px-3 py-1 text-[13px] font-medium text-[#5B3FD1]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative mx-auto aspect-[368/659] w-full max-w-[260px] sm:max-w-[368px]">
          <Image
            src="/referrals-next-steps/status-timeline.webp"
            alt="Illustrated timeline of a referral moving from initiated to processed, uploaded, verified and completed"
            fill
            sizes="368px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
