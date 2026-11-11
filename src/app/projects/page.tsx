import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaqList } from "@/components/faq-list";
import { QuoteSlider } from "@/components/quote-slider";
import { buttonVariants } from "@/components/ui/button";
import {
  aboutCopy,
  faqs,
  projectLines,
  site,
  stats,
  testimonials,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "3P Solutions projects in construction, solar, water supply, wastewater, wind energy, and municipal services.",
};

const [construction, ...otherLines] = projectLines;
const marqueeLabels = projectLines.map((line) => line.title);
const typesFaq = faqs[0];

export default function ProjectsPage() {
  return (
    <>
      <section className="relative min-h-[min(78vh,44rem)] overflow-hidden bg-navy-deep text-white">
        <Image
          src="/images/construction-work.jpg"
          alt="Construction worker placing a concrete pour"
          fill
          priority
          className="object-cover motion-safe:animate-slow-zoom"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy-deep/25" />
        <div className="relative container-home flex min-h-[min(78vh,44rem)] flex-col justify-end pb-16 pt-24 md:pb-20">
          <p className="text-[0.7rem] font-semibold tracking-[0.28em] text-gold uppercase">
            Projects · {site.city}
          </p>
          <h1 className="font-display mt-5 max-w-5xl text-5xl leading-[0.95] font-medium tracking-tight md:text-7xl">
            Showcasing our expertise in diverse fields
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Key service lines published on 3psolutions.com.pk: construction,
            solar, water supply, wastewater treatment, wind energy, and
            municipal services. Named project sites are not listed on the live
            site.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 bg-gold px-7 text-navy hover:bg-gold/90",
              )}
            >
              Get in touch
            </Link>
            <Link
              href="#key-services"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 border-white/30 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white",
              )}
            >
              Our key services
            </Link>
          </div>
        </div>
      </section>

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
              <p className="font-display text-4xl text-gold md:text-5xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm tracking-wide text-white/65">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="key-services" className="bg-background py-20 md:py-28">
        <div className="container-home">
          <div className="max-w-3xl">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Projects
            </p>
            <h2 className="font-display mt-3 text-4xl leading-tight font-medium md:text-6xl">
              Our key services
            </h2>
          </div>

          <article className="mt-14 overflow-hidden rounded-2xl bg-navy text-white">
            <div className="grid lg:grid-cols-12">
              <div className="relative min-h-[20rem] lg:col-span-7 lg:min-h-[34rem]">
                <Image
                  src={construction.image}
                  alt={construction.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-between gap-8 p-8 lg:col-span-5 lg:p-12">
                <div>
                  <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-gold uppercase">
                    01 · Construction
                  </p>
                  <h3 className="font-display mt-3 text-3xl leading-tight md:text-5xl">
                    {construction.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-white/70">
                    {construction.body}
                  </p>
                </div>
                <Link
                  href="/contact?practice=construction"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-white"
                >
                  Get in touch
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </article>

          <div className="mt-6 grid gap-4 md:grid-cols-6 lg:grid-cols-12">
            {otherLines.map((line, index) => {
              const wide =
                line.title === "Solar Energy Solutions" ||
                line.title === "Wind Energy Projects";
              return (
                <Link
                  key={line.title}
                  href={line.href}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl",
                    wide
                      ? "min-h-[22rem] md:col-span-6 lg:col-span-6 lg:min-h-[26rem]"
                      : "min-h-[16rem] md:col-span-3 lg:col-span-4",
                  )}
                >
                  <Image
                    src={line.image}
                    alt={line.imageAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105 motion-reduce:transform-none"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-[0.65rem] tracking-[0.2em] text-gold uppercase">
                      {String(index + 2).padStart(2, "0")}
                    </p>
                    <h3 className="font-display mt-2 text-2xl md:text-3xl">
                      {line.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-white/75">
                      {line.body}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Named project sites are not listed on the live site.
          </p>
        </div>
      </section>

      {typesFaq ? (
        <section className="relative overflow-hidden bg-navy text-white">
          <div className="grid lg:grid-cols-12">
            <div className="relative min-h-[18rem] lg:col-span-5 lg:min-h-[28rem]">
              <Image
                src="/images/transmission.jpg"
                alt="Transmission lines at dusk"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:col-span-7 lg:p-16">
              <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
                {typesFaq.question}
              </p>
              <p className="font-display mt-5 max-w-2xl text-2xl leading-snug md:text-4xl">
                {typesFaq.answer}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      <section className="container-home py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
              3psolutions.com.pk
            </p>
            <h2 className="font-display mt-3 text-4xl leading-tight md:text-5xl">
              Client feedback
            </h2>
          </div>
          <div className="lg:col-span-8">
            <QuoteSlider quotes={testimonials} />
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/40 py-20 md:py-28">
        <div className="container-home grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
              FAQs
            </p>
            <h2 className="font-display mt-3 text-4xl md:text-5xl">FAQs</h2>
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
            src="/images/solar-farm.jpg"
            alt="Aerial view of a solar farm"
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
