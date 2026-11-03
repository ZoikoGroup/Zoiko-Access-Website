import { Eyebrow, IMG, heading } from "./shared";

const owners = [
  {
    title: "NGO support",
    text: "Nonclinical guidance and practical help. No access to clinical records.",
    tag: "Navigation",
  },
  {
    title: "Licensed provider",
    text: "Clinical decisions and the clinical record. Never delegated to the NGO.",
    tag: "Clinical care",
  },
  {
    title: "Individual or guardian",
    text: "Choices, consent and the right to withdraw where law permits.",
    tag: "Consent",
  },
  {
    title: "Platform coordination",
    text: "Designed to support permitted handoffs and status — nothing more.",
    tag: "Coordination",
  },
];

export default function OwnershipMatrix() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#9F86FF] via-[#5B3FD0] to-[#3A23A8] px-6 py-16 text-white lg:px-16">
      <div className="mx-auto grid w-full max-w-[1220px] grid-cols-1 items-start gap-10 lg:grid-cols-12">
        <img
          src={`${IMG}/ownership-team.webp`}
          alt="Two colleagues high-fiving at a meeting table"
          className="h-80 w-full rounded-md object-cover lg:col-span-5 lg:h-[638px]"
        />

        <div className="lg:col-span-7">
          <Eyebrow light>Ownership matrix</Eyebrow>
          <h2 className={`${heading} py-4 text-3xl md:text-5xl`}>Who owns what.</h2>

          <dl>
            {owners.map((o) => (
              <div
                key={o.title}
                className="flex flex-col gap-2 border-b border-white/40 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-5"
              >
                <div>
                  <dt className={`${heading} text-lg`}>{o.title}</dt>
                  <dd className="text-sm leading-6 text-[#D6DCF5]">{o.text}</dd>
                </div>
                <span className="shrink-0 text-xs font-bold uppercase tracking-wide text-[#D8CCFF]">
                  {o.tag}
                </span>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
