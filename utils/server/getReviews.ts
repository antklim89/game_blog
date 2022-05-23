import { IReview } from '~/types';

import { getFiles, GetFilesOptions } from './getFiles';


export async function getReviews(opts?: GetFilesOptions) {
    const reviews = await getFiles<IReview>('reviews', opts);

    return reviews;
}
