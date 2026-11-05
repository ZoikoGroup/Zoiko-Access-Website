import { Eyebrow, heading } from "./shared";

// No verified listing is connected yet, so choosing a location changes nothing.
const locations = ["United States", "United Kingdom", "Canada", "European Union", "India", "Other"];

export default function RegionalAvailability() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_50%_50%,#A78BFA_55%,#2E1065_130%)] px-6 py-16 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-8 rounded-3xl bg-white p-8 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-10">
        <div>
          <Eyebrow>Regional availability &amp; limits</Eyebrow>
          <h2 className={`${heading} text-3xl text-[#16245A] md:text-[40px] md:leading-[1.2]`}>
            Capabilities depend on place and program.
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="care-location" className="text-base font-bold text-[#16245A]">
            Care location
          </label>
          <select
            id="care-location"
            defaultValue=""
            className="w-full rounded-xl border border-[#9AA3BD] bg-[#EFEFEF] px-4 py-3.5 text-base text-[#16245A]"
          >
            <option value="" disabled>
              Choose a location
            </option>
            {locations.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
          <p className="text-sm leading-6 text-[#5B6B8C]">
            No live verified listing. Capabilities depend on the authorized organization, care
            location and program.
          </p>
        </div>
      </div>
    </section>
  );
}
