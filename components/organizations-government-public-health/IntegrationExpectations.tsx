import { Eyebrow, IMG, heading } from "./shared";

const items = [
  { title: "Mapping", text: "How data fields correspond.", image: `${IMG}/integration-mapping.webp` },
  { title: "Lawful basis", text: "Consent or other lawful basis.", image: `${IMG}/integration-lawful-basis.webp` },
  { title: "Source of record", text: "Who owns the truth.", image: `${IMG}/integration-source-of-record.webp` },
  { title: "Versioning & monitoring", text: "Changes tracked and watched.", image: `${IMG}/integration-versioning.webp` },
];

export default function IntegrationExpectations() {
  return (
    <section className="bg-[#F5F8FC] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Integration expectations</Eyebrow>
        <h2 className={`${heading} mb-8 text-3xl text-[#16245A] md:text-4xl`}>
          What any integration must define.
        </h2>

        {/* 1px gap over a light background draws the dividers between cells */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-[#E4E7F2] sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="flex flex-col gap-1 bg-white px-6 pb-8 pt-6">
              <img src={it.image} alt="" className="mx-auto mb-4 h-36 w-auto object-contain" />
              <h3 className={`${heading} text-base text-[#16245A]`}>{it.title}</h3>
              <p className="text-sm leading-6 text-[#5B6B8C]">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
