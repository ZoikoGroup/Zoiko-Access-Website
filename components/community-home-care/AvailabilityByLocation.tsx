import Eyebrow, { headingFont } from "./Eyebrow";

type Row = { label: string; value: string; pending?: boolean };

const rows: Row[] = [
  { label: "Geographic presence", value: "Not yet published", pending: true },
  { label: "Partner presence", value: "Not yet published", pending: true },
  { label: "Scope", value: "Informational care navigation only" },
  { label: "Owner", value: "Coverage & editorial team" },
  { label: "Effective date", value: "Pending verification", pending: true },
  { label: "Last reviewed", value: "Pending verification", pending: true },
];

export default function AvailabilityByLocation() {
  return (
    <section className="relative w-full overflow-hidden py-16 font-sans sm:py-20">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#6E55D6] via-[#8C70EE] to-[#3A1F9E]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[#1F0A78]"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 60% 100%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl shadow-[0_30px_60px_rgba(5,10,40,0.25)] lg:grid-cols-[0.75fr_1fr]">
          <div className="bg-gradient-to-br from-[#1B2A63] to-[#22356F] p-9 text-white">
            <Eyebrow tone="light">Service &amp; market availability</Eyebrow>
            <h2
              className={`mt-3.5 text-3xl font-semibold leading-tight sm:text-[44px] sm:leading-[52px] ${headingFont}`}
            >
              Availability varies by location.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/85">
              Coverage is published only when verified. Your location is never
              used to infer eligibility or coverage.
            </p>
          </div>

          <dl className="bg-white px-9 py-6">
            {rows.map((r) => (
              <div
                key={r.label}
                className="grid grid-cols-1 gap-2 border-b border-[#E5E8F0] py-3.5 sm:grid-cols-[170px_1fr] sm:items-center"
              >
                <dt className="text-sm font-semibold text-[#16245A]">
                  {r.label}
                </dt>
                <dd>
                  {r.pending ? (
                    <span className="inline-block rounded-md bg-[#FFF1D6] px-2.5 py-1.5 text-xs font-semibold text-[#7A4B00]">
                      {r.value}
                    </span>
                  ) : (
                    <span className="text-sm text-[#2B3550]">{r.value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
