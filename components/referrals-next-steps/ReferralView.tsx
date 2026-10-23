import { PHOTOS, PhotoCardGrid } from "./CardGrids";
import SectionHeading from "./SectionHeading";

const fields = [
  {
    title: "Service category",
    text: "A privacy-safe, non-diagnostic label chosen by the referring organization.",
    image: PHOTOS.clinicianPhone,
  },
  {
    title: "Source organization",
    text: "The accountable record custodian that supplied the update.",
    image: PHOTOS.surgeonsOverhead,
  },
  { title: "Last event", text: "The most recent verified event, with its time and time zone.", image: PHOTOS.doctorPatient },
  {
    title: "Next owner",
    text: "Who is responsible for the next step, where the organization publishes it.",
    image: PHOTOS.kitchen,
  },
  {
    title: "Masked reference",
    text: "A stable reference with part of it hidden. Never shown in analytics.",
    image: PHOTOS.phoneLaptop,
  },
  {
    title: "Last verified",
    text: "When the information was last confirmed, with a currentness notice.",
    image: PHOTOS.stethoscope,
  },
];

export default function ReferralView() {
  return (
    <section className="w-full bg-[#F5F8FC] py-[76px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="What a referral view shows"
          title={
            <>
              The details that matter,
              <br className="hidden sm:block" /> from the right source
            </>
          }
          description="Shown only to authenticated, authorized accounts for supported services."
        />
        <div className="mt-6">
          <PhotoCardGrid items={fields} />
        </div>
      </div>
    </section>
  );
}
