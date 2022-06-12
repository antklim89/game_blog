import { GetStaticPaths, GetStaticProps } from 'next';

import { LIMIT, Props } from '~/pages/reviews';
import { getReviews, getReviewsFields, getReviewsPaths } from '~/utils/server';


export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getReviewsPaths();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<Props, {page: string, publisher: string}> = async ({ params }) => {
    if (!params) return { notFound: true };
    const { publisher, page } = params;

    const reviews = await getReviews({ page: parseInt(page, 10), limit: LIMIT, search: { publisher } });
    const reviewFields = await getReviewsFields();

    return { props: { reviews, reviewFields } };
};

export { default } from '~/pages/reviews';
