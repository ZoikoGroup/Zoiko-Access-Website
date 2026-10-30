import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { MenuItem } from "./data";

type Props = {
  item: MenuItem;
  id: string;
  onNavigate?: () => void;
};

export default function MegaMenu({ item, id, onNavigate }: Props) {
  return (
    <div
      id={id}
      role="region"
      aria-label={`${item.label} menu`}
      className="absolute left-1/2 top-full z-40 w-full max-w-[1340px] -translate-x-1/2 overflow-hidden rounded-b-2xl border border-t-0 border-[#E8EAEE] bg-white shadow-[0_24px_48px_rgba(35,50,122,0.12)]"
    >
      <div className="grid h-[280px] grid-cols-[1fr_1fr_1fr_340px] items-start px-10 py-6">
       {item.columns.map((column, index) => (
          <ul
            key={index}
            className={`flex flex-col gap-8 border-r border-[#D5D9E0] py-2 pr-5 ${
              index === 0 ? "" : "pl-5"
            }`}
          >
            {column.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    className="group flex items-center gap-3 text-[14px] font-bold uppercase tracking-wide text-[#3F3F46] transition-colors hover:text-[#4267D5]"
                  >
                    <Icon
                      className="h-5 w-5 shrink-0 text-[#694FFB]"
                      aria-hidden="true"
                    />
                    <span className="flex-1">{link.label}</span>
                    <ChevronRight
                      className="h-4 w-4 shrink-0 text-[#694FFB]"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        ))}

        <div className="relative ml-8 h-full overflow-hidden rounded-[20px]">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="340px"
            className="object-cover opacity-80"
          />
          <Link
            href={item.ctaHref}
            onClick={onNavigate}
            className="absolute inset-x-3 bottom-3 flex items-center justify-center rounded-xl bg-[#7656E8] px-4 py-4 text-center text-[12px] font-semibold uppercase text-white"
          >
            {item.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}