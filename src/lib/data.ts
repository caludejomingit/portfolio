export const links = {
  email: "jomyattayil@gmail.com",
  linkedin: "https://www.linkedin.com/in/jomingeorgeattayil",
  github: "https://github.com/caludejomingit",
  instagram: "https://instagram.com/thinkwithjomin",
  amazonBook: "https://amzn.in/d/045FHkXp",
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  illustration: "goldlocker" | "nilavara" | "orma" | "panamo" | "carmelia" | "pipeline";
  href?: string;
  category: "product" | "data-engineering";
};

export const projects: Project[] = [
  {
    slug: "goldlocker",
    name: "Goldlocker",
    tagline: "Live 22K gold rate tracker",
    description:
      "A mobile-first web app that tracks live 22K gold rates, built for quick daily checks with a clean, glanceable interface.",
    tags: ["Next.js", "TypeScript", "Live Data"],
    illustration: "goldlocker",
    category: "product",
  },
  {
    slug: "nilavara",
    name: "Nilavara",
    tagline: "Household inventory, simplified",
    description:
      "A household inventory app for tracking what's in stock at home — built with Expo and React Native, backed by Supabase.",
    tags: ["Expo", "React Native", "Supabase"],
    illustration: "nilavara",
    category: "product",
  },
  {
    slug: "orma",
    name: "Orma",
    tagline: "A personal assistant that listens",
    description:
      "A personal assistant app combining natural language understanding with voice interaction to help manage daily tasks.",
    tags: ["NLU", "Voice", "Mobile"],
    illustration: "orma",
    category: "product",
  },
  {
    slug: "panamo",
    name: "Panamo",
    tagline: "Budgeting, drawn like blueprints",
    description:
      "A budgeting app designed around an architectural blueprint metaphor — structuring finances the way you'd structure a building.",
    tags: ["Product Design", "Budgeting", "Mobile"],
    illustration: "panamo",
    category: "product",
  },
  {
    slug: "carmelia-travels",
    name: "Carmelia Travels",
    tagline: "A travel agency site built to convert",
    description:
      "A Next.js site for a travel agency, designed around a WhatsApp-first conversion flow to turn visitors into direct enquiries.",
    tags: ["Next.js", "Conversion Design", "WhatsApp API"],
    illustration: "carmelia",
    category: "product",
  },
  {
    slug: "azure-data-pipeline",
    name: "Azure Data Pipeline",
    tagline: "Event Grid → Functions → Power BI",
    description:
      "A data engineering portfolio piece: an event-driven pipeline using Azure Event Grid and Functions landing into ADLS Gen2 with a medallion architecture, surfaced in Power BI.",
    tags: ["Azure Functions", "Event Grid", "ADLS Gen2", "Power BI"],
    illustration: "pipeline",
    category: "data-engineering",
  },
];

export const skillGroups = [
  {
    label: "Data",
    skills: [
      "SQL",
      "Python",
      "PySpark",
      "Databricks",
      "Azure Functions",
      "Event Grid",
      "ADLS Gen2",
      "Power BI",
      "Alteryx",
      "Excel",
    ],
  },
  {
    label: "Dev",
    skills: ["Next.js", "React Native", "Expo", "TypeScript", "Supabase"],
  },
  {
    label: "Design",
    skills: ["UI/UX", "Graphic Design", "Brand Systems"],
  },
];
