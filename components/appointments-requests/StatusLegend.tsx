import { CalendarDays, CircleCheck, Clock3, FileText } from "lucide-react";
import PhotoCard from "./PhotoCard";
import SectionHeading from "./SectionHeading";

const statuses = [
  {
    icon: Clock3,
    title: "Requested",
    text: "Request submitted. Awaiting the responsible organization’s response. This is not a confirmed appointment.",
    pill: "bg-[#FFF3DC] border-[#F2C977] text-[#7A4A00]",
    dot: "bg-[#7A4A00]",
    next: { label: "Next step:", value: "Organization" },
    image: { src: "/appointments-requests/status-requested.webp", alt: "Smartphone home screen" },
  },
  {
    icon: CalendarDays,
    title: "Held",
    text: "Time held temporarily, subject to the organization’s rules. The hold is not a confirmed appointment.",
    pill: "bg-[#EEEAFE] border-[#C9BCF7] text-[#4C2DB8]",
    dot: "bg-[#6A44D4]",
    next: { label: "Next step:", value: "You or the organization" },
    image: { src: "/appointments-requests/status-held.webp", alt: "Coffee cup on an open planner" },
  },
  {
    icon: FileText,
    title: "Pending",
    text: "Action pending with the organization. Check the next step and the most recent verified update.",
    pill: "bg-[#E7EDFF] border-[#B9C8F5] text-[#1F3BB0]",
    dot: "bg-[#1F3BB0]",
    next: { label: "Next step:", value: "Shown on each item" },
    image: { src: "/appointments-requests/status-pending.webp", alt: "Two surgeons at work" },
  },
  {
    icon: CircleCheck,
    title: "Confirmed",
    text: "Confirmed by [verified organization] for [localized date/time], last verified [timestamp].",
    pill: "bg-[#E4F6EC] border-[#A8DDBE] text-[#11643A]",
    dot: "bg-[#11643A]",
    next: null,
    image: { src: "/appointments-requests/status-confirmed.webp", alt: "Clinician holding a phone" },
  },
];

export default function StatusLegend() {
  return (
    <section id="status-legend" className="w-full scroll-mt-24 bg-white py-[90px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Status legend"
          title="Four states, never mixed up"
          description="Each status uses a label, an icon and a plain explanation, so it never depends on color alone."
        />

        <div className="mt-10 grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {statuses.map((status) => (
            <PhotoCard
              key={status.title}
              image={status.image}
              icon={status.icon}
              title={status.title}
              aspect="aspect-[307/178]"
              sizes="(min-width: 1024px) 307px, (min-width: 640px) 50vw, 100vw"
            >
              <p className="mt-3 text-[15px] leading-6 text-[#2C3352]">
                {status.text}
              </p>
              <span
                className={`mt-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[13px] font-semibold ${status.pill}`}
              >
                <span className={`h-2 w-2 rounded-full ${status.dot}`} aria-hidden="true" />
                {status.title}
              </span>
              <div className="min-h-4 flex-1" aria-hidden="true" />
              <p className="mt-4 border-t border-dashed border-[#DCD6F5] pt-4 text-[15px] leading-6 text-[#5B6180]">
                {status.next ? (
                  <>
                    {status.next.label}{" "}
                    <strong className="font-semibold text-[#0E1E6E]">
                      {status.next.value}
                    </strong>
                  </>
                ) : (
                  "Only the responsible organization can confirm."
                )}
              </p>
            </PhotoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
