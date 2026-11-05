import { Eyebrow, heading } from "./shared";

// Each layer is narrower than the one above it, like a funnel.
const layers = [
  { title: "All health information", text: "Held by its source organizations", className: "w-full bg-[#7B5CF0]" },
  { title: "Purpose-bound", text: "Only what the research purpose covers", className: "w-[81%] bg-[#5B5FD6]" },
  { title: "Minimum necessary", text: "Only the fields needed", className: "w-[63%] bg-[#4169D6]" },
  { title: "Controlled access", text: "Authorized, logged, reviewed", className: "w-[45%] min-w-[240px] bg-[#253B73] text-center" },
];

export default function DataBoundaries() {
  return (
    <section id="data-boundaries" className="scroll-mt-24 bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <ol className="flex flex-col items-center gap-3">
          {layers.map((l) => (
            <li key={l.title} className={`rounded-2xl px-6 py-5 text-white ${l.className}`}>
              <p className={`${heading} text-lg leading-7`}>{l.title}</p>
              <p className="text-sm leading-6 opacity-90">{l.text}</p>
            </li>
          ))}
        </ol>

        <div>
          <Eyebrow>Research data boundaries</Eyebrow>
          <h2 className={`${heading} mb-4 text-3xl text-[#16245A] md:text-[44px] md:leading-[1.15]`}>
            Access narrows at every step.
          </h2>
          <p className="text-base leading-7 text-[#5B6B8C]">
            There is no open record search or upload. Where governance status is unknown, it&apos;s
            shown as unverified — never as approved.
          </p>
        </div>
      </div>
    </section>
  );
}
