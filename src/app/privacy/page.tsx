import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { contact, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles enquiry data on this website.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Privacy"
        title="Privacy policy"
        description="How this website handles information you send through the contact form. The full policy on 3psolutions.com.pk also describes cookies and analytics on that site."
      />
      <section className="container-site max-w-3xl space-y-8 py-16 text-sm leading-relaxed text-muted-foreground">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Who is responsible</h2>
          <p className="mt-3">
            Enquiries on this site are for {site.name}, {contact.addressLine},{" "}
            {contact.postalCode} {contact.city}. Email{" "}
            <a className="text-navy underline" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            . Further operator details are on the{" "}
            <Link href="/legal-notice" className="text-navy underline">
              legal notice
            </Link>
            .
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">Contact form</h2>
          <p className="mt-3">
            If you send questions through the contact form, the data you enter —
            including the contact details you provide — is used to answer your
            question and any follow-up questions. It is not shared with others
            without your permission.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">This copy of the site</h2>
          <p className="mt-3">
            The form on this Next.js site confirms your enquiry in the browser.
            It does not currently email a mailbox. Use {contact.email} or{" "}
            {contact.phoneDisplay} if you need a reply from the firm.
          </p>
        </div>
      </section>
    </>
  );
}
