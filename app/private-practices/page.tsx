import type { Metadata } from "next";
import {
  HeroSection,
  PracticeNeeds,
  PracticeWorkflows,
  ServiceGates,
  WhereBoundariesSit,
  RolesResponsibilities,
  ReadinessChecklist,
  ParticipationCta,
  PrivatePracticesFaq,
  AlternateRoutes,
} from "@/components/private-practices";

export const metadata: Metadata = {
  title: "Private Practices | Zoiko Access Healthcare Navigation",
  description:
    "Care coordination designed with independent practices in mind. Zoiko Access is designing digital pathways that help participating practices guide patients, coordinate authorized requests, and keep next steps clearer.",
};

export default function PrivatePracticesPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. Hero Section: Care coordination designed with independent practices in mind */}
      <HeroSection />

      {/* 2. Practice Needs: Three everyday pressures, and the intended design */}
      <PracticeNeeds />

      {/* 3. Practice Workflows: Four steps & conceptual strip */}
      <PracticeWorkflows />

      {/* 4. Service Gates: What “available” means, in four states */}
      <ServiceGates />

      {/* 5. Where the Boundaries Sit: Four areas, one rule: sources stay in charge */}
      <WhereBoundariesSit />

      {/* 6. Roles, Responsibilities and Safety: Who is responsible for what */}
      <RolesResponsibilities />

      {/* 7. Readiness Checklist: Questions worth asking first */}
      <ReadinessChecklist />

      {/* 8. Participation CTA: Learn about Zoiko Access */}
      <ParticipationCta />

      {/* 9. FAQ: Straight answers */}
      <PrivatePracticesFaq />

      {/* 10. Alternate Routes: Keep exploring */}
      <AlternateRoutes />
    </main>
  );
}
