import { Eyebrow, heading } from "./shared";

const yes = "text-[#1E7A4C]";
const no = "text-[#A32020]";

const actors = [
  { actor: "Data custodian", responsible: "Holding and protecting source data", approve: "Yes, within law and policy", approveClass: yes, never: "Hands over ownership" },
  { actor: "Ethics committee", responsible: "Independent ethical review", approve: "Approves ethics, not data release", approveClass: yes, never: "Is implied by this page" },
  { actor: "Researcher", responsible: "Conducting the approved study", approve: "No", approveClass: no, never: "Uses data beyond the approved purpose" },
  { actor: "Sponsor", responsible: "Funding and study oversight", approve: "No", approveClass: no, never: "Gains record access by sponsoring" },
  { actor: "Clinician / provider", responsible: "Clinical care and judgment", approve: "Not on behalf of the custodian", approveClass: no, never: "Hands clinical duty to research" },
  { actor: "Participant", responsible: "Their own choices and consent", approve: "Where consent is the lawful basis", approveClass: yes, never: "Loses their rights by taking part" },
];

export default function InstitutionalRoles() {
  return (
    <section id="roles" className="scroll-mt-24 bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Data custodian &amp; institutional roles</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>
          Six actors whose powers never merge.
        </h2>
        <p className="mb-6 text-base leading-7 text-[#5B6B8C]">
          Source systems keep ownership and accountability where applicable.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-[#E4E7F2] bg-white p-2.5 shadow-[0_10px_30px_rgba(36,59,115,0.08)]">
          <table className="w-full min-w-[760px] text-left">
            <thead className="bg-[#F8F9FD]">
              <tr className="text-xs font-bold uppercase tracking-wide text-[#7B5CF0]">
                <th scope="col" className="px-4 py-4">Actor</th>
                <th scope="col" className="px-4 py-4">Responsible for</th>
                <th scope="col" className="px-4 py-4">Can approve access?</th>
                <th scope="col" className="px-4 py-4">Never</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E4E7F2] border-t border-[#E4E7F2] text-sm">
              {actors.map((a) => (
                <tr key={a.actor}>
                  <th scope="row" className={`${heading} px-4 py-4 text-[#16245A]`}>{a.actor}</th>
                  <td className="px-4 py-4 text-[#2A3550]">{a.responsible}</td>
                  <td className={`px-4 py-4 font-semibold ${a.approveClass}`}>{a.approve}</td>
                  <td className="px-4 py-4 text-[#2A3550]">{a.never}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
