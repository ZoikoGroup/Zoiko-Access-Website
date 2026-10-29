import type { Metadata } from "next";
import {
  DiagnosticsHero,
  StagePathway,
  OrderResponsibility,
  ProgressStates,
  ReportVersions,
  ReviewEvents,
  ExceptionCards,
  SourcePathways,
  IntegrationBoundaries,
  CaregiverGuidance,
  DiagnosticsFaq,
  RelatedResources,
  DiagnosticsCta,
} from "@/components/diagnostics-coordination";
import {
  inter,
  poppins,
  sora,
  fontInter,
} from "@/components/diagnostics-coordination/fonts";

export const metadata: Metadata = {
  title: "Diagnostics Coordination | Zoiko Access",
  description:
    "How an authorized order, an examination or collection, a source-issued report and a receiving team's review remain distinct responsibilities, each with its own owner, evidence and next action.",
};

export default function DiagnosticsCoordinationPage() {
  return (
    <main
      className={`${inter.variable} ${poppins.variable} ${sora.variable} ${fontInter} w-full`}
    >
      <DiagnosticsHero />
      <StagePathway />
      <OrderResponsibility />
      <ProgressStates />
      <ReportVersions />
      <ReviewEvents />
      <ExceptionCards />
      <SourcePathways />
      <IntegrationBoundaries />
      <CaregiverGuidance />
      <DiagnosticsFaq />
      <RelatedResources />
      <DiagnosticsCta />
    </main>
  );
}
