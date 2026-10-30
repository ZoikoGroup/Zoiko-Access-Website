import Eyebrow, { headingFont } from "./Eyebrow";

const roles = [
  {
    role: "Patient",
    may: "Read guidance; use patient-owned routes where active",
    never: "Automatic access to every partner record",
  },
  {
    role: "Family / caregiver",
    may: "Read guidance; request verified delegate status",
    never: "Kinship alone grants record access",
  },
  {
    role: "Guardian",
    may: "Act where verified legal authority permits",
    never: "One guardian rule applies everywhere",
  },
  {
    role: "Community coordinator",
    may: "Guide to resources; facilitate consented nonclinical steps",
    never: "Authority to diagnose, prescribe or access full records",
  },
  {
    role: "Licensed clinician / provider",
    may: "Clinical decisions in authorized local systems",
    never: "Zoiko Access takes on professional liability",
  },
];

export default function RolesPermissions() {
  return (
    <section
      id="consent-safeguarding"
      className="w-full scroll-mt-24 bg-white py-16 font-sans sm:py-20"
    >
      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-16">
        <Eyebrow>Permissions, consent &amp; safeguarding</Eyebrow>
        <h2
          className={`mt-3.5 text-3xl font-semibold leading-tight text-[#16245A] sm:text-4xl sm:leading-[48px] ${headingFont}`}
        >
          Each role, its permissions and its limits.
        </h2>
        <p className="mt-3.5 max-w-[760px] text-base leading-7 text-[#5B6478]">
          Only the minimum necessary information, with verification and the
          right to revoke. Nothing is uploaded or captured on this page.
        </p>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-[#E5E8F0] bg-white p-2.5 shadow-[0_10px_30px_rgba(36,59,115,0.08)]">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="bg-[#243B73] text-xs uppercase tracking-wide text-white">
                <th scope="col" className="px-4 py-4 font-medium">
                  Role
                </th>
                <th scope="col" className="px-4 py-4 font-medium">
                  May do (conceptual)
                </th>
                <th scope="col" className="px-4 py-4 font-medium">
                  Must never imply
                </th>
              </tr>
            </thead>
            <tbody>
              {roles.map((r) => (
                <tr
                  key={r.role}
                  className="border-b border-[#E5E8F0] last:border-b-0"
                >
                  <th
                    scope="row"
                    className={`px-4 py-4 text-sm font-semibold text-[#16245A] ${headingFont}`}
                  >
                    {r.role}
                  </th>
                  <td className="px-4 py-4 text-sm text-[#2B3550]">{r.may}</td>
                  <td className="px-4 py-4 text-sm text-[#2B3550]">
                    {r.never}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p
          role="note"
          className="mt-6 rounded-lg border border-[#F1D9A6] border-l-4 border-l-[#B7791F] bg-[#FFF7E8] px-5 py-3 text-sm text-[#4A3300]"
        >
          <strong className="font-semibold">
            Safeguarding concern or emergency?
          </strong>{" "}
          Contact local emergency services or your local safeguarding
          authority. This page cannot respond to urgent situations.
        </p>
      </div>
    </section>
  );
}
