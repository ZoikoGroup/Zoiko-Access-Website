import { PHOTOS, PhotoCardGrid } from "./CardGrids";
import SectionHeading from "./SectionHeading";

const rules = [
  { title: "What we list", text: "Title, type, who posted it, the date and the file size.", image: PHOTOS.doctorPatient },
  {
    title: "Entitlement first",
    text: "A document appears only if you are entitled and the source released it.",
    image: PHOTOS.kitchen,
  },
  { title: "Safe download", text: "Downloads are protected and each access is audited.", image: PHOTOS.phoneLaptop },
  {
    title: "No previews",
    text: "No previews, emails or prefetching that could send health information elsewhere.",
    image: PHOTOS.stethoscope,
  },
];

export default function SupportingMaterials() {
  return (
    <section className="w-full bg-[#F5F8FC] py-[76px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Supporting materials"
          title={
            <>
              Documents only when you
              <br className="hidden sm:block" /> are entitled to them
            </>
          }
          description="Nothing is shown automatically, and nothing is previewed or sent to third parties."
        />
        <div className="mt-6">
          <PhotoCardGrid items={rules} />
        </div>
      </div>
    </section>
  );
}
