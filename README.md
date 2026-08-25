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

## Design tokens — v2, re-themed to the Himon reference (Aug 2026)
The site was re-themed at your request to match himon.framer.website's layout system: white canvas, bold black grotesque type (one family, varied weight, often uppercase), a single lime accent, numbered interactive lists, and a giant reversed wordmark closing out the footer. This **replaces** the earlier pine/cream/tan version.

- **Colors:** white `#FFFFFF`, near-black ink `#141414`, light gray card `#F3F3F1`, and a lime accent `#D7FF3F`. The lime is a real departure from Alinea's original pine-green brand color — that's intentional, per this direction, not an oversight.
- **Fonts:** one family throughout — **Archivo**, at varied weights (400 body, 800–900 for bold uppercase headlines) — matching Himon's own single-grotesque-family approach. Paired with **DM Mono** for small labels and numbers. Founders Grotesk (your real paid brand font) would slot in as a direct replacement for Archivo if you have a license — same job, same weight range.
- **Signature move:** the giant outlined "Alinea" wordmark spanning the footer, carried over directly from Himon's closing "HIMON" treatment — built in pure CSS (`-webkit-text-stroke`), no image needed.
- **New interactive piece:** the numbered 01–04 service list on the homepage now actually works — hover or click a row and the detail panel (image, description, CTA) updates. Numbers here are index tabs, not a claim that the services happen in that order (the 3-phase process on the Studio page is the one genuinely sequential list, and stays numbered for that reason).
- **Contact page now has a real form** (First/Last Name, Email, Location, Phone, Message) matching Himon's "Talk with us" layout. Since it's a static site with no backend, submitting opens the visitor's email client with the message pre-filled — genuinely functional without needing a server.

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
