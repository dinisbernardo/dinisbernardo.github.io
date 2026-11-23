import { getCollection, type CollectionEntry } from 'astro:content';

export type Review = CollectionEntry<'reviews'>;

/** All reviews, newest first. Drafts only appear while running `npm run dev`. */
export async function getReviews(): Promise<Review[]> {
  const all = await getCollection('reviews', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
}

export function formatScore(score: number): string {
  return Number.isInteger(score) ? String(score) : score.toFixed(1);
}
