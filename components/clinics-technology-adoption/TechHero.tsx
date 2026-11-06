import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { IMG, heading } from "./shared";

export default function TechHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#F7F5FF] bg-cover bg-center px-6 py-14 lg:px-16 lg:py-[54px]"
      style={{ backgroundImage: `url(${IMG}/bg-hero.webp)` }}
    >
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)]">
        <div>
          <p className="mb-3.5 text-xs font-semibold uppercase leading-5 tracking-widest text-[#7B5CF0]">
            Hospitals &amp; Clinics / Technology &amp; Adoption
          </p>
          <h1 className={`${heading} mb-4 text-5xl font-bold leading-[1.05] md:text-6xl md:leading-[62px]`}>
            <span className="text-[#16245A]">Technology </span>
            <span className="text-[#7B5CF0]">&amp;</span>
            <br />
            <span className="bg-gradient-to-r from-[#6A48F0] to-[#B9A6FF] bg-clip-text text-transparent">
              Adoption
            </span>
          </h1>
          <p className="mb-4 max-w-[520px] text-lg leading-7 text-[#243B5A]">
            Explore integration principles and institution-led adoption requirements before assuming a connection is
            available.
          </p>

          <div className="mb-4 max-w-[522px] rounded-2xl border border-[#E4E7F2] bg-white px-4 pb-4 pt-5 shadow-[0_10px_30px_rgba(36,59,115,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#7B5CF0]">Direct answer</p>
            <p className="mt-1 text-sm leading-6 text-[#243B5A]">
              No EHR connection is live today. Zoiko Access is designed as a permissioned coordination layer; your
              source systems keep the clinical record, scheduling and decisions.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="#architecture"
              className="group flex min-h-11 items-center gap-2 rounded-[10px] bg-[#7B5CF0] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#6A4BE0]"
            >
              See how it is designed
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#readiness"
              className="flex min-h-11 items-center rounded-[10px] border border-[#16245A] bg-white px-5 py-3 text-base font-semibold text-[#16245A] transition-colors hover:bg-[#F1EEFF]"
            >
              Check your readiness
            </a>
          </div>
          <p className="mt-3.5 max-w-[500px] text-xs leading-5 text-[#5B6B8C]">
            Specific connections depend on local approvals and partner validation. This page is educational.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[719px]">
          <Image
            src={`${IMG}/hero-illustration.webp`}
            alt="Illustration: your institution's source systems keep the clinical record, scheduling and decisions; the permissioned coordination layer is not connected yet."
            width={719}
            height={539}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
