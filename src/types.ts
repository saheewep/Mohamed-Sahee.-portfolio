export interface Project {
  id: number;
  title: string;
  category: 'logo' | 'packaging' | 'poster' | 'social' | 'web';
  categoryLabel: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  details: string[];
  year: string;
}

export interface Skill {
  id: number;
  name: string;
  category: 'graphic' | 'software' | 'web';
  proficiency: number; // For stars (1-5) or percentage
}

export interface TimelineItem {
  id: number;
  type: 'experience' | 'education' | 'certification';
  title: string;
  subtitle: string;
  date: string;
  details: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export const SKILLS_DATA: Skill[] = [
  // Software Skills
  { id: 1, name: "Adobe Photoshop", category: "software", proficiency: 5 },
  { id: 2, name: "Adobe Illustrator", category: "software", proficiency: 5 },
  { id: 11, name: "Adobe InDesign", category: "software", proficiency: 4 },
  { id: 12, name: "Canva", category: "software", proficiency: 5 },
  
  // Graphic Design Skills
  { id: 3, name: "Logo Design", category: "graphic", proficiency: 5 },
  { id: 4, name: "Social Media Post Design", category: "graphic", proficiency: 5 },
  { id: 5, name: "Flyer & Poster Design", category: "graphic", proficiency: 5 },
  { id: 6, name: "Banner Design", category: "graphic", proficiency: 5 },
  { id: 7, name: "Print Design", category: "graphic", proficiency: 5 },
  { id: 8, name: "Photo Editing", category: "graphic", proficiency: 5 },
  { id: 9, name: "Image Retouching", category: "graphic", proficiency: 5 },
  { id: 10, name: "Creative Layout Design", category: "graphic", proficiency: 5 }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 1,
    type: "experience",
    title: "Graphic Designer",
    subtitle: "Freelance & Agency Collaborator",
    date: "2025 - Present (1 Year)",
    details: [
      "Designed social media graphics for businesses to scale engagement up to 150%.",
      "Created highly aesthetic posters, banners, flyers, and promotional print/digital materials.",
      "Prepared print-ready high-resolution artwork and coordinated with printers.",
      "Edited and professionally enhanced raw images using Adobe Photoshop for commercial assets.",
      "Produced intricate vector layouts and scalable corporate logos using Adobe Illustrator."
    ]
  },
  {
    id: 2,
    type: "education",
    title: "Professional Graphic Design Training",
    subtitle: "Completed 6 Months Intensive Program",
    date: "2024",
    details: [
      "Rigorous hands-on curriculum covering visual composition, typography theory, and color grids.",
      "Mastered Adobe Creative Cloud Suite focusing on vector tracing, photo manipulation, and print prep.",
      "Built a diverse portfolio of real-world client briefs including corporate brand identity guides."
    ]
  }
];

export const PROJECTS_DATA = (
  avatarImg: string,
  royalImg: string,
  burgerImg: string,
  natureImg: string,
  rideImg: string,
  letsTalkImg: string = "/src/assets/images/lets_talk_logo_1783452757224.jpg",
  onSocialImg: string = "/src/assets/images/on_social_studio_logo_1783452772681.jpg",
  koolfiImg: string = "/src/assets/images/koolfi_mahal_branding_1783452787565.jpg",
  yummBakeryImg: string = "/src/assets/images/yumm_bakery_ad_1783453063683.jpg",
  modernFurnitureImg: string = "/src/assets/images/modern_furniture_ad_1783453082622.jpg",
  interiorDesignImg: string = "/src/assets/images/interior_design_ad_1783453100241.jpg",
  coffeeShopImg: string = "/src/assets/images/coffee_shop_ad_1783453354203.jpg",
  refinedHiringImg: string = "/src/assets/images/hiring_refinedng_ad_1783453374325.jpg",
  kriukzImg: string = "/src/assets/images/kriukz_snack_logo_1783453579729.jpg",
  tastyFoodImg: string = "/src/assets/images/tasty_food_logo_1783453595606.jpg",
  deliciousKitchenImg: string = "/src/assets/images/delicious_kitchen_logo_1783453610692.jpg",
  chocoRettoImg: string = "/src/assets/images/choco_retto_packaging_1783453829102.jpg",
  ayuLotionImg: string = "/src/assets/images/ayu_lotion_packaging_1783453849418.jpg",
  limeFreshImg: string = "/src/assets/images/lime_fresh_packaging_1783453869167.jpg",
  limonazoJuiceImg: string = "/src/assets/images/limonazo_juice_packaging_1783453882550.jpg"
): Project[] => [
  {
    id: 1,
    title: "Royal Men's Wear Brand Identity",
    category: "logo",
    categoryLabel: "Logo Design",
    description: "High-end luxury brand identity for a premium men's boutique featuring custom crown logomarks and sleek vector assets.",
    image: royalImg,
    tags: ["Logo Design", "Brand Identity", "Illustrator", "Print Collateral"],
    year: "2025",
    details: [
      "Created a pristine vector-based crown logo symbolizing status, heritage, and modern tailored fashion.",
      "Designed the complete brand guidelines including typographic system, matte-black/gold color scheme, and business cards.",
      "Delivered fully responsive scale assets optimized for clothing tags, storefront signs, and social media handles."
    ]
  },
  {
    id: 5,
    title: "Let's Talk Brand Mark",
    category: "logo",
    categoryLabel: "Logo Design",
    description: "Bold, modern conceptual minimalist flat logo designed for discussion forums, podcasts, and digital communication platforms.",
    image: letsTalkImg,
    tags: ["Logo Design", "Brand Identity", "Vector Art", "Illustrator"],
    year: "2026",
    details: [
      "Designed a custom wordmark featuring friendly hand-crafted rounded lettering and an integrated dialogue bubble graphic element.",
      "Crafted the composition with balanced negative space and high-contrast red-and-white colors to ensure legibility.",
      "Constructed vector layouts built entirely on geometric curves for infinite scalability from web headers to large printed signage."
    ]
  },
  {
    id: 6,
    title: "On Social Studio Logo",
    category: "logo",
    categoryLabel: "Logo Design",
    description: "Sleek, highly modern corporate identity designed for a digital marketing and social media consultancy agency.",
    image: onSocialImg,
    tags: ["Logo Design", "Corporate Identity", "Illustrator", "Brand Manual"],
    year: "2026",
    details: [
      "Engineered an abstract talk-bubble typography icon combining 'O' and 'S' curves into an impactful corporate mark.",
      "Implemented an energetic, trust-focused color hierarchy pairing vibrant marigold orange with a deep, luxury teal-green backdrop.",
      "Structured a comprehensive brand manual containing horizontal, vertical, and app icon variants for cross-channel consistency."
    ]
  },
  {
    id: 7,
    title: "Koolfi Mahal Brand Packaging",
    category: "logo",
    categoryLabel: "Logo & Packaging",
    description: "Delectable, retro-inspired brand identity and full retail packaging ecosystem for a premium traditional Kulfi ice cream parlor.",
    image: koolfiImg,
    tags: ["Brand Identity", "Packaging Design", "3D Mockup", "Photoshop"],
    year: "2026",
    details: [
      "Hand-crafted a playful retro dripping wordmark using warm, high-contrast red and butterscotch tones.",
      "Created a complete retail packaging suite including a dripping-pattern coffee cup, take-away bags, box packaging, and corporate stationery.",
      "Assembled highly realistic 3D mockup scenes representing the brand's premium traditional heritage on contemporary materials."
    ]
  },
  {
    id: 2,
    title: "Nature Herbal Product Labeling",
    category: "packaging",
    categoryLabel: "Packaging Design",
    description: "Premium, organic packaging design for natural supplement bottles utilizing earthy green values and clean luxury gold letterings.",
    image: natureImg,
    tags: ["Packaging Design", "Label Design", "Mockup Creation", "Photoshop"],
    year: "2025",
    details: [
      "Formulated a clean, modern label prioritizing organic visual elements, clean herbal geometry, and legibility.",
      "Used golden hot-stamping foil effects to establish the premium positioning of the product on wellness retail shelves.",
      "Crafted full 3D photorealistic mockups showing bottle rotations and lighting conditions for advertising."
    ]
  },
  {
    id: 3,
    title: "Live To Ride Retro Poster",
    category: "poster",
    categoryLabel: "Poster Design",
    description: "Bold grunge graphic design poster celebrating vintage motorcycle culture with textured overlays and handcrafted typography.",
    image: rideImg,
    tags: ["Poster Design", "Vector Art", "Illustrator", "Typographic Layout"],
    year: "2025",
    details: [
      "Composed a vintage distressed layout incorporating detailed vector bike drawings and retro text lines.",
      "Developed a custom amber-yellow color palette with halftone screen textures for a screen-printed effect.",
      "Delivered high-definition print-ready PDFs at standard B2 sizes ready for gallery publishing."
    ]
  },
  {
    id: 4,
    title: "Delicious Burger Campaign",
    category: "social",
    categoryLabel: "Social Media Post",
    description: "High-impact culinary advertisement designed to spark maximum audience appetite, leveraging vibrant highlights and smokey backdrops.",
    image: burgerImg,
    tags: ["Social Media", "Photo Manipulation", "Photoshop", "Ad Campaign"],
    year: "2025",
    details: [
      "Performed advanced image composting, combining high-resolution food assets, melting cheese effects, and motion-blurred ingredients.",
      "Engineered an appetite-inducing color grade with golden highlights, deep smokey shadows, and high contrast contrast.",
      "Designed matching Instagram story layouts, feed posts, and Facebook banner formats with high-converting CTAs."
    ]
  },
  {
    id: 8,
    title: "Yumm! Bakery Cupcake Social Ad",
    category: "social",
    categoryLabel: "Social Media Post",
    description: "Charming, indulgent social media ad design for a premium bakery boutique, showcasing vibrant color palettes and mouthwatering dessert shots.",
    image: yummBakeryImg,
    tags: ["Social Media", "Typography", "Ad Campaign", "Photoshop"],
    year: "2026",
    details: [
      "Curated a playful bold typography structure centered around cream-white shades and rich chocolate-brown canvas styling.",
      "Designed an elegant custom vector banner with organic 'Try Me' badges and detailed customer address layers.",
      "Engineered high-definition visual assets tailored perfectly for Instagram feed standards and mobile screens."
    ]
  },
  {
    id: 9,
    title: "Modern Furniture Promotional Banner",
    category: "social",
    categoryLabel: "Social Media Post",
    description: "Highly structural, minimalist social media promotional layout featuring color-blocked aesthetics and modern product integrations.",
    image: modernFurnitureImg,
    tags: ["Social Media", "Visual Layout", "Color Blocking", "Brand Ad"],
    year: "2026",
    details: [
      "Engineered a dual-color-blocked golden-yellow layout focusing on clean geometric spacing and perfect negative balance.",
      "Combined photorealistic warm furniture assets with subtle typography callouts and a sleek call-to-action button.",
      "Optimized the final image export settings to retain razor-sharp details for web layouts and digital marketing funnels."
    ]
  },
  {
    id: 10,
    title: "Salford & Co. Interior design",
    category: "social",
    categoryLabel: "Social Media Post",
    description: "Sophisticated, high-end vertical campaign poster design for a luxury residential interior architecture firm.",
    image: interiorDesignImg,
    tags: ["Social Media", "Layout Design", "Poster", "Illustrator"],
    year: "2026",
    details: [
      "Structured a warm, chocolate-brown and beige color pathway featuring beautiful modular circular photo frames.",
      "Composed clean typography grids featuring elegant serif headings and high-contrast contact details.",
      "Developed high-resolution vertical layouts optimized for Instagram Stories and Pinterest graphic reels."
    ]
  },
  {
    id: 11,
    title: "Larana Coffee Shop Promo",
    category: "social",
    categoryLabel: "Social Media Post",
    description: "Charming vintage-styled coffee shop advertising flyer featuring structured menu and promotion details.",
    image: coffeeShopImg,
    tags: ["Social Media", "Layout Design", "Typography", "Photoshop"],
    year: "2026",
    details: [
      "Structured a custom diamond-based collage grid overlaying realistic coffee barista photography.",
      "Utilized classic textured parchment backgrounds for an organic and inviting visual mood.",
      "Composed three distinct layout columns for structured menu details and professional contacts."
    ]
  },
  {
    id: 12,
    title: "RefinedNG Corporate Hiring Ad",
    category: "social",
    categoryLabel: "Social Media Post",
    description: "Clean, ultra-modern corporate recruitment ad showcasing high-contrast color theory and minimal styling.",
    image: refinedHiringImg,
    tags: ["Social Media", "Minimalism", "Ad Campaign", "Brand Identity"],
    year: "2026",
    details: [
      "Paired an exquisite emerald-green leather office chair with a pristine light-gray studio backdrop.",
      "Structured prominent custom pill badges indicating job roles for optimal cognitive legibility.",
      "Maintained generous negative space and a precise grid system following modern marketing principles."
    ]
  },
  {
    id: 13,
    title: "Kriukz Wavy Snack Logo",
    category: "logo",
    categoryLabel: "Logo Design",
    description: "Playful, energetic brand logo designed for a popular wavy potato chips snack line, utilizing vibrant color psychology and organic hand-drawn shapes.",
    image: kriukzImg,
    tags: ["Logo Design", "Packaging Art", "Illustrator", "Brand Identity"],
    year: "2026",
    details: [
      "Engineered custom bubbly, friendly wordmark typography outlined in bold black & yellow contrasts.",
      "Incorporated a high-fidelity vector golden potato chip illustration with dynamic liquid-style splashes.",
      "Structured a high-impact red backing badge to guarantee immediate shelf recognition and consumer recall."
    ]
  },
  {
    id: 14,
    title: "TastyFood Brand Identity",
    category: "logo",
    categoryLabel: "Logo Design",
    description: "A fresh, delightful, minimalist brand logo incorporating visual joy and premium, clean modern typography.",
    image: tastyFoodImg,
    tags: ["Logo Design", "Minimalism", "Illustrator", "Corporate Identity"],
    year: "2026",
    details: [
      "Composed clean, balanced sans-serif typography pairing soft appetizing red with executive charcoal black.",
      "Designed an integrated playful smile and sticking tongue vector graphic representing delicious satisfaction.",
      "Optimized the icon guidelines for multipurpose digital app icons, print collateral, and food packaging handles."
    ]
  },
  {
    id: 15,
    title: "Delicious Kitchen Identity",
    category: "logo",
    categoryLabel: "Logo Design",
    description: "Sophisticated corporate logo combining a heart outline with a chef's hat silhouette for a premium catering and gourmet brand.",
    image: deliciousKitchenImg,
    tags: ["Logo Design", "Vector Art", "Illustrator", "Culinary Brand"],
    year: "2026",
    details: [
      "Intertwined a clean, minimalist chef hat silhouette on top of a dynamic flowing black-and-red line-art heart.",
      "Selected and integrated high-end, premium spaced sans-serif typography for high cognitive clarity.",
      "Created light and dark background alternates to guarantee versatility across modern kitchen merchandise and digital screens."
    ]
  },
  {
    id: 16,
    title: "Choco Retto Crispy Snack",
    category: "packaging",
    categoryLabel: "Packaging Design",
    description: "Delectable, chocolatey and energetic retail pouch design for premium chocolate-coated crispy rings.",
    image: chocoRettoImg,
    tags: ["Packaging", "Brand Identity", "Vector Illustration", "Mockup"],
    year: "2026",
    details: [
      "Designed a custom chocolate-brown split package layout with vibrant orange and clean cream-white accents.",
      "Created dynamic liquid chocolate splashes and floating crispy ring assets for a rich, appetite-inducing aesthetic.",
      "Developed complete rear layout templates including ingredients, multi-language instructions, and barcode alignments."
    ]
  },
  {
    id: 17,
    title: "Ayu Natural Lotion Packaging",
    category: "packaging",
    categoryLabel: "Packaging Design",
    description: "Calming, premium botanical bottle packaging and mockup set for a high-end organic hand and body lotion brand.",
    image: ayuLotionImg,
    tags: ["Packaging", "Skincare", "3D Mockup", "Photoshop"],
    year: "2026",
    details: [
      "Engineered elegant white-and-green label structures with botanical brand badges representing centella asiatica ingredients.",
      "Rendered high-end clean cosmetic bottle layouts on modern stone pedestals surrounded by lush organic flora.",
      "Optimized corporate brand elements for retail visibility, web marketing sliders, and high-end magazine ad prints."
    ]
  },
  {
    id: 18,
    title: "Lime Fresh Soda Bottle Label",
    category: "packaging",
    categoryLabel: "Packaging Design",
    description: "High-contrast, carbonated beverage label and bottle mockup highlighting fresh green citrus and dynamic typography.",
    image: limeFreshImg,
    tags: ["Packaging", "Beverage", "Visual Design", "Illustrator"],
    year: "2026",
    details: [
      "Composed a vivid green-and-black contrast wrap-around label featuring bold, stylized italic typography.",
      "Rendered highly realistic water droplets and fresh lime slices to convey crisp, cold, sparkling refreshment.",
      "Aligned back-of-pack details including brand licensing, QR code scanners, and recycling green markers."
    ]
  },
  {
    id: 19,
    title: "Limonazo Premium Citrus Labels",
    category: "packaging",
    categoryLabel: "Packaging Design",
    description: "Sleek, detailed commercial packaging templates for premium lemon and lime juice product cartons.",
    image: limonazoJuiceImg,
    tags: ["Packaging", "Vector Layout", "Nutrition Panel", "Illustrator"],
    year: "2026",
    details: [
      "Engineered highly detailed front-and-back packaging flat templates for Lemon Juice Blend and Lime Juice lines.",
      "Incorporated clear typographic grids featuring structured Nutrition Facts charts and detailed ingredients listings.",
      "Created eye-catching citrus slice patterns with soft, professional gradients representing natural juice purity."
    ]
  }
];
