import Link from "next/link";
import { Info, AlertCircle } from "lucide-react";

export default function ClinicalGovernanceFooterBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1B2565] py-12 font-sans sm:py-16">
      {/* Container updated to max-w-[1440px] */}
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Notice Box */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
              <Info className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[15px] font-medium leading-[1.6] text-white">
                Clinical decisions remain with qualified professionals and
                authorized organizations.
              </p>
              <div className="mt-2">
                <Link
                  href="/clinical-responsibility"
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#B7A6FF] transition-colors hover:text-white"
                >
                  <span>Read about clinical responsibility</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Notice Box */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
              <AlertCircle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[15px] font-normal leading-[1.6] text-blue-100/90">
                This page explains platform design. It does not provide medical
                advice, patient records, emergency support or access to a live
                clinical workspace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
