import { Eyebrow, heading } from "./shared";

const states = [
  { title: "Prepared", text: "Message assembled at source" },
  { title: "Transmitted", text: "Sent by the connector" },
  { title: "Transport-ack", text: "Delivery acknowledged" },
  { title: "Received", text: "Stored by the receiving system" },
  { title: "Reviewed", text: "A responsible person looked at it" },
  { title: "Accepted / actioned", text: "Where the workflow applies" },
];

const recorded = [
  { title: "Originating authority", text: "Who set this state" },
  { title: "Timestamp", text: "When it happened" },
  { title: "Version", text: "Which data version" },
  { title: "Evidence", text: "What proves it" },
];

const exceptions = ["Rejected", "Timed out", "Identity mismatch", "Superseded by correction"];

export default function StatusSemantics() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Data exchange &amp; status semantics</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl md:leading-[48px]`}>
          Six states. None of them is assumed.
        </h2>
        <p className="mb-12 max-w-[720px] text-base leading-7 text-[#5B6B8C]">
          A message being sent does not mean anyone has read it. Each state is recorded on its own and is never
          inferred automatically.
        </p>

        <ol className="relative mb-8 grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-1 rounded bg-gradient-to-r from-[#3D5BD9] to-[#7B5CF0] lg:block"
          />
          {states.map((s, i) => (
            <li key={s.title} className="relative text-center">
              <span
                className={`relative mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-[3px] bg-white text-xs font-semibold text-[#16245A] ${
                  i < 3 ? "border-[#3D5BD9]" : "border-[#7B5CF0]"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className={`${heading} text-base text-[#16245A]`}>{s.title}</p>
              <p className="text-xs leading-5 text-[#5B6B8C]">{s.text}</p>
            </li>
          ))}
        </ol>

        <dl className="grid grid-cols-1 overflow-hidden rounded-md border border-[#243B73] sm:grid-cols-2 lg:grid-cols-4">
          {recorded.map((r, i) => (
            <div
              key={r.title}
              className={`px-5 py-5 ${i < recorded.length - 1 ? "border-b border-[#E4E7F2] lg:border-b-0 lg:border-r" : ""}`}
            >
              <dt className={`${heading} text-base text-[#16245A]`}>{r.title}</dt>
              <dd className="text-sm text-[#5B6B8C]">{r.text}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          <span className="text-sm font-semibold text-[#16245A]">Exceptions:</span>
          {exceptions.map((e) => (
            <span
              key={e}
              className="rounded border border-dashed border-[#E3A857] bg-[#FFF6E9] px-2.5 py-1 text-xs text-[#8A5A12]"
            >
              {e}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
