import { GetStaticPaths, GetStaticProps } from 'next';

import { getNews, getPagesPaths, getTopHeader } from '~/utils/server';

import { LIMIT, Props } from '../index';


export { default } from '../index';


export const getStaticPaths: GetStaticPaths = async () => {
    const path = await getPagesPaths(LIMIT, 'news');

    return {
        paths: path,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<Props, {page: string}> = async ({ params }) => {
    if (!params) return { notFound: true };
    const page = parseInt(params.page, 10);

    const [
        news,
        topHeader,
    ] = await Promise.all([
        getNews({ page, limit: LIMIT }),
        getTopHeader(),
    ]);

    return { props: { news, topHeader } };
};

