import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact 3P Solutions. Use the form for SAP, Odoo, construction, or tax advisory briefs. Office details will be published when confirmed.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Send the brief. We will tell you who should answer it."
        description="Use the form. Office address, phone, and email are not listed yet — that is a labelled gap, not an omission we will fill with fiction."
      />
      <section className="container-site grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="text-2xl font-semibold">Enquiry form</h2>
          <p className="mt-2 mb-8 text-sm text-muted-foreground">
            Empty, error, and success states are all handled here. Submission is
            confirmed in the browser only until a mailbox is published.
          </p>
          <Suspense
            fallback={
              <p className="rounded-lg border border-dashed px-4 py-8 text-sm text-muted-foreground">
                Loading the form…
              </p>
            }
          >
            <ContactForm />
          </Suspense>
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-xl border bg-card p-6">
            <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-gold uppercase">
              Directory — to be added
            </p>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="text-muted-foreground">Office address</dt>
                <dd className="mt-1 font-medium">To be added</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Telephone</dt>
                <dd className="mt-1 font-medium">To be added</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Email</dt>
                <dd className="mt-1 font-medium">To be added</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Hours</dt>
                <dd className="mt-1 font-medium">To be added</dd>
              </div>
            </dl>
            <p className="mt-6 border-t pt-4 text-xs leading-relaxed text-muted-foreground">
              Placeholder fields stay visible on purpose. When the firm confirms
              a registered address and a monitored mailbox, they will replace
              these lines — they will not be improvised on the website.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
