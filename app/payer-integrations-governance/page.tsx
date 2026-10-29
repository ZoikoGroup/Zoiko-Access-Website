import type { Metadata } from "next";
import {
  PigHero,
  Overview,
  UseCases,
  AuthorityTable,
  Privacy,
  Identity,
  Lifecycle,
  SecurityEvidence,
  Exceptions,
  PigCta,
} from "@/components/payer-integrations-governance";
import { PstFaq } from "@/components/payer-solutions-team";
import { inter, poppins, sora, fontInter } from "@/components/payer-integrations-governance/shared";

export const metadata: Metadata = {
  title: "Payer Integrations & Governance | Zoiko Access",
  description:
    "How Zoiko Access is designed to support approved coordination between payer, provider and member systems — with clear authority, privacy review and audit.",
};

const faqs = [
  {
    q: "Does Zoiko Access replace a payer claims system?",
    a: "No. Its proposed role is to coordinate permitted handoffs while authoritative payer systems retain claims decisions.",
  },
  {
    q: "Does integration give an insurer access to medical records?",
    a: "No. Access is purpose-limited and depends on role, lawful authority, authorized agreements, and applicable local requirements.",
  },
  {
    q: "Are all payers and standards supported?",
    a: "No universal support is represented. Compatibility and market activation require individual verification.",
  },
  {
    q: "Does an eligibility response guarantee payment?",
    a: "No. Eligibility information is not a guarantee of benefits, authorization, adjudication, or payment.",
  },
  {
    q: "How is a payer integration evaluated?",
    a: "Scope, contract and privacy roles, technical mapping, testing, safety and security review, then authorized release.",
  },
];

export default function PayerIntegrationsGovernancePage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${sora.variable} ${fontInter} w-full`}>
      <PigHero />
      <Overview />
      <UseCases />
      <AuthorityTable />
      <Privacy />
      <Identity />
      <Lifecycle />
      <SecurityEvidence />
      <Exceptions />
      <PstFaq title="Integration questions, answered plainly." items={faqs} />
      <PigCta />
    </main>
  );
}
