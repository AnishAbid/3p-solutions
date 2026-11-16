"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PhoneLink } from "@/components/contact-address";
import { contact, faqs } from "@/lib/site";

type Faq = { id: string; question: string; answer: string };

function Answer({ text }: { text: string }) {
  const parts = text.split(contact.phoneDisplay);
  if (parts.length === 1) return text;
  return parts.map((part, index) => (
    <span key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 ? (
        <PhoneLink className="underline underline-offset-4" />
      ) : null}
    </span>
  ));
}

export function FaqList({ items = faqs }: { items?: readonly Faq[] }) {
  return (
    <Accordion className="divide-y rounded-xl border bg-card px-4" multiple={false}>
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="border-border">
          <AccordionTrigger className="py-4 text-base hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            <Answer text={item.answer} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
