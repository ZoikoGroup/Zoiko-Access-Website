import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AssessIntegrationReadiness() {
  return (
    <section className="relative w-full overflow-hidden py-20 font-sans sm:py-28 text-white">
      {/* Background Image Layer using /tech/grad.png */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Image
          src="/tech/grad.png"
          alt="Assess integration readiness background gradient"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-7">
            <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-[48px]">
              Assess integration readiness.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-blue-100/90 sm:text-[16px]">
              Talking to an approved team will be possible once that route is
              staffed and ready. Until then, start with the implementation
              guidance.
            </p>
          </div>

          {/* Right Column: Implementation Guidance Card */}
          <div className="lg:col-span-5">
            <div
              className="flex flex-col justify-between rounded-3xl p-8 shadow-xl backdrop-blur-md border border-white/10"
              style={{ backgroundColor: "#FFFFFF14" }}
            >
              <div>
                <h3 className="text-[20px] font-bold tracking-tight text-white">
                  Implementation guidance
                </h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-[#FFFFFFC7]">
                  How integrators assess, build and validate connections.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <Link
                  href="/implementation-guidance"
                  className="inline-flex items-center max-w-60 rounded-2xl bg-white px-6 py-3.5 text-[15px] font-bold text-[#0E1646] shadow-sm transition-all duration-200 hover:bg-slate-50 hover:shadow"
                >
                  Read the guidance <ArrowRight className="h-4 w-4 ml-1" />
                </Link>

                <span className="text-[13px] font-medium text-[#FFFFFFA6]">
                  Contact route: not open yet.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
