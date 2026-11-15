# Alinea Brands — v4

Static site for alineabrands.net. No build step. The `CNAME` file keeps the domain.

## Upload

Replace these files in the repo root:
`index.html`, `work.html`, `project.html`, `studio.html`, `contact.html`, `404.html`, `styles.css`, `script.js`, `README.md`

Add this new folder (keep everything else in `images/` as it is):
`images/covers/` — 12 light `.webp` images used by cards, the home shelf, the index and the portraits.

Also replace `data.js` (it now includes Peckish) and add the 31 `images/peckish-*.webp` files.

The SVG files, `CNAME` and the other existing images are unchanged.

## Editing

- Projects live in `data.js`. Add a new object at the front of `PROJECTS` to publish a project; it appears in the home index and on Work automatically.
- A project's card image is `images/covers/<slug>.webp` (about 1700px wide). If that file is missing, the site falls back to the project's `hero` image, so a cover is optional.
- The four projects on the home shelf are written in `index.html` (`.shelf-item` blocks).
- Concept projects must stay labelled as concepts (`kind: "concept"`).

## Design notes

- Manrope is the only typeface. Green, cream and lime are unchanged.
- Body copy is indented to one shared column (`--indent` in `styles.css`), a nod to the name: an alinea opens a paragraph.
- Motion: one load sequence per page, the home shelf, the pointer preview on the index, drawn rules, the ticker and the background wash. "Motion on/off" in the footer and the system reduced-motion setting turn all of it off.
- The contact form opens an email draft to `felix@alineabrands.net`; nothing is sent in the background.

## Project-specific showcases

A project with `"layout": "<name>"` in `data.js` gets its own case study layout. The layout's HTML lives in `LAYOUTS` in `script.js` and its colours in `styles.css` under `[data-layout="<name>"]`. Peckish is the first: brand red and cream, the interactive Pecking Order, and the menu set as type. Its heat levels, menu and phrases are plain data in the Peckish entry in `data.js`.
