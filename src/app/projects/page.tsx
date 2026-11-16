import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { OfferingCard } from "@/components/offering-card";
import { buttonVariants } from "@/components/ui/button";
import {
  engagementCta,
  engineeringPage,
  getService,
  serviceMenu,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Engineering Contracting",
  description:
    "Engineering contracting services: roads, earthworks, buildings, drainage and flood protection, and project management from 3P Solutions.",
};

const engineering =
  serviceMenu.find((group) => group.kicker === "Engineering") ?? serviceMenu[0];
const offerings = engineering.slugs
  .map((slug) => getService(slug))
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

export default function EngineeringPage() {
  return (
    <>
      <section className="relative min-h-[min(70vh,40rem)] overflow-hidden bg-navy-deep text-white">
        <Image
          src="/images/construction-work.jpg"
          alt="Construction worker placing a concrete pour"
          fill
          priority
          className="object-cover motion-safe:animate-slow-zoom"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy-deep/25" />
        <div className="relative container-home flex min-h-[min(70vh,40rem)] flex-col justify-end pb-16 pt-24 md:pb-20">
          <p className="text-[0.7rem] font-semibold tracking-[0.28em] text-gold uppercase">
            {engineeringPage.kicker}
          </p>
          <h1 className="font-display mt-5 max-w-5xl text-4xl leading-[1.05] font-medium tracking-tight md:text-6xl">
            {engineeringPage.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {engineeringPage.lead}
          </p>
          <div className="mt-8">
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

      <section className="container-home py-16 md:py-24">
        <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
          What we do
        </p>
        <h2 className="font-display mt-3 text-3xl md:text-5xl">What we do</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {offerings.map((item) => (
            <OfferingCard
              key={item.slug}
              id={item.slug}
              title={item.title}
              summary={item.summary}
              points={item.points}
              image={item.image}
              imageAlt={item.imageAlt}
            />
          ))}
        </div>
        <aside className="mt-10 rounded-2xl border border-gold/40 bg-navy p-6 text-white md:p-8">
          <h3 className="font-display text-2xl">{engineeringPage.partnersTitle}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
            {engineeringPage.partnersBody}
          </p>
        </aside>
      </section>

      <section className="border-y bg-cream py-16 md:py-24">
        <div className="container-home grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl md:text-4xl">
              {engineeringPage.deliverTitle}
            </h2>
            <p className="mt-4 text-muted-foreground">{engineeringPage.deliverLead}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {engineeringPage.deliverables.map((item) => (
              <li
                key={item}
                className="rounded-xl border bg-card px-4 py-3 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-home py-16 md:py-24">
        <h2 className="font-display text-3xl md:text-4xl">
          {engineeringPage.clientsTitle}
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {engineeringPage.clients.map((client) => (
            <li key={client.title} className="border-l border-gold/50 pl-5">
              <h3 className="text-xl font-semibold">{client.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {client.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand title={engagementCta.title} body={engagementCta.body} />
    </>
  );
}
