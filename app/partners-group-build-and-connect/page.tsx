import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  BuildAndConnectHero,
  AudiencesSection,
  ThreePagesDestinations,
  ArchitectureFiveStates,
  ContractPrerequisitesSection,
  WebhookEventLifecycle,
  DeveloperMaterialsGated,
  SecurityMatrixSection,
  IntegrationReadinessEvidence,
  ScopeResponsibilityParties,
  GovernanceAndJourneySection,
  FaqAndRelatedSection,
  ArchitectureStartCta,
} from "@/components/partners-group-build-and-connect";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Build & Connect | Partners & Developers | Zoiko Access",
  description:
    "Standards-oriented connection principles, contract boundaries and the evidence required before any technical integration can be activated.",
};

export default function PartnersGroupBuildAndConnectPage() {
  return (
    <main className={`${inter.className} ${poppins.variable} w-full`}>
      <BuildAndConnectHero />
      <AudiencesSection />
      <ThreePagesDestinations />
      <ArchitectureFiveStates />
      <ContractPrerequisitesSection />
      <WebhookEventLifecycle />
      <DeveloperMaterialsGated />
      <SecurityMatrixSection />
      <IntegrationReadinessEvidence />
      <ScopeResponsibilityParties />
      <GovernanceAndJourneySection />
      <FaqAndRelatedSection />
      <ArchitectureStartCta />
    </main>
  );
}
