import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { PracticeCard } from "@/components/practice-card";
import { practices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Practices",
  description:
    "Three practices under 3P Solutions: SAP and Odoo, construction engineering, and tax advisory.",
};

export default function PracticesPage() {
  return (
    <>
      <PageHero
        kicker="Practices"
        title="IT, engineering, and consulting — held to the same standard."
        description="Each practice can lead an engagement on its own. The point of one firm is that they do not have to."
      />
      <section className="container-site py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {practices.map((practice) => (
            <PracticeCard key={practice.slug} practice={practice} />
          ))}
        </div>
        <div className="mt-14 max-w-3xl border-l-2 border-gold pl-6">
          <h2 className="text-2xl font-semibold">How a brief is assigned</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            If the work is an ERP rollout, IT leads and tax reviews the chart of
            accounts and tax codes. If it is a construction package, engineering
            leads and IT is invited only when progress billing or asset
            capitalisation needs a system. If it is a tax position, consulting
            leads and does not quietly become an implementation project.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
