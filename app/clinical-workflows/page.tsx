import {
  ClinicalWorkflowsHero,
  ClinicalGovernanceFooterBanner,
  WhoThisPageServes,
  ClinicalWorkflowTopics,
  WorkflowSteps,
  TaskAndResultStatuses,
  GuardrailsSection,
  WorkflowSupportBoundaries,
  LocalAvailability,
  WorkflowScenarios,
  TrustBoundaries,
  WorkflowFaq,
  YourNextStepWorkflow,
} from "@/components/clinical-workflows";

export default function ClinicalWorkflowsPage() {
  return (
    <main>
      <ClinicalWorkflowsHero />
      <ClinicalGovernanceFooterBanner />
      <WhoThisPageServes />
      <ClinicalWorkflowTopics />
      <WorkflowSteps />
      <TaskAndResultStatuses />
      <GuardrailsSection />
      <WorkflowSupportBoundaries />
      <LocalAvailability />
      <WorkflowScenarios />
      <TrustBoundaries />
      <WorkflowFaq />
      <YourNextStepWorkflow />
    </main>
  );
}
