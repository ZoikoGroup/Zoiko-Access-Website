import { SectionHeader, container, section } from "./shared";

const states = [
  { state: "observed", stated: "The authorized source recorded an event.", never: "Every subscriber received it." },
  { state: "published", stated: "The publisher accepted a schema-valid event.", never: "The receiving system has processed it." },
  { state: "queued", stated: "Delivery is pending or scheduled.", never: "Clinical work is being performed." },
  {
    state: "attempted",
    stated: "A connection was tried; evidence recorded.",
    never: "The signature was accepted or the handler finished.",
  },
  {
    state: "acknowledged",
    stated: "Transport receipt confirmed under contract.",
    never: "Review, workflow acceptance or medical action.",
  },
  { state: "processed", stated: "The subscriber reports processing, if supported.", never: "A clinician has acted." },
  { state: "failed", stated: "Delivery is unresolved; remediation needed.", never: "Successful completion." },
  {
    state: "superseded",
    stated: "A correction references the earlier version.",
    never: "The earlier version can be silently overwritten.",
  },
];

const th = "px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide";

export default function EventLifecycle() {
  return (
    <section id="lifecycle" className={`bg-white ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Example event lifecycle"
          title="What each state says, and what it never means."
          intro="Published, queued, attempted, acknowledged, processed. No state implies clinical acceptance."
        />

        <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E4E7F2] bg-white pt-7">
          <table className="w-full min-w-[680px] border-collapse text-sm">
            <thead>
              <tr>
                <th scope="col" className={`${th} w-48 bg-[#F5F8FC] text-[#5B6B8C]`}>
                  State
                </th>
                <th scope="col" className={`${th} bg-[#EAF7EF] text-[#1F7A47]`}>
                  May be stated
                </th>
                <th scope="col" className={`${th} bg-[#FDEEEB] text-[#A63D2F]`}>
                  Never inferred
                </th>
              </tr>
            </thead>
            <tbody>
              {states.map((s) => (
                <tr key={s.state} className="border-t border-[#E4E7F2]">
                  <th scope="row" className="px-5 py-4 text-left font-semibold text-[#16245A]">
                    <span className="mr-2.5 inline-block h-2 w-2 rounded-full bg-[#7B5CF0]" aria-hidden="true" />
                    {s.state}
                  </th>
                  <td className="px-5 py-4 leading-6 text-[#2A3550]">{s.stated}</td>
                  <td className="bg-[#FFF8F6] px-5 py-4 leading-6 text-[#A63D2F]">{s.never}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
