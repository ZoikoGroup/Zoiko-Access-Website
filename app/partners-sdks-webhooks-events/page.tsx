import type { Metadata } from "next";
import { inter, poppins, fontInter } from "@/components/find-care/fonts";
import {
  SdkHero,
  SectionNav,
  SdkSurfaces,
  EventModel,
  EventLifecycle,
  SecurityPrinciples,
  Environments,
  DeliveryRetries,
  Versioning,
  DataProvenance,
  ErrorRecovery,
  EvaluationChecklist,
  SdkFaq,
  NextSteps,
} from "@/components/partners-sdks-webhooks-events";

export const metadata: Metadata = {
  title: "SDKs, Webhooks & Events | Zoiko Access",
  description:
    "How Zoiko Access approaches developer tooling and event-based interoperability for permitted healthcare workflows: source ownership, explicit permissions, traceable delivery and accountable handoffs.",
};

export default function SdksWebhooksEventsPage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${fontInter}`}>
      <SdkHero />
      <SectionNav />
      <SdkSurfaces />
      <EventModel />
      <EventLifecycle />
      <SecurityPrinciples />
      <Environments />
      <DeliveryRetries />
      <Versioning />
      <DataProvenance />
      <ErrorRecovery />
      <EvaluationChecklist />
      <SdkFaq />
      <NextSteps />
    </main>
  );
}
