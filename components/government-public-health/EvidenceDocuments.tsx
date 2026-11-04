import { Eyebrow, IMG, Pill, heading } from "./shared";

const docs = [
  { title: "Privacy overview", text: "How information is handled.", image: `${IMG}/evidence-privacy.webp`, alt: "Hands holding a tablet showing a privacy screen" },
  { title: "Security overview", text: "How systems are protected.", image: `${IMG}/evidence-security.webp`, alt: "Padlock on a weathered door" },
  { title: "Accessibility", text: "How the service supports everyone.", image: `${IMG}/evidence-accessibility.webp`, alt: "Person reading a braille book" },
  { title: "Clinical responsibility", text: "Who makes clinical decisions.", image: `${IMG}/evidence-clinical.webp`, alt: "Nurse taking a patient's blood sample" },
  { title: "Approved policies", text: "Terms and governing policies.", image: `${IMG}/evidence-policies.webp`, alt: "People reviewing and signing a document" },
];

export default function EvidenceDocuments() {
  return (
    <section className="bg-[#F5F8FC] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Evidence &amp; accountability</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>
          Published evidence you can review.
        </h2>
        <p className="mb-8 text-base leading-7 text-[#5B6B8C]">
          Only approved public documents are listed. Links appear once each is published.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {docs.map((d) => (
            <article
              key={d.title}
              className="flex flex-col items-start gap-1 rounded-2xl border border-[#E4E7F2] bg-white p-5"
            >
              <img src={d.image} alt={d.alt} className="mb-1 h-32 w-full rounded-sm object-cover" />
              <h3 className={`${heading} text-base text-[#16245A]`}>{d.title}</h3>
              <p className="pb-2 text-sm leading-6 text-[#5B6B8C]">{d.text}</p>
              <Pill>Approved document</Pill>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
