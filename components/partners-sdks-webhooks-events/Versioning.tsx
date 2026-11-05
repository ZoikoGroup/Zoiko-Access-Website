import { SectionHeader, container, heading, section } from "./shared";

const states = [
  { title: "Preview", text: "Testing only. May change." },
  { title: "Supported", text: "Safe to build on." },
  { title: "Deprecated", text: "Still works. Notice given to move." },
  { title: "Retired", text: "No longer available." },
];

const registries = ["Event schema versions", "SDK versions"];

export default function Versioning() {
  return (
    <section id="versioning" className={`bg-white ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Versioning & compatibility"
          title="Versions move through four states."
          intro="Event and SDK versions follow this path. Dates come only from the registry, so none are shown."
        />

        <div className="relative mt-10">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-3 hidden h-1 rounded md:block"
            style={{
              backgroundImage: "linear-gradient(90deg,#8EE3C8 0%,#4A68D8 30%,#8E83A8 50%,#E3A857 72%,#C9D3E5 100%)",
            }}
          />
          <ol className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {states.map((s) => (
              <li key={s.title}>
                <span
                  aria-hidden="true"
                  className="mb-3 block h-7 w-7 rounded-full border-[3px] border-[#16245A] bg-white"
                />
                <h3 className={`${heading} text-lg text-[#16245A]`}>{s.title}</h3>
                <p className="text-sm leading-6 text-[#5B6B8C]">{s.text}</p>
                <p className="mt-2 text-xs text-[#9AA3BD]">dates: —</p>
              </li>
            ))}
          </ol>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {registries.map((r) => (
            <li key={r} className="rounded-xl border border-dashed border-[#C9D3E5] px-5 py-6">
              <h3 className={`${heading} text-base text-[#16245A]`}>{r}</h3>
              <p className="text-sm text-[#5B6B8C]">No published versions in the registry.</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
