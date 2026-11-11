import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { contact, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: `Legal notice for ${site.name}, ${contact.city}.`,
};

export default function LegalNoticePage() {
  return (
    <>
      <PageHero
        kicker="Legal notice"
        title="Legal notice"
        description="Operator details as published on 3psolutions.com.pk."
      />
      <section className="container-site max-w-2xl py-16">
        <p className="font-heading text-2xl">{site.name}</p>
        <p className="mt-1 text-sm text-muted-foreground">3psolutions.com.pk</p>
        <address className="mt-8 space-y-3 text-sm leading-relaxed not-italic">
          <p>
            {contact.addressLine}
            <br />
            {contact.city} {contact.postalCode}
          </p>
          <p>
            Phone:{" "}
            <a className="text-navy underline" href={contact.phoneHref}>
              {contact.phoneDisplay}
            </a>
          </p>
          <p>
            Email:{" "}
            <a className="text-navy underline" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </p>
        </address>
      </section>
    </>
  );
}
