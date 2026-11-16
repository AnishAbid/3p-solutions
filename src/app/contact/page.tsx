import type { Metadata } from "next";
import Image from "next/image";
import {
  ContactAddress,
  ContactDetails,
  PhoneLink,
} from "@/components/contact-address";
import { PageHero } from "@/components/page-hero";
import { contact, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get In Touch",
  description:
    "Contact 3P Solutions about consulting, IT or engineering contracting projects.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get in touch"
        title="Tell us about your project"
        description="Send a short description and we will reply within two working days. Reach out about consulting, IT, or engineering contracting."
        image="/images/construction.jpg"
        imageAlt="Construction crew reviewing a reinforced concrete slab"
      />
      <section className="container-site grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="text-2xl font-semibold">Contact us for inquiries</h2>
          <p className="mt-2 mb-8 text-sm text-muted-foreground">
            Email{" "}
            <a className="text-navy underline" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>{" "}
            or WhatsApp{" "}
            <PhoneLink className="text-navy underline" />
            .
          </p>
          <div className="rounded-2xl border bg-card p-8">
            <Image
              src="/images/logo.png"
              alt=""
              width={64}
              height={60}
              className="size-14 object-contain"
            />
            <p className="font-heading mt-4 text-2xl font-semibold">{site.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{site.tagline}</p>
            <ContactDetails
              className="mt-6 space-y-2 text-base font-medium"
              linkClassName="text-navy underline-offset-4 hover:underline"
            />
          </div>
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
                  <ContactAddress />
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">{contact.phoneLabel}</dt>
                <dd className="mt-1 font-medium">
                  <PhoneLink />
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Email</dt>
                <dd className="mt-1 font-medium">
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Website</dt>
                <dd className="mt-1 font-medium">
                  <a href={contact.websiteHref} target="_blank" rel="noopener">
                    {contact.websiteDisplay}
                  </a>
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
              Address, phone, email, and website as supplied by 3P Solutions.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
