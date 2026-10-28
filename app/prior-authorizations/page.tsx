import type { Metadata } from "next";
import {
  PaHero,
  DecisionRoles,
  ProcessTimeline,
  EvidenceRoles,
  StatusVocabulary,
  Safeguards,
  ExceptionalPaths,
  AppealDenied,
  InterfaceConcepts,
  SecurityProvenance,
  MarketsReadiness,
  PaFaq,
  PaRelated,
  PaCta,
} from "@/components/prior-authorizations";
import { inter, poppins, sora, fontInter } from "@/components/prior-authorizations/fonts";

export const metadata: Metadata = {
  title: "Prior Authorizations, Explained | Zoiko Access",
  description:
    "A prior authorization is a payer or plan review that may be required before certain covered services or medications. A request or acknowledgment is not an approval.",
};

export default function PriorAuthorizationsPage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${sora.variable} ${fontInter} w-full`}>
      <PaHero />
      <DecisionRoles />
      <ProcessTimeline />
      <EvidenceRoles />
      <StatusVocabulary />
      <Safeguards />
      <ExceptionalPaths />
      <AppealDenied />
      <InterfaceConcepts />
      <SecurityProvenance />
      <MarketsReadiness />
      <PaFaq />
      <PaRelated />
      <PaCta />
    </main>
  );
}
