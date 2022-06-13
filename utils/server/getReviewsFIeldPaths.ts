import flatten from 'lodash/flatten';
import times from 'lodash/times';

import { ReviewFields } from '~/types';

import { getFiles } from './getFiles';
import { getReviewsFields } from './getReviewsFields';


type Fields = keyof ReviewFields;

type GetReviewsPathsByPublisher = {
    params: {
        page: string;
        publisher: string;
    };
}[];

type GetReviewsPathsByGenre = {
    params: {
        page: string;
        genre: string;
    };
}[];


async function getReviewsPathsBase(
    field: Fields,
    searchField: string,
    limit: number = Number.MAX_SAFE_INTEGER,
): Promise<unknown> {
    const reviewFields = await getReviewsFields();

    const paths = await Promise.all(reviewFields[field].map(async (item) => {
        const files = await getFiles('reviews', { search: { [searchField]: item }, limit });

        return times(files.totalPages, (i) => ({ params: { page: `${i + 1}`, [searchField]: item } }));
    }));

    return flatten(paths);
}


export async function getReviewsPathsByPublisher(limit: number): Promise<GetReviewsPathsByPublisher> {
    return getReviewsPathsBase('publishers', 'publisher', limit) as Promise<GetReviewsPathsByPublisher>;
}

export async function getReviewsPathsByGenre(limit: number): Promise<GetReviewsPathsByGenre> {
    return getReviewsPathsBase('genres', 'genre', limit) as Promise<GetReviewsPathsByGenre>;
}
