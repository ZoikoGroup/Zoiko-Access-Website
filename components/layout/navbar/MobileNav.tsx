"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Globe, MapPin } from "lucide-react";
import { MENU } from "./data";

export default function MobileNav() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div
      id="mobile-nav"
      className="max-h-[80vh] overflow-y-auto border-t border-[#E8EAEE] bg-white px-4 pb-6 pt-4 sm:px-6 lg:hidden"
    >
      <ul className="flex flex-col">
        {MENU.map((item, index) => {
          const isOpen = open === index;
          return (
            <li key={item.label} className="border-b border-[#E8EAEE]">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`mobile-panel-${index}`}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between py-3.5 text-left text-[15px] font-medium text-[#1F2937]"
              >
                {item.label}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {isOpen ? (
                <ul id={`mobile-panel-${index}`} className="pb-3 pl-1">
                  {item.columns.flat().map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="flex items-center gap-3 py-2.5 text-[14px] text-[#3F3F46]"
                        >
                          <Icon
                            className="h-4 w-4 text-[#6D4AD8]"
                            aria-hidden="true"
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </li>
          );
        })}
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
          href="#"
          className="inline-flex w-fit items-center gap-2 rounded-md bg-[#4267D5] px-6 py-3 text-[14px] font-semibold text-white"
        >
          How it works
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
