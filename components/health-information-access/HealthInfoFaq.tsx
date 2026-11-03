import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is there one record with all my health information?",
    a: "No. Each organization keeps its own record. Access is source by source, where authorized.",
  },
  {
    q: "Can I see my records today?",
    a: "Only where the service is enabled, the source takes part, and local rules allow it.",
  },
  {
    q: "Why is a source “not connected”?",
    a: "It isn't participating yet. That doesn't mean no record exists — ask the source directly.",
  },
  {
    q: "Who corrects a mistake in my record?",
    a: "The organization that holds the record. Corrections are requested from the source.",
  },
  {
    q: "Can Zoiko Access explain my results?",
    a: "No. Questions about what a result means should go to your provider.",
  },
];

export default function HealthInfoFaq() {
  return (
    <section className="bg-[#0B1460] px-6 py-16 font-sans text-white lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-[1px] w-8 bg-white/60" />
          <span className="text-xs font-bold uppercase tracking-wider text-white/80">
            Questions, answered
          </span>
        </div>
        <h2 className="mb-10 text-3xl font-extrabold tracking-tight md:text-4xl">
          Health information access, plainly.
        </h2>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group rounded-xl border border-white/15 bg-white/5 px-6 py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold md:text-base [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="h-4 w-4 shrink-0 group-open:hidden" aria-hidden="true" />
                <Minus className="hidden h-4 w-4 shrink-0 group-open:block" aria-hidden="true" />
              </summary>
              <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-white/75">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
