import { defineCollection, z } from "astro:content";

// Each "work" entry represents a bot or automation we shipped.
// New entries are dropped into src/content/work/ as .md or .mdx.
const work = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    // "bot" | "infra" | "research"
    kind: z.enum(["dashboard", "research", "infra", "bot"]).default("bot"),
    client: z.string().optional(),
    chain: z.string().optional(),
    // URL to the live bot / deployment / artifact for this entry.
    link: z.string().url().optional(),
    // Optional external links shown as secondary buttons on the detail page.
    // All optional — render only the ones that are set.
    project: z.string().url().optional(),   // the project/protocol website
    twitter: z.string().url().optional(),   // the project's X / Twitter
    telegram: z.string().url().optional(),  // the project's Telegram
    discord: z.string().url().optional(),   // the project's Discord
    // Publication date; sort order is desc.
    date: z.coerce.date(),
    // Hide an entry without deleting it.
    draft: z.boolean().default(false),
    // Mini banner shown at the top of the detail page (and as the thumb on
    // the home lead card if set). Expected path: /work-covers/<slug>.png
    // (file lives in public/work-covers/). Recommend 1600x640 or similar
    // 2.5:1 ratio — it renders as a wide strip.
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
  }),
});

export const collections = { work };
