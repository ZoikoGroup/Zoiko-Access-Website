import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Globe, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden items-center gap-6 lg:flex">
      <button
        type="button"
        className="inline-flex items-center gap-2 text-[13px] font-medium text-[#1F2937]"
      >
        <MapPin className="h-4 w-4 text-[#6D4AD8]" aria-hidden="true" />
        Choose location
        <ChevronDown className="h-3 w-3" aria-hidden="true" />
      </button>

      <button
        type="button"
        className="inline-flex items-center gap-2 text-[13px] font-medium text-[#1F2937]"
      >
        <Globe className="h-4 w-4 text-[#6D4AD8]" aria-hidden="true" />
        English
        <ChevronDown className="h-3 w-3" aria-hidden="true" />
      </button>

      <Link
        href="#"
        className="inline-flex items-center gap-2 rounded-md bg-[#4267D5] px-6 py-3 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
      >
        How it works
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
}

export function Logo() {
  return (
    <Link href="#" aria-label="Zoiko Access home" className="shrink-0">
      <Image
        src="/logo.png"
        alt="Zoiko Access"
        width={100}
        height={46}
        priority
        className="h-auto w-[100px]"
      />
    </Link>
  );
}
