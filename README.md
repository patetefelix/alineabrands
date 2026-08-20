# Alinea — brand & packaging studio site

A real 5-page static site (no build step) — publish exactly like the felix-portfolio repo: push these files to a GitHub Pages repo, or drag-and-drop to any static host.

## Pages
- `index.html` — Home: hero, featured project, capability ticker, stats, services, work preview, mission statement, testimonial, client marquee, CTA
- `work.html` — Full project grid with working sector filters (Food & Drink, Hospitality, Pets & Wellness, Retail, Corporate, Wellness, Fitness, Culture, Spirits)
- `studio.html` — Team, network of partners, 3-phase process, FAQ
- `contact.html` — Email, availability, starting scope
- `project.html?p=<slug>` — Dynamic case-study template; every project links here instead of needing its own static file

## Structure
```
data.js     → all project/team/FAQ/testimonial content — edit here, not in the HTML
script.js   → renders grids, ticker, marquee, FAQ accordion, filters, project page
styles.css  → design tokens + every component style
*.html      → structural shell only; content is injected by script.js + data.js
```

## Design tokens — pulled from Alinea's real brand
- **Colors:** pine `#1B3E3A`, cream `#EBE4DC`, tan `#B9AC9F`, charcoal `#282725` — taken directly from your existing Webflow site, not invented.
- **Fonts:** Founders Grotesk and Signifier (your real brand fonts) are paid type not available via Google Fonts. I substituted **Archivo** (body/UI) and **Fraunces** (display, weight 300 to match Signifier's light weight) as the closest free equivalents in the same grotesque-sans + editorial-serif pairing. If you own licenses for the real fonts, swap the `@import` in `styles.css` and the `--font-display`/`--font-body` variables.
- **Signature move:** the italic Fraunces ticker under the hero, playing on "Alinea" meaning "to align" — a line of capabilities set moving in a straight, aligned row.

## Things I deliberately did NOT invent
- **Team photos on the Studio page are placeholders**, not stock photos assigned to Luicelis/Diego/Paola's real names — your source site had unfilled "Nombre" (Name) slots, and I didn't want to misrepresent stock photography as real team members. Swap in real photos, titles, and any social links when ready.
- **Dropped "Chat-GPT" and "Midjourney" from the "network of partners" list** — they were listed with LinkedIn buttons on your source site, which reads like an unedited placeholder row rather than intentional content. Kept Wildalys Villegas (Web Developer), who looks like a real, confirmed partner. Add back if that was actually intentional.
- **Fixed a labeling bug from the source site**: every project card there was tagged "Casa De Encantos, Coliving Hotel" regardless of what was pictured (a CMS default that never got swapped per-project). I re-attributed each visual to its likely real project instead — see below.
- **Instagram and LinkedIn footer links are `#` placeholders** — only Behance (`alineabrands`) was a confirmed real link.

## New projects added from your screenshots (not previously documented)
Your featured-work screenshots showed several projects I hadn't seen before. I added them with honest, general copy (single image, no case detail available):
- **Casa de Encantos** — re-attributed to the Valerian/Passionflower/Lemonbalm apothecary-style tea packaging (fits a tea house much better than the generic label suggested)
- **Humboldt Brewery — Obscura** — a Vienna-style craft lager label
- **Dreams by Sara el Kadi** — jewelry/accessories hang-tag branding
- **Emily Bardaji** — a personal brand wordmark + art direction
- **Pawty Animals** — enriched with the real "Jackson Tail" plush toy name spotted in your screenshot

## Before this goes live
- Swap in real photography — every `images/*.jpg` path is a placeholder following the naming convention; run `grep -oP 'images/[a-zA-Z0-9_-]+\.jpg' data.js | sort -u` to see the full list.
- Confirm `hello@alineabrands.com` is still the right inbox (pulled from your nav screenshot).
- Fill in the Studio page team section (see above).
- The Work page filter uses "sector" tags I assigned per project based on the industry — worth a pass to confirm they're right, especially for the newly-added projects.
