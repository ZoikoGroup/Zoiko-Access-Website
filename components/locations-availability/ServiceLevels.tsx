import Image from "next/image";
import { BarChart3, FileText, Headphones, Link2, Route } from "lucide-react";
import SectionHeading from "./SectionHeading";

const levels = [
  {
    title: "Informational",
    description: "Learn how services and care pathways work.",
    tag: "Where published",
    image: {
      src: "/locations-availability/level-informational.webp",
      alt: "Clinician holding a phone",
    },
  },
  {
    title: "Service discovery",
    description: "Browse approved healthcare listings where available.",
    tag: "Needs separate approval",
    image: {
      src: "/locations-availability/level-discovery.webp",
      alt: "Surgical team seen from below an operating light",
    },
  },
  {
    title: "Appointment and referral requests",
    description:
      "Start an authorized request only where confirmed to be enabled. Requests are not confirmed appointments.",
    tag: "Needs separate local enablement",
    image: {
      src: "/locations-availability/level-requests.webp",
      alt: "Clinician talking with a patient",
    },
  },
];

const notConfirmed = "Not confirmed";
const publishedPerLocation = "Published per location";
const approvedRecord = "Approved record, when published";

const capabilities = [
  { icon: FileText, title: "Information", next: "Read how it works" },
  { icon: BarChart3, title: "Service discovery", next: "Only where approved" },
  { icon: Route, title: "Request or booking", next: "Only where enabled" },
  { icon: Link2, title: "Referrals", next: "Only where enabled" },
  { icon: Headphones, title: "Support", next: "Published route only" },
];

const cardShadow =
  "shadow-[0_2px_6px_rgba(36,28,89,0.05),0_12px_32px_rgba(36,28,89,0.10)]";

export default function ServiceLevels() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Service levels"
          title="What can I do in this location?"
          description="Each level is gated separately: market, partners, operational readiness and regulatory and privacy approval all have to be in place."
        />

        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-3">
          {levels.map((level) => (
            <article
              key={level.title}
              className={`flex flex-col overflow-hidden rounded-2xl border border-[#E6E3F5] bg-white ${cardShadow}`}
            >
              <div className="relative aspect-[409/150] w-full bg-gradient-to-r from-[#C9BBF8] to-[#4F5FD6]">
                <Image
                  src={level.image.src}
                  alt={level.image.alt}
                  fill
                  sizes="(min-width: 768px) 409px, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-1 flex-col items-start gap-2.5 px-5 pb-6 pt-5">
                <h3 className="text-[18px] font-bold leading-6 text-[#211A5A] [font-family:var(--font-sora)]">
                  {level.title}
                </h3>
                <p className="text-[16px] leading-[25px] text-[#615D7E]">
                  {level.description}
                </p>
                <span className="mt-auto rounded-full bg-[#EEEAFE] px-3 py-[3px] text-[12px] font-semibold leading-5 text-[#4F3FC8]">
                  {level.tag}
                </span>
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-10 text-[18px] font-bold leading-6 text-[#211A5A] [font-family:var(--font-sora)]">
          Availability per capability
        </h3>
        <p className="mt-2.5 max-w-[690px] text-[16px] leading-7 text-[#615D7E]">
          Each capability has its own status, scope, source and next action.
          Nothing is shown as available until it is confirmed.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            const rows = [
              ["Status", notConfirmed],
              ["Scope", publishedPerLocation],
              ["Source", approvedRecord],
              ["Next action", capability.next],
            ];
            return (
              <div
                key={capability.title}
                className={`rounded-2xl border border-[#E6E3F5] bg-white p-6 ${cardShadow}`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEEAFE] text-[#4F3FC8]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h4 className="text-[18px] font-bold leading-6 text-[#211A5A] [font-family:var(--font-sora)]">
                    {capability.title}
                  </h4>
                </div>
                <dl className="mt-5 space-y-1.5">
                  {rows.map(([label, value]) => (
                    <div key={label} className="flex gap-2.5 text-[14px] leading-6">
                      <dt className="w-24 shrink-0 font-semibold text-[#211A5A]">
                        {label}
                      </dt>
                      <dd className="text-[#615D7E]">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
