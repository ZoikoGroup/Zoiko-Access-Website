import { Eyebrow, heading } from "./shared";

const roles = [
  {
    area: "Policy",
    title: "Public sponsor",
    may: "Set program goals within its mandate.",
    mustNot: "Clinical record access through sponsorship.",
    header: "from-[#334155] to-[#475569]",
  },
  {
    area: "Legal powers",
    title: "Statutory authority",
    may: "Act on specifically validated legal powers.",
    mustNot: "Unrestricted live data access everywhere.",
    header: "from-[#1E3A8A] to-[#2563EB]",
  },
  {
    area: "Care",
    title: "Clinical provider",
    may: "Diagnose, treat and refer.",
    mustNot: "Duty transfers automatically on digital receipt.",
    header: "from-[#5B3FD0] to-[#7B5CF0]",
  },
  {
    area: "Operations",
    title: "Service operator",
    may: "Run the service as contracted.",
    mustNot: "Authority to decide on data use.",
    header: "from-[#334155] to-[#475569]",
  },
  {
    area: "Data",
    title: "Data steward",
    may: "Approve legitimate use, sharing, access and retention.",
    mustNot: "Authority borrowed from a website click.",
    header: "from-[#1E3A8A] to-[#2563EB]",
  },
  {
    area: "Oversight",
    title: "Privacy regulator",
    may: "Oversee lawful processing under its jurisdiction.",
    mustNot: "Endorsement of any specific program.",
    header: "from-[#5B3FD0] to-[#7B5CF0]",
  },
];

export default function RoleMatrix() {
  return (
    <section id="role-matrix" className="scroll-mt-24 bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Authority &amp; role matrix</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl text-[#16245A] md:text-4xl`}>
          Six roles that must never blur.
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <article
              key={r.title}
              className="overflow-hidden rounded-2xl border border-[#E4E7F2] bg-white shadow-[0_10px_30px_rgba(36,59,115,0.08)]"
            >
              <header className={`bg-gradient-to-r ${r.header} px-5 py-4 text-white`}>
                <p className="text-xs uppercase leading-4 tracking-wider opacity-80">{r.area}</p>
                <h3 className={`${heading} text-lg leading-6`}>{r.title}</h3>
              </header>
              <dl className="space-y-3.5 px-5 py-4">
                <div>
                  <dt className={`${heading} text-xs font-bold uppercase tracking-wide text-[#1E7A4C]`}>
                    May
                  </dt>
                  <dd className="text-sm leading-6 text-[#2A3550]">{r.may}</dd>
                </div>
                <div>
                  <dt className={`${heading} text-xs font-bold uppercase tracking-wide text-[#C0262D]`}>
                    Must not imply
                  </dt>
                  <dd className="text-sm leading-6 text-[#2A3550]">{r.mustNot}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
