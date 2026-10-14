import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCta() {
  return (
    <div className="bg-gradient-to-r from-[#EEEAFE] via-[#EEEAFE] to-[#C8B8FF]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-24">
          <Link href="#" aria-label="Zoiko Access home">
            <Image
              src="/logo.png"
              alt="Zoiko Access"
              width={140}
              height={64}
              className="h-auto w-[140px]"
            />
          </Link>
          <div>
            <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-[#27307A] sm:text-[34px]">
              Healthcare, connected around you.
            </h2>
            <p className="mt-3 text-[15px] text-[#4B5563]">
              Explore how the healthcare access and navigation journey is
              designed to work.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="#"
            className="inline-flex items-center gap-4 rounded-lg bg-[#4267D5] px-6 py-3.5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Explore how it works
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="#"
            className="inline-flex items-center rounded-lg border border-[#E1E4F2] bg-white px-6 py-3.5 text-[14px] font-semibold text-[#4267D5] transition-colors hover:bg-[#F7F6FF]"
          >
            For healthcare organizations
          </Link>
        </div>
      </div>
    </div>
  );
}
