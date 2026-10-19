import Link from "next/link";
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
    title: "Not available in your location",
    text: "Browse general patient guidance instead.",
    link: { text: "Explore patient services", href: "/for-patients" },
  },
  {
    icon: FileText,
    title: "Something needs fixing",
    text: "A summary at the top links to each field that needs attention.",
  },
  {
    icon: Clock3,
    title: "Session timed out or code expired",
    text: "Sensitive fields are cleared. Start again securely, or request a new code.",
  },
  {
    icon: Wifi,
    title: "Service temporarily unavailable",
    text: "Public information stays available. Try again later or use approved help.",
  },
  {
    icon: Lock,
    title: "Too many attempts",
    text: "Please try again later. We don’t show why.",
  },
  {
    icon: KeyRound,
    title: "You may already have an account",
    text: "We can’t say. Sign in or recover your account to continue.",
    link: { text: "Sign in or recover account", href: "#" },
  },
  {
    icon: Users,
    title: "Authority not established",
    text: "We can’t act for another person without verified authority. Read delegated access guidance.",
    link: { text: "Caregiver guidance", href: "/for-caregivers" },
  },
  {
    icon: TriangleAlert,
    title: "Consent notice unavailable",
    text: "Enrollment is paused until the legal notice can be shown. Read the notice later.",
  },
];

export default function WhenThingsGoWrong() {
  return (
    <section className="w-full bg-white py-[84px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="If something goes wrong"
          title="Every problem has a clear next step"
          description="Messages stay neutral, never reveal whether an account exists, and never show credentials."
        />

        <ul className="mt-11 grid grid-cols-1 gap-6 md:grid-cols-2">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <li
                key={problem.title}
                className="flex min-h-[116px] gap-4 rounded-2xl border border-[#DCD6F5] bg-white px-[22px] pb-6 pt-[22px]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1EEFD] text-[#7C3AED]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[17px] font-bold text-[#0E1E6E]">
                    {problem.title}
                  </h3>
                  <p className="mt-1 max-w-[450px] text-[15px] leading-[23px] text-[#2C3352]">
                    {problem.text}
                  </p>
                  {problem.link && (
                    <Link
                      href={problem.link.href}
                      className="mt-1 inline-block text-[14px] font-semibold text-[#7C3AED] underline"
                    >
                      {problem.link.text}
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
