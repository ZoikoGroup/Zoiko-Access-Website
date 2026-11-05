import { Fragment } from "react";
import { SectionHeader, container, heading, section } from "./shared";

const path = [
  { mark: "#1", label: "attempt" },
  { mark: "#2", label: "retry", wait: "wait" },
  { mark: "#3", label: "retry", wait: "wait longer" },
  { mark: "DLQ", label: "dead-letter", wait: "limit reached", final: true },
];

const terms = [
  { title: "Retries", text: "Re-sending after a failed attempt." },
  { title: "Idempotency", text: "A repeat delivery has no extra effect." },
  { title: "Dead-letter", text: "Undelivered events held for a person." },
  { title: "Retention", text: "How long events are kept." },
  { title: "Final state", text: "Delivered, or failed and escalated." },
];

export default function DeliveryRetries() {
  return (
    <section id="delivery" className={`bg-[#F5F8FC] ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Delivery guarantees & retries"
          title="Retries have limits. Failure stays visible."
          intro="An illustrative retry path. Exact counts and timings would be agreed per integration."
        />

        <div className="mt-6 rounded-2xl border border-[#E4E7F2] bg-white px-6 py-10 md:px-8">
          <ol className="relative flex items-start overflow-x-auto pb-2" aria-label="Illustrative retry path">
            {path.map((p) => (
              <Fragment key={p.mark}>
                {p.wait && (
                  <li aria-hidden="true" className="relative mt-6 min-w-16 flex-1 border-t-2 border-dashed border-[#C9D3E5]">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-[#5B6B8C]">
                      {p.wait}
                    </span>
                  </li>
                )}
                <li className="flex w-24 shrink-0 flex-col items-center gap-2.5">
                  <span
                    className={`${heading} flex h-12 w-12 items-center justify-center text-sm ${
                      p.final
                        ? "rounded-xl bg-[#16245A] text-white"
                        : "rounded-full border-2 border-[#F2B5A0] bg-[#FFF1EC] text-[#A63D2F]"
                    }`}
                  >
                    {p.mark}
                  </span>
                  <span className="text-xs text-[#5B6B8C]">
                    {p.wait && <span className="sr-only">after {p.wait}: </span>}
                    {p.label}
                  </span>
                </li>
              </Fragment>
            ))}
          </ol>

          <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {terms.map((t) => (
              <div key={t.title} className="rounded-xl bg-[#F5F8FC] px-4 py-4">
                <dt className={`${heading} text-base text-[#16245A]`}>{t.title}</dt>
                <dd className="mt-1 text-sm leading-6 text-[#5B6B8C]">{t.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
