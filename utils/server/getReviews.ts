import type { IReview } from '~/types';
import { getFiles, type GetFilesOptions } from './getFiles';


export async function getReviews(opts?: GetFilesOptions) {
  const reviews = await getFiles<IReview>('reviews', opts);

  return reviews;
}
