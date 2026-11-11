import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "SAP and Odoo",
  description:
    "3P Solutions IT practice: SAP and Odoo implementation, process design, integration, and support for Pakistani companies.",
};

const offers = [
  {
    title: "SAP",
    points: [
      "Finance, controlling, MM, SD, and PP process design",
      "Greenfield, brownfield, and selective data approaches",
      "Master data, tax codes, and document flow that match the books",
      "Hypercare and a support model your team can actually staff",
    ],
  },
  {
    title: "Odoo",
    points: [
      "Accounting, inventory, manufacturing, and CRM as one suite",
      "Fit-gap against how the company already works",
      "Custom modules only where standard will not carry the load",
      "Training for finance, warehouse, and sales — not just IT",
    ],
  },
];

const phases = [
  {
    title: "Discover",
    body: "Current ledgers, plants, legal entities, and the reports the board actually reads. We map pain, not slogans.",
  },
  {
    title: "Design",
    body: "To-be processes, integration points, and a cutover that finance will sign. If Odoo is enough, we say so. If it is not, we say that too.",
  },
  {
    title: "Build & test",
    body: "Configuration, data, interfaces, and UAT with named business owners. Defects are a list, not a feeling.",
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
        title="SAP and Odoo, implemented as an operating system — not a software sale."
        description="Pakistani manufacturers, traders, and groups need systems that survive audits, stock takes, and withholding. That is the bar for this practice."
      />

      <section className="container-site py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {offers.map((offer) => (
            <div key={offer.title} className="rounded-xl border bg-card p-6 md:p-8">
              <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-gold uppercase">
                Platform
              </p>
              <h2 className="mt-2 text-3xl font-semibold">{offer.title}</h2>
              <ul className="mt-6 space-y-3">
                {offer.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">When we will not implement</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We will not force SAP onto a single-entity trading company that
            needs Odoo. We will not stretch Odoo into a multi-plant, multi-book
            group that will outgrow it in a year. We will not configure tax
            codes in isolation from the tax practice. If those conditions are
            not acceptable, we are the wrong firm — and we will say that in the
            first conversation.
          </p>
          <Link
            href="/contact?practice=it"
            className={cn(buttonVariants({ size: "lg" }), "mt-8 h-11 px-6")}
          >
            Talk to the IT practice
          </Link>
        </div>
      </section>

      <CtaBand title="Bring the chart of accounts, the plant list, and the pain." />
    </>
  );
}
