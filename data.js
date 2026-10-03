/* ALINEA — Project content in editorial order.
   Add a new object at the front of PROJECTS to publish another project.
   kind: portfolio | concept | upcoming. Never label concepts as client work.
   galleryReady: enable only after uploading all listed images.
   imageBase: set to "" to serve an images/ folder beside these files.
   New cover art appears automatically once its filename is uploaded.
*/
const STUDIO = {"email": "felix@alineabrands.net", "name": "Alinea Brands", "imageBase": "https://alineabrands.net/"};
const PROJECTS = [
{
  "slug": "lies-for-sale",
  "name": "Lies for Sale",
  "sector": "Fashion",
  "kind": "portfolio",
  "status": "Brand project",
  "color": "#d8ded0",
  "imageBase": "",
  "hero": "images/lies-for-sale-logo-poster.jpg",
  "galleryReady": true,
  "gallery": [
    "images/lies-for-sale-01-hoodie-front.jpeg",
    "images/lies-for-sale-02-hoodie-back.jpeg",
    "images/lies-for-sale-03-chaos-tee.jpeg",
    "images/lies-for-sale-04-tank-front.jpeg",
    "images/lies-for-sale-05-tank-back.jpeg",
    "images/lies-for-sale-06-logo-in-context.jpeg",
    "images/lies-for-sale-07-collection-in-context.jpeg",
    "images/lies-for-sale-08-environment.jpeg"
  ],
  "summary": "Brand identity and collection design for Lies for Sale.",
  "tags": [
    "Branding",
    "Logo design",
    "Collection design"
  ],
  "intro": "An identity and collection designed by Félix Patete. The embroidered logo, expressive lettering and monochrome garment graphics carry a shared visual attitude from the brand mark to the clothing.",
  "websiteUrl": "https://www.liesforsale.com/password",
  "sections": [
    {
      "title": "From mark to garment",
      "body": "The identity moves from the embroidered logo to hoodie, T-shirt and tank graphics. Front and back views show how scale, placement and lettering work across the collection."
    },
    {
      "title": "In context",
      "body": "The final images place the identity and garments in their wider visual setting."
    }
  ],
  "heroVideo": "images/lies-for-sale-logo-motion.mp4",
  "credit": "Branding, logo and collection designs by Félix Patete."
},
{
  "slug": "prisma",
  "name": "Prisma Property Care",
  "sector": "Property care",
  "kind": "portfolio",
  "status": "Case study coming soon",
  "color": "#d8ded0",
  "imageBase": "",
  "hero": "images/prisma-cover.png",
  "galleryReady": false,
  "gallery": [],
  "summary": "A higher standard of clean.",
  "tags": [
    "Branding",
    "Visual identity"
  ],
  "intro": "A higher standard of clean. Branding for Prisma Property Care. The full branding showcase and additional images will be added soon.",
  "websiteUrl": "https://prismapropertycare.com",
  "sections": [],
  "coverReady": true
},
{
  "slug": "solferino",
  "liveUrl": "https://patetefelix.github.io/Solferino/",
  "name": "Solferino",
  "year": "2026",
  "sector": "Spirits",
  "kind": "concept",
  "status": "Self-initiated concept",
  "color": "#e5d9cb",
  "imageBase": "",
  "hero": "images/solferino-cover.png",
  "galleryReady": true,
  "gallery": [
    "images/solferino-01-tequila-label.png",
    "images/solferino-02-mezcal.png",
    "images/solferino-03-rum-label.png",
    "images/solferino-04-whisky-label.png",
    "images/solferino-05-vodka-label.png",
    "images/solferino-06-landscape.png",
    "images/solferino-07-barrel-room.png",
    "images/solferino-08-serving-ritual.png",
    "images/solferino-09-website-home.png",
    "images/solferino-10-website-collection.png",
    "images/solferino-11-website-expression.png",
    "images/solferino-12-website-story.png",
    "images/solferino-13-website-cocktails.png"
  ],
  "summary": "One house. Many expressions. A spirits identity exploring material, restraint, and character.",
  "tags": [
    "Brand concept",
    "Packaging direction"
  ],
  "intro": "A self-initiated spirits brand system built around material, typography and a shared bottle silhouette. Six expressions come together through distinct labels, warm art direction and an explorable digital experience.",
  "credit": "Self-initiated concept by Félix Patete. The products and production scenes are part of the fictional brand presentation.",
  "sections": [
    {
      "title": "One house. Six expressions.",
      "body": "Tequila, mezcal, rum, whisky, anís and corn vodka share a recognizable bottle silhouette. Label color and typography give each expression its own character within the family."
    },
    {
      "title": "Material and atmosphere",
      "body": "Reeded glass, cream labels, deep green and amber tones establish the visual language. Landscape, cellar and cocktail imagery extend it into a complete brand presentation."
    },
    {
      "title": "A digital expression",
      "body": "The website brings the collection, individual expressions, brand story and serving rituals into one experience. Explore the live demo above."
    },
    {
      "title": "Scope note",
      "body": "Solferino is a fictional, self-initiated design project. Product descriptions and production imagery are part of the brand concept, not claims about a real distillery."
    }
  ],
  "galleryAlts": [
    "Tequila Blanco label and glass detail",
    "Mezcal Joven bottle",
    "Ron Añejo label",
    "Whisky de Malta label",
    "Vodka de Maíz label",
    "Agave landscape brand imagery",
    "Barrel room brand imagery",
    "Cocktail serving ritual",
    "Website homepage",
    "Website collection",
    "Website expression page",
    "Website brand story",
    "Website cocktail page"
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
  "imageBase": "",
  "hero": "images/costella-cover.png",
  "galleryReady": true,
  "gallery": [
    "images/costella-01-logo.png",
    "images/costella-02-flavor-lineup.png",
    "images/costella-03-type-color-icons.png",
    "images/costella-04-brand-touchpoints.png",
    "images/costella-05-packaging-trio.png",
    "images/costella-06-coastal-toast.jpg",
    "images/costella-07-aperitivo-cart.png",
    "images/costella-08-cocktail-postcards.png",
    "images/costella-09-green-flavors.png",
    "images/costella-10-campaign-strip01.png",
    "images/costella-10-campaign-strip02.png",
    "images/costella-10-campaign-strip03.png",
    "images/costella-10-campaign-strip04.png",
    "images/costella-11-desktop-experience.jpg",
    "images/costella-12-homepage.png",
    "images/costella-13-website-pages.png",
    "images/costella-14-studio-pair01.png",
    "images/costella-14-studio-pair02.png",
    "images/costella-15-evening-aperitivo.png",
    "images/costella-16-flavor-worlds01.png",
    "images/costella-16-flavor-worlds02.png",
    "images/costella-16-flavor-worlds03.png",
    "images/costella-16-flavor-worlds04.png",
    "images/costella-17-brand-world-collage.png",
    "images/costella-18-summer-table.png"
  ],
  "summary": "Italian aperitivo, zero proof. Nine flavors. Three lines. One complete brand world.",
  "tags": [
    "Brand identity",
    "Packaging",
    "Illustration"
  ],
  "intro": "Born between two seas. Costella brings Italian aperitivo culture and Latin spirit into a fictional zero-proof brand, expressed through nine flavor identities, coastal illustration, packaging and a complete digital world.",
  "credit": "Designed solo by Félix Patete. Self-initiated, not client work.",
  "sections": [
    {
      "title": "The idea",
      "body": "Pleasure never needed alcohol to be the point. Costella explores how a zero-proof aperitivo can feel generous, expressive and rooted in place. This self-initiated brand study connects the identity on the can with the world around it."
    },
    {
      "title": "One identity. Many destinations.",
      "body": "A bold wordmark, a shared label structure and a distinctive color for each flavor keep the range connected. Coastal illustrations draw on vintage European travel postcards and hotel luggage stamps, giving each expression its own destination."
    },
    {
      "title": "Scope note",
      "body": "Costella is a fictional, self-initiated concept by Félix Patete, not client work. Packaging, product claims, campaign scenes and shopping interfaces belong to the concept presentation; no real production, distribution or sales are attached to it."
    }
  ],
  "behanceUrl": "https://www.behance.net/gallery/255888929/COSTELLA-Zero-Proof-Aperitivo-Brand-Packaging",
  "liveUrl": "https://patetefelix.github.io/costella/",
  "galleryAlts": [
    "Costella blue wordmark and starburst on cream",
    "Nine Costella flavor identities in a coastal setting",
    "Costella typography, color palette and flavor icons",
    "Costella tote bags, coasters, notebook and can",
    "Amalfi Spritz, Peach Rosemary and Negroni Bloom packaging",
    "Two hands raise Amalfi Spritz and Peach Rosemary cans above the sea",
    "Costella branded aperitivo cart in a coastal garden",
    "Five illustrated cocktail postcards in the Costella brand world",
    "Green Costella cans on a sunlit coastal terrace",
    "Amalfi Spritz with orange cocktails",
    "Coastal aperitivo lifestyle scene",
    "Negroni Bloom with a red cocktail",
    "Chinotto Nero in a dark studio scene",
    "Costella website displayed on two desktop monitors",
    "Full Costella website homepage design",
    "Costella website pages shown side by side",
    "Negroni Bloom studio still life",
    "Peach Rosemary studio still life",
    "Chinotto Nero and Negroni Bloom on an evening waterfront table",
    "Fresa Basil Smash campaign scene",
    "Grapefruit and Lavender campaign scene",
    "Moscow Mule Zero with coastal cocktails",
    "Passionfruit Mojito tropical campaign scene",
    "Costella website, lifestyle photography and Amalfi campaign graphic",
    "Fresa Basil Smash and Peach Rosemary on a sunny coastal table"
  ],
  "showcase": [
    {
      "title": "A recognizable world",
      "body": "The wordmark, palette and flavor icons establish a shared visual language, from the full range to the smallest branded touchpoint.",
      "start": 0,
      "end": 4,
      "groups": [
        0,
        1,
        2,
        3
      ]
    },
    {
      "title": "From the can to the coast",
      "body": "A consistent packaging structure makes room for individual flavor personalities. Campaign compositions extend those colors and destinations into an aperitivo ritual.",
      "start": 4,
      "end": 13,
      "groups": [
        4,
        5,
        6,
        7,
        8,
        9
      ]
    },
    {
      "title": "The brand, beyond the shelf",
      "body": "The digital experience carries the same illustration, product hierarchy and coastal atmosphere into an explorable website.",
      "start": 13,
      "end": 16,
      "groups": [
        10,
        11,
        12
      ]
    },
    {
      "title": "Different flavors. One Costella.",
      "body": "Studio still lifes, evening scenes and sunlit tables demonstrate how the brand can change mood while remaining recognizable.",
      "start": 16,
      "end": 25,
      "groups": [
        13,
        14,
        15,
        16,
        17
      ]
    }
  ],
  "galleryGroups": [
    {
      "indices": [
        0
      ],
      "columns": 1
    },
    {
      "indices": [
        1
      ],
      "columns": 1
    },
    {
      "indices": [
        2
      ],
      "columns": 1
    },
    {
      "indices": [
        3
      ],
      "columns": 1
    },
    {
      "indices": [
        4
      ],
      "columns": 1
    },
    {
      "indices": [
        5
      ],
      "columns": 1
    },
    {
      "indices": [
        6
      ],
      "columns": 1
    },
    {
      "indices": [
        7
      ],
      "columns": 1
    },
    {
      "indices": [
        8
      ],
      "columns": 1
    },
    {
      "indices": [
        9,
        10,
        11,
        12
      ],
      "columns": 4
    },
    {
      "indices": [
        13
      ],
      "columns": 1
    },
    {
      "indices": [
        14
      ],
      "columns": 1
    },
    {
      "indices": [
        15
      ],
      "columns": 1
    },
    {
      "indices": [
        16,
        17
      ],
      "columns": 2
    },
    {
      "indices": [
        18
      ],
      "columns": 1
    },
    {
      "indices": [
        19,
        20,
        21,
        22
      ],
      "columns": 4
    },
    {
      "indices": [
        23
      ],
      "columns": 1
    },
    {
      "indices": [
        24
      ],
      "columns": 1
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
