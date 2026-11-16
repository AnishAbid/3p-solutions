export const site = {
  name: "3P Solutions",
  alsoKnownAs: "3Psolution",
  tagline: "Solutions Redefined",
  description:
    "3P Solutions (Private) Limited is a Pakistani company providing consulting services, IT services and engineering contracting services.",
  city: "Lahore",
  country: "Pakistan",
  foundedYear: 2008,
} as const;

export function yearsInBusiness(year = new Date().getFullYear()) {
  return Math.max(0, year - site.foundedYear);
}

export const contact = {
  addressLines: [
    "SF 10, D.G Commercial Arcade,",
    "Divine Gardens, New Airport Road, Lahore.",
  ],
  city: "Lahore",
  phoneDisplay: "+92-323-417 6685",
  phoneHref: "https://wa.me/923234176685",
  phoneLabel: "Telephone/WhatsApp",
  email: "info@3psolutions.com.pk",
  websiteDisplay: "www.3psolutions.com.pk",
  websiteHref: "https://www.3psolutions.com.pk",
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

export function formatAddress() {
  return contact.addressLines.join(" ");
}

export const nav = [
  { href: "/municipal-services", label: "Consulting" },
  { href: "/practices/it", label: "IT" },
  { href: "/projects", label: "Engineering" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact us" },
] as const;

export const headerLinks = [
  { href: "/municipal-services", label: "Consulting" },
  { href: "/practices/it", label: "IT" },
  { href: "/projects", label: "Engineering" },
  { href: "/about", label: "About" },
] as const;

export const serviceMenu = [
  {
    kicker: "Consulting",
    href: "/municipal-services",
    slugs: [
      "financial-modelling",
      "business-plans",
      "tender-support",
      "regulatory",
    ],
    image: "/images/industries/real-estate.jpg",
    imageAlt: "House keys beside a model home on a desk",
  },
  {
    kicker: "IT",
    href: "/practices/it",
    slugs: ["odoo"],
    image: "/images/odoo.jpg",
    imageAlt: "Laptop showing operations dashboards used in ERP work",
  },
  {
    kicker: "Engineering",
    href: "/projects",
    slugs: ["roads", "buildings", "water-works", "site-management"],
    image: "/images/construction.jpg",
    imageAlt: "Construction crew reviewing a reinforced concrete slab",
  },
] as const;

export const heroSlides = [
  {
    src: "/images/construction.jpg",
    alt: "Construction crew reviewing a reinforced concrete slab",
    label: "Engineering",
  },
  {
    src: "/images/water.jpg",
    alt: "Clean drinking water poured into a glass",
    label: "Water infrastructure",
  },
  {
    src: "/images/industries/real-estate.jpg",
    alt: "House keys beside a model home on a desk",
    label: "Consulting",
  },
  {
    src: "/images/odoo.jpg",
    alt: "Laptop showing operations dashboards used in ERP work",
    label: "Odoo",
  },
] as const;

export const services = [
  {
    slug: "financial-modelling",
    href: "/municipal-services#financial-modelling",
    kicker: "Consulting",
    title: "Financial modelling and feasibility",
    shortTitle: "Financial modelling",
    summary:
      "Integrated models that show whether a project works and under what conditions.",
    blurb:
      "Area, inventory and phasing statements; revenue, payment-plan and cost build-ups; cash flow, funding requirement, NPV and IRR.",
    points: [
      "Area, inventory and phasing statements",
      "Revenue, payment-plan and cost build-ups",
      "Cash flow, funding requirement, NPV and IRR",
      "Sensitivity and scenario analysis",
    ],
    image: "/images/industries/banking.jpg",
    imageAlt: "Payment cards used in banking and financial services",
  },
  {
    slug: "business-plans",
    href: "/municipal-services#business-plans",
    kicker: "Consulting",
    title: "Business plans and JV proposals",
    shortTitle: "Business plans",
    summary:
      "Plans written for a specific reader: an authority, a partner or an investor.",
    blurb:
      "Development approach and execution strategy, joint venture and land-equity structures, risk allocation, and implementation schedules.",
    points: [
      "Development approach and execution strategy",
      "Joint venture and land-equity structures",
      "Risk allocation and mitigation",
      "Implementation schedules and milestones",
    ],
    image: "/images/industries/real-estate.jpg",
    imageAlt: "House keys beside a model home on a desk",
  },
  {
    slug: "tender-support",
    href: "/municipal-services#tender-support",
    kicker: "Consulting",
    title: "Tender and procurement support",
    shortTitle: "Tender support",
    summary:
      "Help preparing compliant, competitive bids for public and donor-funded work.",
    blurb:
      "Review of bidding documents and qualification criteria, gap analysis, bid forms, and joint venture structuring.",
    points: [
      "Review of bidding documents and qualification criteria",
      "Gap analysis against experience and financial requirements",
      "Bid forms, method statements and schedules",
      "Partner and joint venture structuring",
    ],
    image: "/images/construction-work.jpg",
    imageAlt: "Construction worker placing a concrete pour",
  },
  {
    slug: "regulatory",
    href: "/municipal-services#regulatory",
    kicker: "Consulting",
    title: "Regulatory and compliance documentation",
    shortTitle: "Regulatory documentation",
    summary: "Documentation prepared to the format regulators expect.",
    blurb:
      "Standard operating procedures, licensing dossiers, quality management documentation, and policy manuals.",
    points: [
      "Standard operating procedures",
      "Licensing and registration dossiers",
      "Quality management documentation",
      "Policy and procedure manuals",
    ],
    image: "/images/industries/education.jpg",
    imageAlt: "Students in a classroom watching a lesson on a projector",
  },
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
    points: [] as const,
    image: "/images/odoo.jpg",
    imageAlt: "Laptop showing operations dashboards used in ERP work",
  },
  {
    slug: "roads",
    href: "/projects#roads",
    kicker: "Engineering",
    title: "Roads and earthworks",
    shortTitle: "Roads and earthworks",
    summary: "Construction, dualisation and rehabilitation of roads.",
    blurb:
      "Embankments, subgrade and sub-base; asphalt and concrete pavements; road furniture; bridge approaches and culverts.",
    points: [
      "Embankments, subgrade and sub-base",
      "Asphalt and concrete pavements",
      "Road furniture, signage and markings",
      "Bridge approaches and culverts",
    ],
    image: "/images/construction-work.jpg",
    imageAlt: "Construction worker placing a concrete pour",
  },
  {
    slug: "buildings",
    href: "/projects#buildings",
    kicker: "Engineering",
    title: "Buildings and structures",
    shortTitle: "Buildings and structures",
    summary: "Public and commercial buildings from foundations to finishes.",
    blurb:
      "Educational and healthcare buildings, offices and commercial premises, reinforced concrete structures, and external works.",
    points: [
      "Educational and healthcare buildings",
      "Offices and commercial premises",
      "Reinforced concrete structures",
      "Finishing and external works",
    ],
    image: "/images/construction.jpg",
    imageAlt: "Construction crew reviewing a reinforced concrete slab",
  },
  {
    slug: "water-works",
    href: "/projects#water-works",
    kicker: "Engineering",
    title: "Water, drainage and flood protection",
    shortTitle: "Water and drainage",
    summary: "Infrastructure that manages water safely.",
    blurb:
      "Sewerage and storm-water drainage, dykes and retention ponds, lined channels, and erosion control.",
    points: [
      "Sewerage and storm-water drainage",
      "Dykes, embankments and retention ponds",
      "Lined channels and ditches",
      "Erosion control and slope protection",
    ],
    image: "/images/water.jpg",
    imageAlt: "Clean drinking water poured into a glass",
  },
  {
    slug: "site-management",
    href: "/projects#site-management",
    kicker: "Engineering",
    title: "Project and site management",
    shortTitle: "Site management",
    summary: "Running the site so the work is done right the first time.",
    blurb:
      "Planning and progress reporting, quality control and material testing, health and safety, and joint ventures with specialist partners.",
    points: [
      "Planning, scheduling and progress reporting",
      "Quality control and material testing",
      "Health, safety and environmental management",
      "Joint ventures with specialist partners",
    ],
    image: "/images/municipal.jpg",
    imageAlt: "City skyline at night",
  },
] as const;

/** @deprecated Use services. Kept so older query strings still resolve. */
export const practices = services;

export type ServiceSlug = (typeof services)[number]["slug"];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const engineeringPage = {
  kicker: "Engineering Contracting",
  title:
    "Civil and infrastructure works delivered to specification and on schedule",
  lead: "We construct and rehabilitate roads, buildings and water infrastructure for public and private clients, with planning, quality control and site safety managed in-house.",
  partnersTitle: "Working with partners",
  partnersBody:
    "For larger or specialised projects, including donor-funded tenders, we form joint ventures with experienced partners so each contract is delivered by the right combination of experience, equipment and people.",
  deliverTitle: "What you receive",
  deliverLead:
    "Typical deliverables. Every proposal lists exactly what is included.",
  deliverables: [
    "Method statement",
    "Construction schedule",
    "Quality assurance plan",
    "Health and safety plan",
    "Monthly progress reports",
    "As-built drawings",
    "Completion documentation",
  ],
  clientsTitle: "Who we work with",
  clients: [
    {
      title: "Government departments",
      body: "Highways, local government and development authorities.",
    },
    {
      title: "Real estate developers",
      body: "Infrastructure and building works for private schemes.",
    },
    {
      title: "Donor-funded programmes",
      body: "Civil works under World Bank and similar procurement rules, alone or in joint venture.",
    },
    {
      title: "Industrial clients",
      body: "Site development, access roads and drainage.",
    },
  ],
} as const;

export const consultingPage = {
  kicker: "Consulting Services",
  title: "Financial models, business plans and bids that stand up to scrutiny",
  lead: "We help developers, investors and contractors make decisions and win approvals. Our work is built around the questions an authority, lender or board will ask.",
  paidTitle: "Paid on milestones",
  paidBody:
    "Consulting assignments are quoted as a lump-sum professional fee paid against defined milestones, such as mobilisation, draft model and final report. Where it suits the client, part of the fee can be linked to a successful outcome.",
  deliverTitle: "What you receive",
  deliverLead:
    "Typical deliverables. Every proposal lists exactly what is included.",
  deliverables: [
    "Financial model (Excel) with user guide",
    "Business plan report",
    "Executive summary for decision-makers",
    "Bid compliance matrix",
    "Method statements",
    "SOP and policy manuals",
    "Presentation to authority or board",
  ],
  clientsTitle: "Who we work with",
  clients: [
    {
      title: "Real estate developers",
      body: "Preparing models and business plans for mixed-use and joint venture developments.",
    },
    {
      title: "Contractors and bidders",
      body: "Checking qualification and preparing bids for public and international tenders.",
    },
    {
      title: "Healthcare and regulated businesses",
      body: "Preparing the SOPs and documentation needed for licensing.",
    },
    {
      title: "Investors and lenders",
      body: "Independent review of project economics before committing funds.",
    },
  ],
} as const;

export const engagementCta = {
  title: "Have a project in mind?",
  body: "Tell us what you are planning. We reply within two working days with next steps and, where we can, an indicative scope and fee.",
} as const;

/** Product partner published at https://www.subkaro.com/ — names and URLs from that site. */
export const productPartner = {
  name: "Subkaro",
  href: "https://www.subkaro.com/",
  tagline: "Software products we build and sell",
  summary: "Parent company for Order Karu, Manage Karo, and Event Karo.",
  image: "/images/partners/subkaro.jpg",
  imageAlt: "Screenshot of the Subkaro homepage",
} as const;

export const partnerProducts = [
  {
    name: "Order Karu",
    href: "https://www.orderkaru.com/",
    tagline: "Automate your restaurant from one screen.",
    summary:
      "Cloud POS, online ordering, kitchen display, inventory, and analytics for cafes, restaurants, and cloud kitchens.",
    image: "/images/partners/order-karu.jpg",
    imageAlt: "Screenshot of the Order Karu homepage",
  },
  {
    name: "Manage Karo",
    href: "https://www.subkaro.com/products/manage-karo",
    tagline: "Run finance, stock, and teams in one place.",
    summary:
      "ERP for growing businesses that need accounts, inventory, HR, and reporting without spreadsheet chaos.",
    image: "/images/partners/manage-karo.jpg",
    imageAlt: "Screenshot of the Manage Karo page on subkaro.com",
  },
  {
    name: "Event Karo",
    href: "https://eventkaro.pk/",
    tagline: "Shaadi se Eid tak.",
    summary:
      "Event venues and services marketplace for celebrations across Lahore, from shaadi nights to iftar gatherings.",
    image: "/images/partners/event-karo.jpg",
    imageAlt: "Screenshot of the Event Karo homepage",
  },
] as const;

export const partnerCards = [productPartner, ...partnerProducts] as const;

/** IT software work. Employer names and personal bio are omitted. */
export const itPractice = {
  techHeading: "Technologies",
  techIntro:
    "These are the languages, frameworks, and cloud platforms used to design, build, and run web applications, APIs, and delivery pipelines — including TypeScript, JavaScript, Python, PHP, React, Next.js, Angular, Node.js, Nest.js, GraphQL, and AWS.",
  industriesHeading: "Industries",
  industriesIntro:
    "Software delivered in the sectors below: marketplaces, core-banking services, live streaming, operational audits, bookings, education, and IT-services platforms. This is the kind of work, not a list of employers or named products.",
  techLogos: [
    { name: "TypeScript", file: "typescript.svg" },
    { name: "JavaScript", file: "javascript.svg", onDark: true },
    { name: "Python", file: "python.svg" },
    { name: "PHP", file: "php.svg" },
    { name: "React", file: "react.svg" },
    { name: "Next.js", file: "nextjs.svg" },
    { name: "Angular", file: "angular.svg" },
    { name: "Redux", file: "redux.svg" },
    { name: "Node.js", file: "nodejs.svg" },
    { name: "Nest.js", file: "nestjs.svg" },
    { name: "Express.js", file: "express.svg" },
    { name: "GraphQL", file: "graphql.svg" },
    { name: "OpenAI API", file: "openai.svg" },
    { name: "MongoDB", file: "mongodb.svg" },
    { name: "MySQL", file: "mysql.svg" },
    { name: "AWS", file: "aws.svg" },
    { name: "Azure", file: "azure.svg" },
    { name: "Docker", file: "docker.svg" },
    { name: "CI/CD", file: "cicd.svg" },
    { name: "Stripe", file: "stripe.svg" },
    { name: "CodeIgniter", file: "codeigniter.svg" },
  ],
  featuredTech: [
    "TypeScript",
    "JavaScript",
    "Python",
    "PHP",
    "React",
    "Next.js",
    "Angular",
    "Node.js",
    "Nest.js",
    "GraphQL",
    "AWS",
    "OpenAI API",
  ],
  industries: [
    {
      name: "Real estate",
      summary:
        "Job marketplaces for field agents, workflow automation for day-to-day operations, natural-language property search, and automated market reports covering pricing, comparables, yields, and ROI.",
      tech: ["TypeScript", "Node.js", "Nest.js", "GraphQL", "Python", "OpenAI API", "AWS"],
      image: "/images/industries/real-estate.jpg",
      imageAlt: "House keys beside a model home on a desk",
    },
    {
      name: "Banking and financial services",
      summary:
        "Large-scale microservices with Angular frontends, connecting new services to existing core-banking data and transactions.",
      tech: ["Node.js", "Microservices", "Angular"],
      image: "/images/industries/banking.jpg",
      imageAlt: "Payment cards used in banking and financial services",
    },
    {
      name: "Live streaming and fan engagement",
      summary:
        "Interactive live events with cloud streaming, real-time chat, and push notifications, plus fan-engagement platforms with client-server architecture.",
      tech: ["AWS IVS", "Node.js"],
      image: "/images/industries/streaming.jpg",
      imageAlt: "Concert crowd under stage lights at a live event",
    },
    {
      name: "Food, hospitality, and entertainment",
      summary:
        "Internal audit software aligned with food-industry compliance, and booking-style APIs that combine venue and hospitality services.",
      tech: ["APIs", "Full-stack"],
      image: "/images/industries/hospitality.jpg",
      imageAlt: "Plated dish served at a restaurant table",
    },
    {
      name: "Education",
      summary:
        "API-driven sites with live lecture streaming and student interaction.",
      tech: ["PHP", "CodeIgniter", "MySQL", "AWS"],
      image: "/images/industries/education.jpg",
      imageAlt: "Students in a classroom watching a lesson on a projector",
    },
    {
      name: "IT services platforms",
      summary:
        "Cloud IT-services work: third-party API integrations, configuration mapping, role-based access control, and payment processing.",
      tech: ["Angular", "Stripe", "REST APIs"],
      image: "/images/industries/it-services.jpg",
      imageAlt: "Network cables in a server rack",
    },
  ],
} as const;

/** Platforms 3P Solutions already implements or sells. Vendor names we are not authorised to show are omitted. */
export const solutionPlatforms = [
  {
    name: "Odoo",
    href: "https://www.odoo.com/",
    icon: "/icons/tech/odoo.svg",
    summary:
      "ERP for accounting, inventory, sales, purchasing, and manufacturing.",
  },
  {
    name: "AWS",
    href: "https://aws.amazon.com/",
    icon: "/icons/tech/aws.svg",
    summary: "Cloud infrastructure for APIs, streaming, and application delivery.",
  },
  {
    name: "Azure",
    href: "https://azure.microsoft.com/",
    icon: "/icons/tech/azure.svg",
    summary: "Cloud hosting and services used alongside custom application work.",
  },
  {
    name: "OpenAI API",
    href: "https://platform.openai.com/",
    icon: "/icons/tech/openai.svg",
    summary: "Language models for search, reports, and product features.",
  },
  {
    name: "Subkaro",
    href: "https://www.subkaro.com/",
    icon: "",
    summary: "Software products we build and sell: Order Karu, Manage Karo, and Event Karo.",
  },
] as const;

export function getStats() {
  return [
    { value: String(yearsInBusiness()), label: "Years in business" },
    { value: "150", label: "Projects completed" },
    { value: "5,000", label: "Happy clients" },
    { value: "30", label: "Renewable projects" },
  ] as const;
}

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

export const projectLines = services.filter(
  (item) => item.kicker === "Engineering",
);

export const faqs = [
  {
    id: "types",
    question: "What types of projects does 3P Solutions undertake?",
    answer:
      "Engineering contracting covers roads and earthworks, buildings and structures, water, drainage and flood protection, and project and site management. Consulting covers financial modelling and feasibility, business plans and JV proposals, tender and procurement support, and regulatory and compliance documentation. IT covers Odoo and Subkaro products.",
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
      "Health, safety and environmental management is part of project and site management. Water, drainage and flood protection includes erosion control and slope protection.",
  },
  {
    id: "contact",
    question: "How can I get in touch for a project consultation?",
    answer:
      "Call +92-323-417 6685 or email info@3psolutions.com.pk to schedule a consultation.",
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
      "Call +92-323-417 6685 or email info@3psolutions.com.pk for assistance.",
  },
] as const;

export const aboutCopy = {
  intro:
    "At 3P Solutions, we are dedicated to delivering high-quality construction services and innovative solutions in solar energy, water management, and waste management. With years of experience based in Lahore, we excel in various sectors, ensuring sustainability and reliability in everything we do.",
  footer:
    "At 3P Solutions, we are dedicated to delivering high-quality construction services and innovative energy solutions, including solar and wind energy projects. Based in Lahore, we are committed to enhancing the infrastructure and sustainability of communities across Pakistan. Contact us today to find out how we can help you.",
  hero:
    "Established in 2008, we aspire to be a trusted partner in construction and infrastructure development, municipal services, information technology, and renewable energy. We deliver integrated, reliable, and value-driven solutions for government, public-sector, and private-sector organizations—pairing technical expertise, professional integrity, and modern technologies to support national progress and community development.",
} as const;

