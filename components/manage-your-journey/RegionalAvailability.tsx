import Eyebrow from "./Eyebrow";

export default function RegionalAvailability() {
  return (
    <section className="bg-gradient-to-r from-[#1A1F8F] to-[#4A2FC9] px-6 py-16 font-sans lg:px-24 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 overflow-hidden rounded-2xl bg-white md:grid-cols-2">
        <div className="p-8 md:p-10">
          <Eyebrow>Regional availability</Eyebrow>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-[#0A2540] md:text-4xl">
            One card per authorized record.
          </h2>
          <p className="text-sm leading-relaxed text-[#697386]">
            Your list appears only after region, account, role and partner
            activation. Location never confirms eligibility.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-3 bg-[#F1EDFF] p-8 md:p-10">
          <label htmlFor="journey-care-location" className="text-sm font-bold text-[#0A2540]">
            Preview a care location
          </label>
          <select
            id="journey-care-location"
            defaultValue=""
            className="w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#425466] focus:border-[#635BFF] focus:outline-none"
          >
            <option value="" disabled>
              Choose a care location
            </option>
          </select>
          <p className="text-xs text-[#697386]">
            No location selected. No live list is shown in this mode.
          </p>
        </div>
      </div>
    </section>
  );
}
