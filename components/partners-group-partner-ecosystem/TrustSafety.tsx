import { Eyebrow, IMG, heading, section } from "./shared";

export default function TrustSafety() {
  return (
    <section className={`bg-white ${section}`}>
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 overflow-hidden rounded-3xl bg-[#16245A] lg:grid-cols-2">
        <img
          src={`${IMG}/clinician.webp`}
          alt="A smiling clinician in a white coat standing outdoors"
          className="h-[280px] w-full object-cover object-[50%_25%] sm:h-[360px] lg:h-full"
        />
        <div className="px-6 py-10 sm:px-10 lg:py-14">
          <Eyebrow light>Trust &amp; safety</Eyebrow>
          <h2 className={`${heading} text-3xl text-white md:text-4xl md:leading-[48px]`}>
            Designed is not the same as <span className="text-[#B9A7F7]">available</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-[#D7DEF5]">
            Clinical decisions, source records and receiving acceptance remain with authorized healthcare institutions
            and professionals.
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-white">
            <li>Not for emergencies. In an emergency, contact local emergency services.</li>
            <li>Delivery of information is not clinical review.</li>
            <li>No patient information in public inquiries or analytics.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
