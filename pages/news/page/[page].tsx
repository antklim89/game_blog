import { GetStaticPaths, GetStaticProps } from 'next';

import { getNews, getNewsPagesPaths } from '~/utils/server';

import { LIMIT, Props } from '../index';


export { default } from '../index';


export const getStaticPaths: GetStaticPaths = async () => {
    const path = await getNewsPagesPaths(LIMIT);

    return {
        paths: path,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<Props, {page: string}> = async ({ params }) => {
    if (!params) return { notFound: true };
    const page = parseInt(params.page, 10);

    const news = await getNews({ page, limit: LIMIT });

    return { props: { news } };
};

