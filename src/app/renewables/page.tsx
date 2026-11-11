import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { PhotoArticle } from "@/components/photo-article";
import { buttonVariants } from "@/components/ui/button";
import { stats, team } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Renewables",
  description:
    "3P Solutions renewable energy: solar installations and wind farms, plus related water and waste work in Pakistan.",
};

const renewableServices = [
  {
    title: "Solar Energy Solutions",
    body: "Harness the power of the sun with our cutting-edge solar installations, designed to optimize energy efficiency and reduce carbon footprints.",
    image: "/images/solar.jpg",
    imageAlt: "Rows of solar panels in an open field",
  },
  {
    title: "Wind Energy Projects",
    body: "Developing wind farms that convert natural wind into clean energy, contributing to a sustainable energy mix for Pakistan.",
    image: "/images/wind.jpg",
    imageAlt: "Wind turbines on a field at sunset",
  },
  {
    title: "Wastewater Treatment",
    body: "State-of-the-art facilities to treat wastewater, ensuring safe discharge and protecting our valuable water resources.",
    image: "/images/wastewater.jpg",
    imageAlt: "Industrial treatment plant tanks and piping",
  },
  {
    title: "Water Supply Systems",
    body: "Robust and reliable systems designed to ensure clean and abundant water access for communities across Pakistan.",
    image: "/images/water.jpg",
    imageAlt: "Clean drinking water poured into a glass",
  },
  {
    title: "Solid Waste Management",
    body: "Innovative solutions for efficient waste management, turning waste into resources through recycling and composting initiatives.",
    image: "/images/waste.jpg",
    imageAlt: "Sorted scrap and solid waste ready for processing",
  },
  {
    title: "Municipal Services Infrastructure",
    body: "Building resilient municipal infrastructures that are essential for sustainable urban growth and environmental conservation.",
    image: "/images/municipal.jpg",
    imageAlt: "City skyline at night",
  },
];

export default function RenewablesPage() {
  return (
    <>
      <PageHero
        kicker="Renewables"
        title="Renewable energy solutions for a sustainable future"
        description="Empowering Pakistan with clean and green energy — solar installations and wind farms, as published on 3psolutions.com.pk."
        image="/images/solar-farm.jpg"
        imageAlt="Aerial view of a solar farm"
      />
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
      <section className="container-site py-16 md:py-20">
        <h2 className="text-3xl font-semibold">Our renewable services</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {renewableServices.map((item) => (
            <PhotoArticle
              key={item.title}
              title={item.title}
              body={item.body}
              image={item.image}
              imageAlt={item.imageAlt}
            />
          ))}
        </div>
        <Link
          href="/contact?practice=solar"
          className={cn(buttonVariants({ size: "lg" }), "mt-10 h-11 px-6")}
        >
          Get in touch
        </Link>
      </section>
      <section className="bg-muted/50">
        <div className="container-site py-16 md:py-20">
          <h2 className="text-3xl font-semibold">Team</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="rounded-xl border bg-card p-5">
                <h3 className="font-heading text-lg font-semibold">{member.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Renewable energy solutions for a sustainable future" />
    </>
  );
}
