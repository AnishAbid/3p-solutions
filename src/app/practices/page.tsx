import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { PracticeCard } from "@/components/practice-card";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Practices",
  description:
    "3P Solutions practices: construction, renewables, municipal services, and Odoo IT.",
};

export default function PracticesPage() {
  return (
    <>
      <PageHero
        kicker="Practices"
        title="Construction, energy, municipal work — and Odoo."
        description="Field services match 3psolutions.com.pk. The IT practice is Odoo ERP, listed here because it is part of this site’s offering."
      />
      <section className="container-site py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <PracticeCard key={service.slug} practice={service} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
