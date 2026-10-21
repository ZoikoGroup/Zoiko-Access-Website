import { PHOTOS, PhotoCardGrid } from "./CardGrids";
import SectionHeading from "./SectionHeading";

const principles = [
  { title: "Your consent", text: "You choose whether to receive alerts and by which channel.", image: PHOTOS.surgeons },
  {
    title: "Minimal previews",
    text: "Alerts say that something changed, never what the referral is about.",
    image: PHOTOS.ward,
  },
  {
    title: "Confirmation",
    text: "You see that your preference was saved, and you can turn alerts off at any time.",
    image: PHOTOS.scanReview,
  },
  {
    title: "Not evidence of review",
    text: "An alert does not mean a clinician has reviewed a referral.",
    image: PHOTOS.building,
  },
];

export default function Alerts() {
  return (
    <section className="w-full bg-white py-[76px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Alerts"
          title={
            <>
              Optional alerts that never
              <br className="hidden sm:block" /> reveal clinical detail
            </>
          }
          description="If an approved notification service is live, you will see these controls. Otherwise the whole area stays hidden."
        />
        <div className="mt-6">
          <PhotoCardGrid items={principles} />
        </div>
      </div>
    </section>
  );
}
