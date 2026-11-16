import type { Metadata } from "next";
import Image from "next/image";
import { Boxes, Code2, Database } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { ItExperience } from "@/components/it-experience";
import { PageHero } from "@/components/page-hero";
import { ProductPartners } from "@/components/product-partners";
import { Reveal } from "@/components/reveal";
import { SolutionPlatforms } from "@/components/solution-platforms";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "IT · Odoo",
  description:
    "3P Solutions IT practice: Odoo ERP plus custom software with TypeScript, Node.js, Nest.js, Python, and React/Next.js.",
  keywords: [
    "Odoo",
    "OODO",
    "ERP",
    "TypeScript",
    "Node.js",
    "Nest.js",
    "IT services",
    "3P Solutions",
  ],
};

const pillars = [
  {
    icon: Database,
    title: "Odoo ERP",
    body: "Accounting, inventory, sales, purchasing, and manufacturing on one set of numbers.",
  },
  {
    icon: Code2,
    title: "Custom software",
    body: "Web platforms and APIs in TypeScript, Node.js, Nest.js, Python, and React/Next.js.",
  },
  {
    icon: Boxes,
    title: "Product platforms",
    body: "Software 3P Solutions builds and sells through Subkaro — Order Karu, Manage Karo, Event Karo.",
  },
];

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
        kicker={`IT practice · ${site.tagline}`}
        title="Odoo, plus custom software platforms."
        description="3P Solutions’ IT practice implements Odoo — the open-source ERP suite — and custom web platforms, APIs, and delivery with TypeScript, Node.js, Nest.js, Python, and React/Next.js. Local search sometimes writes Odoo as OODO."
        image="/images/odoo.jpg"
        imageAlt="Laptop showing operations dashboards used in ERP work"
      />

      <section className="border-b bg-cream">
        <div className="container-site grid gap-4 py-10 md:grid-cols-3 md:gap-6 md:py-14">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 90}>
              <article className="h-full rounded-2xl border bg-card p-6">
                <pillar.icon className="size-5 text-gold" />
                <p className="font-heading mt-4 text-xs text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-1 font-display text-2xl">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-gold uppercase">
              What we implement
            </p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Odoo ERP</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Construction, energy, and municipal work still need a system that
              posts inventory, progress, and invoices in one place. This
              practice is that system work. It sits alongside the construction,
              renewables, and municipal services published on
              3psolutions.com.pk — it does not replace them.
            </p>
            <ul className="mt-8 space-y-3">
              {offers.map((point, index) => (
                <li
                  key={point}
                  className="flex gap-4 rounded-xl border bg-card px-4 py-3 text-sm leading-relaxed"
                >
                  <span className="font-heading text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="/images/it-network.jpg"
                alt="Engineer connecting servers in a network rack"
                fill
                className="object-cover transition duration-700 hover:scale-105 motion-reduce:transform-none"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/80 to-transparent p-5">
                <p className="text-sm text-white/90">
                  Ledgers, warehouses, and month-end on one system.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SolutionPlatforms />

      <ItExperience />

      <ProductPartners />

      <section className="bg-muted/50">
        <div className="container-site py-16 md:py-24">
          <Reveal>
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Delivery
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl md:text-4xl">
              A sequence finance can recognise.
            </h2>
          </Reveal>
          <div className="relative mt-12 grid gap-8 md:grid-cols-4">
            <div
              aria-hidden
              className="absolute top-5 right-[12%] left-[12%] hidden h-px bg-gold/35 md:block"
            />
            {phases.map((phase, index) => (
              <Reveal key={phase.title} delay={index * 90}>
                <div className="relative">
                  <p className="relative z-10 flex size-10 items-center justify-center rounded-full border border-gold/50 bg-background font-heading text-sm text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 text-xl font-semibold">{phase.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {phase.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Talk to the IT practice."
        body="Bring the chart of accounts, the warehouse list, and the pain. 3P Solutions in Lahore implements Odoo and the platforms above."
        href="/contact?practice=odoo"
      />
    </>
  );
}
