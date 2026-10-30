import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";

const principles = [
  "Share only the minimum information needed.",
  "Choice and consent apply where required.",
  "Activity should be transparent to the person.",
  "Access can be reviewed and changed.",
  "There is a channel for corrections and concerns.",
];

export default function PrivacyChoice() {
  return (
    <section id="privacy" className="w-full scroll-mt-24 bg-[#F5F8FC] py-[70px]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,624fr)_minmax(0,570fr)] lg:gap-x-[46px] lg:px-[70px]">
        <div className="relative aspect-[624/467] w-full overflow-hidden rounded-2xl shadow-[0_12px_32px_rgba(36,28,89,0.12)]">
          <Image
            src="/for-caregivers/privacy.webp"
            alt="Clinician explaining scan results to a colleague"
            fill
            sizes="(min-width: 1024px) 624px, 100vw"
            className="object-cover object-center"
          />
        </div>

        <div>
          <SectionHeading
            badge="Privacy and individual choice"
            title={
              <>
                Support someone. Respect
                <br className="hidden sm:block" /> their permissions.
              </>
            }
            description="The person receiving care keeps a say in who sees what, wherever the law and the service allow it."
          />
          <ul className="mt-4 flex flex-col gap-4">
            {principles.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 text-[16px] text-[#5B5880]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E6DEFE] text-[#5B45D6]">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <Link
            href="/privacy-permissions"
            className="mt-6 inline-flex min-h-12 items-center rounded-lg bg-[#5B45D6] px-6 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Privacy &amp; permissions
          </Link>
        </div>
      </div>
    </section>
  );
}
