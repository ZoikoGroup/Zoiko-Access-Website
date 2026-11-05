import type { Metadata } from "next";
import { inter, poppins, fontInter } from "@/components/find-care/fonts";
import {
  SecurityHero,
  FourLayers,
  SharedResponsibility,
  IdentityAuth,
  AuthorizationScopes,
  MessageIntegrity,
  PrivacyMinimization,
  OperationalLimits,
  ThreatProtections,
  AuditEvidence,
  IncidentRevocation,
  AssessmentPathway,
  SecurityFaq,
} from "@/components/partners-integration-security";

export const metadata: Metadata = {
  title: "Integration Security | Zoiko Access",
  description:
    "The security principles that guide responsible, permissioned healthcare-system integrations, from identity and access scope to message integrity and audit evidence.",
};

export default function IntegrationSecurityPage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${fontInter}`}>
      <SecurityHero />
      <FourLayers />
      <SharedResponsibility />
      <IdentityAuth />
      <AuthorizationScopes />
      <MessageIntegrity />
      <PrivacyMinimization />
      <OperationalLimits />
      <ThreatProtections />
      <AuditEvidence />
      <IncidentRevocation />
      <AssessmentPathway />
      <SecurityFaq />
    </main>
  );
}
