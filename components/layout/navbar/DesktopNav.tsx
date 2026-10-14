"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { MENU } from "./data";
import MegaMenu from "./MegaMenu";

export default function DesktopNav() {
  const [active, setActive] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    const onClick = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setActive(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const current = active === null ? null : MENU[active];

  return (
    <div
      ref={wrapperRef}
      onMouseLeave={() => setActive(null)}
      className="relative hidden border-t border-[#E8EAEE] lg:block"
    >
      <nav aria-label="Primary" className="mx-auto max-w-[1440px] px-12">
        <ul className="flex h-[48px] items-center justify-between">
          {MENU.map((item, index) => {
            const isOpen = active === index;
            return (
              <li key={item.label} onMouseEnter={() => setActive(index)}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`mega-${index}`}
                  onClick={() => setActive(isOpen ? null : index)}
                  className={`inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap text-[13.5px] font-medium transition-colors ${
                    isOpen ? "text-[#4267D5]" : "text-[#1F2937]"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3 w-3 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {current && active !== null ? (
        <MegaMenu item={current} id={`mega-${active}`} />
      ) : null}
    </div>
  );
}
