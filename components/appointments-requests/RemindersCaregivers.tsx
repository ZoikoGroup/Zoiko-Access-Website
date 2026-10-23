import Link from "next/link";
import { MessageSquare, Users } from "lucide-react";
import PhotoCard, { Tag } from "./PhotoCard";
import SectionHeading from "./SectionHeading";

export default function RemindersCaregivers() {
  return (
    <section className="w-full bg-white py-[90px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Reminders and caregivers"
          title={
            <>
              Control who sees what, and how
              <br className="hidden sm:block" /> you’re told
            </>
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <PhotoCard
            image={{
              src: "/appointments-requests/reminders.webp",
              alt: "Audience in the balconies of an ornate theatre",
            }}
            icon={MessageSquare}
            title="Reminders you choose"
            aspect="aspect-[629/263]"
            sizes="(min-width: 768px) 629px, 100vw"
          >
            <p className="mt-2 max-w-[520px] text-[15px] leading-6 text-[#2C3352]">
              Reminders appear only if an approved message service is deployed,
              and only if you opt in. Lock-screen previews never show
              appointment details.
            </p>
            <div className="mt-3">
              <Tag>Opt-in</Tag>
            </div>
          </PhotoCard>

          <PhotoCard
            image={{
              src: "/appointments-requests/delegation.webp",
              alt: "Group of people holding hands on a beach at sunset",
            }}
            icon={Users}
            title="Caregiver and delegation"
            aspect="aspect-[629/261]"
            sizes="(min-width: 768px) 629px, 100vw"
          >
            <p className="mt-2 max-w-[500px] text-[15px] leading-6 text-[#2C3352]">
              A delegated person is clearly marked. Access is scoped,
              re-checked and ends when authority is revoked.
            </p>
            <Link
              href="/for-caregivers"
              className="mt-5 text-[14px] font-semibold text-[#7C3AED] hover:underline"
            >
              Learn about caregivers and families
            </Link>
          </PhotoCard>
        </div>
      </div>
    </section>
  );
}
