import Image from "next/image";
import SectionHeading from "./SectionHeading";

const roles = [
  {
    title: "Patient",
    description:
      "Participates in permitted decisions and information-sharing under applicable rules.",
  },
  {
    title: "Verified caregiver / guardian",
    description:
      "Acts only within valid delegated or legal authority and the allowed scope.",
  },
  {
    title: "Care professional",
    description:
      "Retains responsibility for clinical assessment and professional judgment.",
  },
  {
    title: "Care organization",
    description:
      "Owns its service decisions, records, scheduling, and relevant source status.",
  },
];

export default function ParticipantRoles() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 sm:px-10 lg:grid-cols-[600px_1fr] lg:px-20">
        <div>
          <SectionHeading
            badge="People & permissions"
            title="Each participant has a defined role."
          />

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {roles.map((role) => (
              <div
                key={role.title}
                className="rounded-xl border border-[#E5E7EB] bg-white px-6 pb-8 pt-6"
              >
                <h3 className="text-[20px] font-bold leading-[1.3] text-[#23327A]">
                  {role.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.8] text-[#4B5563]">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[300px] w-full sm:h-[440px]">
          <Image
            src="/care-pathways/participant-roles.webp"
            alt="Conceptual care-navigation route connecting information, possible next steps, independent organizations, and follow-up"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
