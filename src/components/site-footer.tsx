import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";
import { contact, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-navy-deep text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <SiteLogo tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            {site.description}
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-gold uppercase">
            Navigation
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/projects" className="text-white/80 hover:text-gold">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/renewables" className="text-white/80 hover:text-gold">
                Renewables
              </Link>
            </li>
            <li>
              <Link
                href="/municipal-services"
                className="text-white/80 hover:text-gold"
              >
                Municipal Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white/80 hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white/80 hover:text-gold">
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-gold uppercase">
            Legal
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/legal-notice" className="text-white/80 hover:text-gold">
                Legal Notice
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-white/80 hover:text-gold">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-[0.7rem] font-semibold tracking-[0.18em] text-gold uppercase">
            Contact
          </p>
          <address className="mt-4 space-y-2 text-sm leading-relaxed text-white/70 not-italic">
            <p>
              {contact.addressLine}
              <br />
              {contact.postalCode} {contact.city}
            </p>
            <p>
              <a href={contact.phoneHref} className="hover:text-gold">
                {contact.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`} className="hover:text-gold">
                {contact.email}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>
            {contact.city}, {site.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
