import { IReview } from '~/types';

import { getFiles } from './getFiles';


export async function getReviews() {
    const reviews = await getFiles<IReview>('reviews');

    return reviews;
}
