import { Route, Search, Users } from "lucide-react";

const ITEMS = [
  {
    title: "Clearer options",
    text: "Understand information before taking the next step.",
    icon: Search,
  },
  {
    title: "Connected next steps",
    text: "See how discovery and care coordination fit together.",
    icon: Route,
  },
  {
    title: "Responsible coordination",
    text: "Keep care-team roles and service boundaries clear.",
    icon: Users,
  },
] as const;

export default function HeroHighlights() {
  return (
    <section className="w-full bg-white font-sans">
      <div className="mx-auto max-w-[1440px] px-6 py-8 sm:px-10 lg:px-[44px] lg:py-10">
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.title} className="flex items-center gap-4">
                <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-xl bg-[#EEEAFE] text-[#6D4AD8]">
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#27307A]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-snug text-[#4B5563]">
                    {item.text}
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
