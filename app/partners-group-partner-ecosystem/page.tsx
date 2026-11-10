import type { Metadata } from "next";
import { inter, poppins, fontInter } from "@/components/find-care/fonts";
import {
  EcosystemHero,
  FourAudiences,
  ThreePartnerPaths,
  PartnerTaxonomy,
  WhoOwnsWhat,
  SevenStates,
  InterestToDecision,
  PartnerComparison,
  DesignedGlobally,
  SevenRules,
  FourWords,
  TrustSafety,
  HowToBegin,
  PartnerFaq,
  KeepExploring,
  FinalCta,
  AvailabilityNote,
} from "@/components/partners-group-partner-ecosystem";

export const metadata: Metadata = {
  title: "Partner Ecosystem | Zoiko Access",
  description:
    "Explore the partner landscape and the difference between expressing interest, being reviewed, being authorized and being operational.",
};

export default function PartnerEcosystemPage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${fontInter}`}>
      <EcosystemHero />
      <AvailabilityNote />
      <FourAudiences />
      <ThreePartnerPaths />
      <PartnerTaxonomy />
      <WhoOwnsWhat />
      <SevenStates />
      <InterestToDecision />
      <PartnerComparison />
      <DesignedGlobally />
      <SevenRules />
      <FourWords />
      <TrustSafety />
      <HowToBegin />
      <PartnerFaq />
      <KeepExploring />
      <FinalCta />
      
    </main>
  );
}
