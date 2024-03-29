import { GetStaticPaths, GetStaticProps } from 'next';

import { getReviews, getPagesPaths, getReviewsFields, getTopHeader } from '~/utils/server';

import { LIMIT, Props } from '../index';


export { default } from '../index';


export const getStaticPaths: GetStaticPaths = async () => {
    const path = await getPagesPaths(LIMIT, 'reviews');

    return {
        paths: path,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<Props, {page: string}> = async ({ params }) => {
    if (!params) return { notFound: true };
    const page = parseInt(params.page, 10);
    const [
        reviews,
        reviewFields,
        topHeader,
    ] = await Promise.all([
        getReviews({ page, limit: LIMIT }),
        getReviewsFields(),
        getTopHeader(),
    ]);

    return { props: { reviews, reviewFields, topHeader } };
};

