import { Activity, Ban, Clock, Copy, ListX, ShieldX, Undo2 } from "lucide-react";
import { SectionHeader, container, heading, section } from "./shared";

const exceptions = [
  { icon: Ban, title: "Unauthorized request", response: "Denied and logged; nothing is sent." },
  { icon: ListX, title: "Mapping mismatch", response: "Held for review; never guessed." },
  { icon: Clock, title: "Stale status", response: "Shown as unconfirmed; owner alerted." },
  { icon: Copy, title: "Duplicate event", response: "Recognized and applied only once." },
  { icon: ShieldX, title: "Revocation", response: "Access ends immediately; teams told." },
  { icon: Activity, title: "Outage", response: "Shown as unavailable; local procedures apply." },
];

export default function ExceptionsRollback() {
  return (
    <section className={`bg-gradient-to-br from-[#EEEAFE] to-white ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Exceptions & rollback"
          title="When something fails, it rolls back safely."
          intro="Six exceptions and the safe response to each."
        />

        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {exceptions.map(({ icon: Icon, title, response }) => (
            <li key={title} className="overflow-hidden rounded-2xl border border-[#E4E7F2] bg-white">
              <div className="flex items-center gap-3.5 px-5 py-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FDEDE8]">
                  <Icon className="h-5 w-5 text-[#C2462B]" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className={`${heading} text-base text-[#16245A]`}>{title}</h3>
              </div>
              <p className="flex items-center gap-2.5 border-t border-dashed border-[#E4E7F2] bg-[#FAFAFE] px-5 py-3.5 text-sm text-[#243B5A]">
                <Undo2 className="h-4 w-4 shrink-0 text-[#7B5CF0]" aria-hidden="true" />
                {response}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
