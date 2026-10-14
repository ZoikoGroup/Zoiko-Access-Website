"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import TopBar, { Logo } from "./TopBar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white font-sans text-[#1F2937] shadow-sm">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <div className="flex h-[68px] items-center justify-between">
          <Logo />
          <TopBar />

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

      <DesktopNav />
      {open ? <MobileNav /> : null}
    </header>
  );
}
