import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { PracticeCard } from "@/components/practice-card";
import { buttonVariants } from "@/components/ui/button";
import {
  aboutCopy,
  services,
  site,
  stats,
  testimonials,
  values,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <section className="hero-grid text-white">
        <div className="container-site grid items-center gap-12 py-16 md:grid-cols-12 md:py-24 lg:py-28">
          <div className="md:col-span-7">
            <p className="text-[0.7rem] font-semibold tracking-[0.24em] text-gold uppercase">
              {site.name} · {site.city}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-[1.1] font-semibold md:text-6xl">
              Construction and renewable energy for Pakistan.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              {site.tagline}. {aboutCopy.intro} The IT practice implements{" "}
              <Link href="/practices/it" className="text-gold underline-offset-4 hover:underline">
                Odoo
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 bg-gold px-6 text-navy hover:bg-gold/90",
                )}
              >
                Get started
              </Link>
              <Link
                href="/projects"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 border-white/30 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white",
                )}
              >
                Our projects
              </Link>
            </div>
          </div>
          <aside className="border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:col-span-5 md:p-8">
            <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-gold uppercase">
              Core services
            </p>
            <ul className="mt-6 divide-y divide-white/10">
              {services.slice(0, 3).map((service) => (
                <li key={service.slug} className="py-4 first:pt-0 last:pb-0">
                  <Link href={service.href} className="group block">
                    <p className="text-xs tracking-[0.16em] text-white/50 uppercase">
                      {service.kicker}
                    </p>
                    <p className="mt-1 flex items-center justify-between font-heading text-xl text-white group-hover:text-gold">
                      {service.title}
                      <ArrowUpRight className="size-4 opacity-70" />
                    </p>
                    <p className="mt-2 text-sm text-white/65">{service.blurb}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-y border-gold/25 bg-navy text-white">
        <div className="container-site grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="px-4 py-8 md:px-6">
              <p className="font-heading text-2xl text-gold md:text-3xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-white/70">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
            Our services
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Comprehensive solutions for your needs
          </h2>
          <p className="mt-4 text-muted-foreground">
            We offer a wide range of services tailored to meet the demands of
            modern infrastructure and sustainable building.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <PracticeCard key={service.slug} practice={service} />
          ))}
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-site py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Our core values
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Integrity, sustainability, and excellence.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((item, index) => (
              <div key={item.title} className="border-t border-gold/40 pt-5">
                <p className="font-heading text-sm text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Client feedback
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              What clients say on 3psolutions.com.pk
            </h2>
          </div>
          <div className="grid gap-5 lg:col-span-7">
            {testimonials.map((quote) => (
              <blockquote
                key={quote}
                className="rounded-xl border bg-card p-5 ring-1 ring-foreground/5"
              >
                <p className="font-heading text-lg leading-relaxed">“{quote}”</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/40">
        <div className="container-site py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
                Questions
              </p>
              <h2 className="mt-3 text-3xl font-semibold">Before you write.</h2>
              <p className="mt-4 text-muted-foreground">
                Answers published on the company projects page, covering scope,
                base, quality, and how to get in touch.
              </p>
            </div>
            <div className="lg:col-span-8">
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      <CtaBand title={aboutCopy.hero} body={aboutCopy.footer} />
    </>
  );
}
