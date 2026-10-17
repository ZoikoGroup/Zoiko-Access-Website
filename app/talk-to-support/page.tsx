import type { Metadata } from "next";
import {
  TalkHero,
  HelpTopics,
  UsefulGuidance,
  CareLocation,
  ContactOptions,
  SupportStates,
  OwnerRoutes,
  SafetyPrivacy,
  TalkFaq,
  TalkCta,
} from "@/components/talk-to-support";
import {
  inter,
  poppins,
  sora,
  fontInter,
} from "@/components/talk-to-support/fonts";

export const metadata: Metadata = {
  title: "Talk to Support | Zoiko Access",
  description:
    "Get help with Zoiko Access. Choose a nonclinical topic, understand which channels are real and authorized, and find the right owner for your question.",
};

export default function TalkToSupportPage() {
  return (
    <main
      className={`${inter.variable} ${poppins.variable} ${sora.variable} ${fontInter} w-full`}
    >
      <TalkHero />
      <HelpTopics />
      <UsefulGuidance />
      <CareLocation />
      <ContactOptions />
      <SupportStates />
      <OwnerRoutes />
      <SafetyPrivacy />
      <TalkFaq />
      <TalkCta />
    </main>
  );
}
