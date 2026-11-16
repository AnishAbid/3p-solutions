import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { OfferingCard } from "@/components/offering-card";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import {
  consultingPage,
  engagementCta,
  getService,
  serviceMenu,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Consulting Services",
  description:
    "Financial modelling, feasibility studies, business plans, joint venture proposals and tender support from 3P Solutions.",
};

const consulting =
  serviceMenu.find((group) => group.kicker === "Consulting") ?? serviceMenu[0];
const offerings = consulting.slugs
  .map((slug) => getService(slug))
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        kicker={consultingPage.kicker}
        title={consultingPage.title}
        description={consultingPage.lead}
        image="/images/industries/real-estate.jpg"
        imageAlt="House keys beside a model home on a desk"
      />

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
          <h3 className="font-display text-2xl">{consultingPage.paidTitle}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
            {consultingPage.paidBody}
          </p>
        </aside>
      </section>

      <section className="border-y bg-cream py-16 md:py-24">
        <div className="container-home grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl md:text-4xl">
              {consultingPage.deliverTitle}
            </h2>
            <p className="mt-4 text-muted-foreground">{consultingPage.deliverLead}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {consultingPage.deliverables.map((item) => (
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
          {consultingPage.clientsTitle}
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {consultingPage.clients.map((client) => (
            <li key={client.title} className="border-l border-gold/50 pl-5">
              <h3 className="text-xl font-semibold">{client.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {client.body}
              </p>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className={cn(buttonVariants({ size: "lg" }), "mt-12 h-11 px-6")}
        >
          Get in touch
        </Link>
      </section>

      <CtaBand title={engagementCta.title} body={engagementCta.body} />
    </>
  );
}
