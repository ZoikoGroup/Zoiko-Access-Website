import Eyebrow, { headingFont } from "@/components/community-home-care/Eyebrow";
import PurpleBackdrop from "./PurpleBackdrop";

const rows = [
  {
    activity: "Fit-for-work assessment",
    owner: "Qualified occupational-health professional",
    receive: "An authorized work-related outcome, only where a specific lawful basis and policy permit",
  },
  {
    activity: "Clinical communications",
    owner: "Licensed provider and employee",
    receive: "Nothing clinical",
  },
  {
    activity: "Escalation",
    owner: "Licensed provider, following clinical protocols",
    receive: "Only what law requires",
  },
  {
    activity: "Employer administration",
    owner: "Employer",
    receive: "Program administration and aggregate reports",
  },
];

export default function OhAccountability() {
  return (
    <section
      id="oh-accountability"
      className="relative w-full scroll-mt-24 overflow-hidden py-16 font-sans sm:py-20"
    >
      <PurpleBackdrop />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[72px]">
        <Eyebrow tone="light">Occupational-health accountability</Eyebrow>
        <h2
          className={`mt-3.5 text-3xl font-semibold leading-tight text-white sm:text-4xl sm:leading-[48px] ${headingFont}`}
        >
          Qualified parties own fitness and return-to-work decisions.
        </h2>

        <div className="mt-11 overflow-x-auto rounded-2xl bg-white">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="bg-[#243B73] text-[13px] uppercase tracking-wide text-white">
                <th scope="col" className="w-[18%] px-[18px] py-4 font-medium">Activity</th>
                <th scope="col" className="w-[29%] px-[18px] py-4 font-medium">Owner</th>
                <th scope="col" className="px-[18px] py-4 font-medium">What the employer may receive</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.activity} className="border-b border-[#E5E8F0] last:border-b-0">
                  <th
                    scope="row"
                    className={`px-[28px] py-4 text-[15px] font-semibold text-[#16245A] ${headingFont}`}
                  >
                    {r.activity}
                  </th>
                  <td className="px-[18px] py-4 text-[15px] text-[#2B3550]">{r.owner}</td>
                  <td className="px-[18px] py-4 text-[15px] text-[#2B3550]">{r.receive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
