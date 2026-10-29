import type { Metadata } from "next";
import {
  SafetyHero,
  SafetyPrinciples,
  HandoffStates,
  ResponsibilityMatrix,
  FailureStates,
  PrivacyChannels,
  ReadinessChecklist,
  SafetyFaq,
  RelatedDestinations,
  SafetyCta,
} from "@/components/safety-escalation";
import {
  inter,
  poppins,
  sora,
  fontInter,
} from "@/components/safety-escalation/fonts";

export const metadata: Metadata = {
  title: "Safety & Escalation | Zoiko Access",
  description:
    "Clear responsibility for safety-critical hand-offs between diagnostic and pharmacy organizations: who sent information, whether it arrived, who reviews it and what happens when an issue stays unresolved.",
};

export default function SafetyEscalationPage() {
  return (
    <main
      className={`${inter.variable} ${poppins.variable} ${sora.variable} ${fontInter} w-full`}
    >
      <SafetyHero />
      <SafetyPrinciples />
      <HandoffStates />
      <ResponsibilityMatrix />
      <FailureStates />
      <PrivacyChannels />
      <ReadinessChecklist />
      <SafetyFaq />
      <RelatedDestinations />
      <SafetyCta />
    </main>
  );
}
