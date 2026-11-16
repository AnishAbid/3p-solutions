import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { engineeringPage } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Engineering Contracting",
  description: engineeringPage.lead,
};

export default function RenewablesRedirectPage() {
  return (
    <>
      <PageHero
        kicker={engineeringPage.kicker}
        title={engineeringPage.title}
        description={engineeringPage.lead}
        image="/images/construction-work.jpg"
        imageAlt="Construction worker placing a concrete pour"
      />
      <section className="container-site py-16">
        <Link
          href="/projects"
          className={cn(buttonVariants({ size: "lg" }), "h-11 px-6")}
        >
          Engineering
        </Link>
      </section>
    </>
  );
}
