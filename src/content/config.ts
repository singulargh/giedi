import { defineCollection, z } from "astro:content";

// Each "work" entry is either a dashboard we shipped or a piece of research/
// writing about an interesting on-chain project. New entries are dropped into
// src/content/work/ as .md or .mdx and show up in the Work list automatically.
const work = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    // "dashboard" | "research" | "infra"
    kind: z.enum(["dashboard", "research", "infra"]).default("dashboard"),
    client: z.string().optional(),
    chain: z.string().optional(),
    // URL to the live Dune dashboard / report / repo if we have one.
    link: z.string().url().optional(),
    // Publication date; sort order is desc.
    date: z.coerce.date(),
    // Hide an entry without deleting it.
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { work };
