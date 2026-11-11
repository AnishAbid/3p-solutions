import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  ClipboardCheck,
  Landmark,
  Scale,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { PracticeCard } from "@/components/practice-card";
import { buttonVariants } from "@/components/ui/button";
import { practices, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: Settings2,
    title: "Systems that close the books",
    body: "SAP and Odoo are not catalogues. They are the operating system of the company. We implement what finance, procurement, and plant can actually run.",
  },
  {
    icon: Building2,
    title: "Construction with an audit trail",
    body: "Drawings, methods, inspections, and handover sit in the same file. Site progress is reported against the brief, not against optimism.",
  },
  {
    icon: Scale,
    title: "Tax that matches the accounts",
    body: "Advisory that reads the same numbers the ERP posts. Positions are written so a CFO can defend them, not so a slide deck can sell them.",
  },
];

const delivery = [
  {
    step: "01",
    title: "One brief",
    body: "Scope, constraints, and what 'done' looks like — before anyone opens a module, a BOQ, or a tax note.",
  },
  {
    step: "02",
    title: "Named owner",
    body: "Each engagement has a practice lead. Adjacent practices join when the work needs them, not as a surprise add-on.",
  },
  {
    step: "03",
    title: "Working papers",
    body: "Configuration decisions, site instructions, and tax positions are written down. Handover is a file, not a WhatsApp thread.",
  },
  {
    step: "04",
    title: "Close-out",
    body: "Training, as-built, and residual risks. If something is still open, it is listed — we do not call a gap a milestone.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero-grid text-white">
        <div className="container-site grid items-center gap-12 py-16 md:grid-cols-12 md:py-24 lg:py-28">
          <div className="md:col-span-7">
            <p className="text-[0.7rem] font-semibold tracking-[0.24em] text-gold uppercase">
              {site.name} · Pakistan
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-[1.1] font-semibold md:text-6xl">
              Enterprise systems. Engineered works. Tax counsel.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              {site.name} — also written {site.alsoKnownAs} — is a three-practice
              firm for companies that need SAP or Odoo, construction
              engineering, and tax advisory without running three separate
              relationships.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 bg-gold px-6 text-navy hover:bg-gold/90",
                )}
              >
                Discuss a brief
              </Link>
              <Link
                href="/practices"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 border-white/30 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white",
                )}
              >
                Explore practices
              </Link>
            </div>
          </div>
          <aside className="border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:col-span-5 md:p-8">
            <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-gold uppercase">
              Three practices
            </p>
            <ul className="mt-6 divide-y divide-white/10">
              {practices.map((practice) => (
                <li key={practice.slug} className="py-4 first:pt-0 last:pb-0">
                  <Link href={practice.href} className="group block">
                    <p className="text-xs tracking-[0.16em] text-white/50 uppercase">
                      {practice.kicker}
                    </p>
                    <p className="mt-1 flex items-center justify-between font-heading text-xl text-white group-hover:text-gold">
                      {practice.title}
                      <ArrowUpRight className="size-4 opacity-70" />
                    </p>
                    <p className="mt-2 text-sm text-white/65">{practice.blurb}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-y border-gold/25 bg-navy text-white">
        <div className="container-site grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {[
            ["3", "Practices, one firm"],
            ["SAP + Odoo", "Enterprise systems"],
            ["Construction", "Engineering delivery"],
            ["Tax", "Corporate advisory"],
          ].map(([stat, label]) => (
            <div key={label} className="px-4 py-8 md:px-6">
              <p className="font-heading text-2xl text-gold md:text-3xl">{stat}</p>
              <p className="mt-2 text-sm text-white/70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
            Practices
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
            Built like a Pakistani industrial consultancy, not a brochure shop.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Owners already know the difference between a slide and a site
            instruction. We write and deliver in that register — across
            systems, construction, and tax.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {practices.map((practice) => (
            <PracticeCard key={practice.slug} practice={practice} />
          ))}
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-site py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
              How we deliver
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Method first. Then modules, concrete, and filings.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {delivery.map((item) => (
              <div key={item.step} className="border-t border-gold/40 pt-5">
                <p className="font-heading text-sm text-gold">{item.step}</p>
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
              Why 3P
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              One set of numbers across the plant, the ledger, and the return.
            </h2>
            <p className="mt-4 text-muted-foreground">
              That is the job. Not a tagline. When inventory, progress billing,
              and tax treatment drift apart, the company pays for it twice —
              once on the site and once with the regulator.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:underline"
            >
              About the firm
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border bg-card p-5 ring-1 ring-foreground/5 last:sm:col-span-2 last:lg:col-span-2"
              >
                <item.icon className="size-5 text-gold" />
                <h3 className="mt-3 font-heading text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
            <div className="flex items-center gap-3 rounded-xl border border-dashed border-gold/50 bg-gold-soft/30 p-5 sm:col-span-2">
              <ShieldCheck className="size-5 shrink-0 text-navy" />
              <p className="text-sm text-navy">
                We do not invent certifications, partner badges, or office
                addresses on this site. Where a licence or named practitioner
                is required, we say so.
              </p>
            </div>
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
                Straight answers on scope, software choice, and how tax work is
                actually signed.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <ClipboardCheck className="size-4 text-gold" />
                <span>No lorem. No partner logos we have not earned here.</span>
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Landmark className="size-4 text-gold" />
                <span>Regional tone: boards, plants, and FBR — not Silicon Valley.</span>
              </div>
            </div>
            <div className="lg:col-span-8">
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
