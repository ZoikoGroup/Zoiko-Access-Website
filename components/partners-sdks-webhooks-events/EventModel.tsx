import { X } from "lucide-react";
import { IMG, SectionHeader, container, heading, section } from "./shared";

const nodes = [
  { step: "01 · source", title: "Authoritative system", text: "Records that something changed." },
  { step: "02 · publisher", title: "Event publisher", text: "Validates the event against its schema." },
  { step: "03 · delivery", title: "Delivery queue", text: "Holds and sends it to approved subscribers." },
  { step: "04 · subscriber", title: "Approved endpoint", text: "Receives it and owns what happens next." },
];

const notes = ["Not a patient-data feed", "Not a live transaction", "Receipt is not clinical review"];

export default function EventModel() {
  return (
    <section
      id="event-model"
      className={`bg-[#16245A] bg-cover bg-center ${section}`}
      style={{ backgroundImage: `url(${IMG}/bg-model.webp)` }}
    >
      <div className={container}>
        <SectionHeader
          light
          eyebrow="Webhook & events model"
          title="From source event to accountable next step."
          intro="The path an event would take. This is an illustration, not a live transaction or patient-data feed."
        />

        <ol className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-white/20 md:grid-cols-4">
          {nodes.map((n, i) => (
            <li
              key={n.step}
              className={`relative px-6 pb-10 pt-9 ${
                i === nodes.length - 1 ? "bg-[#7B5CF0]/20" : "bg-white/5"
              } ${i > 0 ? "border-t border-white/20 md:border-l md:border-t-0" : ""}`}
            >
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-0 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/20 bg-[#1E2C6E] md:left-0 md:top-1/2 md:block"
                />
              )}
              <p className="text-xs text-[#B9C6F5]">{n.step}</p>
              <h3 className={`${heading} mt-2 text-lg text-white`}>{n.title}</h3>
              <p className="mt-1 text-sm leading-6 text-[#D7DEF5]">{n.text}</p>
            </li>
          ))}
        </ol>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {notes.map((n) => (
            <li key={n} className="flex items-center gap-1.5 text-sm text-[#D7DEF5]">
              <X className="h-3.5 w-3.5 text-[#F2A07B]" aria-hidden="true" />
              {n}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
