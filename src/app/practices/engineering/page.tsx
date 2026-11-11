import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Construction Engineering",
  description:
    "3P Solutions engineering practice: construction planning, site coordination, quality, and handover for industrial and commercial works in Pakistan.",
};

const scopes = [
  {
    title: "Industrial and plant-related civil",
    body: "Foundations, industrial buildings, yards, and the civil package that sits around process equipment — coordinated with mechanical and electrical, not thrown over the wall.",
  },
  {
    title: "Commercial buildings",
    body: "Offices, warehouses, and mixed-use shells where the programme, finishes, and services have to land together. We manage the engineering of the job, not a labour-only subcontract.",
  },
  {
    title: "Quality and HSE discipline",
    body: "Inspection and test plans, method statements, and a site that can explain itself to a client or a lender. Safety is a system of permits and briefings, not a poster.",
  },
  {
    title: "Coordination and claims hygiene",
    body: "RFIs, variation records, and progress against a baseline. When the story of the job is written as it happens, close-out is shorter and less theatrical.",
  },
];

export default function EngineeringPracticePage() {
  return (
    <>
      <PageHero
        kicker="Engineering practice"
        title="Construction treated as engineering — drawings, methods, and a site that reports the truth."
        description="Pakistan’s industrial and commercial work is unforgiving of vague programmes. This practice exists to plan, coordinate, and hand over construction with the same seriousness as a plant turnaround."
      />

      <section className="container-site py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {scopes.map((scope) => (
            <article key={scope.title} className="rounded-xl border bg-card p-6">
              <h2 className="text-xl font-semibold">{scope.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {scope.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="container-site grid gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
              On the job
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              What you should expect to see in the file.
            </h2>
          </div>
          <ul className="space-y-4 text-white/80">
            <li className="border-l-2 border-gold pl-4">
              A construction methodology that matches the drawings you approved —
              not a generic method statement with the logo swapped.
            </li>
            <li className="border-l-2 border-gold pl-4">
              Weekly progress against quantities and a look-ahead, so surprises
              arrive as notices, not as finished (or unfinished) work.
            </li>
            <li className="border-l-2 border-gold pl-4">
              Quality records tied to locations: pour cards, material tests,
              snag lists that actually close.
            </li>
            <li className="border-l-2 border-gold pl-4">
              As-built and O&amp;M at handover. If a document is missing, it is
              listed as open. It is not “coming”.
            </li>
          </ul>
        </div>
      </section>

      <section className="container-site py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">Where this practice stops</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We are not a manpower supplier and we do not bid every BOQ that
            arrives in a WhatsApp group. Where the law requires a licensed
            engineer of record, a PEC category, or a named contractor, that
            requirement is stated — we do not print badges we do not hold on
            this website. We will work alongside the named party and keep the
            engineering file honest.
          </p>
          <Link
            href="/contact?practice=engineering"
            className={cn(buttonVariants({ size: "lg" }), "mt-8 h-11 px-6")}
          >
            Talk to engineering
          </Link>
        </div>
      </section>

      <CtaBand title="Send the drawings, the programme, and the constraints." />
    </>
  );
}
