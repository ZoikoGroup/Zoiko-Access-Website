import { Eyebrow, heading } from "./shared";

const roles = [
  {
    verb: "Sends",
    title: "Referring clinician",
    owns: "The decision to refer and what is sent.",
    limitLabel: "Escalates when",
    limit: "No acknowledgment arrives in time.",
    header: "from-[#1E3A8A] to-[#3B5BDB]",
  },
  {
    verb: "Accepts",
    title: "Receiving team",
    owns: "Care, once it explicitly accepts.",
    limitLabel: "Escalates when",
    limit: "It can't accept the handoff.",
    header: "from-[#1E6E4E] to-[#2A9D78]",
  },
  {
    verb: "Reviews",
    title: "Clinical reviewer",
    owns: "The clinical review decision.",
    limitLabel: "Escalates when",
    limit: "Urgent concerns appear.",
    header: "from-[#5B3FD0] to-[#7B5CF0]",
  },
  {
    verb: "Coordinates",
    title: "Network coordinator",
    owns: "Network rules and follow-up of stalled handoffs.",
    limitLabel: "Never",
    limit: "Makes clinical decisions.",
    header: "from-[#1F2937] to-[#475569]",
  },
];

export default function AccountableRoles() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Care accountability &amp; escalation</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl text-[#16245A] md:text-4xl`}>
          Four accountable roles in every handoff.
        </h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((r) => (
            <article
              key={r.title}
              className="overflow-hidden rounded-2xl border border-[#E4E7F2] bg-white shadow-[0_10px_30px_rgba(36,59,115,0.08)]"
            >
              <header className={`bg-gradient-to-r ${r.header} px-5 py-4 text-white`}>
                <p className="text-xs uppercase leading-4 tracking-wider opacity-80">{r.verb}</p>
                <h3 className={`${heading} text-lg leading-6`}>{r.title}</h3>
              </header>
              <dl className="space-y-3 px-5 py-4">
                <div>
                  <dt className={`${heading} text-xs font-bold uppercase tracking-wide text-[#1E7A4C]`}>Owns</dt>
                  <dd className="text-sm leading-6 text-[#2A3550]">{r.owns}</dd>
                </div>
                <div>
                  <dt className={`${heading} text-xs font-bold uppercase tracking-wide text-[#C0262D]`}>
                    {r.limitLabel}
                  </dt>
                  <dd className="text-sm leading-6 text-[#2A3550]">{r.limit}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
