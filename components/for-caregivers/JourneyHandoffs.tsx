import { CalendarDays, Database, Link2, MessageSquare } from "lucide-react";
import SectionHeading from "./SectionHeading";

const handoffs = [
  {
    icon: CalendarDays,
    title: "Appointments",
    learn: "General information about how appointments work.",
    permission: "Booking or changing a visit for someone else.",
    confirms: "The care provider. A request does not guarantee a confirmed visit.",
  },
  {
    icon: Link2,
    title: "Referrals",
    learn: "How referrals generally work.",
    permission: "Seeing or acting on someone’s referral.",
    confirms: "The responsible clinician or organization.",
  },
  {
    icon: MessageSquare,
    title: "Secure messages",
    learn: "That secure messaging exists where a service offers it.",
    permission: "Reading or sending messages for someone else.",
    confirms: "A receipt is not professional review.",
  },
  {
    icon: Database,
    title: "Health records",
    learn: "That records stay with the organizations responsible for them.",
    permission: "Viewing any part of someone’s record.",
    confirms:
      "The responsible source system. There is no single universal record.",
  },
];

const columns = [
  ["Anyone can learn", "learn"],
  ["Needs verified permission", "permission"],
  ["Who confirms", "confirms"],
] as const;

export default function JourneyHandoffs() {
  return (
    <section className="w-full bg-gradient-to-br from-[#E9E3FF] via-[#E0D7FE] to-[#D6CBFD] py-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Care journey handoffs"
          title={
            <>
              A request is not a
              <br className="hidden sm:block" /> confirmation
            </>
          }
          description="The responsible organization, not a page label or a message receipt, determines what happened."
        />

        <div className="mt-8 flex flex-col gap-6">
          {handoffs.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-[#E4E0F7] bg-white px-6 pb-6 pt-6 shadow-[0_8px_24px_rgba(36,28,89,0.06)]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEEAFE] text-[#5B45D6]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-[18px] font-semibold text-[#1D1857] [font-family:var(--font-poppins)]">
                    {item.title}
                  </h3>
                </div>
                <dl className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-x-4">
                  {columns.map(([label, key]) => (
                    <div key={label}>
                      <dt className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5B45D6]">
                        {label}
                      </dt>
                      <dd className="mt-0.5 text-[15px] leading-6 text-[#5B5880]">
                        {item[key]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
