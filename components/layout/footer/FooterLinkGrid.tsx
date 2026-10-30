import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { FOOTER_GROUPS } from "./data";

export default function FooterLinkGrid() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-12 lg:py-[70px]">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[15px] font-bold uppercase tracking-[0.14em] text-[#4B2FB8]">
            Explore Zoiko Access
          </h2>
          <p className="text-[13px] text-[#4B5563]">
            For people, care teams, and the wider healthcare ecosystem.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {FOOTER_GROUPS.map((group) => {
            const Icon = group.icon;
            return (
              <nav
                key={group.title}
                aria-label={group.title}
                className="rounded-t-[24px] border-t-2 border-[#243B73] px-6 pt-8"
              >
                <h3 className="flex items-center gap-3 text-[22px] font-semibold tracking-[-0.02em] text-[#27307A]">
                  <Icon className="h-5 w-5 text-[#6D4AD8]" aria-hidden="true" />
                  {group.title}
                </h3>
                <ul className="mt-7 flex flex-col">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between py-3 text-[15px] text-[#4B5563] transition-colors hover:text-[#4267D5]"
                      >
                        {link.label}
                        <ChevronRight
                          className="h-4 w-4 text-[#1F2937] group-hover:text-[#4267D5]"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            );
          })}
        </div>
      </div>
    </div>
  );
}
