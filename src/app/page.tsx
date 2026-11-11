import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaqList } from "@/components/faq-list";
import { ImageSlider } from "@/components/image-slider";
import { QuoteSlider } from "@/components/quote-slider";
import { buttonVariants } from "@/components/ui/button";
import {
  aboutCopy,
  getService,
  heroSlides,
  serviceMenu,
  services,
  site,
  stats,
  team,
  testimonials,
  values,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const homeOrder = [
  "construction",
  "solar",
  "wind",
  "water",
  "wastewater",
  "waste",
  "odoo",
] as const;

const catalog = homeOrder
  .map((slug) => getService(slug))
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

const marqueeLabels = [
  ...services.map((item) => item.shortTitle),
  site.city,
  site.country,
];

export default function Home() {
  return (
    <>
      <ImageSlider
        slides={heroSlides}
        className="min-h-[min(92vh,54rem)] bg-navy-deep text-white"
      >
        <div className="container-home flex min-h-[min(92vh,54rem)] flex-col justify-end pb-24 pt-20 md:pb-28 md:pt-28">
          <p className="animate-rise text-[0.7rem] font-semibold tracking-[0.28em] text-gold uppercase">
            {site.name} · {site.city}, {site.country}
          </p>
          <h1 className="font-display mt-5 max-w-5xl text-5xl leading-[0.95] font-medium tracking-tight md:text-7xl lg:text-[5.75rem]">
            {aboutCopy.hero}
          </h1>
          <div className="mt-8 grid max-w-6xl gap-10 lg:grid-cols-12">
            <p className="animate-rise max-w-2xl text-base leading-relaxed text-white/80 md:text-lg lg:col-span-7">
              {site.tagline}. {aboutCopy.intro} The IT practice implements{" "}
              <Link
                href="/practices/it"
                className="text-gold underline-offset-4 hover:underline"
              >
                Odoo
              </Link>
              .
            </p>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end lg:self-end">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 bg-gold px-7 text-navy hover:bg-gold/90",
                )}
              >
                Get started
              </Link>
              <Link
                href="/projects"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 border-white/30 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white",
                )}
              >
                Our projects
              </Link>
            </div>
          </div>
        </div>
      </ImageSlider>

      <div className="overflow-hidden border-y border-gold/25 bg-navy text-gold">
        <div className="animate-marquee flex w-max gap-10 py-3 pr-10 text-[0.7rem] font-semibold tracking-[0.28em] uppercase">
          {[...marqueeLabels, ...marqueeLabels].map((label, index) => (
            <span key={`${label}-${index}`} className="flex items-center gap-10">
              {label}
              <span className="text-white/30">·</span>
            </span>
          ))}
        </div>
      </div>

      <section className="bg-navy text-white">
        <div className="container-home grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="px-4 py-10 md:px-8 md:py-14">
              <p className="font-display text-4xl text-gold md:text-5xl">{item.value}</p>
              <p className="mt-2 text-sm tracking-wide text-white/65">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-home">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Our services
            </p>
            <h2 className="font-display text-4xl leading-[1.05] font-medium md:text-6xl">
              Comprehensive solutions for your needs
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              We offer a wide range of services tailored to meet the demands of
              modern infrastructure and sustainable building.
            </p>
          </div>
          <div className="mt-16 space-y-6 md:space-y-8">
            {serviceMenu.map((group, index) => {
              const items = group.slugs
                .map((slug) => getService(slug))
                .filter((item): item is NonNullable<typeof item> => Boolean(item));
              const lead = items[0];
              if (!lead) return null;
              const reversed = index % 2 === 1;
              return (
                <article
                  key={group.kicker}
                  className="overflow-hidden rounded-2xl bg-navy text-white"
                >
                  <div
                    className={cn(
                      "grid lg:grid-cols-12",
                      reversed && "lg:[&>*:first-child]:order-2",
                    )}
                  >
                    <div className="relative min-h-[18rem] lg:col-span-7 lg:min-h-[32rem]">
                      <Image
                        src={
                          group.kicker === "Renewables"
                            ? "/images/solar-farm.jpg"
                            : group.kicker === "Municipal"
                              ? "/images/municipal.jpg"
                              : lead.image
                        }
                        alt={lead.imageAlt}
                        fill
                        className="object-cover transition duration-700 hover:scale-[1.03] motion-reduce:transform-none"
                        sizes="(min-width: 1024px) 60vw, 100vw"
                      />
                    </div>
                    <div className="flex flex-col justify-between gap-8 p-8 lg:col-span-5 lg:p-12">
                      <div>
                        <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-gold uppercase">
                          {String(index + 1).padStart(2, "0")} · {group.kicker}
                        </p>
                        <h3 className="font-display mt-3 text-3xl leading-tight md:text-4xl">
                          {group.kicker === "Renewables"
                            ? "Renewable energy solutions for a sustainable future"
                            : group.kicker === "Municipal"
                              ? "Empowering communities with sustainable solutions"
                              : lead.title}
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                          {group.kicker === "Renewables"
                            ? `${items.find((item) => item.slug === "solar")?.blurb} ${items.find((item) => item.slug === "wind")?.blurb}`
                            : group.kicker === "Municipal"
                              ? items.map((item) => item.summary).join(" ")
                              : lead.summary}
                        </p>
                        {items.length > 1 && group.kicker !== "Municipal" ? (
                          <ul className="mt-6 space-y-2 text-sm text-white/80">
                            {items.map((item) => (
                              <li key={item.slug} className="flex items-center gap-2">
                                <span className="size-1.5 rounded-full bg-gold" />
                                {item.shortTitle}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {group.kicker === "Municipal" ? (
                          <ul className="mt-6 space-y-2 text-sm text-white/80">
                            {items.map((item) => (
                              <li key={item.slug} className="flex items-center gap-2">
                                <span className="size-1.5 rounded-full bg-gold" />
                                {item.shortTitle}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                      <Link
                        href={group.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-white"
                      >
                        Explore {group.kicker}
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t bg-cream py-20 md:py-28">
        <div className="container-home">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display max-w-xl text-4xl leading-tight font-medium md:text-5xl">
              Our key services
            </h2>
            <Link
              href="/practices"
              className="hidden items-center gap-1 text-sm font-medium text-navy md:inline-flex"
            >
              All practices
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-6 lg:grid-cols-12">
            {catalog.map((service, index) => {
              const featured = index === 0 || index === catalog.length - 1;
              return (
                <Link
                  key={service.slug}
                  href={service.href}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl",
                    featured
                      ? "min-h-[22rem] md:col-span-6 lg:col-span-6 lg:min-h-[28rem]"
                      : "min-h-[16rem] md:col-span-3 lg:col-span-4",
                  )}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105 motion-reduce:transform-none"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-[0.65rem] tracking-[0.2em] text-gold uppercase">
                      {service.kicker}
                    </p>
                    <h3 className="font-display mt-2 text-2xl md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-white/75">
                      {service.blurb}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
        <div className="container-home grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Our core values
            </p>
            <h2 className="font-display mt-4 text-4xl leading-tight md:text-6xl">
              Integrity, sustainability, and excellence.
            </h2>
          </div>
          <div className="grid gap-8 lg:col-span-7">
            {values.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-4 border-t border-gold/35 pt-6 sm:grid-cols-[auto_1fr] sm:gap-8"
              >
                <p className="font-display text-4xl text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-home py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Client feedback
            </p>
            <h2 className="font-display mt-3 text-4xl leading-tight md:text-5xl">
              What clients say on 3psolutions.com.pk
            </h2>
          </div>
          <div className="lg:col-span-8">
            <QuoteSlider quotes={testimonials} />
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/40 py-20 md:py-28">
        <div className="container-home">
          <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
            Team
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl md:text-5xl">
            Names and roles as published on the renewables page of
            3psolutions.com.pk.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="bg-card p-7">
                <p className="font-display text-2xl">{member.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {member.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-home py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Questions
            </p>
            <h2 className="font-display mt-3 text-4xl md:text-5xl">Before you write.</h2>
            <p className="mt-4 text-muted-foreground">
              Answers published on the company projects page, covering scope,
              base, quality, and how to get in touch.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FaqList />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/wind.jpg"
            alt="Wind turbines on a field at sunset"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-deep/78" />
        </div>
        <div className="relative container-home grid gap-10 py-24 text-white md:py-32 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Get started
            </p>
            <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight md:text-6xl">
              {aboutCopy.hero}
            </h2>
            <p className="mt-6 max-w-2xl text-white/75">{aboutCopy.footer}</p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 bg-gold px-7 text-navy hover:bg-gold/90",
              )}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
