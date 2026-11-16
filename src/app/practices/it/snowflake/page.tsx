import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import {
  SnowflakeDataCloud,
  SnowflakeFlow,
} from "@/components/snowflake-data-cloud";
import { buttonVariants } from "@/components/ui/button";
import { snowflakePractice, snowflakeWorkloads } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "IT · Snowflake",
  description: snowflakePractice.summary,
  keywords: [
    "Snowflake",
    "AI Data Cloud",
    "Pakistan",
    "Odoo",
    "analytics",
    "3P Solutions",
  ],
};

export default function SnowflakePracticePage() {
  return (
    <>
      <PageHero
        kicker={snowflakePractice.kicker}
        title="Snowflake for companies in Pakistan."
        description={snowflakePractice.summary}
        image="/images/odoo.jpg"
        imageAlt="Laptop showing operations dashboards used in ERP work"
      />

      <SnowflakeDataCloud />

      <SnowflakeFlow />

      <section className="container-site py-16 md:py-20">
        <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
          Industries
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl leading-tight md:text-4xl">
          Workloads we already deliver, ready for Snowflake.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          These are industries on the IT practice — not Snowflake customers, and
          not a list of 3P Solutions clients.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {snowflakeWorkloads.map((industry) => (
            <article
              key={industry.name}
              className="overflow-hidden rounded-2xl border bg-card"
            >
              <div className="relative aspect-[16/10] bg-muted">
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{industry.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {industry.snowflakeLine}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-site pb-16">
        <Link
          href="/contact?practice=snowflake"
          className={cn(buttonVariants({ size: "lg" }), "h-11 px-6")}
        >
          Talk about Snowflake in Pakistan
        </Link>
      </section>

      <CtaBand
        title="Bring the systems you already run."
        body="Odoo, custom apps, and Subkaro products can land in Snowflake for reporting and AI. Contact 3P Solutions in Lahore."
        href="/contact?practice=snowflake"
      />
    </>
  );
}
