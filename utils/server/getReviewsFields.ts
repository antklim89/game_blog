import type { IReview } from '~/types';
import type { ReviewFieldsList } from '~/types/ReviewFields';
import { getFiles } from './getFiles';


export async function getReviewsFields(): Promise<ReviewFieldsList> {
  const reviews = await getFiles<IReview>('reviews', { limit: Number.MAX_SAFE_INTEGER });

  return reviews.items.reduce<ReviewFieldsList>((acc, review) => {
    if (!acc.genre.includes(review.genre)) acc.genre.push(review.genre);
    if (!acc.publisher.includes(review.publisher)) acc.publisher.push(review.publisher);
    if (!acc.developer.includes(review.developer)) acc.developer.push(review.developer);
    return acc;
  }, {
    genre: [],
    publisher: [],
    developer: [],
  });
}
