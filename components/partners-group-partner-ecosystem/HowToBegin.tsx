import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Accent, container, heading, section } from "./shared";

const requirements = [
  "Staffed and named intake owner",
  "Privacy notice published",
  "Retention period defined",
  "Confirmation and error recovery tested",
  "Incident process verified",
];

export default function HowToBegin() {
  return (
    <section className={`bg-[#F1F0FD] ${section}`}>
      <div
        className={`${container} grid grid-cols-1 gap-10 rounded-3xl border border-[#E4E7F2] bg-white p-8 shadow-[0_20px_50px_rgba(22,36,90,0.08)] sm:p-10 lg:grid-cols-2`}
      >
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF1E0] px-3.5 py-1.5 text-xs font-semibold text-[#9A5B00]">
            <span className="h-2 w-2 rounded-full bg-[#F59E0B]" aria-hidden="true" />
            Partner intake currently closed
          </span>
          <h2 className={`${heading} mt-4 text-3xl text-[#16245A] md:text-4xl md:leading-[48px]`}>
            How to begin, <Accent>today</Accent>
          </h2>
          <p className="mt-3 text-base leading-7 text-[#5B6B8C]">
            Use the informational pages. A partner inquiry form opens only once every requirement on the right is
            verified.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/technology-partners"
              className="group flex items-center gap-2 rounded-[10px] bg-[#7B5CF0] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#6A4BE0]"
            >
              Explore Technology partners
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/partners-system-integrators"
              className="rounded-[10px] border border-[#E4E7F2] px-6 py-3.5 text-base font-semibold text-[#243B73] transition-colors hover:bg-[#F5F8FC]"
            >
              System integrators
            </Link>
          </div>
        </div>

        <div>
          <p className="sr-only">Requirements before intake opens (none verified yet):</p>
          <ul className="space-y-2.5 lg:pt-12">
            {requirements.map((r) => (
              <li key={r} className="flex items-center gap-2.5 text-sm text-[#2A3550]">
                <span className="h-3 w-3 shrink-0 rounded-full border-2 border-[#7B5CF0]" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
