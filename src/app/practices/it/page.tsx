import type { Metadata } from "next";
import { ItPracticeView } from "@/components/it-practice-view";

export const metadata: Metadata = {
  title: "IT",
  description:
    "3P Solutions IT practice: custom software, Subkaro products, AWS, Azure, the OpenAI API, and Odoo ERP.",
  keywords: [
    "IT services",
    "custom software",
    "Subkaro",
    "Odoo",
    "OODO",
    "AWS",
    "Azure",
    "OpenAI",
    "3P Solutions",
  ],
};

export default function ItPracticePage() {
  return <ItPracticeView />;
}
