import type { Metadata } from "next";
import {
  SchedulingHero,
  DirectAnswer,
  InstitutionalProblems,
  CoordinationModel,
  SchedulingUseCases,
  RequestLifecycle,
  ExceptionalCases,
  RolesAndPrivacy,
  TechnicalBoundaries,
  StakeholderValue,
  EvaluationActivation,
  SchedulingFaq,
  SchedulingCta,
} from "@/components/scheduling-patient-access";

export const metadata: Metadata = {
  title:
    "Scheduling & Patient Access | Zoiko Access Healthcare Navigation",
  description:
    "Patient access with scheduling authority where it belongs. Discover how Zoiko Access coordinates appointments with source-confirmed status and traceable events.",
};

export default function SchedulingPatientAccessPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. Hero Section: Patient access, with scheduling authority where it belongs */}
      <SchedulingHero />

      {/* 2. Direct Answer: What is patient access and scheduling coordination? */}
      <DirectAnswer />

      {/* 3. Institutional Problems: Three pain points, three controlled responses */}
      <InstitutionalProblems />

      {/* 4. Five-Step Coordination Model: Five steps, and who decides at each */}
      <CoordinationModel />

      {/* 5. Scheduling Use Cases: Five common situations */}
      <SchedulingUseCases />

      {/* 6. Example Lifecycle: One request, from draft to outcome */}
      <RequestLifecycle />

      {/* 7. Exceptional and Degraded Cases: When the plan does not hold */}
      <ExceptionalCases />

      {/* 8. Roles, Privacy and Safety: Six roles, minimum necessary data */}
      <RolesAndPrivacy />

      {/* 9. Technical Integration Boundaries: Controlled events, not shared control */}
      <TechnicalBoundaries />

      {/* 10. Value by Stakeholder: Who it is designed to help */}
      <StakeholderValue />

      {/* 11. Evaluation and Activation: What must be in place first */}
      <EvaluationActivation />

      {/* 12. FAQ: Straight answers */}
      <SchedulingFaq />

      {/* 13. Next Step CTA: Discuss institutional workflows */}
      <SchedulingCta />
    </main>
  );
}
