/* ============================================================
   FÉLIX PATETE — PORTFOLIO
   Project data acts as the "CMS collection" — edit this array
   to add, remove, or update case studies. No build step needed.

   Ordering note: within each tab, clients worked with through
   Crimson Agility (Sept 2023–present) are listed first, since
   that's Félix's current and most senior-scope work. Everything
   after that follows the tiered "importance" list, largest/most
   prominent companies first.
   ============================================================ */

/* ============================================================
   TAB COPY
   ============================================================ */
const TAB_COPY = {
  uiux: "High-conversion e-commerce storefronts and complex B2B catalogs, designed to scale — Adobe Commerce, Shopify, BigCommerce, and Shopware.",
  brand: "0→1 identity systems — brand strategy, typography, packaging, and retail interiors built to last.",
  growth: "Visual strategy for digital marketing — email flows, high-performing ad creative, and campaign assets built for DTC retention and conversion."
};

/* ============================================================
   CLIENTS — marquee strip, ordered by company scale/prominence
   (Tier 1 = global mega-corporations, down to Tier 5 = boutique
   and 0→1 brands), names capitalized.
   ============================================================ */
const CLIENTS = [
  // Tier 1 — global industrial giants & mega-corporations
  "TK Elevator", "Caplugs", "Frontier Co-op",
  // Tier 2 — large national enterprises, healthcare & high-volume distributors
  "PT Solutions", "AFG Distribution", "BrüMate", "Hoveround Mobility Solutions",
  "Oklahoma Correctional Industries", "BriskHeat", "High Speed Gear", "Nueske's", "White Cap Foods",
  // Tier 3 — category leaders, high-growth DTC & specialized manufacturers
  "Professional's Choice", "Zip Corvette", "Feat Clothing", "Smithey Ironware", "12th Tribe",
  "Accutech", "Emraw", "Icarus Precision", "Siege Suppressors", "Phoenix Medical Instruments",
  // Tier 4 — growing DTC brands, niche B2B & digital agencies
  "Crimson Agility", "Riddy", "Outlast Supply", "Garment Decor", "Denali Leather Goods",
  "Bark 2 Earth", "Klassen Farm Products",
  // Tier 5 — boutique regional brands, hospitality & 0→1 startups
  "Massalino Bakery", "Brüssel", "Oggi Pizza", "Arépale", "Disfruta", "Casa Santafé Hostel",
  "Bon Pops", "Cuida tu Mente", "Biona Coffee", "Sunset Coffee", "Casa de Encantos Tea House",
  "Phila Cup Coffee", "El Paraíso Heladería", "Pawty Animals", "Fryefit"
];

/* ============================================================
   PROJECTS — full case studies (grid + modal)

   metrics: honest, scope-based chips (catalog size, flows shipped,
   steps redesigned) pulled from the work itself — not invented
   business outcomes. For companies without screenshots on hand,
   the case copy is written directly from the one-line brief
   Félix provided, kept general rather than inventing specifics
   that can't be backed up. See the .cs-note in each modal for
   where to drop in real analytics once available.
   ============================================================ */
const PROJECTS = [

  /* ================= TAB 1 — UI/UX & E-COMMERCE =================
     Crimson Agility clients first (current, senior-scope work),
     then the rest of the roster by prominence. */

  {
    id: "tke", tab: "uiux", type: "case", featured: true,
    name: "TK Elevator", industry: "Industrial Elevator Parts · B2B · Crimson Agility", platform: "Adobe Commerce",
    role: "UX Design · Technical PDP",
    desc: "Designed a 2-click part-lookup flow for maintenance technicians.",
    image: "images/proj-tke.jpg",
    challenge: "Field technicians needed to find the exact replacement part by technical spec — in the field, without wading through a catalog built for casual browsing.",
    owned: [
      "Designed B2B storefront UX for an industrial spare-parts catalog",
      "Built PDPs with interactive technical spec tables in place of standard marketing copy",
      "Added a \"frequently bought together\" module for common repair bundles"
    ],
    scope: ["Category navigation", "Product detail page"],
    influence: "Pushed for spec data above the fold on the PDP instead of lifestyle imagery — matched how technicians actually search, not how most B2B templates are built.",
    outcome: "A parts catalog technicians can search by spec in two clicks instead of browsing categories — built for speed under field conditions.",
    metrics: [
      { value: "2-click", label: "part lookup flow" },
      { value: "Spec-first", label: "PDP layout" }
    ]
  },
  {
    id: "nueskes", tab: "uiux", type: "case", featured: true,
    name: "Nueske's", industry: "Specialty Foods · Smoked Meats DTC · Crimson Agility", platform: "Adobe Commerce",
    role: "UX Design · Merchandising",
    desc: "Rebuilt the DTC storefront to support gifting, seasonality, and premium positioning.",
    image: "images/proj-nueskes.jpg",
    challenge: "A century-old smoked-meats brand needed a digital storefront that matched its premium in-store reputation, while handling a large catalog, gift flows, and seasonal demand spikes.",
    owned: [
      "Redesigned category and product detail pages to lead with food photography and provenance",
      "Streamlined cart and checkout UX to reduce friction during gifting and subscription purchases",
      "Built seasonal and gift-focused merchandising modules for the homepage and PDP"
    ],
    scope: ["Homepage", "PLP / PDP", "Cart"],
    influence: "Introduced recipe-based cross-sell modules that connect products to real cooking occasions instead of generic \"related items.\"",
    outcome: "A storefront built to turn gastronomic browsing into orders — recipe-driven cross-sell and seasonal merchandising designed to support average order value and repeat purchases.",
    metrics: [
      { value: "3", label: "core flows rebuilt" },
      { value: "Recipe-led", label: "cross-sell model" }
    ]
  },
  {
    id: "accutech", tab: "uiux", type: "case", featured: true,
    name: "Accutech", industry: "IT Hardware & Data Storage · B2B · Crimson Agility", platform: "Adobe Commerce",
    role: "UX Design · Figma Prototyping",
    desc: "Restructured a 15,000-SKU B2B catalog for faster corporate purchasing decisions.",
    image: "images/proj-accutech.jpg",
    challenge: "IT procurement teams had to compare thousands of technical storage SKUs, but deep, inconsistent category navigation buried the specs they needed to make a decision.",
    owned: [
      "Architected the storefront navigation and PLP/PDP layout in Figma for a 15,000-SKU technical catalog",
      "Designed advanced filtering logic so buyers could narrow by spec, not just category",
      "Structured the PDP around comparison-critical technical specs instead of lifestyle imagery"
    ],
    scope: ["Homepage merchandising", "Category navigation", "Cart flow"],
    influence: "Proposed a simplified featured-products module for the homepage to shorten the path to the highest-turnover SKUs — adopted for the final build.",
    outcome: "A navigation system built for how IT buyers actually shop: spec-first, comparison-ready, and fast to scan across a catalog too large to browse by category alone.",
    metrics: [
      { value: "15K+", label: "SKUs restructured" },
      { value: "3", label: "surfaces redesigned" }
    ]
  },
  {
    id: "whitecap", tab: "uiux", type: "case", featured: true,
    name: "White Cap Foods", industry: "Foodservice Distribution · B2B · Crimson Agility", platform: "Figma → HTML/CSS",
    role: "Design System",
    desc: "Shipped a full e-commerce design system with static HTML/CSS handoff for engineering.",
    image: "images/proj-whitecap.jpg",
    challenge: "A foodservice distributor's B2B customers needed fast reordering and a credit application process that wasn't scaring off new accounts partway through.",
    owned: [
      "Built a complete design system in Figma — homepage, mega menu, cart, and account",
      "Delivered static HTML/CSS markup so engineering could implement without a rebuild",
      "Redesigned the commercial credit application as a stepped, lower-friction flow"
    ],
    scope: ["Mega menu IA", "Reorder flow", "B2B credit application"],
    influence: "Restructured the credit form into logical steps specifically to cut abandonment on new B2B account signups.",
    outcome: "A modular, engineering-ready design system built for reuse — plus a credit application flow designed to keep new accounts from dropping off partway through.",
    metrics: [
      { value: "4", label: "systems shipped" },
      { value: "Stepped", label: "credit form redesign" }
    ]
  },
  {
    id: "briskheat", tab: "uiux", type: "case", featured: true,
    name: "BriskHeat", industry: "Industrial Heating Equipment · Global Manufacturer · Crimson Agility", platform: "Adobe Commerce",
    role: "UX Design · Storefront & Checkout",
    desc: "Redesigned the storefront and checkout for a global industrial heating equipment leader.",
    image: "images/proj-briskheat.jpg",
    challenge: "Industrial buyers needed to quickly find temperature-critical heating products — jackets, controllers, freeze-protection kits — and complete B2B purchases without friction, across a catalog spanning dozens of categories.",
    owned: [
      "Redesigned the homepage and category navigation around core use cases — freeze protection, drum heating, process heating",
      "Streamlined the checkout flow to reduce steps for repeat industrial buyers",
      "Built seasonal campaign modules (freeze-protection top sellers) into the homepage"
    ],
    scope: ["Homepage", "Category navigation", "Checkout"],
    influence: "Proposed leading the homepage with use-case-first navigation instead of generic product categories — matched how industrial buyers actually search.",
    outcome: "A storefront built to route industrial buyers to the right heating solution fast, with a checkout streamlined for repeat B2B purchasing.",
    metrics: [
      { value: "Use-case nav", label: "homepage redesign" },
      { value: "Streamlined", label: "checkout flow" }
    ]
  },
  {
    id: "siege", tab: "uiux", type: "case", featured: true,
    name: "Siege Suppressors", industry: "Firearms & Tactical Equipment · DTC · Crimson Agility", platform: "Adobe Commerce",
    role: "UX Design · Technical PDP",
    desc: "Designed spec-heavy PDPs and an educational content system for a precision suppressor brand.",
    image: "images/proj-siege.jpg",
    challenge: "Buyers of precision suppressors need to compare highly technical specs — caliber compatibility, decibel reduction, materials — before a high-consideration purchase, while the brand also needed to educate newer buyers on the technology.",
    owned: [
      "Designed PDP layout balancing technical spec tables with brand photography",
      "Built an educational content template (\"What Is the Linear Diffuser Array?\") to support buyer research pre-purchase",
      "Designed the category and PLP for the suppressor product line"
    ],
    scope: ["Category / PLP", "Product detail page", "Educational content pages"],
    influence: "Pushed for a dedicated educational template separate from the PDP, so technical explainers wouldn't crowd out the purchase-focused product page.",
    outcome: "A storefront that supports both fast comparison shopping for experienced buyers and pre-purchase education for newer ones.",
    metrics: [
      { value: "Spec-first", label: "PDP layout" },
      { value: "Dedicated", label: "education template" }
    ]
  },
  {
    id: "riddy", tab: "uiux", type: "case", featured: true,
    name: "Riddy", industry: "Lawn Care & Pest Control · DTC Subscription · Crimson Agility", platform: "Adobe Commerce",
    role: "UX Design · Subscription Flow",
    desc: "Designed a plan-builder subscription flow for a DTC lawn care and pest control brand.",
    image: "images/proj-riddy.jpg",
    challenge: "Subscription lawn care requires customers to configure a recurring plan around their specific property and pest concerns — a flow that's easy to abandon if it feels like a long form.",
    owned: [
      "Designed the \"set up your perfect plan\" subscription configurator flow",
      "Designed the homepage and educational landing pages explaining how the subscription works",
      "Designed cart and checkout for recurring-order purchases"
    ],
    scope: ["Subscription plan builder", "Homepage", "Cart / checkout"],
    influence: "Broke the plan-builder into short, single-decision steps instead of one long form, to reduce the chance of drop-off mid-setup.",
    outcome: "A subscription setup flow designed to feel like a few quick choices rather than a form to fill out.",
    metrics: [
      { value: "Stepped", label: "plan-builder flow" },
      { value: "3", label: "surfaces designed" }
    ]
  },
  {
    id: "professionalschoice", tab: "uiux", type: "case", featured: true,
    name: "Professional's Choice", industry: "Equestrian Sports Medicine · Category Leader", platform: "Adobe Commerce",
    role: "UX Design · Catalog & PDP",
    desc: "Designed the storefront for the category leader in equestrian sports medicine and horse tack.",
    image: "images/proj-professionalschoice.jpg",
    challenge: "Equestrian buyers need to match specific protective gear — boots, wraps — to their horse's size and discipline, a fit-driven purchase decision rather than a browse-and-buy one.",
    owned: [
      "Designed the category page and filtering for sports medicine boots and tack",
      "Designed PDP layout to support size/fit guidance alongside product imagery",
      "Designed supporting education content linking products to real training and care use cases"
    ],
    scope: ["Category / PLP", "Product detail page", "Education content"],
    influence: "Added a \"you may also need\" module connecting protective gear to related care products, based on how riders typically shop by activity rather than single SKU.",
    outcome: "A storefront built around fit and use case — helping riders choose the right gear for their horse and discipline with confidence.",
    metrics: [
      { value: "Fit-first", label: "PDP guidance" },
      { value: "Category leader", label: "in equestrian sports medicine" }
    ]
  },
  {
    id: "caplugs", tab: "uiux", type: "case",
    name: "Caplugs", industry: "Custom Plastic Molding & Industrial Protection · Global Manufacturer", platform: "Adobe Commerce",
    role: "UX Design",
    desc: "Storefront UX for a global leader in custom plastic molding and masking solutions.",
    image: "images/proj-caplugs.jpg",
    challenge: "A worldwide manufacturer needed a B2B storefront that could organize a highly technical, high-volume plastics catalog for engineering and procurement buyers.",
    owned: ["Designed storefront navigation and PDP structure for a technical, high-SKU catalog"],
    scope: ["Category navigation", "Product detail page"],
    influence: "Prioritized spec-based filtering so procurement buyers could narrow by material and dimension rather than browsing by product line.",
    outcome: "A catalog structure built for technical B2B buyers to find the right part fast.",
    metrics: [
      { value: "High-SKU", label: "technical catalog" },
      { value: "Global", label: "manufacturer" }
    ]
  },
  {
    id: "frontier-coop", tab: "uiux", type: "case",
    name: "Frontier Co-op", industry: "Natural Products Cooperative · DTC", platform: "Adobe Commerce",
    role: "UX Design",
    desc: "Storefront UX for the co-op behind billion-dollar natural product brands like Simply Organic and Aura Cacia.",
    image: "images/proj-frontiercoop.jpg",
    challenge: "A natural-products cooperative needed a storefront experience that could represent multiple owned consumer brands under one coherent shopping experience.",
    owned: ["Designed storefront UX supporting a multi-brand natural products catalog"],
    scope: ["Homepage", "Category navigation"],
    influence: "Structured navigation to let shoppers browse by brand or by category, since customer loyalty in this space skews brand-first.",
    outcome: "A storefront that respects each owned brand's identity while keeping the shopping experience unified.",
    metrics: [
      { value: "Multi-brand", label: "storefront structure" },
      { value: "DTC", label: "natural products" }
    ]
  },
  {
    id: "pt-solutions", tab: "uiux", type: "case",
    name: "PT Solutions", industry: "Physical Therapy Healthcare Network", platform: "Web / Digital",
    role: "UX Design",
    desc: "Digital UX for a national physical therapy network with hundreds of clinical locations.",
    image: "images/proj-ptsolutions.jpg",
    challenge: "Patients needed a fast, low-friction way to find a nearby clinic and book an appointment across a network with hundreds of locations.",
    owned: ["Designed location-finder and appointment-request UX for a multi-location healthcare network"],
    scope: ["Location finder", "Appointment request flow"],
    influence: "Simplified the clinic-finder to lead with location and insurance rather than service type, matching how most patients actually start their search.",
    outcome: "A faster path from \"I need PT\" to a booked appointment, across a very large clinic network.",
    metrics: [
      { value: "Hundreds", label: "of locations supported" },
      { value: "Location-first", label: "finder flow" }
    ]
  },
  {
    id: "afg-distribution", tab: "uiux", type: "case",
    name: "AFG Distribution", industry: "B2B Wholesale Distribution", platform: "Adobe Commerce",
    role: "UX Design",
    desc: "B2B storefront UX for one of North America's largest wholesale distributors in its category.",
    image: "images/proj-afgdistribution.jpg",
    challenge: "Wholesale buyers needed fast, bulk-order-friendly purchasing across a very large distributor catalog.",
    owned: ["Designed B2B storefront UX with bulk ordering and account-based pricing patterns in mind"],
    scope: ["Category navigation", "Bulk order flow"],
    influence: "Prioritized quick-order and reorder patterns over single-item browsing, matching wholesale buying behavior.",
    outcome: "A storefront structured for fast, repeat wholesale purchasing rather than one-off retail browsing.",
    metrics: [
      { value: "Bulk-order", label: "UX patterns" },
      { value: "Large-scale", label: "B2B distributor" }
    ]
  },
  {
    id: "hoveround", tab: "uiux", type: "case",
    name: "Hoveround Mobility Solutions", industry: "Medical Devices · Power Mobility · DTC", platform: "Adobe Commerce",
    role: "UX Design",
    desc: "DTC storefront UX for an iconic national power wheelchair manufacturer.",
    image: "images/proj-hoveround.jpg",
    challenge: "Buyers of power mobility equipment are often navigating insurance, eligibility, and product fit at the same time — a purchase journey with real emotional and financial stakes.",
    owned: ["Designed storefront UX to guide buyers through product selection alongside eligibility and insurance information"],
    scope: ["Product selection flow", "Informational content pages"],
    influence: "Surfaced insurance/eligibility information earlier in the journey instead of only at checkout, to reduce dead-end frustration.",
    outcome: "A calmer, clearer path through a purchase decision that's often stressful and high-stakes for the buyer.",
    metrics: [
      { value: "National", label: "medical device brand" },
      { value: "Guided", label: "purchase journey" }
    ]
  },
  {
    id: "oci", tab: "uiux", type: "case",
    name: "Oklahoma Correctional Industries", industry: "State Government Manufacturing & Industrial Supply", platform: "Adobe Commerce",
    role: "UX Design",
    desc: "B2B storefront UX for a state government manufacturing and industrial supply enterprise.",
    image: "images/proj-oci.jpg",
    challenge: "Government and institutional buyers needed a straightforward way to browse and order manufactured goods and industrial supplies through a compliant B2B process.",
    owned: ["Designed B2B catalog and ordering UX for a state-run manufacturing enterprise"],
    scope: ["Category navigation", "B2B ordering flow"],
    influence: "Kept the ordering flow deliberately simple and form-like, matching how institutional buyers are used to procuring through government vendors.",
    outcome: "A straightforward B2B ordering experience built for institutional, not consumer, buying habits.",
    metrics: [
      { value: "State-run", label: "manufacturing enterprise" },
      { value: "B2B", label: "ordering flow" }
    ]
  },
  {
    id: "hsgi", tab: "uiux", type: "case",
    name: "High Speed Gear", industry: "Tactical Gear · DTC", platform: "Adobe Commerce",
    role: "UX Design",
    desc: "DTC storefront UX for a premier tactical gear manufacturer serving military, law enforcement, and civilian markets.",
    image: "images/proj-hsgi.jpg",
    challenge: "Three very different buyer types — military/LE procurement, agencies, and individual civilian buyers — needed to find the right gear without the storefront feeling built for only one of them.",
    owned: ["Designed category and PDP structure serving both individual and institutional buyers"],
    scope: ["Category navigation", "Product detail page"],
    influence: "Kept technical mil-spec detail available on the PDP without making it the default view, so civilian buyers aren't scared off by procurement-level detail.",
    outcome: "A storefront that serves institutional and individual buyers without compromising either experience.",
    metrics: [
      { value: "Dual-audience", label: "storefront UX" },
      { value: "Worldwide", label: "tactical gear brand" }
    ]
  },
  {
    id: "zip-corvette", tab: "uiux", type: "case",
    name: "Zip Corvette", industry: "Corvette Restoration Parts & Performance", platform: "Adobe Commerce",
    role: "UX Design",
    desc: "E-commerce UX for the leading US authority in Corvette restoration parts.",
    image: "images/proj-zipcorvette.jpg",
    challenge: "Restoration buyers need to find the exact part for a specific Corvette model year — a fitment-driven purchase that generic auto-parts catalogs handle poorly.",
    owned: ["Designed year/model fitment filtering for a Corvette-specific parts catalog"],
    scope: ["Category / fitment filtering", "Product detail page"],
    influence: "Made model-year selection the first step in browsing, not an afterthought filter, since fitment accuracy is the buyer's top concern.",
    outcome: "A parts catalog built around getting restoration buyers to the exact right part for their car's year and trim.",
    metrics: [
      { value: "Fitment-first", label: "catalog structure" },
      { value: "Category authority", label: "in Corvette parts" }
    ]
  },
  {
    id: "icarus-precision", tab: "uiux", type: "case",
    name: "Icarus Precision", industry: "Precision CNC Machining · Firearm Components", platform: "Adobe Commerce",
    role: "UX Design",
    desc: "DTC storefront UX for a high-precision CNC machining and firearm grip module brand.",
    image: "images/proj-icarusprecision.jpg",
    challenge: "Buyers of precision-machined firearm components need confidence in exact compatibility and tolerances before committing to a purchase.",
    owned: ["Designed PDP structure highlighting compatibility and precision specs for CNC-machined components"],
    scope: ["Product detail page", "Category navigation"],
    influence: "Elevated compatibility information to the same visual weight as product photography on the PDP, instead of burying it in a specs tab.",
    outcome: "A storefront that builds buyer confidence around fit and precision before checkout.",
    metrics: [
      { value: "Precision specs", label: "elevated on PDP" },
      { value: "Compatibility-first", label: "product structure" }
    ]
  },
  {
    id: "phoenix-medical", tab: "uiux", type: "case",
    name: "Phoenix Medical Instruments", industry: "Surgical Instruments & Healthcare Equipment · B2B", platform: "Adobe Commerce",
    role: "UX Design",
    desc: "B2B storefront UX for a specialized manufacturer of surgical instruments.",
    image: "images/proj-phoenixmedical.jpg",
    challenge: "Healthcare procurement buyers needed to source specialized surgical instruments with full spec and compliance detail, in a B2B purchasing context.",
    owned: ["Designed B2B catalog and PDP structure for specialized surgical and healthcare equipment"],
    scope: ["Category navigation", "Product detail page"],
    influence: "Prioritized compliance and certification information on the PDP, recognizing that healthcare procurement can't move forward without it.",
    outcome: "A catalog built to support the compliance-driven way healthcare buyers actually purchase equipment.",
    metrics: [
      { value: "Compliance-first", label: "PDP structure" },
      { value: "Specialized", label: "healthcare manufacturer" }
    ]
  },
  {
    id: "outlast-supply", tab: "uiux", type: "case",
    name: "Outlast Supply", industry: "Tactical Gear, Survival & Outdoor Equipment · DTC", platform: "Adobe Commerce",
    role: "UX Design",
    desc: "E-commerce UX for a tactical gear, survival tools, and outdoor equipment retailer.",
    image: "images/proj-outlastsupply.jpg",
    challenge: "A broad, multi-category outdoor/tactical retailer needed navigation that didn't force very different buyer intents — survival prep, tactical gear, everyday outdoor — into one generic structure.",
    owned: ["Designed category structure and PDP templates spanning multiple outdoor and tactical product lines"],
    scope: ["Category navigation", "Product detail page"],
    influence: "Split navigation by use case (survival, tactical, outdoor) rather than product type, matching how different buyer segments actually shop the site.",
    outcome: "A storefront that serves distinct buyer intents without forcing them through the same generic path.",
    metrics: [
      { value: "Use-case nav", label: "across 3+ categories" },
      { value: "Multi-segment", label: "buyer support" }
    ]
  },

  /* ================= TAB 2 — BRAND IDENTITY ================= */
  {
    id: "denali", tab: "brand", type: "case", featured: true,
    name: "Denali Leather Goods", industry: "Leather Goods · Brand 0→1", platform: "Brand Identity",
    role: "Brand Strategy · Identity System",
    desc: "Built a 0→1 identity durable enough for hide-stamping and screens alike.",
    image: "images/b-denali.jpg",
    challenge: "A new leather-goods brand needed an identity that read as elegant and durable without leaning on category clichés — and had to survive being heat-stamped into leather, not just displayed on a screen.",
    owned: [
      "Designed the full visual system — wordmark, seal mark, and typography",
      "Extended the system across print, packaging, and digital applications"
    ],
    scope: ["Logo suite", "Brand style guide", "Social templates", "Stationery"],
    influence: "Defined a primary monochrome palette specifically so the mark stays legible whether it's heat-stamped into leather or rendered on a screen.",
    outcome: "A cohesive, versatile brand ready to scale across physical production and e-commerce channels.",
    metrics: [
      { value: "4", label: "deliverables — logo → stationery" },
      { value: "0→1", label: "brand built from scratch" }
    ]
  },
  {
    id: "bark2earth", tab: "brand", type: "case", featured: true,
    name: "Bark 2 Earth", industry: "Pet Treats & Wellness · Brand 0→1", platform: "Brand Identity",
    role: "Branding · Packaging · Web",
    desc: "Took a pet-wellness brand from logo to shelf-ready packaging to storefront.",
    image: "images/b-bark2earth.jpg",
    challenge: "A natural pet-treats brand needed to stand out on crowded physical and digital shelves against established competitors.",
    owned: [
      "Designed the brand identity system",
      "Built the packaging system across the full product line",
      "Designed the e-commerce website"
    ],
    scope: ["Logo", "Packaging (pouch + box)", "Web design"],
    influence: "Established a unified color code and graphic pattern system to keep brand recognition consistent across every product line.",
    outcome: "A shelf-ready visual identity that signals natural origin and builds consumer trust at the point of purchase.",
    metrics: [
      { value: "3", label: "disciplines — logo, packaging, web" },
      { value: "0→1", label: "brand built from scratch" }
    ]
  },
  {
    id: "biona", tab: "brand", type: "case", featured: true,
    name: "Biona Coffee", industry: "Coffee · Packaging 0→1", platform: "Brand Identity",
    role: "Branding · Packaging",
    desc: "Built an origin-coded packaging system across multiple roasts and countries.",
    image: "images/b-bionacoffee.jpg",
    challenge: "A specialty coffee brand needed packaging that communicated origin (Peru, Colombia) and craft quality instantly, at a shelf glance.",
    owned: [
      "Designed the visual identity and packaging line across multiple origins and roast levels"
    ],
    scope: ["Logo", "Packaging design", "Origin-based color + illustration system"],
    influence: "Designed a labeling and color system by origin so shoppers can make a fast, confident purchase decision at shelf.",
    outcome: "A cohesive, standout packaging family that reinforces the product's premium positioning.",
    metrics: [
      { value: "Multi-origin", label: "packaging system" },
      { value: "0→1", label: "brand built from scratch" }
    ]
  },
  {
    id: "emraw", tab: "brand", type: "case",
    name: "Emraw", industry: "School & Office Supplies · Mass Retail", platform: "Brand Identity + Packaging",
    role: "Branding · Label Design",
    desc: "Branding and packaging for a mass-market school and office supply manufacturer sold nationally.",
    image: "images/b-emraw.jpg",
    challenge: "A supplier selling through national retail chains needed packaging that stood out on a crowded big-box shelf while staying cheap enough to produce at mass-market scale.",
    owned: [
      "Designed the brand identity and product packaging system",
      "Designed retail-ready labels for a multi-SKU product line"
    ],
    scope: ["Logo", "Packaging / label design", "Retail collateral"],
    influence: "Simplified the packaging system to a small, repeatable color-and-icon code, keeping production costs down at mass-market print volumes.",
    outcome: "A shelf-ready identity built to work at national retail scale without a premium-packaging budget.",
    metrics: [
      { value: "National retail", label: "scale" },
      { value: "Multi-SKU", label: "packaging system" }
    ]
  },
  {
    id: "garment-decor-full", tab: "brand", type: "case",
    name: "Garment Decor", industry: "Apparel Screen-Printing & Embroidery · B2B", platform: "Brand Identity + Web",
    role: "Branding · Brand Guidelines · Web Design",
    desc: "Branding, guidelines, and web design for a commercial apparel decoration vendor.",
    image: "images/b-garmentdecor.jpg",
    challenge: "A screen-printing and embroidery vendor needed a brand and website that read as a reliable commercial partner to other businesses, not a small print shop.",
    owned: [
      "Designed the visual identity and brand guidelines",
      "Designed the company website"
    ],
    scope: ["Logo", "Brand guidelines", "Web design"],
    influence: "Set a minimum-order-friendly tone across the site copy and layout, since the brand's core offer needed to read clearly to B2B buyers.",
    outcome: "A brand and site that positions the company as a dependable B2B decoration partner.",
    metrics: [
      { value: "3", label: "deliverables — logo, guidelines, web" },
      { value: "B2B", label: "positioning" }
    ]
  },
  {
    id: "klassen-farm", tab: "brand", type: "case",
    name: "Klassen Farm Products", industry: "Agricultural & Farm Products", platform: "Brand Identity + Web",
    role: "Branding · Web Design",
    desc: "Branding and web design for a specialty agricultural and farm products manufacturer.",
    image: "images/b-klassenfarm.jpg",
    challenge: "A farm products manufacturer needed a brand and website that felt trustworthy to both agricultural buyers and retail customers.",
    owned: [
      "Designed the brand identity",
      "Designed the company website"
    ],
    scope: ["Logo", "Web design"],
    influence: "Balanced the visual identity between agricultural credibility and retail appeal, since the brand serves both audiences.",
    outcome: "A cohesive brand presence that works across the company's agricultural and retail customer base.",
    metrics: [
      { value: "2", label: "deliverables — logo, web" },
      { value: "Dual-audience", label: "brand" }
    ]
  },

  /* ================= TAB 3 — GROWTH MARKETING CREATIVE =================
     Crimson Agility work first, then email marketing clients. */
  {
    id: "crimson-collateral", tab: "growth", type: "case", featured: true,
    name: "Crimson Agility Campaign Assets", industry: "B2B E-Commerce Agency · Crimson Agility", platform: "Digital Marketing",
    role: "Campaign Creative",
    desc: "Built a reusable ad-tile and social system for B2B e-commerce services marketing.",
    image: "images/marketing-collateral-01.jpg",
    challenge: "Needed a coherent graphic identity for paid campaigns and B2B promotions covering e-commerce audits and compliance services.",
    owned: [
      "Built a system of ad templates and social content spanning multiple service lines"
    ],
    scope: ["Ad templates", "Case-study promo graphics", "Campaign visual assets"],
    influence: "Built modular templates the internal team could update with new copy and imagery without breaking layout or brand consistency.",
    outcome: "A versatile marketing asset kit that professionalized the agency's paid and social presence.",
    metrics: [
      { value: "Template system", label: "ads + social" },
      { value: "Multi-service", label: "campaign coverage" }
    ]
  },
  {
    id: "feat", tab: "growth", type: "case", featured: true,
    name: "Feat Clothing", industry: "Apparel · DTC", platform: "Email Marketing",
    role: "Email Design",
    desc: "Built a modular email system to support weekly drops without wearing down the brand's aesthetic.",
    image: "images/email-feat.jpg",
    challenge: "Sustaining a high weekly send cadence without eroding the brand's soft, sustainable visual identity.",
    owned: [
      "Designed templates and campaigns for product launches, seasonal offers, and automated flows"
    ],
    scope: ["Email design", "Copy-to-visual adaptation"],
    influence: "Built a modular system of reusable Figma blocks that cut production time per campaign.",
    outcome: "A consistent, fast-moving visual system that supports a high publishing cadence without losing audience engagement.",
    metrics: [
      { value: "Weekly", label: "send cadence supported" },
      { value: "Modular", label: "reusable Figma blocks" }
    ]
  },
  {
    id: "brumate", tab: "growth", type: "case", featured: true,
    name: "BrüMate", industry: "Drinkware · DTC", platform: "Email Marketing",
    role: "Email Design",
    desc: "Designed color-forward campaigns to showcase a wide multi-variant catalog.",
    image: "images/email-brumate.jpg",
    challenge: "Presenting many color variants and products attractively within high-volume conversion campaigns.",
    owned: [
      "Designed campaigns for launches, holidays, and seasonal promotions"
    ],
    scope: ["Email design"],
    influence: "Standardized grid modules specifically for color variants, making fast visual comparison possible inside the email.",
    outcome: "An efficient email system built to drive conversion across a catalog with high SKU-variant density.",
    metrics: [
      { value: "Grid system", label: "for color-variant SKUs" },
      { value: "Seasonal", label: "campaign calendar" }
    ]
  },
  {
    id: "smithey", tab: "growth", type: "case",
    name: "Smithey Ironware", industry: "Luxury Cookware · DTC", platform: "Email Marketing",
    role: "Email Design",
    desc: "Designed campaigns for a high-end cast iron cookware brand featured across major culinary media.",
    image: "images/email-smithey.jpg",
    challenge: "A heritage cookware brand needed email campaigns that matched its premium, editorial brand voice — product launches and promos that felt like a cooking magazine, not a discount blast.",
    owned: [
      "Designed campaigns for product launches, brand storytelling (maker profiles), and seasonal promotions",
      "Designed recipe-driven campaigns pairing cookware with real dishes"
    ],
    scope: ["Email design", "Recipe + product pairing modules"],
    influence: "Introduced maker-profile campaigns to lean into the brand's craftsmanship story rather than just promoting products.",
    outcome: "An email system that reads as editorial and premium — consistent with a brand featured in national culinary media.",
    metrics: [
      { value: "Editorial tone", label: "campaign design" },
      { value: "Recipe-paired", label: "product campaigns" }
    ]
  },
  {
    id: "12thtribe", tab: "growth", type: "case",
    name: "12th Tribe", industry: "Women's Fashion & Festival Wear · DTC", platform: "Email Marketing",
    role: "Email Design",
    desc: "Designed high-volume campaigns for a national festival and resort-wear fashion retailer.",
    image: "images/email-12thtribe.jpg",
    challenge: "A high-volume fashion retailer needed a constant stream of on-trend campaigns — sales, new arrivals, seasonal collections — without the visual system feeling repetitive.",
    owned: [
      "Designed campaigns for sales events, new arrivals, and seasonal collections (festival, bridal, resort)",
      "Adapted campaign visual treatment to match each collection's distinct mood"
    ],
    scope: ["Email design"],
    influence: "Varied the visual treatment collection-to-collection while keeping a consistent brand frame, to avoid campaign fatigue.",
    outcome: "A high-cadence campaign system that stayed visually fresh across very different product collections.",
    metrics: [
      { value: "High-volume", label: "campaign cadence" },
      { value: "Multi-collection", label: "visual system" }
    ]
  }
];

/* ============================================================
   BRAND_GALLERY — Tier 5 boutique / 0→1 identity work
   (opens as a captioned image, not a full case study)
   ============================================================ */
const BRAND_GALLERY = [
  { id: "massalino", tab: "brand", type: "gallery", name: "Massalino Bakery", image: "images/b-massalino.jpg", caption: " · Branding, packaging, and retail signage for an Italian-style bakery." },
  { id: "brussel", tab: "brand", type: "gallery", name: "Brüssel", image: "images/b-brussel.jpg", caption: " · Branding and retail branding for a restaurant concept." },
  { id: "oggi-pizza", tab: "brand", type: "gallery", name: "Oggi Pizza", image: "images/b-oggipizza.jpg", caption: " · Branding and retail branding for a pizzeria." },
  { id: "arepale", tab: "brand", type: "gallery", name: "Arépale", image: "images/b-arepale.jpg", caption: " · Branding, menu design, and retail branding for a food truck concept." },
  { id: "disfruta", tab: "brand", type: "gallery", name: "Disfruta", image: "images/b-disfruta.jpg", caption: " · Branding, menu design, and branded interior design for a juice bar / coffee shop." },
  { id: "casa-santafe", tab: "brand", type: "gallery", name: "Casa Santafé Hostel", image: "images/b-casasantafe.jpg", caption: " · Branding and signage design for a boutique hostel." },
  { id: "bon-pops", tab: "brand", type: "gallery", name: "Bon Pops", image: "images/b-bonpops.jpg", caption: " · Branding and retail branding for a frozen-pop retail concept." },
  { id: "cuida-tu-mente", tab: "brand", type: "gallery", name: "Cuida tu Mente", image: "images/b-cuidatumente.jpg", caption: " · Branding and retail branding for a mental health services brand." },
  { id: "sunset-coffee", tab: "brand", type: "gallery", name: "Sunset Coffee", image: "images/b-sunsetcoffee.jpg", caption: " · Branding and packaging for a specialty coffee line." },
  { id: "casa-encantos", tab: "brand", type: "gallery", name: "Casa de Encantos — Tea House", image: "images/b-casadeencantos.jpg", caption: " · Branding and packaging for a boutique tea house line." },
  { id: "phila-cup", tab: "brand", type: "gallery", name: "Phila Cup Coffee", image: "images/b-philacup.jpg", caption: " · Logo and packaging design for a Philadelphia coffee brand." },
  { id: "el-paraiso", tab: "brand", type: "gallery", name: "El Paraíso Heladería", image: "images/b-elparaiso.jpg", caption: " · Branding, packaging, and 3D visualization for an ice cream brand." },
  { id: "pawty-animals", tab: "brand", type: "gallery", name: "Pawty Animals", image: "images/b-pawtyanimals.jpg", caption: " · Branding, social media, toy design, packaging, and web design for a pet brand." },
  { id: "fryefit", tab: "brand", type: "gallery", name: "Fryefit", image: "images/b-fryefit.jpg", caption: " · Brand identity for a faith-and-fitness apparel line." }
];


/* ============================================================
   Tabs + grid rendering
   ============================================================ */
let currentTab = "uiux";

const tabsEl = document.getElementById("tabs");
const tabDescEl = document.getElementById("tabDesc");
const gridEl = document.getElementById("projectGrid");
const subgridHeadEl = document.getElementById("subgridHead");
const brandGalleryEl = document.getElementById("brandGallery");

function metricsHTML(metrics){
  if (!metrics || !metrics.length) return "";
  return `<div class="card-metrics">${metrics.map(m => `
    <div><span class="metric-value">${m.value}</span><span class="metric-label">${m.label}</span></div>
  `).join("")}</div>`;
}

function cardHTML(p){
  return `
    <div class="card-media"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
    <div class="card-tags"><span class="card-tag">${p.platform}</span></div>
    <div class="card-body">
      <p class="card-role">${p.role}</p>
      <h3 class="card-name">${p.name}</h3>
      <p class="card-desc">${p.desc}</p>
      ${metricsHTML(p.metrics)}
      <span class="card-cta">view case study <span class="btn-icon" style="width:18px;height:18px;font-size:10px;">↗</span></span>
    </div>
  `;
}

function renderGrid(tab){
  gridEl.innerHTML = "";
  gridEl.classList.toggle("is-dense", tab !== "uiux");

  PROJECTS
    .filter(p => p.tab === tab)
    .forEach(p => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = cardHTML(p);
      card.addEventListener("click", () => openCase(p.id));
      gridEl.appendChild(card);
    });

  observeCards(gridEl.querySelectorAll(".card"));

  const isBrand = tab === "brand";
  subgridHeadEl.hidden = !isBrand;
  brandGalleryEl.innerHTML = "";
  if (isBrand){
    BRAND_GALLERY.forEach(p => {
      const el = document.createElement("div");
      el.className = "subcard";
      el.innerHTML = `
        <div class="subcard-media"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
        <div class="subcard-label">${p.name}</div>
      `;
      el.addEventListener("click", () => openCase(p.id));
      brandGalleryEl.appendChild(el);
    });
    observeCards(brandGalleryEl.querySelectorAll(".subcard"));
  }
}

tabsEl.querySelectorAll(".tab").forEach(tabBtn => {
  tabBtn.addEventListener("click", () => {
    const tab = tabBtn.dataset.tab;
    if (tab === currentTab) return;
    currentTab = tab;

    tabsEl.querySelectorAll(".tab").forEach(t => {
      const isActive = t === tabBtn;
      t.classList.toggle("active", isActive);
      t.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    tabDescEl.textContent = TAB_COPY[tab];
    renderGrid(tab);
  });
});

/* ============================================================
   Clients marquee
   ============================================================ */
function populateMarquee(){
  const track = document.getElementById("marqueeTrack");
  if (!track) return;
  const doubled = [...CLIENTS, ...CLIENTS]; // duplicated for the seamless -50% loop
  track.innerHTML = doubled.map(name => `<span>${name}</span>`).join("");
}

/* ============================================================
   Modal — case study + lightbox
   ============================================================ */
const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function openCase(id){
  const p = PROJECTS.find(x => x.id === id) || BRAND_GALLERY.find(x => x.id === id);
  if (!p) return;
  modal.classList.remove("lightbox");

  if (p.type === "gallery"){
    modal.classList.add("lightbox");
    modalContent.innerHTML = `
      <img class="lightbox-img" src="${p.image}" alt="${p.name}">
      <div class="lightbox-caption"><b>${p.name}</b>${p.caption}</div>
    `;
    openModal();
    return;
  }

  modalContent.innerHTML = `
    <div class="cs-media"><img src="${p.image}" alt="${p.name}"></div>
    <div class="cs-body">
      <div class="cs-head">
        <div class="cs-head-item">client<b>${p.name}</b></div>
        <div class="cs-head-item">industry<b>${p.industry}</b></div>
        <div class="cs-head-item">platform<b>${p.platform}</b></div>
        <div class="cs-head-item">role<b>${p.role}</b></div>
      </div>

      ${p.metrics ? `<div class="cs-metrics">${p.metrics.map(m => `
        <div><span class="metric-value">${m.value}</span><span class="metric-label">${m.label}</span></div>
      `).join("")}</div>` : ""}

      <div class="cs-section">
        <p class="cs-label">.the business challenge</p>
        <p class="cs-text">${p.challenge}</p>
      </div>

      <div class="cs-section">
        <p class="cs-label">.ownership</p>
        <div class="cs-ownership">
          <div class="cs-owner-col">
            <h4>owned</h4>
            <ul>${p.owned.map(o => `<li>${o}</li>`).join("")}</ul>
          </div>
          <div class="cs-owner-col">
            <h4>scope</h4>
            <ul>${p.scope.map(o => `<li>${o}</li>`).join("")}</ul>
          </div>
          <div class="cs-owner-col">
            <h4>influence</h4>
            <ul><li>${p.influence}</li></ul>
          </div>
        </div>
      </div>

      ${p.gallery2 ? `
      <div class="cs-section">
        <p class="cs-label">.more from this campaign</p>
        <div class="cs-gallery"><img src="${p.gallery2}" alt="${p.name} additional work"></div>
      </div>` : ""}

      <div class="cs-section">
        <p class="cs-label">.outcome &amp; impact</p>
        <p class="cs-text">${p.outcome}</p>
      </div>

      <div class="cs-note"><b>Have real numbers for this project?</b> Conversion lift, AOV change, time-to-purchase, client feedback — drop them into the "outcome" field in script.js. Verified metrics will do more for you with recruiters than any copy I can write for you. Also a good spot for a live Figma prototype embed link, if you have one.</div>
    </div>
  `;
  openModal();
}

function openModal(){
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeModal(){
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}
modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ============================================================
   Scroll reveal
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

function observeReveal(nodeList){
  nodeList.forEach(el => revealObserver.observe(el));
}

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry,i) => {
    if (entry.isIntersecting){
      setTimeout(() => entry.target.classList.add("is-in"), i * 60);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function observeCards(nodeList){
  nodeList.forEach(el => cardObserver.observe(el));
}

/* ============================================================
   Theme toggle
   ============================================================ */
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("felix-theme");
if (savedTheme) root.setAttribute("data-theme", savedTheme);

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("felix-theme", next);
});

/* ============================================================
   Nav shadow on scroll (subtle)
   ============================================================ */
const nav = document.getElementById("siteNav");
window.addEventListener("scroll", () => {
  nav.style.top = window.scrollY > 40 ? "12px" : "18px";
}, { passive: true });

/* ============================================================
   Footer year
   ============================================================ */
document.querySelector(".footer-note").innerHTML =
  document.querySelector(".footer-note").innerHTML.replace("{YEAR}", new Date().getFullYear());

/* ============================================================
   Init
   ============================================================ */
// Reveal-on-scroll runs first and independently — a bug in the
// project data or grid rendering below should never be able to
// blank out the rest of the page.
observeReveal(document.querySelectorAll(".hero .reveal, .clients .eyebrow, .work-head, .tabs, .tab-desc, .about .reveal, .contact .reveal"));

try {
  tabDescEl.textContent = TAB_COPY[currentTab];
  populateMarquee();
  renderGrid(currentTab);
} catch (err){
  console.error("Félix portfolio — failed to render tabs/grid/marquee:", err);
}
