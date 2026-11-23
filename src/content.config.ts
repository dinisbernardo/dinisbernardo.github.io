import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every .md file in src/content/reviews is a review.
// Files whose name starts with "_" (like _template.md) are ignored.
const reviews = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/reviews' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(), // the game's name
      summary: z.string(), // one or two lines with your verdict
      score: z.number().min(0).max(10),
      platform: z.enum(['PC', 'PlayStation', 'Xbox', 'Switch', 'Retro', 'Mobile']),
      date: z.coerce.date(), // date the review was published
      completion: z.string().optional(), // e.g. "100%"
      hours: z.number().optional(), // time played
      cover: image().optional(), // relative path to an image, e.g. ./images/game.jpg
      coverAlt: z.string().optional(),
      pros: z.array(z.string()).default([]),
      cons: z.array(z.string()).default([]),
      draft: z.boolean().default(false), // drafts show in `npm run dev` only
    }),
});

export const collections = { reviews };
