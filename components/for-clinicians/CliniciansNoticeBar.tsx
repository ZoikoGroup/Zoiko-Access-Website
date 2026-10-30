"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function CliniciansNoticeBar() {
  return (
    <section className="w-full bg-[#08174e] py-6 sm:py-7 text-white border-y border-blue-950">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          {/* Left item */}
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-blue-400/40 text-blue-300">
              <ShieldCheck className="h-4 w-4 stroke-[2]" />
            </div>
            <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-slate-100">
              Clinical decisions remain with qualified professionals and authorized
              organizations.{" "}
              <Link
                href="/clinical-responsibility"
                className="font-bold underline text-white hover:text-blue-200"
              >
                Read about clinical responsibility
              </Link>
            </p>
          </div>

          {/* Right item */}
          <div>
            <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-slate-300">
              This page explains platform design. It does not provide medical
              advice, patient records, emergency support or access to a live
              clinical workspace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
