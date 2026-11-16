# 3P Solutions

Marketing site for **3P Solutions** (also written **3Psolution**), a Lahore-based firm. Copy and contact details follow [3psolutions.com.pk](https://3psolutions.com.pk/).

Practices are grouped as **Engineering** (construction, solar, wind), **Consulting** (water supply, wastewater, solid waste), and **IT** (Odoo, sometimes searched as OODO).

The Contact page publishes the Lahore address, phone, email, and website. There is no enquiry form.

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
| `/projects` | Engineering |
| `/renewables` | Engineering · solar and wind |
| `/municipal-services` | Consulting |
| `/practices` | All practices |
| `/practices/it` | IT · Odoo |
| `/about` | About, values, team |
| `/contact` | Get in touch |
| `/legal-notice` | Legal notice |
| `/privacy` | Privacy policy |

`/practices/engineering` and `/practices/consulting` redirect to projects and municipal services.

Photographs live in `public/images/` (Unsplash, Pexels, and Pixabay). See `public/images/CREDITS.md`. They were not copied from eliteengineering.com.pk, unitenterprises.site, or 3psolutions.com.pk.

Production build is a **static export** (`output: 'export'`). It writes **`out/`**:

```bash
npm run build
```

Upload the **contents of `out/`** to Namecheap `public_html`. See [docs/namecheap-deploy.md](docs/namecheap-deploy.md).

`/practices/engineering` and `/practices/consulting` redirect via `public/.htaccess` (copied into `out/`) and HTML fallbacks under `public/practices/`.
