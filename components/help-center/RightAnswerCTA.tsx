import Image from "next/image";
import Link from "next/link";

export default function RightAnswerCTA() {
  return (
    <section className="relative w-full bg-[#16245AAA] overflow-hidden py-24 font-sans text-white sm:py-32">
      {/* Background Image Layer using /help/22.png */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Image
          src="/help/22.jpg"
          alt="Help center background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Blue/Purple Overlay matching design language */}
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 text-center sm:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          {/* Main Headline */}
          <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-[48px]">
            The right answer, or the right next step
          </h2>

          {/* Subtitle / Boundary Text */}
          <p className="mt-4 text-[16px] leading-[1.65] text-blue-100/90 sm:text-[18px]">
            Public help, no sign-in needed. Informational only, and never
            medical advice.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/help-topics"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-[15px] font-bold text-[#0E1646] shadow-xl transition-all duration-200 hover:bg-slate-100"
            >
              Explore help topics &rarr;
            </Link>
            <Link
              href="/guided-pathway"
              className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-7 py-4 text-[15px] font-bold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20"
            >
              Use the guided pathway
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
