import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { TechLogos } from "@/components/tech-logos";
import {
  itPractice,
  partnerCards,
  productPartner,
  site,
  solutionPlatforms,
  yearsInBusiness,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "Odoo ERP",
    body: "Accounting, inventory, sales, purchasing, and manufacturing on one set of numbers.",
    image: "/images/it-network.jpg",
    imageAlt: "Engineer connecting servers in a network rack",
  },
  {
    title: "Custom software",
    body: "Web platforms and APIs in TypeScript, Node.js, Nest.js, Python, and React/Next.js.",
    image: "/images/custom-software.jpg",
    imageAlt: "Laptop on a desk showing code used in custom web development",
  },
  {
    title: "Product platforms",
    body: "Software 3P Solutions builds and sells through Subkaro — Order Karu, Manage Karo, Event Karo.",
    image: "/images/product-platforms.jpg",
    imageAlt: "Order Karu, Manage Karo, and Event Karo product screens from Subkaro",
  },
] as const;

const offers = [
  "Accounting, inventory, sales, purchasing, and manufacturing on Odoo",
  "Fit-gap against how finance and operations already work",
  "Data migration, user training, and go-live support",
  "Ongoing configuration and support after handover",
] as const;

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
] as const;

const jumpLinks = [
  { href: "#odoo", label: "Odoo ERP" },
  { href: "#platforms", label: "Platforms" },
  { href: "#products", label: "Subkaro" },
  { href: "#technologies", label: "Technologies" },
  { href: "#industries", label: "Industries" },
] as const;

const featuredIndustry = itPractice.industries[0];
const stackedIndustries = itPractice.industries.slice(1, 3);
const remainingIndustries = itPractice.industries.slice(3);

export function ItPracticeView() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <Image
          src="/images/odoo.jpg"
          alt="Laptop showing operations dashboards used in ERP work"
          fill
          priority
          className="object-cover animate-slow-zoom motion-reduce:animate-none"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/88 to-navy/45" />
        <div className="relative container-home grid min-h-[min(88vh,44rem)] items-end gap-10 pb-28 pt-20 lg:grid-cols-12 lg:pb-32 lg:pt-28">
          <div className="lg:col-span-7">
            <p className="animate-rise text-[0.7rem] font-semibold tracking-[0.28em] text-gold uppercase">
              IT practice
            </p>
            <span className="animate-gold-line mt-4 block h-px w-16 bg-gold" />
            <h1 className="animate-rise font-display mt-5 max-w-3xl text-4xl leading-[1.05] font-medium tracking-tight delay-100 md:text-6xl lg:text-[4.25rem]">
              Odoo, plus custom software platforms.
            </h1>
            <p className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-white/78 delay-200 md:text-lg">
              3P Solutions’ IT practice implements Odoo — the open-source ERP
              suite — and custom web platforms, APIs, and delivery with
              TypeScript, Node.js, Nest.js, Python, and React/Next.js. Local
              search sometimes writes Odoo as OODO.
            </p>
            <p className="animate-rise mt-8 flex items-end gap-4 delay-200">
              <span className="font-display text-5xl leading-none tabular-nums text-gold md:text-6xl">
                {yearsInBusiness()}
              </span>
              <span className="pb-1 text-sm tracking-[0.18em] text-white/70 uppercase">
                Years in business · Est. {site.foundedYear}
              </span>
            </p>
            <nav
              aria-label="On this page"
              className="animate-rise mt-10 flex flex-wrap gap-x-6 gap-y-2 delay-300"
            >
              {jumpLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[0.7rem] font-semibold tracking-[0.18em] text-gold/90 uppercase transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="lg:col-span-5">
            <div className="animate-float-soft motion-reduce:animate-none rounded-2xl border border-white/15 bg-navy-deep/70 p-5 shadow-2xl backdrop-blur-md md:p-6">
              <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-gold uppercase">
                Platforms in use
              </p>
              <ul className="mt-4 divide-y divide-white/10">
                {solutionPlatforms.map((platform) => (
                  <li key={platform.name}>
                    <a
                      href={platform.href}
                      target="_blank"
                      rel="noopener"
                      className="group flex items-center gap-3 py-3"
                    >
                      <PlatformMark platform={platform} />
                      <span className="min-w-0 flex-1">
                        <span className="block font-medium text-white">
                          {platform.name}
                        </span>
                        <span className="block truncate text-sm text-white/60">
                          {platform.summary}
                        </span>
                      </span>
                      <ArrowUpRight className="size-4 shrink-0 text-gold transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 container-home -mt-16 pb-6 md:-mt-20">
        <div className="grid gap-4 lg:grid-cols-12">
          {pillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={index * 90}
              className={index === 0 ? "lg:col-span-6" : "lg:col-span-3"}
            >
              <article className="group relative min-h-[18rem] overflow-hidden rounded-2xl lg:min-h-[22rem]">
                <Image
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105 motion-reduce:transform-none"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/45 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
                  <p className="font-heading text-xs text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-display mt-1 text-2xl lg:text-3xl">
                    {pillar.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {pillar.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="odoo" className="scroll-mt-24 py-16 md:py-24">
        <div className="container-home grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:sticky lg:top-24 lg:col-span-5">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
              What we implement
            </p>
            <h2 className="font-display mt-3 text-3xl md:text-5xl">Odoo ERP</h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
              Engineering and consulting work still need a system that posts
              inventory, progress, and invoices in one place. This practice is
              that system work. It sits alongside the engineering and consulting
              practices published on 3psolutions.com.pk — it does not replace
              them.
            </p>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <ol className="relative space-y-0">
                <span
                  aria-hidden
                  className="animate-gold-line-y absolute top-3 bottom-3 left-[0.9rem] hidden w-px bg-gold/40 md:block"
                />
                {offers.map((point, index) => (
                  <li
                    key={point}
                    className="relative flex gap-5 py-4 md:pl-1"
                  >
                    <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-background font-heading text-xs text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1 text-base leading-relaxed">{point}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={120} className="mt-10 border-t pt-10">
              <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
                Delivery
              </p>
              <h3 className="font-display mt-2 text-2xl md:text-3xl">
                A sequence finance can recognise.
              </h3>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                {phases.map((phase, index) => (
                  <div key={phase.title} className="border-l border-gold/40 pl-4">
                    <p className="font-heading text-xs text-gold">
                      {String(index + 1).padStart(2, "0")} · {phase.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {phase.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="platforms"
        className="scroll-mt-24 overflow-hidden bg-navy text-white"
      >
        <div className="container-home grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-5">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Solution platforms
            </p>
            <h2 className="font-display mt-3 text-3xl leading-tight md:text-5xl">
              Platforms we implement and sell.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75 md:text-base">
              These are the systems 3P Solutions already puts in front of
              customers: Odoo ERP, cloud platforms used in delivery, the OpenAI
              API, and Subkaro products. Related industry work is listed below.
            </p>
          </Reveal>
          <div className="lg:col-span-7">
            <ul className="grid gap-3 sm:grid-cols-2">
              {solutionPlatforms.map((platform, index) => (
                <li
                  key={platform.name}
                  className={index === 0 ? "sm:col-span-2" : undefined}
                >
                  <Reveal delay={index * 70}>
                    <a
                      href={platform.href}
                      target="_blank"
                      rel="noopener"
                      className={cn(
                        "group flex h-full items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 transition duration-500 hover:border-gold/50 hover:bg-white/10",
                        index === 0 && "sm:p-7",
                      )}
                    >
                      <PlatformMark platform={platform} large={index === 0} />
                      <span className="min-w-0 flex-1">
                        <span
                          className={cn(
                            "font-display block",
                            index === 0 ? "text-3xl" : "text-xl",
                          )}
                        >
                          {platform.name}
                        </span>
                        <span className="mt-2 block text-sm leading-relaxed text-white/70">
                          {platform.summary}
                        </span>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                          Open {platform.name}
                          <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
                        </span>
                      </span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-24 bg-cream py-16 md:py-24">
        <div className="container-home">
          <Reveal>
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Product partners
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl leading-tight md:text-5xl">
              Software products from {productPartner.name}
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Names and descriptions as published on{" "}
              <a
                href={productPartner.href}
                target="_blank"
                rel="noopener"
                className="text-navy underline-offset-4 hover:underline"
              >
                subkaro.com
              </a>
              . {productPartner.summary} Each product opens in a new tab.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            {partnerCards.map((product, index) => {
              const featured = index === 0;
              return (
                <Reveal
                  key={product.name}
                  delay={(index % 3) * 80}
                  className={
                    featured
                      ? "lg:col-span-7"
                      : index === 1
                        ? "lg:col-span-5"
                        : "lg:col-span-6"
                  }
                >
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener"
                    className={cn(
                      "group relative block overflow-hidden rounded-2xl",
                      featured ? "min-h-[22rem] lg:min-h-[28rem]" : "min-h-[16rem]",
                    )}
                  >
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105 motion-reduce:transform-none"
                      sizes={
                        featured
                          ? "(min-width: 1024px) 55vw, 100vw"
                          : "(min-width: 1024px) 40vw, 100vw"
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/35 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
                      <p className="text-[0.65rem] tracking-[0.2em] text-gold uppercase">
                        {productPartner.name}
                      </p>
                      <h3
                        className={cn(
                          "font-display mt-2",
                          featured ? "text-3xl md:text-4xl" : "text-2xl",
                        )}
                      >
                        {product.name}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-gold-soft">
                        {product.tagline}
                      </p>
                      <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/80">
                        {product.summary}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                        Open {product.name}
                        <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
                      </span>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="technologies" className="scroll-mt-24 py-16 md:py-24">
        <div className="container-home">
          <Reveal>
            <h2 className="font-display max-w-2xl text-3xl md:text-5xl">
              {itPractice.techHeading}
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              {itPractice.techIntro}
            </p>
          </Reveal>
        </div>
        <Reveal delay={80}>
          <TechLogos className="mt-10" />
        </Reveal>
      </section>

      <section
        id="industries"
        className="scroll-mt-24 border-t bg-cream py-16 md:py-24"
      >
        <div className="container-home">
          <Reveal>
            <h2 className="font-display max-w-2xl text-3xl md:text-5xl">
              {itPractice.industriesHeading}
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              {itPractice.industriesIntro}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            {featuredIndustry ? (
              <Reveal className="lg:col-span-7">
                <IndustryFeature industry={featuredIndustry} index={0} large />
              </Reveal>
            ) : null}
            <div className="grid gap-4 lg:col-span-5">
              {stackedIndustries.map((industry, index) => (
                <Reveal key={industry.name} delay={(index + 1) * 80}>
                  <IndustryFeature
                    industry={industry}
                    index={index + 1}
                  />
                </Reveal>
              ))}
            </div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {remainingIndustries.map((industry, index) => (
              <Reveal key={industry.name} delay={index * 80}>
                <IndustryFeature industry={industry} index={index + 3} compact />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Talk to the IT practice."
        body="Bring the chart of accounts, the warehouse list, and the pain. 3P Solutions in Lahore implements Odoo and the platforms above."
        href="/contact"
      />
    </>
  );
}

function PlatformMark({
  platform,
  large = false,
}: {
  platform: (typeof solutionPlatforms)[number];
  large?: boolean;
}) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-xl bg-white",
        large ? "size-14" : "size-11",
      )}
    >
      {platform.icon ? (
        <img
          src={platform.icon}
          alt=""
          width={large ? 36 : 28}
          height={large ? 36 : 28}
          className={cn("object-contain", large ? "size-9" : "size-7")}
        />
      ) : (
        <span className="font-heading text-lg font-semibold text-navy">
          {platform.name.slice(0, 1)}
        </span>
      )}
    </span>
  );
}

function IndustryFeature({
  industry,
  index,
  large = false,
  compact = false,
}: {
  industry: (typeof itPractice.industries)[number];
  index: number;
  large?: boolean;
  compact?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        large && "min-h-[22rem] lg:min-h-[32rem]",
        !large && !compact && "min-h-[14rem]",
        compact && "min-h-[16rem]",
      )}
    >
      <Image
        src={industry.image}
        alt={industry.imageAlt}
        fill
        className="object-cover transition duration-700 group-hover:scale-105 motion-reduce:transform-none"
        sizes={
          large
            ? "(min-width: 1024px) 55vw, 100vw"
            : compact
              ? "(min-width: 768px) 30vw, 100vw"
              : "(min-width: 1024px) 40vw, 100vw"
        }
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
        <p className="font-heading text-xs text-gold">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3
          className={cn(
            "font-display mt-1",
            large ? "text-3xl md:text-4xl" : "text-2xl",
          )}
        >
          {industry.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80">
          {industry.summary}
        </p>
        <p className="mt-3 text-xs tracking-wide text-gold/90">
          {industry.tech.join(" · ")}
        </p>
      </div>
    </article>
  );
}

