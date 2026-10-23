import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  HandoffsHero,
  SixStepsWorkflow,
  StatusVocabulary,
  AccountableRoles,
  CorrectionsPolicy,
  ExceptionsHandler,
  PartnerIntegration,
  PermissionsPatientAgency,
  ConceptualWalkthrough,
  ClinicalBoundaries,
  ResultsReviewFaq,
  ResultsHandoffsCta,
} from "@/components/clinicians-results-handoffs";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Results & Review Handoffs | For Clinicians | Zoiko Access",
  description:
    "Results and review are different steps. Understand permissioned handoffs, accountable owners, and what each step proves.",
};

export default function CliniciansResultsHandoffsPage() {
  return (
    <main className={`${inter.className} ${poppins.variable} w-full`}>
      <HandoffsHero />
      <SixStepsWorkflow />
      <StatusVocabulary />
      <AccountableRoles />
      <CorrectionsPolicy />
      <ExceptionsHandler />
      <PartnerIntegration />
      <PermissionsPatientAgency />
      <ConceptualWalkthrough />
      <ClinicalBoundaries />
      <ResultsReviewFaq />
      <ResultsHandoffsCta />
    </main>
  );
}
