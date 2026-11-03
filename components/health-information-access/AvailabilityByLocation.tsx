export default function AvailabilityByLocation() {
  return (
    <section className="bg-white px-6 py-16 font-sans lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-[#0A2540] md:text-4xl">
          Availability depends on location and source.
        </h2>

        <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-[#E6EBF1] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] md:flex-row md:items-end md:gap-8 md:p-8">
          <div className="flex w-full flex-col gap-2 md:w-64">
            <label
              htmlFor="hia-care-location"
              className="text-sm font-bold text-[#0A2540]"
            >
              Care location
            </label>
            <select
              id="hia-care-location"
              defaultValue=""
              className="w-full rounded-xl border border-[#E2E8F0] bg-[#EFEFEF] px-4 py-3 text-sm text-[#425466] focus:border-[#635BFF] focus:outline-none"
            >
              <option value="" disabled>
                Choose a care location
              </option>
            </select>
          </div>
          <p className="text-xs leading-relaxed text-[#697386] md:pb-3 md:text-sm">
            No location selected. No connected sources are shown in this
            informational mode.
          </p>
        </div>

        <div
          role="note"
          className="rounded-xl border border-[#F5C26B] bg-[#FFF8E6] px-5 py-3 text-xs text-[#5C4400] md:text-sm"
        >
          <strong>Urgent medical need?</strong> Contact local emergency
          services. This page can&apos;t help in an emergency.
        </div>
      </div>
    </section>
  );
}
