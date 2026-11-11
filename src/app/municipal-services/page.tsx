import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { municipalFaqs } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Municipal Services",
  description:
    "3P Solutions municipal services: urban water supply, wastewater treatment, solid waste, and solar integration.",
};

const offerings = [
  {
    title: "Urban Water Supply Management",
    body: "We specialize in designing and implementing efficient urban water supply systems, ensuring clean and reliable access to water for communities.",
  },
  {
    title: "Innovative Treatment Plants",
    body: "Our state-of-the-art wastewater treatment plants are designed to meet stringent environmental standards while optimizing resource recovery.",
  },
  {
    title: "Comprehensive Waste Services",
    body: "From collection to disposal, our solid waste management solutions are tailored to promote sustainability and minimize environmental impact.",
  },
  {
    title: "Solar Energy Integration",
    body: "Harness the power of the sun with our custom solar energy systems, designed to reduce costs and enhance energy efficiency.",
  },
  {
    title: "Sustainable Practices in Municipal Services",
    body: "We implement eco-friendly solutions to ensure sustainable urban development and environmental conservation.",
  },
  {
    title: "Empowering Local Communities",
    body: "Through active community engagement, we promote awareness and participation in municipal service initiatives for better urban living.",
  },
];

export default function MunicipalServicesPage() {
  return (
    <>
      <PageHero
        kicker="Municipal services"
        title="Empowering communities with sustainable solutions"
        description="Your trusted partner in construction, solar, and environmental management."
      />
      <section className="container-site py-16 md:py-20">
        <h2 className="text-3xl font-semibold">Our municipal services</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {offerings.map((item) => (
            <article key={item.title} className="rounded-xl border bg-card p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </article>
          ))}
        </div>
        <Link
          href="/contact?practice=water"
          className={cn(buttonVariants({ size: "lg" }), "mt-10 h-11 px-6")}
        >
          Transform your community
        </Link>
      </section>
      <section className="bg-muted/50">
        <div className="container-site py-16 md:py-20">
          <h2 className="mb-8 text-3xl font-semibold">FAQ</h2>
          <FaqList items={municipalFaqs} />
        </div>
      </section>
      <CtaBand title="Transform your community with our solutions" />
    </>
  );
}
