import type { Metadata } from "next";
import Image from "next/image";
import { ContactDetails } from "@/components/contact-address";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get In Touch",
  description:
    "Contact 3P Solutions in Lahore: address, phone, email, and website.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Get in touch"
        title={`${site.tagline}.`}
        description="Reach 3P Solutions in Lahore by phone, email, or the address below."
        image="/images/solar.jpg"
        imageAlt="Rows of solar panels in an open field"
      />
      <section className="container-site py-16 md:py-24">
        <div className="mx-auto max-w-xl rounded-2xl border bg-card p-8 md:p-10">
          <Image
            src="/images/logo.png"
            alt=""
            width={72}
            height={68}
            className="size-16 object-contain"
          />
          <p className="font-heading mt-5 text-2xl font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{site.tagline}</p>
          <ContactDetails
            className="mt-8 space-y-2 text-base font-medium"
            linkClassName="text-navy underline-offset-4 hover:underline"
          />
        </div>
      </section>
    </>
  );
}
