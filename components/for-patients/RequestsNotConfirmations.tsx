import Link from "next/link";
import SectionHeading from "./SectionHeading";

const topics = [
  {
    title: "Appointments & requests",
    paragraphs: [
      "Requested, awaiting acceptance, held where that provider concept exists, confirmed, changed, and canceled are distinct states.",
      "A partner-owned acceptance is needed before confirmation. No patient appointment workspace or slot calendar is connected.",
    ],
    link: { text: "Learn about appointment requests →", href: "/appointments-requests" },
  },
  {
    title: "Referrals & next steps",
    paragraphs: [
      "Sending, receipt, acknowledgment, professional review, outcome, and next action have different meanings and owners.",
      "Delivery does not establish acceptance. No private patient referral workflow is connected.",
    ],
    link: { text: "How referrals work →", href: "/how-referrals-work" },
  },
  {
    title: "Messages & notifications",
    paragraphs: [
      "Delivered, read, and acted upon are different source-reported events. None automatically means clinical review.",
      "Protected patient-to-provider messages require an authorized service. This public page contains no composer, inbox, or alerts.",
    ],
    link: { text: "Understand status language →", href: "/care-pathways" },
  },
];

export default function RequestsNotConfirmations() {
  return (
    <section className="w-full bg-gradient-to-br from-[#F4F2FD] via-[#EEEAFE] to-[#DACEFE] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="Appointments, referrals & messages"
          title="A request is not a confirmation."
          description="The responsible source—not a page label or a transport receipt—determines the meaning of an update."
        />

        <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-3">
          {topics.map((topic) => (
            <article
              key={topic.title}
              className="flex flex-col rounded-xl border border-[#E5E7EB] bg-white p-7"
            >
              <h3 className="text-[22px] font-bold leading-7 tracking-[-0.02em] text-[#23327A] [font-family:var(--font-poppins)] sm:text-[24px]">
                {topic.title}
              </h3>
              <div className="mt-3 space-y-3">
                {topic.paragraphs.map((text) => (
                  <p key={text} className="text-[14px] leading-6 text-[#5E6B85]">
                    {text}
                  </p>
                ))}
              </div>
              <div className="min-h-6 flex-1" aria-hidden="true" />
              <Link
                href={topic.link.href}
                className="text-[12px] font-semibold leading-5 text-[#B9A6F9] hover:text-[#6A44D4]"
              >
                {topic.link.text}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
