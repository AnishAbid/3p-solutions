# Deploy 3P Solutions on Namecheap (replace WordPress)

This guide is for putting the Next.js marketing site in this repo live at **3psolutions.com.pk**, in place of the current WordPress / Odoo Website Builder site. It does **not** include Namecheap usernames, passwords, API keys, or DNS values — use whatever is already in your Namecheap and cPanel accounts.

This repo is configured for **Option B: static export**. `npm run build` writes HTML, CSS, JS, and images to **`out/`**. Upload the **contents** of `out/` to `public_html`. Do not run the old local preview port **4783** in production; production is **443** (HTTPS).

## What this app actually is

| Item | In this repo |
| --- | --- |
| Framework | Next.js 16 App Router (`next` 16.4.6), **static export** (`output: 'export'`) |
| Node | **20 or newer** to **build** on your computer. The live host does not run Node. |
| Database | None |
| Server API routes | None |
| Contact form | Browser-only validation; success state is local. Copy still points people to `info@3psolutions.com.pk` |
| Images | `next/image` with `images.unoptimized: true` (required for export) |
| Redirects | `/practices/engineering` → `/projects`, `/practices/consulting` → `/municipal-services` via `public/.htaccess` plus static HTML fallbacks under `public/practices/…` |
| Secrets | None required to run the site |

`cacheComponents` and `partialPrefetching` were removed so the export can build. Image optimization and `next.config.ts` `redirects()` are incompatible with `output: 'export'`.

---

## Option B — Namecheap shared hosting (cPanel) — use this

Shared Stellar plans are PHP/Apache. They cannot run `next start`. After `npm run build`, `out/` is a static site Apache can serve.

If 3psolutions.com.pk is on **EasyWP**, that product only runs WordPress. Move the domain to **cPanel shared hosting**, then follow this file. EasyWP cannot host `out/`.

### 1. Backup WordPress before you touch DNS

Do this while the live WP site is still up.

1. In **cPanel** (or EasyWP backup, if that is the product):
   - **Files → Backup** (or Backup Wizard): download a **full backup** if offered.
   - **phpMyAdmin**: export the WordPress database (usually `wp_…`) as SQL.
   - **File Manager** or FTP: zip and download the whole web root (`public_html` or the addon-domain folder). That includes `wp-admin`, `wp-content`, `wp-config.php`, `.htaccess`.
2. Store the zip + SQL somewhere off the server (laptop + a second copy).
3. Optional safety: in File Manager, **rename** `public_html` to `public_html-wp-backup-YYYYMMDD` only when you are ready to cut over, then create a new empty `public_html`. Until you are ready, leave WP in place.

You need `wp-config.php` and the database dump to restore WP later. Do not delete the backup until the new site has been live and checked.

### 2. Build on your computer (not on shared hosting)

Shared cPanel RAM is too small to run `next build` reliably. Build locally (Node 20+):

```bash
cd ~/work/3p-solutions
npm install
npm run build
```

That writes **`out/`** (and `.next/` as a side product). **`out/` is what you upload.**

There are **no** production env vars. You do not need a `.env` file for the current site.

### 3. What to upload to `public_html`

Upload the **contents of `out/`**, not the `out` folder itself, and not `src/`, `node_modules/`, or `.next/`.

After a successful build, `out/` includes at least:

| In `out/` | Purpose |
| --- | --- |
| `.htaccess` | Apache: extensionless URLs + the two practice redirects |
| `index.html` | Homepage `/` |
| `_next/` | JS/CSS from the Next build |
| `images/` | Photographs |
| `about.html`, `contact.html`, `projects.html`, … | Page files Apache should serve for `/about`, `/contact`, `/projects`, … |
| `about/`, `projects/`, … | Next sidecar folders (prefetch `.txt`). `.htaccess` prefers the `.html` file over these directories |
| `practices/engineering/index.html` | Fallback redirect to `/projects` |
| `practices/consulting/index.html` | Fallback redirect to `/municipal-services` |
| `404.html` | Static not-found page (if generated) |

**File Manager**

1. Log in to cPanel → **File Manager** → `public_html` (or the folder for 3psolutions.com.pk if it is an addon domain).
2. Confirm WordPress is backed up (section 1).
3. Delete or move WP files (`index.php`, `wp-admin`, `wp-content`, `xmlrpc.php`, the old `.htaccess`, …).
4. Upload everything **inside** `out/`. Zip `out/` locally, upload the zip, extract in `public_html`, then delete the zip — that avoids File Manager timeouts.
5. Confirm `.htaccess` landed next to `index.html`. If a WordPress `.htaccess` is still there, replace it with the one from `out/`.

**FTP / SFTP**

Same destination. FileZilla or `lftp`: connect with the FTP user from cPanel → **FTP Accounts**. Remote path is usually `/public_html`. Mirror the contents of `out/`.

### 4. `.htaccess` (already in the repo)

`public/.htaccess` is copied into `out/.htaccess` on build. It:

- sets `DirectoryIndex index.html`
- 302s `/practices/engineering` → `/projects`
- 302s `/practices/consulting` → `/municipal-services`
- maps `/projects` → `projects.html` when that file exists

If Apache `mod_rewrite` is off, the HTML files under `out/practices/engineering/` and `out/practices/consulting/` still send the browser to the new URLs.

### 5. Point the domain away from WordPress

In **Namecheap Domain List → Manage → Advanced DNS** (or the DNS the domain actually uses — check **Nameservers** first):

1. If the domain already uses this same cPanel account, you may only need to replace files in `public_html` (section 3). DNS can stay.
2. If WordPress was EasyWP or another IP, set `@` **A** to the cPanel shared IP and `www` **A** or **CNAME** to `@`.
3. Remove records that still point at EasyWP or the old host.
4. Wait for TTL (often 5–30 minutes at Namecheap; up to 48 hours in caches).

### 6. SSL

cPanel **SSL/TLS Status** → Run AutoSSL, or install a Namecheap certificate on 3psolutions.com.pk. Force HTTPS in **Domains** or with an extra rewrite in `.htaccess`. This app uses relative `/images/…` paths, so mixed content should not appear.

### 7. Environment

None. Do not invent `API_KEY` or `DATABASE_URL`. `allowedDevOrigins` is local-only.

---

## Option A — Node on a VPS (optional)

Only if you later drop `output: 'export'` and restore a Node server. Shared cPanel cannot do this. A VPS would run `npm run build` and `next start` behind Nginx on 80/443 — not port 4783.

---

## Common Namecheap shared-hosting limits

| Limit | Effect on this site |
| --- | --- |
| No public custom ports | Do not use 4783. Apache serves `out/` on 80/443 |
| No long-lived Node on cheap Stellar | Static `out/` is the supported path |
| RAM / CPU | Do not run `next build` on the shared account |
| EasyWP | WordPress only — not this repo |
| Inodes / upload size | Zip `out/` if File Manager times out |
| Email | The form does not send mail; cPanel email for `info@3psolutions.com.pk` is separate |

---

## Cutover checklist

1. WordPress files + database downloaded and stored off-server.
2. `npm run build` succeeded locally; `out/index.html` and `out/.htaccess` exist.
3. Contents of `out/` uploaded to `public_html`.
4. DNS (if it needed changing) and AutoSSL done.
5. Hit these URLs (expect the Next site, not the old WP theme):

   - `https://3psolutions.com.pk/`
   - `https://3psolutions.com.pk/projects`
   - `https://3psolutions.com.pk/renewables`
   - `https://3psolutions.com.pk/municipal-services`
   - `https://3psolutions.com.pk/practices/it`
   - `https://3psolutions.com.pk/about`
   - `https://3psolutions.com.pk/contact`
   - `https://3psolutions.com.pk/practices/engineering` → `/projects`
   - `https://3psolutions.com.pk/practices/consulting` → `/municipal-services`

6. Contact form: empty / validation error / success still work in the browser. Query strings such as `/contact?practice=odoo` are read on the client.
7. Keep the WP backup until you are sure you will not roll back.
