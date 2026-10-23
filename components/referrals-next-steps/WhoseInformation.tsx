import { ShieldCheck, Stethoscope, UserRound, Users } from "lucide-react";
import { IconCardGrid } from "./CardGrids";
import SectionHeading from "./SectionHeading";

const viewers = [
  { icon: UserRound, title: "Patient (self)", text: "See your own dated, source-owned timeline and the next available step." },
  { icon: ShieldCheck, title: "Verified parent or guardian", text: "See only what local guardianship policy permits for the dependent." },
  {
    icon: Users,
    title: "Delegated caregiver",
    text: "Scope-limited access, a clear “acting as” indication, and a visible expiry and revocation.",
  },
  {
    icon: Stethoscope,
    title: "Care-team partner",
    text: "Understands what patient-facing data means. No inference from message delivery.",
  },
];

export default function WhoseInformation() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F3F1FE] to-[#D3C8FD] py-[76px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Whose information is this?"
          title={
            <>
              Always clear who you are
              <br className="hidden sm:block" /> viewing
            </>
          }
          description="The page shows the person’s verified name and your relationship. Changing person requires new authorization, and everything from the previous person is cleared."
        />
        <div className="mt-8">
          <IconCardGrid items={viewers} />
        </div>
      </div>
    </section>
  );
}
