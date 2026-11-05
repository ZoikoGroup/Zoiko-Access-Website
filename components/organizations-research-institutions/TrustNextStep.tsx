import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow, heading } from "./shared";

export default function TrustNextStep() {
  return (
    <section className="bg-white px-6 py-16 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 overflow-hidden shadow-[0_20px_60px_rgba(22,36,90,0.12)] lg:grid-cols-2">
        <div className="bg-white p-8 lg:p-11">
          <Eyebrow>Trust</Eyebrow>
          <h2 className={`${heading} mb-4 text-3xl text-[#16245A] md:text-[40px] md:leading-[1.2]`}>
            Evaluated separately, always.
          </h2>
          <p className="max-w-[520px] text-base leading-7 text-[#5B6B8C]">
            Research purpose, lawful authority, ethics review, participant rights, security and
            institutional accountability are evaluated separately; no institutional affiliation alone
            grants access.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#16245A] via-[#253B8C] to-[#3B52B8] p-8 text-white lg:p-11">
          <h2 className={`${heading} mb-4 text-3xl md:text-[40px] md:leading-[1.2]`}>
            Take an authorized next step.
          </h2>
          <p className="mb-8 max-w-[520px] text-base leading-6 text-white/85">
            Understand the limits first, then explore the pathways open to your organization.
          </p>
          <div className="mb-4 flex flex-wrap gap-3">
            <a
              href="#lifecycle"
              className="group flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#16245A] transition-colors hover:bg-white/90 md:text-base"
            >
              Governance process
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              href="/organisation-overview"
              className="rounded-lg border-2 border-white px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:text-base"
            >
              Organization pathways
            </Link>
          </div>
          <p className="border-t border-white/20 pt-4 text-xs leading-5 text-white/80">
            Informational guidance; not a live research-data repository, participant recruitment
            program or clinical decision service.
          </p>
        </div>
      </div>
    </section>
  );
}
