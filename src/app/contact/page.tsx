import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get In Touch",
  description:
    "Contact 3P Solutions in Lahore about construction, solar energy, or municipal services.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get in touch"
        title="Your local experts in construction and sustainable energy solutions."
        description="Have questions or need assistance? Reach out about construction services, solar energy projects, or municipal services."
      />
      <section className="container-site grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="text-2xl font-semibold">Contact us for inquiries</h2>
          <p className="mt-2 mb-8 text-sm text-muted-foreground">
            Send an enquiry through this form. You can also email{" "}
            <a className="text-navy underline" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>{" "}
            or call{" "}
            <a className="text-navy underline" href={contact.phoneHref}>
              {contact.phoneDisplay}
            </a>
            .
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
              Directory
            </p>
            <dl className="mt-6 space-y-5 text-sm">
              <div>
                <dt className="text-muted-foreground">Address</dt>
                <dd className="mt-1 font-medium">
                  {contact.addressLine}
                  <br />
                  {contact.postalCode} {contact.city}
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Telephone</dt>
                <dd className="mt-1 font-medium">
                  <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Email</dt>
                <dd className="mt-1 font-medium">
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Hours</dt>
                <dd className="mt-1 space-y-1 font-medium">
                  {contact.hours.map((row) => (
                    <p key={row.day}>
                      {row.day}: {row.hours}
                    </p>
                  ))}
                </dd>
              </div>
            </dl>
            <p className="mt-6 border-t pt-4 text-xs leading-relaxed text-muted-foreground">
              Details as published on 3psolutions.com.pk (Get In Touch and
              footer).
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
