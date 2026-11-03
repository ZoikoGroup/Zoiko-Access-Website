import { Eyebrow, IMG, heading } from "./shared";

export default function InclusiveAccess() {
  return (
    <section id="inclusive-access" className="scroll-mt-24 bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Inclusive access</Eyebrow>
        <h2 className={`${heading} mb-6 text-3xl text-[#16245A] md:text-4xl`}>
          Access that reaches everyone.
        </h2>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          <img
            src={`${IMG}/inclusive-community.webp`}
            alt="Group of people sitting together by the water, arms around each other"
            className="h-64 w-full rounded-md object-cover sm:col-span-2 lg:row-span-2 lg:h-[454px]"
          />

          <div className="flex flex-col justify-center rounded-md bg-[#16245A] p-6 text-white">
            <h3 className={`${heading} mb-2 text-xl`}>Translations</h3>
            <p className="text-sm leading-6 text-white/80">
              Approved translations, where available.
            </p>
          </div>

          <img
            src={`${IMG}/inclusive-accessible-formats.webp`}
            alt="Two people pointing at a laptop screen"
            className="h-52 w-full rounded-md object-cover lg:h-[220px]"
          />

          <img
            src={`${IMG}/inclusive-assisted-participation.webp`}
            alt="Nurse giving an older woman a vaccination"
            className="h-52 w-full rounded-md object-cover lg:h-[220px]"
          />

          <div className="flex flex-col justify-center rounded-md bg-[#9B87F5] p-6 text-white">
            <h3 className={`${heading} mb-2 text-xl`}>Low-connectivity &amp; assisted routes</h3>
            <p className="text-sm leading-6 text-white/85">
              Non-digital alternatives and help at the person&apos;s request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
