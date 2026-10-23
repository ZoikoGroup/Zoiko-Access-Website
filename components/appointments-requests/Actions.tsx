import { CalendarDays, MessageSquare, TriangleAlert } from "lucide-react";
import PhotoCard, { Tag } from "./PhotoCard";
import SectionHeading from "./SectionHeading";

const actions = [
  {
    icon: TriangleAlert,
    title: "Cancel request",
    text: "Withdraw a request that has not been confirmed. Available only if the organization allows it.",
    image: { src: "/appointments-requests/action-cancel-request.webp", alt: "Man frowning at a laptop" },
  },
  {
    icon: CalendarDays,
    title: "Cancel booking",
    text: "Cancel a confirmed appointment through the organization’s approved process.",
    image: { src: "/appointments-requests/action-cancel-booking.webp", alt: "Older woman cooking at home" },
  },
  {
    icon: MessageSquare,
    title: "Ask provider to reschedule",
    text: "Send a reschedule request. The time does not change until the organization confirms.",
    image: { src: "/appointments-requests/action-reschedule.webp", alt: "Clinician talking with a patient" },
  },
];

export default function Actions() {
  return (
    <section className="w-full bg-gradient-to-br from-[#EEEAFE] via-[#E5DEFE] to-[#D9CEFD] py-[90px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Actions"
          title={
            <>
              Only what the organization
              <br className="hidden sm:block" /> supports
            </>
          }
          description="Each action is checked when it appears and again when you submit. You see the consequence before you confirm."
        />

        <div className="mt-10 grid grid-cols-1 gap-[18px] md:grid-cols-3">
          {actions.map((action) => (
            <PhotoCard
              key={action.title}
              image={action.image}
              icon={action.icon}
              title={action.title}
              aspect="aspect-[420/232]"
              sizes="(min-width: 768px) 420px, 100vw"
            >
              <p className="mt-2 max-w-[320px] text-[15px] leading-6 text-[#2C3352]">
                {action.text}
              </p>
              <div className="min-h-4 flex-1" aria-hidden="true" />
              <Tag>Where permitted</Tag>
            </PhotoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
