import { Eyebrow, heading } from "./shared";

const states = [
  { title: "Unknown", text: "No approved information for this place." },
  { title: "Under assessment", text: "Being evaluated — nothing is active." },
  { title: "Authorized pilot", text: "A limited, approved trial." },
  { title: "Operational", text: "Live, with independent evidence." },
];

// No approved registry is connected yet, so every jurisdiction reads "Unknown".
const jurisdictions = ["United States", "United Kingdom", "Canada", "European Union", "India", "Other"];

export default function ProgramStates() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Program eligibility &amp; geographic truth</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl text-[#16245A] md:text-4xl`}>
          Four program states, independently proven.
        </h2>

        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {states.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-[#E4E7F2] bg-white px-5 py-4 shadow-[0_4px_0_#E4E9F2]"
            >
              <h3 className={`${heading} mb-1 text-base text-[#16245A]`}>{s.title}</h3>
              <p className="text-sm leading-6 text-[#5B6B8C]">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 rounded-2xl border border-dashed border-[#B9C3EE] px-6 py-8 sm:flex-row sm:items-end sm:gap-7 lg:px-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="jurisdiction" className={`${heading} text-base text-[#16245A]`}>
              Jurisdiction
            </label>
            <select
              id="jurisdiction"
              defaultValue=""
              className="w-full rounded-lg border border-[#C9D0E4] bg-[#EFEFEF] px-4 py-3 text-sm text-[#16245A] sm:w-64"
            >
              <option value="" disabled>
                Choose a jurisdiction
              </option>
              {jurisdictions.map((j) => (
                <option key={j} value={j}>
                  {j}
                </option>
              ))}
            </select>
          </div>
          <p className="pb-3 text-sm text-[#5B6B8C]" aria-live="polite">
            Status: Unknown. States come only from an approved registry.
          </p>
        </div>
      </div>
    </section>
  );
}
