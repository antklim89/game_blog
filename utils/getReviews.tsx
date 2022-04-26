import { IReview } from '~/types';

import { getFiles } from './getFiles';


export function getReviews() {
    return getFiles<IReview>('reviews');
}
