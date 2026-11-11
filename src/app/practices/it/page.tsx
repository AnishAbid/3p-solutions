import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "IT · Odoo",
  description:
    "3P Solutions IT practice: Odoo ERP implementation, configuration, training, and support in Pakistan.",
  keywords: ["Odoo", "OODO", "ERP", "IT services", "3P Solutions"],
};

const offers = [
  "Accounting, inventory, sales, purchasing, and manufacturing on Odoo",
  "Fit-gap against how finance and operations already work",
  "Data migration, user training, and go-live support",
  "Ongoing configuration and support after handover",
];

const phases = [
  {
    title: "Discover",
    body: "Entities, ledgers, warehouses, and the reports the business actually runs. No client names are listed here because none are published for this practice.",
  },
  {
    title: "Design",
    body: "To-be processes in Odoo, including tax codes and document flow that match Pakistani operations.",
  },
  {
    title: "Build & test",
    body: "Configuration, master data, and UAT with named business owners on your side.",
  },
  {
    title: "Run",
    body: "Go-live, hypercare, and a support cadence. The system is not live until month-end can close on it.",
  },
];

export default function ItPracticePage() {
  return (
    <>
      <PageHero
        kicker="IT practice"
        title="Odoo for companies that already run plants, sites, and ledgers."
        description="3P Solutions’ IT practice implements Odoo — the open-source ERP suite. Local search sometimes writes it OODO; the product name is Odoo."
      />

      <section className="container-site py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-gold uppercase">
              What we implement
            </p>
            <h2 className="mt-2 text-3xl font-semibold">Odoo ERP</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Construction, energy, and municipal work still need a system that
              posts inventory, progress, and invoices in one place. This
              practice is that system work. It sits alongside the construction,
              renewables, and municipal services published on
              3psolutions.com.pk — it does not replace them.
            </p>
            <ul className="mt-6 space-y-3">
              {offers.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border bg-card p-6 md:p-8">
            <h2 className="text-2xl font-semibold">What we do not claim here</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              No partner logos, no named Odoo customers, and no invented SAP
              specialisations. If a brief needs a different ERP landscape, that
              is a conversation — not a badge on this page.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/50">
        <div className="container-site py-16 md:py-20">
          <h2 className="max-w-2xl text-3xl font-semibold">
            A delivery sequence finance can recognise.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {phases.map((phase, index) => (
              <div key={phase.title}>
                <p className="font-heading text-sm text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{phase.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {phase.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-16">
        <Link
          href="/contact?practice=odoo"
          className={cn(buttonVariants({ size: "lg" }), "h-11 px-6")}
        >
          Talk to the IT practice
        </Link>
      </section>

      <CtaBand title="Bring the chart of accounts, the warehouse list, and the pain." />
    </>
  );
}
