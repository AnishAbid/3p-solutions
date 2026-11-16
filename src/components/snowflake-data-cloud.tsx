import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { snowflakePractice } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SnowflakeDataCloud({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <section className="border-t bg-navy text-white">
      <div className="container-site py-16 md:py-20">
        <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
          {snowflakePractice.kicker}
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl leading-tight md:text-4xl">
          {snowflakePractice.heading}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
          {snowflakePractice.summary} Product names below are from{" "}
          <a
            href={snowflakePractice.sourceHref}
            target="_blank"
            rel="noopener"
            className="text-gold underline-offset-4 hover:underline"
          >
            {snowflakePractice.sourceLabel}
          </a>
          . This is not a Partner Network claim.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {snowflakePractice.products.map((product) => (
            <li key={product.name}>
              <a
                href={product.href}
                target="_blank"
                rel="noopener"
                className="group flex h-full flex-col rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:border-gold/50 hover:bg-white/10"
              >
                <p className="font-display text-xl">{product.name}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">
                  {product.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                  Open on Snowflake
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
            </li>
          ))}
        </ul>
        {compact ? (
          <Link
            href={snowflakePractice.href}
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-10 h-11 bg-gold px-6 text-navy hover:bg-gold/90",
            )}
          >
            Snowflake in Pakistan
          </Link>
        ) : null}
      </div>
    </section>
  );
}

export function SnowflakeFlow() {
  return (
    <section className="bg-cream">
      <div className="container-site py-16 md:py-20">
        <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
          How it fits
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl leading-tight md:text-4xl">
          Odoo, apps, and Subkaro into Snowflake, then dashboards and AI.
        </h2>
        <ol className="mt-10 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
          {snowflakePractice.flow.map((step, index) => (
            <FlowNode
              key={step.title}
              step={step}
              index={index}
              last={index === snowflakePractice.flow.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

function FlowNode({
  step,
  index,
  last,
}: {
  step: (typeof snowflakePractice.flow)[number];
  index: number;
  last: boolean;
}) {
  return (
    <>
      <li className="flex h-full flex-col rounded-2xl border bg-card p-6">
        <p className="font-heading text-sm text-gold">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-2 font-display text-2xl">{step.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {step.body}
        </p>
      </li>
      {last ? null : (
        <li
          aria-hidden="true"
          className="flex items-center justify-center text-gold md:px-1"
        >
          <span className="md:hidden">↓</span>
          <span className="hidden md:inline">→</span>
        </li>
      )}
    </>
  );
}
