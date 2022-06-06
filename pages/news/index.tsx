import Container from '@mui/material/Container';
import type { GetServerSideProps, NextPage } from 'next';

import Pagination from '~/components/Pagination';
import Seo from '~/components/Seo';
import Layout from '~/layouts/Layout';
import NewsList from '~/layouts/NewsList';
import topImage from '~/public/adam-mills-SgYayrin5HY-unsplash.jpg';
import { INews, GetFilesResult } from '~/types';
import { getNews } from '~/utils/server';


export const LIMIT = 10;

export interface Props {
    news: GetFilesResult<INews>
}

const NewsPage: NextPage<Props> = ({ news }) => {
    return (
        <Layout image={topImage} title="News">
            <Seo title="News" />
            <Container>
                <Pagination path="/news" totalPages={news.totalPages} />
                <NewsList news={news.items} />
                <Pagination path="/news" totalPages={news.totalPages} />
            </Container>
        </Layout>
    );
};

export default NewsPage;


export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
    const page = typeof query.page === 'string' ? parseInt(query.page, 10) : 1;
    const news = await getNews({ limit: LIMIT, page });

    return { props: { news } };
};
