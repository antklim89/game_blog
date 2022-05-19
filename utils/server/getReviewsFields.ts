import type { IReview } from '~/types';
import { ReviewFields } from '~/types/ReviewFields';

import { getFiles } from './getFiles';


export async function getReviewsFields(): Promise<ReviewFields> {
    const reviews = await getFiles<IReview>('reviews');
    return reviews.items.reduce<ReviewFields>((acc, review) => {
        if (!acc.genres.includes(review.genre)) acc.genres.push(review.genre);
        if (!acc.publishers.includes(review.publisher)) acc.publishers.push(review.publisher);
        return acc;
    }, {
        genres: [],
        publishers: [],
    });
}
