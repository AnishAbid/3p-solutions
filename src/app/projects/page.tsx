import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { PhotoArticle } from "@/components/photo-article";
import { projectLines, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "3P Solutions projects in construction, solar, water supply, wastewater, wind energy, and municipal services.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        kicker="Projects"
        title="Showcasing our expertise in diverse fields"
        description="Key service lines published on 3psolutions.com.pk: construction, solar, water supply, wastewater treatment, wind energy, and municipal services. Named project sites are not listed on the live site."
        image="/images/construction-work.jpg"
        imageAlt="Construction worker placing a concrete pour"
      />
      <section className="container-site py-16 md:py-20">
        <h2 className="text-3xl font-semibold">Our key services</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectLines.map((line) => (
            <PhotoArticle
              key={line.title}
              title={line.title}
              body={line.body}
              image={line.image}
              imageAlt={line.imageAlt}
            />
          ))}
        </div>
      </section>
      <section className="bg-muted/50">
        <div className="container-site py-16 md:py-20">
          <h2 className="text-3xl font-semibold">Client feedback</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((quote) => (
              <blockquote key={quote} className="rounded-xl border bg-card p-5">
                <p className="leading-relaxed">“{quote}”</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      <section className="container-site py-16 md:py-20">
        <h2 className="mb-8 text-3xl font-semibold">FAQs</h2>
        <FaqList />
      </section>
      <CtaBand />
    </>
  );
}
