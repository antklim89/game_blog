import Showdown from 'showdown';

import { IReview } from '~/types';

import { getFiles, GetFilesOptions } from './getFiles';


export async function getReviews(opts?: GetFilesOptions) {
    const reviews = await getFiles<IReview>('reviews', opts);

    reviews.items.forEach((review) => {
        review.body = new Showdown.Converter().makeHtml(review.body);
    });

    return reviews;
}
