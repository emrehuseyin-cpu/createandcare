# Official European Union Emblem (`public/eu/`)

Per the European Commission's mandatory visibility rules for Erasmus+ projects (2021–2027), the official **"Co-funded by the European Union"** emblem must never be redrawn, recoloured or altered.

## How to add the official emblem file

1. Visit the official European Commission download centre for the EU emblem:
   - https://commission.europa.eu/resources-partners/european-commission-visual-identity_en
   - Or the Erasmus+ / NA beim BIBB publicity guidelines page: https://www.na-bibb.de/service/publikationen-und-vorlagen/logos
2. Download the **"Co-funded by the European Union"** horizontal emblem (PNG or SVG, colour version on light background).
3. Save the file in this folder (`public/eu/`) as `eu-co-funded-en.svg` (or `.png`).
4. In `src/components/Footer.astro`, replace the dashed `[OFFICIAL EU EMBLEM]` placeholder box with:
   ```html
   <img
     src="/eu/eu-co-funded-en.svg"
     alt="Co-funded by the European Union"
     width="220"
     height="48"
   />
   ```
