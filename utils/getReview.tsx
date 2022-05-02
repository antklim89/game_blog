import Showdown from 'showdown';

import { IReview } from '~/types';

import { getFile } from './getFile';


export async function getReview(slug: string) {
    const review = await getFile<IReview>('reviews', slug);

    review.body = new Showdown.Converter().makeHtml(review.body);

    return review;
}
