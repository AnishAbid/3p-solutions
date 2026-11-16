import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ItExperience } from "@/components/it-experience";
import { PracticeCard } from "@/components/practice-card";
import { ProductPartners } from "@/components/product-partners";
import { SolutionPlatforms } from "@/components/solution-platforms";
import { getService, serviceMenu } from "@/lib/site";

export const metadata: Metadata = {
  title: "Practices",
  description:
    "3P Solutions practices: engineering, consulting, and Odoo IT.",
};

export default function PracticesPage() {
  return (
    <>
      <PageHero
        kicker="Practices"
        title="Consulting, IT, and engineering contracting."
        description="Consulting services, IT (Odoo and Subkaro), and engineering contracting. The IT practice is listed here because it is part of this site’s offering."
        image="/images/construction.jpg"
        imageAlt="Construction crew reviewing a reinforced concrete slab"
      />
      {serviceMenu.map((group) => {
        const items = group.slugs
          .map((slug) => getService(slug))
          .filter((item): item is NonNullable<typeof item> => Boolean(item));
        return (
          <section key={group.kicker} className="container-site py-12 md:py-16">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
              {group.kicker}
            </p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">{group.kicker}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((service) => (
                <PracticeCard key={service.slug} practice={service} />
              ))}
            </div>
          </section>
        );
      })}
      <SolutionPlatforms />
      <ItExperience />
      <ProductPartners />
      <CtaBand />
    </>
  );
}
