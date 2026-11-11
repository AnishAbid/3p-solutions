import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tax Advisory",
  description:
    "3P Solutions consulting practice: corporate tax advisory for Pakistan — income tax, sales tax, withholding, and board-ready positions.",
};

const topics = [
  {
    title: "Corporate income tax",
    body: "Positions on income, deductions, minimum tax, and group questions. Written so a board can read them without a decoder ring.",
  },
  {
    title: "Sales tax and federal excise",
    body: "Input/output, exemptions, and the documentation that has to sit behind a return. Especially where plant, imports, and services mix.",
  },
  {
    title: "Withholding and compliance calendar",
    body: "Who withholds, on what, and when. A calendar that matches payroll, contractors, and vendors — not a generic circular.",
  },
  {
    title: "ERP-aligned tax codes",
    body: "The tax practice reviews how SAP or Odoo posts tax. A beautiful return built on the wrong document flow is still wrong.",
  },
];

export default function ConsultingPracticePage() {
  return (
    <>
      <PageHero
        kicker="Consulting practice"
        title="Tax advisory that can survive the ledger, the site, and FBR."
        description="We advise Pakistani companies on corporate tax: the position, the paperwork, and the conversation with accounts. Not slogans about 'optimisation'."
      />

      <section className="container-site py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {topics.map((topic) => (
            <article key={topic.title} className="rounded-xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{topic.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {topic.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted/50">
        <div className="container-site grid gap-10 py-16 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">How an opinion is issued</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Facts first, then law, then the position we are willing to put our
              name on. Alternatives are listed with risk, not buried. If the
              facts are incomplete, the opinion says so — we do not fill gaps
              with confidence.
            </p>
          </div>
          <ol className="space-y-4">
            {[
              "Intake: entities, periods, and the question you actually need answered.",
              "Evidence: returns, contracts, ERP extracts, and correspondence.",
              "Draft: position, residual risk, and filing implications.",
              "Close: a note the CFO can file, and a list of what still needs a named practitioner’s signature.",
            ].map((item, index) => (
              <li key={item} className="flex gap-4">
                <span className="font-heading text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-site py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">A clear line on authority</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Tax filings in Pakistan often require a registered practitioner or
            legal counsel. This website does not invent that status. Where a
            signature, appearance, or representation before the authority must
            be made by a named professional, we will tell you and work with
            them. Advisory is still useful. Pretending is not.
          </p>
          <Link
            href="/contact?practice=consulting"
            className={cn(buttonVariants({ size: "lg" }), "mt-8 h-11 px-6")}
          >
            Talk to tax advisory
          </Link>
        </div>
      </section>

      <CtaBand title="Send the question, the period, and the documents you already have." />
    </>
  );
}
