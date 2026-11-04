import { Eyebrow, heading } from "./shared";

const states = [
  { title: "Unsupported", text: "Not planned or not possible", className: "bg-[#8A93A6]" },
  { title: "Research", text: "Being studied", className: "bg-[#6E7FB8]" },
  { title: "Assessment", text: "Formal review under way", className: "bg-[#4169D6]" },
  { title: "Limited-verified", text: "Small approved scope", className: "bg-[#7B5CF0]" },
  { title: "Operational", text: "Approved and running", className: "bg-[#253B73]" },
  { title: "Suspended", text: "Paused after an issue", className: "bg-[#5C3D2E]" },
];

// No approved registry is connected yet, so choosing a market changes nothing.
const markets = ["United States", "United Kingdom", "Canada", "European Union", "India", "Other"];

export default function CoverageStatus() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="mb-10 grid grid-cols-1 items-end gap-6 lg:grid-cols-2">
          <div>
            <Eyebrow>Coverage &amp; release status</Eyebrow>
            <h2 className={`${heading} text-3xl text-[#16245A] md:text-[44px] md:leading-[1.15]`}>
              Global intent is not global coverage.
            </h2>
          </div>
          <p className="text-base leading-7 text-[#5B6B8C]">
            Every market sits in one of six states from an approved registry. There is no generic
            &quot;global&quot; badge.
          </p>
        </div>

        <ol className="mb-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {states.map((s) => (
            <li key={s.title} className={`min-h-36 px-4 py-6 text-white ${s.className}`}>
              <h3 className={`${heading} mb-2 text-base`}>{s.title}</h3>
              <p className="text-sm text-white/85">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="grid grid-cols-1 items-center gap-6 rounded-3xl border border-[#E4E7F2] bg-white p-8 shadow-[0_20px_40px_rgba(22,36,90,0.08)] md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="vendor-market" className="text-base font-bold text-[#16245A]">
              Check a market
            </label>
            <select
              id="vendor-market"
              defaultValue=""
              className="w-full rounded-xl border border-[#E4E7F2] bg-white px-4 py-3 text-base text-[#16245A]"
            >
              <option value="" disabled>
                Select a market
              </option>
              {markets.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <p className="rounded-2xl bg-[#EEEAFE] px-5 py-4 text-sm text-[#2E2A8C]">
            No market is shown as operational until the registry confirms it.
          </p>
        </div>
        <p className="mt-6 text-sm text-[#5B6B8C]">
          States come from the approved registry only. Unknown markets are treated as unsupported.
        </p>
      </div>
    </section>
  );
}
