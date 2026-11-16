import type { Metadata } from "next";
import { ItPracticeView } from "@/components/it-practice-view";

export const metadata: Metadata = {
  title: "IT · Odoo",
  description:
    "3P Solutions IT practice: Odoo ERP plus custom software with TypeScript, Node.js, Nest.js, Python, and React/Next.js.",
  keywords: [
    "Odoo",
    "OODO",
    "ERP",
    "TypeScript",
    "Node.js",
    "Nest.js",
    "IT services",
    "3P Solutions",
  ],
};

export default function ItPracticePage() {
  return <ItPracticeView />;
}
