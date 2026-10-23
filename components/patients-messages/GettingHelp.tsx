import { Hospital, Settings } from "lucide-react";
import SectionHeading from "./SectionHeading";

const routes = [
  {
    icon: Hospital,
    title: "Contact your healthcare organization",
    text: "For anything about your care or what a message says.",
    points: ["Questions about advice, results or treatment", "A reply you’re waiting for", "A closed conversation you need to continue"],
  },
  {
    icon: Settings,
    title: "Get technical help",
    text: "For account, sign-in or delivery problems. Support can’t see your conversations.",
    points: ["Trouble signing in or switching people", "A message marked “Could not deliver”", "Notifications not arriving"],
  },
];

export default function GettingHelp() {
  return (
    <section className="w-full bg-white py-[78px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Getting help"
          title={
            <>
              The right help depends
              <br className="hidden sm:block" /> on the kind of problem.
            </>
          }
        />

        <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2">
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <div
                key={route.title}
                className="rounded-xl border border-[#E4E3EE] bg-white px-7 pb-9 pt-7 shadow-[0_10px_30px_rgba(29,42,107,0.08)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F1EBFE] text-[#7C3AED]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-[20px] font-semibold text-[#1D2A6B] [font-family:var(--font-poppins)]">
                  {route.title}
                </h3>
                <p className="mt-1.5 text-[15px] text-[#5B6180]">{route.text}</p>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[14px] text-[#5B6180]">
                  {route.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
