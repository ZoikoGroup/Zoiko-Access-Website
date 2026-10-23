import { PHOTOS, PhotoCardGrid } from "./CardGrids";
import SectionHeading from "./SectionHeading";

const states = [
  {
    title: "No participating referrals",
    text: "No supported referrals are available for this account. This does not mean you have no referrals with your healthcare providers. Contact the responsible care organization if you expect one.",
    image: PHOTOS.surgeons,
  },
  {
    title: "No matches for your filters",
    text: "Nothing matches the filters you chose. Clear them to see everything available.",
    image: PHOTOS.ward,
  },
  {
    title: "Integration pending",
    text: "The organization is not connected yet, so no status can be shown.",
    image: PHOTOS.scanReview,
  },
  {
    title: "Source offline or delayed",
    text: "We cannot confirm the latest status right now. The last available update is shown with its source and time. Contact the responsible organization for time-sensitive questions.",
    image: PHOTOS.building,
  },
  {
    title: "Not authorized",
    text: "You do not have permission to view referrals for this person. Check your authorized relationship or request assistance through an approved process.",
    image: PHOTOS.operatingRoom,
  },
  {
    title: "Partner suspended",
    text: "Operational actions are hidden and a safe informational fallback is shown.",
    image: PHOTOS.surgeonCloseUp,
  },
  {
    title: "Taking too long",
    text: "A retry is offered, with your filters kept and no personal detail in the message.",
    image: PHOTOS.clinicianPhone,
  },
  {
    title: "Record withdrawn",
    text: "The history stays visible and the withdrawal is clearly labeled.",
    image: PHOTOS.surgeonsOverhead,
  },
];

export default function HonestAbsence() {
  return (
    <section className="w-full bg-white py-[76px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Honest absence and errors"
          title={
            <>
              When there is nothing to
              <br className="hidden sm:block" /> show, we say exactly why
            </>
          }
          description="Eight different situations get eight different messages, so an empty screen never means more than it should."
        />
        <div className="mt-6">
          <PhotoCardGrid items={states} />
        </div>
      </div>
    </section>
  );
}
