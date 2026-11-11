"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site";

export function FaqList() {
  return (
    <Accordion className="divide-y rounded-xl border bg-card px-4" multiple={false}>
      {faqs.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="border-border">
          <AccordionTrigger className="py-4 text-base hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
