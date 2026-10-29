import type { Metadata } from "next";
import {
  IaHero,
  Workstreams,
  Journey,
  ScopeMatrix,
  Boundaries,
  Architecture,
  Validation,
  Readiness,
  Related,
  IaCta,
} from "@/components/implementation-approach";
import { PstFaq } from "@/components/payer-solutions-team";
import { inter, poppins, sora, fontInter } from "@/components/implementation-approach/shared";

export const metadata: Metadata = {
  title: "Implementation Approach | Zoiko Access",
  description:
    "How a payer implementation may be assessed, scoped, connected and validated — with local obligations and each organization's authority clearly defined.",
};

const faqs = [
  {
    q: "Is Zoiko Access integrated with my payer today?",
    a: "This page describes a proposed implementation approach. Any particular integration must be verified for the relevant organization, market and capability.",
  },
  {
    q: "Does a payer integration grant access to medical records?",
    a: "No. Each permitted information exchange requires applicable legal authority, clear purpose, role-scoped access and the relevant healthcare custodian's controls.",
  },
  {
    q: "How long does implementation take?",
    a: "Scope, approvals, integrations and validation requirements vary. No delivery period or launch date is promised by this page.",
  },
  {
    q: "Who decides eligibility, authorization and claims?",
    a: "The authorized payer and other responsible organizations retain their decisions; technology coordination does not replace those authorities.",
  },
  {
    q: "Can an institution request a discussion?",
    a: "An institutional inquiry is available only where a verified team and operational intake channel have been approved. Otherwise, review the published integration guidance.",
  },
];

export default function ImplementationApproachPage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${sora.variable} ${fontInter} w-full`}>
      <IaHero />
      <Workstreams />
      <Journey />
      <ScopeMatrix />
      <Boundaries />
      <Architecture />
      <Validation />
      <Readiness />
      <PstFaq title="Implementation questions." items={faqs} />
      <Related />
      <IaCta />
    </main>
  );
}
