"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Globe,
  MapPin,
  Menu,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Explore Care", href: "#" },
  { label: "Patients", href: "#" },
  { label: "Clinicians", href: "#" },
  { label: "Hospitals & Clinics", href: "#" },
  { label: "Labs & Pharmacies", href: "#" },
  { label: "Payers & Insurers", href: "#" },
  { label: "Organizations", href: "#" },
  { label: "Partners & Developers", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Company", href: "#" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-[#E8EAEE] bg-white font-sans text-[#1F2937]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <div className="flex h-[68px] items-center justify-between">
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
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-md bg-[#4267D5] px-6 py-3 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              How it works
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#E8EAEE] lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div className="border-t border-[#E8EAEE]">
        <nav
          aria-label="Primary"
          className="mx-auto hidden max-w-[1440px] px-4 sm:px-6 lg:block lg:px-12"
        >
          <ul className="flex h-[48px] items-center justify-between">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap text-[12px] font-medium text-[#1F2937] transition-colors hover:text-[#4267D5]"
                >
                  {item.label}
                  <ChevronDown className="h-3 w-3" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[#E8EAEE] bg-white px-4 pb-6 pt-4 sm:px-6 lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="border-b border-[#E8EAEE]">
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-3.5 text-[15px] font-medium text-[#1F2937]"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col gap-4">
            <button
              type="button"
              className="inline-flex items-center gap-2 text-[14px] font-medium"
            >
              <MapPin className="h-4 w-4 text-[#6D4AD8]" aria-hidden="true" />
              Choose location
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 text-[14px] font-medium"
            >
              <Globe className="h-4 w-4 text-[#6D4AD8]" aria-hidden="true" />
              English
            </button>
            <Link
              href="/how-it-works"
              className="inline-flex w-fit items-center gap-2 rounded-md bg-[#4267D5] px-6 py-3 text-[14px] font-semibold text-white"
            >
              How it works
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
