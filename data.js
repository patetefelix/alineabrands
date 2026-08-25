/* ============================================================
   ALINEA — shared content
   Loaded by every page. Edit here, not in the HTML.
   ============================================================ */

const SERVICES = [
  { title: "Brand Strategy", desc: "Positioning, naming, and workshops that find what makes a brand authentically itself before a single pixel gets designed.", image: "images/service-strategy.jpg", cta: "Explore Brand Strategy" },
  { title: "Visual Identity", desc: "Logo systems, typography, and guidelines built to hold up across packaging, web, and everything in between.", image: "images/service-identity.jpg", cta: "Explore Visual Identity" },
  { title: "Packaging Design", desc: "Shelf-ready packaging systems designed to turn a glance into a sale, for single SKUs or full product lines.", image: "images/service-packaging.jpg", cta: "Explore Packaging Design" },
  { title: "Web Design", desc: "Websites that carry the brand's voice from the homepage all the way through checkout.", image: "images/service-web.jpg", cta: "Explore Web Design" }
];

/* Feature grid on the homepage — four ways of describing how the
   studio actually works, styled as alternating lime/gray/dark cards. */
const FEATURES = [
  { title: "Strategy-Led", desc: "Every project starts with positioning, not a mood board — so the design has something to say.", variant: "lime",
    icon: '<svg class="feature-icon" viewBox="0 0 44 44" fill="none"><circle cx="22" cy="22" r="15" stroke="currentColor" stroke-width="1.4"/><circle cx="22" cy="22" r="2.4" fill="currentColor"/></svg>' },
  { title: "Small & Hands-On", desc: "Two project slots a month, worked by the same people from kickoff to launch — not handed off mid-way.", variant: "gray",
    icon: '<svg class="feature-icon" viewBox="0 0 44 44" fill="none"><circle cx="22" cy="22" r="15" stroke="currentColor" stroke-width="1.4"/><path d="M22 7v30M7 22h30" stroke="currentColor" stroke-width="1" opacity=".4"/></svg>' },
  { title: "Full-Service", desc: "Strategy, identity, packaging, and web — one studio carries the brand across every touchpoint.", variant: "dark",
    icon: '<svg class="feature-icon" viewBox="0 0 44 44" fill="none"><circle cx="17" cy="20" r="11" stroke="currentColor" stroke-width="1.4"/><circle cx="27" cy="24" r="11" stroke="currentColor" stroke-width="1.4"/></svg>' },
  { title: "Built to Scale", desc: "Systems designed to work at 5 SKUs or 500 — guidelines a growing team can actually use.", variant: "gray",
    icon: '<svg class="feature-icon" viewBox="0 0 44 44" fill="none"><path d="M12 32L32 12M32 12H18M32 12V26" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>' }
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
  { q: "What's the cost for a complete brand identity?", a: "It depends on scope and deadline — full identity projects typically start around $3,000. Get in touch with a brief and we'll send a real quote." }
];

const TESTIMONIAL = {
  quote: "Alinea built our site from the ground up with quick turnaround times, clear communication and incredible support from their team. As a small brand, this was exactly what we needed from a web developer, and we are lucky to continue to work with them on new projects for our site.",
  name: "Lily Geiger", location: "New York, NY", client: "Pawty Animals"
};

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
   PROJECTS
   sector: used for the Work page filter chips.
   metrics: honest, scope-based facts — not invented outcomes.
   ============================================================ */
const PROJECTS = [
  {
    slug: "denali-leather-goods", name: "Denali Leather Goods", year: "2023",
    sector: "Retail", tags: ["Branding", "Logo Suite", "Stationery"],
    hero: "images/b-denali.jpg",
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
    summary: "Brand identity for a faith-and-fitness apparel line.",
    intro: "A faith-and-fitness apparel line needed an identity that could carry both convictions without feeling like two brands stitched together.",
    approach: ["Designed the brand identity and wordmark"],
    deliverables: ["Logo", "Brand identity"],
    outcome: "One coherent identity for a brand built on two distinct values.",
    metrics: [{ v: "0→1", l: "brand built from scratch" }]
  }
];

const SECTORS = ["All", "Food & Drink", "Hospitality", "Pets & Wellness", "Retail", "Corporate", "Wellness", "Fitness", "Culture", "Spirits"];

/* ============================================================
   PRICING — honest starting points. Only the $3,000 minimum is
   a real anchor Félix gave; the rest are framed as "starting at"
   or "custom quote" rather than invented fixed ranges.
   ============================================================ */
const PRICING = [
  {
    name: "Brand Foundation", price: "Starting at $3,000",
    items: ["Brand strategy & positioning", "Logo design", "Visual identity system", "Brand style guide", "Essential collateral"],
    featured: false
  },
  {
    name: "Brand Experience", price: "Custom quote",
    items: ["Everything in Foundation", "Packaging design", "Web design", "Social media templates", "Photography direction"],
    featured: true
  },
  {
    name: "Full-Service Partner", price: "Custom quote",
    items: ["Everything in Experience", "Ongoing brand support", "Campaign & launch assets", "Sales collateral", "Priority turnaround"],
    featured: false
  }
];

/* ============================================================
   COMPARISON — general industry framing, not claims about any
   named competitor.
   ============================================================ */
const COMPARISON = {
  rows: ["Access", "Team", "Pace", "Typical minimum"],
  columns: [
    { label: "Alinea", values: ["Direct line to the person designing your brand", "Small, senior team — same people start to finish", "2 project slots a month — real focus", "$3,000"] },
    { label: "Freelancer", values: ["Direct, but juggling many clients solo", "Just one person", "Depends on their other work", "Varies widely"] },
    { label: "Big Agency", values: ["Filtered through account managers", "Rotating junior staff", "Multiple accounts running in parallel", "Often $15,000+"] }
  ]
};
