import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  ForPharmaciesHero,
  PharmacyAuthorityBands,
  SixReadersPathway,
  ServiceCategoriesSection,
  PrescriptionLifecycleMilestones,
  DispensingStockTruth,
  TwoRelatedTopics,
  LeastPrivilegeEveryRole,
  PharmacyParticipationSteps,
  SafetyClinicalBoundaries,
  LocationAndAccessRegion,
  ErrorsCorrectionsDisputes,
  PlainLanguageFaq,
  KeepLearningCta,
} from "@/components/labs-pharmacies-for-pharmacies";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "For Pharmacies | Labs & Pharmacies | Zoiko Access",
  description:
    "Explore how accurate pharmacy service information, prescription-related handoffs and locally permitted coordination work with Zoiko Access.",
};

export default function LabsPharmaciesForPharmaciesPage() {
  return (
    <main className={`${inter.className} ${poppins.variable} w-full`}>
      <ForPharmaciesHero />
      <PharmacyAuthorityBands />
      <SixReadersPathway />
      <ServiceCategoriesSection />
      <PrescriptionLifecycleMilestones />
      <DispensingStockTruth />
      <TwoRelatedTopics />
      <LeastPrivilegeEveryRole />
      <PharmacyParticipationSteps />
      <SafetyClinicalBoundaries />
      <LocationAndAccessRegion />
      <ErrorsCorrectionsDisputes />
      <PlainLanguageFaq />
      <KeepLearningCta />
    </main>
  );
}
