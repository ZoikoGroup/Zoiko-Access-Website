import SectionHeading from "./SectionHeading";

const states = [
  {
    title: "Initiated / drafted",
    description:
      "A referral is being considered or prepared. It may not have been submitted.",
  },
  {
    title: "Submitted",
    description: "An authorized process has been used to send the request.",
  },
  {
    title: "Received",
    description:
      "The destination reports receipt. This does not establish clinical review.",
  },
  {
    title: "Under review",
    description:
      "The relevant review is reported by its authoritative source; its scope must be clear.",
  },
  {
    title: "Accepted for next step",
    description:
      "The receiving organization agrees to a defined next step, not necessarily an appointment.",
  },
  {
    title: "Further information required",
    description:
      "The responsible organization identifies an additional information requirement.",
  },
  {
    title: "Not accepted",
    description:
      "The receiving service has not accepted the relevant request; ask the responsible team about its decision.",
  },
  {
    title: "Withdrawn / closed",
    description:
      "The source reports withdrawal or closure, according to that workflow.",
  },
  {
    title: "Unknown",
    description:
      "The status is not confirmed. Missing or stale information must not be assumed to mean success.",
  },
  {
    title: "Appointment confirmed",
    description:
      "A separate explicit appointment confirmation has been issued by the responsible service.",
    highlight: true,
  },
];

export default function StatusLiteracy() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="Status literacy"
          title="Know what a referral status really means."
          description="Sent means dispatched; delivered or received means technical or administrative receipt. Acceptance, clinical review, and appointment confirmation require their own evidence."
        />

        <dl className="mt-9 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#E5E7EB] lg:grid-cols-2">
          {states.map((state, index) => (
            <div
              key={state.title}
              className={`grid grid-cols-1 gap-x-6 gap-y-1 border-[#E5E7EB] px-6 py-6 sm:grid-cols-[minmax(0,210px)_minmax(0,1fr)] [&:not(:last-child)]:border-b lg:odd:border-r lg:[&:nth-last-child(2)]:border-b-0 ${
                state.highlight ? "bg-[#EEEAFE]" : "bg-white"
              }`}
            >
              <p className="text-[9px] font-bold uppercase leading-4 tracking-wide text-[#6A44D4] sm:col-span-2">
                {String(index + 1).padStart(2, "0")} / Conceptual state
              </p>
              <dt className="self-center text-[18px] font-bold leading-6 tracking-[-0.02em] text-[#23327A] [font-family:var(--font-poppins)]">
                {state.title}
              </dt>
              <dd className="self-center text-[13px] leading-6 text-[#5E6B85]">
                {state.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
