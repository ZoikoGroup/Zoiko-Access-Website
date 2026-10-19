import {
  Clock3,
  FileText,
  KeyRound,
  Lock,
  MapPin,
  TriangleAlert,
  Users,
  Wifi,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const problems = [
  {
    icon: MapPin,
    title: "No records here",
    text: "No appointment records are available here for this account and selected person. This does not mean you have no appointments with other providers.",
  },
  {
    icon: FileText,
    title: "No matches",
    text: "Nothing matches these filters. Reset them to see everything you are allowed to view.",
  },
  {
    icon: Lock,
    title: "Please sign in again",
    text: "Your session ended. Sign in to continue. Nothing sensitive was kept.",
  },
  {
    icon: KeyRound,
    title: "Access unavailable",
    text: "We can’t show this item. Check the person and permissions, or read caregiver guidance.",
  },
  {
    icon: Wifi,
    title: "Service interruption",
    text: "Some information may be missing. Try again shortly, or contact the organization directly.",
  },
  {
    icon: Clock3,
    title: "Status may be out of date",
    text: "We cannot verify the latest appointment status right now. Contact the organization using its verified contact details if time-sensitive.",
  },
  {
    icon: TriangleAlert,
    title: "Hold expired",
    text: "The held time was released. Ask the organization whether another time is available.",
  },
  {
    icon: Users,
    title: "Possible duplicate",
    text: "We’re checking whether your request already went through. Please don’t resend.",
  },
];

export default function WhenThingsGoWrong() {
  return (
    <section className="w-full bg-[#DDD5FE] py-[84px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="If something goes wrong"
          title="Every problem has a clear next step"
          description="Messages are neutral and never reveal whether a private item exists."
        />

        <ul className="mt-11 grid grid-cols-1 gap-6 md:grid-cols-2">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <li
                key={problem.title}
                className="flex gap-4 rounded-2xl bg-white px-[22px] pb-6 pt-[22px]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1EEFD] text-[#7C3AED]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[17px] font-bold text-[#0E1E6E]">
                    {problem.title}
                  </h3>
                  <p className="mt-1 max-w-[440px] text-[15px] leading-[23px] text-[#2C3352]">
                    {problem.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
