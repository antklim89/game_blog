import { IReview } from '~/types';

import { getFile } from './getFile';


export function getReview(slug: string) {
    return getFile<IReview>('reviews', slug);
}
