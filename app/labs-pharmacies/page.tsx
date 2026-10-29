import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  LabsPharmaciesHero,
  WhoThisIsFor,
  CriticalBoundaries,
  DiagnosticPathway,
  PharmacyPathway,
  SpecializedDestinations,
  IntegrationApproach,
  GovernanceAccountability,
  CareLocationContext,
  PartnershipEvaluation,
  LabsFaqAccordion,
  LabsPharmaciesCta,
} from "@/components/labs-pharmacies";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Diagnostics & Pharmacy Connections | Zoiko Access",
  description:
    "Connecting diagnostic and pharmacy pathways responsibly. Discover clear service discovery, appropriate information handoffs, and governed care coordination.",
};

export default function LabsPharmaciesPage() {
  return (
    <main className={`${inter.className} ${poppins.variable} w-full`}>
      <LabsPharmaciesHero />
      <WhoThisIsFor />
      <CriticalBoundaries />
      <DiagnosticPathway />
      <PharmacyPathway />
      <SpecializedDestinations />
      <IntegrationApproach />
      <GovernanceAccountability />
      <CareLocationContext />
      <PartnershipEvaluation />
      <LabsFaqAccordion />
      <LabsPharmaciesCta />
    </main>
  );
}
