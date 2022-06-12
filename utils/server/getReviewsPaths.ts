import flatten from 'lodash/flatten';
import times from 'lodash/times';

import { getFiles } from './getFiles';
import { getReviewsFields } from './getReviewsFields';


type GetReviewReturn = {
    params: {
        page: string;
        publisher: string;
    };
}[];

export async function getReviewsPaths(): Promise<GetReviewReturn> {
    const reviewFields = await getReviewsFields();

    const paths = await Promise.all(reviewFields.publishers.map(async (publisher) => {
        const files = await getFiles('reviews', { search: { publisher }, limit: Number.MAX_SAFE_INTEGER });

        return times(files.totalPages, (i) => ({
            params: {
                page: `${i + 1}`,
                publisher,
            },
        }));
    }));

    return flatten(paths);
}
