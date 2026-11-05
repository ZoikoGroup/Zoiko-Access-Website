import { SectionHeader, container, heading, section } from "./shared";

const rows = [
  { id: "evt_example_01", actor: "system_a", scope: "purpose_x", decision: "allowed", ok: true },
  { id: "evt_example_02", actor: "system_b", scope: "purpose_y", decision: "denied · scope mismatch", ok: false },
  { id: "evt_example_03", actor: "system_a", scope: "purpose_x", decision: "denied · expired credential", ok: false },
];

const recorded = [
  { title: "Event identifiers", text: "Unique for every action" },
  { title: "Timestamps", text: "When each action happened" },
  { title: "Authorization decisions", text: "Allowed or denied, and why" },
  { title: "Secure retention", text: "Kept safely for an agreed period" },
];

const cell = "px-5 py-4 text-left";

export default function AuditEvidence() {
  return (
    <section className={`bg-white ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Monitoring & audit evidence"
          title="Every decision leaves a trace."
          intro="An illustrative audit trail with placeholder values. It contains no real events and no health data."
        />

        <div className="mt-10 rounded-2xl bg-[#0E1640] px-2.5 pb-2 pt-4">
          <div className="flex flex-wrap justify-between gap-2 px-5 pb-3 text-xs text-white/60">
            <span>audit_trail.example</span>
            <span>illustrative · placeholder values</span>
          </div>
          {/* `relative` keeps the scroll box clipping its own content on small screens. */}
          <div className="relative overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse font-mono text-sm">
              <thead>
                <tr className="border-t border-white/10 text-[#B9C6F5]">
                  {["event_id", "timestamp", "actor", "scope", "decision"].map((h) => (
                    <th key={h} scope="col" className={`${cell} font-normal`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-t border-white/10 text-white/80">
                    <td className={cell}>{r.id}</td>
                    <td className={cell}>YYYY-MM-DDThh:mm:ssZ</td>
                    <td className={cell}>{r.actor}</td>
                    <td className={cell}>{r.scope}</td>
                    <td className={`${cell} ${r.ok ? "text-[#7EE0C3]" : "text-[#F2A07B]"}`}>{r.decision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <dl className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {recorded.map((r) => (
            <div
              key={r.title}
              className="rounded-xl border border-[#E4E7F2] bg-white px-5 py-5 shadow-[0_10px_24px_rgba(36,59,115,0.08)]"
            >
              <dt className={`${heading} text-base text-[#16245A]`}>{r.title}</dt>
              <dd className="text-sm text-[#5B6B8C]">{r.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
