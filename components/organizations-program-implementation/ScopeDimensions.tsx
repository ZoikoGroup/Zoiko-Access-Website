import { Eyebrow, heading } from "./shared";

const dimensions = [
  { key: "cohort", title: "Program cohorts", text: "Who the program serves." },
  { key: "locality", title: "Locality", text: "Where it applies." },
  { key: "channel", title: "Channel", text: "How people take part." },
  { key: "provider_scope", title: "Provider scope", text: "Which licensed providers." },
  { key: "services", title: "Available services", text: "What is offered." },
];

// No approved release registry is connected yet, so choosing a location changes nothing.
const locations = ["United States", "United Kingdom", "Canada", "European Union", "India", "Other"];

export default function ScopeDimensions() {
  return (
    <section className="bg-[#F1F1F1] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Program scope &amp; geography</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>Five configuration dimensions.</h2>
        <p className="mb-8 max-w-[740px] text-base leading-7 text-[#5B6B8C]">
          Each is defined separately. Coverage stays &quot;unknown&quot; until an approved release
          registry confirms it.
        </p>

        <div className="mb-3.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
          {dimensions.map((d) => (
            <div key={d.key} className="rounded-2xl border border-dashed border-[#A9B8F2] bg-white p-4">
              <p className="font-mono text-xs font-bold text-[#3B5BDB]">{d.key}</p>
              <h3 className={`${heading} pt-0.5 text-base text-[#16245A]`}>{d.title}</h3>
              <p className="text-sm leading-6 text-[#5B6B8C]">{d.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3.5 rounded-2xl border border-[#E4E7F2] bg-white px-5 py-4">
          <label htmlFor="coverage-location" className="text-base font-semibold text-[#16245A]">
            Coverage check
          </label>
          <select
            id="coverage-location"
            defaultValue=""
            className="min-h-11 min-w-60 rounded-[10px] border border-[#C9D0E4] bg-[#EFEFEF] px-4 text-base text-[#16245A]"
          >
            <option value="" disabled>
              Choose a location
            </option>
            {locations.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
          <p className="min-w-60 flex-1 text-sm text-[#5B6B8C]">
            Coverage status: unknown. No map of live coverage is shown.
          </p>
        </div>
      </div>
    </section>
  );
}
