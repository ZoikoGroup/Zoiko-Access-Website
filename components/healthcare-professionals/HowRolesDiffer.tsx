import SectionHeading from "./SectionHeading";

const caveat =
  "Rules vary by location, service, qualifications, supervision, and coverage arrangements.";

const rows = [
  {
    family: "Primary care",
    focus: "General consultations and continuing care.",
    settings: "Primary-care and community settings.",
  },
  {
    family: "Specialist care",
    focus: "Specialist assessment and care within an authorized scope.",
    settings: "Specialist clinics and hospital services.",
  },
  {
    family: "Nursing",
    focus: "Care delivery, patient education, and coordination.",
    settings: "Hospitals, clinics, homes, and community settings.",
  },
  {
    family: "Allied health",
    focus: "Profession-specific support and rehabilitation.",
    settings: "Clinical, rehabilitation, and community settings.",
  },
  {
    family: "Mental health",
    focus: "Professional mental-health care and support.",
    settings: "Community, clinic, and hospital services.",
  },
  {
    family: "Dental",
    focus: "Oral-health assessment, care, and support.",
    settings: "Dental practices and relevant care organizations.",
  },
  {
    family: "Pharmacy",
    focus: "Medicine-related guidance and authorized pharmacy services.",
    settings: "Community, hospital, and other authorized pharmacy settings.",
  },
];

export default function HowRolesDiffer() {
  return (
    <section className="w-full bg-[#F5F8FC] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="How roles differ"
          title="Different roles, different responsibilities."
          description="A professional title alone may not tell you which services a person can provide. Scope, supervision, referrals, and settings depend on local rules and individual credentials."
        />

        <div className="mt-9 overflow-x-auto">
          <table className="w-full min-w-[820px] table-fixed border-collapse text-left">
            <caption className="pb-4 text-left text-[12px] leading-5 text-[#5E6B85]">
              General comparisons, not a guide to which professional you need
            </caption>
            <thead className="bg-[#EEEAFE]">
              <tr>
                {[
                  "Role family",
                  "Typical focus",
                  "Common settings",
                  "Referral / scope caveat",
                ].map((heading) => (
                  <th
                    key={heading}
                    scope="col"
                    className="border-b border-[#E5E7EB] px-4 py-5 text-[12px] font-bold leading-5 text-[#23327A]"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.family} className="border-b border-[#E5E7EB]">
                  <th
                    scope="row"
                    className="px-4 pb-5 pt-4 align-top text-[14px] font-bold leading-6 text-[#23327A]"
                  >
                    {row.family}
                  </th>
                  <td className="px-4 pb-5 pt-4 align-top text-[13px] leading-6 text-[#5E6B85]">
                    {row.focus}
                  </td>
                  <td className="px-4 pb-5 pt-4 align-top text-[13px] leading-6 text-[#5E6B85]">
                    {row.settings}
                  </td>
                  <td className="px-4 pb-5 pt-4 align-top text-[13px] leading-6 text-[#5E6B85]">
                    {caveat}
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
