import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow, heading } from "./shared";

export default function EvaluationNextStep() {
  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Evaluation &amp; next step</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl text-[#16245A] md:text-4xl`}>
          Two routes, one available now.
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Not available yet: no form or link until a staffed intake path exists */}
          <div className="rounded-[20px] border border-dashed border-[#C9C0F7] bg-white p-7 shadow-[0_10px_30px_rgba(22,36,90,0.08)]">
            <span className="mb-3 inline-block rounded-full bg-[#EEF0F4] px-2.5 py-1 text-xs font-semibold text-[#4B5568]">
              Not available yet
            </span>
            <h3 className={`${heading} mb-1.5 text-xl text-[#16245A]`}>Discuss a program approach</h3>
            <p className="text-base leading-7 text-[#5B6B8C]">
              Appears only when a verified, staffed institutional intake path and privacy notice are
              live. No form is shown until then.
            </p>
          </div>

          <div className="rounded-[20px] bg-gradient-to-br from-[#253B8C] to-[#3B5FD0] p-7 text-white shadow-[0_10px_30px_rgba(22,36,90,0.15)]">
            <span className="mb-3 inline-block rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold">
              Available now
            </span>
            <h3 className={`${heading} mb-1.5 text-xl`}>Explore organizations</h3>
            <p className="mb-6 text-base leading-7 text-white/85">
              Read the informational Organizations materials for your type of organization.
            </p>
            <Link
              href="/organisation-overview"
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[#16245A] transition-colors hover:bg-white/90 md:text-base"
            >
              Explore organizations
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
