const terms = [
  { term: "Source organization", def: "The provider that created and keeps a record." },
  { term: "Federated access", def: "Viewing information where it lives, not copying it into one place." },
  { term: "Authorization", def: "Verified permission for a specific purpose." },
  { term: "Proxy", def: "Someone verified to act for you, within limits." },
  { term: "Correction", def: "A change requested from the source that holds the record." },
  { term: "Not connected", def: "The source isn't participating — not that no record exists." },
];

export default function KeyTerms() {
  return (
    <section className="bg-[#F5F7FC] px-6 py-16 font-sans lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-[1px] w-8 bg-[#2F4DC0]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#2F4DC0]">
            Key terms
          </span>
        </div>
        <h2 className="mb-10 text-3xl font-extrabold tracking-tight text-[#0A2540] md:text-4xl">
          Words worth knowing.
        </h2>

        <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {terms.map((t) => (
            <div
              key={t.term}
              className="rounded-2xl border border-[#E6EBF1] bg-white p-6"
            >
              <dt className="mb-2 text-sm font-bold text-[#0A2540]">{t.term}</dt>
              <dd className="text-xs leading-relaxed text-[#697386] md:text-sm">
                {t.def}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
