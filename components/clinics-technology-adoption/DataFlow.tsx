import { SectionHeader, container, heading, section } from "./shared";

// Lanes: 0 = sending institution, 1 = coordination layer, 2 = receiving institution.
const messages = [
  { label: "1 · Request", meta: "owner: sender · t1", from: 0, to: 1, color: "#7B5CF0" },
  { label: "2 · Relay approved context", meta: "owner: layer · t2", from: 1, to: 2, color: "#7B5CF0" },
  { label: "3 · Acknowledgement", meta: "owner: receiver · t3", from: 2, to: 1, color: "#3D5BD9" },
  { label: "4 · Status: received", meta: "not accepted · t4", from: 1, to: 0, color: "#3D5BD9" },
];

const lanes = ["Sending institution", "Coordination layer", "Receiving institution"];

const fields = [
  { title: "Sender", text: "Who sent it" },
  { title: "Receiver", text: "Who it went to" },
  { title: "Timestamp", text: "From the system that did it" },
  { title: "Owner", text: "Who is accountable now" },
];

// Lane centres sit at 1/6, 3/6 and 5/6 of the width (three equal columns).
const centre = (lane: number) => (lane * 2 + 1) / 6;

export default function DataFlow() {
  return (
    <section className={`bg-gradient-to-b from-[#EEEAFE] to-white ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Data flow & provenance"
          title="Request, acknowledgement, status. All traceable."
          intro="An illustrative exchange. Each message records its sender, receiver, time and owner."
        />

        <div className="mt-8 overflow-x-auto rounded-3xl border border-[#E4E7F2] bg-white px-6 pb-6 pt-12">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-3 gap-4">
              {lanes.map((l) => (
                <div key={l} className="px-2">
                  <p className={`${heading} rounded-xl bg-[#F5F8FC] p-2.5 text-center text-sm text-[#16245A]`}>{l}</p>
                </div>
              ))}
            </div>

            <ol className="relative mt-1.5 h-80" aria-label="Illustrative message sequence">
              {lanes.map((l, i) => (
                <span
                  key={l}
                  aria-hidden="true"
                  className="absolute inset-y-0 border-l-2 border-dashed border-[#E4E7F2]"
                  style={{ left: `${centre(i) * 100}%` }}
                />
              ))}
              {messages.map((m, i) => {
                const left = Math.min(centre(m.from), centre(m.to));
                const width = Math.abs(centre(m.to) - centre(m.from));
                const rightward = m.to > m.from;
                return (
                  <li
                    key={m.label}
                    className="absolute"
                    style={{ top: 48 + i * 78, left: `${left * 100}%`, width: `${width * 100}%` }}
                  >
                    <p className="absolute inset-x-0 -top-7 text-center text-xs font-semibold leading-5 text-[#16245A]">
                      {m.label}
                    </p>
                    <span className="relative block h-0.5" style={{ backgroundColor: m.color }} aria-hidden="true">
                      <span
                        className={`absolute -top-[5px] h-0 w-0 border-y-[6px] border-y-transparent ${
                          rightward ? "right-0 border-l-[8px]" : "left-0 border-r-[8px]"
                        }`}
                        style={rightward ? { borderLeftColor: m.color } : { borderRightColor: m.color }}
                      />
                    </span>
                    <p className="absolute inset-x-0 top-2 text-center text-xs text-[#5B6B8C]">{m.meta}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
          {fields.map((f) => (
            <div key={f.title} className="rounded-2xl bg-[#EEEAFE] px-4 py-3.5">
              <p className={`${heading} text-sm font-bold text-[#243B73]`}>{f.title}</p>
              <p className="text-sm text-[#243B73]">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
