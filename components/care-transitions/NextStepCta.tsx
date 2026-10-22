import Image from "next/image";
import Link from "next/link";

export default function NextStepCta() {
  return (
    <section className="relative w-full overflow-hidden py-[70px] px-4 md:px-[70px] bg-[#02125f]">
      {/* Background Image: Clinicians review photo from Figma */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/care-transitions/ct14-photo.png"
          alt="Explore coordinated care pathways"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Exact Figma Gradient Overlay: #1b2fb5 to #02125f */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(27, 47, 181, 0.88) 0%, rgba(2, 18, 95, 0.92) 100%)",
          }}
        />
      </div>

      {/* Content: Exact Figma Left-Aligned */}
      <div className="relative z-10 mx-auto max-w-[1300px] text-left">
        <div className="max-w-[986px]">
          {/* Badge */}
          <div className="mb-[14px] inline-flex items-center gap-[10px]">
            <span className="h-[2px] w-[28px] bg-[#cdbcff]" aria-hidden="true" />
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                lineHeight: "21.45px",
                letterSpacing: "0.52px",
                color: "#e6dcff",
              }}
            >
              Your next step
            </span>
          </div>

          {/* Heading: Exact Figma Left-Aligned with exact line breaks */}
          <h2
            className="mb-[16px] text-white"
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(34px, 4.5vw, 60px)",
              lineHeight: "clamp(40px, 5vw, 64.8px)",
              letterSpacing: "-1.5px",
            }}
          >
            Explore coordinated care
            <br />
            pathways for your
            <br />
            organization.
          </h2>

          {/* Lead */}
          <p
            className="mb-[32px] max-w-[700px] text-[#e6e9ff]"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18.5px",
              lineHeight: "30.53px",
            }}
          >
            Learn how Zoiko Access is designed to support authorized clinical handoffs.
          </p>

          {/* Button: Left-Aligned */}
          <div>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center rounded-full bg-white px-[32px] py-[16px] text-center text-[#031974] transition-all hover:bg-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.18)]"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                lineHeight: "24.75px",
              }}
            >
              Review how it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
