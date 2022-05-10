import Container from '@mui/material/Container';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Pagination from '~/components/Pagination';
import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';
import NewsList from '~/layouts/NewsList';
import { GetFilesResult, INews } from '~/types';
import { getNews, getNewsPagesPaths } from '~/utils/server';


const LIMIT = 5;

interface Props {
    news: GetFilesResult<INews>;
}


const ReviewPage: NextPage<Props> = ({ news }) => {
    return (
        <Layout>
            <Seo title="News" />
            <Container>
                <Pagination totalPages={news.totalPages} />
                <NewsList news={news.items} />
            </Container>
        </Layout>
    );
};

export default ReviewPage;


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


