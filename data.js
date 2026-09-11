/* ALINEA — Project content, ordered newest to oldest.
   Add a new object at the front of PROJECTS to publish another project.
   kind: portfolio | concept | upcoming. Never label concepts as client work.
   galleryReady: enable only after uploading all listed images.
   imageBase: set to "" to serve an images/ folder beside these files.
   New cover art appears automatically once its filename is uploaded.
*/
const STUDIO = {"email": "hello@alineabrands.com", "name": "Alinea Brands", "imageBase": "https://patetefelix.github.io/alineabrands/"};
const PROJECTS = [
  {
    "slug": "solferino",
    "name": "Solferino",
    "year": "2026",
    "sector": "Spirits",
    "kind": "upcoming",
    "status": "In development",
    "color": "#e5d9cb",
    "imageBase": "https://patetefelix.github.io/alineabrands/",
    "hero": "images/solferino-cover.jpg",
    "galleryReady": false,
    "gallery": [
      "images/solferino-01.jpg",
      "images/solferino-02.jpg",
      "images/solferino-03.jpg",
      "images/solferino-04.jpg",
      "images/solferino-05.jpg",
      "images/solferino-06.jpg"
    ],
    "summary": "One house. Many expressions. A spirits identity exploring material, restraint, and character.",
    "tags": [
      "Brand concept",
      "Packaging direction"
    ],
    "intro": "An upcoming, self-initiated spirits brand concept. A shared identity across distinct expressions, with the liquid and materials leading the visual story.",
    "credit": "Self-initiated concept in development. Final designs and project scope are not yet published.",
    "sections": [
      {
        "title": "The starting point",
        "body": "The working direction imagines Solferino as a house that gathers several traditional spirits under one identity. Mexico is the proposed symbolic home, with each expression keeping its own origin story. This is a fictional brand narrative, not a claim about a real producer."
      },
      {
        "title": "One family, distinct character",
        "body": "A shared reeded bottle silhouette is the starting point. Glass tint, label stock, and the expression name would distinguish each bottle; a restrained crimson accent would tie the family together."
      },
      {
        "title": "The proposed range",
        "items": [
          "Tequila Blanco — clear glass, bone label, black ink",
          "Mezcal Joven — smoke-grey glass, charcoal label, bone ink",
          "Rum Añejo — amber glass, cane or espresso tones",
          "Whisky — honey-amber glass, dark label, gold accents",
          "Anís — pale green glass, sage and bone tones"
        ]
      },
      {
        "title": "A system in progress",
        "body": "The proposed label pairs a dominant western-style wordmark with a restrained script expression name, a small crimson house mark, and concise origin and method information. This direction is still being developed; the finished case study will follow."
      }
    ]
  },
  {
    "slug": "costella",
    "name": "Costella",
    "year": "2026",
    "sector": "Food & Drink",
    "kind": "concept",
    "status": "Self-initiated concept",
    "color": "#edc5a3",
    "imageBase": "https://patetefelix.github.io/alineabrands/",
    "hero": "images/costella-cover.jpg",
    "galleryReady": false,
    "gallery": [
      "images/costella-01.jpg",
      "images/costella-02.jpg",
      "images/costella-03.jpg",
      "images/costella-04.jpg",
      "images/costella-05.jpg",
      "images/costella-06.jpg",
      "images/costella-07.jpg",
      "images/costella-08.jpg",
      "images/costella-09.jpg"
    ],
    "summary": "Italian aperitivo, zero proof. Nine flavors. Three lines. One complete brand world.",
    "tags": [
      "Brand identity",
      "Packaging",
      "Illustration"
    ],
    "intro": "A complete brand system for a fictional 0.0% ABV aperitivo — logo, packaging, illustration system, and a landing page design — built solo, self-initiated, in three days.",
    "credit": "Designed solo by Félix Patete. Self-initiated, not client work.",
    "sections": [
      {
        "title": "The brief",
        "body": "Set for myself, not a client: could I build a beverage brand with the depth of a real engagement — not just a can, but nine full flavor identities, a working ingredient and icon system, and a homepage design — inside a self-imposed three-day window?"
      },
      {
        "title": "The concept",
        "body": "Costella is Italian soul and Latin spirit, poured without compromise. The idea: pleasure never needed the alcohol to be the point. Nine flavors across three lines — Classic Zero, a CBD-infused line, and a Premium Reserve tier in amber glass — each one an aperitivo built to the same bitter-bright-complex curve as its alcoholic ancestor, just with the alcohol stripped out and nothing else softened."
      },
      {
        "title": "The illustration system",
        "body": "Every flavor’s packaging centers on a hand-painted illustration of the real coastline that inspired it. The style is drawn directly from vintage European travel postcards and hotel luggage stamps — the small, saturated destination labels that once marked a well-traveled suitcase — reimagined as a “window” sitting quietly behind each can’s typography rather than competing with it.",
        "items": [
          "Amalfi Spritz — Amalfi Coast, Italy",
          "Moscow Mule Zero — French Riviera",
          "Passionfruit Mojito — Rio de Janeiro, Brazil",
          "Fresa Basil Smash — Algarve, Portugal",
          "Bergamotto & Sage — Calabria, Italy",
          "Negroni Bloom — Venetian/Tuscan coast",
          "Chinotto Nero — Ligurian coast, Italy",
          "Peach Rosemary — Greek islands",
          "Grapefruit & Lavender — Provence, France"
        ]
      },
      {
        "title": "The system",
        "items": [
          "Logo and wordmark, with icon lockup options",
          "Nine flavor identities across three product lines",
          "Full label system: front panel, tasting notes, real ingredient lists, nutrition facts, allergen disclosures, barcode",
          "A hand-drawn ingredient and wellness icon set",
          "Campaign photography direction, studio and lifestyle, each shot grounded in its flavor’s coastline",
          "A homepage design mockup — a full visual design pass for how the brand would live online, not a deployed or functioning site"
        ]
      },
      {
        "title": "Scope note",
        "body": "Costella is a self-initiated concept project, not client work — no real production, distribution, or sales are attached to it. Built as a personal exercise in taking a brand idea the full distance: from a name and a color story to a system complete enough to imagine on an actual shelf."
      }
    ]
  },
  {
    "slug": "massalino-bakery",
    "name": "Massalino Trattoria",
    "year": "2021",
    "sector": "Hospitality",
    "tags": [
      "Branding",
      "Packaging",
      "Retail Branding"
    ],
    "hero": "images/massalino-thumb.jpeg",
    "gallery": [
      "images/massalino-01.png",
      "images/massalino-02.jpg",
      "images/massalino-03.jpg",
      "images/massalino-04.jpg",
      "images/massalino-05.png",
      "images/massalino-06.jpg",
      "images/massalino-07.jpg",
      "images/massalino-08.jpg",
      "images/massalino-09.jpg",
      "images/massalino-10.jpg",
      "images/massalino-11.jpg",
      "images/massalino-12.jpg",
      "images/massalino-13.jpg",
      "images/massalino-14.jpg",
      "images/massalino-14.png",
      "images/massalino-15.jpg",
      "images/massalino-16.jpg",
      "images/massalino-17.jpg",
      "images/massalino-18.jpg",
      "images/massalino-19.jpeg",
      "images/massalino-20.jpg",
      "images/massalino-21.jpg",
      "images/massalino-22.jpeg",
      "images/massalino-22.jpg",
      "images/massalino-23.jpeg",
      "images/massalino-23.jpg",
      "images/massalino-24.jpg",
      "images/massalino-25.jpg",
      "images/massalino-26.jpg",
      "images/massalino-27.jpg",
      "images/massalino-28.jpg",
      "images/massalino-29.jpg",
      "images/massalino-30.jpg"
    ],
    "summary": "Branding, packaging, and retail signage for an Italian-style bakery.",
    "intro": "An Italian-style bakery needed a brand that could carry from pizza boxes to storefront signage to a full retail interior presence.",
    "approach": [
      "Designed the brand identity",
      "Designed packaging (menus, pizza boxes)",
      "Designed retail signage and storefront branding"
    ],
    "deliverables": [
      "Logo",
      "Packaging",
      "Retail signage"
    ],
    "outcome": "A brand that reads consistently from the menu in hand to the storefront on the street.",
    "metrics": [
      {
        "v": "3",
        "l": "touchpoints — packaging, signage, retail"
      },
      {
        "v": "0→1",
        "l": "brand built from scratch"
      }
    ],
    "color": "#e6bc47",
    "status": "Brand study",
    "kind": "portfolio",
    "prefix": "massalino",
    "imageBase": "https://patetefelix.github.io/portfolio/",
    "galleryReady": true,
    "sections": [
      {
        "title": "The brief",
        "body": "An Italian-style bakery needed a brand that could carry from pizza boxes to storefront signage to a full retail interior presence."
      },
      {
        "title": "The approach",
        "items": [
          "Designed the brand identity",
          "Designed packaging (menus, pizza boxes)",
          "Designed retail signage and storefront branding"
        ]
      },
      {
        "title": "The system",
        "items": [
          "Logo",
          "Packaging",
          "Retail signage"
        ]
      },
      {
        "title": "The result",
        "body": "A brand that reads consistently from the menu in hand to the storefront on the street."
      }
    ]
  },
  {
    "slug": "el-paraiso-heladeria",
    "name": "El Paraíso Heladería",
    "year": "2018",
    "sector": "Food & Drink",
    "tags": [
      "Branding",
      "Packaging",
      "3D Visualization"
    ],
    "hero": "images/paraiso-thumb.jpg",
    "gallery": [
      "images/paraiso-01.jpeg",
      "images/paraiso-02.jpg",
      "images/paraiso-03.png",
      "images/paraiso-04.png",
      "images/paraiso-05.jpg",
      "images/paraiso-06.jpg",
      "images/paraiso-07.gif",
      "images/paraiso-08.jpg",
      "images/paraiso-09.jpg",
      "images/paraiso-10.gif",
      "images/paraiso-11.jpg",
      "images/paraiso-12.jpg",
      "images/paraiso-14.jpg",
      "images/paraiso-14.png",
      "images/paraiso-15.png",
      "images/paraiso-16.jpg",
      "images/paraiso-17.png",
      "images/paraiso-19.png",
      "images/paraiso-20.jpg",
      "images/paraiso-21.jpg"
    ],
    "summary": "Branding, packaging, and 3D visualization for an ice cream brand.",
    "intro": "An ice cream brand needed vibrant packaging plus 3D visualization to pitch the concept before physical production.",
    "approach": [
      "Designed the brand identity and packaging line",
      "Produced 3D visualizations to pitch packaging before print production"
    ],
    "deliverables": [
      "Logo",
      "Packaging design",
      "3D visualization"
    ],
    "outcome": "A vibrant packaging identity, validated visually before committing to print.",
    "metrics": [
      {
        "v": "0→1",
        "l": "brand built from scratch"
      }
    ],
    "color": "#c4c8ed",
    "status": "Brand study",
    "kind": "portfolio",
    "prefix": "paraiso",
    "imageBase": "https://patetefelix.github.io/portfolio/",
    "galleryReady": true,
    "sections": [
      {
        "title": "The brief",
        "body": "An ice cream brand needed vibrant packaging plus 3D visualization to pitch the concept before physical production."
      },
      {
        "title": "The approach",
        "items": [
          "Designed the brand identity and packaging line",
          "Produced 3D visualizations to pitch packaging before print production"
        ]
      },
      {
        "title": "The system",
        "items": [
          "Logo",
          "Packaging design",
          "3D visualization"
        ]
      },
      {
        "title": "The result",
        "body": "A vibrant packaging identity, validated visually before committing to print."
      }
    ]
  },
  {
    "slug": "casa-de-encantos",
    "name": "Casa de Encantos",
    "year": "2022",
    "sector": "Food & Drink",
    "tags": [
      "Branding",
      "Packaging"
    ],
    "hero": "images/casaencantos-thumb.jpg",
    "gallery": [
      "images/casaencantos-01.jpg",
      "images/casaencantos-02.jpg",
      "images/casaencantos-03.jpg",
      "images/casaencantos-04.jpg",
      "images/casaencantos-05.jpg",
      "images/casaencantos-06.jpg",
      "images/casaencantos-07.jpg",
      "images/casaencantos-08.jpg",
      "images/casaencantos-09.jpg",
      "images/casaencantos-10.jpg",
      "images/casaencantos-11.jpg",
      "images/casaencantos-12.jpg",
      "images/casaencantos-13.jpg",
      "images/casaencantos-14.jpg",
      "images/casaencantos-15.jpg",
      "images/casaencantos-16.jpg"
    ],
    "summary": "An apothecary-style herbal tea line — Valerian, Passionflower, Lemonbalm.",
    "intro": "A boutique tea house needed packaging that felt more like an apothecary shelf than a supermarket aisle — each blend (Valerian, Passionflower, Lemonbalm) needed its own identity within one coherent family.",
    "approach": [
      "Designed the brand identity for the tea house",
      "Designed a box packaging system differentiating each herbal blend by color while keeping one shared brand language"
    ],
    "deliverables": [
      "Logo",
      "Packaging design",
      "Blend differentiation system"
    ],
    "outcome": "A packaging family that reads as considered and apothecary-grade rather than mass-market.",
    "metrics": [
      {
        "v": "3",
        "l": "herbal blends packaged"
      },
      {
        "v": "0→1",
        "l": "brand built from scratch"
      }
    ],
    "color": "#b5bf98",
    "status": "Brand study",
    "kind": "portfolio",
    "prefix": "casaencantos",
    "imageBase": "https://patetefelix.github.io/portfolio/",
    "galleryReady": true,
    "sections": [
      {
        "title": "The brief",
        "body": "A boutique tea house needed packaging that felt more like an apothecary shelf than a supermarket aisle — each blend (Valerian, Passionflower, Lemonbalm) needed its own identity within one coherent family."
      },
      {
        "title": "The approach",
        "items": [
          "Designed the brand identity for the tea house",
          "Designed a box packaging system differentiating each herbal blend by color while keeping one shared brand language"
        ]
      },
      {
        "title": "The system",
        "items": [
          "Logo",
          "Packaging design",
          "Blend differentiation system"
        ]
      },
      {
        "title": "The result",
        "body": "A packaging family that reads as considered and apothecary-grade rather than mass-market."
      }
    ]
  },
  {
    "slug": "humboldt-brewery",
    "name": "Humboldt Brewery — Obscura",
    "year": "2022",
    "sector": "Spirits",
    "tags": [
      "Branding",
      "Packaging"
    ],
    "hero": "images/humboldt-thumb.jpg",
    "gallery": [
      "images/humboldt-01.jpg",
      "images/humboldt-02.jpg",
      "images/humboldt-03.png",
      "images/humboldt-04.png",
      "images/humboldt-05.png",
      "images/humboldt-06.png",
      "images/humboldt-07.jpg",
      "images/humboldt-08.jpg",
      "images/humboldt-09.png",
      "images/humboldt-10.png",
      "images/humboldt-11.png",
      "images/humboldt-12.jpg",
      "images/humboldt-13.jpg",
      "images/humboldt-14.jpg",
      "images/humboldt-16.jpg",
      "images/humboldt-17.png",
      "images/humboldt-18.png",
      "images/humboldt-19.jpg",
      "images/humboldt-20.jpg",
      "images/humboldt-21.png",
      "images/humboldt-22.jpg",
      "images/humboldt-23.jpg",
      "images/humboldt-24.png",
      "images/humboldt-25.png"
    ],
    "summary": "Label design for Obscura, a Vienna-style craft lager.",
    "intro": "A craft brewery needed a bottle label with the confidence and legibility of an established beer brand for the release of Obscura, its Vienna-style lager.",
    "approach": [
      "Designed the bottle label and wordmark treatment",
      "Balanced classic brewery cues (crest-style lockup) with a distinct color story for the Obscura release"
    ],
    "deliverables": [
      "Label design",
      "Wordmark"
    ],
    "outcome": "A label that reads as craft and established at once, ready to sit on a shelf next to category leaders.",
    "metrics": [
      {
        "v": "1",
        "l": "flagship label shipped"
      },
      {
        "v": "Craft",
        "l": "beverage packaging"
      }
    ],
    "color": "#b9ced5",
    "status": "Brand study",
    "kind": "portfolio",
    "prefix": "humboldt",
    "imageBase": "https://patetefelix.github.io/portfolio/",
    "galleryReady": true,
    "sections": [
      {
        "title": "The brief",
        "body": "A craft brewery needed a bottle label with the confidence and legibility of an established beer brand for the release of Obscura, its Vienna-style lager."
      },
      {
        "title": "The approach",
        "items": [
          "Designed the bottle label and wordmark treatment",
          "Balanced classic brewery cues (crest-style lockup) with a distinct color story for the Obscura release"
        ]
      },
      {
        "title": "The system",
        "items": [
          "Label design",
          "Wordmark"
        ]
      },
      {
        "title": "The result",
        "body": "A label that reads as craft and established at once, ready to sit on a shelf next to category leaders."
      }
    ]
  },
  {
    "slug": "phila-cup-coffee",
    "name": "Phila Cup Coffee",
    "year": "2019",
    "sector": "Food & Drink",
    "tags": [
      "Logo Design",
      "Packaging"
    ],
    "hero": "images/philacup-thumb.png",
    "summary": "Logo and packaging design for a Philadelphia coffee brand.",
    "intro": "A Philadelphia-based coffee brand needed a logo and packaging system that felt local and craft-forward.",
    "approach": [
      "Designed the logo",
      "Designed the packaging system"
    ],
    "deliverables": [
      "Logo design",
      "Packaging design"
    ],
    "outcome": "A local, craft-forward identity for a city-rooted coffee brand.",
    "metrics": [
      {
        "v": "0→1",
        "l": "brand built from scratch"
      }
    ],
    "color": "#e7b0a8",
    "status": "Brand study",
    "kind": "portfolio",
    "prefix": "philacup",
    "gallery": [
      "images/philacup-01.jpg",
      "images/philacup-02.jpg",
      "images/philacup-03.jpg",
      "images/philacup-04.jpg",
      "images/philacup-05.jpg",
      "images/philacup-06.jpg",
      "images/philacup-07.png"
    ],
    "imageBase": "https://patetefelix.github.io/portfolio/",
    "galleryReady": true,
    "sections": [
      {
        "title": "The brief",
        "body": "A Philadelphia-based coffee brand needed a logo and packaging system that felt local and craft-forward."
      },
      {
        "title": "The approach",
        "items": [
          "Designed the logo",
          "Designed the packaging system"
        ]
      },
      {
        "title": "The system",
        "items": [
          "Logo design",
          "Packaging design"
        ]
      },
      {
        "title": "The result",
        "body": "A local, craft-forward identity for a city-rooted coffee brand."
      }
    ]
  }
];

/* Illustrative planning scopes, not fixed quotes or historical project durations.
   Adjust these ranges to your working capacity before publishing an offer. */
const SCOPE_GUIDES = [
 { id:'identity', name:'Find your identity', range:'5–6 weeks', sampleWeeks:5,
   fit:'You have a product and a clear audience, but the brand still feels pieced together.',
   result:'A focused identity system your team can use consistently.',
   includes:['Positioning and personality direction','Logo suite, typography, and color palette','Core identity guidelines and export files'],
   boundary:'Packaging development, naming exploration, and campaign production can be scoped separately.',
   input:'Bring your product story, audience, existing assets, and one person who can consolidate feedback.',
   proof:'phila-cup-coffee', proofLabel:'See identity carried into packaging: Phila Cup',
   stages:[
    {name:'Discovery & alignment',duration:'1 week',start:1,span:1,output:'A shared brief, audience focus, and creative direction.',decision:'Agree on what the brand should communicate.'},
    {name:'Identity design',duration:'2–3 weeks',start:2,span:2,output:'Logo, typography, color, and application concepts.',decision:'Choose a direction and consolidate refinements.'},
    {name:'Guidelines & handoff',duration:'1 week',start:4,span:1,output:'An organized identity toolkit and usage guidance.',decision:'Confirm the final files and priority applications.'},
    {name:'Review allowance',duration:'1 week',start:5,span:1,buffer:true,output:'Room for feedback and final alignment.',decision:'Keep one consolidated response per review.'}
   ]},
 { id:'shelf', name:'Get ready for the shelf', range:'7–10 weeks', sampleWeeks:8,
   fit:'You’re launching a consumer product and need the identity and packaging to tell one story.',
   result:'A coherent brand and packaging family for an agreed set of products.',
   includes:['Positioning and core visual identity','A master packaging design and agreed SKU adaptations','Brand guidelines and artwork handoff to your printer'],
   boundary:'The proposal defines pack formats and SKU count. Printing, manufacturing, photography, and specialist label review are separate.',
   input:'Bring pack dimensions or supplier dielines, the product range, approved label copy, and your launch target.',
   proof:'casa-de-encantos', proofLabel:'See a packaging family: Casa de Encantos',
   stages:[
    {name:'Discovery & shelf context',duration:'1–2 weeks',start:1,span:1,output:'A clear brief, category context, and product hierarchy.',decision:'Confirm the audience, positioning, and product range.'},
    {name:'Visual identity',duration:'2–3 weeks',start:2,span:3,output:'An identity direction shown in a packaging context.',decision:'Approve the core direction before building the range.'},
    {name:'Packaging system',duration:'2–3 weeks',start:5,span:2,output:'Master pack design and agreed flavor or SKU variants.',decision:'Review hierarchy, copy, and the family as a whole.'},
    {name:'Artwork & handoff',duration:'1 week',start:7,span:1,output:'Final artwork prepared to agreed supplier specifications.',decision:'Confirm final copy and technical requirements with your supplier.'},
    {name:'Review allowance',duration:'1 week',start:8,span:1,buffer:true,output:'Room for consolidated feedback and final checks.',decision:'Complete approvals before files are released.'}
   ]},
 { id:'world', name:'Build a brand world', range:'9–13 weeks', sampleWeeks:11,
   fit:'Your range needs a richer identity, a distinctive image language, and room to grow.',
   result:'A connected system across identity, packaging, and selected brand applications.',
   includes:['Positioning, personality, and core identity','Packaging architecture for an agreed product range','Illustration or art direction and selected launch applications','Guidelines for extending the system'],
   boundary:'Custom photography, animation, extra SKUs, and specialist production are defined separately. This scope is branding, not a website build.',
   input:'Bring your range roadmap, priority launch channels, production partners, and the people who need to approve the direction.',
   proof:'costella', proofLabel:'Explore a self-initiated brand world: Costella',
   stages:[
    {name:'Strategy & alignment',duration:'1–2 weeks',start:1,span:1,output:'A focused proposition and a shared creative brief.',decision:'Agree on the audience, ambition, and range architecture.'},
    {name:'Identity development',duration:'2–3 weeks',start:2,span:3,output:'The core verbal and visual direction.',decision:'Choose the system the wider world will build on.'},
    {name:'Packaging family',duration:'3–4 weeks',start:5,span:3,output:'Master packaging and agreed range adaptations.',decision:'Approve the hierarchy and consistency across the range.'},
    {name:'Brand applications',duration:'1–2 weeks',start:8,span:2,output:'Agreed illustration, art direction, or launch applications.',decision:'Confirm how the brand shows up beyond the pack.'},
    {name:'Guidelines & handoff',duration:'1 week',start:10,span:1,output:'The files and guidance needed to use the system.',decision:'Review the toolkit and final deliverables.'},
    {name:'Review allowance',duration:'1 week',start:11,span:1,buffer:true,output:'Room for final review and alignment.',decision:'Complete one consolidated final response.'}
   ]}
];
