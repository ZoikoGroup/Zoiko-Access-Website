import { ShieldCheck } from "lucide-react";
import { IMG, SectionHeader, heading } from "./shared";

const boundaries = [
  { title: "Identity", text: "Every participant in a review is verified and named." },
  {
    title: "Consent",
    text: "Decided by the responsible organization under its own legal duties, never by this framework.",
  },
  {
    title: "Patient information",
    text: "No patient records are used in public intake or shown in any review material.",
    highlight: true,
  },
];

export default function AccessBoundary() {
  return (
    <section
      className="bg-[#16245A] bg-cover bg-center px-6 py-16 lg:px-16 lg:py-20"
      style={{ backgroundImage: `url(${IMG}/bg-boundary.webp)` }}
    >
      <div className="mx-auto grid w-full max-w-[1340px] grid-cols-1 items-center gap-12 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-28">
        {/* Shield illustration inside a translucent frame */}
        <div aria-hidden="true" className="mx-auto hidden w-full max-w-[390px] bg-white/5 p-9 lg:block">
          <div className="flex aspect-[320/340] items-center justify-center rounded-[48%_48%_44%_44%/38%_38%_60%_60%] bg-gradient-to-b from-[#7B5CF0] to-[#4A68D8] shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <ShieldCheck className="h-28 w-28 text-white" strokeWidth={1.6} />
          </div>
        </div>

        <div>
          <SectionHeader
            light
            eyebrow="Security, privacy & access boundary"
            title="Evaluation never opens patient data."
            intro="The framework controls identity, consent and patient information as boundaries, not as features to test."
          />
          <dl className="mt-8 space-y-3">
            {boundaries.map((b) => (
              <div
                key={b.title}
                className={`grid grid-cols-1 gap-1 rounded-lg border px-6 py-5 backdrop-blur-sm sm:grid-cols-[200px_1fr] sm:gap-6 ${
                  b.highlight ? "border-white/30 bg-white/15" : "border-white/20 bg-white/10"
                }`}
              >
                <dt className={`${heading} text-base ${b.highlight ? "text-[#FFD8A8]" : "text-white"}`}>{b.title}</dt>
                <dd className="text-sm leading-6 text-[#D7DEF5]">{b.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
