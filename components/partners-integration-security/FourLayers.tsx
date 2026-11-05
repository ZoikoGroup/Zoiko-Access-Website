import { SectionHeader, container, heading, section } from "./shared";

// Listed bottom-up: Identity is the foundation, Oversight sits on top.
const layers = [
  { title: "Identity", text: "Who or what is connecting, verified.", color: "bg-[#7B5CF0]" },
  { title: "Authority", text: "What that identity is allowed to do, and why.", color: "bg-[#4A68D8]" },
  { title: "Data protection", text: "Only permitted data, protected in transit and at rest.", color: "bg-[#243B73]" },
  { title: "Operational oversight", text: "Monitoring, audit and the ability to revoke.", color: "bg-[#0E1640]" },
];

const stackLabels = ["Identity", "Authority", "Data protection", "Oversight"];

export default function FourLayers() {
  return (
    <section id="architecture" className={`bg-[#F5F8FC] ${section}`}>
      <div className={`${container} grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
        {/* Stacked, tilted slabs: decorative version of the list on the right. */}
        <div aria-hidden="true" className="relative mx-auto hidden aspect-[5/4] w-full max-w-[560px] md:block">
          {[...stackLabels].reverse().map((label, i) => (
            <div
              key={label}
              className={`${heading} absolute left-[8%] flex h-[17%] w-[84%] items-center justify-center rounded-2xl text-lg text-white shadow-[0_22px_30px_rgba(14,22,64,0.25)] [transform:rotate(-19deg)_skewX(28deg)] ${
                ["bg-[#0E1640]", "bg-[#243B73]", "bg-[#4A68D8]", "bg-[#7B5CF0]"][i]
              }`}
              style={{ top: `${14 + i * 17}%` }}
            >
              {/* Inverse of the slab transform, so the label reads level. */}
              <span className="[transform:skewX(-28deg)_rotate(19deg)]">{label}</span>
            </div>
          ))}
        </div>

        <div>
          <SectionHeader
            eyebrow="Four-layer architecture"
            title="Four distinct layers. Each one must hold."
            intro="An illustrative model. Passing one layer never skips the next."
          />
          <ol className="mt-6 space-y-3.5">
            {layers.map((l, i) => (
              <li key={l.title} className="flex gap-4 rounded-2xl border border-[#E4E7F2] bg-white px-5 py-4">
                <span className={`w-3.5 shrink-0 rounded-sm ${l.color}`} aria-hidden="true" />
                <div>
                  <h3 className={`${heading} text-base text-[#16245A]`}>
                    {i + 1} · {l.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#5B6B8C]">{l.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
