import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { DISCLAIMERS, LEGAL_LINKS } from "./data";

export default function FooterBottom() {
  return (
    <div className="bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-8 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div className="max-w-[1000px]">
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link}>
                <Link
                  href="#"
                  className="text-[14px] font-semibold text-[#4267D5] hover:underline"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col gap-3 text-[13px] leading-relaxed text-[#4B5563]">
            {DISCLAIMERS.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <p className="mt-5 border-t border-[#E3E8F0] pt-5 text-[13px] text-[#4B5563]">
            © 2026 Zoiko Access. All rights reserved. A Zoiko Healthcare
            platform.
          </p>
        </div>

        <Link
          href="#"
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#4267D5] px-6 py-4 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
        >
          Back to top
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
