import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { aboutCopy, site, team, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: aboutCopy.intro,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        title="High-quality construction and innovative energy solutions from Lahore."
        description={aboutCopy.intro}
      />

      <section className="container-site py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="max-w-2xl lg:col-span-7">
            <h2 className="text-3xl font-semibold">Who we are</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {aboutCopy.footer}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Headquarters are in {site.city}, {site.country}. Projects are
              undertaken across the country, in construction, municipal
              services, water supply, wastewater treatment, solar energy, wind
              energy, and transmission lines.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Alongside that field work, the IT practice implements Odoo (also
              searched as OODO). No named IT clients are listed on this site.
            </p>
          </div>
          <aside className="border border-gold/40 bg-navy p-6 text-white lg:col-span-5">
            <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-gold uppercase">
              Company
            </p>
            <p className="mt-3 font-heading text-2xl">{site.name}</p>
            <p className="mt-1 text-sm text-white/70">
              Construction, energy, municipal, and Odoo IT
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="text-white/50">Base</dt>
                <dd>
                  {site.city}, {site.country}
                </dd>
              </div>
              <div>
                <dt className="text-white/50">Focus</dt>
                <dd>Construction, solar, wind, water, waste, municipal, Odoo</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="bg-muted/50">
        <div className="container-site py-16 md:py-20">
          <h2 className="text-3xl font-semibold">Our core values</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-xl border bg-card p-6">
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-16 md:py-20">
        <h2 className="text-3xl font-semibold">Team</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Names and roles as published on the renewables page of
          3psolutions.com.pk.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="rounded-xl border bg-card p-5">
              <h3 className="font-heading text-lg font-semibold">{member.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {member.role}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
