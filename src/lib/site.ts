export const site = {
  name: "3P Solutions",
  alsoKnownAs: "3Psolution",
  tagline: "Your trusted partner in construction and sustainable energy",
  description:
    "3P Solutions delivers construction, renewable energy, municipal services, and Odoo IT from Lahore, for work across Pakistan.",
  city: "Lahore",
  country: "Pakistan",
} as const;

export const contact = {
  addressLine: "123 Construction Lane",
  postalCode: "54000",
  city: "Lahore",
  phoneDisplay: "+92 123 4567890",
  phoneAltDisplay: "+92 123 456 7890",
  phoneHref: "tel:+921234567890",
  email: "info@3psolutions.com.pk",
  hours: [
    { day: "Monday", hours: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
    { day: "Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ],
} as const;

export const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/renewables", label: "Renewables" },
  { href: "/municipal-services", label: "Municipal Services" },
  { href: "/practices/it", label: "IT" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Get In Touch" },
] as const;

export const headerLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
] as const;

export const serviceMenu = [
  {
    kicker: "Construction",
    href: "/projects",
    slugs: ["construction"],
  },
  {
    kicker: "Renewables",
    href: "/renewables",
    slugs: ["solar", "wind"],
  },
  {
    kicker: "Municipal",
    href: "/municipal-services",
    slugs: ["water", "wastewater", "waste"],
  },
  {
    kicker: "IT",
    href: "/practices/it",
    slugs: ["odoo"],
  },
] as const;

export const heroSlides = [
  {
    src: "/images/construction.jpg",
    alt: "Construction crew reviewing a reinforced concrete slab",
    label: "Construction",
  },
  {
    src: "/images/solar-farm.jpg",
    alt: "Aerial view of a solar farm",
    label: "Solar energy",
  },
  {
    src: "/images/wind.jpg",
    alt: "Wind turbines on a field at sunset",
    label: "Wind energy",
  },
  {
    src: "/images/municipal.jpg",
    alt: "City skyline at night",
    label: "Municipal services",
  },
  {
    src: "/images/odoo.jpg",
    alt: "Laptop showing operations dashboards used in ERP work",
    label: "Odoo",
  },
] as const;

export const services = [
  {
    slug: "odoo",
    href: "/practices/it",
    kicker: "IT",
    title: "Odoo",
    shortTitle: "Odoo",
    summary:
      "Odoo ERP for finance, inventory, manufacturing, and operations — implemented so the books, the warehouse, and the site can share one set of numbers.",
    blurb:
      "Odoo implementation, configuration, training, and support. (Sometimes searched as OODO.)",
    image: "/images/odoo.jpg",
    imageAlt: "Laptop showing operations dashboards used in ERP work",
  },
  {
    slug: "construction",
    href: "/projects",
    kicker: "Construction",
    title: "Construction Services",
    shortTitle: "Construction",
    summary:
      "Expert project management and quality building practices for a robust infrastructure.",
    blurb:
      "Construction services for modern infrastructure, delivered with quality building practices.",
    image: "/images/construction.jpg",
    imageAlt: "Construction crew reviewing a reinforced concrete slab",
  },
  {
    slug: "solar",
    href: "/renewables",
    kicker: "Renewables",
    title: "Solar Energy Solutions",
    shortTitle: "Solar Energy",
    summary:
      "Harness the power of the sun with efficient solar panel installations.",
    blurb:
      "Solar installations designed to optimize energy efficiency and reduce carbon footprints.",
    image: "/images/solar.jpg",
    imageAlt: "Rows of solar panels in an open field",
  },
  {
    slug: "water",
    href: "/municipal-services",
    kicker: "Municipal",
    title: "Water Supply Management",
    shortTitle: "Water Supply",
    summary:
      "Reliable water supply solutions for municipalities and private sectors.",
    blurb:
      "Urban water supply systems for clean, reliable access in communities.",
    image: "/images/water.jpg",
    imageAlt: "Clean drinking water poured into a glass",
  },
  {
    slug: "wastewater",
    href: "/municipal-services",
    kicker: "Municipal",
    title: "Wastewater Treatment",
    shortTitle: "Wastewater",
    summary:
      "Advanced technologies for effective wastewater management and treatment.",
    blurb:
      "Treatment plants designed to meet environmental standards and recover resources.",
    image: "/images/wastewater.jpg",
    imageAlt: "Industrial treatment plant tanks, piping, and towers",
  },
  {
    slug: "waste",
    href: "/municipal-services",
    kicker: "Municipal",
    title: "Solid Waste Management",
    shortTitle: "Solid Waste",
    summary:
      "Approaches to waste collection, recycling, and management.",
    blurb:
      "Collection to disposal, with recycling and composting where the work calls for it.",
    image: "/images/waste.jpg",
    imageAlt: "Sorted scrap and solid waste ready for processing",
  },
  {
    slug: "wind",
    href: "/renewables",
    kicker: "Renewables",
    title: "Wind Energy Projects",
    shortTitle: "Wind Energy",
    summary:
      "Wind farms that convert natural wind into clean energy for Pakistan’s energy mix.",
    blurb:
      "Wind energy projects contributing to a sustainable energy mix for Pakistan.",
    image: "/images/wind.jpg",
    imageAlt: "Wind turbines on a field at sunset",
  },
] as const;

/** @deprecated Use services. Kept so older query strings still resolve. */
export const practices = services;

export type ServiceSlug = (typeof services)[number]["slug"];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const stats = [
  { value: "10", label: "Years in business" },
  { value: "150", label: "Projects completed" },
  { value: "5,000", label: "Happy clients" },
  { value: "30", label: "Renewable projects" },
] as const;

export const values = [
  {
    title: "Integrity",
    body: "We uphold the highest standards of honesty and transparency in our operations.",
  },
  {
    title: "Sustainability",
    body: "We prioritize eco-friendly practices in each project we undertake.",
  },
  {
    title: "Excellence",
    body: "We strive for excellence in service delivery and craftsmanship.",
  },
] as const;

export const team = [
  {
    name: "Ahmed Ali",
    role: "Project Manager with expertise in renewable energy projects.",
  },
  {
    name: "Sara Khan",
    role: "Lead Engineer focusing on solar energy technology.",
  },
  {
    name: "Bilal Tariq",
    role: "Waste Management Specialist dedicated to sustainable solutions.",
  },
  {
    name: "Nadia Hussain",
    role: "Municipal Services Consultant with vast experience in infrastructure.",
  },
  {
    name: "Aamir Malik",
    role: "Environmental Scientist promoting green initiatives.",
  },
  {
    name: "Zainab Rafiq",
    role: "Business Development Director aiming to expand renewable services.",
  },
] as const;

export const testimonials = [
  "3P Solutions delivered our project on time and exceeded our expectations!",
  "Their professionalism in managing our municipal services was remarkable.",
  "The installation of the solar panels was smooth and efficient. Highly recommend!",
] as const;

export const projectLines = [
  {
    title: "Construction Services",
    body: "Project management and quality building practices for infrastructure.",
    image: "/images/construction.jpg",
    imageAlt: "Construction crew on a concrete slab",
    href: "/projects",
  },
  {
    title: "Solar Energy Solutions",
    body: "Solar panel installations for efficient, lower-carbon power.",
    image: "/images/solar.jpg",
    imageAlt: "Solar panel array",
    href: "/renewables",
  },
  {
    title: "Water Supply Management",
    body: "Water supply for municipalities and private clients.",
    image: "/images/water.jpg",
    imageAlt: "Clean water supply",
    href: "/municipal-services",
  },
  {
    title: "Wastewater Treatment Projects",
    body: "Treatment plants for safe discharge and resource recovery.",
    image: "/images/wastewater.jpg",
    imageAlt: "Wastewater treatment plant",
    href: "/municipal-services",
  },
  {
    title: "Wind Energy Projects",
    body: "Wind farms converting natural wind into clean energy.",
    image: "/images/wind.jpg",
    imageAlt: "Wind farm at sunset",
    href: "/renewables",
  },
  {
    title: "Municipal Services",
    body: "Urban water, waste, and related municipal infrastructure.",
    image: "/images/municipal.jpg",
    imageAlt: "City skyline at night",
    href: "/municipal-services",
  },
] as const;

export const faqs = [
  {
    id: "types",
    question: "What types of projects does 3P Solutions undertake?",
    answer:
      "We specialize in a variety of sectors including construction services, municipal services, water supply, wastewater treatment plants, solar energy, wind energy, and transmission lines projects.",
  },
  {
    id: "where",
    question: "Where is 3P Solutions based?",
    answer:
      "Our headquarters is located in Lahore, Pakistan, but we operate projects across the entire country.",
  },
  {
    id: "quality",
    question: "How does 3P Solutions ensure project quality?",
    answer:
      "We maintain stringent quality control measures throughout all stages of our projects, ensuring that we meet industry standards and client expectations.",
  },
  {
    id: "scale",
    question: "Can you handle large-scale projects?",
    answer:
      "Yes, we have the capacity and expertise to manage large-scale projects, ensuring timely delivery and successful outcomes.",
  },
  {
    id: "sustainable",
    question: "Does 3P Solutions offer sustainable solutions?",
    answer:
      "Absolutely! We are committed to sustainability and incorporate eco-friendly practices into our solar energy and waste management projects.",
  },
  {
    id: "contact",
    question: "How can I get in touch for a project consultation?",
    answer:
      "You can contact us through our website’s contact form or call us directly to schedule a consultation regarding your project needs.",
  },
] as const;

export const municipalFaqs = [
  {
    id: "offer",
    question: "What types of municipal services do you offer?",
    answer:
      "We provide a wide range of municipal services including water supply management, wastewater treatment, solid waste management, and renewable energy solutions.",
  },
  {
    id: "sustain",
    question: "How do you ensure the sustainability of your projects?",
    answer:
      "We integrate environmentally friendly practices and sustainable materials into all our construction and municipal service projects.",
  },
  {
    id: "custom",
    question: "Can you customize your services for specific neighborhoods or communities?",
    answer:
      "Yes, we tailor our services to meet the unique needs of each community, ensuring optimal results and satisfaction.",
  },
  {
    id: "reach",
    question: "How can I get in touch with your team?",
    answer:
      "You can contact us through our website’s contact form or call our customer service for immediate assistance.",
  },
] as const;

export const aboutCopy = {
  intro:
    "At 3P Solutions, we are dedicated to delivering high-quality construction services and innovative solutions in solar energy, water management, and waste management. With years of experience based in Lahore, we excel in various sectors, ensuring sustainability and reliability in everything we do.",
  footer:
    "At 3P Solutions, we are dedicated to delivering high-quality construction services and innovative energy solutions, including solar and wind energy projects. Based in Lahore, we are committed to enhancing the infrastructure and sustainability of communities across Pakistan. Contact us today to find out how we can help you.",
  hero:
    "Innovative construction and energy solutions for a greener tomorrow.",
} as const;

const legacyQuery: Record<string, ServiceSlug> = {
  it: "odoo",
  engineering: "construction",
  consulting: "water",
};

export function resolveServiceSlug(raw: string | null) {
  if (!raw) return "";
  if (services.some((item) => item.slug === raw)) return raw;
  return legacyQuery[raw] ?? "";
}
