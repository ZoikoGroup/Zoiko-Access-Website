import Image from "next/image";
import Link from "next/link";
import { HELP_LINKS, OFFICES, TAGLINE } from "./data";

const LABEL =
  "text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4B2FB8]";

export default function FooterInfo() {
  return (
    <div className="bg-gradient-to-b from-[#EEEAFE] to-[#D7CBFF]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-12 sm:px-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-12">
        <div>
          <Link href="/" aria-label="Zoiko Access home">
            <Image
              src="/logo.png"
              alt="Zoiko Access"
              width={130}
              height={60}
              className="h-auto w-[130px]"
            />
          </Link>
          <p className="mt-6 text-[15px] leading-[1.7] text-[#4B5563]">
            {TAGLINE.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        {OFFICES.map((office) => (
          <div key={office.label}>
            <p className={LABEL}>{office.label}</p>
            <h3 className="mt-4 text-[20px] font-semibold text-[#27307A]">
              {office.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-1.5 text-[15px] text-[#4B5563]">
              {office.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className={LABEL}>HELP &amp; ASSISTANCE</p>
          <h3 className="mt-4 text-[20px] font-semibold text-[#27307A]">
            Find the right information.
          </h3>
          <p className="mt-4 text-[15px] leading-[1.6] text-[#4B5563]">
            Support, accessibility, and privacy information remain separate from
            clinical services.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {HELP_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[14px] font-semibold text-[#4267D5] hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
