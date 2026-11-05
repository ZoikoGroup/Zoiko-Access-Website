import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IMG, heading } from "./shared";

export default function FrameworkHero() {
  return (
    <section
      className="overflow-hidden bg-[#F5F8FC] bg-cover bg-center px-6 py-16 lg:px-16 lg:py-20"
      style={{ backgroundImage: `url(${IMG}/bg-hero.webp)` }}
    >
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,504px)]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#7B5CF0]">
            Partners &amp; Developers / Certification Framework
          </p>
          <h1 className={`${heading} mb-6 text-4xl font-bold leading-[1.1] text-[#16245A] md:text-6xl md:leading-[67px]`}>
            A proposed framework for evaluating{" "}
            <span className="bg-gradient-to-r from-[#7B5CF0] to-[#93B4F5] bg-clip-text text-transparent">
              healthcare integration
            </span>
          </h1>
          <p className="mb-6 max-w-[620px] text-base leading-7 text-[#2A3550] md:text-lg">
            Explore the principles, evidence categories and governance steps that may inform future integration
            qualification across participating healthcare systems.
          </p>
          <div className="mb-4 flex flex-wrap gap-3">
            <a
              href="#stages"
              className="group flex items-center gap-2 rounded-[10px] bg-[#7B5CF0] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#6A4BE0]"
            >
              Explore evaluation steps
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <Link
              href="/partners-integration-security"
              className="rounded-[10px] border border-[#243B73] px-5 py-3 text-base font-semibold text-[#243B73] transition-colors hover:bg-white"
            >
              Review integration security
            </Link>
          </div>
          <p className="text-xs leading-5 text-[#5B6B8C]">
            Claims require independent verification for each partner, market and scope.
          </p>
        </div>

        {/* Empty certificate specimen: nothing has been issued. */}
        <figure className="flex flex-col items-center gap-4">
          <div className="w-full rotate-[1.2deg] rounded-md bg-[#FDFCF8] p-4 shadow-[0_30px_60px_rgba(36,59,115,0.16)]">
            <div className="relative overflow-hidden border-2 border-[#243B73] p-2">
              <div className="relative border border-[#243B73] px-6 pb-8 pt-7 text-center sm:px-8">
                <p className="text-xs uppercase tracking-[0.2em] text-[#5B6B8C]">Integration qualification</p>
                <p className={`${heading} mt-2 text-2xl text-[#16245A]`}>Not issued</p>
                <p className="mt-2 text-xs italic text-[#9AA3BD]">No partner name · no scope · no date</p>

                <div className="relative mt-5">
                  <img
                    src={`${IMG}/hero-signing.webp`}
                    alt="A hand signing a document"
                    className="h-24 w-full rounded-sm object-cover opacity-90"
                  />
                  <span
                    aria-hidden="true"
                    className={`${heading} pointer-events-none absolute inset-0 flex items-center justify-center text-4xl font-bold tracking-[0.12em] text-[#7B5CF0]/20 -rotate-[21deg] sm:text-5xl`}
                  >
                    SPECIMEN
                  </span>
                </div>

                <div className="mt-6 flex items-end gap-6 sm:gap-10">
                  <span className="flex-1 border-t border-[#C9D3E5] pt-1.5 text-xs text-[#5B6B8C]">Scope</span>
                  <span
                    className={`${heading} flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-full border-2 border-dashed border-[#B9A7F7] text-[10px] uppercase leading-3 tracking-wide text-[#9B82F5]`}
                  >
                    <span>No</span>
                    <span>Seal</span>
                  </span>
                  <span className="flex-1 border-t border-[#C9D3E5] pt-1.5 text-xs text-[#5B6B8C]">Valid until</span>
                </div>
              </div>
            </div>
          </div>
          <figcaption className="text-center text-xs leading-5 text-[#5B6B8C]">
            An empty specimen. A seal or listing appears only after a separate, approved publication decision.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
