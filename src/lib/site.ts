export const site = {
  name: "3P Solutions",
  alsoKnownAs: "3Psolution",
  tagline: "Three practices. One accountable partner.",
  description:
    "3P Solutions (also written 3Psolution) is a Pakistani consultancy spanning SAP and Odoo, construction engineering, and tax advisory.",
} as const;

export const nav = [
  { href: "/practices", label: "Practices" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const practices = [
  {
    slug: "it",
    href: "/practices/it",
    kicker: "IT",
    title: "SAP and Odoo",
    shortTitle: "SAP & Odoo",
    summary:
      "Enterprise systems that match how your business actually runs — finance, supply chain, manufacturing, and the integrations around them.",
    blurb:
      "Implementation, rollout, and support for SAP and Odoo, with process design that finance and operations can live with.",
  },
  {
    slug: "engineering",
    href: "/practices/engineering",
    kicker: "Engineering",
    title: "Construction",
    shortTitle: "Construction",
    summary:
      "Construction engineering for industrial, commercial, and infrastructure works — planned, coordinated, and handed over with a paper trail.",
    blurb:
      "From method statements to site coordination, we treat construction as an engineered delivery, not a collection of invoices.",
  },
  {
    slug: "consulting",
    href: "/practices/consulting",
    kicker: "Consulting",
    title: "Tax Advisory",
    shortTitle: "Tax Advisory",
    summary:
      "Corporate tax counsel for Pakistan: structuring, filings, withholding, and the questions that sit between accounts and the regulator.",
    blurb:
      "Clear advice on income tax, sales tax, and corporate compliance, written so boards and CFOs can act on it.",
  },
] as const;

export type PracticeSlug = (typeof practices)[number]["slug"];

export function getPractice(slug: string) {
  return practices.find((practice) => practice.slug === slug);
}

export const faqs = [
  {
    id: "one-firm",
    question: "Why keep IT, construction, and tax in one firm?",
    answer:
      "Most mid-size Pakistani companies do not fail for lack of vendors. They fail when the ERP, the site, and the tax position are each told a different story. 3P Solutions is built so those three conversations happen in one place, with one brief and one set of numbers.",
  },
  {
    id: "sap-or-odoo",
    question: "Do you push SAP or Odoo?",
    answer:
      "Neither by default. SAP is the right backbone for complex, multi-entity, tightly controlled operations. Odoo is often the better fit when a company needs a full suite quickly, with room to grow. We will tell you which one we would not implement for your case.",
  },
  {
    id: "construction-scope",
    question: "What kind of construction work do you take on?",
    answer:
      "Industrial and commercial buildings, plant-related civil works, and the engineering coordination that sits around a main contractor. We are not a labour-only contractor. We are the engineering practice that keeps drawings, methods, quality, and site progress aligned.",
  },
  {
    id: "tax-filings",
    question: "Can you file returns with FBR?",
    answer:
      "We advise on position, documentation, and filings. Where a named tax practitioner or legal counsel must sign, we say so up front and work alongside them. We do not pretend a marketing website is a practising certificate.",
  },
  {
    id: "where",
    question: "Where do you work?",
    answer:
      "Across Pakistan, with the same operating model whether the brief is a plant in Punjab, a commercial fit-out in Karachi, or a group ERP spanning several companies. Office location and phone will be published here once they are confirmed — until then, use the contact form.",
  },
] as const;
