# 3P Solutions

Marketing site for **3P Solutions** (also written **3Psolution**), a Lahore-based firm for construction and renewable energy in Pakistan. Copy and contact details follow [3psolutions.com.pk](https://3psolutions.com.pk/).

Services include construction, solar energy, wind energy, water supply, wastewater treatment, solid waste, municipal services, and Odoo IT (sometimes searched as OODO).

The contact form validates in the browser (empty / error / success). Enquiries are also directed to **info@3psolutions.com.pk**.

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

[http://localhost:4783](http://localhost:4783)

| Route | Page |
| --- | --- |
| `/` | Homepage |
| `/projects` | Projects and key services |
| `/renewables` | Solar, wind, and related work |
| `/municipal-services` | Water, wastewater, waste, municipal |
| `/practices` | All practices |
| `/practices/it` | IT · Odoo |
| `/about` | About, values, team |
| `/contact` | Get in touch |
| `/legal-notice` | Legal notice |
| `/privacy` | Privacy policy |

`/practices/engineering` and `/practices/consulting` redirect to projects and municipal services.

Photographs live in `public/images/` (Unsplash, Pexels, and Pixabay). See `public/images/CREDITS.md`. They were not copied from eliteengineering.com.pk, unitenterprises.site, or 3psolutions.com.pk.

Production-style local run:

```bash
npm run build
npm start
```

`npm start` also uses port 4783.
