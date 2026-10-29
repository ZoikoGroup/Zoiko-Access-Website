import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import {
  BecomePartnerHero,
  WhoItServes,
  DiscussionAreas,
  PartnerResponsibilities,
  PartnerReadiness,
  PartnershipPathway,
  CoverageAndClaims,
  TechnicalDiligence,
  InstitutionalEnquiry,
  BecomePartnerFaq,
  BecomePartnerCta,
} from "@/components/become-partner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Become a Partner | Zoiko Access",
  description:
    "Explore governed payer partnerships with Zoiko Access. Learn how payer and benefits organizations evaluate healthcare access, technical integrations, and member coordination.",
};

export default function BecomePartnerPage() {
  return (
    <main
      className={`${poppins.variable} ${inter.variable} font-inter w-full min-h-screen bg-white`}
    >
      {/* 1. Hero (new design) */}
      <BecomePartnerHero />

      {/* 2. Who it serves */}
      <WhoItServes />

      {/* 3. Discussion areas */}
      <DiscussionAreas />

      {/* 4. Responsibilities */}
      <PartnerResponsibilities />

      {/* 5. Readiness principles */}
      <PartnerReadiness />

      {/* 6. Evaluation Pathway */}
      <PartnershipPathway />

      {/* 7. Coverage & Claims (08 + 09) */}
      <CoverageAndClaims />

      {/* 8. Technical diligence & data protection (10 + 11) */}
      <TechnicalDiligence />

      {/* 9. Institutional enquiry (12 + 13) */}
      <InstitutionalEnquiry />

      {/* 10. FAQ */}
      <BecomePartnerFaq />

      {/* 11. CTA */}
      <BecomePartnerCta />
    </main>
  );
}
