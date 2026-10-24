import type { Metadata } from "next";
import {
  DischargeHero,
  TransitionRealities,
  TransitionStages,
  RolesBoundaries,
  HandoffStatuses,
  CoordinationPanel,
  Scenarios,
  ExceptionsList,
  PrivacyInterop,
  LocalApplicability,
  ReadMore,
  DischargeFaq,
  DischargeCta,
} from "@/components/discharge-transition-support";
import {
  inter,
  poppins,
  sora,
  fontInter,
} from "@/components/discharge-transition-support/fonts";

export const metadata: Metadata = {
  title: "Discharge & Transition Support | Zoiko Access",
  description:
    "How Zoiko Access is designed to support clearer, authorized coordination of handoffs and next-step ownership after discharge, with clinical decisions left to the responsible professionals.",
};

export default function DischargeTransitionSupportPage() {
  return (
    <main
      className={`${inter.variable} ${poppins.variable} ${sora.variable} ${fontInter} w-full`}
    >
      <DischargeHero />
      <TransitionRealities />
      <TransitionStages />
      <RolesBoundaries />
      <HandoffStatuses />
      <CoordinationPanel />
      <Scenarios />
      <ExceptionsList />
      <PrivacyInterop />
      <LocalApplicability />
      <ReadMore />
      <DischargeFaq />
      <DischargeCta />
    </main>
  );
}
