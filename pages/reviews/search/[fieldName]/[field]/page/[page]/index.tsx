import { GetStaticPaths, GetStaticProps } from 'next';

import { LIMIT, Props } from '~/pages/reviews';
import { getReviews, getReviewsFields, getReviewsFilterPaths, ReviewsFilterFieldsParams } from '~/utils/server';


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getReviewsFilterPaths(LIMIT);

    return {
        paths,
        fallback: false,
    };
};


export const getStaticProps: GetStaticProps<Props, ReviewsFilterFieldsParams> = async ({ params }) => {
    if (!params) return { notFound: true };
    const { fieldValue, fieldName, page } = params;

    const reviews = await getReviews({ page: parseInt(page, 10), limit: LIMIT, search: { [fieldName]: fieldValue } });
    const reviewFields = await getReviewsFields();

    return { props: { reviews, reviewFields } };
};

export { default } from '~/pages/reviews';
