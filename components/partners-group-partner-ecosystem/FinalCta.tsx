import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IMG, heading } from "./shared";

export default function FinalCta() {
  return (
    <section
      className="bg-[#16245A] bg-cover bg-center px-6 py-16 text-center lg:px-16 lg:py-20"
      style={{ backgroundImage: `url(${IMG}/bg-cta.webp)` }}
    >
      <div className="mx-auto max-w-[760px]">
        <h2 className={`${heading} text-3xl font-bold text-white md:text-4xl md:leading-[48px]`}>
          Start with the partner path that fits you
        </h2>
        <p className="mx-auto mt-4 max-w-[620px] text-base leading-7 text-[#D7DEF5]">
          Every page here is informational. Interest, review, authorization and operation stay clearly separate.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/technology-partners"
            className="group flex items-center gap-2 rounded-[10px] bg-white px-6 py-3.5 text-base font-semibold text-[#16245A] transition-colors hover:bg-[#EEF1FB]"
          >
            Explore Technology partners
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <Link
            href="/partners-health-system-vendors"
            className="rounded-[10px] border-2 border-white px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Review Health system vendors
          </Link>
        </div>
      </div>
    </section>
  );
}
