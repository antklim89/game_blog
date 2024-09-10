import type { IReview } from '~/types';
import { getFile } from './getFile';


export async function getReview(slug: string) {
  const review = await getFile<IReview>('reviews', slug);

  return review;
}
