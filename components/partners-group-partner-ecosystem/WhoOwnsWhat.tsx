import { Accent, IMG, SplitHeader, container, heading, section } from "./shared";

const rows = [
  { role: "Sponsoring institution", owns: "Owns authorization", means: "Decides whether a connection may exist and for what purpose." },
  { role: "Technology vendor", owns: "Owns the source application", means: "Keeps its own system, records and change control." },
  { role: "System integrator", owns: "Implements", means: "Builds and tests the connection inside the approved scope." },
  { role: "Receiving provider", owns: "Accepts the next step", means: "Decides whether to accept, review and act on what arrives." },
];

export default function WhoOwnsWhat() {
  return (
    <section
      className={`bg-[#F1F0FD] bg-cover bg-center ${section}`}
      style={{ backgroundImage: `url(${IMG}/bg-ownership.webp)` }}
    >
      <div className={container}>
        <SplitHeader
          eyebrow="Scope & responsibility"
          title={
            <>
              Who owns <Accent>what</Accent>
            </>
          }
          intro="Zoiko Access coordinates. Independent source systems, destination providers and partner services keep their own responsibilities."
        />

        <div className="mt-10 overflow-x-auto rounded-2xl bg-white shadow-[0_10px_30px_rgba(22,36,90,0.08)]">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <thead className={`${heading} bg-[#243B73] text-white`}>
              <tr>
                <th scope="col" className="px-7 py-5 font-medium">Role</th>
                <th scope="col" className="px-7 py-5 font-medium">Responsibility</th>
                <th scope="col" className="px-7 py-5 font-medium">What that means</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.role} className="border-b border-[#E4E7F2]">
                  <th scope="row" className={`${heading} px-7 py-4 font-medium text-[#16245A]`}>{r.role}</th>
                  <td className={`${heading} px-7 py-4 font-medium text-[#16245A]`}>{r.owns}</td>
                  <td className="px-7 py-4 text-[#2A3550]">{r.means}</td>
                </tr>
              ))}
              <tr className="bg-[#F1EEFD]">
                <th scope="row" className={`${heading} px-7 py-4 font-medium text-[#16245A]`}>Zoiko Access</th>
                <td className={`${heading} px-7 py-4 font-medium text-[#16245A]`}>Coordinates within scope</td>
                <td className="px-7 py-4 text-[#2A3550]">
                  Coordinates permitted information flow; does not own records or clinical decisions.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
