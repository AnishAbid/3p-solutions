import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} (${site.alsoKnownAs}): a three-practice Pakistani firm for SAP and Odoo, construction, and tax advisory.`,
};

const values = [
  {
    title: "Say the constraint",
    body: "If the budget, the licence, or the data will not support the ask, that is the first sentence — not a footnote after a proposal.",
  },
  {
    title: "Write it down",
    body: "Decisions live in working papers. ERP configuration, site instructions, and tax positions should be reconstructable a year later.",
  },
  {
    title: "One set of numbers",
    body: "The plant, the ledger, and the return should tell the same story. When they do not, we treat that as the problem, not as 'alignment'.",
  },
  {
    title: "No borrowed prestige",
    body: "This site does not display partner logos, PEC categories, or ICAP numbers we have not put in writing. Credentials will appear when they are real.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About the firm"
        title={`${site.name} exists so the ERP, the site, and the tax position are not three different companies.`}
        description={`Also written ${site.alsoKnownAs}. Three practices — IT, engineering, and consulting — under one brief.`}
      />

      <section className="container-site py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="max-w-2xl lg:col-span-7">
            <h2 className="text-3xl font-semibold">Who we are</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Pakistani industrial and commercial groups already hire SAP
              partners, contractors, and tax advisors. The failure mode is
              familiar: the system posts one story, the site reports another,
              and the return is prepared from a third spreadsheet. {site.name}{" "}
              is organised to stop that drift.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We are not a generalist digital-transformation shop, and we are
              not a construction company pretending to sell software. Each
              practice has its own craft. The firm is the place those crafts
              are forced to share facts.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Office address, telephone, and email are not printed here yet.
              Until they are confirmed, the contact form is the official
              channel. We would rather leave a labelled gap than invent a
              Clifton suite and a helpline.
            </p>
          </div>
          <aside className="border border-gold/40 bg-navy p-6 text-white lg:col-span-5">
            <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-gold uppercase">
              Name
            </p>
            <p className="mt-3 font-heading text-2xl">{site.name}</p>
            <p className="mt-1 text-sm text-white/70">Also written {site.alsoKnownAs}</p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="text-white/50">IT</dt>
                <dd>SAP and Odoo</dd>
              </div>
              <div>
                <dt className="text-white/50">Engineering</dt>
                <dd>Construction</dd>
              </div>
              <div>
                <dt className="text-white/50">Consulting</dt>
                <dd>Tax Advisory</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="bg-muted/50">
        <div className="container-site py-16 md:py-20">
          <h2 className="text-3xl font-semibold">How we work</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
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

      <CtaBand />
    </>
  );
}
