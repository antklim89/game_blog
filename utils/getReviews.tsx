import Showdown from 'showdown';

import { IReview } from '~/types';

import { getFiles } from './getFiles';


export async function getReviews() {
    const reviews = await getFiles<IReview>('reviews');

    reviews.forEach((review) => {
        review.body = new Showdown.Converter().makeHtml(review.body);
    });

    return reviews;
}
