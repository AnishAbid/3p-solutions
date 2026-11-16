import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { contact, formatAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} publishes operator details on this website.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Privacy"
        title="Privacy policy"
        description="This site publishes company contact details. The full policy on 3psolutions.com.pk also describes cookies and analytics on that site."
      />
      <section className="container-site max-w-3xl space-y-8 py-16 text-sm leading-relaxed text-muted-foreground">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Who is responsible</h2>
          <p className="mt-3">
            This site is for {site.name}, {formatAddress()}. Email{" "}
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
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p className="mt-3">
            There is no enquiry form on this site. Use {contact.email} or{" "}
            {contact.phoneDisplay} if you need a reply from the firm.
          </p>
        </div>
      </section>
    </>
  );
}
