import { heading } from "./shared";

export default function ProgramCoverage() {
  return (
    <section className="bg-white px-6 pb-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <h2 className={`${heading} mb-5 text-3xl text-[#16245A] md:text-4xl`}>
          Program coverage, stated honestly.
        </h2>

        <div className="flex flex-col gap-4 rounded-lg border border-[#E4E7F2] p-6 md:flex-row md:items-center md:gap-4">
          <label htmlFor="ngo-coverage-location" className="text-sm font-bold text-[#16245A]">
            Location
          </label>
          <select
            id="ngo-coverage-location"
            defaultValue=""
            className="w-full rounded-md border border-[#CBD2E0] bg-[#EFEFEF] px-4 py-3 text-sm text-[#16245A] focus:border-[#7B5CF0] focus:outline-none md:w-56"
          >
            <option value="" disabled>
              Choose a country or region
            </option>
          </select>
          <p className="text-sm text-[#5B6B8C]">
            No location selected. Program type, review date and known
            limitations appear only once approved.
          </p>
        </div>
      </div>
    </section>
  );
}
