import { SectionHeader, container, heading, section } from "./shared";

const errors = [
  { code: "delivery_failed", title: "Failure", text: "The delivery did not complete.", next: "retry within limits" },
  { code: "timeout", title: "Timeout", text: "No response in the agreed time.", next: "retry, then escalate" },
  {
    code: "destination_unavailable",
    title: "Destination down",
    text: "The subscriber endpoint can't be reached.",
    next: "hold and notify owner",
  },
  {
    code: "invalid_signature",
    title: "Invalid signature",
    text: "The event could not be verified.",
    next: "reject and investigate",
  },
  { code: "retries_exhausted", title: "Retry exhaustion", text: "All attempts used up.", next: "dead-letter, named person" },
];

export default function ErrorRecovery() {
  return (
    <section id="errors" className={`bg-white ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Error & incident recovery"
          title="Five failures, each with a next step."
          intro="Conceptual error types. None of them is ever shown as success."
        />

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {errors.map((e) => (
            <li
              key={e.code}
              className="flex flex-col rounded-2xl border border-[#E3A857] border-t-4 bg-white px-5 pb-5 pt-6"
            >
              <code className="text-xs text-[#A63D2F]">{e.code}</code>
              <h3 className={`${heading} mt-1 text-lg text-[#16245A]`}>{e.title}</h3>
              <p className="mt-1 flex-1 text-sm leading-6 text-[#5B6B8C]">{e.text}</p>
              <p className="mt-5 text-xs font-semibold text-[#243B73]">→ {e.next}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
