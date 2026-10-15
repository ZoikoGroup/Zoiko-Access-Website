import {
  ArrowRightLeft,
  Calendar,
  CircleCheck,
  CircleX,
  Inbox,
  Route,
  Search,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const terms = [
  {
    icon: Route,
    title: "Care pathway",
    description: "A possible sequence of care-related steps and handoffs.",
  },
  {
    icon: CircleX,
    title: "Referral",
    description:
      "A permitted handoff or request involving another service or professional.",
  },
  {
    icon: Calendar,
    title: "Appointment request",
    description: "An ask for an appointment, distinct from confirmed scheduling.",
  },
  {
    icon: Inbox,
    title: "Acknowledgment",
    description:
      "An explicit report that something has been received or noticed.",
  },
  {
    icon: Search,
    title: "Review",
    description:
      "A source-reported evaluation; clinical review needs the appropriate authority.",
  },
  {
    icon: CircleCheck,
    title: "Confirmation",
    description:
      "An authoritative statement about a particular accepted or scheduled action.",
  },
  {
    icon: ArrowRightLeft,
    title: "Handoff",
    description:
      "A transfer of authorized information or a task between responsible participants.",
  },
];

export default function UsefulTerms() {
  return (
    <section className="w-full bg-[#F5F8FC] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="A plain-language reference"
          title="Useful terms, without the jargon."
        />

        <dl className="mt-9 grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
          {terms.map((term) => {
            const Icon = term.icon;
            return (
              <div
                key={term.title}
                className="flex gap-4 rounded-xl border border-[#E5E7EB] bg-white px-6 py-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F0EDFB] text-[#5B3FD1]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-[14px] font-bold leading-[1.6] text-[#23327A]">
                    {term.title}
                  </dt>
                  <dd className="mt-2 text-[14px] leading-[1.8] text-[#4B5563]">
                    {term.description}
                  </dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
