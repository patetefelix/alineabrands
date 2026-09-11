# Alinea Brands — updated site

A complete static website, ready for your existing GitHub Pages repository. The original Desktop files have not been changed.

## Replace the site files

Upload these files to the root of `patetefelix/alineabrands`, replacing the matching versions:

- `index.html`, `work.html`, `studio.html`, `contact.html`, `project.html`, `404.html`
- `styles.css`, `script.js`, `data.js`
- `alinea-icon.svg`, `alinea-wordmark.svg`, `alinea-arrow.svg`

Keep the existing `images/` directory. The supplied icon and wordmark are unchanged and are now referenced from the root, where the supplied files belong.

The five existing projects currently use your verified images hosted in `patetefelix/portfolio/images`. Both studio portraits use the existing `alineabrands/images` files. No image downloads are required for these to appear.

## Collection order

1. Solferino — in development
2. Costella — self-initiated concept
3. Massalino Trattoria
4. El Paraíso Heladería
5. Casa de Encantos
6. Humboldt Brewery — Obscura
7. Phila Cup Coffee

Costella is explicitly described as fictional, self-initiated work by Félix. Solferino is a proposed direction, not a finished case study. No client outcomes, awards, business registration, or completed future projects have been invented. Placeholder pricing, capacity claims, and the web-development service packages have been removed.

## Upload Costella artwork

The filenames reserved in `data.js` are:

- `images/costella-cover.jpg`
- `images/costella-01.jpg` through `images/costella-09.jpg`

Once all gallery images are uploaded, change Costella's `galleryReady` from `false` to `true`. The cover loads automatically once available, even before the gallery is enabled. While it is unavailable, visitors see a typographic project preview.

These are proposed filenames, not a claim that those files already exist. If your filenames, extensions, or number of images differ, edit `hero` and `gallery` to match them exactly. Case matters on GitHub Pages.

## Finish Solferino

Reserved filenames:

- `images/solferino-cover.jpg`
- `images/solferino-01.jpg` through `images/solferino-06.jpg`

When the project is complete, update its copy to the final direction, upload the artwork, set `galleryReady` to `true`, change `kind` from `upcoming` to `concept`, and change `status` to `Self-initiated concept`. Update `credit` to remove the in-development note. It stays clearly identified as fictional work.

## Add projects through December

Add another object at the start of `PROJECTS` in `data.js`. Array order controls the homepage, work page, and next-project links. Counts and filters update automatically; there is no six-project limit.

Each project uses:

- A unique `slug` for its `project.html?p=...` link
- `name`, `summary`, `intro`, `sector`, `tags`, and `color`
- `kind`: `portfolio`, `concept`, or `upcoming`
- A truthful `status` and optional `credit`
- `imageBase`, `hero`, `gallery`, and `galleryReady`
- `sections`: an array of `{ title, body, items }`, with `body` and `items` optional

Set `imageBase` to `https://patetefelix.github.io/alineabrands/` for the current hosted image folder, or `""` to use a local `images/` folder beside the HTML. Existing project paths can be moved to Alinea by retaining their exact filenames and changing `imageBase`.

## Contact

The existing address `hello@alineabrands.com` is retained. Confirm this inbox works before publishing. The form opens an email draft; it does not submit to a server or claim a message was sent. Visitors can also copy their brief. If changing the inbox, update `STUDIO.email` in `data.js` and the visible email links in the HTML files.

## Included interactions

- Pointer-responsive hero shelf and hover treatments
- Responsive mobile navigation
- Project filters and automatic collection counts
- Expandable services and FAQ
- Full-resolution project image viewer, with Escape and arrow-key controls
- Scroll reveals and reading progress
- Reduced-motion support and a persistent motion toggle

## Checks performed

JavaScript syntax, HTML link targets, project ordering and unique slugs, existing image filenames against GitHub's directory inventory, and live availability of the primary images and both portraits. All six HTML routes served successfully in the local preview. Browser interaction and visual testing have not been performed.


## Scope guide and ambient-motion update

The Studio page includes three interactive starting scopes. The homepage links to each one, and “Discuss this scope” carries the selection into the contact form and email brief.

Edit `SCOPE_GUIDES` in `data.js` to adjust included work, planning ranges, stage descriptions, client inputs, and linked case examples. The current durations are illustrative planning estimates, not previous project measurements or fixed delivery promises:

- Identity: 5–6 weeks; the example schedule shows 5.
- Identity and packaging: 7–10 weeks; the example shows 8.
- Brand world: 9–13 weeks; the example shows 11.

Each example includes one week of review allowance. Confirm real timings in each proposal. No reference-image prices, subscriber benefits, unlimited revisions, or external agency results were adopted as Alinea offers.

The new `alinea-arrow.svg` is used for project browsing, image navigation, and major next-step links. Ordinary actions use text or button styling. Include this SVG with the other root files when uploading.

The beige background uses peach, sage, and lavender washes. The footer uses restrained versions over deep green. Each layer receives its own randomized path, duration, and starting position on page load; the motion does not follow the mouse. Animation pauses in background tabs and respects both the motion toggle and reduced-motion preferences. Existing hero shelf hover interactions remain independent of this background effect.

Validation covers all routes and local links, removal of old arrow characters, correct example-schedule totals, and unchanged project order and existing image references. Browser visual and interaction testing remains outstanding.
