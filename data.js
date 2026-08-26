/* ============================================================
   ALINEA — shared content
   Loaded by every page. Edit here, not in the HTML.
   ============================================================ */

const SERVICES = [
  { title: "Brand Strategy", desc: "Positioning, naming, and workshops that find what makes a brand authentically itself before a single pixel gets designed.", img: "images/b-bionacoffee.jpg", cta: "See strategy work" },
  { title: "Visual Identity", desc: "Logo systems, typography, and guidelines built to hold up across packaging, web, and everything in between.", img: "images/b-denali.jpg", cta: "See identity work" },
  { title: "Packaging Design", desc: "Shelf-ready packaging systems designed to turn a glance into a sale, for single SKUs or full product lines.", img: "images/b-casadeencantos.jpg", cta: "See packaging work" },
  { title: "Web Design", desc: "Websites that carry the brand's voice from the homepage all the way through checkout.", img: "images/b-bark2earth.jpg", cta: "See web work" }
];

/* ============================================================
   FEATURES — 4 cards, index.html. Custom marks, not stock icons:
   a registration mark, a pack fold, a swatch stack, a slot dot-grid.
   ============================================================ */
const FEATURES = [
  {
    variant: "accent",
    title: "One team, start to finish",
    desc: "The person who designs your logo is the same person who designs your packaging and your site — nothing gets lost handing off between departments.",
    icon: `<svg class="feature-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="13" stroke="currentColor" stroke-width="1.4"/><circle cx="20" cy="20" r="2.6" fill="currentColor"/><path d="M20 3v9M20 28v9M3 20h9M28 20h9" stroke="currentColor" stroke-width="1.4"/></svg>`
  },
  {
    variant: "gray",
    title: "Built for shelf and screen",
    desc: "Packaging gets designed knowing exactly how it'll photograph for the site, and the site gets designed knowing exactly how the product looks in hand.",
    icon: `<svg class="feature-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 13.5 20 7l14 6.5-14 6.5-14-6.5Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M6 13.5V27L20 33.5M34 13.5V27L20 33.5M20 20v13.5" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`
  },
  {
    variant: "dark",
    title: "Real files, ready to print",
    desc: "Deliverables come as production-ready files your co-packer or printer can actually use — not just a pretty PDF for a pitch deck.",
    icon: `<svg class="feature-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="14" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.4"/><rect x="17" y="10" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.4"/></svg>`
  },
  {
    variant: "gray",
    title: "Two slots a month",
    desc: "We take on two projects at a time, on purpose — so every client gets real attention instead of a rotation of account managers.",
    icon: `<svg class="feature-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="3" fill="currentColor"/><circle cx="20" cy="12" r="3" fill="currentColor"/><circle cx="31" cy="12" r="3" stroke="currentColor" stroke-width="1.4"/><circle cx="9" cy="26" r="3" stroke="currentColor" stroke-width="1.4"/><circle cx="20" cy="26" r="3" stroke="currentColor" stroke-width="1.4"/><circle cx="31" cy="26" r="3" stroke="currentColor" stroke-width="1.4"/></svg>`
  }
];

const PROCESS = [
  {
    phase: "01", title: "Discovery & Positioning",
    desc: "Part brand therapy, part creative catalyst — we find what makes a brand authentically itself through research, interviews, and workshops, and forge a strategic foundation to build on.",
    items: ["Research", "Brand Audit", "Brand Workshop", "Competitor Audit", "Brand Positioning"]
  },
  {
    phase: "02", title: "Brand Building",
    desc: "Things start to take form as we imagine the possibilities of who the brand will be — blending verbal and visual into a full identity system, refined into real brand guidelines.",
    items: ["Naming", "Logo", "Visual Identity", "Verbal Identity", "Brand Guidelines", "Voice & Tone Guidelines"]
  },
  {
    phase: "03", title: "Brand Launch",
    desc: "It all comes together here — the brand gets applied to real assets so it can go out into the world. Deliverables vary by project, but often include the following.",
    items: ["Website Design", "Art Direction", "Photography", "Illustration", "Packaging", "Social Assets", "Pitch Deck", "Sales Collateral"]
  }
];

const FAQ = [
  { q: "How many slots are available?", a: "2 slots available per month — we work hands-on with a small number of projects at a time rather than running a volume studio." },
  { q: "How does payment work?", a: "Because of the project minimum, we request full payment upfront. Once it's received, we book your slot and lock in the timeline." },
  { q: "What kind of clients do you take on?", a: "Send a link to your product, website, or Figma file. If we think it's a good match, we'll schedule a call to learn more before quoting." },
  { q: "What does the review process look like?", a: "A kickoff call, then a structured run of review calls across the engagement. Throughout the project, we stay in touch over Slack and comment directly in Figma." },
  { q: "What's the cost for a complete brand identity?", a: "It depends on scope and deadline — a full identity starts around $4,800, and a smaller logo-only sprint starts at $1,800. Get in touch with a brief and we'll send a real quote." }
];

/* Client / partner names for the logo marquee — brand & packaging
   clients only (this is Alinea's studio site, not the personal
   UI/UX portfolio, so the roster here is scoped to that work). */
const CLIENTS = [
  "Denali Leather Goods", "Bark 2 Earth", "Biona Coffee", "Emraw", "Garment Decor",
  "Klassen Farm Products", "Casa de Encantos", "Humboldt Brewery", "Massalino Bakery",
  "Brüssel", "Oggi Pizza", "Arépale", "Disfruta", "Casa Santafé", "Bon Pops",
  "Cuida tu Mente", "Sunset Coffee", "Phila Cup Coffee", "El Paraíso Heladería",
  "Pawty Animals", "Fryefit", "Dreams by Sara el Kadi", "Emily Bardaji"
];

/* ============================================================
   PRICING
   Every figure is a starting-point placeholder, built from the
   scope patterns in Félix's own reference pricing decks (tiered
   packages, clear inclusions, no surprise line items) — swap in
   real numbers before this goes live.
   ============================================================ */
const PRICING = [
  {
    name: "Identity Sprint",
    price: "From $1,800",
    featured: false,
    items: [
      "Discovery questionnaire + kickoff call",
      "Moodboard & 2 initial logo directions",
      "1 round of revisions",
      "Primary logo, submark, color palette",
      "Type pairing (2 typefaces)",
      "Mini brand guide (PDF)",
      "Print & web-ready files"
    ]
  },
  {
    name: "Full Identity + Packaging",
    price: "From $4,800",
    featured: true,
    items: [
      "Everything in Identity Sprint",
      "Competitor & shelf audit",
      "3 initial concepts, 2 rounds of revisions",
      "Full brand guidelines",
      "Packaging — up to 3 SKUs",
      "5 social/digital templates",
      "Print-ready files for co-packers",
      "Async support through the project"
    ]
  },
  {
    name: "Brand + Web",
    price: "From $9,500",
    featured: false,
    items: [
      "Everything in Full Identity + Packaging",
      "Custom website design (up to 6 pages)",
      "Responsive, CMS-editable build",
      "Email & social launch kit",
      "Content upload + QA before launch",
      "30 days of post-launch support"
    ]
  }
];

/* ============================================================
   COMPARISON — "not a freelancer, not a big agency"
   ============================================================ */
const COMPARISON = {
  columns: [
    { label: "Solo Freelancer", values: ["Yes", "No", "Yes", "No", "Depends", "Fast, capacity-limited", "Low"] },
    { label: "Alinea", values: ["Yes", "Yes", "Yes", "Yes", "Yes", "2–6 weeks per phase", "Low"] },
    { label: "Big Agency", values: ["Yes", "Yes", "No", "Yes", "No", "8–16+ weeks", "High"] }
  ],
  rows: [
    "Dedicated creative direction",
    "Brand + packaging + web, one team",
    "Direct access to who's doing the work",
    "Backup if one person is out",
    "Fixed-scope, no-surprise pricing",
    "Typical timeline",
    "Overhead you're paying for"
  ]
};

/* ============================================================
   TIMELINE — typical shape of a full Brand + Web engagement,
   shown as a month-by-month chart on the Studio page. Modeled on
   Félix's own reference schedule (discovery → design → dev,
   with logo animation running alongside development, then QA
   and a launch window with a feedback buffer). Smaller-scope
   projects (a logo, a packaging line) move in weeks, not months —
   see the pricing tiers for those.
   ============================================================ */
const TIMELINE_COLUMNS = ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"];
const TIMELINE = [
  { label: "Discovery & Strategy", start: 1, span: 1 },
  { label: "Design",               start: 2, span: 1 },
  { label: "Development",          start: 3, span: 2 },
  { label: "Logo Animation",       start: 3, span: 1 },
  { label: "Content Upload & QA",  start: 5, span: 1 },
  { label: "Launch & Training",    start: 6, span: 1 },
  { label: "Feedback buffer",      start: 6, span: 1, optional: true }
];

/* ============================================================
   POSITIONING — the studio's own statement, one sentence.
   ============================================================ */
const POSITIONING = {
  audience: "CPG founders launching or rebuilding a product",
  category: "brand & packaging studio",
  offer: "identity systems built to hold up on shelf and on screen",
  belief: "a brand only works once every piece of it is aligned — name, mark, pack, and page, all pointed the same direction"
};

/* ============================================================
   SCOPE_STAGES — what's actually included at each stage of a
   project, itemized. Built from Félix's own scoping template.
   ============================================================ */
const SCOPE_STAGES = [
  {
    name: "Discovery", required: true,
    items: ["Initial meeting", "Findings deck review", "1 round of revisions"]
  },
  {
    name: "Logo, Type & Color", required: false,
    items: [
      "Moodboard and ideation proof",
      "Initial proof: 2 unique concepts + application examples across core use cases",
      "2 rounds of revisions on the chosen concept",
      "Final logo saved for print and web",
      "Typography and color proof based on the final logo, 1 round of revisions"
    ]
  },
  {
    name: "Packaging", required: false,
    items: [
      "Mood board and ideation proof",
      "Initial proof across primary SKUs",
      "2 rounds of revisions to refine",
      "Print-ready files for co-packers and manufacturers"
    ]
  },
  {
    name: "Messaging", required: false,
    items: [
      "Inspiration and ideation proof",
      "2 potential brand voices, with vocabulary and sample copy for home page, product description, and onboarding",
      "2 rounds of revisions on tone",
      "Messaging applied across website, media kit, and social"
    ]
  },
  {
    name: "Web", required: false,
    items: [
      "Initial proof of 4 key pages (home, product, about, contact)",
      "2 rounds of revisions on style",
      "Responsive build across desktop and mobile",
      "Content upload and QA before launch"
    ]
  },
  {
    name: "Print Collateral", required: false,
    items: [
      "Mood board and ideation proof",
      "Business cards and sales brochure",
      "2 rounds of revisions",
      "Applied across media kit, direct mail, and one conference/booth graphic"
    ]
  }
];

/* ============================================================
   ONBOARDING — how a project actually starts, step by step.
   ============================================================ */
const ONBOARDING = [
  { title: "Inquiry", desc: "You send a brief, a link, or just a rough idea." },
  { title: "Vetting call", desc: "A short call to see if it's a real fit, both ways." },
  { title: "Proposal", desc: "A scoped proposal with real pricing, not a range." },
  { title: "Agreement + deposit", desc: "Signed contract, first invoice, slot booked." },
  { title: "Discovery call", desc: "We go deep on the brand before any pixels move." }
];

/* ============================================================
   PROJECTS
   sector: used for the Work page filter chips.
   metrics: honest, scope-based facts — not invented outcomes.
   ============================================================ */
const PROJECTS = [
  {
    slug: "denali-leather-goods", name: "Denali Leather Goods", year: "2023",
    sector: "Retail", tags: ["Branding", "Logo Suite", "Stationery"],
    hero: "images/b-denali.jpg",
    gallery: ["images/denali-01.jpg", "images/denali-02.jpg", "images/denali-03.jpg"],
    summary: "A 0→1 identity durable enough for hide-stamping and screens alike.",
    intro: "A new leather-goods brand needed an identity that read as elegant and durable without leaning on category clichés — and had to survive being heat-stamped into leather, not just displayed on a screen.",
    approach: [
      "Designed the full visual system — wordmark, seal mark, and typography",
      "Defined a primary monochrome palette so the mark stays legible heat-stamped into leather or rendered on a screen",
      "Extended the system across print, packaging, and digital applications"
    ],
    deliverables: ["Logo suite", "Brand style guide", "Social templates", "Stationery"],
    outcome: "A cohesive, versatile brand ready to scale across physical production and e-commerce.",
    metrics: [{ v: "4", l: "deliverables — logo → stationery" }, { v: "0→1", l: "brand built from scratch" }]
  },
  {
    slug: "bark-2-earth", name: "Bark 2 Earth", year: "2023",
    sector: "Pets & Wellness", tags: ["Branding", "Packaging", "Web Design"],
    hero: "images/b-bark2earth.jpg",
    gallery: ["images/bark2earth-01.png", "images/bark2earth-02.png", "images/bark2earth-03.png"],
    summary: "Took a pet-wellness brand from logo to shelf-ready packaging to storefront.",
    intro: "A natural pet-treats brand needed to stand out on crowded physical and digital shelves against established competitors — Yak Chews, Bully Sticks, and a full treat line, each needing its own shelf presence.",
    approach: [
      "Designed the brand identity system",
      "Built the packaging system across the full product line, including the Yak Chews and Bully Sticks ranges",
      "Designed the e-commerce website"
    ],
    deliverables: ["Logo", "Packaging (pouch + box)", "Web design"],
    outcome: "A shelf-ready visual identity that signals natural origin and builds consumer trust at the point of purchase.",
    metrics: [{ v: "3", l: "disciplines — logo, packaging, web" }, { v: "0→1", l: "brand built from scratch" }]
  },
  {
    slug: "biona-coffee", name: "Biona Coffee", year: "2023",
    sector: "Food & Drink", tags: ["Branding", "Packaging", "Pattern System"],
    hero: "images/b-bionacoffee.jpg",
    gallery: ["images/biona-01.png", "images/biona-02.png", "images/biona-03.png"],
    summary: "An origin-coded packaging system built across multiple roasts and countries.",
    intro: "Biona's story starts with a love of coffee and a habit of sharing it wherever the team travels — the brand needed to promise specialty-grade, single-origin coffee, prepared with care, at a shelf glance.",
    approach: [
      "Designed the visual identity — wordmark, geometric pattern system, and circular \"Love For Coffee\" badge",
      "Designed the packaging line across Colombia, Perú, and Costa Rica origins",
      "Built a repeating botanical/geometric pattern system used across packaging, social, and app touchpoints"
    ],
    deliverables: ["Logo", "Packaging design", "Pattern system", "Brand guidelines", "App UI concepts"],
    outcome: "A cohesive, standout packaging family that reinforces the brand's specialty-grade, single-origin positioning at shelf.",
    metrics: [{ v: "3+", l: "origin-coded packaging lines" }, { v: "0→1", l: "brand built from scratch" }]
  },
  {
    slug: "casa-de-encantos", name: "Casa de Encantos", year: "2022",
    sector: "Food & Drink", tags: ["Branding", "Packaging"],
    hero: "images/b-casadeencantos.jpg",
    gallery: ["images/casaencantos-01.jpg", "images/casaencantos-02.jpg", "images/casaencantos-03.jpg"],
    summary: "An apothecary-style herbal tea line — Valerian, Passionflower, Lemonbalm.",
    intro: "A boutique tea house needed packaging that felt more like an apothecary shelf than a supermarket aisle — each blend (Valerian, Passionflower, Lemonbalm) needed its own identity within one coherent family.",
    approach: [
      "Designed the brand identity for the tea house",
      "Designed a box packaging system differentiating each herbal blend by color while keeping one shared brand language"
    ],
    deliverables: ["Logo", "Packaging design", "Blend differentiation system"],
    outcome: "A packaging family that reads as considered and apothecary-grade rather than mass-market.",
    metrics: [{ v: "3", l: "herbal blends packaged" }, { v: "0→1", l: "brand built from scratch" }]
  },
  {
    slug: "humboldt-brewery", name: "Humboldt Brewery — Obscura", year: "2022",
    sector: "Spirits", tags: ["Branding", "Packaging"],
    hero: "images/b-humboldt.jpg",
    gallery: ["images/humboldt-01.jpg", "images/humboldt-02.jpg", "images/humboldt-03.png"],
    summary: "Label design for Obscura, a Vienna-style craft lager.",
    intro: "A craft brewery needed a bottle label with the confidence and legibility of an established beer brand for the release of Obscura, its Vienna-style lager.",
    approach: [
      "Designed the bottle label and wordmark treatment",
      "Balanced classic brewery cues (crest-style lockup) with a distinct color story for the Obscura release"
    ],
    deliverables: ["Label design", "Wordmark"],
    outcome: "A label that reads as craft and established at once, ready to sit on a shelf next to category leaders.",
    metrics: [{ v: "1", l: "flagship label shipped" }, { v: "Craft", l: "beverage packaging" }]
  },
  {
    slug: "emraw", name: "Emraw", year: "2022",
    sector: "Retail", tags: ["Branding", "Label Design"],
    hero: "images/b-emraw.jpg",
    gallery: ["images/emraw-01.jpg", "images/emraw-02.jpg", "images/emraw-03.jpg"],
    summary: "Branding and packaging for a mass-market school and office supply manufacturer.",
    intro: "A supplier selling through national retail chains needed packaging that stood out on a crowded big-box shelf while staying cheap enough to produce at mass-market print volumes.",
    approach: [
      "Designed the brand identity and product packaging system",
      "Designed retail-ready labels for a multi-SKU product line"
    ],
    deliverables: ["Logo", "Packaging / label design", "Retail collateral"],
    outcome: "A shelf-ready identity built to work at national retail scale without a premium-packaging budget.",
    metrics: [{ v: "National retail", l: "scale" }, { v: "Multi-SKU", l: "packaging system" }]
  },
  {
    slug: "garment-decor", name: "Garment Decor", year: "2022",
    sector: "Corporate", tags: ["Branding", "Web Design"],
    hero: "images/b-garmentdecor.jpg",
    summary: "Branding, guidelines, and web design for a commercial apparel decoration vendor.",
    intro: "A screen-printing and embroidery vendor needed a brand and website that read as a reliable commercial partner to other businesses, not a small print shop.",
    approach: [
      "Designed the visual identity and brand guidelines",
      "Designed the company website with a minimum-order-friendly tone throughout"
    ],
    deliverables: ["Logo", "Brand guidelines", "Web design"],
    outcome: "A brand and site that positions the company as a dependable B2B decoration partner.",
    metrics: [{ v: "3", l: "deliverables — logo, guidelines, web" }, { v: "B2B", l: "positioning" }]
  },
  {
    slug: "klassen-farm-products", name: "Klassen Farm Products", year: "2021",
    sector: "Corporate", tags: ["Branding", "Web Design"],
    hero: "images/b-klassenfarm.jpg",
    summary: "Branding and web design for a specialty agricultural and farm products manufacturer.",
    intro: "A farm products manufacturer needed a brand and website that felt trustworthy to both agricultural buyers and retail customers at once.",
    approach: ["Designed the brand identity", "Designed the company website"],
    deliverables: ["Logo", "Web design"],
    outcome: "A cohesive brand presence that works across the company's agricultural and retail customer base.",
    metrics: [{ v: "2", l: "deliverables — logo, web" }, { v: "Dual-audience", l: "brand" }]
  },
  {
    slug: "dreams-by-sara-el-kadi", name: "Dreams by Sara el Kadi", year: "2022",
    sector: "Retail", tags: ["Branding", "Packaging"],
    hero: "images/b-dreams.jpg",
    summary: "Hang-tag and packaging identity for a jewelry and accessories line.",
    intro: "A jewelry brand needed hang-tag and packaging design that felt as considered as the pieces themselves — small-format branding that still carries real presence.",
    approach: ["Designed the wordmark and butterfly mark", "Designed hang-tag and small-format packaging across the accessories line"],
    deliverables: ["Logo", "Hang-tag design", "Packaging"],
    outcome: "A small-format identity system that holds its own at the point of sale.",
    metrics: [{ v: "Small-format", l: "packaging system" }, { v: "0→1", l: "brand built from scratch" }]
  },
  {
    slug: "pawty-animals", name: "Pawty Animals", year: "2022",
    sector: "Pets & Wellness", tags: ["Branding", "Toy Design", "Web Design"],
    hero: "images/b-pawtyanimals.jpg",
    gallery: ["images/pawtyanimals-01.png", "images/pawtyanimals-02.png", "images/pawtyanimals-04.png"],
    summary: "Branding, toy design, and web design for a pet brand — including the Jackson Tail plush line.",
    intro: "A pet lifestyle brand needed a playful identity that could stretch across packaging, plush toy design (including the \"Jackson Tail\" toy), social content, and a full e-commerce site.",
    approach: [
      "Designed the brand identity and social content system",
      "Designed the plush toy line, including Jackson Tail",
      "Designed packaging and the e-commerce website"
    ],
    deliverables: ["Branding", "Social media", "Toy design", "Packaging", "Web design"],
    outcome: "A playful, cohesive brand that carries through product, packaging, and site alike — real enough to earn a client testimonial for the studio.",
    metrics: [{ v: "5", l: "disciplines — brand → web" }, { v: "0→1", l: "brand built from scratch" }]
  },
  {
    slug: "emily-bardaji", name: "Emily Bardaji", year: "2021",
    sector: "Culture", tags: ["Branding", "Art Direction"],
    hero: "images/b-emilybardaji.jpg",
    summary: "Personal brand identity and art direction.",
    intro: "A personal brand needed a signature wordmark and art direction confident enough to anchor a portfolio of creative work.",
    approach: ["Designed a signature script wordmark", "Provided art direction for supporting brand photography"],
    deliverables: ["Wordmark", "Art direction"],
    outcome: "A signature mark distinctive enough to stand alone across any creative context.",
    metrics: [{ v: "Signature", l: "wordmark" }, { v: "0→1", l: "brand built from scratch" }]
  },
  {
    slug: "massalino-bakery", name: "Massalino Bakery", year: "2021",
    sector: "Hospitality", tags: ["Branding", "Packaging", "Retail Branding"],
    hero: "images/b-massalino.jpg",
    gallery: ["images/massalino-02.jpg", "images/massalino-03.jpg", "images/massalino-04.jpg"],
    summary: "Branding, packaging, and retail signage for an Italian-style bakery.",
    intro: "An Italian-style bakery needed a brand that could carry from pizza boxes to storefront signage to a full retail interior presence.",
    approach: ["Designed the brand identity", "Designed packaging (menus, pizza boxes)", "Designed retail signage and storefront branding"],
    deliverables: ["Logo", "Packaging", "Retail signage"],
    outcome: "A brand that reads consistently from the menu in hand to the storefront on the street.",
    metrics: [{ v: "3", l: "touchpoints — packaging, signage, retail" }, { v: "0→1", l: "brand built from scratch" }]
  },
  {
    slug: "brussel", name: "Brüssel", year: "2020",
    sector: "Hospitality", tags: ["Branding", "Retail Branding"],
    hero: "images/b-brussel.jpg",
    gallery: ["images/brussel-01.jpg", "images/brussel-02.jpg", "images/brussel-03.jpg"],
    summary: "Branding and retail branding for a restaurant concept.",
    intro: "A restaurant concept needed a full identity — from stationery to a branded storefront and event presence.",
    approach: ["Designed the brand identity", "Designed retail branding and signage for the physical space"],
    deliverables: ["Logo", "Stationery", "Retail branding"],
    outcome: "A restaurant brand with a consistent presence from the front door to the table.",
    metrics: [{ v: "0→1", l: "brand built from scratch" }]
  },
  {
    slug: "oggi-pizza", name: "Oggi Pizza", year: "2020",
    sector: "Hospitality", tags: ["Branding", "Retail Branding"],
    hero: "images/b-oggipizza.jpg",
    gallery: ["images/oggi-01.jpg", "images/oggi-02.jpg", "images/oggi-03.jpg"],
    summary: "Branding and retail branding for a pizzeria.",
    intro: "A pizzeria needed packaging and interior branding that felt fresh without losing the warmth of a neighborhood spot.",
    approach: ["Designed the brand identity", "Designed packaging and interior retail branding"],
    deliverables: ["Logo", "Packaging", "Retail branding"],
    outcome: "A warm, distinct identity built for a neighborhood pizzeria's day-to-day operations.",
    metrics: [{ v: "0→1", l: "brand built from scratch" }]
  },
  {
    slug: "arepale", name: "Arépale", year: "2020",
    sector: "Hospitality", tags: ["Branding", "Menu Design", "Retail Branding"],
    hero: "images/b-arepale.jpg",
    gallery: ["images/arepale-01.jpg", "images/arepale-02.jpg", "images/arepale-03.jpg"],
    summary: "Branding, menu design, and retail branding for a food truck concept.",
    intro: "A food truck concept needed a bold, mobile-friendly identity that could work as well on a truck wrap as it does on a menu board.",
    approach: ["Designed the brand identity", "Designed menu system and truck/retail branding"],
    deliverables: ["Logo", "Menu design", "Retail branding"],
    outcome: "A bold identity built to stand out fast, matching the pace of a food truck business.",
    metrics: [{ v: "0→1", l: "brand built from scratch" }]
  },
  {
    slug: "disfruta", name: "Disfruta", year: "2020",
    sector: "Hospitality", tags: ["Branding", "Menu Design", "Interior Design"],
    hero: "images/b-disfruta.jpg",
    gallery: ["images/disfruta-01.jpg", "images/disfruta-02.jpg", "images/disfruta-03.jpg"],
    summary: "Branding, menu design, and branded interior design for a juice bar / coffee shop.",
    intro: "A juice and coffee concept needed a brand extended into the physical interior, not just packaging and print.",
    approach: ["Designed the brand identity and menu system", "Designed branded interior elements for the physical space"],
    deliverables: ["Logo", "Menu design", "Branded interior design"],
    outcome: "A brand that lives in the physical space customers sit in, not just what they take away.",
    metrics: [{ v: "0→1", l: "brand built from scratch" }]
  },
  {
    slug: "casa-santafe", name: "Casa Santafé", year: "2020",
    sector: "Hospitality", tags: ["Branding", "Signage Design", "Interior Direction"],
    hero: "images/b-casasantafe.jpg",
    gallery: ["images/casasantafe-02.jpg", "images/casasantafe-03.jpg", "images/casasantafe-04.jpg"],
    summary: "Branding, signage, and interior direction for a boutique coliving hostel.",
    intro: "A boutique coliving hostel needed signage and wayfinding that matched a warm, considered interior — the kind of details guests notice in a shared kitchen or common space.",
    approach: ["Designed the brand identity and signage system", "Directed brand application across shared kitchen and common-space interiors"],
    deliverables: ["Logo", "Signage design", "Interior brand direction"],
    outcome: "A hostel brand that feels considered in the details guests actually live in day to day.",
    metrics: [{ v: "0→1", l: "brand built from scratch" }]
  },
  {
    slug: "bon-pops", name: "Bon Pops", year: "2019",
    sector: "Food & Drink", tags: ["Branding", "Retail Branding"],
    hero: "images/b-bonpops.jpg",
    gallery: ["images/bonpops-01.jpg", "images/bonpops-02.jpg", "images/bonpops-03.jpg"],
    summary: "Branding and retail branding for a frozen-pop retail concept.",
    intro: "A frozen-pop retail concept needed bright, playful branding built to work on packaging and a physical kiosk alike.",
    approach: ["Designed the brand identity", "Designed retail branding for the kiosk concept"],
    deliverables: ["Logo", "Retail branding"],
    outcome: "A bright, playful identity built for a retail kiosk format.",
    metrics: [{ v: "0→1", l: "brand built from scratch" }]
  },
  {
    slug: "cuida-tu-mente", name: "Cuida tu Mente", year: "2019",
    sector: "Wellness", tags: ["Branding", "Retail Branding"],
    hero: "images/b-cuidatumente.jpg",
    gallery: ["images/cuidatumente-01.jpg", "images/cuidatumente-02.jpg", "images/cuidatumente-03.jpg"],
    summary: "Branding and retail branding for a mental health services brand.",
    intro: "A mental health services brand needed an identity that felt calm and trustworthy — approachable rather than clinical.",
    approach: ["Designed the brand identity", "Designed retail/office branding for the physical practice"],
    deliverables: ["Logo", "Retail branding"],
    outcome: "A calm, trustworthy identity appropriate for a sensitive service category.",
    metrics: [{ v: "0→1", l: "brand built from scratch" }]
  },
  {
    slug: "sunset-coffee", name: "Sunset Coffee", year: "2019",
    sector: "Food & Drink", tags: ["Branding", "Packaging"],
    hero: "images/b-sunsetcoffee.jpg",
    gallery: ["images/sunsetcoffee-01.png", "images/sunsetcoffee-02.jpg", "images/sunsetcoffee-03.jpg"],
    summary: "Branding and packaging for a specialty coffee line.",
    intro: "A specialty coffee line needed packaging that communicated warmth and craft at shelf.",
    approach: ["Designed the brand identity", "Designed the packaging line"],
    deliverables: ["Logo", "Packaging design"],
    outcome: "A warm, craft-forward packaging identity for a specialty coffee line.",
    metrics: [{ v: "0→1", l: "brand built from scratch" }]
  },
  {
    slug: "phila-cup-coffee", name: "Phila Cup Coffee", year: "2019",
    sector: "Food & Drink", tags: ["Logo Design", "Packaging"],
    hero: "images/b-philacup.jpg",
    summary: "Logo and packaging design for a Philadelphia coffee brand.",
    intro: "A Philadelphia-based coffee brand needed a logo and packaging system that felt local and craft-forward.",
    approach: ["Designed the logo", "Designed the packaging system"],
    deliverables: ["Logo design", "Packaging design"],
    outcome: "A local, craft-forward identity for a city-rooted coffee brand.",
    metrics: [{ v: "0→1", l: "brand built from scratch" }]
  },
  {
    slug: "el-paraiso-heladeria", name: "El Paraíso Heladería", year: "2018",
    sector: "Food & Drink", tags: ["Branding", "Packaging", "3D Visualization"],
    hero: "images/b-elparaiso.jpg",
    gallery: ["images/paraiso-01.jpeg", "images/paraiso-02.jpg", "images/paraiso-03.png"],
    summary: "Branding, packaging, and 3D visualization for an ice cream brand.",
    intro: "An ice cream brand needed vibrant packaging plus 3D visualization to pitch the concept before physical production.",
    approach: ["Designed the brand identity and packaging line", "Produced 3D visualizations to pitch packaging before print production"],
    deliverables: ["Logo", "Packaging design", "3D visualization"],
    outcome: "A vibrant packaging identity, validated visually before committing to print.",
    metrics: [{ v: "0→1", l: "brand built from scratch" }]
  },
  {
    slug: "fryefit", name: "Fryefit", year: "2018",
    sector: "Fitness", tags: ["Branding"],
    hero: "images/b-fryefit.jpg",
    gallery: ["images/fryefit-01.jpg", "images/fryefit-02.jpg", "images/fryefit-03.jpg"],
    summary: "Brand identity for a faith-and-fitness apparel line.",
    intro: "A faith-and-fitness apparel line needed an identity that could carry both convictions without feeling like two brands stitched together.",
    approach: ["Designed the brand identity and wordmark"],
    deliverables: ["Logo", "Brand identity"],
    outcome: "One coherent identity for a brand built on two distinct values.",
    metrics: [{ v: "0→1", l: "brand built from scratch" }]
  }
];

const SECTORS = ["All", "Food & Drink", "Hospitality", "Pets & Wellness", "Retail", "Corporate", "Wellness", "Fitness", "Culture", "Spirits"];
