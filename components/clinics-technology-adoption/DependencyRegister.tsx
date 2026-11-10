import { SectionHeader, container, heading, section } from "./shared";

const deps = [
  { name: "Partner approval", meaning: "A signed, approved partnership", owner: "Partnerships & legal" },
  { name: "Scoped workflows", meaning: "Exactly which workflows, for whom", owner: "Clinical owner" },
  { name: "Local policy", meaning: "Institution and regional rules", owner: "Institution governance" },
  { name: "Source interfaces", meaning: "Working, tested interfaces to source systems", owner: "IT owner" },
  { name: "Service-level ownership", meaning: "Who supports what, and when", owner: "Operations" },
];

export default function DependencyRegister() {
  return (
    <section className={`bg-gradient-to-br from-[#1A1F8F] via-[#2A2BC9] to-[#6A48F0] ${section}`}>
      <div className={container}>
        <SectionHeader
          dark
          eyebrow="Operational dependency register"
          title="What has to be true first."
          intro="Five dependencies, each with an owner. None is verified for any institution today."
        />

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[720px] border-separate border-spacing-y-2.5 text-left text-sm">
            <thead>
              <tr className="text-xs font-semibold uppercase tracking-widest text-white/70">
                <th scope="col" className="px-7 pb-1">Dependency</th>
                <th scope="col" className="px-5 pb-1">What it means</th>
                <th scope="col" className="px-5 pb-1">Owner</th>
                <th scope="col" className="px-5 pb-1">Status</th>
              </tr>
            </thead>
            <tbody>
              {deps.map((d) => (
                <tr key={d.name} className="bg-white/10 text-white shadow-[4px_4px_0_rgba(20,24,110,0.6)]">
                  <th scope="row" className={`${heading} rounded-l-xl border-y border-l border-white/20 px-7 py-4 text-center`}>
                    {d.name}
                  </th>
                  <td className="border-y border-white/20 px-5 py-4 text-white/85">{d.meaning}</td>
                  <td className="border-y border-white/20 px-5 py-4 text-white/85">{d.owner}</td>
                  <td className="rounded-r-xl border-y border-r border-white/20 px-5 py-4">
                    <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-[#FFE3B0]">
                      not verified
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
