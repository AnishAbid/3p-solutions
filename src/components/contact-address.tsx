import { contact } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Address line breaks match the 3P Solutions contact card. */
export function ContactAddress({ className }: { className?: string }) {
  return (
    <span className={cn("block", className)}>
      {contact.addressLines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </span>
  );
}

/** Full directory block from the company card: address, phone, email, website. */
export function ContactDetails({
  className,
  linkClassName,
}: {
  className?: string;
  linkClassName?: string;
}) {
  return (
    <address className={cn("not-italic leading-relaxed", className)}>
      <p>
        <ContactAddress />
      </p>
      <p>
        <a href={contact.phoneHref} className={linkClassName}>
          {contact.phoneDisplay}
        </a>
      </p>
      <p>
        <a href={`mailto:${contact.email}`} className={linkClassName}>
          {contact.email}
        </a>
      </p>
      <p>
        <a
          href={contact.websiteHref}
          target="_blank"
          rel="noopener"
          className={linkClassName}
        >
          {contact.websiteDisplay}
        </a>
      </p>
    </address>
  );
}
