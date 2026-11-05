import { Eyebrow, IMG, heading } from "./shared";

const legend = [
  { title: "Institutions", text: "Each one keeps its own authoritative record." },
  { title: "Integration layer", text: "Moves only the scope that has been permitted and contracted." },
  { title: "Authorized receiver", text: "Gets the information and decides what to do with it." },
  { title: "Audit boundary", text: "Every exchange is logged with source, time and version." },
];

function Institution({ name }: { name: string }) {
  return (
    <div className="text-center">
      <div className="rounded-lg border border-[#5B7BE0] bg-[#243B73] px-4 py-5 font-semibold text-white">
        Institution {name}
      </div>
      <p className="mt-2 text-xs text-[#C9D3F5]">source of record</p>
    </div>
  );
}

export default function ArchitectureSource() {
  return (
    <section
      className="bg-[#1B2A8C] bg-cover bg-center px-6 py-16 lg:px-16"
      style={{ backgroundImage: `url(${IMG}/bg-architecture.webp)` }}
    >
      <div className="mx-auto w-full max-w-[1220px]">
        <Eyebrow light num="07">
          Architecture &amp; source of truth
        </Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-white md:text-4xl md:leading-[48px]`}>
          Federated systems. No national master record.
        </h2>
        <p className="mb-10 max-w-[720px] text-base leading-7 text-[#C9D3F5]">
          Each institution keeps its own record. The integration layer passes only what has been permitted, and
          everything is logged inside an audit boundary.
        </p>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,736px)_1fr]">
          <figure
            aria-label="Diagram: two institutions send permitted data through an integration layer to an authorized receiver, all inside an audit boundary"
            className="rounded-xl border border-dashed border-white/50 p-6 sm:p-8"
          >
            <p className="mb-4 text-sm uppercase tracking-wide text-[#C9D3F5]">Audit boundary</p>
            <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:gap-0">
              <div className="space-y-8">
                <Institution name="A" />
                <Institution name="B" />
              </div>

              {/* Curved connectors from both institutions into the integration layer. */}
              <svg
                aria-hidden="true"
                viewBox="0 0 60 200"
                className="hidden h-[200px] w-[60px] sm:block"
                fill="none"
                stroke="#C9D3F5"
                strokeWidth="1.5"
              >
                <path d="M0 45 C 35 45, 25 90, 60 90" />
                <path d="M0 155 C 35 155, 25 110, 60 110" />
              </svg>

              <div className="text-center">
                <div className="rounded-xl bg-[#7B5CF0] px-4 py-10 font-semibold text-white">Integration layer</div>
                <p className="mt-2 text-xs text-[#C9D3F5]">permitted scope only</p>
              </div>

              <svg aria-hidden="true" viewBox="0 0 60 10" className="hidden w-[60px] sm:block" stroke="#C9D3F5">
                <line x1="0" y1="5" x2="60" y2="5" strokeWidth="1.5" />
              </svg>

              <div className="rounded-lg bg-white px-4 py-5 text-center font-semibold text-[#16245A]">
                Authorized receiver
              </div>
            </div>
          </figure>

          <div>
            <ul className="space-y-4">
              {legend.map((l) => (
                <li key={l.title} className="flex gap-4">
                  <span aria-hidden="true" className="mt-0.5 h-8 w-8 shrink-0 rounded border border-white/40" />
                  <div>
                    <p className="text-sm font-semibold text-white">{l.title}</p>
                    <p className="text-sm leading-6 text-[#C9D3F5]">{l.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-md border border-dashed border-white/30 bg-white/5 px-4 py-3 text-xs leading-5 text-[#C9D3F5]">
              Illustrative only. This is not a diagram of a live deployment and does not describe one combined
              national record.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
