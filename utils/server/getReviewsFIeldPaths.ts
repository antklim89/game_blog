import flatten from 'lodash/flattenDeep';
import times from 'lodash/times';

import { reviewFieldFilterNames } from '~/constants';

import { getFiles } from './getFiles';
import { getReviewsFields } from './getReviewsFields';


export type ReviewsFilterFieldsParams = {
    page: string;
    fieldValue: string;
    fieldName: string;
}

type ReviewsFilterPaths = {
    params: ReviewsFilterFieldsParams;
}[];


export async function getReviewsFilterPaths(limit: number = Number.MAX_SAFE_INTEGER) {
    const reviewFields = await getReviewsFields();

    const paths: ReviewsFilterPaths = [];

    await Promise.all(reviewFieldFilterNames.map(async (fieldName) => {

        return Promise.all(reviewFields[fieldName].map(async (fieldValue) => {
            const files = await getFiles('reviews', { search: { [fieldName]: fieldValue }, limit });

            return times(files.totalPages, (i) => {
                paths.push({
                    params: {
                        page: `${i + 1}`,
                        fieldValue,
                        fieldName,
                    },
                });
            });
        }));
    }));

    return flatten(paths);
}
