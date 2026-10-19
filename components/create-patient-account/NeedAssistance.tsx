import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const points = [
  "Screen reader, keyboard and zoom support",
  "Language support where reviewed",
  "Human help only where it is staffed and verified",
];

export default function NeedAssistance() {
  return (
    <section className="w-full bg-[#F5F8FC] py-[70px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <div className="grid grid-cols-1 overflow-hidden rounded-[20px] border border-[#DCD6F5] bg-white lg:grid-cols-[minmax(0,690fr)_minmax(0,609fr)]">
          <div className="px-6 pb-10 pt-12 sm:px-10">
            <p className="text-[13px] font-semibold uppercase tracking-[0.04em] text-[#7C3AED]">
              Help
            </p>
            <h2 className="mt-3 text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0E1E6E] [font-family:var(--font-poppins)] sm:text-[36px]">
              Need assistance?
            </h2>
            <p className="mt-4 max-w-[490px] text-[16px] leading-[27px] text-[#2C3352]">
              Review accessible help or a verified local support channel. Never
              send medical records or passwords through a general contact form.
            </p>
            <ul className="mt-4 flex flex-col gap-3.5">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex min-h-14 items-center gap-3.5 rounded-2xl border border-[#DCD6F5] px-[18px]"
                >
                  <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-[15px] text-[#2C3352]">{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/talk-to-support"
              className="mt-6 inline-flex min-h-12 items-center rounded-full border-2 border-[#7C3AED] px-7 text-[16px] font-semibold text-[#7C3AED] transition-colors hover:bg-[#F3EFFE]"
            >
              Read support guidance
            </Link>
          </div>

          <div className="relative min-h-[280px] lg:min-h-0">
            <Image
              src="/create-patient-account/assistance.webp"
              alt="Audience in the balconies of an ornate theatre"
              fill
              sizes="(min-width: 1024px) 609px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
