import SectionHeading from "./SectionHeading";

const statuses = [
  {
    title: "Submitted",
    text: "Your message left this page and reached the connected service.",
  },
  {
    title: "Accepted by messaging system",
    text: "The service checked and stored it. No person has opened it yet.",
  },
  {
    title: "Delivered to recipient system",
    text: "The organization’s system has it. Shown only when that system reports it.",
  },
  {
    title: "Seen by authorized recipient",
    text: "Only appears if the organization supports read receipts. Not a clinical decision.",
  },
];

// Illustrative example — not real data.
const history = [
  { title: "Submitted", meta: "Zoiko Access · Oct 14, 9:02 AM", state: "done" },
  { title: "Accepted by messaging system", meta: "Zoiko Access · Oct 14, 9:02 AM", state: "done" },
  { title: "Delivered to recipient system", meta: "Reported by Riverside Family Clinic · Oct 14, 9:04 AM", state: "done" },
  {
    title: "Seen by authorized recipient",
    meta: "This organization doesn’t report read status.",
    state: "unknown",
  },
  { title: "Awaiting reply", meta: "No response time has been published for this service.", state: "pending" },
] as const;

export default function StatusMeaning() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F3F1FE] to-[#D3C8FD] py-[78px]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-end gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,626fr)_minmax(0,625fr)] lg:gap-x-[49px] lg:px-[70px]">
        <div>
          <SectionHeading
            badge="What each status means"
            title={
              <>
                Every update names
                <br className="hidden sm:block" /> who it came from.
              </>
            }
            description="Statuses come from the system that recorded them. We never turn a delivery into a read, or a read into a clinical review."
          />
          <ol className="mt-10 grid grid-cols-1 gap-[19px] sm:grid-cols-2">
            {statuses.map((status, index) => (
              <li
                key={status.title}
                className="rounded-lg border border-[#E4E3EE] bg-white px-5 pb-7 pt-6 shadow-[0_6px_18px_rgba(29,42,107,0.06)]"
              >
                <span className="text-[12px] text-[#5B6180]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 max-w-[200px] text-[17px] font-semibold leading-[21px] text-[#1D2A6B] [font-family:var(--font-poppins)]">
                  {status.title}
                </h3>
                <p className="mt-2 max-w-[220px] text-[14px] leading-[22px] text-[#5B6180]">
                  {status.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-2xl border border-[#E4E3EE] bg-white px-7 pb-8 pt-7 shadow-[0_14px_36px_rgba(29,42,107,0.12)]">
          <h3 className="text-[18px] font-semibold text-[#1D2A6B] [font-family:var(--font-poppins)]">
            Example status history
          </h3>
          <p className="mt-1 text-[14px] text-[#5B6180]">
            Times shown are when the source system recorded each event.
          </p>
          <ol className="relative mt-6">
            <span className="absolute bottom-3 left-[9px] top-3 w-0.5 bg-[#D9D0FB]" aria-hidden="true" />
            {history.map((step) => (
              <li key={step.title} className="relative flex gap-4 pb-5 last:pb-0">
                <span
                  className={`relative z-10 mt-0.5 h-5 w-5 shrink-0 rounded-full ${
                    step.state === "done"
                      ? "bg-[#8B5CF6]"
                      : step.state === "unknown"
                        ? "border-2 border-dashed border-[#B2A9C9] bg-white"
                        : "border-2 border-[#8B5CF6] bg-white"
                  }`}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[14px] font-semibold text-[#1D2A6B]">{step.title}</p>
                  <p className="mt-1.5 text-[13px] text-[#5B6180]">{step.meta}</p>
                  {step.state === "unknown" && (
                    <span className="mt-2 inline-block rounded bg-[#FDF3C7] px-2 py-0.5 text-[13px] text-[#7A5A00]">
                      Unknown, not “unread”
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
