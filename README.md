# 3P Solutions

Marketing site for **3P Solutions** (also written **3Psolution**), a Pakistani consultancy with three practices:

- **IT** — SAP and Odoo
- **Engineering** — Construction
- **Consulting** — Tax Advisory

This is a complete public website: homepage, practice pages, about, and a contact form. There is no authentication, database, or live mailbox. The contact form validates in the browser and shows empty, error, and success states. Office address, phone, and email are labelled “To be added” until the firm publishes them.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui.

## Run locally

Requires Node.js 20 or newer.

```bash
cd ~/work/3p-solutions
npm install
npm run dev
```

The dev server binds to **port 4783** (not 3000):

[http://127.0.0.1:4783](http://127.0.0.1:4783)

| Route | Page |
| --- | --- |
| `/` | Homepage |
| `/practices` | Practice overview |
| `/practices/it` | SAP and Odoo |
| `/practices/engineering` | Construction |
| `/practices/consulting` | Tax Advisory |
| `/about` | About the firm |
| `/contact` | Contact form |

Production-style local run:

```bash
npm run build
npm start
```

`npm start` also uses port 4783.
