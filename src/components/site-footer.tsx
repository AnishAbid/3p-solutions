import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";
import { practices, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-navy-deep text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <SiteLogo tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            {site.description} We keep the brief, the numbers, and the handover
            in one place.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-gold uppercase">
            Practices
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {practices.map((practice) => (
              <li key={practice.href}>
                <Link
                  href={practice.href}
                  className="text-white/80 hover:text-gold"
                >
                  {practice.kicker}: {practice.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-gold uppercase">
            Firm
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-white/80 hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white/80 hover:text-gold">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/practices" className="text-white/80 hover:text-gold">
                All practices
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-gold uppercase">
            Reach us
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Office address, phone, and email will be published here once they
            are confirmed. Until then, use the{" "}
            <Link href="/contact" className="text-gold hover:underline">
              contact form
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {site.name}. All rights reserved.
          </p>
          <p>Also written {site.alsoKnownAs}.</p>
        </div>
      </div>
    </footer>
  );
}
