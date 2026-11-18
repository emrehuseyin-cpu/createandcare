# CREATE & CARE — Official Website (`createandcare.eu`)

Official website for **CREATE & CARE – Creative Adult Education for Mental Well-Being and Inclusion**, an Erasmus+ small-scale partnership in adult education (KA210-ADU), running **September 2026 – February 2028**.

- **Coordinator:** Integrational e.V. (Bonn, Germany)
- **Partner:** Associação Ramifica (Funchal, Madeira, Portugal)
- **Partner:** Modern Gelişim Derneği (Eskişehir, Türkiye)

---

## Architecture & Longevity (2026 – 2033+)

This project is purposefully built with boring, stable, zero-maintenance static tools so that non-developer staff at the three partner NGOs can maintain it through at least **February 2033**:

- **Static Site Generator:** [Astro 5](https://astro.build/) (`output: 'static'`), compiling pure HTML/CSS to `dist/`.
- **Styling:** Plain CSS with custom properties (`src/styles/global.css`) in the project's **"Pastel Retro"** visual identity. No Tailwind, no UI framework.
- **GDPR & Privacy:**
  - Self-hosted **Caprasimo** and **Figtree** (`latin` + `latin-ext` subsets in `public/fonts/`) — zero requests to Google Fonts servers.
  - Zero cookies, zero analytics.
  - Two-click privacy shield for the Artsteps 3D VR gallery (`src/pages/gallery/index.astro`).
- **Photo Consent Guardrail:** Enforced automatically at build time in `src/content/config.ts`. Any news post or event that attaches an `image` **must** declare `consent: true` in frontmatter, or the build fails and refuses to deploy.

---

## Key Documentation

- **[EDITING.md](./EDITING.md)** — Plain-language guide for partner staff on adding news posts, uploading consented photos, updating the top notice bar, events, and downloads directly in the GitHub web editor.
- **[DEPLOY.md](./DEPLOY.md)** — Step-by-step non-developer guide for connecting GitHub Actions to your HostGator cPanel account via FTPS.
- **[TODO.md](./TODO.md)** — Complete checklist of `[PLACEHOLDER]` tags to fill in as project details (project number, venues, emails, official EU emblem, legal Impressum details) are finalised.

---

## Local Development (Optional)

Partner editors do **not** need local setup (see `EDITING.md` for editing in the browser). If a developer wants to run the site locally:

```bash
npm install
npm run dev      # Starts local dev server at http://localhost:4321
npm run build    # Builds static output to ./dist/
npm run preview  # Previews the built ./dist/ folder locally
```
