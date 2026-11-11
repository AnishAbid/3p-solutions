# Deploy 3P Solutions on Namecheap (replace WordPress)

This guide is for putting the Next.js marketing site in this repo live at **3psolutions.com.pk**, in place of the current WordPress / Odoo Website Builder site. It does **not** include Namecheap usernames, passwords, API keys, or DNS values — use whatever is already in your Namecheap and cPanel accounts.

Local preview used port **4783**. Production should use **443** (HTTPS), not 4783.

## What this app actually is

| Item | In this repo |
| --- | --- |
| Framework | Next.js 16 App Router (`next` 16.4.6) |
| Node | **20 or newer** to build |
| Database | None |
| Server API routes | None |
| Contact form | Browser-only validation; success state is local. Copy still points people to `info@3psolutions.com.pk` |
| Images | `next/image` from files in `public/images/` |
| Redirects | `/practices/engineering` → `/projects`, `/practices/consulting` → `/municipal-services` (in `next.config.ts`) |
| Extra Next flags | `cacheComponents` and `partialPrefetching` in `next.config.ts` |
| Secrets | None required to run the site |

`npm run build` then `npm start` is the production Node path. That is **not** a folder of HTML files you can drop into `public_html` unchanged.

## Honest hosting choice (read this first)

**Do not set `output: 'export'` in `next.config.ts` on the current code.** A static export would fight three things already in the project:

1. **`redirects()` in `next.config.ts`** — Next.js does not support `redirects` together with `output: 'export'` (the build fails).
2. **`next/image`** — static export needs `images: { unoptimized: true }` or a custom loader, or the build fails.
3. **`cacheComponents` / `partialPrefetching`** — these are server/runtime features. They are not a static HTML export.

Those were left as they are so `/`, `/projects`, `/practices/it`, and the rest keep working.

Pick one:

### Option A — Node host (matches this repo, recommended)

Run `next start` on a machine that can keep a Node process alive:

- Namecheap **VPS** (or Dedicated), **or**
- Another Node host (Railway, Render, Fly, Vercel, a small VPS elsewhere) with the domain’s DNS pointed at it.

This is the only option that uses the repo **as committed**, with image optimization and the two redirects.

### Option B — Namecheap shared hosting (cPanel + Apache)

Shared Stellar plans are PHP/Apache. They do **not** run `next start` as a public website on an arbitrary port.

You would have to **change the app later** (not done in this commit) to a static export, then upload the `out/` folder. See [Static export later](#static-export-later-only-if-you-choose-option-b).

Some **Stellar Business** accounts show **Setup Node.js App** in cPanel (Phusion Passenger). That is a different, limited Node. It is a poor fit for Next 16 (`cacheComponents`, image optimizer, no public custom ports). Prefer a VPS if you want Node on Namecheap.

### Option C — EasyWP / managed WordPress

If 3psolutions.com.pk is on **EasyWP**, that product only runs WordPress. You cannot upload this Next app there. Move the domain to **cPanel shared hosting** (static, Option B) or a **VPS** (Option A), then follow the matching section.

---

## 1. Backup WordPress before you touch DNS

Do this while the live WP site is still up.

1. In **cPanel** (or EasyWP backup, if that is the product):
   - **Files → Backup** (or Backup Wizard): download a **full backup** if offered.
   - **phpMyAdmin**: export the WordPress database (usually `wp_…`) as SQL.
   - **File Manager** or FTP: zip and download the whole web root (`public_html` or the addon-domain folder). That includes `wp-admin`, `wp-content`, `wp-config.php`, `.htaccess`.
2. Store the zip + SQL somewhere off the server (laptop + a second copy).
3. Optional safety: in File Manager, **rename** `public_html` to `public_html-wp-backup-YYYYMMDD` only when you are ready to cut over, then create a new empty `public_html`. Until DNS/hosting is ready, leave WP in place.

You need `wp-config.php` and the database dump to restore WP later. Do not delete the backup until the new site has been live and checked.

---

## 2. Build on your computer (not on shared hosting)

Shared cPanel RAM is too small to run `next build` reliably. Build locally (Node 20+):

```bash
cd ~/work/3p-solutions
npm install
npm run build
```

That writes `.next/`. It is **not** what you upload to `public_html`.

There are **no** production env vars in this repo. You do not need a `.env` file for the current site. If you add a real form backend later, keep secrets in the host’s panel — never commit them, and never paste them into this guide.

---

## 3. Option A — Node on a Namecheap VPS (or any Node host)

This is the path that matches `package.json` (`next build` + `next start`).

### App process

On the VPS (Ubuntu is typical):

```bash
# Node 20+ via nvm or NodeSource, then:
git clone <this-github-repo> /var/www/3p-solutions
cd /var/www/3p-solutions
npm ci
npm run build
```

Run with a process manager (systemd or PM2). Bind to localhost and put Nginx/Caddy in front on 80/443. Example:

```bash
npx next start --hostname 127.0.0.1 --port 3000
```

Do **not** expose port 4783 on the internet. That port was only for local preview.

Point Nginx `server_name 3psolutions.com.pk www.3psolutions.com.pk` to `http://127.0.0.1:3000`. Use Let’s Encrypt (`certbot`) or Namecheap SSL on that vhost.

### Domain: point away from WordPress

In **Namecheap Domain List → Manage → Advanced DNS** (or the DNS the domain actually uses — check **Nameservers** first):

1. Note the current **A record** (WordPress/EasyWP/cPanel IP).
2. When the VPS is serving the Next app on 80/443, set:
   - `@` **A** → VPS IPv4
   - `www` **A** or **CNAME** → `@` or the VPS
3. Remove or update records that still point at EasyWP, SiteLock, or the old cPanel shared IP.
4. Wait for TTL (often 5–30 minutes at Namecheap; up to 48 hours in caches).

Keep the old hosting account until you have confirmed HTTPS and every route below.

### Namecheap “Setup Node.js App” on shared (only if you insist)

If cPanel shows **Setup Node.js App**:

- Application root: the repo directory (not `public_html` WordPress files).
- Application URL: the domain.
- Application startup file: Next does not ship a Passenger `app.js`. People sometimes add a tiny `server.js` that `import('next')` — that is extra code, not in this repo, and memory limits often kill it.
- Node version: pick **20** if listed; 16/18 may fail this project.

If the selector is missing, or the app 502s, use a VPS or static export (Option B). Do not fight shared Passenger for this site.

---

## 4. Option B — Static files in cPanel (File Manager / FTP)

Use this only after you (or a later change) produce a static `out/` directory. **This commit does not enable `output: 'export'`.**

### If you later make a static export

You would need a **separate** config change, then `npm run build`, which emits `out/`. Typical extra config (do not apply blindly on this branch):

- `output: 'export'`
- `images: { unoptimized: true }`
- Remove `redirects()`, `cacheComponents`, and `partialPrefetching`
- Recreate the two practice redirects in `.htaccess` (see below)

Until that exists, there is nothing valid to upload to `public_html` except WordPress.

### Upload (once `out/` exists)

**File Manager**

1. Log in to cPanel → **File Manager** → `public_html` (or the folder for 3psolutions.com.pk if it is an addon domain).
2. Confirm WordPress is backed up (section 1).
3. Delete or move WP files (`index.php`, `wp-admin`, `wp-content`, `xmlrpc.php`, …).
4. Upload the **contents** of `out/` (not the `out` folder itself): `index.html`, `_next/`, `images/`, `projects/`, etc.
5. Add `.htaccess` in `public_html` (below).

**FTP / SFTP**

Same destination. FileZilla or `lftp`: connect with the FTP user from cPanel → **FTP Accounts**. Remote path is usually `/public_html`. Mirror the contents of `out/`.

### `.htaccess` for exported App Router folders

Apache needs this so `/projects` serves `/projects/index.html`, and so the old practice URLs still move:

```apache
DirectoryIndex index.html

RewriteEngine On

# Existing Next redirects (today these live in next.config.ts)
RewriteRule ^practices/engineering/?$ /projects [R=302,L]
RewriteRule ^practices/consulting/?$ /municipal-services [R=302,L]

# Serve extensionless URLs
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+)$ $1.html [L]
```

Place it next to `index.html`. If WordPress’s old `.htaccess` is still there, replace it; the WP permalinks block will break a static site.

---

## 5. SSL

- **VPS:** Certbot or the SSL you bought at Namecheap, installed on Nginx.
- **cPanel shared:** **SSL/TLS Status** → Run AutoSSL (Let’s Encrypt), or **SSL/TLS** → Install a Namecheap PositiveSSL certificate on 3psolutions.com.pk.
- Force HTTPS: in cPanel **Domains** / **Force HTTPS Redirect**, or an `.htaccess` rewrite to `https://`.

After cutover, open `https://3psolutions.com.pk/` and check the padlock. Mixed content should be none — this app uses relative `/images/…` paths.

---

## 6. Environment

Current production needs **no env file**. Do not create dummy `API_KEY` or database URLs.

Later, if a real contact backend is added, use the host’s secret store or cPanel environment fields. Never put secrets in `next.config.ts` or in this markdown file.

`allowedDevOrigins` in `next.config.ts` is **local-only**. It does not need to list 3psolutions.com.pk.

---

## 7. Common Namecheap shared-hosting limits vs Next.js

| Limit | Effect on this site |
| --- | --- |
| No public custom ports | Port 4783 / `next start` is not how a shared site is reached |
| No long-lived Node on cheap Stellar | `next start` dies or is unreachable |
| Passenger Node (if present) | Often old Node, low RAM, awkward startup file |
| RAM / CPU | Do not run `next build` on the shared account |
| `.htaccess` only | Runtime Next redirects will not exist unless you export + Apache rules |
| `next/image` optimizer | Needs the Node server; static hosts need `unoptimized` |
| EasyWP | WordPress only — not this repo |
| Inodes / upload size | `out/_next` plus `public/images` is fine; zip upload if File Manager times out |
| Email | Site does not send mail today; cPanel email for `info@3psolutions.com.pk` is separate from this app |

---

## 8. Cutover checklist

1. WordPress files + database downloaded and stored off-server.
2. New host serving the Next site on HTTPS (VPS Node **or** static `out/` + `.htaccess`).
3. DNS A/CNAME for `@` and `www` updated; nameservers actually used by the domain checked.
4. AutoSSL / Certbot issued for 3psolutions.com.pk.
5. Hit these URLs (expect 200, not the old WP theme):

   - `https://3psolutions.com.pk/`
   - `https://3psolutions.com.pk/projects`
   - `https://3psolutions.com.pk/renewables`
   - `https://3psolutions.com.pk/municipal-services`
   - `https://3psolutions.com.pk/practices/it`
   - `https://3psolutions.com.pk/about`
   - `https://3psolutions.com.pk/contact`
   - `https://3psolutions.com.pk/practices/engineering` → `/projects`
   - `https://3psolutions.com.pk/practices/consulting` → `/municipal-services`

6. Contact form: empty / validation error / success still work in the browser. Submissions are **not** stored on the server until you add a backend; the published address remains `info@3psolutions.com.pk`.
7. Keep the WP backup until you are sure you will not roll back.

## Static export later (only if you choose Option B)

Not enabled in this repository. If you add it in a future change, the build should produce `out/`, you upload **that** to `public_html`, and you must also:

- turn **off** image optimization,
- move the two redirects into `.htaccess`,
- drop `cacheComponents` / `partialPrefetching`,
- re-test every route above, especially `/contact?practice=odoo` (the form reads the query on the client; that part can stay).

Until then, **Option A (Node on a VPS)** is the deploy that matches the code on `main`.
