import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ApiOverview() {
  return (
    <section className="relative w-full overflow-hidden bg-[#10154A] font-sans text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[320px] bg-[radial-gradient(ellipse_at_top,#3A2F8C_0%,rgba(16,21,74,0)_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 pt-12 text-center">
        <p className="flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#A99BF5]">
          <span className="hidden h-px w-7 bg-[#A99BF5]/60 sm:block" />
          Partners &amp; Developers / Build &amp; Connect
          <span className="hidden h-px w-7 bg-[#A99BF5]/60 sm:block" />
        </p>

        <h1 className="mt-4 text-[40px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[56px] lg:text-[64px]">
          API &amp;{" "}
          <span className="bg-gradient-to-b from-[#C3B8FF] to-[#7F9CF5] bg-clip-text text-transparent">
            interoperability
          </span>{" "}
          overview
        </h1>

        <p className="mx-auto mt-5 max-w-[960px] text-base leading-[1.65] text-white/80 lg:text-lg">
          Explore the principles and governance behind connecting healthcare
          systems with Zoiko Access. Actual interfaces depend on approved
          partners, technical readiness, lawful permissions, and market
          activation.
        </p>

        <Link
          href="#"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#7B55E8] px-6 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
        >
          Explore integration principles
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="relative mx-auto mt-12 h-[220px] w-full max-w-[1226px] px-6">
        <svg
          viewBox="0 0 1226 220"
          preserveAspectRatio="none"
          className="absolute inset-0 hidden h-full w-full md:block"
          aria-hidden="true"
        >
          <path
            d="M285 56 C 400 40, 470 80, 545 130"
            fill="none"
            stroke="#8F95D6"
            strokeWidth="1.5"
            strokeDasharray="5 6"
          />
          <path
            d="M275 100 C 380 150, 480 200, 600 175"
            fill="none"
            stroke="#8F95D6"
            strokeWidth="1.5"
            strokeDasharray="5 6"
          />
          <path
            d="M675 150 C 760 130, 840 60, 935 52"
            fill="none"
            stroke="#8F95D6"
            strokeWidth="1.5"
            strokeDasharray="5 6"
          />
          <path
            d="M690 178 C 790 190, 880 150, 940 112"
            fill="none"
            stroke="#8F95D6"
            strokeWidth="1.5"
            strokeDasharray="5 6"
          />
          <circle cx="385" cy="56" r="4.5" fill="#B7A8FF" />
          <circle cx="849" cy="48" r="4.5" fill="#B7A8FF" />
        </svg>

        <div className="absolute left-[14.4%] top-[8px] flex flex-col items-center">
          <div className="relative h-[105px] w-[105px] overflow-hidden rounded-full border-[3px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            <Image
              src="/api/1.png"
              alt="Hospital building"
              fill
              sizes="105px"
              className="object-cover"
            />
          </div>
          <span className="mt-3 rounded-full border border-white/15 bg-[#2A3070] px-4 py-1.5 text-xs font-semibold">
            Source system
          </span>
        </div>

        <div className="absolute left-1/2 top-[-4px] flex -translate-x-1/2 flex-col items-center">
          <span className="rounded-full border border-white/15 bg-[#2A3070] px-4 py-1.5 text-xs font-semibold">
            Authorized interface
          </span>
          <div className="relative mt-3 h-[135px] w-[135px] overflow-hidden rounded-full border-[3px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            <Image
              src="/api/2.png"
              alt="Clinician holding a phone"
              fill
              sizes="135px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="absolute right-[15.5%] top-[0px] flex flex-col items-center">
          <div className="relative h-[105px] w-[105px] overflow-hidden rounded-full border-[3px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            <Image
              src="/api/3.png"
              alt="Delivery of parcels"
              fill
              sizes="105px"
              className="object-cover"
            />
          </div>
          <span className="mt-3 rounded-full border border-white/15 bg-[#2A3070] px-4 py-1.5 text-xs font-semibold">
            Receiving system
          </span>
        </div>
      </div>
    </section>
  );
}
