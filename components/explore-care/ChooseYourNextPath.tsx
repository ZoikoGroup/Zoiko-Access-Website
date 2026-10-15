import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navigationData = [
  {
    category: "UNDERSTAND YOUR OPTIONS",
    items: [
      {
        title: "How Zoiko Access works",
        description: "Read the detailed four-step educational guide.",
        href: "#",
      },
      {
        title: "Explore healthcare services",
        description:
          "Understand six broad service categories without treatment recommendations.",
        href: "#",
      },
      {
        title: "Care pathways explained",
        description:
          "Learn how appointments, tests, and handoffs may fit together.",
        href: "#",
      },
    ],
  },
  {
    category: "FIND SERVICES",
    items: [
      {
        title: "Healthcare professionals",
        description:
          "Understand distinct professional roles and clinical authority.",
        href: "#",
      },
      {
        title: "Locations and availability",
        description:
          "Review location context and the informational status of this preview.",
        href: "#",
      },
    ],
  },
  {
    category: "NEXT STEPS",
    items: [
      {
        title: "How referrals work",
        description:
          "Understand delivery, receiving acceptance, and clinical review.",
        href: "#",
      },
    ],
  },
];

export default function ChooseYourNextPath() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7657E8]">
            <span
              className="block h-2 w-2 rounded-full bg-[#7657E8]"
              aria-hidden="true"
            />
            Choose your next path
          </p>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
            Find the explanation <br />
            that answers your question.
          </h2>

          <p className="mt-4 text-[16px] leading-[1.7] text-[#4B5563] sm:text-[17px]">
            Explore the informational topics from the Explore Care menu. Working
            local files and on-page explanations are linked here.
          </p>
        </div>

        {/* 3 Columns Card Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {navigationData.map((column, colIdx) => (
            <div
              key={colIdx}
              className="flex flex-col rounded-3xl border border-[#E5E7EB] bg-[#F6F9FC] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_10px_30px_rgba(118,87,232,0.06)]"
            >
              {/* Category Header */}
              <h3 className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#7657E8]">
                {column.category}
              </h3>

              {/* Items List */}
              <div className="mt-6 flex flex-col divide-y divide-[#F3F4F6]">
                {column.items.map((item, itemIdx) => (
                  <Link
                    key={itemIdx}
                    href={item.href}
                    className={`group block py-5 first:pt-0 last:pb-0`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-[18px] font-bold text-[#23327A] transition-colors group-hover:text-[#4267D5]">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-[14px] leading-[1.6] text-[#4B5563]">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center text-[#4267D5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
