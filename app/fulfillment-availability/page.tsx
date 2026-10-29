import type { Metadata } from "next";
import {
  FulfillmentHero,
  TrustBar,
  OrderedSteps,
  StatusGlossary,
  ProvenanceLabel,
  FulfillmentMethods,
  RegulatedSafeguards,
  ExceptionMosaic,
  PublicPrivate,
  EcosystemPaths,
  FulfillmentFaq,
  FulfillmentCta,
} from "@/components/fulfillment-availability";
import {
  inter,
  poppins,
  sora,
  fontInter,
} from "@/components/fulfillment-availability/fonts";

export const metadata: Metadata = {
  title: "Pharmacy Fulfillment & Availability | Zoiko Access",
  description:
    "Availability information can help you plan, but only an authorized pharmacy can confirm whether a medicine or service can be supplied under local rules.",
};

export default function FulfillmentAvailabilityPage() {
  return (
    <main
      className={`${inter.variable} ${poppins.variable} ${sora.variable} ${fontInter} w-full`}
    >
      <FulfillmentHero />
      <TrustBar />
      <OrderedSteps />
      <StatusGlossary />
      <ProvenanceLabel />
      <FulfillmentMethods />
      <RegulatedSafeguards />
      <ExceptionMosaic />
      <PublicPrivate />
      <EcosystemPaths />
      <FulfillmentFaq />
      <FulfillmentCta />
    </main>
  );
}
