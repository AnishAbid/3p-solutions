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
