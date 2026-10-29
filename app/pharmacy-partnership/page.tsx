import type { Metadata } from "next";
import {
  PartnershipHero,
  AudienceCards,
  PartnershipPillars,
  ResponsibilityTable,
  AssessmentJourney,
  ReadinessEvidence,
  InterfaceFlow,
  RegionScope,
  IntakeCallout,
  PartnershipFaq,
  RelatedDestinations,
  PartnershipCta,
} from "@/components/pharmacy-partnership";
import {
  inter,
  poppins,
  sora,
  fontInter,
} from "@/components/pharmacy-partnership/fonts";

export const metadata: Metadata = {
  title: "Pharmacy Partnerships | Zoiko Access",
  description:
    "Explore pharmacy partnership opportunities with Zoiko Access: permissioned pharmacy discovery, coordination and governed connectivity, subject to assessment and local approval.",
};

export default function PharmacyPartnershipPage() {
  return (
    <main
      className={`${inter.variable} ${poppins.variable} ${sora.variable} ${fontInter} w-full`}
    >
      <PartnershipHero />
      <AudienceCards />
      <PartnershipPillars />
      <ResponsibilityTable />
      <AssessmentJourney />
      <ReadinessEvidence />
      <InterfaceFlow />
      <RegionScope />
      <IntakeCallout />
      <PartnershipFaq />
      <RelatedDestinations />
      <PartnershipCta />
    </main>
  );
}
