import Eyebrow, { headingFont } from "./Eyebrow";

const states = [
  {
    title: "Request drafted",
    owner: "Originator",
    text: "Not yet sent.",
    limit: "No destination acknowledgment",
    color: "#16245A",
  },
  {
    title: "Sent",
    owner: "Sending organization",
    text: "A transport attempt exists.",
    limit: "Not a provider acknowledgment",
    color: "#3D5BD9",
  },
  {
    title: "Received",
    owner: "Receiving endpoint",
    text: "Receipt evidence only.",
    limit: "Not review or acceptance",
    color: "#4A4FD8",
  },
  {
    title: "Reviewed",
    owner: "Receiving workflow owner",
    text: "Only with an authoritative signal.",
    limit: 'Never inferred from "opened"',
    color: "#7C5CFC",
  },
  {
    title: "Accepted / actioned",
    owner: "Authorized provider",
    text: "An explicit acceptance record.",
    limit: "Not completed care",
    color: "#9A85F5",
  },
];

const outcomes = [
  {
    title: "Action completed",
    text: "Needs completion proof and a date — no clinical outcome is inferred.",
  },
  {
    title: "Rejected / needs information",
    text: "The destination gives a reason and an approved next step.",
  },
  {
    title: "Unavailable / uncertain",
    text: "Shown as unknown — never as success.",
  },
];

export default function HandoffStates() {
  return (
    <section
      id="handoffs"
      className="w-full scroll-mt-24 bg-white py-16 font-sans sm:py-20"
    >
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-16">
        <Eyebrow>Community-to-clinical handoff</Eyebrow>
        <h2
          className={`mt-3.5 text-3xl font-semibold leading-tight text-[#16245A] sm:text-4xl sm:leading-[48px] ${headingFont}`}
        >
          Five states. Only one means accepted.
        </h2>
        <p className="mt-3.5 max-w-[760px] text-base leading-7 text-[#5B6478]">
          A conceptual timeline. Transmitted, received or read never equals
          clinical acceptance, and corrected messages keep their history.
        </p>

        <ol className="relative mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {/* Connecting line (desktop) */}
          <span
            className="absolute left-[10%] right-[10%] top-[30px] hidden h-1 rounded-full bg-gradient-to-r from-[#16245A] via-[#4A4FD8] to-[#B7A6FF] lg:block"
            aria-hidden="true"
          />
          {states.map((s, i) => (
            <li
              key={s.title}
              className="relative flex flex-col items-center text-center"
            >
              <span
                className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-4 border-white text-base font-semibold text-white shadow-[0_0_0_2px_rgba(124,92,252,0.25)]"
                style={{ backgroundColor: s.color }}
              >
                {i + 1}
              </span>
              <h3
                className={`mt-4 text-lg font-semibold text-[#16245A] ${headingFont}`}
              >
                {s.title}
              </h3>
              <span className="mt-1.5 rounded-full bg-[#E8EEFC] px-2.5 py-1 text-xs font-semibold text-[#16245A]">
                {s.owner}
              </span>
              <p className="mt-2 text-sm leading-6 text-[#5B6478]">{s.text}</p>
              <p className="mt-1 text-sm leading-6 text-[#9B1C1C]">{s.limit}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {outcomes.map((o) => (
            <div
              key={o.title}
              className="rounded-2xl border border-[#C9BFFB] bg-[#D2C8FC] px-5 py-4"
            >
              <h3 className="text-base font-semibold text-[#16245A]">
                {o.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#2B3550]">{o.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
