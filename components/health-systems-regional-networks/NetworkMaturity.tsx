import { Eyebrow, heading } from "./shared";

const stages = [
  { label: "Conceptual", className: "bg-[#EEF0F4] text-[#4B5568] border-[#DDE1EA]" },
  { label: "Under evaluation", className: "bg-[#FFF1DC] text-[#8A5A00] border-[#F5DFB8]" },
  { label: "Approved pilot", className: "bg-[#EEEAFE] text-[#5B3FD0] border-[#DCD3FB]" },
  { label: "Operational", className: "bg-[#E3F5EC] text-[#1E7A4C] border-[#C7E8D7]" },
  { label: "Suspended", className: "bg-[#FDECEC] text-[#C0262D] border-[#F6D2D2]" },
];

// No verified partner data is connected yet, so choosing a region changes nothing.
const regions = ["United States", "United Kingdom", "Canada", "European Union", "India", "Other"];

export default function NetworkMaturity() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 overflow-hidden rounded-2xl border border-[#E4E7F2] lg:grid-cols-2">
        <div className="bg-white p-8 lg:p-10">
          <Eyebrow>Coverage &amp; program maturity</Eyebrow>
          <h2 className={`${heading} mb-6 text-3xl text-[#16245A] md:text-[44px] md:leading-[1.15]`}>
            Where is a network at?
          </h2>
          <ul className="flex flex-wrap gap-2.5 rounded-2xl border border-[#E4E7F2] p-5">
            {stages.map((s) => (
              <li key={s.label} className={`rounded-full border px-3 py-1 text-xs font-semibold ${s.className}`}>
                {s.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center gap-2 bg-gradient-to-br from-[#F5F3FF] to-[#E7E1FD] p-8 lg:p-10">
          <label htmlFor="network-region" className={`${heading} text-base text-[#16245A]`}>
            Region
          </label>
          <select
            id="network-region"
            defaultValue=""
            className="w-full rounded-xl border border-[#D6D0F5] bg-white px-4 py-3 text-base text-[#16245A]"
          >
            <option value="" disabled>
              Choose a region
            </option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <p className="text-sm text-[#4B3FC4]">
            No region selected. Maturity comes only from verified partner data.
          </p>
        </div>
      </div>
    </section>
  );
}
