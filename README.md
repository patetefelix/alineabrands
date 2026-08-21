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
- **Colors:** pine `#1B3E3A`, cream `#EBE4DC`, tan `#B9AC9F` — taken directly from your existing Webflow site, not invented. `--black` (`#0F1D19`) is new, a deeper near-black used for the mission band and footer so those sections read as a real dark mode rather than a slightly-darker tan. `--accent` (`#C7D66B`, a muted chartreuse) is the one new color in the system — see "Signature move" below.
- **Fonts:** Founders Grotesk and Signifier (your real brand fonts) are paid type not available via Google Fonts. I substituted **Archivo** (body/UI) and **Fraunces** (display, weight 300 to match Signifier's light weight) as the closest free equivalents in the same grotesque-sans + editorial-serif pairing. If you own licenses for the real fonts, swap the `@import` in `styles.css` and the `--font-display`/`--font-body` variables.
- **Signature moves:**
  - The italic Fraunces ticker under the hero, playing on "Alinea" meaning "to align" — a line of capabilities set moving in a straight, aligned row.
  - **Services index** on the homepage — a real index of the four disciplines (`data.js` → `SERVICES`, now with an `img` per service). Hover, focus, or tap a row and its number, copy, and a preview image come forward together — the site's answer to the reference sites you sent (himon.framer.website, ozero.design, etc.), which lean on this kind of index-list interaction, without borrowing their dark/lime palette wholesale.
  - A soft chartreuse cursor dot on desktop (`#cursor-dot`, built in `script.js`) that grows slightly over links and buttons. It's the only place the new accent color runs loose — everywhere else it's used sparingly, as a dot before eyebrows, an active-state underline, a hover color. Respects `prefers-reduced-motion` and is skipped entirely on touch devices.
  - A giant, near-invisible "Alinea" wordmark set into the footer of every page (`.footer-word`) — a quiet nod to the big-type footers on several of your reference sites (Welcome, Himon) without copying their scale or contrast.
  - Nav now has a real mobile menu (hamburger → dropdown) and a subtle scroll-shrink instead of just disappearing at 760px.

## Before this redesign pass
This was already a real, working 5-page site — this pass kept the palette, fonts, content structure, and all 24 projects untouched, and focused on: a bolder homepage hero, the interactive services index, the cursor accent, a working mobile nav, and a heavier footer treatment. See `styles.css` and `script.js` inline comments for the reasoning behind each addition.

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
- The four service preview images (`SERVICES[i].img` in `data.js`) currently reuse four existing project heroes (Biona Coffee, Denali, Casa de Encantos, Bark 2 Earth) as stand-ins — once you have real process/detail shots per discipline, swap those four paths in.
