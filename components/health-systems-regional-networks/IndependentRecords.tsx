import { Eyebrow, heading } from "./shared";

// Four organizations at the corners of a square, joined by dashed lines.
const nodes = [
  { name: "Hospital", x: 20, y: 22 },
  { name: "Clinic", x: 80, y: 22 },
  { name: "Lab", x: 20, y: 78 },
  { name: "Community care", x: 80, y: 78 },
];

export default function IndependentRecords() {
  return (
    <section className="bg-gradient-to-r from-[#111A4A] to-[#2337A6] px-6 py-16 text-white lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow light>Collaboration vs central record</Eyebrow>
          <h2 className={`${heading} mb-4 text-3xl md:text-4xl md:leading-[48px]`}>
            Connected organizations.
            <br />
            Independent records.
          </h2>
          <p className="max-w-[560px] text-base leading-7 text-white/80">
            Each organization owns its record. Governed exchange moves only what&apos;s
            authorized — there is no unified national master record in the middle.
          </p>
        </div>

        <figure
          className="relative mx-auto aspect-[647/461] w-full max-w-[560px]"
          aria-label="Hospital, clinic, lab and community care each keep their own record, with no central record between them"
        >
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <g stroke="#8FA2F0" strokeOpacity="0.7" strokeWidth="0.35" strokeDasharray="1.4 1.2" vectorEffect="non-scaling-stroke" fill="none">
              <line x1="20" y1="22" x2="80" y2="22" />
              <line x1="20" y1="78" x2="80" y2="78" />
              <line x1="20" y1="22" x2="20" y2="78" />
              <line x1="80" y1="22" x2="80" y2="78" />
              <line x1="20" y1="22" x2="80" y2="78" />
            </g>
          </svg>

          {nodes.map((n) => (
            <div
              key={n.name}
              className="absolute flex h-[28%] w-auto -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-[#7F93F0] bg-[#22306E] px-2 text-center"
              style={{ left: `${n.x}%`, top: `${n.y}%`, aspectRatio: "1 / 1" }}
            >
              <span className="text-sm font-bold leading-tight sm:text-base">{n.name}</span>
              <span className="text-xs text-[#B9C6F7] sm:text-sm">own record</span>
            </div>
          ))}

          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-[#1C2A82]/70 px-1 text-sm font-bold text-[#F7A99E] sm:text-base">
            ✕ no central record
          </span>
        </figure>
      </div>
    </section>
  );
}
